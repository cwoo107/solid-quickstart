// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <!DOCTYPE html>
<html>
	<head>
		<base href="http://go.pardot.com" >
		<meta charset="utf-8"/>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="description" content="%%description%%"/>
		<title>%%title%%</title>
		<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	</head>
	
	<body style="background-color: #4b534f">
 <style>
	    body form.form {
    width:100%;
    max-width:500px;
    margin:0 auto;
}
body form.form p.no-label, 
body form.form p.email-pref {
    margin-left:0;
}
body form.form p label.inline {
    font-size:15px;
    color:#5d5c5c;
}

body form.form p.email-pref span.description {
    font-size:13px;
    color:#7b7a7a;
}
body form.form p label {
    /* stack the label on top of the form field */
    float:none;
    text-align:left;
    /* label font styling */
    font-weight:normal;
    font-size:15px;
    padding-bottom:5px;
    color:#5d5c5c;
}
/* hide the required star */
body form.form p.required label, 
body form.form span.required label {
    background:none;
}
body form.form input.text {
    width:100%; /* give it a width to be responsive */
    padding:5px;
    
}

/* Submit button properties */
body form.form p.submit input {
    background:#DA8A26;
    color:#FFF;
    border:0;
    padding:10px 35px;
    font-style: normal;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.6923em;
    letter-spacing: 2px;
    cursor:pointer;
}
/* Submit button hover */
body form.form p.submit input:hover {
    background: #b8741f;
}
/* the submit button wrapper */
body form.form p.submit {
    margin-left:0; /* get rid of the default left margin */
    width:100%;  /* give it a width in order to center the button */
    text-align: center; /* center the button */
}

/* hide the regular checkbox */
#pardot-form .pd-checkbox input {
  opacity: 0;
  position: absolute;
}
 

/* position the label */
#pardot-form .pd-checkbox input, #pardot-form .pd-checkbox label {
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  cursor: pointer;
}
#pardot-form .pd-checkbox label {
  position: relative;
}
 
/* style the unchecked checkbox */
#pardot-form .pd-checkbox input+label:before {
  content: '';
  background: #fff;
  border: 2px solid #ddd;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  padding: 0px;
  margin-right: 10px;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
}
 
/* style the checked checkbox */
#pardot-form .pd-checkbox input:checked+label:before {
  content: "\2713";
  background: #DA8A26;
  color: #fff;
  border-color: #DA8A26;
}
 a {
     color: #4b534f;
 }
	</style>
    <div class="container" style="margin-top:20px; background-color: white; border-radius: 20px;">
      <div class="py-3">
        <div class="text-center">
        <img class="d-block mx-auto mb-4" src="https://usanorth811.org/images/underground-service-alert.png" alt="underground service alert" width="250">
<div>
        <div class="preference-container text-left">
        	%%Content%%
        </div>
      </div>
 
      
    </div>
     </div>
    </div>

  </body>
</html>
  );
}
