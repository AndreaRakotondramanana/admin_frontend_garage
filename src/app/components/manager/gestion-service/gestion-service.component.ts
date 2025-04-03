import { Component, OnInit  } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-gestion-service',
  imports: [FormsModule,RouterModule],
  templateUrl: './gestion-service.component.html',
  styleUrl: './gestion-service.component.css'
}) 
export class GestionServiceComponent implements OnInit {
  categories: any[] = [];
  newCategorie: any = { libelle_categorie: '', description: '' }; // Objet pour stocker les données du formulaire

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.loadCategories(); 
  }
 
  loadCategories(): void {
    this.categorieService.getCategories().subscribe(data => this.categories = data);
  }

  onSubmit(): void {
    this.categorieService.addCategories(this.newCategorie).subscribe({
      next: (response) => {
        console.log('Catégorie ajoutée avec succès', response);
        this.loadCategories(); // Recharger la liste des catégories
        this.newCategorie = { libelle_categorie: '', description: '' }; // Réinitialiser le formulaire
        // Fermer le modal
        const modal = document.getElementById('ajoutCategorieModal');
        if (modal) {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) {
            backdrop.remove();
          }
        }
      }, 
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
      }
    });
  }
  
  deleteCategorie(id: string): void {
    this.categorieService.deleteCategorie(id).subscribe(() => this.loadCategories());
  }
}
