"use client"

import { Checkbox } from "./ui/checkbox"

const Filters: React.FC = () => {
    return (
        <div className='w-1/5 border-r absolue left-0 pl-5 py-6'>
            <h1 className="text-sm text-gray-900 font-semibold">Brands</h1>
            <Checkbox className="ml-1 mt-2" />
        </div>
    )
}

export default Filters