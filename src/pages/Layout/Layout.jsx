import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import './Layout.css';

const Layout = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const hamburger = document.getElementById('hamburger');
        const nav = navRef.current;

        const handleClick = () => {
            nav.classList.toggle('active');
        };

        hamburger.addEventListener('click', handleClick);

        // Correct way to handle clicks on Link components:
        const links = nav.querySelectorAll('li'); // Select the list items (li) instead of <a>
        links.forEach(link => {
            link.addEventListener('click', handleClick);
        });

        return () => {  // Cleanup
            hamburger.removeEventListener('click', handleClick);
            links.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <>
            <nav ref={navRef}>
                <div id="hamburger" className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/state-parks">State Parks</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;