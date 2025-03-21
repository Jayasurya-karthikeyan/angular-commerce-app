import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectAuthUsername } from '../store/auth/auth.selectors';
import { AuthService } from '../store/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    // private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    // return this.store.select(selectAuthUsername).pipe(
    //   map((username) => {
    //     if (username) {
    //       return true;
    //     }
    //     this.router.navigate(['/auth/login']);
    //     return false;
    //   })
    // );
    return this.authService.isAuthenticated$.pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  }
}
