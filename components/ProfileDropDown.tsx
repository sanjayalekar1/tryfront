import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userAgent } from 'next/server';
import { useSelector, useDispatch } from 'react-redux';
import {login,logout,selectLoggedIn,selectUser} from '../redux/authSlice';
import {deleteCookie,getCookie} from 'cookies-next';
import { json } from 'stream/consumers';
//import { jwtDecode } from 'jwt-decode';


function ProfileDropDown () {

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = getCookie('auth-token');

  const logoutHandler = (event:any) => {

    dispatch(logout());
    deleteCookie('auth-token');
    router.push('/auth');
  }


  const profileHandler = async (event:any) => {
    // const userId = localStorage.getItem('user-id');
    
    // const response = await fetch('http://127.0.0.1:8000/api/user/profile/'+userId,{
    //   method:'GET',
    //   headers: {
    //     'Content-Type':'application/json',
    //     'Authorization': `Bearer ${token}`,
    //   },  
     
    // });

    //console.log(response);

    //const result = await response.json();
    //console.log(result.data);
    // console.log("hello");
    // console.log(user);
    router.push('/profile');
  }
    return (
            <ul
                className="absolute z-[1000] float-left  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block profile-menu "
                >
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    data-te-dropdown-item-ref
                    onClick ={profileHandler}
                    >Profile({user.name})
                    
                    </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                    onClick={logoutHandler}
                    >Logout</a>
                </li>
               
            </ul>
    )
}
export default ProfileDropDown;