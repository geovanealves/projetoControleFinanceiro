import { Component, OnInit } from '@angular/core';
import { FinanceServiceService } from '../../finance-service.service';

@Component({
  selector: 'app-grafico-por-mes',
  templateUrl: './grafico-por-mes.component.html',
  styleUrls: ['./grafico-por-mes.component.css']
})
export class GraficoPorMesComponent implements OnInit {
  dataMensal: any

  constructor(private financeService: FinanceServiceService) { }

  ngOnInit() {
    const backgroundColor = ["#191970", "#00FFFF", "#98FB98", "#DAA520", "#9370DB", "#C71585", "#FF6384", "#FFD700", "#FAF0E6", "#E6E6FA", "#E0FFFF", "#FF00FF"];
    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let quantidadePorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.financeService.listFincancas().subscribe(
      finances => {
        finances.forEach(finance => {       
          let mes = finance.data.toDate().getMonth();
          for (let index = 0; index < quantidadePorMes.length; index++) {
            if (index == mes) {              
              quantidadePorMes[index]++;
            } 
          }

          this.dataMensal = {
            labels: labels,
            datasets: [
              {
                data: quantidadePorMes,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: backgroundColor
              }
            ]
          }

        })
      });
  }
}
