import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-product-creating',
  templateUrl: './product-creating.component.html',
  styleUrls: ['./product-creating.component.css']
})
export class ProductCreatingComponent implements OnInit {
  productForm = this.fb.group({
    title:['',Validators.required],
    Price:['',Validators.required],
    image:['',Validators.required],
    description:['',Validators.required]  
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
