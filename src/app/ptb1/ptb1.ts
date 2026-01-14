import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  imports: [],
  templateUrl: './ptb1.html',
  styleUrl: './ptb1.css',
})
export class Ptb1 {
  get_solution(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement){
    let a=parseFloat(hsa.value)
    let b=parseFloat(hsb.value)
    if (a==0 && b==0){
      result.innerHTML="tum lum nghiem"
    }
    else if(a==0 && b!=0)
    {
      result.innerHTML="No nghiem"
    }
    else
    {
      let x=-b/a
      result.innerHTML="x=" +x
    }
  }

}
