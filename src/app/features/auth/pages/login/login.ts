import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private fb = inject(FormBuilder);

  constructor(public auth: AuthService) { }

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  async submit() {
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    try {
      await this.auth.login(email!, password!);

      // ✅ LOGIN SUCCESS
      console.log('Login successful');
      alert('Login successful');
      // redirect or show message

    } catch (err: any) {
      console.error(err);
      // ❌ LOGIN FAILED
    }
  }
}
