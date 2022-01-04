import React from 'react';
import {useRouter} from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

const NewMeetUp = () => {
    const router = useRouter()

    const addMeetUpHandler = async (enteredMeetUpData) => {
        console.log(typeof enteredMeetUpData)
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        console.log(data)

        await router.push('/meetups')

    }


    return (
        <>
            <Head>
                <title>Add new meetup</title>
                <meta
                    name='description'
                    content='Add some meetups, BITCH'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
        </>
    );
};

export default NewMeetUp;
