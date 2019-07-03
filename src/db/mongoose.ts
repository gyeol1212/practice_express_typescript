import mongoose from 'mongoose';

const onMongoose = (): void => {
  mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  });
};

export default onMongoose;
