import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from './blog.validation';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/',

  validateRequest(createBlogValidationSchema),
  BlogControllers.createBlog
);

router.get('/:idOrSlug', BlogControllers.getBlogByIdOrSlug);
router.patch(
  '/:id',

  validateRequest(updateBlogValidationSchema),
  BlogControllers.updateBlog
);
router.delete('/:id', BlogControllers.deleteBlogById);
router.get('/', BlogControllers.getAllBlogs);

export const BlogRoutes = router;
