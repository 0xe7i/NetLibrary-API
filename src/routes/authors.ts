import express from 'express';
const router = express.Router();

// get all authors
router.get('/', AuthorsController.getAuthors);
