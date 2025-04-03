import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importer ActivatedRoute
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { ReparationService } from '../../../services/reparation.service';

@Component({
  selector: 'app-detail-devis',
  imports: [CommonModule],
  templateUrl: './detail-devis.component.html',
  styleUrl: './detail-devis.component.css'
})
export class DetailDevisComponent implements OnInit {
  detailOperation: any[] = [];
  detailClient: any;

  constructor(
    private route: ActivatedRoute, // Injecter ActivatedRoute
    private reparationService: ReparationService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'operation depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.getDetailOperationByIdOp(id);
      this.getDetailClientByIdOp(id);
    }
  }

  getDetailOperationByIdOp(id: string): void {
    this.reparationService.getDetailOperationByIdOp(id).subscribe(
      (data) => {
        this.detailOperation = data; 
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails due l operation :', error);
      }
    );
  }

  getDetailClientByIdOp(id: string): void {
    this.reparationService.getDetailClientByIdOp(id).subscribe(data => this.detailClient = data);
  }
}
 