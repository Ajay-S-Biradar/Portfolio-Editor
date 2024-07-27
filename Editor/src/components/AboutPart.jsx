import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../util/constant';

const AboutPart = ({ about, setAbouts, abouts }) => {
    const [desc, setDesc] = useState(about.desc);
    const [editing, setEditing] = useState(false);
    const [id, setId] = useState(about._id);

    const handleUpdate = async () => {
        const res = await axios.post(API_URL + "about/" + id, { desc });
        console.log(res);
        let ar = abouts.map((abt) => {
            return abt._id !== id ? abt : { ...abt, desc };
        });
        setAbouts(ar);
        setEditing(false);
    };

    const handleCancel = () => {
        setDesc(about.desc);
        setEditing(false);
    };

    const handleDelete = async () => {
        const resp = confirm("Sure to delete?");
        if (!resp) return;
        const res = await axios.delete(API_URL + "about/" + id);
        console.log(res.data);
        let ar = abouts.filter((abt) => {
            return abt._id !== id;
        });
        setAbouts(ar);
    };

    return (
        <div className='mt-5 p-4 border rounded-lg shadow-lg'>
            {!editing ? (
                <div>
                    <h1 className='text-lg font-medium mb-4'>{desc}</h1>
                    <div className='flex space-x-2'>
                        <button
                            onClick={() => handleDelete()}
                            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-20'
                        >
                            Delete
                        </button>
                        {!editing && (
                    <button
                        onClick={() => setEditing(true)}
                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-20'
                    >
                        Edit
                        </button>
                    )}
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mb-4'>
                        <textarea
                            className='w-full p-2 border rounded'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='flex space-x-2'>
                        <button
                            onClick={() => handleUpdate()}
                            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleCancel()}
                            className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default AboutPart;
