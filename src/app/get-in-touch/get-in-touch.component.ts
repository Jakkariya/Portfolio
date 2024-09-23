import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {
submit() {
throw new Error('Method not implemented.');
}
form: FormGroup = this.fb.group({
  from_name: ['', Validators.required],
  to_name: ['Admin'],  // No need for validation since it's static
  from_email: ['', [Validators.required, Validators.email]],
  subject: ['', Validators.required],
  message: ['', Validators.required]
});

constructor(private fb: FormBuilder) { }

async send() {
  if (this.form.invalid) {
    alert('Please fill in all required fields correctly.');
    return;
  }

  emailjs.init('Y0BMUivJtxXG8LHlT');
  let response = await emailjs.send("service_ozfsvwg", "template_m874ggm", {
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message: this.form.value.message,
  });

  alert('Message has been sent.');
  this.form.reset();
}



















  // name!: string;
  // email!: string;
  // message!: string;

  // constructor(){}



  // submitForm(){
  //   const message='my name is ${this.name}'
  //   alert('i am submitting the form')
  // }
}
