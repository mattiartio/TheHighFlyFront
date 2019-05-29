import {Role} from './role';

export class User {
  id: number;
  username: string;
  password: string;
  nome: string;
  cognome: string;
  company: string;
  email: string;
  //cambiare no array ma singolo valore?
  roles: Role[];
  //giusto?
  role: Role;

  constructor() {
    this.id = 0;
    this.roles = new Array<Role>();
  }
  isAdmin(): boolean {
    if(this.role.type === 'admin')
    {
      return true;
      //...
    }
    return false;
  }
}
