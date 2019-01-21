import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Financa } from '../../models/financa';
import { FinanceServiceService } from '../finance-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-finance',
  templateUrl: './create-finance.component.html',
  styleUrls: ['./create-finance.component.css']
})
export class CreateFinanceComponent implements OnInit {

  formCreateFinance: FormGroup;
  financa: Financa;
  financeService: any;
  router: ActivatedRoute;
  estado: string = 'criando';

  constructor(fb: FormBuilder, fnService: FinanceServiceService, rt: ActivatedRoute) {
    this.financeService = fnService;
    this.router = rt;

    this.formCreateFinance = fb.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      tipo: ['', Validators.required],
      id: ['',]
    });
  }

  ngOnInit() {
    let idFinance;

    idFinance = this.router.snapshot.params['id'];

    if (typeof idFinance != 'undefined') {
      this.estado = 'editando';

      this.financeService.listFincanca(idFinance).subscribe(
        result => {
          const id =  result.payload.id;
          const data = {...result.payload.data()}

          this.preencherFormulario({id: id, data: data});
        }
      );
    }
  }

  preencherFormulario(dados){ 
    this.formCreateFinance.patchValue({
      nome: dados.data.nome, 
      valor: dados.data.valor,
      tipo: dados.data.tipo,
      id: dados.id
    });
  }

  saveFinance(form: FormGroup) {
    let finance: Financa;

    finance = form.value;
    finance.data = new Date();

    this.financeService.saveFinance(finance);
  }

  updateFinance(form: FormGroup){
    let financa: Financa;

    financa = form.value;
    
    this.financeService.updateFinance(financa);
  }

}
