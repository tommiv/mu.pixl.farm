import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { MusicBrainzService } from './services/music-brainz.service';
import { LastFmService } from './services/last-fm.service';

import { AppComponent } from './app.component';
import { ArtistComponent } from './ui-pages/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MusicBrainzService, LastFmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
