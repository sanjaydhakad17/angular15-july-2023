import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'my-app';
  defaultColor: string = 'red';
  color: string = 'blue';
   
  constructor() { }
 
  ngOnInit(): void {}


}
