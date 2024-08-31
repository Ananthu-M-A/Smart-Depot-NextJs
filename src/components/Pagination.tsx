import React from 'react'
import { Button } from './ui/button'

const Pagination: React.FC = () => {
    
    return (
        <div className='my-4 flex gap-2 justify-center'>
            <Button className='text-md font-bold text-midnight bg-transparent hover:bg-transparent'><p>{`<Prev`}</p></Button>
            {Array.from([1, 2, 3, 4, 5, 6]).map((_, index) => (
                <Button className='text-sm font-bold text-midnight bg-transparent hover:bg-transparent'>{index + 1}</Button>
            ))}
            <Button className='text-md font-bold text-midnight bg-transparent hover:bg-transparent'><p>{`Next>`}</p></Button>
        </div>
    )
}

export default Pagination
