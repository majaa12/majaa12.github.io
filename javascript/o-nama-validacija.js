function validacija(){

	if(document.forms[0].ime.value==''){
		alert("Niste uneli vase ime i prezime!");
		document.forms[0].ime.focus();
		return false;
	}

	if(document.forms[0].email.value==''){
		alert("Niste uneli e-mail !")
		document.forms[0].email.focus();
		return false;
	}

	if(document.forms[0].email.value.indexOf('@')==-1){
		alert("Niste uneli e-mail u pravilnom formatu!")
		document.forms[0].email.focus();
		return false;
	}

	if(document.forms[0].textArea1.value==''){
		alert("Niste uneli poruku !")
		document.forms[0].textArea1.focus();
		return false;
	}

	

	return alert("Uspesno ste poslali poruku.");
}