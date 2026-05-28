import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
    {
    path:'',
    component: BookListComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'add',
    component:AddBookComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'edit/:id',
    component:EditBookComponent,
    canActivate:[AuthGuard]
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class BooksRoutingModule { }
