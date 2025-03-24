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
import { AuthService } from '../../store/auth/auth.service';
import { NotificationService } from '../../services/notification.service';

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
    // private store: Store,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { email, password, username } = this.loginForm.value;

    this.authService.login(email, password).subscribe((success) => {
      if (success) {
        this.notify('Login Successful!');
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid credentials!';
        this.notify(this.errorMessage);
      }
    });
  }

  notify(msg: string) {
    this.notificationService.showNotification(`Notification=> ${msg}`);
  }
}
