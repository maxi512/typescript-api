import 'reflect-metadata';
import { container } from 'tsyringe';
import express from 'express';
import UserRoutes from './routes/users';
import { connect } from 'mongoose';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3010;

app.get('/', (_req, res) => {
	res.send('Hello World!');
});

run().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});

const userRouter = container.resolve(UserRoutes);

app.use('/users', userRouter.router);


async function run() {
  await connect('mongodb+srv://admin:admin@cluster0.3lfxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
} 