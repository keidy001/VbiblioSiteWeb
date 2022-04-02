import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'accueil', component:AccueilComponent},
  { path:'pdfreader/:id', component:PdfReaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
