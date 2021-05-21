import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = "No server was created...yet!";
  serverName = '';
  serverCreated = false;
  servers = ['test server', 'test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = `Server is online`;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
