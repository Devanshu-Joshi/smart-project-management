import { Injectable, signal } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  User
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<User | null>(null);
  isLoggedIn = signal(false);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);
      this.isLoggedIn.set(!!user);
    });
  }

  async register(
    email: string,
    password: string,
    displayName?: string
  ) {
    const cred = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    if (displayName) {
      await updateProfile(cred.user, { displayName });
    }
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  async logout() {
    await signOut(this.auth);
  }
}