import React, { useState } from 'react';
import Tag from './Tag';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../util/constant';
import { addSkill } from '../store/skillSlice';

const Skill = ({ skill }) => {
  const [sks, setSks] = useState(skill.skills);
  const [title, setTitle] = useState(skill.title);
  const [info, setInfo] = useState(skill.info);
  const [editing,setEditing] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate =async()=>{
    const res =await axios.put(API_URL+"skill/"+skill._id,{
      title,
      info,
      skills:sks
    });
    if(res.data?.updated){
      dispatch(addSkill(res?.data?.updatedSkill));
    }
    else{
      alert("error in updating");
    }
    setEditing(false);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {!editing?
        <div>
          <div className="text-xl font-bold mb-2">
          {title}
          </div>
          <div className="text-gray-700 mb-4">
            {info}
          </div>
          <div>
            {sks.map((sk,ind)=>{
              return <p key={ind} className=''>{"#"+sk}</p>;
            })}  
          </div> 
          <div>
            <button onClick={()=> setEditing(true)}>
              Edit
            </button>
          </div>
        </div>
      :
      <div>
        <div>
          <h2>Title: </h2>
          <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
          <h2>info: </h2>
          <textarea className='w-full' type="text" value={info} onChange={(e)=> setInfo(e.target.value)}/>
        </div>
        <div className="flex flex-wrap gap-2">
          {sks.map((sk, index) => (
            <Tag key={index} tag={sk} setTags={setSks} tags={sks} />
          ))}
        </div>
        <button onClick={()=> handleUpdate()}>Update</button>
        <button onClick={()=> setEditing(false)}>Cancel</button>
      </div>

      }
    </div>
  );
};

export default Skill;
