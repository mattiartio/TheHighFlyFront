import {Role} from './role';

export class User {
  id: number;
  username: string;
  password: string;
  nome: string;
  cognome: string;
  company: string;
  email: string;
  roles: Role[];

  constructor() {
    this.id = 0;
    this.roles = new Array<Role>();
  }

}
