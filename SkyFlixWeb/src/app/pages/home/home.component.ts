import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

MovieDataService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieDataService) {}


  bannerMovieData: any = [];
  trendingMovieData: any = [];
  actionMovieData: any = [];
  adventureMovieData: any = [];
  animationMovieData: any = [];
  comedyMovieData: any = [];
  documentaryMovieData: any = [];
  sciencefictionMovieData: any = [];
  thrillerMovieData: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFicMovie();
    this.thrillerMovie();
  }

  bannerData() {
    this.service.getBannerData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerMovieData = result.results;
    });
  }
  
  trendingData(){
    this.service.getTrendingMovies().subscribe((result) => {
      this.trendingMovieData = result.results;
    });
  }

  actionMovie(){
    this.service.getActionMovies().subscribe((result) => {
      this.actionMovieData = result.results;
    });
  }

  adventureMovie(){
    this.service.getAdventureMovies().subscribe((result) => {
      this.adventureMovieData = result.results;
    })
  }

  animationMovie(){
    this.service.getAnimationMovies().subscribe((result) => {
      this.animationMovieData = result.results;
    });
  }

  comedyMovie(){
    this.service.getComedyMovies().subscribe((result) => {
      this.comedyMovieData = result.results;
    });
  }

  documentaryMovie(){
    this.service.getDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieData = result.results;
    });
  }

  scienceFicMovie(){
    this.service.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieData = result.results;
    });
  }

  thrillerMovie(){
    this.service.getThrillerMovies().subscribe((result) => {
      this.thrillerMovieData = result.results;
    });
  }
}
