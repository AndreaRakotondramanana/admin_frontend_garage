import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importer ActivatedRoute
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { FormsModule } from '@angular/forms';
import { PrestationViewService } from '../../../services/prestation-view.service';

@Component({
  selector: 'app-detail-categorie',
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-categorie.component.html',
  styleUrl: './detail-categorie.component.css'
})
export class DetailCategorieComponent implements OnInit {
  prestations: any[] = [];

  // Propriétés pour le formulaire d'ajout de prestation
  newPrestation = {
    libelle_prestation: '',
    prix_unitaire_base: 0,
    duree: 0,
    categorieId: ''
  };

  constructor(
    private route: ActivatedRoute, // Injecter ActivatedRoute
    private prestationViewService: PrestationViewService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie depuis l'URL
    const idCat = this.route.snapshot.paramMap.get('idCat');

    if (idCat) {
      // Stocker l'ID de la catégorie pour le formulaire
      this.newPrestation.categorieId = idCat;

      // Appeler la méthode pour récupérer les prestations de la catégorie
      this.getPrestationByIdCat(idCat);
    }
  }

  // Récupérer les prestations par l'ID de la catégorie
  getPrestationByIdCat(idCat: string): void {
    this.prestationViewService.getPrestationByIdCat(idCat).subscribe(
      (data) => {
        this.prestations = data; // Stocker les prestations
      },
      (error) => {
        console.error('Erreur lors de la récupération des prestations :', error);
      }
    );
  }

  // Supprimer une prestation
  deletePrestation(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette prestation ?')) {
      this.prestationViewService.deletePrestation(id).subscribe(
        () => {
          // Recharger la liste des prestations après suppression
          const idCat = this.route.snapshot.paramMap.get('idCat');
          if (idCat) {
            this.getPrestationByIdCat(idCat);
          }
        },
        (error) => {
          console.error('Erreur lors de la suppression de la prestation :', error);
        }
      );
    }
  }

  // Soumettre le formulaire d'ajout de prestation
  onSubmit(): void {
    // Appeler le service pour ajouter une nouvelle prestation
    this.prestationViewService.addPrestation(this.newPrestation).subscribe(
      (response) => {
        console.log('Prestation ajoutée avec succès :', response);
        // Recharger la liste des prestations
        const idCat = this.route.snapshot.paramMap.get('idCat');
        if (idCat) {
          this.getPrestationByIdCat(idCat);
        }
        // Réinitialiser le formulaire
        this.newPrestation = {
          libelle_prestation: '',
          prix_unitaire_base: 0,
          duree: 0,
          categorieId: idCat || ''
        };
        // Fermer le modal (si vous utilisez Bootstrap)
        const modal = document.getElementById('ajouterPrestationModal');
        if (modal) {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('modal-open');
          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) {
            backdrop.remove();
          }
        }
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la prestation :', error);
      }
    );
  }
}