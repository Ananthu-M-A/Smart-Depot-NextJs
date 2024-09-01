"use client"
import Scrollers from "@/components/Scrollers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { productsList } from "@/constants/productsList";
import { ParamsInterface } from "@/interfaces/ParamsInterface";
import { ProductInterface } from "@/interfaces/ProductInterface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductDetails({ params }: ParamsInterface) {
    const [product, setProduct] = useState<ProductInterface>();
    useEffect(() => {
        const index = parseInt(params.productId) - 1;
        setProduct(productsList[index]);
    }, [product])
    return (<>
        {product &&
            <div>
                <Card className='mb-10 flex w-full p-4 border-0'>
                    <CardContent className="w-1/2 p-10 cursor-pointer border shadow-lg rounded-l">
                        <Image
                            src={product.image}
                            objectFit="cover"
                            alt={product.productName}
                            className=''
                        />
                    </CardContent>
                    <CardContent className="w-1/2 p-1 cursor-pointer border shadow-lg rounded-l">
                        <CardHeader>
                            <CardDescription className="flex justify-left gap-1">
                                {Array.from([1, 2, 3, 4, 5]).map((_, index) => (
                                    <Image key={index} src={"/star.png"} width={15} height={15} alt={"Star Image"}
                                        className="hover:border-2 hover:border-transparent cursor-pointer" />
                                ))}
                            </CardDescription>
                            <CardTitle className='text-xl cursor-pointer'>{product.productName}
                                <CardDescription className='font-bold'>{product.brand}</CardDescription>
                            </CardTitle>
                        </CardHeader>
                        <CardTitle className='px-6 mb-4 flex gap-1'>
                            <p className="text-sm">₹</p>{product.price} /-
                        </CardTitle>
                        <CardDescription className="px-6 font-bold">
                            {product.warranty} months warranty
                        </CardDescription>
                        <CardDescription className='px-6 py-2 text-black font-semibold'>
                            Description:- {product.description}
                        </CardDescription>
                        <CardDescription className='px-6 py-2 text-black font-semibold'>
                            Features:- {product.features.join(', ')}
                        </CardDescription>
                        <CardDescription className='px-6 py-2 text-black font-semibold'>
                            Specifications:-
                            <Table className="border py-2">
                                <TableHeader>
                                    <TableRow>
                                        {Object.keys(product.specifications).map((key,index) => (
                                            <TableHead key={index} className="border">{key.toLocaleUpperCase()}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        {Object.values(product.specifications).map((value,index) => (
                                            <TableCell key={index} className="border">{value}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardDescription>
                        <CardFooter>
                        </CardFooter>
                    </CardContent>
                    <CardContent className="w-1/2 p-1 border shadow-lg rounded-r">
                        <CardHeader>
                            <CardDescription className='text-xl font-medium'>
                                In Stock
                                <CardDescription className='text-xs text-black'>
                                    Only 3 items left
                                </CardDescription>
                            </CardDescription>
                        </CardHeader>
                        <CardDescription className='px-6 mb-4 text-xl font-medium'>
                            Free Delivery
                            <CardDescription className='text-black font-semibold flex'>
                                <Link href={"/"}>Chemanchery, 673304</Link>
                                <Image src={'/location.png'} width={20} height={10} alt="location-icon" />
                            </CardDescription>
                        </CardDescription>
                        <CardDescription className='px-6 mb-4 text-xl font-medium'>
                            Offer Applied
                            <CardDescription className='text-black font-semibold flex gap-1'>
                                <p className="py-1">10% off </p>
                                <p className="text-xs bg-midnight text-lightGray italic px-2 py-1">ONAM BONANZA</p>
                            </CardDescription>
                        </CardDescription>
                        <CardDescription className='px-6 mb-4 text-xl font-medium'>
                            Total Amount
                            <CardTitle className='text-black font-semibold flex gap-1'>
                                <p className="text-sm">₹</p>{product.price - product.price * 10 / 100}/-
                            </CardTitle>
                        </CardDescription>
                        <CardFooter className="flex gap-4 justify-center">
                            <Button className='text-sm font-semibold bg-midnight text-lightGray my-4'>
                                Add to Cart
                            </Button>
                            <Button className='text-sm font-semibold bg-gray-900 text-lightGray my-4'>
                                Buy Now
                            </Button>
                        </CardFooter>
                    </CardContent>
                </Card>
                <Scrollers />
                <Scrollers />
            </div>
        }
    </>)
}