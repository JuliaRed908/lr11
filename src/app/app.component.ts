import { Component } from '@angular/core';
import { Det } from './shared/model/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  detArray:Det[] = [];
  inputName = "";
  inputValue = 'test';
  

  constructor(){
    for(let k = 1; k <= 8; k++){
      this.detArray.push(new Det(k,`Датчик ${k}`));
    }
  }
  new(){ 
    if (this.detArray.length != 0){
      let id = this.detArray[this.detArray.length-1].id;
      this.detArray.push(new Det(id + 1, `Датчик ${this.inputName}`));
    }else{
      this.detArray.push(new Det(1, this.inputName));
    }
  }
  delete(item){
    let index = this.detArray.indexOf(item,0);
    this.detArray.splice(index,1);
  }

  

}
