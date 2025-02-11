import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsIntoDb = async () => {
  const result = await Project.find();
  return result;
};

const getProjectById = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsIntoDb,
  getProjectById,
  updateProject,
  deleteProject,
};
