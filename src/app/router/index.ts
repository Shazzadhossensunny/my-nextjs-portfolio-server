import { Router } from 'express';
import { ProjectRoutes } from '../modules/Projects/project.route';
import { BlogRoutes } from '../modules/Blogs/blog.route';
import { MessageRoutes } from '../modules/Message/message.route';

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
  {
    path: '/message',
    route: MessageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
