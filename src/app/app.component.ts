import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoLeft = '../assets/img/dice1.png'
  dadoRight = '../assets/img/dice1.png'

  num1 = 0;
  num2 = 0;

  tirarDados(): void{
    this.num2 = Math.floor(Math.random() * 6) + 1;
    this.num1 = Math.floor(Math.random() * 6) + 1;

    this.dadoLeft = '../assets/img/dice' + this.num1 + '.png'
    this.dadoRight = '../assets/img/dice' + this.num2 + '.png'
    console.log(this.num1, this.num2)
  }

}
