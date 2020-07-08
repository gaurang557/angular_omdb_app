import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from '../api/omdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movietitle:string;
  constructor(
    private omdbservice:OmdbService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onbuttonclick(){
    this.omdbservice.movietitle=this.movietitle
    this.router.navigate(['./search'])
  }

}

