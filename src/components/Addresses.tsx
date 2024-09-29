"use client"

import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription } from './ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import IAddress from '@/interfaces/address.interface'
import { fetchAddresses, selectAddressesStatus, selectAllAddresses } from '@/redux/slices/addresses.slice'
import { useParams } from 'next/navigation'

const Addresses: React.FC = () => {

    const params = useParams();
    const addresses = useSelector(selectAllAddresses);
    const addressesStatus = useSelector(selectAddressesStatus);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (addressesStatus === 'idle') {
            dispatch(fetchAddresses(params.userId as string));
        }
    }, [dispatch, addressesStatus]);

    return (
        <>
            {(addressesStatus === 'loading')
                ? <></>
                : (addressesStatus === 'succeeded')
                    ? < Card className="flex gap-10 border-3 p-5">
                        {(addresses.length !== 0)
                            ? addresses.map((address: IAddress, index: number) => (
                                <CardContent key={index} className="w-min border rounded-lg">
                                    <Drawer>
                                        <DrawerTrigger>Show Address Here</DrawerTrigger>
                                        <DrawerContent className="w-1/2 mx-auto">
                                            <DrawerHeader>
                                                <DrawerTitle className="pb-4">Edit Address</DrawerTitle>
                                                <DrawerDescription>
                                                    <ScrollArea className="h-64">
                                                        <Card className="flex justify-center">
                                                            <CardContent className="w-full border rounded-lg p-5">
                                                                <CardContent>
                                                                    <Label className="text-sm font-semibold p-3">Full Name:</Label>
                                                                    <Input value={address.recipientName} />
                                                                </CardContent>
                                                                <CardContent>
                                                                    <Label className="text-sm font-semibold p-3">Mobile:</Label>
                                                                    <Input value={address.recipientMobile} />
                                                                </CardContent>
                                                                <CardContent>
                                                                    <Label className="text-sm font-semibold p-3">Pincode:</Label>
                                                                    <Input value={address.zip} />
                                                                </CardContent>
                                                                <CardContent>
                                                                    <Label className="text-sm font-semibold p-3">Landmark:</Label>
                                                                    <Input value={address.street} />
                                                                </CardContent>
                                                                <CardContent>
                                                                    <Label className="text-sm font-semibold p-3">Address:</Label>
                                                                    <Input value={address.house} />
                                                                </CardContent>
                                                                <CardContent className="flex justify-between">
                                                                    <CardDescription>
                                                                        <Label className="text-sm font-semibold p-3 text-black">City:</Label>
                                                                        <Input value={address.city} />
                                                                    </CardDescription>
                                                                    <CardDescription>
                                                                        <Label className="text-sm font-semibold p-3 text-black">State:</Label>
                                                                        <Input value={address.state} />
                                                                    </CardDescription>
                                                                </CardContent>
                                                            </CardContent>
                                                        </Card>
                                                        <ScrollBar />
                                                    </ScrollArea>
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                                <Button className="bg-midnight hover:bg-gray-900 text-lightGray border">
                                                    Update Address
                                                </Button>
                                                <DrawerClose>
                                                    <Button className="bg-lightGray hover:bg-gray-300" variant="outline">Cancel</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                </CardContent>
                            ))
                            :
                            <CardDescription className="mx-auto p-20 text-center text-4xl">
                                No addresses in the list
                            </CardDescription>
                        }
                    </Card >
                    : (addressesStatus === 'failed')
                        ? <p>ERROR</p>
                        : <></>
            }
        </>

    )
}

export default Addresses
