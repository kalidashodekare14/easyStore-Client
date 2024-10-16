import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';


const BlogPost = () => {

    const [content, setContent] = useState("")
    const axiosSecure = useAxiosSecure()

    console.log("check", content)

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
        setContent(content)
    }

    const handleSubmitContent = (e) => {
        e.preventDefault()
        axiosSecure.post('/blogs-post', { content })
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Blog has been Successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='min-h-screen m-5'>
            <form onSubmit={handleSubmitContent}>
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
                            //  add  text color plugins
                            'textcolor', 'forecolor', 'backcolor'
                        ],
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        forced_root_block: false, // Prevents auto <p> wrapping
                        force_br_newlines: true,  // Ensures line break with <br>
                        force_p_newlines: false,  // Disable <p> tag for new lines
                        content_style: "body, p, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }",
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
                <button type='submit' className='btn w-32 mt-5 bg-[#3bb77e] text-white'>Post</button>
            </form>
            <div>
                <div
                    className='blog-content mt-10'
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

export default BlogPost;