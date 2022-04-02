import { ActivatedRoute } from '@angular/router';
import { LivreServiceService } from './../service/livre-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit {
  pdfSrc: any;
  constructor(
    private service :LivreServiceService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.pdfSrc = this.service.livrefile+'/'+this.route.snapshot.params.idLivre;
  }

}
