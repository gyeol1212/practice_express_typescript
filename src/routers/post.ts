import express from 'express';
import Post, { IPost } from '../models/post';

const router = express.Router();

router.get('/posts', async (_, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

router.get(
  '/posts/:id',
  async (req, res): Promise<express.Response> => {
    const { id } = req.params;

    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).send({ error: 'Not Found!' });
      }

      return res.send(post);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
);

router.post(
  '/posts',
  async (req, res): Promise<express.Response> => {
    const { body } = req;

    const post: IPost = new Post({
      title: body.title,
      author: body.author,
      password: body.password
    });

    try {
      await post.save();
      return res.status(201).send(post);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
);

router.patch(
  '/posts/:id',
  async (req, res): Promise<express.Response> => {
    const {
      params: { id },
      body
    } = req;

    try {
      const post = Post.findByIdAndUpdate(id, body);
      if (!post) {
        return res.status(404).send({ error: 'Not Found!' });
      }

      return res.send(post);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
);

router.delete(
  '/posts/:id',
  async (req, res): Promise<express.Response> => {
    const { id } = req.params;

    try {
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) {
        return res.status(404).send({ error: 'Not Found!' });
      }
      return res.send(deletedPost);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
);

export default router;
