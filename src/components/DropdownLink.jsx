import React from 'react'
import { Menu } from '@headlessui/react'
export default function DropdownLink({ href, children }) {



    return (

        <Menu.Items>

            <a
                href={href}
                className='px-4 py-2 text-sm hover:bg-gray-100 justify-end text-gray-700 hover:text-black block '
            >
                {children}
            </a>
        </Menu.Items>

    )
}
