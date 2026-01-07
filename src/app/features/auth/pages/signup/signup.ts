import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  private fb = inject(FormBuilder);

  constructor(public auth: AuthService) { }

  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  async submit() {
    if (this.signupForm.invalid) return;

    const { email, password } = this.signupForm.value;

    try {
      await this.auth.register(email!, password!);
    } catch (err: any) {
      alert(err.message);
    }
  }

}
