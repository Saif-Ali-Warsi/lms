import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from 'src/app/core/models/book.model';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  searchSubject$ = new Subject<string>();

  books: Book[] = [];

  currentPage: number = 1;

  limit: number = 5;

  totalBooks: number = 0;

  searchTerm: string = '';

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();

    this.searchSubject$.pipe(

      debounceTime(500)

    ).subscribe((value) => {

      this.searchTerm = value;

      this.currentPage = 1;

      this.loadBooks();

    })
  }

  loadBooks() {
    this.bookService.getBooks(this.currentPage, this.limit, this.searchTerm).subscribe((response) => {
      console.log(response);
      this.books = response.books;
    })
  }

  onSearch(value: string) {
    this.searchSubject$.next(value);
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    })
  }

}
