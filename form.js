function store(){
  let storefn = document.getElementById('first').value;
  let storemn = document.getElementById('middle').value;
  let storeln = document.getElementById('last').value;
  let storead = document.getElementById('address').value;
  let storepn = document.getElementById('phonenum').value;
  let storeem = document.getElementById('email').value;
  let storename = storefn + " " + storemn + " " + storeln;

  localStorage.setItem('nameee', storename);
  localStorage.setItem('addeee', storead);
  localStorage.setItem('pneee', storepn);
  localStorage.setItem('emeee', storeem);
}

document.getElementById('nameyo').innerHTML=localStorage.getItem('nameee');
document.getElementById('addressyo').innerHTML=localStorage.getItem('addeee');
document.getElementById('phoneyo').innerHTML=localStorage.getItem('pneee');
document.getElementById('emailyo').innerHTML=localStorage.getItem('emeee');