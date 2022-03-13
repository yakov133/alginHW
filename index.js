console.log("app is loading");
const express = require("express");
const app = express();
const axios = require("axios");
const req = require("express/lib/request");
// used for json inside body 
app.use(express.json());



let db = [];
let check = [];
axios.get("https://picsum.photos/v2/list?page=1&limit=100")
.then((res)=>{
db = res.data
})
.catch((err)=>console.log(err))


app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server"});
});

app.get("/fiveElements",(req,res)=>{
let tempFive = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * db.length)
  if (check.includes(random)){
    i--;
  }
  else{
    check.push(random);
    tempFive.push(db[random]);
  }
}
res.send(tempFive);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
