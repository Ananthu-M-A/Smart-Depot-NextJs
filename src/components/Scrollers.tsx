"use client"

import React, { useEffect } from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from "next/legacy/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { fetchProducts } from '@/redux/slices/products.slice'
import IProduct from '@/interfaces/product.interface'
import demoImage from '../../public/accessory1.jpg'
import Loading from '@/app/loading'


const Scrollers: React.FC = () => {

    const { status, products, error } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status])

    return (
        <>
            {(status === 'loading')
                ? <Loading />
                : (status === 'succeeded')
                    ? (<>
                        <h1 className='pl-6 pt-4 text-xl font-bold bg-lightGray'>More Tools & Equipments</h1>
                        <ScrollArea className="whitespace-nowrap rounded-md bg-lightGray">
                            <div className='p-4 flex gap-4 w-full'>
                                {products.map((product: IProduct, index: number) => (
                                    <div key={index} className='gap-4'>
                                        <Card className='w-[200px] h-[300px] hover:cursor-pointer shadow-lg'>
                                            <CardHeader className='overflow-hidden'>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <CardTitle className='text-left truncate'>{product.name}</CardTitle>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='text-xs'>{product.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <CardDescription className='font-bold'>
                                                    {product.brand}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Image
                                                    src={demoImage}
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
                    </>)
                    : (status === 'failed')
                        ? <p>{error}</p>
                        : <></>
            }
        </>
    )
}

export default Scrollers
