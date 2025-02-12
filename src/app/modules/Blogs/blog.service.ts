import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

// Function to calculate read time based on content
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const createBlogIntoDB = async (payload: TBlog) => {
  if (payload.content) {
    payload.readTime = calculateReadTime(payload.content);
  }
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
