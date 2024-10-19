import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import { FaFileImport, FaImage } from 'react-icons/fa';
import { RotatingLines } from 'react-loader-spinner';
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const BlogPost = () => {

    const [content, setContent] = useState("")
    const axiosSecure = useAxiosSecure()
    const [blogImage, setBlogImage] = useState("")
    const [uploading, setUploading] = useState(false)
    const [blogTitle, setBlogTitle] = useState("")

    console.log(blogImage)

    // image hosting 
    const handleImageHosting = async (event) => {
        const ImageSelected = event.target.files[0]
        setUploading(true)
        const formData = new FormData()
        formData.append("image", ImageSelected)

        try {
            const res = await fetch(`${image_hosting_api}`, {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            if (data.success) {
                setBlogImage(data.data.url)
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setUploading(false)
        }

    }





    const handleEditorChange = (content, editor) => {
        console.log(content)
        setContent(content)
    }

    const handleSubmitContent = (e) => {
        e.preventDefault()

        if (!blogTitle || !blogImage) {
            return Swal.fire("Please provide blog title and thumbnail.");
        }
        if (!content) {
            return Swal.fire("Please write your content.");
        }


        const contentData = {
            blogTitle: blogTitle,
            blogThumbnail: blogImage,
            content
        }

        console.log(contentData)

        axiosSecure.post('/blogs-post', contentData)
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
            <div>
                <div className='flex justify-between items-center my-5'>
                    <div className=''>
                        <input onChange={(e) => setBlogTitle(e.target.value)} className='w-96 input input-bordered' placeholder='Blog Title' type="text" />
                    </div>
                    <div className='flex items-center gap-3'>
                        {
                            uploading ? (
                                <RotatingLines
                                    visible={true}
                                    height="50"
                                    width="40"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            ) : (
                                <div>
                                    {
                                        blogImage ? (
                                            <img className='w-20 h-10' src={blogImage} alt="" />
                                        ) : (
                                            <FaImage className='text-4xl' />
                                        )
                                    }
                                </div>
                            )
                        }
                        <div className='cursor-pointer flex' onClick={() => document.querySelector('input[type="file"]').click()}>
                            <div className='border p-2'>
                                <h1 className='text-xl flex items-center gap-2'>
                                    <span>Blog Thumbnail</span>
                                    <FaFileImport />
                                </h1>
                            </div>
                            <input onChange={handleImageHosting} hidden type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <form className='h-[600px] border rounded-2xl' onSubmit={handleSubmitContent}>
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
            </div>
        </div >
    );
};

export default BlogPost;