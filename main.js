function del(){
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

var dois=document.getElementById('dois');
dois.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circulo');
    body.classList.add('ativar1');
    body.classList.remove('ativar2');
    toggle.style.left='36%';
})
var um=document.getElementById('um');
um.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circulo');
    body.classList.remove('ativar1');
    body.classList.remove('ativar2');
    toggle.style.left='0';
})
var tres=document.getElementById('tres');
tres.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circulo');
    body.classList.add('ativar2');
    body.classList.remove('ativar1');
    toggle.style.left='65%';
})