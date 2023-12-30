import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import authorsRoute from './routes/authors';
import { EntityNotFoundError } from 'typeorm';
import { ResponseUtil } from './utils/Response';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

// routes
app.use('/api/authors', authorsRoute);

app.get('/api/health', (req, res, next) => {
	return res.status(200).json({
		message: 'Server is active.',
	});
});

app.use((req, res, next) => {
	res.status(404).json({ error: 'Resource not found' });
});

// define a middleware to handle errors (catch)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof EntityNotFoundError) {
		return ResponseUtil.sendError(res, 'Data not found', 404, err.message);
	}

	return res.status(500).json({
		success: false,
		message: 'Oops! Something went wrong',
	});
});

export default app;
