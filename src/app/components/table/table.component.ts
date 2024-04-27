import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
interface products {
  name?: any,
  ID: string,
  count: string,
  discount: string,
  totalPrice: string,
  avatar: string,
  salary: string,
}
interface cols {
  field: string,
  header: string
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols!: cols[];
  products!: products[];
  productName!: string;
  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
    this.translate.get('tableProductName').subscribe(res => this.productName = res);

    this.translate.get('tableCols').subscribe(res => {
      this.cols = [
        { field: 'name', header: res.productName },
        { field: 'price', header: res.productPrice },
        { field: 'count', header: res.productCount },
        { field: 'discount', header: res.productDiscount },
        { field: 'totalPrice', header: res.productTotal },
      ]
    })

    this.products = [
      {
        name: this.productName,
        avatar: "https://s3-alpha-sig.figma.com/img/d5df/9baf/5b845d5b649289426578b53ebaef4c65?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkETUKqbsXiQ2ygCjlYGEjxnM4wq5Xb3vG-oGqPbW4oDUl5T0lcGXaErxmGDAuBdcmPxonQ4iyXztQnjIGGKxJQLxnn54-fi1F5fOKymtqDv1Se0PgX6fAoB1DtaAFTf1yl2jQsHCJiLW8uiMS-Mtlz7B0Yt27QGKwy2-3XEmmEESH05OGD~ASvdsV7ABBucQMEaBBTN5kNZFFwF32sN-XQ~YkqtNNh8p4hBOgffoQnwsNzxqW-H0o4DXqBJgd5ulXB8YMoYYfLNyrxe9DMybku4FMcZYAmpZyZvOhN5iZp2-57IyhQFA-WYIVEd-MwxXmhiLEATeoQQt5i2LC2ieQ__",
        ID: "ID - 587349",
        salary: "200 $",
        count: "3",
        discount: "14 %",
        totalPrice: "600 $"
      },
      {
        name: this.productName,
        avatar: "https://s3-alpha-sig.figma.com/img/d5df/9baf/5b845d5b649289426578b53ebaef4c65?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkETUKqbsXiQ2ygCjlYGEjxnM4wq5Xb3vG-oGqPbW4oDUl5T0lcGXaErxmGDAuBdcmPxonQ4iyXztQnjIGGKxJQLxnn54-fi1F5fOKymtqDv1Se0PgX6fAoB1DtaAFTf1yl2jQsHCJiLW8uiMS-Mtlz7B0Yt27QGKwy2-3XEmmEESH05OGD~ASvdsV7ABBucQMEaBBTN5kNZFFwF32sN-XQ~YkqtNNh8p4hBOgffoQnwsNzxqW-H0o4DXqBJgd5ulXB8YMoYYfLNyrxe9DMybku4FMcZYAmpZyZvOhN5iZp2-57IyhQFA-WYIVEd-MwxXmhiLEATeoQQt5i2LC2ieQ__",
        ID: "ID - 587349",
        salary: "900 $",
        count: "3",
        discount: "14 %",
        totalPrice: "600 $"
      },
      {
        name: this.productName,
        avatar: "https://s3-alpha-sig.figma.com/img/d5df/9baf/5b845d5b649289426578b53ebaef4c65?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkETUKqbsXiQ2ygCjlYGEjxnM4wq5Xb3vG-oGqPbW4oDUl5T0lcGXaErxmGDAuBdcmPxonQ4iyXztQnjIGGKxJQLxnn54-fi1F5fOKymtqDv1Se0PgX6fAoB1DtaAFTf1yl2jQsHCJiLW8uiMS-Mtlz7B0Yt27QGKwy2-3XEmmEESH05OGD~ASvdsV7ABBucQMEaBBTN5kNZFFwF32sN-XQ~YkqtNNh8p4hBOgffoQnwsNzxqW-H0o4DXqBJgd5ulXB8YMoYYfLNyrxe9DMybku4FMcZYAmpZyZvOhN5iZp2-57IyhQFA-WYIVEd-MwxXmhiLEATeoQQt5i2LC2ieQ__",
        ID: "ID - 587349",
        salary: "200 $",
        count: "3",
        discount: "2.5 %",
        totalPrice: "1500 $"
      },
    ]
  }
}
