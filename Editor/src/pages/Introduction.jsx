import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const Introduction = () => {
    const [intro, setIntro] = useState();
    const [greet, setGreet] = useState();
    const [info, setInfo] = useState();
    const [editing,setEditing] = useState();    
    const [id, setId] = useState();
    useEffect(()=>{
        fetchData();
    },[]);

    const handleUpdate = async ()=>{
        console.log("called");
        const res = await axios.post("http://localhost:2004/api/assistant/intro/"+id,{
            greet,
            intro,
            info
        });
        console.log(res);
        setEditing(false);
    }

    const fetchData = async()=>{
        const res = await axios.get('http://localhost:2004/api/assistant/intro');
        setIntro(res?.data[0].intro);
        setGreet(res?.data[0].greet);
        setInfo(res?.data[0].info);
        setId(res?.data[0]._id);
        console.log(res);
    }

  return (
    <div>
        <div>
            <h1 className='text-4xl font-mono'>Intro Edit Page</h1>
        </div>
        {
            !editing?
        <>
        <div>
            <h1>{greet}</h1>
        </div>
        <div>
            <h1>{intro}</h1>
        </div>
        <div>
            <h1>{info}</h1>
        </div>
        <div>
        <button type="button" 
        onClick={()=>{
            setEditing(true);
        }}
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
        </div>  
        </>:
        <>
            <div>
                <input type="text" value={greet} onChange={(e)=>{setGreet(e.target.value)}}/>
            </div>
            <div>
                <input type="text" value={intro} onChange={(e)=>{setIntro(e.target.value)}}/>
            </div>
            <div>
                <input type="text" value={info} onChange={(e)=>{setInfo(e.target.value)}}/>
            </div>
            <div>
            <button type="button" 
            onClick={handleUpdate}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
            </div>  
        </>
        }
        
    </div>
  )
}

export default Introduction