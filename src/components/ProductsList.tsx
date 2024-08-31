import { productsList } from '@/constants/products';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

const ProductsList: React.FC = () => {
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
                            <CardTitle className='text-xl cursor-pointer'>{product.productName}</CardTitle>
                            <CardDescription className='font-bold'>{product.brand}</CardDescription>
                        </CardHeader>
                        <CardTitle className='px-6 mb-4'>
                            <sup>₹</sup> {product.price} /-
                        </CardTitle>
                        <CardDescription className='px-7 text-black font-semibold'>
                            Description:- {product.description}
                        </CardDescription>
                        <CardDescription className='px-7 text-black font-semibold'>
                            Features:- {product.features.join(', ')}
                        </CardDescription>
                        <CardFooter>
                            <Button className='text-sm font-semibold bg-midnight text-lightGray my-4'>
                                Add to cart
                            </Button>
                        </CardFooter>
                    </CardContent>
                </Card>
            ))}
            
        </div>
    )
}

export default ProductsList
