import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-mobile',
  templateUrl: './app-mobile.component.html',
  styleUrls: ['./app-mobile.component.scss']
})
export class AppMobileComponent {
  @Input() name;
  @Input() playerActive: boolean=false;

}
