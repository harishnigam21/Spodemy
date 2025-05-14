import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import logo from '../../images/logo.png';
import arrowsymbol from '../../symbols/arrowhead_down.png'
const Nav = ({user,updateforlogout}) => {
    const [category,setCategory] = useState(false);
    const [indoor,setIndoor] = useState(false);
    const [outdoor,setOutdoor] = useState(false);
    const [profile,setProfile] = useState(false);
    const location = useLocation();
    return(
        <nav className="navbar">
            <ul className="bar">
                <li className="leftlist" >
                    <li className="list"><Link className="link" to={location.pathname}>Home</Link></li>
                    <li className="list" id="category" style={{listStyle:'none'}} >
                        <p style={{margin:'0'}} onClick={()=>{setCategory(!category);setIndoor(false);setOutdoor(false)}}>Categories<img src={arrowsymbol} id={category?'arr1':'arr1alt'} alt="refresh"/></p>
                        
                        {
                            category
                            ?
                            <div className="categorylist">
                                <div className="indoor">
                                <p style={{margin:'0'}} onClick={()=>setIndoor(!indoor)}>Indoor<img id={indoor?'arr2':'arr2alt'} src={arrowsymbol}alt="refresh"/></p>
                                {
                                    indoor
                                    ?
                                    <ul className="indoorlist">
                                        <li>Chess</li>
                                        <li>Carom</li>
                                        <li>Pool</li>
                                        <li>Ludo</li>
                                        <li>Cards</li>
                                        <li>Musical Chair</li>
                                        <li>Table Tennis</li>
                                        <li>Monopoly</li>
                                    </ul>
                                    :
                                    <></>
                                }
                                </div>
                                <div className="outdoor">
                                <p style={{margin:'0'}} onClick={()=>setOutdoor(!outdoor)}>Outdoor<img src={arrowsymbol} id={outdoor?'arr3':'arr3alt'} alt="refresh"/></p>
                                
                                {
                                    outdoor
                                    ?
                                    <ul className="outdoorlist">
                                        <li>Cricket</li>
                                        <li>Football</li>
                                        <li>Basketball</li>
                                        <li>Hockey</li>
                                        <li>kho-kho</li>
                                        <li>bowling</li>
                                    </ul>
                                    :
                                    <></>
                                }
                                </div>
                            </div>
                            :
                            <></>
                        }
                        </li>
                    <li className="list"><Link className="link" to='/blogs'>Blogs</Link></li>
                    <li className="list"><Link className="link" to='/about'>About Us</Link></li>
                </li>
                <li className="logo">
                    <img style={{display:'block',padding:'0.5rem'}} src={logo} alt="refresh"/>
                    <p>Welcome {user.firstname}! as "{user.userType}"</p>
                </li>
                <li className="rightlist">
                    <li style={{margin:'auto',marginRight:'0.5rem'}} className="profile"><CgProfile onMouseEnter={()=>setProfile(!profile)}/></li>
                    {
                        profile
                        ?
                        <div className="profileList" onMouseLeave={()=>setProfile(!profile)}>
                            <ol>
                                <li style={{margin:'auto',fontSize:'2rem',marginRight:'0.5rem'}} className="profile" onClick={()=>setProfile(!profile)}><CgProfile id="profileToogle"/></li>
                                <li>Your Account</li>
                                <li>Your Whish List</li>
                                <li><Link to={updateforlogout} style={{textDecoration:'none'}}>Logout</Link></li>
                            </ol>
                        </div>
                        :
                        <></>
                    }
                </li>
            </ul>
        </nav>
    );
}
export default Nav;