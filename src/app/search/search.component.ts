import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../api/omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies=[]
  movietitle:string;
  constructor(
    private omdbservice:OmdbService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log(this.omdbservice.movietitle)
    this.omdbservice.searchmovies().subscribe(
      r=>this.SearchSuccess(r),
      err=>this.searcherror(err)
    )
    
  }
  onbuttonclick(){
    this.omdbservice.movietitle=this.movietitle
    console.log(this.omdbservice.movietitle)
    this.omdbservice.searchmovies().subscribe(
      res=>this.SearchSuccess(res),
      err=>this.searcherror(err)
    )
    
  }
  SearchSuccess(res: any){
    this.movies=res.Search
    console.log(res)
  }
  searcherror(err: any){
    console.log(err)
  }

}
