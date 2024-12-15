import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {SkipAuth} from "./Interceptor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<string> {
    const params = {
      username: username,
      password: password
    }
    return this.http.post<string>("/api/user/login", params, {
      context: new HttpContext().set(SkipAuth, true),
      responseType: 'text' as 'json'
    });
  }

  register(username: string, email: string, password: string): Observable<string> {
    const params = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post<string>("/api/user", params, {
      context: new HttpContext().set(SkipAuth, true),
      responseType: 'text' as 'json'
    });
  }
}
