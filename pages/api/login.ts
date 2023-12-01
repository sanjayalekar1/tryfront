import { setCookie } from "cookies-next";


const apiBaseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default async function handler(req:any, res:any) {

    if (req.method === 'POST') {
      const { email,password } = req.body;

      try {
            const response = await fetch(`${apiBaseUrl}/login`,{
                method:'POST',
                headers: {
                    'COntent-Type' : 'application/json',
                },
                body: JSON.stringify({email,password}),
            });

            const loginData = await response.json();
            console.log(loginData);
            //const token =loginData.token;
            if(response.ok){
                res.status(200).json({message:'Login successful'});
                
            }else{
                res.error(response.status).json({message:'Login Failed !'});
            }
      } catch(error) {
        res.status(500).json({message:'Internal Server Error'});
      }
    } else {
        res.error(405).json({message:'method not allowd'})
    }
    
}