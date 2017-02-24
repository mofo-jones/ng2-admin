import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './my/login/login.component';

export const routes: Routes = [
    { path: 'admin', component: LoginComponent },
    { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
