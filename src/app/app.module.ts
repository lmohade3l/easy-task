import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './users/user.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, TaskComponent, TasksComponent, UserComponent, HeaderComponent]
})
export class AppModule {

}