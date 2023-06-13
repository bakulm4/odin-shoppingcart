 import { NavLink } from "react-router-dom";
const Home = () =>{
    return (
        <div className='home'>
            <h1>Transform your space from ordinary to extraordinary with our stunning collection of accent furniture.</h1>
            <NavLink to='/store'>Shop Our Collection</NavLink>
        </div>
    )
}

export default Home;