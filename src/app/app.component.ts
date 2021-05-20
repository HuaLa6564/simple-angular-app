import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //         <h1>Hello from Template</h1>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ DataService]
})
export class AppComponent {
  title = 'my-shiny-new-angular-app';
  name:string="Yuni";
  id:number=100;
  age:number=23;
  result:boolean=true;
}
