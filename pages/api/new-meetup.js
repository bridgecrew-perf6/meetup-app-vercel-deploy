// /api/new-meetup     is going to be the endpoint url

const handler = async (req, res) => {
   if (req.method === 'POST') {
       const data = req.body
       console.log(req)
       //
       // const client = await MongoClient.connect('mongodb+srv://mthrfckr:0YRCwLmXQkFAygzH@cluster0.l1nje.mongodb.net/meetups?retryWrites=true&w=majority')
       //
       // const db = client.db
       //
       // const meetupsCollection = db.collection('meetups')
       // const result = await meetupsCollection.insertOne(data)
       //
       // console.log(result)
       //
       // await client.close()
       //
       // res.status(201).json({message: 'Meetup inserted'})

       const { MongoClient } = require('mongodb');
       const uri = "mongodb+srv://mthrfckr:Eh7TpGltO4Yy6Q7e@cluster0.l1nje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
       try {
           await client.connect()
           const collection = client.db("meetups").collection("meetups");
           const result = await collection.insertOne(data)
           console.log(result)
           await client.close();
           res.status(201).json({message: 'Meetup inserted'})
       } catch (e) {
           console.log(e.message)
       }



   }
}

export default handler
