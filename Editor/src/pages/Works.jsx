import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WorkCard from '../components/WorkCard';
import AddWork from '../components/AddWork';

const Works = () => {
    const [works,setWorks] = useState([]);
    const [addnew,setAddnew] = useState(false);

    console.log("Works:",works);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const res = await axios.get("http://localhost:2004/api/assistant/work");
        // console.log(res.data);
        setWorks(res.data);
    }
  return (
    <div className='mt-[2%]'>
        <div className='flex'>
            <h1 className='text-4xl font-mono font-semibold mx-[4%]'>Works Edit Section</h1>
            {!addnew && <div className='mx-[4%] p-2 m-2 bg-green-500 w-28 flex items-center justify-center rounded-md'>
                <button onClick={()=> setAddnew(true)}>Add Work</button>
            </div>}
        </div>
        <div className=''>
            {
                addnew && <AddWork  setAddnew={setAddnew} setWorks={setWorks} works={works}/>
            }
        </div>
        <div className='flex flex-col gap-6 p-3'>
            {works.map((work)=>{
                return <WorkCard key={work?._id} work={work} setWorks={setWorks} works={works}/>
            })}
        </div>
        
    </div>
  )
}

export default Works