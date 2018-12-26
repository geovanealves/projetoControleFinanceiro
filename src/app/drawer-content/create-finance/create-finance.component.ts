import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Financa } from '../../models/financa';
import { FinanceServiceService } from '../finance-service.service';

@Component({
  selector: 'app-create-finance',
  templateUrl: './create-finance.component.html',
  styleUrls: ['./create-finance.component.css']
})
export class CreateFinanceComponent implements OnInit {

  formCreateFinance: FormGroup;
  financeService: any;

  constructor(fb: FormBuilder, fnService: FinanceServiceService) {
    this.financeService = fnService;
    this.formCreateFinance = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveFinance(form: FormGroup) {
    let finance: Financa;

    finance = { ...form.value };

    this.financeService.saveFinance(finance);
  }

}
