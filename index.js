const url= 'http://34.210.35.174:7000/'
var FormData = require('form-data')
var fs = require('fs')
var fetch = require('node-fetch')
const axios = require('axios')

var app =require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection',function(socket){
    console.log('a user connected')
})


io.on('connection',function(socket){
    socket.on('chat message',function(msg){
        var usuario="marlangas"
        const id  = "15240"
        var data = new FormData()
        data.append('student_id',id)
        data.append('nick',usuario)
        data.append('text',msg)
        const postito={
            method:"POST",
            body: data
          }
          fetch(url,postito)
    })
})

io.on('connection',async function(socket){
    const response = await axios.get(url)
    const message = response.data
    io.emit('chat message',message)

})

http.listen(3000, function(){
    console.log('listening on *:3000')
})