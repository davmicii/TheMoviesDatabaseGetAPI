import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonText, IonCardContent, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { cashOutline, calendarOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonLabel, IonCardContent, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit{
  private movieSevice = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) {
    addIcons({ cashOutline, calendarOutline });
   }

   ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');  // Obtiene el ID de la URL
    if (movieId) {
      this.movieService.getMoviesDetails(movieId).subscribe((movie) => {
        this.movie.set(movie);
        console.log(movie);
      });
    }
  }

}
