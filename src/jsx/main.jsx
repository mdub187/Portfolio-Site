
import videoBg from '../assets/movie.mp4'
import react from 'react'
const Main = () => {
    return (
        <div classname='main'>
            <video src={videoBg} autoPlay loop />
        </div>
    )
}

export default Main
