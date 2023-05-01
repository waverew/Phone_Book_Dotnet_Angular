import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit(): void {
  }
  public submit(login:any) {
    console.log("bebra", login);
    this.http.post<void>(this.baseUrl + 'values', {
      Name: login.Name,
      Surname: login.Surname,
      Phone: login.Phone
    }).subscribe();

  }
}
