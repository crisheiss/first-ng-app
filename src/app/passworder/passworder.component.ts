import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passworder',
  templateUrl: './passworder.component.html',
  styleUrls: ['./passworder.component.css']
})
export class PassworderComponent implements OnInit {
  showPassword: boolean = true
  counter = 0
  timeStamps = []

  toggleShowPassword() {
    this.showPassword = !this.showPassword
    this.counter += 1
    this.timeStamps = [...this.timeStamps, Date.now()]
    console.log(this.timeStamps)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
