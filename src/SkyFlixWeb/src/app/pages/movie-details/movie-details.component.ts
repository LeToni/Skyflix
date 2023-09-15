import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieDataService, private router: ActivatedRoute) {

  }

  movieDetailResult: any;
  movieVideoResult: any;
  movieCastResult: any;

  ngOnInit(): void {
    let paramId = this.router.snapshot.paramMap.get('id');

    this.getMovie(paramId);
    this.getVideo(paramId);
    this.getMovieCast(paramId);
  }

  getMovie(id:any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      console.log(result,'#getMovieDetails');
      this.movieDetailResult = await result;
    });
  }

  getVideo(id:any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element:any) => {
        if(element.type == "Trailer") {
          this.movieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id:any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCastResult = result.cast;
    })
  }

}
