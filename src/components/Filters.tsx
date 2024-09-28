"use client"

import { useState } from "react";
import { Checkbox } from "./ui/checkbox"
import { brands } from "@/constants/filters";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import Image from "next/legacy/image";

const Filters: React.FC = () => {
    const [filterBrands, setFilterBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState([50000, 60000]);

    const handleBrandChange = (brand: string) => {
        setFilterBrands(prev =>
            prev.includes(brand)
                ? prev.filter(item => item !== brand)
                : [...prev, brand]
        );
    };

    const handlePriceChange = (newPrice: number[]) => {
        setPriceRange(newPrice)
    }

    return (
        <>
            <div className='w-1/5 border-r shadow-lg left-0 px-5'>
                <h1 className="text-sm text-gray-900 font-semibold pt-2 pb-1">Rating</h1>
                <div className="w-4/5 flex justify-center gap-1 px-4 py-2 bg-lightGray border">
                    {Array.from([1, 2, 3, 4, 5]).map((_,index) => (
                        <Image key={index} src={"/star.png"} width={20} height={20} alt={"Star Image"} loading="lazy" className="hover:border-2 hover:border-transparent cursor-pointer" />
                    ))}
                </div>
                <h1 className="text-sm text-gray-900 font-semibold pt-6">Brands</h1>
                {brands.map((brand,index) => (
                    <div key={index} className="flex gap-2 items-center px-2 pt-2 pl-2">
                        <Checkbox
                            id={brand.id}
                            checked={filterBrands.includes(brand.name)}
                            onCheckedChange={() => handleBrandChange(brand.name)} />
                        <label
                            htmlFor={brand.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {brand.name}
                        </label>
                    </div>
                ))}
                <h1 className="text-sm text-gray-900 font-semibold pt-6 pb-3">Price Range</h1>
                <Slider className="w-full px-2 pb-3 cursor-pointer"
                    defaultValue={[50000, 60000]}
                    max={100000} step={2000} min={2000}
                    value={priceRange} onValueChange={handlePriceChange} />
                <div className="flex justify-center px-2 pb-3">
                    <Button className="text-xs font-semibold bg-midnight text-lightGray">{`₹ ${priceRange[0]} - ₹ ${priceRange[1]}`}</Button>
                </div>
            </div >
        </>
    )
}

export default Filters