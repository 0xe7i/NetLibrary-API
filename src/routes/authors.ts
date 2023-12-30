import express from 'express';
import { AuthorsController } from '../controller/AuthorController';
import { ErrorHandler } from '../utils/ErrorHandler';
const router = express.Router();

// destructure the AuthorsController class
const authorsController = new AuthorsController();

// get all authors
router.get('/', ErrorHandler.handleErrors(authorsController.getAuthors));

// get a single author
router.get('/:id', ErrorHandler.handleErrors(authorsController.getAuthor));

export default router;
