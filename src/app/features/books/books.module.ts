import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations:[

    AddBookComponent,
    EditBookComponent,
    BookListComponent

  ],

  imports:[

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BooksRoutingModule

  ]
})
export class BooksModule { }
