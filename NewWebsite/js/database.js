var dadoss = document.getElementById('dadoss');
var dbRef  = firebase.database().ref().child('Volume');
dbRef.on('value', snap => dadoss.innerText = snap.val());

var tempo = document.getElementById('tempo');
var dbRef2  = firebase.database().ref().child('Tempo');
dbRef2.on('value', snap => tempo.innerText = snap.val());

var preco = document.getElementById('preco');
var dbRef3  = firebase.database().ref().child('Preço');
dbRef3.on('value', snap => preco.innerText = snap.val());

