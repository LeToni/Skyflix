import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.moviebaseurl;
  apiKey = environment.movieapikey;

  bannerApiUrl = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;
  trendingApiUrl = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`;
  actionMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`;
  adventureMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`;
  animationMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`;
  comedyMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`;
  documentaryMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`;
  scienceMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`;
  thrillerMoviesUrl = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`;

  getBannerData() : Observable<any> {
    return this.http.get(this.bannerApiUrl)
  }

  getTrendingMovies() : Observable<any> {
    return this.http.get(this.trendingApiUrl);
  }

  searchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

    // action 
  getActionMovies(): Observable<any> {
    return this.http.get(this.actionMoviesUrl);
  }

  // adventure
  getAdventureMovies(): Observable<any> {
    return this.http.get(this.adventureMoviesUrl);
  }

  // animation
  getAnimationMovies(): Observable<any> {
    return this.http.get(this.animationMoviesUrl);
  }

  // comedy
  getComedyMovies(): Observable<any> {
    return this.http.get(this.comedyMoviesUrl);
  }

  // documentary
  getDocumentaryMovies(): Observable<any> {
    return this.http.get(this.documentaryMoviesUrl);
  }

  // science-fiction:878

  getScienceFictionMovies(): Observable<any> {
    return this.http.get(this.scienceMoviesUrl);
  }

  // thriller:53
  getThrillerMovies(): Observable<any> {
    return this.http.get(this.thrillerMoviesUrl);
  }

}
