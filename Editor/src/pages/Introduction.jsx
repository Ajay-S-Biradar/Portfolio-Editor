import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Introduction = () => {
  const [intro, setIntro] = useState('');
  const [greet, setGreet] = useState('');
  const [info, setInfo] = useState('');
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async () => {
    const res = await axios.post(`http://localhost:2004/api/assistant/intro/${id}`, {
      greet,
      intro,
      info,
    });
    console.log(res);
    setEditing(false);
  };

  const fetchData = async () => {
    const res = await axios.get('http://localhost:2004/api/assistant/intro');
    const data = res?.data[0];
    if (data) {
      setIntro(data.intro);
      setGreet(data.greet);
      setInfo(data.info);
      setId(data._id);
    }
    console.log(res);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-4xl font-mono mb-8 text-center text-gray-800">Intro Edit Page</h1>
        {!editing ? (
          <>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-blue-600">{greet}</h1>
            </div>
            <div className="mb-4">
              <h1 className="text-lg text-gray-700">{intro}</h1>
            </div>
            <div className="mb-4">
              <h1 className="text-md text-gray-600">{info}</h1>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <input
                type="text"
                value={greet}
                onChange={(e) => setGreet(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter greeting"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter introduction"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter additional information"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleUpdate}
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Update
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Introduction;
