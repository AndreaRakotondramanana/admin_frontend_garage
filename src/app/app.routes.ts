import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
    { path: 'rendezvous', component: RendezvousComponent, canActivate: [AuthGuard] }
];
