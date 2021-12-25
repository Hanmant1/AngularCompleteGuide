import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';
@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  reciepe: Reciepe;
  private id: number;
  constructor(private reciepeService: ReciepeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
        this.reciepe = this.reciepeService.getReciepe(this.id);
      });
  }

  onAddToShoppingList() {
    this.reciepeService.addIngredientToShoppingList(this.reciepe.ingredient)
  }

  onEditReciepe() {
    this.router.navigate(['../', this.id, `edit`], { relativeTo: this.route });
  }
}
