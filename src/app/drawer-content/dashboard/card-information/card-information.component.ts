import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit() {
    
  }

}
