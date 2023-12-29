import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/hello', (req, res, next) => {
	return res.status(200).json({
		message: 'Hello there',
	});
});

app.use((req, res, next) => {
	res.json({ error: 'Resource not found' });
});

export default app;
