import 'reflect-metadata';
import { container } from 'tsyringe';
import express from 'express';
import db from './db';
import UserRoutes from './routes/users';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.get('/', (_req, res) => {
	res.send('Hello World!!!!!!!!!!');
});

db.connectDB();

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!!!`);
});

const userRouter = container.resolve(UserRoutes);

app.use('/users', userRouter.router);

export default app;