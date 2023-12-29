import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import authorsRoute from './routes/authors';

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

export default app;
