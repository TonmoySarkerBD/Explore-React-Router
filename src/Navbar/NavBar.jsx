import React, { useState } from 'react';
import Mmenu from './Mmenu';
import { MenuIcon, X } from 'lucide-react';

const menuData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];


const NavBar = () => {
    const [open , SetOpen] = useState(false);

    const links = menuData.map(route => <Mmenu key={route.id} route={route}></Mmenu>)
    return (

        <nav className='flex justify-between '>
            <span className='flex' onClick={()=> SetOpen(!open)}>
                {open ?
                    <X className='md:hidden'></X>:
                     <MenuIcon className='md:hidden'></MenuIcon>
                }

                <ul className={`md:hidden absolute duration-1000 bg-amber-300
                    ${open? 'top-8' : '-top-40'}`}>
                {
                    links
                }
                </ul>

            <h1>Explore React Router</h1>
            </span>
            



            {/* // Type - 3 */}
            <ul className='hidden md:flex gap-5'>
                {
                    links
                }
            </ul>


            <button className='btn btn-primary'>Sign In</button>

        </nav>





        // Type - 2
        // <ul className='flex gap-5'>
        //     {
        //         menuData.map(route => <li><a href={route.path}>{route.name}</a></li> )
        //     }
        // </ul>



        // Type - 1
        // <ul className='flex gap-4'>
        //     <li><a href="/">Home</a></li>
        //     <li><a href="/">About</a></li>
        //     <li><a href="/">Blog</a></li>
        //     <li><a href="/">Contact</a></li>
        // </ul>
    );
};

export default NavBar;
