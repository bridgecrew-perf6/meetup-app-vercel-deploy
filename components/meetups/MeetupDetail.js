import s from './MeetupDetail.module.css'

const MeetupDetail = (props) => {
    return (
        <section className={s.detail}>
            <img
                src={props.imageUrl}
                alt={props.title}
            />
            <h1>
                Some meetup with id: {props.meetupId}
            </h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
};

export default MeetupDetail;
