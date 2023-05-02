import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Values } from '../app.types';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent implements OnInit {
  phone: Values = {
    name: '',
    surname: '',
    phone: '',
  };

  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') private baseUrl: string, @Optional() @Inject(DIALOG_DATA) public data: { contact: Values , index: number }) { }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {

      this.phone = this.data.contact;
      console.log(this.data.index);

    }
  }
  public submit() {
    const id = this.data.index;
    const login = this.phone;
    console.log("bebra", login);
    this.http.put<void>(this.baseUrl + `values/${id}`, {
      Name: login.name,
      Surname: login.surname,
      Phone: login.phone
    }).subscribe();
    window.location.reload();
  }
  public delPhone() {
    const id = this.data.index;
    this.http.delete<void>(this.baseUrl + `values/${id}`).subscribe();
    window.location.reload();
  }

}
