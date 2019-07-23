import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: HttpService, private router: Router) {}

  data:any;
  title:any;
  name:any;
  src:any;

  genre:any;
  type:any;
  year:any;
  time:any;

  rating:any;
  imdbID:any;

  director:any;
  writer:any;
  actors:any;
  plot:any;
  released:any;
  country:any;
  awards:any;

  error:boolean = false;

  search() {
    this.service.getData(this.name.split(" ").join("+")).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.title = data["Title"];
        this.src = data["Poster"];
        this.genre = data["Genre"];
        this.type = data["Type"];
        this.year = data["Year"];
        this.time = data["Runtime"];
        this.rating = data["imdbRating"];
        this.imdbID = data["imdbID"];

        this.plot = data["Plot"];
        this.director = data["Director"];
        this.writer = data["Writer"];
        this.actors = data["Actors"];
        this.released = data["Released"];
        this.country = data["Country"];
        this.awards = data["Awards"];

        if(data["Response"] == "False") {
          this.error = true;
        }
        else {
          this.error = false;
        }
      }
    )
  }

  imdb() {
    window.location.href = 'https://www.imdb.com/title/' + this.imdbID;
  }

}
