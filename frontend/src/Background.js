import background from './images/sports.jpg'
const Background = ({appname}) => {
    return(
        <div className="bg">
            <img className='background' src={background} alt='refresh'/>
            <h1 className='header'>Welcome to {appname}</h1>
        </div>
    );
}
export default Background;