import { Injector } from '@sailplane/injector';

import Repository from './repo';

/**
 * The schema definition. In other word,
 * A Document of the countries table contains following fields.
 */
export interface UserDocument {
  email: string;
  password: string;
}

/**
 * Country repository. In the constructor we pass the table name to the
 * parent constructor.
 *
 */
export default class UsersRepo extends Repository<UserDocument> {
  constructor() {
    super(process.env.USERS_TABLE || 'users-dev'); // Passing table name
  }
}
Injector.register(UsersRepo);
