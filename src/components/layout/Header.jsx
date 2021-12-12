import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <header>
                <div>Loguinho braba</div>

                <nav>
                    <ul>
                        <li>
                            <Link to='/'>All Meetup</Link>
                        </li>
                        <li>
                            <Link to='/newmeetup'>Add New Meetup</Link>
                        </li>
                        <li>
                            <Link to='/favorites'>My Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
