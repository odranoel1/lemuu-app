import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  views: ListOrder[] = [
    {
      name: 'Lácteos',
      redirectTo: '/product',
    },
    {
      name: 'Miel',
      redirectTo: '/product',
    },
    {
      name: 'Carnes frías',
      redirectTo: '/product',
    },
    {
      name: 'Huevos',
      redirectTo: '/product',
    },
    {
      name: 'Carnes',
      redirectTo: '/product',
    },
    {
      name: 'Cereales y otros',
      redirectTo: '/product',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ListOrder {
  name: string,
  redirectTo: string,
}
