import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  login(email: string, password: string): Observable<boolean> {
    if (email === 'test@gmail.com' && password === 'test@123') {
      this.isAuthenticated.next(true);
      this.user.next(email);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.isAuthenticated.next(false);
    this.user.next(null);
  }
}
