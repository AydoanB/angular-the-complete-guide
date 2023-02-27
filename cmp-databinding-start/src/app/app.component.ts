import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any[] = [{ type: 'server', name: 'TestServer', content: 'Testt' }];

  onServerAdded(e: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: e.serverName,
      content: e.serverContent
    });
  }

  onBlueprintAdded(e: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: e.serverName,
      content: e.serverContent
    });
  }
}
