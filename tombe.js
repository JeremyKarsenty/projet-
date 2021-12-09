

// JavaScript Document

function deplace () {
  for (var i = 0; i < nbFormules; i++) {
    if (formules[i]["left"] > largeurG) {
      formules[i]["left"] = 0;
      formules[i]["top"] = Math.floor(Math.random()*hauteurG);
    } else 
      formules[i]["left"] += 1;
    document.getElementById('g'+i).style.top = formules[i]["top"]+'px';
    document.getElementById('g'+i).style.left = formules[i]["left"]+'px';
  }
}

function deplaceSur (id) {
  //spécifier le nombre d'objets ici
  nbFormules = 4;
  //la dimension de l'objet
  objectWidth = 123;
  objectHeight = 30;
  //dimension de la zone
  largeurG = parseInt(document.getElementById(id).style.width.substr(0, document.getElementById(id).style.width.length-2));
  hauteurG = parseInt(document.getElementById(id).style.height.substr(0, document.getElementById(id).style.height.length-2));
  largeurG -= objectWidth;
  hauteurG -= objectHeight;
  formules = new Array();
  for (var i=0; i < nbFormules; i++) {
    formules[i] = new Array();
    formules[i]["left"] = Math.floor(Math.random()*largeurG);
    formules[i]["top"] = Math.floor(Math.random()*hauteurG);
 
    document.write ('<span id="g'+i+'" style="position: absolute; left: '+formules[i]["left"]+'px; top: '+formules[i]["top"]+'px">');
    // placer ici l'objet qui tombe !
    document.write ('<img src="images/huawai.png">');
    document.write ('<img src="images/samsung.png">');
    document.write ('<img src="images/apple.png">');
    document.write ('</span>');
  }
  
  intervalG = window.setInterval ("deplace()", 10);
}