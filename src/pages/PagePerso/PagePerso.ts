import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'PagePerso',
  templateUrl: 'PagePerso.html',
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class SecondPage {
  public firstParam;
  public secondParam;
  
  public rootPage: any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams){

    //this.firstParam = navParams.get("firstPassed");
    //this.secondParam = navParams.get("secondPassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}
