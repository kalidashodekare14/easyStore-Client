import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const BlogPost = () => {

    const [content, setContent] = useState("")

    const handleContentChange = (value) => {
        setContent(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }


    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ["bold", 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image'
    ];


    return (
        <div className='min-h-screen'>
            <form onSubmit={handleSubmit}>
                <ReactQuill
                    className='h-80'
                    theme="snow"
                    valu={content}
                    modules={modules}
                    formats={formats}
                    onChange={handleContentChange} />
                <button className='btn mt-20' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default BlogPost;