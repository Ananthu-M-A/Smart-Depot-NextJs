"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Sort = () => {
  const [sortOption, setSortOption] = useState("Featured");
  return (
    <div>
      <Select value={sortOption} onValueChange={setSortOption}>
        <SelectTrigger className="w-25 border border-transparent absolute right-6">
          <SelectValue>
            <div className='flex gap-1 text-gray-900'>
              <img className='w-4 h-4' src="sort.png" alt="sort-icon" />
              <h1 className='text-xs font-semibold opacity-90'>{sortOption}</h1>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Featured">Featured</SelectItem>
          <SelectItem value="Best Sellers">Best Sellers</SelectItem>
          <SelectItem value="Price: Low to High">Price: Low to High</SelectItem>
          <SelectItem value="Price: High to Low">Price: High to Low</SelectItem>
          <SelectItem value="Newest Arrivals">Newest Arrivals</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Sort