"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"


export default function ForgotPassword() {
    return (
        <div className='py-5'>
            <h1 className='text-midnight w-1/4 text-4xl font-bold text-center py-4 mx-auto'>
                SMART DEPOT
            </h1>
            <Card className="w-1/3 mx-auto px-4 py-2 mt-2 rounded-xl border-2 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">
                        Reset Password
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">Email:</Label>
                    <Input value={`naasdad@gmail.com`} />
                </CardContent>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">Mobile No:</Label>
                    <Input value={`8181818181`} />
                </CardContent>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">New Password:</Label>
                    <Input value={`********`} />
                </CardContent>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">Confirm Password:</Label>
                    <Input value={`********`} />
                </CardContent>
                <CardContent className="text-center">
                    <Drawer>
                        <DrawerTrigger className="bg-midnight hover:bg-gray-900 text-lightGray p-2 rounded-lg">
                            Send Email OTP
                        </DrawerTrigger>
                        <DrawerContent className="w-1/4 mx-auto">
                            <DrawerHeader>
                                <DrawerTitle className="mx-auto">Enter OTP</DrawerTitle>
                                <DrawerDescription className="mx-auto">
                                    Enter OTP in 01:30s
                                </DrawerDescription>
                                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                                    <InputOTPGroup className="mx-auto border border-midnight">
                                        <InputOTPSlot className="border-r border-midnight" index={0} />
                                        <InputOTPSlot className="border-r border-midnight" index={1} />
                                        <InputOTPSlot className="border-r border-midnight" index={2} />
                                        <InputOTPSlot className="border-r border-midnight" index={3} />
                                        <InputOTPSlot className="border-r border-midnight" index={4} />
                                        <InputOTPSlot className="border-r border-midnight" index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button>Reset Password</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </CardContent>
            </Card>
            <Link href={`https://portfolio.smartdepot.co.in/`}>
                <h1 className='text-midnight w-1/4 text-sm font-semibold text-center py-4 mx-auto'>
                    smartdepot.co.in
                </h1>
            </Link>
        </div>
    )
}