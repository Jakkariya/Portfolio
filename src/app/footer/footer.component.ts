import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }

  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
  }

  toEducation(){
    document.getElementById("education")?.scrollIntoView({behavior:"smooth"});
  }

  toGetintouch(){
    document.getElementById("get-in-touch")?.scrollIntoView({behavior:"smooth"});
  }


}
