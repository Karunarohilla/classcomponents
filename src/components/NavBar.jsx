import React from "react";
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                
                <Link className="navbar-brand" to="/">Logo</Link>
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    
                </ul>
            </nav>
        </>

    )
}