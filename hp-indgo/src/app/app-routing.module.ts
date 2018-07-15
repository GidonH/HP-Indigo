import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PressInstalationComponent} from "./press-instalation/press-instalation.component";
import {ThreeComponent} from "./three/three.component";
import {FourComponent} from "./four/four.component";

const routes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'press-instalation', component: PressInstalationComponent},
    {path: 'three', component: ThreeComponent},
    {path: 'four', component: FourComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
