import {Injectable} from '@angular/core';
import {User} from '../_model/user';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from './base-api-service.service';

@Injectable()
export class UserService extends BaseApiService {
  users: User[];

  constructor(private http: HttpClient) {
    super(http);
  }

  getUsers() {
    const url = this.buildRemoteRestUrl('users');
    return this.http.get(url);
  }

  createUser(user: User) {
    this.users.splice(0, 0, user);
  }
}
