"use client"
import Scrollers from "@/components/Scrollers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { productsList } from "@/constants/productsList";
import { ParamsInterface } from "@/interfaces/ParamsInterface";
import { ProductInterface } from "@/interfaces/ProductInterface";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WishlistDetails({ params }: ParamsInterface) {
    const [product, setProduct] = useState<ProductInterface>();
    useEffect(() => {
        setProduct(productsList[0]);
    }, [product]);

    return (<>
        {product &&
            <div className="p-4">
                <Card className='shadow-lg'>
                    <CardHeader className="border-b">
                        <CardTitle>
                            Your Wishlist
                        </CardTitle>
                    </CardHeader>
                    <ScrollArea className="whitespace-nowrap rounded-md bg-lightGray">
                        <div className='p-4 flex gap-4 w-full'>
                            <div className='gap-4'>
                                <Card className='w-[200px] h-[300px] hover:cursor-pointer shadow-lg'>
                                    <CardHeader className='overflow-hidden'>
                                        <CardDescription className="flex justify-left gap-1">
                                            {Array.from([1, 2, 3, 4, 5]).map((_, index) => (
                                                <Image key={index} src={"/star.png"} width={15} height={15} alt={"Star Image"}
                                                    className="hover:border-2 hover:border-transparent cursor-pointer" />
                                            ))}
                                        </CardDescription>
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
                                            alt={`Product Image ${1}`}
                                            width={200}
                                            height={300}
                                        />
                                    </CardContent>
                                    <CardFooter className='grid'>
                                        <CardDescription className='text-lg font-bold text-center flex gap-4 justify-center'>
                                            <Button className="bg-lightGray hover:bg-gray-300 border">
                                                <Image
                                                    src="/cart.png"
                                                    alt={`Product Image ${1}`}
                                                    width={100}
                                                    height={20}
                                                    className="w-5"
                                                />
                                            </Button>
                                            <Button className="w-10 bg-lightGray hover:bg-gray-300 border text-xl text-gray-900">
                                                X
                                            </Button>
                                        </CardDescription>
                                    </CardFooter>
                                </Card>
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </div>
                    </ScrollArea>
                </Card>
            </div>}
        <Scrollers />
    </>)
}