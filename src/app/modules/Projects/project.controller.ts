import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsynce';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is created successfully',
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsIntoDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project are retrieved successfully',
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjectById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is retrieved successfully',
    data: result,
  });
});

const updateProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProject(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is retrieved successfully',
    data: result,
  });
});
const deleteProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProject(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is deleted successfully',
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
