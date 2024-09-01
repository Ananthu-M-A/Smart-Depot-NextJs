import { productsList } from '@/constants/productsList';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Pagination from './Pagination';

const Products: React.FC = () => {
    return (
        <div className='px-5'>
            <h1 className='text-lg font-bold py-2 px-1'>Results</h1>
            {productsList.map((product, index) => (
                <Card key={index} className='mb-4 shadow-lg border flex w-full'>
                    <CardContent className="w-1/2 p-5 cursor-pointer border shadow-lg rounded-l">
                        <Image
                            src={product.image}
                            objectFit="cover"
                            alt={`Product Image ${index + 1}`}
                            className=''
                        />
                    </CardContent>
                    <CardContent className="w-1/2 p-1 border-l">
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
                            <div className="text-sm">₹</div>{product.price}
                        </CardTitle>
                        <CardDescription className="px-6 font-bold">
                            {product.warranty} months warranty
                        </CardDescription>
                        <CardDescription className='px-6 text-black font-semibold'>
                            Description:- {product.description}
                        </CardDescription>
                        <CardDescription className='px-6 text-black font-semibold'>
                            Features:- {product.features.join(', ')}
                        </CardDescription>
                        <CardFooter>
                            <Button className='text-sm font-semibold bg-midnight text-lightGray my-4'>
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </CardContent>
                </Card>
            ))}
            <div className='flex justify-center'>
                <Pagination />
            </div>
        </div>
    )
}

export default Products
