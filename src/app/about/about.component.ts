import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  toGetintouch(){
    document.getElementById("get-in-touch")?.scrollIntoView({behavior:"smooth"});
  }

}
