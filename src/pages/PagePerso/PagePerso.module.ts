import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SecondPage } from './PagePerso';
@NgModule({
  declarations: [
    HomePage,
    SecondPage
  ],
  imports: [
    IonicModule.forRoot(HomePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    SecondPage
  ],
  providers: []
})
export class AppModule {}