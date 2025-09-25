const express = require("express")
const jwt=require('jsonwebtoken');
const  bcrypt=require('bcryptjs');
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()

const app=express()
const port=7000

app.use(express.json())
app.use(
  cors({
    origin: "https://nile-art-1.onrender.com", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],  // allowed methods
    credentials: true                           // if you use cookies/auth headers
  })
);

const users = [];  // To store no of users

const secretKey = 'your-secret-key';

// app.get("/sns",(req,res)=>{
//    res.send("hello i am")
// })


// Register route
app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    users.push({username,password:hashedPassword});
    res.sendStatus(201);
    console.log("User registered Successfully")
})

// Login route
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user=users.find((us)=>us.username===username)
    if(user){
       const isValiduser=await bcrypt.compare(password,user.password,);
       if(isValiduser){
            const token=await jwt.sign({username},secretKey,{expiresIn:'1hr'})
            res.json({ token });
            console.log("login Successfully");
       }else{
            res.status(401).json({message:'Invalid Credential,since Password Does not match'})
       }

    }else{
      res.status(401).json({message:'Invalid Credential,since User Not Found,SignUp to Login plz'})
    }
})

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

 uri = "mongodb+srv://arudidi6363_db_user:EvR66HDEGvVUqW8R@cluster0.6dr6z72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

     const colorcollection=client.db("new").collection("message")

  
    app.post("/upload",async(req,res)=>{
      const data=req.body;
      const result=await colorcollection.insertOne(data)
      res.send(result)
    })

    app.get("/get",async(req,res)=>{
      const data=colorcollection.find();
      // console.log ('data in Backend',data)
      const array=await data.toArray()
      res.send(array)
    })

    app.get("/getone/:id",async(req,res)=>{
      const id=req.params.id
      const ob={_id:new ObjectId(id)}
      const data=await colorcollection.findOne(ob)
      res.send(data)
    })


    app.delete("/delete/:id",async(req,res)=>{
      const id=req.params.id
      const ob={_id:new ObjectId(id)}
      const data=await colorcollection.deleteOne(ob)
      res.send(data)
    })

    app.patch("/edit/:id",async(req,res)=>{
      const id=req.params.id

       const ob={_id:new ObjectId(id)}

       const editdata=req.body

       const update={
        $set:{
          ...editdata
        }
       }
       const result=await colorcollection.updateOne(ob,update)
       res.send(result)
    })

  

const arucollection=client.db("new").collection("register")



 app.post("/register",async(req,res)=>{
      const data=req.body;
      const result=await arucollection.insertOne(data)
      res.send(result)
    })
     app.get("/choose",async(req,res)=>{
      const data=arucollection.find();
      // console.log ('data in Backend',data)
      const array=await data.toArray()
      res.send(array)
    })
    
    app.get("/chooseone/:id",async(req,res)=>{
      const id=req.params.id
      const ob={_id:new ObjectId(id)}
      const data=await arucollection.findOne(ob)
      res.send(data)
    })
    app.delete("/remove/:id",async(req,res)=>{
      const id=req.params.id
      const ob={_id:new ObjectId(id)}
      const data=await arucollection.deleteOne(ob)
      res.send(data)
    })
    app.patch("/design/:id",async(req,res)=>{
      const id=req.params.id

       const ob={_id:new ObjectId(id)}

       const editdata=req.body

       const update={
        $set:{
          ...editdata
        }
       }
       const result=await arucollection.updateOne(ob,update)
       res.send(result)
    })













































  
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
  console.log("server is running on port no 7000" )
})




























