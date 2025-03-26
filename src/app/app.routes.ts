import { Routes } from '@angular/router';
import { TableauDeBordComponent } from './components/manager/tableau-de-bord/tableau-de-bord.component';
import { DetailCategorieComponent } from './components/manager/detail-categorie/detail-categorie.component';
import { DetailEmployeComponent } from './components/manager/detail-employe/detail-employe.component';
import { EmployePresentComponent } from './components/manager/employe-present/employe-present.component';
import { GestionEmployeComponent } from './components/manager/gestion-employe/gestion-employe.component';
import { GestionGarageComponent } from './components/manager/gestion-garage/gestion-garage.component';
import { GestionServiceComponent } from './components/manager/gestion-service/gestion-service.component';
import { ModifPrestationComponent } from './components/manager/modif-prestation/modif-prestation.component';

export const routes: Routes = [
    { path: '', component: TableauDeBordComponent},
    { path: 'detail-categorie/:idCat', component: DetailCategorieComponent},
    { path: 'detail-employe/:id', component: DetailEmployeComponent},
    { path: 'modif-prestation', component: ModifPrestationComponent},
    { path: 'employe-present', component: EmployePresentComponent},
    { path: 'gestion-employe', component: GestionEmployeComponent},
    { path: 'gestion-garage', component: GestionGarageComponent},
    { path: 'gestion-service', component: GestionServiceComponent},
];

