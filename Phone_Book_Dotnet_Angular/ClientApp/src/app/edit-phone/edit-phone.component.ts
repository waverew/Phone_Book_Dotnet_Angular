import { Component, OnInit, Inject, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Values } from '../app.types';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css'],
})
export class EditPhoneComponent implements OnInit {
  phone: Values = {
    name: '',
    surname: '',
    phone: '',
  };
  phones: Values[] = [];
  isButtonDisabled = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') private baseUrl: string,
    @Optional()
    @Inject(DIALOG_DATA)
    public data: { contact: Values; index: number }
  ) {
    this.http.get<Values[]>(this.baseUrl + 'values').subscribe(
      (result) => {
        this.phones = result;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
    if (this.data) {
      this.phone = this.data.contact;
    }
  }
  public submit() {
    const id = this.data.index;
    const login = this.phone;
    if (this.checkSurname() != false) {
      this.http
        .put<void>(this.baseUrl + `values/${id}`, {
          Name: login.name,
          Surname: login.surname,
          Phone: login.phone,
        })
        .subscribe();
      window.location.reload();
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
  public delPhone() {
    const id = this.data.index;
    this.http.delete<void>(this.baseUrl + `values/${id}`).subscribe();
    window.location.reload();
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
