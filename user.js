
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jadhavviraj270:gVGYBImb84ngbses@cluster0.gjxxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     client.connect();
//     // Send a ping to confirm a successful connection
//    client.db("v").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//    client.close();
//   }
// }
// run().catch(console.dir);



const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://jadhavviraj270:gVGYBImb84ngbses@cluster0.gjxxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    // await client.db("v").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Select the database and collection
    const db = client.db("v");
    const collection = db.collection("myCollection");

    // Insert multiple documents (data) with different IDs
    const documents = [
      {_id:5, name:"Neha",age:18, course:"Computer Engineering"}
    ];

    // Insert the documents
    const result = await collection.insertMany(documents);

    console.log(`${result.insertedCount} documents were inserted with IDs: ${result.insertedIds}`);

  } catch (error) {
    console.error("Error connecting to MongoDB or inserting data:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
