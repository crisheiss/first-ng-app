import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { PassworderComponent } from './passworder/passworder.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    PassworderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
