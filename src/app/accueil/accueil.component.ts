import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreServiceService } from '../service/livre-service.service';
import {MatDialog} from '@angular/material/dialog';
import 'animate.css';
import { DetailLIvreComponent } from '../detail-livre/detail-livre.component';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  livrefile: any;
  photo: any;
  listLivre: any[] = [];
  format: any;
  idLivre: any;
  slideImg: any;
  filterTerm: any;
  category: any;
  constructor(
    private service :LivreServiceService,
    private route: ActivatedRoute,
    private modalctrl:MatDialog,
    
  ) { }

  ngOnInit(): void {
    this.livrebyformat(this.route.snapshot.params.format);
    this.format = this.route.snapshot.params.format;
    this.livrefile = this.service.livrefile;
    this.photo = this.service.img;
    this.allCategory();


  }

 // content of popover
  async detailLivre(idLivre: any ) {

    const modal = await this.modalctrl.open(DetailLIvreComponent,{
    
      data:idLivre,
    })
     
      
    
    
  }

 // end popover
  livrebyformat(format: string) {
    this.service.livreByFormatNotDeleted('Ebook', false).subscribe((data: any) => {
      this.listLivre = data;

      console.log('Tous les livres ' + JSON.stringify(this.listLivre));
    });
  }
  allCategory(){
    this.service.getAllcategory(false).subscribe((data)=>{
      this.category = data;
      console.log('toutes les category '+ JSON.stringify(this.category));
    });
  }

  tousLivre(){
    console.log('ok');

  }
}
