const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, './template/index.html'));
    }
    catch(e){
        res.send('error')
    }
})

app.get('/add',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, './template/add.html'));
    }
    catch(e){
        res.send(__dirname )
    }
})

app.get('/minus',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, './template/minus.html'));
    }
    catch(e){
        res.send(__dirname )
    }
})

app.get('/multiply',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, './template/multiply.html'));
    }
    catch(e){
        res.send(__dirname )
    }
})

app.get('/div',(req,res)=>{
    try{
        res.sendFile(path.join(__dirname, './template/div.html'));
    }
    catch(e){
        res.send(__dirname )
    }
})


app.listen(3000,()=>{
    console.log('app is running on port 3000')
})