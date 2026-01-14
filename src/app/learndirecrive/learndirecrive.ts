import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirecrive',
  imports: [],
  templateUrl: './learndirecrive.html',
  styleUrl: './learndirecrive.css',
})
export class Learndirecrive {
  flag_value:number=1
  changeView()
  {
    if(this.flag_value==1)
      this.flag_value=2
    else
      this.flag_value=1
  }
  products=["Thuốc Lào", "Thuốc Lá", "Thuốc Trị Hôi Nách"]
  customers= [
    {"id":"c1", "name":"obama","phone":"113"},
    {"id":"c2", "name":"obama","phone":"114"},
    {"id":"c3", "name":"obama","phone":"115"}
  ]

}
