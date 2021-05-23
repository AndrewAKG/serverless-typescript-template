import { Injector } from '@sailplane/injector';

import {
  RegisterUserParams,
  UserLoginResponse,
  UserRegisterResponse
} from '../types/auth.types';
import UsersRepo from '../repositories/user.repo';

/**
 * Interface for AuthService
 */
export interface IAuthService {
  registerUser(params: RegisterUserParams): Promise<UserRegisterResponse>;
  loginUser(params: RegisterUserParams): Promise<UserLoginResponse>;
}

/**
 * The actual class that contains all the business logic related to countries.
 * Handlers sanitize/validate(basic) and sends params to this class methods.
 */
export default class AuthService implements IAuthService {
  private usersRepo: UsersRepo = Injector.get(UsersRepo)!;

  public async registerUser(
    params: RegisterUserParams
  ): Promise<UserRegisterResponse> {
    try {
      console.log('IN REGISTER');
      //   await this.usersRepo.create(data);
      return {
        message: 'In register success'
      };
    } catch (e) {
      throw e;
    }
  }

  public async loginUser(
    params: RegisterUserParams
  ): Promise<UserLoginResponse> {
    try {
      //   const response = await this.countryRepository.getById(id);
      //   return response.Item;
      console.log('IN LOGIN');
      return {
        token: 'token_success'
      };
    } catch (e) {
      throw e;
    }
  }
}
