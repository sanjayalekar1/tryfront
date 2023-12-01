
import { useState, useEffect } from 'react';
  
const ProfilePage = () => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    //const userId = 1;
    const userId = localStorage.getItem('user-id');
    useEffect(() => {
      try {
        fetch(`/api/profile?id=${userId}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
     
      } catch (error) {
        console.log("error occured while API call");
      }
    }, []); 
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return(
        <div className="h-full">
         
          <div className="border-b-2 block md:flex">
        
            <div className="w-full h md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
              <div className="flex justify-between">
                <span className="text-xl font-semibold block">User Profile</span>
                <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
              </div>
        
              <div className="w-full p-8 mx-2 flex justify-center">
                <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=crop&w=200&q=200" alt="" />                          
                </div>
            </div>
            
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
              <div className="rounded  shadow p-6">
                <div className="pb-6">
                  <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                  <div className="flex">
                    <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
                  </div>
                </div>
                <div className="pb-4">
                  <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                  <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
                </div>
                <div>
                <label htmlFor="designation" className="font-semibold text-gray-700 block pb-1">Designation</label>
                  <div className="flex">
                    <input disabled id="designation" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="Volunteer" />
                  </div>
                </div>
                <div className="pb-6">
                  <label htmlFor="phone" className="font-semibold text-gray-700 block pb-1">Mobile</label>
                  <div className="flex">
                    <input disabled id="phone" className="border-1  rounded-r px-4 py-2 w-full" type="text" value="8888888888" />
                  </div>
                </div>
              </div>
            </div>
        
          </div>

        </div>
    )
};


export default ProfilePage;