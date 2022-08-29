import React from 'react'
import { links } from "../data/dummy";
const LinkItem = ({title, icon}) => {
  return (
    <div className='flex items-center gap-4 px-6 py-1 pt-2 text-sm'>
        {icon}{title}
    </div>
  )
}

export default LinkItem