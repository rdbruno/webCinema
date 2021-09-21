import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  public arrayHistorico = [
    { 'numero': '01', 'filme': 'Interestelar', 'ingressos': '02'},
    { 'numero': '02', 'filme': 'Star Wars III', 'ingressos': '03'},
    { 'numero': '05', 'filme': 'Bastardos Inglórios', 'ingressos': '01'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
