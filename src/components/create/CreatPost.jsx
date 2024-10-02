import React, { useState } from 'react';
import { posts } from '../data/data';

const CreatePost = () => {
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        desc: '',
        img: '',
        userId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value
        });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    return (
        <div className='relative w-full'>
            <div className='w-[90%] flex justify-start items-center gap-4 m-auto'>
                <img src={posts[3].img} alt="" className='w-[40px] h-[40px] cursor-pointer rounded-[50%] border-[3px] border-[lightgray]' />
                <input 
                    type="text" 
                    placeholder="what's on your mind, Kawsar?" 
                    className='w-[80%] h-[30px] p-3 rounded-[50px] border outline-none cursor-pointer' 
                    onClick={() => setOpen(!open)}
                />
            </div>

            {open && (
                <div className='absolute p-4 rounded w-[100%] h-[400px] bg-[rgba(0,0,0,0.2)] top-[0px] left-0'>
                    <form className='bg-[white] w-full h-full rounded m-auto p-4' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className='w-full p-2 rounded border'
                                value={newPost.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <textarea
                                name="desc"
                                placeholder="Description"
                                className='w-full p-2 rounded border'
                                rows="4"
                                value={newPost.desc}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className='mb-4'>
                            <input
                                type="text"
                                name="img"
                                placeholder="Image URL"
                                className='w-full p-2 rounded border'
                                value={newPost.img}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type="text"
                                name="userId"
                                placeholder="User ID"
                                className='w-full p-2 rounded border'
                                value={newPost.userId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button 
                                type="button" 
                                className='p-2 bg-gray-300 rounded' 
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className='p-2 bg-blue-500 text-white rounded'
                            >
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CreatePost;
