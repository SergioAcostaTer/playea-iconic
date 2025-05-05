import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beach } from '../../models/beach';
import { BeachService } from '../../services/beach.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class HomePageComponent implements OnInit, OnDestroy {
  beaches: Beach[] = [];
  loading = true;

  private beachesSub?: Subscription;

  constructor(
    private beachService: BeachService
  ) {}

  ngOnInit(): void {
    // Subscribe to the beach data
    // this.beachesSub = this.beachService.getAllBeaches().subscribe({
    //   next: (beaches) => {
    //     this.beaches = beaches;
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     console.error('Error loading beaches:', err);
    //     this.beaches = [];
    //     this.loading = false;
    //   },
    // });
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed
    // this.beachesSub?.unsubscribe();
  }
}
