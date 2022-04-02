import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LivreServiceService } from './../service/livre-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import  { saveAs } from 'file-saver';
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
    private matDialog : MatDialog,

    ) { }

  ngOnInit(): void {

    this.matDialog.closeAll();
    this.pdfSrc =this.service.livrefile+'/'+this.route.snapshot.params.id;
  }
  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit', 'page-height'];
  pdfQuery = '';
  totalPages!: number;

  zoomIn() {
    this.zoom += 0.05;
  }

  zoomOut() {
    if (this.zoom > 0.05)
      this.zoom -= 0.05;
  }
  zoomD(){
    this.zoom =1
  }
  rotateDoc() {
    this.rotation += 90;
  }
  download(){



        var blob = new Blob([this.pdfSrc], {type: 'application/pdf'});
        saveAs(this.pdfSrc, "testData.pdf");
  }

  // Event for search operation
  // searchQueryChanged(newQuery: string) {
  //   if (newQuery !== this.pdfQuery) {
  //     this.pdfQuery = newQuery;
  //     this.pdfComponent.pdfFindController.executeCommand('find', {
  //       query: this.pdfQuery,
  //       highlightAll: true
  //     });
  //   } else {
  //     this.pdfComponent.pdfFindController.executeCommand('findagain', {
  //       query: this.pdfQuery,
  //       highlightAll: true
  //     });
  //   }
  // }

  // Event handler when new PDF file is selected
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  callBackFn(event:any) {
    console.log('callBackFn', event);
    // Setting total number of pages
    this.totalPages = event._pdfInfo.numPages
  }
  pageRendered(event:any) {
    console.log('pageRendered', event);
  }
  textLayerRendered(event:any) {
    console.log('textLayerRendered', event);
  }
  onError(event:any) {
    console.error('onError', event);
  }
  onProgress(event:any) {
    console.log('onProgress', event);
  }
}
