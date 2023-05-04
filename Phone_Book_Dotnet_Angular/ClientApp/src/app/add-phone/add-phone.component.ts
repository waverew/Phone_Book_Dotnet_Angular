import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Values } from '../app.types';
import { FormsModule } from '@angular/forms';
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
  isButtonDisabled = true;

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
    const check = this.checkSurname();
    if (check != false) {
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
  public validateInputNumber(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43) {
      return false;
    }
    return true;
  }
  public validateInputText(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (!/^[а-яёА-ЯЁ]+$/.test(String.fromCharCode(charCode))) {
      return false;
    }
    return true;
  }
  public checkIfSurnameEmpty() {
    if (this.phone.surname != '') {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }
}
