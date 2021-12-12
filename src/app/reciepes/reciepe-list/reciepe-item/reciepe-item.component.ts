import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reciepe } from '../../reciepe.model';
import { ReciepeService } from '../../reciepe.service';
@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
  @Input() reciepe: Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit() {
  }

  receipeSelected() {
    this.reciepeService.receipeSelected.emit(this.reciepe);
  }



}
