import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>('Blog', blogSchema);
