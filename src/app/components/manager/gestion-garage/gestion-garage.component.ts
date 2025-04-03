import { Component, OnInit  } from '@angular/core';
import { GarageService } from '../../../services/garage.service';
import { OperationService } from '../../../services/operation.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-gestion-garage',
  imports: [CommonModule],
  templateUrl: './gestion-garage.component.html',
  styleUrl: './gestion-garage.component.css'
})
export class GestionGarageComponent implements OnInit { 
  garages: any[] = [];
  operations: any[] = [];
  
  constructor(private garageService: GarageService, private operationService: OperationService) { }
  
    ngOnInit(): void {
      this.loadGarages(); 
      this.loadOperations(); 
    }
    
    loadGarages(): void {
      this.garageService.getGarages().subscribe(data => this.garages = data);
    }

    loadOperations(): void {
      this.operationService.getOperationViewCours().subscribe(data => this.operations = data);
    }

    deleteGarage(id: string): void {
      this.garageService.deleteGarage(id).subscribe(() => this.loadGarages());
    }
}
