import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';
@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  @Input() reciepe: Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.reciepeService.addIngredientToShoppingList(this.reciepe.ingredient)
  }
}
