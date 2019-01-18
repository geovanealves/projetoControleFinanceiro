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
      tipo: ['', Validators.required]
    });
  }

  ngOnInit() {
    let idFinance;

    idFinance = this.router.snapshot.params['id'];
    this.estado = 'editando';

    if (typeof idFinance != 'undefined') {
      this.financeService.listFincanca(idFinance).subscribe(
        result => {
          this.preencherFormulario(result.payload.data());
        }
      );
    }
  }

  preencherFormulario(financa: Financa){ 
    this.formCreateFinance.setValue({
      nome: financa.nome, 
      valor: financa.valor,
      tipo: financa.tipo
    });
  }

  saveFinance(form: FormGroup) {
    let finance: Financa;

    finance = { ...form.value };
    finance.data = new Date();

    this.financeService.saveFinance(finance);
  }

}
