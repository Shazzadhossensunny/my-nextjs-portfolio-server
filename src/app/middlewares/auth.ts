// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import config from '../config';

// // Define types
// interface JWTPayload {
//   sub?: string;
//   email?: string;
//   name?: string;
//   iat?: number;
//   exp?: number;
//   jti?: string;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: JWTPayload;
//     }
//   }
// }

// const auth = (req: Request, res: Response, next: NextFunction): void => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       res.status(401).json({
//         success: false,
//         message: 'No authorization header found',
//       });
//       return;
//     }

//     if (!authHeader.startsWith('Bearer ')) {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid authorization format',
//       });
//       return;
//     }

//     const token = authHeader.split(' ')[1];

//     if (!config.nextauth_secret) {
//       res.status(500).json({
//         success: false,
//         message: 'Server configuration error',
//       });
//       return;
//     }

//     const decoded = jwt.verify(token, config.nextauth_secret) as JWTPayload;

//     if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
//       res.status(401).json({
//         success: false,
//         message: 'Token has expired',
//       });
//       return;
//     }

//     req.user = decoded;
//     next();
//   } catch (error) {
//     if (error instanceof jwt.JsonWebTokenError) {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid token',
//       });
//       return;
//     }

//     res.status(500).json({
//       success: false,
//       message: 'Internal server error during authentication',
//     });
//   }
// };

// export default auth;
