import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../reciepes/reciepe.model';
@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {
  selectedReciepe:Reciepe;
  constructor() { }

  ngOnInit() {
  }

}
