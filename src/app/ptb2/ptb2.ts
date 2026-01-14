import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  imports: [],
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  hsa:string="100"
  hsb:string="100"
  hsc:string="100"
  result:string="..........."
  get_solution(){
    let a=parseFloat(this.hsa)
    let b=parseFloat(this.hsb)
    let c=parseFloat(this.hsc)
    if (a==0)
    {
      if(b==0 && c==0)
      {this.result="PT nay vo so nghieme"}
      else if (b==0 && c!=0)
      {
        this.result="PT nay vo nghiem"
      }
      else{
        let x=-c/b
        this.result="PT co 1 No. x="+x
      }
    }
    else { 
      let delta=Math.pow(b,2)-4*a*c
      this.result="Biện luận theo delta="+delta
      if(delta<0)
      {
        this.result = "PTB2 này vô nghiệm"
      }
      else if (delta==0)
      {
        let x=-b/(2*a)
        this.result="PTB2 nay fcos nghiệm No.kép x1=x2="+x 
      }
      else
      {
        let x1 = (-b-Math.sqrt(delta))/(2*a)
        let x2 = (-b+Math.sqrt(delta))/(2*a)
        this.result="x1="+x1+";x2="+x2
      }
    }
    this.result="tui se giai ptb2 o day: hsa=+a "
  }

}
