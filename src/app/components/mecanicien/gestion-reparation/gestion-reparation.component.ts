import { Component } from '@angular/core';
import { ReparationService } from '../../../services/reparation.service'; 
import { CommonModule } from '@angular/common'; // Importer CommonModule
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-gestion-reparation', 
  imports: [CommonModule,RouterModule],
  templateUrl: './gestion-reparation.component.html',
  styleUrl: './gestion-reparation.component.css'
})
export class GestionReparationComponent {
  reparations: any[] = [];

  constructor(private reparationService: ReparationService) { }

  ngOnInit(): void {
    this.loadReparations();
  }

  loadReparations(): void {
    this.reparationService.getOperationView().subscribe(data => this.reparations = data);
  }

  getOperationViewById(id: string): void {
    this.reparationService.getOperationViewById(id).subscribe(() => this.loadReparations());
  }

  marquerHistorique(id: string): void {
    this.reparationService.marquerHistorique(id).subscribe(() => this.loadReparations());
  }
}
