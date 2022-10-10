import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainerComponent } from './starwars/containers/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDisplayComponent } from './starwars/components/planet-display/planet-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ContainerComponent,
    PlanetDisplayComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
