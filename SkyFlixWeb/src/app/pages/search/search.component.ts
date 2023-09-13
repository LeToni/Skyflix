import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  constructor(private service: MovieDataService){

  }

  ngOnInit(): void {
  }

  searchResult: any ;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });
  
  submitSearchQuery(){
    this.service.searchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
    })
  }
}

