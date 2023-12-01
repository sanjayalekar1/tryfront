import { json } from "stream/consumers";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default async function handler(req:any, res:any){
    console.log("test",apiBaseUrl);
    if (req.method ==="POST") {
        const {name, email, password} = req.body;
        
        try {
                const response = await fetch(`${apiBaseUrl}/api/register`,{
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({name,email,password}),
                });

                if(response.ok){
                    res.status(200).json({message:'Sign successful'});
                }else{
                    res.status(response.status).json({message:'Sign up failed'})
                }

            } catch(error) {
                res.status(500).json({message:'Internal Server Error'});
            }

    } else {
        res.status(405).json({message:'Method not allowed'});
    }

}


    
