import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  // declaration only accept Component, Directives and Pipe 
  // but not Services or Module
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
