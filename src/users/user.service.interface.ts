import { Response, Request, NextFunction } from 'express';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { UserLoginDto } from './dto/user-login.dto';

export interface IUserSevice {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
