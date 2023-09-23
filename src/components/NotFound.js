import { Link } from "react-router-dom";
import Hero from "./Hero";

export default function NotFound() {
    return (
        <div>
            <Hero text="Oops! You seem to be lost." />
            <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                    Here are some helpful links:
                </p>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/about'>About</Link>
                </div>
            </div>
            </div>
        </div>
    )
}