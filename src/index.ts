import 'reflect-metadata'
import { container } from 'tsyringe';
import express from 'express';
import UserRoutes from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
  console.log('The application is listening on port 3000!');
});

const userRouter = container.resolve(UserRoutes);

app.use('/users', userRouter.router);
