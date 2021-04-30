import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = "No server was created!";

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  ngOnInit(): void {
  }

}