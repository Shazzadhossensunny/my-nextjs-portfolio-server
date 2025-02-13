import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String],
      default: [],
    },
    coreFeatures: {
      type: [String],
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    links: {
      live: {
        type: String,
        required: true,
      },
      github: {
        frontend: {
          type: String,
          required: true,
        },
        backend: {
          type: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);
