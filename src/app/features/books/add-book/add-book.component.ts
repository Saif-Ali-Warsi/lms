import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BooksService) { }

  ngOnInit(): void {

    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      publishedYear: ['', Validators.required],
    })

  }

  onSubmit() {
    console.log(this.bookForm.value);

    if (this.bookForm.invalid) {
      return;
    }

    this.bookService.addBook(this.bookForm.value).subscribe((response) => {
      console.log(response);
      alert('book added success');
      this.bookForm.reset();
    })
  }



}
