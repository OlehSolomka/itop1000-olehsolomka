import { Component, Input} from '@angular/core';
import {CurrencyObjectI} from '../../userTypes'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() currencyData!: Array<CurrencyObjectI>;

  }

