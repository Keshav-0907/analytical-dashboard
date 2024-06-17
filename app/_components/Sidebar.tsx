import React from 'react'

const Sidebar = () => {

  const SideBarItems = [
    {
      title: "Write a Post"
    },
    {
      title: "My Posts"
    },
    {
      title: "Saved Posts"
    },
    {
      title: "Drafts"
    },
    {
      title: "Settings"
    }
  ]
  return (
    <div className='w-1/6 border-r-2 h-full'>
      <div className='py-3 px-5 flex flex-col gap-2 font-semibold'>
        <div className='bg-[#4C41E1] text-white  p-2 rounded-lg hover:bg-black cursor-pointer'>
          Write a Post
        </div>
        <div className='flex flex-col gap-2'>
        {
          SideBarItems.map((item, index) => {
            return (
              <div key={index} className='p-2 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-lg'>
                {item.title}
              </div>
            )
          })
        }
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar