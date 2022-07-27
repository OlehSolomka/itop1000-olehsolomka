import { Component, OnInit } from '@angular/core';
import {CurrencyObjectI} from "../userTypes"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Currency Exchange';
  currencyData: Array<CurrencyObjectI> = []
  convertRates:{[key: string]: number} = {
    USD: 0,
    EUR: 0,
    UAH: 1
  }
  errorMessage = ""


  async ngOnInit(): Promise<void> {
    try {
      this.errorMessage = ""
      const response = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
  const currencyValues = await response.json()

  const targetCurrencies = currencyValues.filter((currency: CurrencyObjectI) => currency.ccy ==="USD" || currency.ccy ==="EUR")

  this.currencyData = targetCurrencies

  targetCurrencies.forEach((element: CurrencyObjectI) => {

    this.convertRates[element.ccy] = +element.sale
  });

    } catch (error: any) {
      this.errorMessage = error.message
    }
  }
}
