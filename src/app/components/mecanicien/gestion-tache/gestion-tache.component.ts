import { Component } from '@angular/core';
import { TacheService } from '../../../services/tache.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-tache',
  imports: [CommonModule,RouterModule],
  templateUrl: './gestion-tache.component.html',
  styleUrl: './gestion-tache.component.css'
})
export class GestionTacheComponent {
 diagnostiques: any[] = [];
 taches: any[] = [];

 readonly statuts = {
    ATTENTE: 'En attente',
    COURS: 'En cours',
    FAIT: 'Fait'
  };

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.loadRdvView();
    this.loadTacheView();
  }

  loadRdvView(): void { 
    this.tacheService.getRdvView().subscribe(data => this.diagnostiques = data);
  }

  loadTacheView(): void {
    this.tacheService.getTacheView().subscribe(data => this.taches = data);
  }

  modifierStatut(detailOperationId: string, nouveauStatut: string): void {
    // alert(nouveauStatut);

    this.tacheService.modifierStatut(detailOperationId, nouveauStatut).subscribe({
      next: () => {
        // Rechargement complet des données après succès 
        this.loadTacheView();
        this.loadRdvView(); // Si nécessaire
      },
      error: (err) => {
        console.error('Erreur mise à jour statut:', err);
        alert('Échec de la mise à jour du statut');
      }
    });
  }
}
 