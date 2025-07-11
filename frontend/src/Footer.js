import {format} from 'date-fns';

const Footer = ({appname}) =>
    {
        const currentYear = format(new Date(),'yyyy');
        return(
            <footer className='footer'>
                <p>copyright &copy; {currentYear} {appname} (Harish's Project)</p>
            </footer>
        );
    }
    export default Footer;