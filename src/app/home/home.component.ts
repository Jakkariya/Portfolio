import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toGetintouch(){
    document.getElementById("get-in-touch")?.scrollIntoView({behavior:"smooth"});
  }




  textToType = 'Java Full Stack Developer';
  typingText = '';
  private index = 0;
  private typingSpeed = 150; // Adjust typing speed in milliseconds
  private delayBetweenLoops = 1000; // Delay between typing loops

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    if (this.index < this.textToType.length) {
      this.typingText += this.textToType.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTypingEffect(), this.typingSpeed);
    } else {
      // After typing completes, pause for a moment and reset
      setTimeout(() => {
        this.resetTypingEffect();
      }, this.delayBetweenLoops);
    }
  }

  resetTypingEffect() {
    this.typingText = '';  // Clear the typed text
    this.index = 0;        // Reset the index to start typing again
    this.startTypingEffect();
  }


}
