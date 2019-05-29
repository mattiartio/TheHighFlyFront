import {Role} from './role';

export class User {
  id: number;
  username: string;
  password: string;
  nome: string;
  cognome: string;
  company: string;
  email: string;
  token: string;
  role: Role;

  constructor() {
  }

  isAdmin(): boolean {
    if (this.role.type === 'admin') {
      return true;
    }
    return false;
  }
}
