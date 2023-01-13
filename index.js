function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
 if (hora >= 0 && hora<12){
   //Bom dia
   img.src = 'https://user-images.githubusercontent.com/110827553/212241271-ed544701-e004-42ae-a9e8-335f21385d56.jpg'
   document.body.style.background ='#a1b4bb'
 }else if (hora >= 12 && hora < 18) {
   //boa tarde
   img.src ='https://user-images.githubusercontent.com/110827553/212241451-86f7a87c-436d-4abb-9318-18d9619c1e93.jpg'
   document.body.style.background ='#747352'
 }else {
 
   //Boa noite
   img.src ='https://user-images.githubusercontent.com/110827553/212241472-86186a86-1db5-4d58-bcbf-28d00105cb2c.jpg'
   document.body.style.background ='#193258'
 }


}