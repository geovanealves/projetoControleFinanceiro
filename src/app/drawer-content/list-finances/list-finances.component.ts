import { Component, OnInit } from '@angular/core';
import { Financa } from '../../models/financa';
import { FinanceServiceService } from '../../drawer-content/finance-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-finances',
  templateUrl: './list-finances.component.html',
  styleUrls: ['./list-finances.component.css']
})
export class ListFinancesComponent implements OnInit {

  router: Router;
  financas:Observable<Financa[]>;

  constructor(private financeService: FinanceServiceService, private r: Router) {
    this.router = r;
   }

  ngOnInit() {
    this.financas = this.financeService.listFincancas();
  }

  deleteFinance(id) {
    this.financeService.deleteFinance(id);
  }
  
  editarFinance(financa: Financa){
    this.router.navigate(['/editarFinanca/:id', {id: financa.id}]);
  }

}
