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
import Image from "next/legacy/image"
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Navbar: React.FC = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const params = useParams();

  return (
    <div className='bg-midnight p-4 flex justify-between fixed w-full z-50'>
      <div className='py-3'>
        <h1 className='text-lightGray text-2xl font-bold opacity-90'>
          <Link href="/">
            SMART DEPOT
          </Link>
        </h1>
      </div>
      <div className='py-2'>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="bg-transparent hover:bg-transparent border border-transparent">
            <SelectValue>
              <div className='flex gap-1 text-lightGray'>
                <h1 className='text-md font-bold opacity-90'>{selectedLanguage}</h1>
                <Image src={'/language.png'} width={25} height={20} alt={'language-icon'} />
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
          <Image src={'/search.png'} width={30} height={20} alt="search-icon" />
        </Button>
      </div>
      <Link href="/account/1/login-security" className='p-1 grid border border-gray-900 rounded-lg hover:border-white'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs mt-1'>Hello,</p>
          <Image src={'/account.png'} width={25} height={20} alt="account-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-md'>Ananthu</h1>
      </Link>
      <Link href={`/account/${params?.userId}/addresses`} className='p-1 grid border border-gray-900 rounded-lg hover:border-white hover:cursor-pointer'>
        <div className='flex gap-1'>
          <p className='text-lightGray font-thin text-xs mt-1'>Deliver to Ananthu</p>
          <Image src={'/location.png'} width={25} height={10} alt="location-icon" />
        </div>
        <h1 className='text-lightGray font-semibold text-sm mt-1'>Chemanchery, 673304</h1>
      </Link>
      <Link href={`/account/${params?.userId}/orders`} className='p-1 grid border border-gray-900 rounded-lg hover:border-white'>
        <p className='text-lightGray font-light text-xs mt-1'>Returns &</p>
        <div className='flex gap-1'>
          <h1 className='text-lightGray font-semibold text-sm mt-2'>Orders</h1>
          <Image src={'/orders.png'} width={30} height={20} alt="orders-icon" />
        </div>
      </Link>
      <Link href={`/cart/${params?.userId}`} className='p-1 grid border border-gray-900 rounded-lg hover:border-white'>
        <p className='text-lightGray font-thin text-xs mt-1'>Your</p>
        <div className='flex gap-1'>
          <h1 className='text-lightGray font-semibold text-sm mt-1'>Cart</h1>
          <Image src={'/cart.png'} width={25} height={20} alt="cart-icon" />
        </div>
      </Link>
    </div>
  )
}

export default Navbar
