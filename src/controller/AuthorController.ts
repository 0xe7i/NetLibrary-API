import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Author } from '../entities/Author';
import { ResponseUtil } from '../utils/Response';

export class AuthorsController {
	// get all authors
	async getAuthors(req: Request, res: Response) {
		const authors = await AppDataSource.getRepository(Author).find();

		return ResponseUtil.sendResponse(res, 'Fetched all authors', authors);
	}

	// get an author
	async getAuthor(req: Request, res: Response) {
		const { id } = req.params;
		const author = await AppDataSource.getRepository(Author).findOneByOrFail({
			id: Number(id),
		});

		return ResponseUtil.sendResponse<Author>(
			res,
			'Fetched author successfuly',
			author
		);
	}
}
