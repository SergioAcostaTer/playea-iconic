import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BeachGridComponent } from '../../components/beach-grid/beach-grid.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { Beach } from '../../models/beach';
import { Category } from '../../models/category';
import { GetCategoriesService } from '../../services/getCategories.service';
import { BeachService } from '../../services/beach.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  beaches: Beach[] = [];
  loading = true;

  private beachesSub?: Subscription;

  constructor(
    private router: Router,
    private getCategoriesService: GetCategoriesService,
    private beachService: BeachService
  ) {}

  ngOnInit(): void {
    // Fetch beaches in real-time
    this.beachesSub = this.beachService.getAllBeaches().subscribe({
      next: (beaches) => {
        this.beaches = beaches;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading beaches:', err);
        this.beaches = [];
        this.loading = false;
      },
    });

    // Load categories once
    this.getCategoriesService.getCategories()
      .then((categories) => {
        this.categories = categories;
      })
      .catch((err) => {
        console.error('Error loading categories:', err);
        this.categories = [];
      });
  }

  ngOnDestroy(): void {
    this.beachesSub?.unsubscribe();
  }
}
