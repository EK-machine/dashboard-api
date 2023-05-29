import { injectable } from 'inversify';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserSevice } from './user.service.interface';
import { UserLoginDto } from './dto/user-login.dto';

@injectable()
export class UserService implements IUserSevice {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
	}
	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
