import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'Not created'
  allowNewServer = false;
  serverName=""
  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }
  onCreationServer() {
    this.serverCreationStatus = 'Server was created. Name id: ' + this.serverName
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
  ngOnInit() {
  }

}
