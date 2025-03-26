import { Component, OnInit  } from '@angular/core';
import { MecanicienViewService } from '../../../services/mecanicien-view.service';
import { RouterModule } from '@angular/router'; // Importer RouterModule

@Component({
  selector: 'app-gestion-employe',
  imports: [RouterModule ],
  templateUrl: './gestion-employe.component.html',
  styleUrl: './gestion-employe.component.css'
})
export class GestionEmployeComponent implements OnInit {
  mecanicienViews: any[] = [];
   
  constructor(private mecanicienViewService: MecanicienViewService) { }
  
    ngOnInit(): void {
      this.loadmecanicienViews(); 
    }
   
    loadmecanicienViews(): void {
      this.mecanicienViewService.getMecanicienView().subscribe(data => this.mecanicienViews = data);
    }

    getMecanicienById(id: string): void {
      this.mecanicienViewService.getMecanicienById(id).subscribe(() => this.loadmecanicienViews());
    }

    deleteMecanicien(id: string): void {
      this.mecanicienViewService.deleteMecanicien(id).subscribe(() => this.loadmecanicienViews());
    }
} 
