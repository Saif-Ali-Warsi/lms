import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  editForm!: FormGroup;

  bookId!: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService) { }




  ngOnInit(): void {

    this.initializeForm();

    this.getBookId();

    this.getBookDetails();

  }

  initializeForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      publishedYear: ['', Validators.required],
    });
  }

  getBookId() {
    this.bookId = this.route.snapshot.params['id'];
  }

  getBookDetails() {
    this.bookService.getBookById(this.bookId).subscribe((response: any) => {
      console.log(response);

      this.editForm.patchValue(response.book);
    })
  }

  onUpdate() {
    if (this.editForm.invalid) {
      return;
    }

    this.bookService.updateBook(this.bookId, this.editForm.value).subscribe((response: any) => {
      console.log(response);
      alert('Book updated success');

      this.router.navigate(['/dashboard'])
    });

  }

}
