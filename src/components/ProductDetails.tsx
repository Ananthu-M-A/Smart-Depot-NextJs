"use client"

import React, { useEffect } from 'react'
import Scrollers from "@/components/Scrollers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/legacy/image";
import Link from "next/link";
import { IdInterface } from '@/interfaces/id.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchProductDetails } from '@/redux/slices/product.slice';
import Loading from '@/app/loading';
import demoImage from '../../public/accessory1.jpg';
import IProduct from '@/interfaces/product.interface';


const ProductDetails = ({ id }: IdInterface) => {

  const dispatch = useDispatch<AppDispatch>();
  const { product, status, error }: { product: IProduct, status: string, error: string | null } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductDetails(id.productId as string));
    }
  }, [dispatch, status]);

  return (
    <>
      {(status === 'loading')
        ? <Loading />
        : (status === 'succeeded')
          ? <Card className='mb-10 flex w-full p-4 border-0'>
            <CardContent className="w-1/2 p-10 cursor-pointer border shadow-lg rounded-l">
              <Image
                src={demoImage}
                objectFit="cover"
                alt={product.name}
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
                <CardTitle className='text-xl cursor-pointer'>{product.name}
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
                      {Object.keys(product.specifications).map((key, index) => (
                        <TableHead key={index} className="border">{key.toLocaleUpperCase()}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      {Object.values(product.specifications).map((value, index) => (
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
          : (status === 'failed')
            ? <p>{error}</p>
            : <></>
      }
      <Scrollers />
      <Scrollers />
    </>
  )
}

export default ProductDetails