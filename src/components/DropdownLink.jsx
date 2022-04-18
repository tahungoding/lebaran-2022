import React from 'react'
import { Menu } from '@headlessui/react'
export default function DropdownLink({ href, children, className, ...props }) {



    return (

        <Menu.Items>



            <a {...props} href={href} className={`${className
                ? className : "text-gray-700 hover:text-black block"}
                px-4 py-2 text-sm hover:bg-gray-100 justify-end `}>
                {children}
            </a>

        </Menu.Items>

    )
}
