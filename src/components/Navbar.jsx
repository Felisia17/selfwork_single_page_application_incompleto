import { Link } from "react-router";

export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    {/* <a className="link1" href="/posts">Posts</a> */}
                    <Link className="link1" to={'/'}>Homepage</Link>
                </li>
                <li>
                    {/* <a className="link2" href="/detail">Datails</a> */}
                    <Link className="link2" to={'/posts'}>Posts</Link>
                </li>
            </ul>
        </nav>
    )
}