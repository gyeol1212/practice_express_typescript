import express from 'express';
import mongoose from './db/mongoose';

import postRouter from './routers/post';

mongoose();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(postRouter);

app.listen(
  port,
  (): void => {
    console.log(`Server is up on port ${port}`);
  }
);
