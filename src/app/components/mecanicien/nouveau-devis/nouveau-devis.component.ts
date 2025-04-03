import { Component, OnInit } from '@angular/core';
import { PrestationViewService } from '../../../services/prestation-view.service';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevisService } from '../../../services/devis.service';

@Component({
  selector: 'app-nouveau-devis',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nouveau-devis.component.html',
  styleUrls: ['./nouveau-devis.component.css']
})
export class NouveauDevisComponent implements OnInit {
  categories: any[] = [];
  rdvId: string = '';
  devisForm: FormGroup;

  constructor(
    private prestationViewService: PrestationViewService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private devisService: DevisService
  ) {
    this.devisForm = this.fb.group({
      prestations: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rdvId = params['id'];
      this.loadCategories();
    });
  }

  loadCategories(): void {
    this.prestationViewService.getPrestationsByCat().subscribe(data => {
      this.categories = data;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    const prestationsArray = this.devisForm.get('prestations') as FormArray;
    prestationsArray.clear();

    this.categories.forEach(categorie => {
      categorie.prestations.forEach((presta: any) => {
        prestationsArray.push(
          this.fb.group({
            prestationId: presta.prestationId,
            selected: false,
            quantite: 0
          })
        );
      });
    });
  }

  onSubmit(): void {
    const selectedPrestations = this.devisForm.value.prestations
      .filter((p: any) => p.selected && p.quantite > 0)
      .map((p: any) => ({
        prestationId: p.prestationId,
        quantite: p.quantite
      }));

    if (selectedPrestations.length === 0) {
      alert('Veuillez sélectionner au moins une prestation avec une quantité positive');
      return;
    }

    this.devisService.createDevis(this.rdvId, selectedPrestations).subscribe({
      next: (response) => {
        alert('Devis créé avec succès');
        // Redirection ou autre action après succès
      },
      error: (err) => {
        console.error('Erreur lors de la création du devis:', err);
        alert('Erreur lors de la création du devis');
      }
    });
  }
}