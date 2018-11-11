const url= 'http://34.210.35.174:7000/';
var ul = document.getElementById("mensajeria")
var input = document.getElementById("area")
const box = document.querySelector(".chatbox")


const button = document.getElementById("send").addEventListener("click",function(){
    mandarMensajes(input.value)
    })


function mandarMensajes(mensaje){
    var usuario="marlangas"
    const id  = "15240"
    var data = new FormData()
    data.append('student_id',id)
    data.append('nick',usuario)
    data.append('text',mensaje)
    const otherParam={
        method:"POST",
        body: data
      }
      fetch(url,otherParam)
      .then(function(){
        input.value = ""
        box.scrollTop = box.scrollHeight
        location.reload()
      })
}

fetch(url)
    .then(function(retorno){
        return retorno.json(); //json
    })
    .then(function(jason){
        jason.forEach(function(element){//por cada elemento 
            var nombre = element.nick
            var msg = element.text
            var unido = nombre.concat(":",msg)
            var nodo = document.createTextNode(unido)
            var li = document.createElement("li")
            li.appendChild(nodo)//agrega los elementos a la lista 
            ul.appendChild(li)
        })
        box.scrollTop = box.scrollHeight
    })
