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
      redirectTo: '/footer-tabs/shop',
    },
    {
      name: 'Miel',
      redirectTo: '/footer-tabs/shop',
    },
    {
      name: 'Carnes frías',
      redirectTo: '/footer-tabs/shop',
    },
    {
      name: 'Huevos',
      redirectTo: '/footer-tabs/shop',
    },
    {
      name: 'Carnes',
      redirectTo: '/footer-tabs/shop',
    },
    {
      name: 'Cereales y otros',
      redirectTo: '/footer-tabs/shop',
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
