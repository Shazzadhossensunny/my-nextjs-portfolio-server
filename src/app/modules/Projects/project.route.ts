import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createProjectValidationSchema,
  updateProjectValidationSchema,
} from './project.validation';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createProjectValidationSchema),
  ProjectControllers.createProject
);
router.get('/:id', ProjectControllers.getProjectById);
router.patch(
  '/:id',
  validateRequest(updateProjectValidationSchema),
  ProjectControllers.updateProjectById
);
router.delete('/:id', ProjectControllers.deleteProjectById);
router.get('/', ProjectControllers.getAllProject);

export const ProjectRoutes = router;
