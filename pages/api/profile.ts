// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getCookie} from 'cookies-next';

export default async (req:any, res:NextApiResponse) => {
    const { id } = req.query;
    const token = getCookie('auth-token',req);
    console.log("kkk");
    console.log(token);
    try {
      
      const response = await fetch(`http://127.0.0.1:8000/api/user/profile/${id}`,{
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      },  
    });
    
      const profile = await response.json();

      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(profile);

    } catch (error) {
      console.log("error in profile api");
    }
    
     
    
   
   
  };


  