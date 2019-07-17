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
      icon: 'american-football',
      redirectTo: '/home',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ListOrder {
  icon: string,
  name: string,
  redirectTo: string,
}
