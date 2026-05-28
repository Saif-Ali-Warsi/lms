import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AddBookComponent } from './features/books/add-book/add-book.component';
import { EditBookComponent } from './features/books/edit-book/edit-book.component';
import { BookListComponent } from './features/books/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/add',
    component: AddBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/edit/:id',
    component: EditBookComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
