import { Component } from '@angular/core';
import {InformacionService} from "./informacion.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public _is:InformacionService){

  }
}
