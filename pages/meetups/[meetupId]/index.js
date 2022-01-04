import MeetupDetail from "../../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

const SingleMeetup = (props) => {
    const {meetupId, image, title, address, description} = props.meetupData

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name='description'
                    content='Check some meetups, BITCH'
                />
            </Head>
            <MeetupDetail
                meetupId={meetupId}
                imageUrl={image}
                title={title}
                address={address}
                description={description}
            />
        </>
    );
};

export const getStaticPaths = async () => {
    const client = await MongoClient.connect("mongodb+srv://mthrfckr:Eh7TpGltO4Yy6Q7e@cluster0.l1nje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    const collection = client.db('meetups').collection('meetups')

    const meetups = await collection.find({}, {_id: 1}).toArray()

    await client.close()

    return {
        fallback: 'blocking',
        paths: meetups.map(m => ({
            params: {
                meetupId: m._id.toString()
            }
        }))
    }
}

export const getStaticProps = async (ctx) => {
    const meetupId = ctx.params.meetupId

    const client = await MongoClient.connect("mongodb+srv://mthrfckr:Eh7TpGltO4Yy6Q7e@cluster0.l1nje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    const collection = client.db("meetups").collection("meetups");

    const meetup = await collection.findOne({_id: ObjectId(meetupId)})
    console.log(meetup)

    await client.close()

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            }
        }
    }
}


export default SingleMeetup;
