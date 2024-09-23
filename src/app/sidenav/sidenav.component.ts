import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    document.getElementById('sidebar')?.classList.toggle('show', this.sidebarVisible);
  }



  




  activeNav: string = '#home';

  setActiveNav(sectionId: string) {
    this.activeNav = sectionId;
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Optional: Update activeNav based on scroll position
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= window.innerHeight / 2) {
        current = `#${section.id}`;
      }
    });

    this.activeNav = current;
  }


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



  // header_variable=true;
  // @HostListener("document: scroll")
  // scrollfunction(){
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
  //     this.header_variable=true;
  //   }
  //   else{
  //     this.header_variable=false;
  //   }
  // }

}
