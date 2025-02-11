import { Router } from 'express';
import { ProjectRoutes } from '../modules/Projects/project.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/project',
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
