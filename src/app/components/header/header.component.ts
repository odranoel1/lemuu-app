import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() text: string;
  @Input() notification:string;

  public show_title:boolean = false;
  public show_picture:boolean = false;
  public show_notification:boolean = false;

  constructor() {
  }

  ngOnInit() {
    if (this.text == 'true') {
      this.show_title = true;
    }

    if (this.image == 'true') {
      this.show_picture = true;
    }

    if (this.notification == 'true') {
      this.show_notification = true;
    }
  }

}

/*
create a flag
change status of flag with html

*/
