import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReciepesComponent } from "./reciepes/reciepes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: 'reciepes', component: ReciepesComponent},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/reciepes', pathMatch:'full'  },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}