import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'api_token';

  constructor(private http: HttpClient) {
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // isAuthenticated(): Observable<Boolean> {
  //   return this.http.get<AuthVerifyResponse>('/api/auth/verify-token').pipe(
  //     map((response) => response.valid),
  //     catchError(() => {
  //       this.removeToken();
  //       return [false];
  //     })
  //   );
  // }

}
