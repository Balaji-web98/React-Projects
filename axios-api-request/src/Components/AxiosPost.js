import React, { useState } from 'react';
import axios from 'axios';

const AxiosPost = () => {
    const [postData, setPostData] = useState({ title: '', body: '' });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
            setResponse(response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h1>POST Request</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={postData.title} onChange={handleChange} />
                <br /><br />
                <label htmlFor="body">Body:</label>
                <textarea id="body" name="body" value={postData.body} onChange={handleChange} />
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AxiosPost;
