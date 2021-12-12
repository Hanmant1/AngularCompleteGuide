import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  reciepes: Reciepe[];
  constructor(private reciepeService: ReciepeService) {
    console.log(this.reciepes);
  }

  ngOnInit() {
    this.reciepes = this.reciepeService.getReciepes();
  }
}
