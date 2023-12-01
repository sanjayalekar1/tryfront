'use client';
import { useState } from "react";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
import {useRouter, usePathname} from 'next/navigation';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../redux/authSlice';


function MainNavigation () {

  const router = useRouter();
  const pathname = usePathname();
  const loggedIn = useSelector(selectLoggedIn);

  const loginHandler = (event:any) => {
    router.push('/auth');
  }

  const signupHandler = (event:any) => {
    router.push('/signup');
  }

 
const [isProfileMenuExpanded, setIsProfileMenuExpanded] = useState(false);

    return (
      <nav
        className="sticky top-0 z-50 flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start ">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
          
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </button>

          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item>
         
            <a
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#">
              <img
              className="h-10"
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="TRY Foundation"
                loading="lazy" />
            </a>
        
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            
                <Link
                 className={`text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 ${ pathname === '/' ? 'active' : ''}`}
                  href="/"
                  data-te-nav-link-ref
                  >Home</Link>
              </li>
            
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className={`text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 ${ pathname === '/about' ? 'active' : ''}`}
                  href="/about"
                  data-te-nav-link-ref
                  >About</Link>
              </li>
             
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className={`text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 ${ pathname === '/contact' ? 'active' : ''}`}
                  href="/contact"
                  data-te-nav-link-ref
                  >Contact</Link>
              </li>
              
            </ul>
          </div>
      
            <div className="relative flex items-center">
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row m-2"
                data-te-navbar-nav-ref>  
                {!loggedIn && 
                  <li className="m-4 lg:pr-2" data-te-nav-item-ref>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      data-te-nav-link-ref
                      onClick={loginHandler}
                      >Login</button>
                  </li>
                }
                
                { !loggedIn &&
                   <li className="m-4 lg:pr-2" data-te-nav-item-ref>
                   <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   onClick={signupHandler}
                     data-te-nav-link-ref
                     >Sign up</button>
                   </li>
                }
                
                
                
              </ul>
            <div
              className="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end">
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                onClick={() => setIsProfileMenuExpanded((prev) => !prev)}
               >
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full h-8 w-8"
                  alt=""
                  loading="lazy" 
                 />
              </a>
              {isProfileMenuExpanded && loggedIn && <ProfileDropDown />}
            </div>
          </div>
        </div>
        
      </nav>
         )};
export default MainNavigation;