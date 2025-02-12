import { Router } from 'express';
import { ProjectRoutes } from '../modules/Projects/project.route';
import { BlogRoutes } from '../modules/Blogs/blog.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
