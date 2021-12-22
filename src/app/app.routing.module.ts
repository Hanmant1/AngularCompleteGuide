import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReciepeDetailComponent } from "./reciepes/reciepe-detail/reciepe-detail.component";
import { ReciepeEditComponent } from "./reciepes/reciepe-edit/reciepe-edit.component";
import { ReciepeStartComponent } from "./reciepes/reciepe-start/reciepe-start.component";
import { ReciepesComponent } from "./reciepes/reciepes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/reciepes', pathMatch:'full'  },
    { path: 'reciepes', component: ReciepesComponent, children: [
        {path: '', component: ReciepeStartComponent},
        {path: 'new', component: ReciepeEditComponent},
        {path: ':id', component: ReciepeDetailComponent},
        {path: ':id/edit', component: ReciepeEditComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
   
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}