import { Component, OnInit } from '@angular/core';
import { FinanceServiceService } from '../finance-service.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  private labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  private backgroundColor = ["#191970", "#00FFFF", "#98FB98", "#DAA520", "#9370DB", "#C71585", "#FF6384", "#FFD700", "#FAF0E6", "#E6E6FA", "#E0FFFF", "#FF00FF"];
  private hoverBackgroundColor = ["#191970", "#00FFFF", "#98FB98", "#DAA520", "#9370DB", "#C71585", "#FF6384", "#FFD700", "#FAF0E6", "#E6E6FA", "#E0FFFF", "#FF00FF"];
  private quantidadePorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  data: any

  constructor(private financeService: FinanceServiceService) { }

  ngOnInit() {
    this.financeService.listarFinancasPorMes().subscribe(
      finances => {
        finances.forEach(finance => {
          let date = finance.data.toDate();
          let mes = date.toLocaleDateString('pt-br', { month: 'long' })

          switch (mes) {
            case 'janeiro':
              this.quantidadePorMes[0]++;
              break;
            case 'fevereiro':
              this.quantidadePorMes[1]++;
              break;
            case 'março':
              this.quantidadePorMes[2]++;
              break;
            case 'abril':
              this.quantidadePorMes[3]++;
              break;
            case 'maio':
              this.quantidadePorMes[4]++;
              break;
            case 'junho':
              this.quantidadePorMes[5]++;
              break;
            case 'julho':
              this.quantidadePorMes[6]++;
              break;
            case 'agosto':
              this.quantidadePorMes[7]++;
              break;
            case 'setembro':
              this.quantidadePorMes[8]++;
              break;
            case 'outubro':
              this.quantidadePorMes[9]++;
              break;
            case 'novembro':
              this.quantidadePorMes[10]++;
              break;
            case 'dezembro':
              this.quantidadePorMes[11]++;
              break;
          }
        });

        this.data = {
          labels: this.labels,
          datasets: [
            {
              data: this.quantidadePorMes,
              backgroundColor: this.backgroundColor,
              hoverBackgroundColor: this.hoverBackgroundColor
            }
          ]
        }
      }
    )
  }
}
