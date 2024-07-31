import React, { useState } from 'react'
import Tag from './Tag';
import { useDispatch } from 'react-redux';
import { addSkill } from '../store/skillSlice';
import axios from 'axios';

const AddSkill = ({setAddnew}) => {
    const [title,setTitle] = useState('');
    const [info,setInfo] = useState('');
    const [tags,setTags] = useState([]);
    const [tag, setTag] = useState('');

    const dispatch = useDispatch();

    const addTag = () => {
        setTags([...tags, tag]);
        setTag('');
    };

    const handleSubmit = async ()=>{
        const res = await axios.post("http://localhost:2004/api/assistant/skill",{
            title,
            info,
            skills:tags
        });
        if(res.data.added)
            dispatch(addSkill(res.data?.newSkill));
        else{
            alert("errror");
        }

        setAddnew(false);
    }
  return (
    <div className='mx-[10%]'>
        <div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Title</label>
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Description</label>
                        <textarea
                            type='text'
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Tags</label>
                        {tags.map((tag, index) => (
                            <Tag key={index} tag={tag} tags={tags} setTags={setTags} />
                        ))}
                        <div className='flex items-center mt-2'>
                            <input
                                type='text'
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                                placeholder='Enter the new tag here'
                                className='w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                            />
                            <button
                                onClick={addTag}
                                className='ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300'
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button
                            onClick={handleSubmit}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                        >
                            Add
                        </button>
                        <button
                            onClick={() => setAddnew(false)}
                            className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default AddSkill