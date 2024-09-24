"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { loginUser } from '@/redux/slices/user.slice'
import { AppDispatch, RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const FormSchema = z.object({
    email: z
        .string()
        .email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message:
                "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        })
})


const Login: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { status, error }: { status: string, error: string | null } = useSelector((state: RootState) => state.user);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "john.doe@example.com",
            password: "Hashedpassword123$"
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            await dispatch(loginUser(data)).unwrap();
            if (status === "succeeded") {
                toast("Login Successful");
                router.push('/');
            } else if (status === "loading") {
                toast("Wait...");
            } else {
                toast("Login Failed");
            }
        } catch (error) {
            toast("Login Failed");
            console.error("Login failed:", error);
        }

    }

    return (
        <div className='py-5'>
            <h1 className='text-midnight w-1/4 text-4xl font-bold text-center py-2 mx-auto'>
                SMART DEPOT
            </h1>
            <Card className="w-1/3 mx-auto px-4 py-2 mt-2 rounded-xl border-2 shadow-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <CardHeader>
                            <CardTitle className="text-center">
                                Sign In
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold p-1">
                                            Email :
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your registered email"
                                                {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold p-1">
                                            Password :
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your password"
                                                {...field} type={isChecked ? "text" : "password"} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <CardContent className="flex justify-between text-center p-1">
                                <Label className="flex text-xs font-semibold p-1">
                                    <Input type="checkbox" className="w-3"
                                        checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                                    <Label className="py-3 px-1">Show Password</Label>
                                </Label>
                                <Button type="submit"
                                    className="bg-midnight hover:bg-gray-900 text-lightGray">
                                    Sign In
                                </Button>
                            </CardContent>
                        </CardContent>
                    </form>
                </Form>
                <CardContent className="flex justify-between text-center">
                    <CardDescription>
                        <Link href="/register">
                            Create an account
                        </Link>
                    </CardDescription>
                    <CardDescription>
                        <Link href="/forgot-password">
                            Forgot password ?
                        </Link>
                    </CardDescription>
                </CardContent>
            </Card>
            <h1 className='text-midnight w-1/4 text-sm font-semibold text-center py-4 mx-auto'>
                <Link href={`https://portfolio.smartdepot.co.in/`}>
                    smartdepot.co.in
                </Link>
            </h1>
        </div>
    )
}

export default Login