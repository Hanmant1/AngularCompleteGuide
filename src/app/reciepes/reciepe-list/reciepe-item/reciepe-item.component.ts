import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../../reciepe.model';
@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
  @Input() reciepe: Reciepe;
  @Input() index: number;

  ngOnInit() {
  }
}
