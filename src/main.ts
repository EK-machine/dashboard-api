import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';
import { UserService } from './users/user.service';
import { IUserSevice } from './users/user.service.interface';
import { IUserController } from './users/users.controller.interface';
import { IConfigService } from './config/config.service.interface';
import { ConfigService } from './config/config.service';

export interface IBootstrapReturnType {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<ExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserSevice>(TYPES.UserService).to(UserService);
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturnType {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
