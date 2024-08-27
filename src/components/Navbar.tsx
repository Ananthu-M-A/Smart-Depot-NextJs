import React from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'


const Navbar = () => {
  return (
    <div className='bg-midnight p-4 flex justify-between'>
      {/* <h1 className='bg-electricBlue'>Navbar</h1>
      <h1 className='bg-neonGreen'>Navbar</h1>
      <h1 className='bg-lightGray'>Navbar</h1>
      <h1 className='bg-darkCharcoal'>Navbar</h1> */}
      <div className='py-3'>
        <h1 className='text-lightGray text-2xl font-bold opacity-90'>SMART DEPOT</h1>
      </div>
      <div className='px-1 py-4 flex gap-1'>
        <h1 className='text-lightGray text-md font-bold opacity-90'>EN</h1>
        <img className='w-5 h-5' src="language.png" alt="language-icon" />
      </div>
      <div className='flex p-1'>
        <Select>
          <SelectTrigger className="w-[75px] bg-lightGray hover:bg-gray-300">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="smartphones">Smartphones</SelectItem>
            <SelectItem value="spare-parts">Spare Parts</SelectItem>
            <SelectItem value="hw-tools">Hardware Tools</SelectItem>
            <SelectItem value="sw-tools">Software Tools</SelectItem>
            <SelectItem value="equipments">Equipments</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder='Search...' />
        <Button className='bg-lightGray hover:bg-gray-300'>
          <img className='w-5' src="search.png" alt="search-icon" />
        </Button>
      </div>
      <div className='p-1 grid'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs'>Hello,</p>
          <img className='w-5 h-5' src="account.png" alt="account-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-md'>Ananthu</h1>
      </div>
      <div className='p-1 grid'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs'>Deliver to Ananthu</p>
          <img className='w-5 h-5' src="location.png" alt="location-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-sm'>Chemanchery, 673304</h1>
      </div>
      <div className='p-1 grid'>
        <p className='text-lightGray font-light text-xs'>Returns &</p>
        <div className='flex gap-1'>
          <h1 className='text-lightGray font-semibold text-sm'>Orders</h1>
          <img className='w-5 h-5' src="orders.png" alt="orders-icon" />
        </div>
      </div>
      <div className='p-1 grid'>
        <p className='text-lightGray font-thin text-xs'>Your</p>
        <div className='flex gap-1'>
          <h1 className='text-lightGray font-semibold text-sm'>Cart</h1>
          <img className='w-5 h-5' src="cart.png" alt="cart-icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
