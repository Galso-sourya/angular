import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //selector: 'app-root',//we can use this selector as tag or class or even as attribute 
  //here we will use it as class
  selector: '.app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None//emulated is default where it will not style the sub components
})
export class AppComponent {
  title = 'angular-app';
  public name="gggggg"//data is ready here
  public message=""
}
