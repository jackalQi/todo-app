import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage: string = "";
  values = "";
  box2Values = "";
  values2 = "";
  values3 = "";
  arr = ["1","2","3","4","5","6"];

  onClick(){
    this.clickMessage = "Show me Now";
  }
  onClick2(){
    this.clickMessage = ""
  }

  onKey(event: KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + '|';
  }

  onKeyup(value: string){
    this.box2Values += value + '|';
  }
  addNew(value: string){
    this.arr.push(value);
  }

  addNew2(value: string){
    this.arr.push(value)
    
  }
}
