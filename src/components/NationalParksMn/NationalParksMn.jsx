// src/components/NationalParksMn/NationalParksMn.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NationalParksMn.css';


const NationalParksMn = () => {
    const [parks, setParks] = useState([]);
    const apiKey = import.meta.env.VITE_NATIONAL_PARKS_API_KEY;
    const corsProxyUrl = import.meta.env.VITE_CORS_PROXY_URL;
    const corsProxyApiKey = import.meta.env.VITE_CORS_PROXY_API_KEY;


    useEffect(() => {
        const fetchParks = async () => {
            try {
                const response = await fetch(
                    `${corsProxyUrl}/https://developer.nps.gov/api/v1/parks?stateCode=MN&limit=5&api_key=${apiKey}`,
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
                setParks(data.data);
            } catch (error) {
                console.error('Error fetching park data:', error);
            }
        };

        fetchParks();
    }, [apiKey]);


    if (!parks || parks.length === 0) {
        return <div>Loading park data or No parks available.</div>;
    }



    return (
        <div>
            {parks.map(park => (
                <div key={park.id} className="park-card">

                    <div className="park-content">
                        <div className="park-image">

                            {park.images && park.images.length > 0 ? (
                                <img src={park.images[0].url} alt={park.fullName} />
                            ) : (
                                <div>No Image Available</div>  //Placeholder if there is no image.
                            )
                            }

                        </div>

                        <div className="park-details">
                            <Link to={`/national-park-details/${park.parkCode}`}><h2>{park.fullName}</h2></Link>

                            <h3>Activities:</h3>
                            <ul>
                                {park.activities.map(activity => (
                                    <li key={activity.id}>{activity.name}</li>
                                ))}
                            </ul>

                            <p>Weather: {park.weatherInfo}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NationalParksMn;