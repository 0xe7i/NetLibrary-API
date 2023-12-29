// The entity is just like a model in mongoose
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AUTHORS } from '../constants/DBTable';

// AUTHORS the name of the table
@Entity(AUTHORS)
export class Author {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: true })
	bio: string;

	@Column({ nullable: true })
	image: string;
}
