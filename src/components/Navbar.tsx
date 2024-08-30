"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'

const Navbar: React.FC = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <div className='bg-midnight p-4 flex justify-between fixed w-full z-50'>
      <div className='py-3'>
        <h1 className='text-lightGray text-2xl font-bold opacity-90'>SMART DEPOT</h1>
      </div>
      <div className='py-2'>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="bg-transparent hover:bg-transparent border border-transparent">
            <SelectValue>
              <div className='flex gap-1 text-lightGray'>
                <h1 className='text-md font-bold opacity-90'>{selectedLanguage}</h1>
                <img className='w-5 h-5' src="language.png" alt="language-icon" />
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EN">English</SelectItem>
            <SelectItem value="ML">Malayalam</SelectItem>
            <SelectItem value="TA">Tamil</SelectItem>
            <SelectItem value="KN">Kannada</SelectItem>
            <SelectItem value="HI">Hindi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex py-2'>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[75px] bg-lightGray hover:bg-gray-300">
            <SelectValue>{selectedCategory}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Smartphones">Smartphones</SelectItem>
            <SelectItem value="Spare Parts">Spare Parts</SelectItem>
            <SelectItem value="Hardware Tools">Hardware Tools</SelectItem>
            <SelectItem value="Software Tools">Software Tools</SelectItem>
            <SelectItem value="Equipments">Equipments</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder='Search...' />
        <Button className='bg-lightGray hover:bg-gray-300'>
          <img className='w-5' src="search.png" alt="search-icon" />
        </Button>
      </div>
      <div className='p-1 grid border border-gray-900 rounded-lg hover:border-white hover:cursor-pointer'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs'>Hello,</p>
          <img className='w-5 h-5' src="account.png" alt="account-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-md'>Ananthu</h1>
      </div>
      <div className='p-1 grid border border-gray-900 rounded-lg hover:border-white hover:cursor-pointer'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs'>Deliver to Ananthu</p>
          <img className='w-5 h-5' src="location.png" alt="location-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-sm'>Chemanchery, 673304</h1>
      </div>
      <div className='p-1 grid border border-gray-900 rounded-lg hover:border-white hover:cursor-pointer'>
        <p className='text-lightGray font-light text-xs'>Returns &</p>
        <div className='flex gap-1'>
          <h1 className='text-lightGray font-semibold text-sm'>Orders</h1>
          <img className='w-5 h-5' src="orders.png" alt="orders-icon" />
        </div>
      </div>
      <div className='p-1 grid border border-gray-900 rounded-lg hover:border-white hover:cursor-pointer'>
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
