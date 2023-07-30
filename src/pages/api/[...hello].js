
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news:arif123@cluster0.wg8wdsp.mongodb.net/news?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req ,res) {
  const { pathname,url ,query } = req;
 
   await client.connect();
   console.log("connection established")
   if (req.method === "GET") {
  
    if (url === "/api/news") {
      const news = await client.db("news").collection("news").find({}).toArray();
      res.json(news);
    } else {
  
    }
  } else if (req.method === "POST") {
  
  }


}
export default run;