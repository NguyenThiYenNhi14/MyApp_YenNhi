import { Component } from '@angular/core';
import { BookAPIServices } from '../myservices/book-apiservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books:any;
  errMessage:string=''
    constructor(private _service: BookAPIServices){
      this._service.getBooks().subscribe({
        next:(data)=>{this.books=data},
        error:(err)=>{this.errMessage=err}
  })
  }


}
