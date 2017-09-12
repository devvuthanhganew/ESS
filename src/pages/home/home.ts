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
	  var var_email=this.connection_email;
	  var var_pwd=this.connection_pwd;
	  	   
		   //temp
		   var_email="abc@fgh.aa";
		   var_pwd="aaaaa";
		   
		if (var_email==undefined || var_email=="")
		{
			alert("Veuillez renseigner l'adresse email");
			return;
		}
		
		if (validateEmail(var_email)==false)
		{
			alert("invalid email address")
			this.connection_email="";
			return;
		}
	
		if (var_pwd==undefined || var_pwd=="")
			{
				alert("Veuillez renseigner le mot de passe");
			}
		else
			{
				this.navCtrl.push(SecondPage);
				//alert("Email = "+var_email+ " PWD = "+var_pwd);
			}
			
		}
  
  MDPOublie(){
	  
	  alert("ok");
  }

  
}

  
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
