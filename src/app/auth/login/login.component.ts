import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email === 'test@gmail.com' && password === 'test@123') {
      console.log('Login successful');
      this.errorMessage = ''; 
      this.router.navigate(['/home']);
    } else {
      console.log('Login Data:', this.loginForm.value);
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
