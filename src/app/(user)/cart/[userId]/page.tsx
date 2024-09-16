"use client"

import Scrollers from "@/components/Scrollers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ParamsInterface } from "@/interfaces/params.interface";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect } from "react";
import demoImage from '../../../../../public/accessory1.jpg'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchCartItems } from "@/redux/slices/cartItems.slice";


export default function CartDetails({ params }: ParamsInterface) {

    const dispatch = useDispatch<AppDispatch>();
    const { cartItems, status, error } = useSelector((state: RootState) => state.cartItems);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCartItems());
        }
    }, [dispatch, status]);

    return (<>
        {(status === 'loading')
            ? <p>Loading...</p>
            : (status === 'succeeded')
                ? < div className="flex gap-4 p-4">
                    <Card className='w-3/4 shadow-lg'>
                        <CardHeader>
                            <CardTitle>
                                Shopping Cart
                            </CardTitle>
                            <Card className="flex justify-between">
                                <CardDescription className="px-4">
                                    Deselect items
                                </CardDescription>
                                <CardDescription className="flex gap-20">
                                    <CardDescription>
                                        Qty
                                    </CardDescription>
                                    <CardDescription className="px-1">
                                        Price
                                    </CardDescription>
                                </CardDescription>
                            </Card>
                        </CardHeader>
                        <CardContent className="flex border">
                            <CardContent className="w-1/4 py-2 text-left">
                                <CardDescription className="p-5 ">
                                    <Checkbox />
                                </CardDescription>
                            </CardContent>
                            <CardContent className="w-1/4 px-1">
                                <CardHeader className="p-5">
                                    <CardTitle className='text-xl cursor-pointer'>{cartItems}
                                        <CardDescription className='font-bold'>
                                            {cartItems}
                                        </CardDescription>
                                    </CardTitle>
                                    <CardDescription className="">
                                        In Stock
                                    </CardDescription>
                                    <CardDescription className="">
                                        Free Delivery
                                    </CardDescription>
                                </CardHeader>
                            </CardContent>
                            <CardContent className="w-1/4 p-2">
                                <CardContent>
                                    <Image
                                        src={demoImage}
                                        objectFit="contain"
                                        alt={"contain"}
                                        width={125}
                                        height={125}
                                    />
                                </CardContent>
                            </CardContent>
                            <CardContent className="flex w-1/4 p-1 text-right">
                                <CardTitle className='p-5'>
                                    <Input type="number" min={1} max={10} placeholder="1" className="w-20 h-10 text-center text-sm" />
                                </CardTitle>
                                <CardTitle className='p-8'>
                                    <p className="text-sm">₹{cartItems} </p>
                                </CardTitle>
                            </CardContent>
                        </CardContent>
                        <CardContent className="flex justify-between text-midnight font-semibold py-2 px-10">
                            <Link href={""}>Delete</Link>
                            <Link href={""}>Add to wishlist</Link>
                            <Link href={""}>See similar products</Link>
                            <Link href={""}>Share</Link>
                        </CardContent>
                    </Card>
                    <Card className="w-1/4 text-center shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">
                                Subtotal(1 item): ₹{cartItems}
                            </CardTitle>
                            <CardFooter className="flex gap-4 justify-center">
                                <Button className='text-sm font-semibold bg-midnight text-lightGray my-4'>
                                    Proceed to Buy
                                </Button>
                            </CardFooter>
                        </CardHeader>
                    </Card>
                </div >
                : (status === 'failed')
                    ? <p>{error}</p>
                    : <></>
        }
        <Scrollers />
    </>)
}