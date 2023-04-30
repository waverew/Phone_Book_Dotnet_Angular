import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
  
export class HomeComponent implements OnInit {
  public phones: Values[] = [];
  public img: string =  "https://cdn.onlinewebfonts.com/svg/img_165402.png"
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Values[]>(baseUrl + 'values').subscribe(result => {
      this.phones = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }
  public addPhone() {
    this.http.post<void>(this.baseUrl + "values", {
      Name: "a",
      Surname: "b",
      Phone: "+1"    }).subscribe()
  }
}
interface Values {
  surname: string;
  name: string;
  phone: string;
}
