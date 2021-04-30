import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = "No server was created!";
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
