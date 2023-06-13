import {Link} from 'react-router-dom';

const NotFound = ()=>{
    return (
        <div className='not-found'>
            <h2>We can't seem to find the page you are looking for.</h2>
            <p>Go to <Link to='/'>Homepage</Link></p>
        </div>
    )
}

export default NotFound;