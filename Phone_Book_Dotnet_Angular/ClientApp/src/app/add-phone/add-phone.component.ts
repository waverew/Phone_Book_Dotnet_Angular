import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Values } from '../app.types';
@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css'],
})
export class AddPhoneComponent implements OnInit {
  phone: Values = {
    name: '',
    surname: '',
    phone: '',
  };
  phones: Values[] = [];
  error: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string,
    @Optional() @Inject(DIALOG_DATA) public data: Values
  ) {
    this.http.get<Values[]>(this.baseUrl + 'values').subscribe(
      (result) => {
        this.phones = result;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      this.phone = this.data;
      this.http.get<Values[]>(this.baseUrl + 'values').subscribe(
        (result) => {
          this.phones = result;
        },
        (error) => console.error(error)
      );
    }
  }
  public submit() {
    const login = this.phone;
    const a = this.checkSurname();
    if (a != false) {
      this.http
        .post<void>(this.baseUrl + 'values', {
          Name: login.name,
          Surname: login.surname,
          Phone: login.phone,
        })
        .subscribe();
      this.router.navigate(['/']);
    }
  }
  public checkSurname() {
    const login = this.phone;
    for (let contact of this.phones) {
      if (contact.surname == login.surname) {
        window.alert('Извините, такая фамилия уже существует');
        return false;
      }
    }
    return true;
  }
}
