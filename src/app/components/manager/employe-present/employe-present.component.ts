import { Component, OnInit  } from '@angular/core';
import { PresenceService } from '../../../services/presence.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-employe-present',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './employe-present.component.html',
  styleUrl: './employe-present.component.css'
})
export class EmployePresentComponent implements OnInit {
  employes: any[] = [];

  constructor(private presenceService: PresenceService) { }

  ngOnInit(): void {
    this.loadPresence(); 
  }
  
  loadPresence(): void {
    this.presenceService.getPresenceCeJour().subscribe(data => this.employes = data);
  }
  
  marquerAbsent(id: string): void {
    this.presenceService.marquerAbsent(id).subscribe(() => this.loadPresence());
  }

  createForAll(): void {
    this.presenceService.createForAll().subscribe(() => this.loadPresence());
  }

}
