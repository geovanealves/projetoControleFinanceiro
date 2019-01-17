import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FinanceServiceService } from '../../finance-service.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-grafico-por-categoria',
  templateUrl: './grafico-por-categoria.component.html',
  styleUrls: ['./grafico-por-categoria.component.css']
})
export class GraficoPorCategoriaComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  dataCategoria: any

  constructor(private financeService: FinanceServiceService) { }

  ngOnInit() {
    const backgroundColor = ["#191970", "#00FFFF", "#98FB98", "#DAA520", "#9370DB", "#C71585", "#FF6384", "#FFD700", "#FAF0E6", "#E6E6FA", "#E0FFFF", "#FF00FF"];
    const labels = ['Comida', 'Combustível', 'Roupas/Calçados', 'Cartão de crédito'];
    let quantidadePorCategoria = [0, 0, 0, 0];

    this.financeService.listFincancas().subscribe(
      finances => {
        finances.forEach(finance => {
          let tipo = finance.tipo;
          for (let index = 0; index < labels.length; index++) {
            if (labels[index] == tipo) {
              quantidadePorCategoria[index]++;
            }
          }

          this.dataCategoria = {
            labels: labels,
            datasets: [
              {
                data: quantidadePorCategoria,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: backgroundColor
              }
            ]
          }
        })
      });
  }
}
