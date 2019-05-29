import {Role} from './role';

export class User {
  username: string;
  password: string;
  nome: string;
  cognome: string;
  company: string;
  email: string;
  role: string;

  constructor() {
  }
  isAdmin(): boolean {
    if(this.role === 'admin')
    {
      return true;
      //...
    }
    return false;
  }
}
