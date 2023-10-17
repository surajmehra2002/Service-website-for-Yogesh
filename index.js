const express = require('express');

const app = express();
app.use(express.urlencoded()); //this is important when use mongoose

app.use('/css', express.static('css')) // For serving static files
app.use('/images', express.static('images'))
app.use('/javascript', express.static('javascript'))
app.use('/file', express.static('file'))


const port = 3000;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/html/home.html');
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + '/html/about.html');
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + '/html/contact.html');
});
app.get("/example", (req, res)=>{
    res.sendFile(__dirname + '/html/example.html');
});



app.get("/service/lumber", (req, res)=>{
    res.sendFile(__dirname + '/services/lumber.html');
});
app.get("/service/roofing", (req, res)=>{
    res.sendFile(__dirname + '/services/roofing.html');
});
app.get("/service/residential", (req, res)=>{
    res.sendFile(__dirname + '/services/residential.html');
});
app.get("/service/hardware", (req, res)=>{
    res.sendFile(__dirname + '/services/hardware.html');
});
app.get("/service/drywall", (req, res)=>{
    res.sendFile(__dirname + '/services/drywall.html');
});
app.get("/service/commercial", (req, res)=>{
    res.sendFile(__dirname + '/services/commercial.html');
});
app.get("/service/customer/feedback", (req, res)=>{
    res.sendFile(__dirname + '/services/feedback.html');
});




// app.post('/contact',function(req, res){ 
    

    // emailjs.send('service_59oz9c7', 'template_ot43rxv', req.body) //Service_Key  Template_Key   Parameter
    //     .then((res)=>{
            // res.sendFile(__dirname + '/html/contact.html'); 
            
    //     })
    //     .catch((err)=>alert('failed..',err));
    //     res.sendFile(__dirname + '/html/home.html'); 
        
        // });

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});