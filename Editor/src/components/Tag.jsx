import React, { useState } from 'react';

const Tag = ({ tag, tags, setTags }) => {
    const [editing, setEditing] = useState(false);
    const [t, setT] = useState(tag);

    const handleClick = () => {
        let arr = tags.map((x) => (x !== tag ? x : t));
        setTags(arr);
        setEditing(false);
        console.log(tags);
    };

    const handleDelete = async()=>{
        let arr = tags.filter((x) => {return x!==tag} );
        setTags(arr);
        setEditing(false);
        console.log(tags);
    }

    return (
        <div className='flex items-center mb-2'>
            {!editing ? (
                <div className='flex items-center gap-2 bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold'>
                    {tag}
                    <div 
                        onClick={() => setEditing(true)}
                        className='flex justify-center items-center cursor-pointer ml-2'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-4 w-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                            />
                        </svg>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <input
                        className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                        type='text'
                        value={t}
                        onChange={(e) => setT(e.target.value)}
                    />
                    <button
                        onClick={handleClick}
                        className='mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'
                    >
                        Done
                    </button>
                    <button
                        onClick={handleDelete}
                        className='mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'
                    >
                        Delete
                    </button>
                    <button
                        onClick={()=>setEditing(false)}
                        className='mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default Tag;
