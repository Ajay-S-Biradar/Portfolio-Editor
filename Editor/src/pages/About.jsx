import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../util/constant';
import AboutPart from '../components/AboutPart';

const About = () => {
    const [abouts, setAbouts] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [newAbout, setNewAbout] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get(API_URL + "about/");
        setAbouts(res.data);
    };

    const handleSubmit = async () => {
        const res = await axios.post(API_URL + "about/", {
            description: newAbout
        });
        console.log(res.data);
        setAddNew(false);
        setAbouts([...abouts, res.data.newAbout]);
    };

    return (
        <div className='mx-[3%] mt-4'>
            <h1 className='text-4xl font-mono font-semibold mb-6'>Edit the About Section</h1>
            <div className='space-y-4'>
                {abouts.map((about, ind) => (
                    <AboutPart key={ind} about={about} setAbouts={setAbouts} abouts={abouts} />
                ))}
            </div>
            {!addNew ? (
                <div className='mt-6'>
                    <button
                        onClick={() => setAddNew(true)}
                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                    >
                        Add more...
                    </button>
                </div>
            ) : (
                <div className='mt-6'>
                    <textarea
                        className='w-full p-2 border rounded mb-4'
                        onChange={(e) => setNewAbout(e.target.value)}
                    ></textarea>
                    <div className='flex space-x-2'>
                        <button
                            onClick={() => handleSubmit()}
                            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setAddNew(false)}
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

export default About;
