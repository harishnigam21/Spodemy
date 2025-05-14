import { Link } from "react-router-dom";
import { useState } from "react";
import logo from './images/logo.png';
import arrowsymbol from './symbols/arrowhead_down.png'
const Nav = () => {
    const [category,setCategory] = useState(false);
    const [indoor,setIndoor] = useState(false);
    const [outdoor,setOutdoor] = useState(false);
    
    return(
        <nav className="navbar" style={{position:"fixed"}}>
            <ul className="bar">
                <li className="leftlist" >
                    <li className="list"><Link className="link" to='/'>Home</Link></li>
                    <li className="list" id="category" style={{color:'white',listStyle:'none'}} >
                        <p style={{margin:'0',color:"black"}} onClick={()=>{setCategory(!category);setIndoor(false);setOutdoor(false)}}>Categories<img src={arrowsymbol} id={category?'arr1':'arr1alt'} alt="refresh"/></p>
                        
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
                <li  className="homelogo">
                    <Link to='/'>
                        <img src={logo} alt="refresh"/>
                    </Link>
                </li>
                <li className="rightlist">
                    <li className="list"><Link className="link" to='/signin'>Sign In</Link></li>
                    <li className="list"><Link className="link" to='/signup'>Sign Up</Link></li>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;