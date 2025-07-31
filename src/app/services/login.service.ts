import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 httpClient = inject(HttpClient);

   public login(userName: string, password: string): Observable<User> {
     return this.httpClient.post<User>(
       'http://localhost:9000/api/login',
       {email: userName, password: password}
     );
   }
}
