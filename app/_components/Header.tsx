import React from 'react'

const Header = () => {
  return (
    <div className='border-b-2 py-3 px-5 flex items-center justify-between'>
        <div>
            <img className='w-40 cursor-pointer' src='https://app.hyperly.ai/svgs/Logo%20Expanded%20New.svg' alt='err'/>
        </div>

        {/* Todo */}
        <div className='px-5'>
            <img className='w-10 h-10 rounded-full cursor-pointer' src='https://github.com/shadcn.png' alt='err'/>
        </div>
    </div>
  )
}

export default Header