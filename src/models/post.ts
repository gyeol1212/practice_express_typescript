import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  title: string;
  author: string;
  password: string;
  createdAt: Date;
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false
  }
});
// .pre('save', function(next) {
//   console.log(this)
//   if (this.createdAt) {
//     this.createdAt = new Date();
//   }
//   next();
//   // return this;
// });

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
