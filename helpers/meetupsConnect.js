import {MongoClient} from "mongodb";

const url = process.env.MONGO_MEETUPS_URL

const connectToMeetups = async () => {
    return await MongoClient.connect(url)
}

export default connectToMeetups
