import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  reciepes: Reciepe[];
  constructor(private reciepeService: ReciepeService,
    private router: Router,
    private route: ActivatedRoute) {
    console.log(this.reciepes);
  }

  ngOnInit() {
    this.reciepes = this.reciepeService.getReciepes();
  }

  onNewReciepe() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
