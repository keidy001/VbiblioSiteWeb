import { LivreServiceService } from './../service/livre-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.scss']
})
export class DetailLIvreComponent implements OnInit {
  detailLivre:any;
  livrefile: any;
  photo: any;
  constructor(

    private service:LivreServiceService,
    @Inject(MAT_DIALOG_DATA) public idLivre: number,
  ) { }

  ngOnInit(): void {
    this.livrefile = this.service.livrefile;
    this.photo = this.service.img;
    this.showLivre()
  }
  showLivre(){
    this.service.getLivreById(this.idLivre).subscribe((data)=>{
      this.detailLivre = data;
    })
  }
}
