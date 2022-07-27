import { Component, Input} from '@angular/core';
import {CurrencyObjectI}from "../../userTypes"
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent{

  @Input() currencyData!: Array<CurrencyObjectI>;
  @Input() convertRates!: {[key: string]: number};

  firstSelectedCurrency = "UAH"
  secondSelectedCurrency = "USD"
  firstInputValue = 0
  secondInputValue = 0

   firstPairHandler(){
    this.secondInputValue = this.convertRates[this.firstSelectedCurrency] / this.convertRates[this.secondSelectedCurrency] * this.firstInputValue 
   }
   secondPairHandler(){
    this.firstInputValue = this.convertRates[this.secondSelectedCurrency] / this.convertRates[this.firstSelectedCurrency] * this.secondInputValue 
   }

  calculateCurrencyValue(element: HTMLInputElement | HTMLSelectElement){

    switch (element.name) {
      case "firstSelect":
        this.firstSelectedCurrency = element.value
        this.firstPairHandler()
        break;
      case "secondSelect":
        this.secondSelectedCurrency = element.value
        this.secondPairHandler()
        break;
      case "firstInput":
        this.firstInputValue = +element.value
        this.firstPairHandler()
        break;
      default:
        this.secondInputValue = +element.value
        this.secondPairHandler()
        break;
    }
  }

}
