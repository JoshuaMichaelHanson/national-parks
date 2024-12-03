import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-image">
                {/* You can replace this with your actual image URL */}
                <img src="minnesota-state-park-image.jpg" alt="Minnesota State Park" />
            </div>
            <div className="content">
                <h1>Welcome to Minnesota's State Parks</h1>
                <p>
                    Minnesota boasts a remarkable system of state parks, offering a diverse range of outdoor experiences for nature enthusiasts. From the rugged North Shore of Lake Superior to the serene prairies and forests of the south, these parks showcase the state's natural beauty and provide ample opportunities for hiking, camping, paddling, fishing, and more.
                </p>
                <p>
                    Spanning over 200,000 acres, the state park system encompasses over 75 parks and recreation areas. Itasca State Park, the oldest state park in Minnesota, protects the headwaters of the Mississippi River.  Further north, the parks along the North Shore boast dramatic cliffs, waterfalls, and breathtaking views of Lake Superior. In central and southern Minnesota, explore hardwood forests, sparkling lakes, and tranquil prairies.
                </p>
                <p>
                    Whether you're looking for a weekend getaway or a longer outdoor adventure, Minnesota's state parks offer something for everyone. Discover the rich history, diverse ecosystems, and unparalleled natural beauty that these parks have to offer.  Plan your visit today!
                </p>
            </div>
        </div>
    );
};

export default Home;