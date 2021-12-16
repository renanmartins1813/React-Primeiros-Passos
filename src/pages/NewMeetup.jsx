import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'
const url = 'https://acareactcrashcourse-default-rtdb.firebaseio.com/'
export default function NewMeetup() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
            `${url}meetup.json`,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then( ()=>{
            navigate('/')
        });
    }

    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}