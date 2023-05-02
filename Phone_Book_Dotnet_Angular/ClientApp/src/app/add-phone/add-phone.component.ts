import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Values } from '../app.types';
@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  phone: Values = {
    name: '',
    surname: '',
    phone: '',
  };


  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') private baseUrl: string, @Optional() @Inject(DIALOG_DATA) public data: Values) { }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {

      this.phone = this.data;

}
  }
  public submit() {
    const login = this.phone;
    console.log("bebra", login);
    this.http.post<void>(this.baseUrl + 'values', {
      Name: login.name,
      Surname: login.surname,
      Phone: login.phone
    }).subscribe();

    /**
     * 
    this.http.put<void>(this.baseUrl + 'values'+'/w', {
      Name: login.Name,
      Surname: login.Surname,
      Phone: login.Phone
    }).subscribe();
    */
    this.router.navigate(['/']);
  }
}
