"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import Image from "next/legacy/image"
import Link from 'next/link'
import { Button } from './ui/button'
import { productsList } from '@/constants/productsList'
import { ProductInterface } from '@/interfaces/product.interface'

const Orders: React.FC = () => {
    const [product, setProduct] = useState<ProductInterface>();

    useEffect(() => {
        setProduct(productsList[0]);
    }, []);

    return (
        <Card className="flex gap-10 border-3 p-5">
            {Array.from([1, 2, 3, 4, 5]).map((_, index) => (
                <CardContent key={index} className="border rounded-lg">
                    <Drawer>
                        <DrawerTrigger>Show Orders Here</DrawerTrigger>
                        <DrawerContent className="w-1/2 mx-auto">
                            <DrawerHeader>
                                <DrawerTitle>Returns & Orders</DrawerTitle>
                                <DrawerDescription>
                                    {product && (
                                        <div className="flex justify-center p-4">
                                            <Card className="shadow-lg">
                                                <CardHeader>
                                                    <CardDescription className="flex justify-between">
                                                        <CardDescription>Products</CardDescription>
                                                        <CardDescription>Image</CardDescription>
                                                        <CardDescription>Qty</CardDescription>
                                                        <CardDescription>Price</CardDescription>
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex justify-between items-center border p-4">
                                                    <CardContent className="px-0">
                                                        <CardTitle className="text-xl cursor-pointer">
                                                            {product.productName}
                                                            <CardDescription className="font-bold">
                                                                {product.brand}
                                                            </CardDescription>
                                                        </CardTitle>
                                                    </CardContent>
                                                    <CardContent>
                                                        <CardContent className='p-5'>
                                                            <Image
                                                                src={product.image}
                                                                objectFit="fill"
                                                                alt={product.productName}
                                                                width={120}
                                                                height={100}
                                                            />
                                                        </CardContent>
                                                    </CardContent>
                                                    <CardContent>
                                                        <p className="text-sm px-2 text-right">₹{product.price}</p>
                                                    </CardContent>
                                                    <CardContent>
                                                        <p className="text-sm px-2">₹{product.price}</p>
                                                    </CardContent>
                                                </CardContent>
                                                <CardContent className="flex justify-between text-midnight font-semibold py-2 px-10">
                                                    <Link href={""}>Print Invoice</Link>
                                                    <Link href={""}>Return Order</Link>
                                                    <Link href={""}>Buy Again</Link>
                                                    <Link href={""}>Share</Link>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )}
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </CardContent>
            ))}
        </Card>
    );
}

export default Orders;
