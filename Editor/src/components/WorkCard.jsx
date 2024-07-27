import React, { useState } from 'react';
import Tag from './Tag';
import axios from 'axios';

const WorkCard = ({ work, works, setWorks }) => {
    const [editing, setEditing] = useState(false);
    const [tags, setTags] = useState(work.tags);
    const [tag, setTag] = useState('');
    const [header, setHeader] = useState(work.header);
    const [desc, setDesc] = useState(work.desc);

    const addTag = () => {
        setTags([...tags, tag]);
        setTag('');
    };

    const handleUpdate = async () => {
        const res = await axios.post(`http://localhost:2004/api/assistant/work/${work?._id}`, {
            header,
            desc,
            tags
        });
        console.log(res);
        if (res?.data?.updated) {
            alert('Update success');
        } else {
            alert('Issue');
        }
        setEditing(false);
    };

    const handleDelete = async()=>{
        const reply = confirm("Want to delete this Work");
        if(!reply) return ;
        
        const res = await axios.delete(`http://localhost:2004/api/assistant/work/${work?._id}`);
        if(res.data?.deleted){
            alert("deleted");
            let arr = works.filter((x)=>{
                return work._id!==x._id;
            })
            setWorks(arr);
        }
        else{
            alert("error");
        }
    }

    return (
        <div className='border border-gray-300 rounded-lg shadow-md m-4 p-4 bg-white'>
            {!editing ? (
                <div>
                    <h1 className='text-2xl font-bold mb-2'>{header}</h1>
                    <p className='text-gray-700 mb-4'>{desc}</p>
                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag, index) => (
                            <span key={index} className='bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold'>{tag}</span>
                        ))}
                    </div>
                    <div className='flex gap-5'>
                        <button
                            onClick={() => setEditing(true)}
                            className='mt-4 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition duration-300'
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete()}
                            className='mt-4 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition duration-300'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Title</label>
                        <input
                            type='text'
                            value={header}
                            onChange={(e) => setHeader(e.target.value)}
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Description</label>
                        <input
                            type='text'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
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
                            onClick={handleUpdate}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkCard;
