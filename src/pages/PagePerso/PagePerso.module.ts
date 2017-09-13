import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SecondPage } from './PagePerso';

@NgModule({
  declarations: [
    SecondPage
  ],
  imports: [
    IonicModule.forRoot(SecondPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
     SecondPage
  ],
  providers: []
})
export class SecondPageModule {}
