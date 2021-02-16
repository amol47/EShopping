import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  allCategories: any = [];

  constructor(private productService: ProductService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(data => {
      this.allCategories = data;
    });
  }
  
}
