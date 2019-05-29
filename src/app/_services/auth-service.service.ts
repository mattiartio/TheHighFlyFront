import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from './base-api-service.service';
import {ResponseMessage} from '../_model/responseMessage';

@Injectable()
export class AuthService extends BaseApiService {
    constructor(private http: HttpClient) {
      super(http);
  }
  login(username: string, password: string): Observable<boolean> {
    let sessionuser: User;
    sessionuser = new User();
    const auth = new Observable<boolean>(
      (observer) => {
        const url = this.buildRemoteRestUrl('api/login/');
        sessionuser.username = username;
        sessionuser.password = password;
        this.http.post(url, sessionuser).subscribe(
          response => {
            if (this.validation(response as ResponseMessage)) {
              //sessionuser = (response[0] as User); // sessionuser = (<User>response[0]);
              console.log('loggato');
              // salvataggio dell'utente loggato
              this.storeSessionUser(sessionuser);
              // sblocco l'observable con OK
              observer.next(true);
              observer.complete();
            } else {
              alert('' + response['responseStatus'] );
              console.log('non loggato');
              // Sblocco dell'observable con KO
              observer.next(false);
              observer.complete();
            }
          }
        );
      }
    );
    return auth;
  }

  private storeSessionUser(loggedOne: User) {
    localStorage.setItem('currentUser', JSON.stringify(loggedOne));
  }
  public getLoggedUserFromSessionStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}


