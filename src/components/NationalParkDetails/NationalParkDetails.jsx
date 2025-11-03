// src/components/NationalParkDetails/NationalParkDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NationalParkDetails.css'; // Create this CSS file for styling

const NationalParkDetails = () => {
    const { parkCode } = useParams();
    const [parkEvents, setParkEvents] = useState([]);
    const apiKey = import.meta.env.VITE_NATIONAL_PARKS_API_KEY;
    const corsProxyUrl = import.meta.env.VITE_CORS_PROXY_URL;
    const corsProxyApiKey = import.meta.env.VITE_CORS_PROXY_API_KEY;

    // https://www.nps.gov/common/uploads/event_calendar/7F09F190-D9BD-933C-A02CC663CCA83CE6.jpg
    useEffect(() => {
        const fetchParkEvents = async () => {
            try {
                console.log(parkCode);
                const response = await fetch(
                    `${corsProxyUrl}/https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=${apiKey}`,
                    {
                        headers: {
                            accept: 'application/json',
                            'x-api-key': corsProxyApiKey
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setParkEvents(data.data);
            } catch (error) {
                console.error('Error fetching park events:', error);
                setParkEvents([]); // Set to an empty array to handle the error and prevent further issues.
            }
        };

        fetchParkEvents();
    }, [parkCode, apiKey]);

    if (!parkEvents || parkEvents.length === 0) {
        return <div>Loading events... or No events found.</div>; //Clear message to user if now events are available
    }

    return (
        <div>
            {parkEvents.map(event => (

                <div key={event.id} className="event-card">
                    <div className="event-image">

                        {event.images && event.images.length > 0 ? (
                            <img src={`https://www.nps.gov${event.images[0].url}`} alt={event.title}/>
                        ) : null}


                    </div>
                    <div className="event-details">
                        <h2>{event.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: event.description }} /> {/* Render HTML description */}
                        <p>Location: {event.location}</p>
                        <p>
                            Time: {event.times && event.times[0] && event.times[0].timestart}{' '}
                            to {event.times && event.times[0] && event.times[0].timeend}
                        </p>
                        <p>Dates: {event.dates.join(', ')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NationalParkDetails;