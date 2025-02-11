import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
    liveLink: { type: String, required: true },
    githubLink: { type: String, required: true },
    details: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);
