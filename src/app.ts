/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

// app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(
  cors({
    origin: ['https://my-nextjs-portfolio-murex.vercel.app'],
    credentials: true,
  })
);

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

export default app;
