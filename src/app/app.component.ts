import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string='Counter App';
  count:number=0;
  //logic_building

  handleIncrease=()=>{
    if(this.count>=10){
      this.count=10;
    }
    else{
    this.count=this.count+1;
    }
  }
  handleDecrease=()=>{
    if(this.count<=0){
      this.count=0;
    }
    else{
    this.count=this.count-1;
    }
  }
  handleReset=()=>{

    this.count=0;

}
}
