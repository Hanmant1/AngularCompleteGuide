import { Component, OnInit } from '@angular/core';
import { ReciepeService } from './reciepe.service';
@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit() {
  }
}
