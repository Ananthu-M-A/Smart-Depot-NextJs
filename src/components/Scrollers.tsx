import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from "next/legacy/image"
import { productsList } from '@/constants/productsList'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const Scrollers: React.FC = () => {
    return (<>
        <h1 className='pl-6 pt-4 text-xl font-bold bg-lightGray'>More Tools & Equipments</h1>
        <ScrollArea className="whitespace-nowrap rounded-md bg-lightGray">
            <div className='p-4 flex gap-4 w-full'>
                {productsList.map((product, index) => (
                    <div key={index} className='gap-4'>
                        <Card className='w-[200px] h-[300px] hover:cursor-pointer shadow-lg'>
                            <CardHeader className='overflow-hidden'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <CardTitle className='text-left truncate'>{product.productName}</CardTitle>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className='text-xs'>{product.productName}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <CardDescription className='font-bold'>
                                    {product.brand}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={product.image}
                                    alt={`Product Image ${index + 1}`}
                                    width={200}
                                    height={150}
                                />
                            </CardContent>
                            <CardFooter className='grid'>
                                <CardDescription className='text-lg font-bold text-black'>
                                    {`₹ ${product.price}`}
                                </CardDescription>
                                <CardDescription className='font-semibold'>
                                    {`${product.warranty} months warranty`}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
                <ScrollBar orientation="horizontal" />
            </div>
        </ScrollArea>
    </>
    )
}

export default Scrollers
