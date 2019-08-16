import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RedComponent} from './red-module/red.component';
import {GreenComponent} from './green-module/green.component';
import {BlueComponent} from './blue-module/blue.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent,
        RedComponent,
        GreenComponent,
        BlueComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
