"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import Image from "next/legacy/image"
import Link from 'next/link'
import { Button } from './ui/button'
import demoImage from '../../public/accessory1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { useEffect } from 'react'
import { fetchOrders } from '@/redux/slices/orders.slice'
import IOrder from '@/interfaces/order.interface'

const Orders: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { orders, status, error } = useSelector((state: RootState) => state.orders);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchOrders());
        }
    }, [dispatch, status]);

    return (
        <>
            {(status === 'loading')
                ? <></>
                : (status === 'succeeded')
                    ? < Card className="flex gap-10 border-3 p-5">
                        {(orders.length !== 0)
                            ? orders.map((order: IOrder, index: number) => (
                                <CardContent key={index} className="border rounded-lg">
                                    <Drawer>
                                        <DrawerTrigger>Show Orders Here</DrawerTrigger>
                                        <DrawerContent className="w-1/2 mx-auto">
                                            <DrawerHeader>
                                                <DrawerTitle>Returns & Orders</DrawerTitle>
                                                <DrawerDescription>
                                                    {orders && (
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
                                                                            {order.paymentMethod}
                                                                            <CardDescription className="font-bold">
                                                                                {order.paymentMethod}
                                                                            </CardDescription>
                                                                        </CardTitle>
                                                                    </CardContent>
                                                                    <CardContent>
                                                                        <CardContent className='p-5'>
                                                                            <Image
                                                                                src={demoImage}
                                                                                objectFit="fill"
                                                                                alt={order.paymentMethod}
                                                                                width={120}
                                                                                height={100}
                                                                            />
                                                                        </CardContent>
                                                                    </CardContent>
                                                                    <CardContent>
                                                                        <p className="text-sm px-2 text-right">₹{order.paymentMethod}</p>
                                                                    </CardContent>
                                                                    <CardContent>
                                                                        <p className="text-sm px-2">₹{order.paymentMethod}</p>
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
                            ))
                            :
                            <CardDescription className="mx-auto p-20 text-center text-4xl">
                                    No order in the list
                            </CardDescription>
                        }
                    </Card >
                    : (status === 'failed')
                        ? <p>{error}</p>
                        : <></>
            }
        </>);
}

export default Orders;
