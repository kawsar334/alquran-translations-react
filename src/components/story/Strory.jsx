import React from 'react';
import { posts } from '../data/data';

const Story = () => {
    return (
        <div className='no_scrollbar w-full flex justify-start items-start overflow-x-scroll'>
            <div className='h-[120px] w-auto flex gap-3 '>
                {posts.map((item) => (
                    <div key={item.id} className='flex-shrink-0 m-2 relative rounded overflow-hidden cursor-pointer '>
                        <img src={item.img} alt="" className='w-[100px] h-[100px] object-cover' />
                        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.3)] top-0 left-0 text-[13px] flex justify-center items-end  p-2 text-[gray]'>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Story;
