import React from 'react'
import { Card, CardContent, CardDescription } from './ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Addresses: React.FC = () => {
    return (
        <Card className="flex gap-10 border-3 p-5">
            {Array.from([1, 2, 3, 4, 5]).map((_, index) => (
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
                                                    <Input value={`Ananthu`} />
                                                </CardContent>
                                                <CardContent>
                                                    <Label className="text-sm font-semibold p-3">Mobile:</Label>
                                                    <Input value={`8000000001`} />
                                                </CardContent>
                                                <CardContent>
                                                    <Label className="text-sm font-semibold p-3">Pincode:</Label>
                                                    <Input value={`666666`} />
                                                </CardContent>
                                                <CardContent>
                                                    <Label className="text-sm font-semibold p-3">Landmark:</Label>
                                                    <Input value={`VIP Road`} />
                                                </CardContent>
                                                <CardContent>
                                                    <Label className="text-sm font-semibold p-3">Address:</Label>
                                                    <Input value={`Sujama House, Edakkad`} />
                                                </CardContent>
                                                <CardContent className="flex justify-between">
                                                    <CardDescription>
                                                        <Label className="text-sm font-semibold p-3 text-black">City:</Label>
                                                        <Input value={`Kozhikode`} />
                                                    </CardDescription>
                                                    <CardDescription>
                                                        <Label className="text-sm font-semibold p-3 text-black">State:</Label>
                                                        <Input value={`Kerala`} />
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
            ))}
        </Card>

    )
}

export default Addresses
