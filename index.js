const express = require("express");
const qrcode = require("qrcode");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
   res.render("index");
})

app.post("/scan",(req,res)=>{
  const iptext = req.body.text;
  console.log(iptext);
  qrcode.toDataURL(iptext,(err,src)=>{
     res.render("result",{
        qr_code:src,
     })
  });
})

app.listen(port,console.log(`Listening to port ${port}`));
