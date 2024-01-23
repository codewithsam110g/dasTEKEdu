import React, { useState, useRef } from 'react';

const PhotoUploadComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const fileInputRef = useRef(null);

    const handleFilechange = (event) => {
        // Handle the file change event
        // You can access the selected files using event.target.files
        console.log(event.target.files);
        // ... additional code to handle the files
    };

    const triggerFileInput = () => {
        // Trigger the file input click event
        fileInputRef.current.click();
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setResponse(null);

        // Example logic for handling form submission
        try {
            // Simulated delay for response
            setTimeout(() => {
                setLoading(true);
                setResponse("  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatibus, dignissimos tenetur iusto <br>ipsa rem earum. Totam aspernatur maxime error reiciendis, maiores molestias iure eos tenetur id eligendi, aliquid dolorum minus doloremque suscipit asperiores eum. Optio doloremque architecto non porro, dolore dicta placeat natus tenetur quibusdam saepe quia laborum alias quis odio maiores. Dolorem quidem quis quam, repellat quasi ab magni eos! Voluptas, optio quisquam. Commodi, error vel, recusandae ad id harum velit, non perspiciatis voluptatem reiciendis beatae! Animi exercitationem, officiis sit alias tempora ducimus earum consequatur iure dolor expedita vitae adipisci, maiores nisi maxime molestias autem ex praesentium possimus! Assumenda deleniti quidem illo. Numquam nam fuga dolorem ab voluptate beatae eaque asperiores, eum et ducimus amet, qui odit eos quo.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatibus, dignissimos tenetur iusto ipsa rem earum. Totam aspernatur maxime error reiciendis, maiores molestias iure eos tenetur id eligendi, aliquid dolorum minus doloremque suscipit asperiores eum. Optio doloremque architecto non porro, dolore dicta placeat natus tenetur quibusdam saepe quia laborum alias quis odio maiores. Dolorem quidem quis quam, repellat quasi ab magni eos! Voluptas, optio quisquam. Commodi, error vel, recusandae ad id harum velit, non perspiciatis voluptatem reiciendis beatae! Animi exercitationem, officiis sit alias tempora ducimus earum consequatur iure dolor expedita vitae adipisci, maiores nisi maxime molestias autem ex praesentium possimus! Assumenda deleniti quidem illo. Numquam nam fuga dolorem ab voluptate beatae eaque asperiores, eum et ducimus amet, qui odit eos quo.");
                setLoading(false);
            }, 5000);
        } catch (error) {
            console.error('Error:', error);
            setResponse({ error: 'Failed to fetch data' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 m-8  bg-white shadow rounded-lg">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded-3xl  mb-4 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Enter text"
            />
            <div className='flex justify-between'>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Upload a photo
                    </label>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFilechange}
                        style={{ display: 'none' }} // Hide the file input
                        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
                        multiple // Remove this if you want only single file selection
                    />
                    <button
                        onClick={triggerFileInput}
                        className="py-2 px-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600"
                    >
                        Upload Files
                    </button>
                </div>
                <button
                    onClick={handleSubmit}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
            <div className='font-bold'>Answer: </div>
            {response && (
                <div className="mt-4 bg-gray-100 p-4 rounded">
                    <strong></strong>
                    <p className="text-gray-800">{JSON.stringify(response)}</p>
                </div>
            )}

        </div>
    );
};

export default PhotoUploadComponent;
