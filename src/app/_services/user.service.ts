import {Injectable} from '@angular/core';
import {User} from '../_model/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService extends BaseApiService {
  users: User[];
  constructor(private http: HttpClient) {
    super();
    this.users = Data.USERS;
  }

}
