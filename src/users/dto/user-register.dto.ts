import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'wrong email' })
	email: string;

	@IsString({ message: 'set the password' })
	password: string;

	@IsString({ message: 'set name' })
	name: string;
}
