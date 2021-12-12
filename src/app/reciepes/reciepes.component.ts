import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../reciepes/reciepe.model';
import { ReciepeService } from './reciepe.service';
@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {
  private selectedReciepe:Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit() {
    this.reciepeService.receipeSelected
    .subscribe((reciepe: Reciepe) => {
      this.selectedReciepe = reciepe;
    })
  }
}
