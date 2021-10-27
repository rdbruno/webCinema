import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  public userLogged = false;
  public cartaz = 'https://img3.wallspic.com/previews/2/5/2/7/5/157252/157252-movie_poster_2021-dune-godzilla_vs_kong-2021-television-x750.jpg';

  public lugares = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]

  public fileiras = [
    { letra: 'A' },
    { letra: 'B' },
    { letra: 'C' }
  ]
  
  constructor() { }

  ngOnInit(): void {
    if ((!localStorage.getItem('Login'))) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
    }
  }

}
