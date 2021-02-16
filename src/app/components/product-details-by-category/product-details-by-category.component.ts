import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-by-category',
  templateUrl: './product-details-by-category.component.html',
  styleUrls: ['./product-details-by-category.component.css']
})

export class ProductDetailsByCategoryComponent implements OnInit {

  categoryId: any;
  categoryProducts: any = []
  page:number = 1;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {
      this.categoryId = data.get('id');
      console.log(this.categoryId);

      //fetach products by category Id
      this.productService.getProductsByCategoryId(this.categoryId).subscribe(data => {
        this.categoryProducts = data;
      });

    });

  }

}
