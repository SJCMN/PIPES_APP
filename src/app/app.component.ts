import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name: string = '';
 paymentDate: string = '';
 amount: number = 0 ;
 height: number = 0;
 miles: number = 0;

 car = {
   make: 'Toyota',
   model: 'Camry',
   year: 1993
 }

 onNameChange(value: string){
   this.name = value;
 }

 onDateChange(value: string){
  this.paymentDate = value;
 }

 onAmountChange(value: string){
  this.amount = parseFloat(value);
 }

 onHeightChange(value: string){
   this.height = parseFloat(value)
 }

 onMilesChange(value: string){
   this.miles = parseFloat(value)
 }
}
