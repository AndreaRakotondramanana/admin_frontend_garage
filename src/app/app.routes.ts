
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { TableauDeBordComponent } from './components/manager/tableau-de-bord/tableau-de-bord.component';
import { DetailCategorieComponent } from './components/manager/detail-categorie/detail-categorie.component';
import { DetailEmployeComponent } from './components/manager/detail-employe/detail-employe.component';
import { EmployePresentComponent } from './components/manager/employe-present/employe-present.component';
import { GestionEmployeComponent } from './components/manager/gestion-employe/gestion-employe.component';
import { GestionGarageComponent } from './components/manager/gestion-garage/gestion-garage.component';
import { GestionServiceComponent } from './components/manager/gestion-service/gestion-service.component';
import { ModifPrestationComponent } from './components/manager/modif-prestation/modif-prestation.component';
import { GestionReparationComponent } from './components/mecanicien/gestion-reparation/gestion-reparation.component';
import { GestionTacheComponent } from './components/mecanicien/gestion-tache/gestion-tache.component';
import { NouveauDevisComponent } from './components/mecanicien/nouveau-devis/nouveau-devis.component';
import { DetailDevisComponent } from './components/mecanicien/detail-devis/detail-devis.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: TableauDeBordComponent},
    { path: 'login', component: LoginComponent },
    { path: 'detail-categorie/:idCat', component: DetailCategorieComponent},
    { path: 'detail-employe/:id', component: DetailEmployeComponent},
    { path: 'modif-prestation', component: ModifPrestationComponent},
    { path: 'employe-present', component: EmployePresentComponent},
    { path: 'gestion-employe', component: GestionEmployeComponent},
    { path: 'gestion-garage', component: GestionGarageComponent},
    { path: 'gestion-service', component: GestionServiceComponent},
    { path: 'gestion-reparation', component: GestionReparationComponent},
    { path: 'gestion-tache', component: GestionTacheComponent},
    // { path: 'nouveau-devis', component: NouveauDevisComponent},
    // { path: 'detail-devis', component: DetailDevisComponent},
    { path: 'detail-devis/:id', component: DetailDevisComponent},
    { path: 'nouveau-devis/:idRdv', component: NouveauDevisComponent},
    { path: 'rendezvous', component: RendezvousComponent, canActivate: [AuthGuard] }
];

