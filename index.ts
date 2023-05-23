import express, {Request, Response, NextFunction} from 'express';
import { userRouter } from './users/users';

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log(`Time is ${Date.now()}`);
    next();
});

app.get('/hello', (req, res) => {
    throw new Error('It\'s the inner error');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});