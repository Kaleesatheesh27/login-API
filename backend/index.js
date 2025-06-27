const express=require ("express")
const app=express();
const email="kalees";
const pass=123

app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){
    console.log(req)
    
if(req.body.email===email&&Number(req.body.password)===pass){
    res.send("Login success")
}
 else{
    res.send("pls enter correct identity")
 }   

})


app.listen(3000,function(){
console.log("server started...")

})