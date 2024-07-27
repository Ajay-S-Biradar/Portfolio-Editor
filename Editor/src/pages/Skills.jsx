import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../util/constant';
import Skill from '../components/Skill';

const Skills = () => {
  const [skills,setSkills] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const res =await axios.get(API_URL+'skill');
    console.log(res.data);
    setSkills(res.data);
  }
  return (
    <div>
      {
        skills.map((skill)=>{
          <Skill skill={skill} />
        })
      }
    </div>
  )
}

export default Skills