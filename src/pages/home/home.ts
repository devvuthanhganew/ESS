import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PagePersonnellePage} from '../page-personnelle/page-personnelle'
import {Http} from '@angular/http';

declare var atlan: any; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public connection_email: string;
	public connection_pwd: string;
 
  constructor(public navCtrl: NavController, public $http: ng.IHttpService) {
	 const sage_token='010000000000000000000000F700000080F61C9842D7E049670CDE72387AD42EE61E7777C0D8AC1CBC9A2C014740DAFBFB239697357B648D27814A1194F6AB8F63F6208293A39E23D08988D974614ECA7D5E6FBEBBE0F86B338E8CCF0F7A4DE771C7340C98872555AB408C052D46C02BF7717F872F6D3A9674C4A02B4BFF8E631F950EF845B96FA616F71BBCC52A56205FCC40B2BB85563C25F91B46CE2DF4A1A6A571A0C63B6ACA99F020666F24ADF684E00E0B5C2181EE64DDF0EECD0C93AB059AAECAC6D238F27B5D63366046CAB29900D77CCD8B45D5C104EBD7C6385C520A6C3C75ECA3E910A27D60B64A1CA8CD30CF12477696A2C5C6306C6638FF34E11BEE7A87E5A5BB43';
	 const url_authentication='http://win-9u040a2kpbv:83/adelerh/server/soap.l1000?wsdl=Sage1000Authentication';
	 const url_ws='http://win-9u040a2kpbv:83/adelerh/server/soap.l1000?wsdl=WebServiceRessourcesHumaines';
  }

  doConnection(){
	  let var_email=this.connection_email;
	  let var_pwd=this.connection_pwd;
	   
		if (var_email==undefined || var_email=="")
		{
			alert("Please mention the email address");
			return;
		}

		if (validateEmail(var_email)==false)
		{
			alert("Invalid email address")
			this.connection_email="";
			return;
		}
	
		if (var_pwd==undefined)
			{
				var_pwd='';
			}
	
	Autentication_get_sessionId();
	
	//change page
	//this.navCtrl.push(PagePersonnellePage, {
	//	 firstPassed: var_email,
	//	 secondPassed: var_pwd
	  //});
	  //this.connection_email='';
	  //this.connection_pwd='';
  } //doConnection
  
  PWDForgotten(){
	  alert("ok")
  } //MDPOublie
  
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function soapRequest(){
	let jeton='010000000000000000000000F700000080F61C9842D7E049670CDE72387AD42EE61E7777C0D8AC1CBC9A2C014740DAFBFB239697357B648D27814A1194F6AB8F63F6208293A39E23D08988D974614ECA7D5E6FBEBBE0F86B338E8CCF0F7A4DE771C7340C98872555AB408C052D46C02BF7717F872F6D3A9674C4A02B4BFF8E631F950EF845B96FA616F71BBCC52A56205FCC40B2BB85563C25F91B46CE2DF4A1A6A571A0C63B6ACA99F020666F24ADF684E00E0B5C2181EE64DDF0EECD0C93AB059AAECAC6D238F27B5D63366046CAB29900D77CCD8B45D5C104EBD7C6385C520A6C3C75ECA3E910A27D60B64A1CA8CD30CF12477696A2C5C6306C6638FF34E11BEE7A87E5A5BB43';
	let return_value=	'<?xml version="1.0" encoding="UTF-8"?>'+
						'<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
						'<SOAP-ENV:Header/>'+
						'<SOAP-ENV:Body>'+
						'<ns1:LocalServiceLoginToken xmlns:ns1="http://www.sage.com/fr/line1000/Sage1000Authentication">'+
						'<ns1:token>'+jeton+'</ns1:token>'+
						'</ns1:LocalServiceLoginToken>'+
						'</SOAP-ENV:Body>'+
						'</SOAP-ENV:Envelope>'; 
	
	return return_value;
}

function Autentication_get_sessionId() { 
	let url_autentication2='http://win-9u040a2kpbv:83/adelerh/server/soap.l1000?wsdl=Sage1000Authentication';
	let url_autentication1='http://win-9u040a2kpbv:83/adelerh/server/soap.l1000';
	
	/*
	let xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', url_autentication1, true);
 
	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
				let response_txt=readBody(xmlhttp);
				response_txt=response_txt.trim();
				if (response_txt!="")
					{alert(readBody(xmlhttp));}
                }
            }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
	xmlhttp.send(soapRequest());
*/
 
let query = {
	method: 'POST',
	url: url_autentication2,
	data: soapRequest(),
	datatype: "text/xml; charset=utf-8",
  headers: {"Content-Type": "application/xml"}
  }

   this.http.post(query)
   .success(function (query) {
     alert("success");
	   //$scope.PostDataResponse = query["data"];
   })
   .error(function (query) {
	   alert("error");
     //$scope.ResponseDetails = "Data: " + query["data"]+
		 //  "<hr />status: " + query["status"];
   });


}
		
function OnSuccess(data, status)
{
	//alert(data.d);
alert("OnSuccess");
}

function OnError(request, status, error)
{
	alert('error');
}

function readBody(xhr) {
    let data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        //data = xhr.response;
		data = xhr.responseText;
    }
    return data;
}		
		
