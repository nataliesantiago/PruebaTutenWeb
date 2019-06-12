import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListDataComponent implements OnInit {

  searchUserForm: FormGroup;
  submitted = false;
  loading = false;
  error;
  rows;
  columns;

 
  constructor(private formBuilder: FormBuilder, private _dataService: DataService) { }

  ngOnInit() {
    this.searchUserForm = this.formBuilder.group({
      emailAdmin: ['', Validators.required],
      emailUser: ['', Validators.required],
      app: ['', Validators.required]
    });

  }

  get f(){
    return this.searchUserForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.searchUserForm.invalid){
      return;
    }

    this.loading = true;

    this._dataService.getData(this.f.emailUser.value, this.f.emailAdmin.value, this.f.app.value).subscribe(
        data => {
          console.log(data)
          this.error = false;
          this.rows = data.map(book => {
            return { "id": book.bookingId,
                     "client": `${book.tutenUserClient.firstName} ${book.tutenUserClient.lastName}`,
                     "createDate": book.bookingTime,
                     "address": book.locationId.streetAddress,
                     "price": book.bookingPrice   
                    };
          });
        
        },
        error => {
          if(error){
            this.error = "No se encontraron resultados";
            this.loading = false;
          }
        }
      )
  }

}
