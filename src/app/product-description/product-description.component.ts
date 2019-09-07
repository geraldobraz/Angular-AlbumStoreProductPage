import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: any
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    console.log('NgInit Description');
    this._productService.getAlbum(1).subscribe(response => {
      console.log('Response:', response)
      this.albumInfo = response;
    });
    
  }

}
