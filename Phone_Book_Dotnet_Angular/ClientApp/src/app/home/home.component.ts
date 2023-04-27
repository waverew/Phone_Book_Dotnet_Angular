import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phones: PhonebookItem[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PhonebookItem[]>(baseUrl + 'phonebookitem').subscribe(result => {
      this.phones = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
interface PhonebookItem {
  name: string;
  familyName: string;
  number: string;
}
