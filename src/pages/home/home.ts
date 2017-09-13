import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../PagePerso/PagePerso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 connection_email: string;
 connection_pwd: string;
  constructor(public navCtrl: NavController){}
  
  doConnection(){
	  let var_email=this.connection_email;
	  let var_pwd=this.connection_pwd;
	  	   	   
		if (var_email==undefined || var_email=="")
		{
			alert("The email address is missing");
			return;
		}
		
		if (validateEmail(var_email)==false)
		{
			alert("Invalid email address")
			this.connection_email="";
			return;
		}
	
		if (var_pwd==undefined || var_pwd=="")
			{
				alert("The password is missing");
			}
		else
			{
				this.navCtrl.push(SecondPage);
				//alert("Email = "+var_email+ " PWD = "+var_pwd);
			}
			
		}
  
  PWDForgotten(){
	  
	  alert("ok");
  }

  
}

  
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
