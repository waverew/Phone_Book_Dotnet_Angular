import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Router } from "@angular/router";
import { Values } from '../app.types';
import { EditPhoneComponent } from '../edit-phone/edit-phone.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public phones: Values[] = [];
  public img: string =  "https://cdn.onlinewebfonts.com/svg/img_165402.png"
  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') private baseUrl: string, private dialog: Dialog) {
    http.get<Values[]>(baseUrl + 'values').subscribe(result => {
      this.phones = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }
  public delPhone(id: number) {

    this.http.delete<void>(this.baseUrl + `values/${id}`).subscribe();
    window.location.reload();
  }
  public addContact() {
    this.router.navigate(['/add-phone']);
  }
  openDialog(contact: Values, index: number): void {
    const dialogRef = this.dialog.open<string>(EditPhoneComponent, {
      width: '400px',
      data: { contact, index}
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}

