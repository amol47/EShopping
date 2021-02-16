import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: any;
  productDetails: any = [];
  productData:any = [];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {
      this.productId = data.get('id');
      console.log(this.productId);

      //fetach product details by Product id
      this.productService.getProductDetails(this.productId).subscribe(data => {
        this.productData = data;
        this.productDetails = this.productData[0];
        console.log(this.productDetails);
        
      });

    });

  }

  naviagetion(){
    this.route.navigateByUrl('products');
  }

}
