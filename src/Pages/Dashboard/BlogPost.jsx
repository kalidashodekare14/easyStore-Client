import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Editor } from '@tinymce/tinymce-react';


const BlogPost = () => {

    const [content, setContent] = useState("")
    const axiosSecure = useAxiosSecure()

    const handleContentChange = (value) => {
        setContent(value)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(content)
    //     axiosSecure.post('/blogs-post', { content })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }


    // const modules = {
    //     toolbar: [
    //         [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
    //         [{ "align": [] }],
    //         [{ size: [] }],
    //         ["bold", 'italic', 'underline', 'strike', 'blockquote'],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //         ['link', 'image'],
    //         ['clean']
    //     ],
    // }

    // const formats = [
    //     'header', 'font', 'size',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet',
    //     'align',
    //     'link', 'image'
    // ];

    const handleEditorChange = (content, editor) => {
        console.log(content)
    }

    return (
        <div className='min-h-screen'>
            <Editor
                
                apiKey={import.meta.env.VITE_CONTENT_EDITOR_API_KEY}
                initialValue='<p>Hello, World</p>'
                init={{
                    height: 600,
                    plugins: [
                      // Core editing features
                      'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                      // Your account includes a free trial of TinyMCE premium features
                      // Try the most popular premium features until Oct 29, 2024:
                      'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                      { value: 'First.Name', title: 'First Name' },
                      { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                  }}

                onEditorChange={handleEditorChange}
            />
        </div>
    );
};

export default BlogPost;