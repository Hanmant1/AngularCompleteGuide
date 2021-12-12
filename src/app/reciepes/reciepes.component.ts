import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../reciepes/reciepe.model';
import { ReciepeService } from './reciepe.service';
@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css'],
  providers: [ReciepeService]
})
export class ReciepesComponent implements OnInit {
  selectedReciepe:Reciepe;
  constructor() { }

  ngOnInit() {
  }

}
