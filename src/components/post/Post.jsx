import React from 'react'

const Post = ({posts}) => {
    console.log(posts)
  return (
    <div className=' overflow-y-auto w-full  flex flex-col justify-start items-start gap-3 p-4 '>
        {posts.map((item)=>(
            <div className='w-full border p-5 rounded-[10px]'>
                <div className='w-full flex items-start flex-col gap-3 cursor-pointer '>
                    <h1 className='text-3xl font-semibold '>{item.title}</h1>
                    {item?.img&&<img src={item?.img} alt="" className='w-[100%] h-[300px] object-cover rounded-[10px]' />}
                    {item?.desc&&<p className='text-[#555]'>{item.desc}</p>}
                    <div>
                        likes 
                        comments 
                        share
                    </div>
                </div>
              
            </div>
        ))}
       
    </div>
  )
}

export default Post