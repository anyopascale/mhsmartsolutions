// Angular
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';


// Compomentes /
import { AppComponent } from './app.component';
import { FifthSectionComponent } from './components/fifth-section/fifth-section.component';
import { FourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from './services/translate.service';

//pipes
import { TranslatePipe } from './pipes/translate.pipe';


export function TranslateFactory( provider: TranslateService ){
  return () => provider.getData();
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: TranslateFactory,
      deps: [TranslateService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
