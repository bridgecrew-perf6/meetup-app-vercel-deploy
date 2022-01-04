import Head from 'next/head'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta
                    name='description'
                    content='Check some meetups, BITCH'
                />
            </Head>
            <h1>
                Welcome to the meetups app
            </h1>
        </>

    );
};

export default HomePage;
