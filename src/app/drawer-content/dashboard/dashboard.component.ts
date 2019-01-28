/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: CardInformation[] = [];
  dadosGraficoBarras: any;

  @ViewChild("gmap") gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    let cardEntregue: CardInformation = {
      cor: '#21AD76',
      descricao: 'Entregues',
      iconeFooter: 'how_to_reg',
      quantidade: 35,
      gradienteClass: 'gradienteEntregue'
    };

    let cardNaoEntregue: CardInformation = {
      cor: '#FF3D5F',
      descricao: 'Não Entregues',
      iconeFooter: 'thumb_down_alt',
      quantidade: 42,
      gradienteClass: 'gradienteNaoEntregue'
    };

    let cardPendente: CardInformation = {
      cor: '#269EF4',
      descricao: 'Pendentes',
      iconeFooter: 'format_list_numbered',
      quantidade: 37,
      gradienteClass: 'gradientePendente'
    };

    let cardParcial: CardInformation = {
      cor: '#F8763B',
      descricao: 'Parcial',
      iconeFooter: 'pie_chart',
      quantidade: 22,
      gradienteClass: 'gradienteParcial'
    };

    this.cards.push(cardEntregue);
    this.cards.push(cardNaoEntregue);
    this.cards.push(cardPendente);
    this.cards.push(cardParcial);

    this.dadosGraficoBarras = {
      labels: ['Geovane - GNN-5412', 'Venicyus - PHT-5589', 'Diego - LKN-5451'],
      datasets: [
        {
          label: 'Entregues',
          backgroundColor: '#1AAA6F',
          borderColor: '#1AAA6F',
          data: [28, 48, 40]
        },
        {
          label: 'Não Entregues',
          backgroundColor: '#FF3F60',
          borderColor: '#FF3F60',
          data: [65, 59, 10]
        },
        {
          label: 'Pendente',
          backgroundColor: '#2C97F1',
          borderColor: '#2C97F1',
          data: [89, 14, 30]
        },
        {
          label: 'Parcial',
          backgroundColor: '#F8733C',
          borderColor: '#F8733C',
          data: [43, 2, 20]
        }
      ]
    }
  }

}

interface CardInformation {
  iconeFooter: string;
  descricao: string;
  quantidade: number;
  cor: string;
  gradienteClass: string;
}
