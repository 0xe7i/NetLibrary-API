import express from 'express';
import { AuthorsController } from '../controller/AuthorController';
const router = express.Router();

// destructure the AuthorsController class
const authorsController = new AuthorsController();

// get all authors
router.get('/', authorsController.getAuthors);

export default router;
