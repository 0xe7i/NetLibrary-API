import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
	.then(async () => {
		console.log('Connected to database 🗄️🗄️🗄️');
	})
	.catch((err) => console.error('Error connecting to db', err));

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT} 🎉🎉🎉`);
});
