import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../util/constant';
import Skill from '../components/Skill';
import AddSkill from '../components/AddSkill';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, fetchedSkills } from '../store/skillSlice';

const Skills = () => {
  const [addnew, setAddnew] = useState(false);

  const dispatch = useDispatch();
  const skills = useSelector(store => store.skills.sks);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL + 'skill');
      console.log(res.data);
      dispatch(fetchedSkills(res.data));
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        {skills.map((skill, ind) => (
          <Skill key={ind} skill={skill} />
        ))}
      </div>
      <div className="mt-4">
        {!addnew ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setAddnew(true)}
          >
            Add
          </button>
        ) : (
          <AddSkill setAddnew={setAddnew} />
        )}
      </div>
    </div>
  );
};

export default Skills;
