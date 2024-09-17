"use client"

import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from "next/legacy/image";
import { Button } from './ui/button';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/slices/products.slice';
import IProduct, { } from '@/interfaces/product.interface';
import { AppDispatch, RootState } from '@/redux/store';
import demoImage from '../../public/accessory1.jpg';
import Loading from '@/app/loading';
import Link from 'next/link';

const ProductsList: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector((state: RootState) => state.product);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <>
            {(status === 'loading')
                ? <Loading />
                : (status === 'succeeded')
                    ? <div className='px-5'>
                        <h1 className='text-lg font-bold py-2 px-1'>Results</h1>
                        {products.map((product: IProduct, index: number) => (
                            <Card key={index} className='mb-4 shadow-lg border flex w-full'>
                                <CardContent className="w-1/2 p-20 cursor-pointer border shadow-lg rounded-l">
                                    <Image
                                        src={demoImage}
                                        objectFit="cover"
                                        alt={`Product Image ${index + 1}`}
                                        width={300} height={300}
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
                                        <CardTitle className='text-xl cursor-pointer'>
                                            <Link href={`/products/${product._id}`}>{product.name}</Link>
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
                    : (status === 'failed')
                        ? <p>{error}</p>
                        : <></>
            }
        </>
    )
}

export default ProductsList
