import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phones: string = '';
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string>(baseUrl + 'values/1').subscribe(result => {
      this.phones = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
interface PhonebookItem {
  name: string;
}
