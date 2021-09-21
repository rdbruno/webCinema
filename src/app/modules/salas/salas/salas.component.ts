import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  public urlInterestelar = '../../../../assets/img/Interestelar.jpg';
  public urlStarWars = '../../../../assets/img/StarWars.jpg';
  public urlVingadores = '../../../../assets/img/Vingadores.jpg';
  public urlKillBill = '../../../../assets/img/KillBill.jpg';
  public urlBastardos = '../../../../assets/img/BastardosInglorios.jpg';

  public arraySalas = [
    { 'numero': '01', 'filme': 'Interestelar', 'cadeiras': 20, 'capa': this.urlInterestelar },
    { 'numero': '02', 'filme': 'Star Wars III', 'cadeiras': 20, 'capa': this.urlStarWars},
    { 'numero': '03', 'filme': 'Vingadores - Guerra Infinita', 'cadeiras': 20, 'capa': this.urlVingadores },
    { 'numero': '04', 'filme': 'Kill Bill - Volume 1', 'cadeiras': 20, 'capa': this.urlKillBill },
    { 'numero': '05', 'filme': 'Bastardos Inglórios', 'cadeiras': 20, 'capa': this.urlBastardos }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
