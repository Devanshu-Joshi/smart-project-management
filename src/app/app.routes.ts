import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'login', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule) },
];
