import { Component, OnInit } from '@angular/core';
import { Financa } from '../../models/financa';
import { FinanceServiceService } from '../../drawer-content/finance-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-finances',
  templateUrl: './list-finances.component.html',
  styleUrls: ['./list-finances.component.css']
})
export class ListFinancesComponent implements OnInit {

  financas:Observable<Financa[]>;

  constructor(private financeService: FinanceServiceService) { }

  ngOnInit() {
    this.financas = this.financeService.listFincancas();
  }

  deleteFinance(id) {
    this.financeService.deleteFinance(id);
  }
  
  editarFinance(f: Financa){
  debugger
  }

}
