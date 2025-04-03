import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../../services/rendezvous.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rendezvous',
  imports: [CommonModule],
  templateUrl: './rendezvous.component.html',
  styleUrl: './rendezvous.component.css'
})
export class RendezvousComponent implements OnInit {
  rendezVousList: any[] = [];

  constructor(private rendezvousService: RendezvousService) {}

  ngOnInit(): void {
    this.fetchRendezVous();
  }

  fetchRendezVous(): void {
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Vous devez être connecté pour prendre un rendez-vous');
      return;
    }
    
    this.rendezvousService.getRendezVous().subscribe({
      next: (data) => {
        if (data.data) {
          this.rendezVousList = data.data;
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des rendez-vous :', err);
      }
    });
  }

  validateRendezVous(id: string, action: string): void {
    this.rendezvousService.validateRendezVous(id, action).subscribe({
      next: (result) => {
        alert(result.message);
        this.fetchRendezVous(); // Rafraîchir la liste après validation
      },
      error: (err) => {
        console.error('Erreur de validation :', err);
      }
    });
  }

  showDetails(id: string): void {
    this.rendezvousService.getRendezVousDetail(id).subscribe({
      next: (data) => {
        alert(JSON.stringify(data.data, null, 2)); // Remplace par un modal si nécessaire
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des détails :', err);
      }
    });
  }
}
