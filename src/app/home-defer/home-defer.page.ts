import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, IonList, IonItem, IonAvatar, IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent, IonText } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { finalize, catchError } from 'rxjs';
import { MovieResult } from '../services/interfaces';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-defer',
  templateUrl: './home-defer.page.html',
  styleUrls: ['./home-defer.page.scss'],
  standalone: true,
  imports: [IonText, IonInfiniteScrollContent, IonInfiniteScroll, IonBadge, RouterModule, DatePipe, IonLabel, IonAlert, IonSkeletonText, IonAvatar, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomeDeferPage {

  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public posterSize = 'w500';
  public dummyArray = new Array(5);

  constructor() {
    this.loadMovies();
  }

  loadMovies(event?: InfiniteScrollCustomEvent){
    this.error = null;

    if(!event){
      this.isLoading = true;
    }
    this.movieService
    .getTopRateMovies(this.currentPage)
    .pipe(
      finalize(() => {
        this.isLoading = false;
        if (event){
          event.target.complete();
        }
      }),
      catchError((err: any) => {
        console.log(err);
        this.error = err.error.status_message;
        return [];
      })
    )
    .subscribe({
      next: (res) => {
        console.log(res);
        this.movies.push(...res.results);
        if(event){
          event.target.disabled = res.total_pages === this.currentPage;
        }
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
