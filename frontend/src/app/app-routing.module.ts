import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrijavljivanjeComponent } from './prijavljivanje/prijavljivanje.component';
import { KupacPocetnaComponent } from './kupac-pocetna/kupac-pocetna.component';
import { RadnikPocetnaComponent } from './radnik-pocetna/radnik-pocetna.component';

const routes: Routes = [
  {path: '', component: PrijavljivanjeComponent},
  {path: "kupac", component: KupacPocetnaComponent},
  {path: "radnik", component: RadnikPocetnaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
