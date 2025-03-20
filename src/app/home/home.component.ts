import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../store/auth/auth.model';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  authState$: Observable<AuthState>;

  constructor(private store: Store<{ auth: AuthState }>, private router: Router) {
    this.authState$ = this.store.select('auth');
    console.log('🏡 HomeComponent Loaded');
  }
  onLogout() {
    this.store.dispatch(logout());
    console.log(this.authState$);
    this.router.navigate(['/auth/login']);
  }
}
