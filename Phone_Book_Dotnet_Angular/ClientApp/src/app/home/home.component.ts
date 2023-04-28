import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phones: Values[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Values[]>(baseUrl + 'values').subscribe(result => {
      this.phones = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
interface Values {
  surname: string;
  name: string;
  phone: string;
}
