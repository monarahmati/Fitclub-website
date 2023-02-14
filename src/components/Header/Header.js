import React ,{ useState } from 'react';
import './Header.css'
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'



const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened , setMenuOpened] = useState(false);


    return (
        <div className='header'>
            <img src={Logo} alt='logo' className='logo' />
            {menuOpened === false && mobile === true ? (
            <div 
                style={{ 
                backgroundColor: 'var(--appColor)' ,
                padding:'0.5rem',
                borderRadius:'5px'}}
                onClick={()=>setMenuOpened(true)}
                key={menuOpened}
                > 
                <img 
                src={Bars} 
                alt='bars-home' 
                style={{width:'1.5rem' , height:'1.5rem'}}/> 
                </div>
                ):(
                <ul className='header-menu'>
                    <li> 
                    <Link
                    activeClass='active'
                    onClick={()=>setMenuOpened(false)}
                    smooth={true}
                    to='header'
                    spy={true}
                    >
                    Home
                    </Link>
                    </li>

                    <li> 
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    smooth={true}
                    to='programs'
                    spy={true}
                    >
                    Programs
                    </Link>
                    </li>

                    <li> 
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    smooth={true}
                    to='reasons'
                    spy={true}
                    >
                    why us
                    </Link>
                    </li>

                    <li> 
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    smooth={true}
                    to='plans'
                    spy={true}
                    >
                    Plans
                    </Link>
                    </li>
                    
                    <li>
                        <Link
                        onClick={()=>setMenuOpened(false)}
                        to='testimonials'
                        span={true}
                        smooth={true}
                        >
                           Testimonials
                        </Link>
                    </li>
                </ul>
            )  
        }
        </div>
    );
};

export default Header;