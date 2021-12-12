import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reciepe } from '../../reciepe.model';
@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
@Input() reciepe:Reciepe;
@Output() selectedReiepe = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  receipeSelected(){
    this.selectedReiepe.emit();
  }



}
