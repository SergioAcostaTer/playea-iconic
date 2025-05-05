import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BeachCardComponent } from '../beach-card/beach-card.component';
import { Beach } from '../../models/beach';
import { BeachService } from '../../services/beach.service';

@Component({
  selector: 'app-beach-grid',
  standalone: true,
  imports: [CommonModule, BeachCardComponent],
  templateUrl: './beach-grid.component.html',
  styleUrls: ['./beach-grid.component.css'],
})
export class BeachGridComponent {
  @Input() beaches: Beach[] = [];
  beachService = inject(BeachService);
  uploadStatus: string = '';
}
