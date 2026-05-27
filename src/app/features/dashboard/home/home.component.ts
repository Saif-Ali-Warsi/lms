import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books/books.service';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) { }



  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((response) => {
      console.log(response);
      this.books = response.books;
    })
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    })
  }
}
