import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {BaseApiService} from './base-api-service.service';

@Injectable()
export class AuthService extends BaseApiService {
    constructor(private http: HttpClient) {
      super();
  }
  login(username: string, password: string): Observable<boolean> {
    let sessionuser: User = null;
    const auth = new Observable<boolean>(
      (observer) => {
        const url = this.buildRemoteRestUrl('users?username=' + username + '&password=' + password);
        this.http.get(url).subscribe(
          response => {
            if (response[0]) {
              sessionuser = (response[0] as User); // sessionuser = (<User>response[0]);
              console.log('loggato');
              // salvataggio dell'utente loggato
              this.storeSessionUser(sessionuser);
              // sblocco l'observable con OK
              observer.next(true);
              observer.complete();
            } else {
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
}


