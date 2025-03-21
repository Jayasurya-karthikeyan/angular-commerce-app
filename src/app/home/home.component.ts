import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../store/auth/auth.model';
import { Store } from '@ngrx/store';
// import { logout } from '../store/auth/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from '../store/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // authState$: Observable<AuthState>;
  user$: Observable<string | null>;

  constructor(
    private authService: AuthService,
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {
    // this.authState$ = this.store.select('auth');
    this.user$ = this.authService.user$;
    console.log('🏡 HomeComponent Loaded');
  }
  onLogout() {
    // this.store.dispatch(logout());
    // console.log(this.authState$);
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
