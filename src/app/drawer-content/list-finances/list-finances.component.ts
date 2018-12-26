import { Component, OnInit } from '@angular/core';
import { Financa } from '../../models/financa';
import { ListFinancesService } from './list-finances.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-finances',
  templateUrl: './list-finances.component.html',
  styleUrls: ['./list-finances.component.css']
})
export class ListFinancesComponent implements OnInit {

  financas: Observable<Financa[]>;

  constructor(private listFinancesService: ListFinancesService) { }

  ngOnInit() {
    this.financas = this.listFinancesService.listFincancas();
  }

  

}
