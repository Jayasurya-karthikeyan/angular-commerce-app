import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { email, password, username } = this.loginForm.value;

    if (email === 'test@gmail.com' && password === 'test@123') {
      console.log('Login successful');
      this.errorMessage = '';
      this.store.dispatch(loginSuccess({ email, username }));
      this.router.navigate(['/home']);
    } else {
      console.log('Login Data:', this.loginForm.value);
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
