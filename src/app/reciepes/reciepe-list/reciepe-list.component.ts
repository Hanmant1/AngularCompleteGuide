import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reciepe } from '../reciepe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  @Output() reciepeWasRecieved = new EventEmitter<Reciepe>();
  reciepes: Reciepe[] = [
    new Reciepe(
      'A Test Reciepe',
      'This is reciepe description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Reciepe(
      'Another Reciepe',
      'This is another reciepe description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    )
  ];
  constructor() {
    console.log(this.reciepes);
  }

  ngOnInit() {
  }

  onReceipeSelected(reciepe: Reciepe) {
    this.reciepeWasRecieved.emit(reciepe);
  }

}
