import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importer ActivatedRoute
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { MecanicienViewService } from '../../../services/mecanicien-view.service';

@Component({
  selector: 'app-detail-employe',
  imports: [
    CommonModule, // Ajouter CommonModule ici 
    // RouterModule
  ],
  templateUrl: './detail-employe.component.html', 
  styleUrls: ['./detail-employe.component.css']
})
export class DetailEmployeComponent implements OnInit {
  mecanicien: any; // Pour stocker les détails du mécanicien

  constructor(
    private route: ActivatedRoute, // Injecter ActivatedRoute
    private mecanicienViewService: MecanicienViewService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du mécanicien depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Appeler la méthode pour récupérer les détails du mécanicien
      this.getMecanicienById(id);
    }
  }

  // Récupérer les détails du mécanicien par son ID
  getMecanicienById(id: string): void {
    this.mecanicienViewService.getMecanicienById(id).subscribe(
      (data) => {
        this.mecanicien = data; // Stocker les détails du mécanicien
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du mécanicien :', error);
      }
    );
  }
}