import slugify from 'slugify';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Generates a unique slug if the same slug already exists in the database.
 */
const generateUniqueSlug = async (title: string): Promise<string> => {
  let slug = slugify(title, { lower: true, strict: true });
  let existingBlog = await Blog.findOne({ slug });

  // If slug exists, append a number to make it unique
  let count = 1;
  while (existingBlog) {
    slug = `${slug}-${count}`;
    existingBlog = await Blog.findOne({ slug });
    count++;
  }

  return slug;
};

const createBlogIntoDB = async (payload: TBlog) => {
  // Generate a unique slug
  payload.slug = await generateUniqueSlug(payload.title);

  // Calculate read time if content is provided
  if (payload.content) {
    payload.readTime = calculateReadTime(payload.content);
  }

  // Save the blog post
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogsIntoDb = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogByIdOrSlug = async (idOrSlug: string) => {
  const result = await Blog.findOne({
    $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
  });
  return result;
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  if (payload.content) {
    payload.readTime = calculateReadTime(payload.content);
  }
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsIntoDb,
  getBlogByIdOrSlug,
  updateBlog,
  deleteBlog,
};
