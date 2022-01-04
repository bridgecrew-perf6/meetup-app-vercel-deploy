import React from 'react';
import MeetupList from "../../components/meetups/MeetupList";

import Head from "next/head";
import {MongoClient} from "mongodb";

const Meetups = (props) => {

    return (
        <>
            <Head>
                <title>List all meetups</title>
                <meta
                    name='description'
                    content='List some meetups, BITCH'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    );
};

export const getStaticProps = async () => { // prerender this page on server and fetching data to it
    // some logic

    const client = await MongoClient.connect("mongodb+srv://mthrfckr:Eh7TpGltO4Yy6Q7e@cluster0.l1nje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    const collection = client.db("meetups").collection("meetups");

    const meetups = await collection.find().toArray()

    await client.close()

    return {
        props: {
            meetups: meetups.map(m => ({
                title: m.title,
                address: m.address,
                image: m.image,
                description: m.description,
                id: m._id.toString()
            }))
        },
        revalidate: 1  //seconds to re pre render from next
    }
}

// export const getServerSideProps = async (context) => { // the difference is that this one not runs on build, but always runs after deployment
//     //any logic will run on server
//
//     const req = context.req // we use this function is we need these(req, res) and if we need it to be regenerated on every request
//     const res = context.res
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default Meetups;
