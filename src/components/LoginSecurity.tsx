"use client"

import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUser, selectUser, selectUserStatus } from '@/redux/slices/user.slice';
import { useParams } from 'next/navigation';
import Loading from '@/app/(user)/account/loading';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

const FormSchema = z.object({
    fullname: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    mobile: z.string().regex(/^\d{10}$/, {
        message: "Enter a valid mobile number",
    }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
        message:
            "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
    newPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
        message:
            "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

const RenderFormField = ({ control, name, label, type }: { 
  control: any, 
  name: string, 
  label: string, 
  type: string 
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-sm font-semibold p-2">
          {label}
        </FormLabel>
        <FormControl>
          <Input {...field} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const LoginSecurity: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [updatePassword, setUpdatePassword] = useState<boolean>(false);
    const { userId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(selectUser);
    const status = useSelector(selectUserStatus);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: user.name,
            email: user.email,
            mobile: user.mobile,
            password: "",
            newPassword: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            console.log(data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUser(userId as string));
        }
        if (status === "succeeded" && user) {
            setIsClient(true);
        }
    }, [dispatch, status, userId, user]);

    return (
        <>
            {(status === 'loading') || !isClient
                ? <Loading />
                : (status === 'succeeded')
                    ? <Card className="w-1/2 mx-auto px-4 py-5 mt-2 rounded-xl">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <CardContent>
                                    <RenderFormField control={form.control} name="fullname" label="Name :" type="text" />
                                    <RenderFormField control={form.control} name="email" label="Email :" type="email" />
                                    <RenderFormField control={form.control} name="mobile" label="Mobile :" type="tel" />
                                    <RenderFormField control={form.control} name="password" label="Current Password :" type={showPassword ? "text" : "password"} />
                                    {updatePassword && <RenderFormField control={form.control} name="newPassword" label="New Password :" type={showPassword ? "text" : "password"} />}
                                </CardContent>
                                <CardContent className="text-center">
                                    <CardContent className="flex justify-between text-center px-1">
                                        <Label className="flex text-xs px-1">
                                            <Input
                                                type="checkbox"
                                                className="w-3"
                                                checked={showPassword}
                                                onChange={() => setShowPassword(!showPassword)}
                                                aria-label="Show Password"
                                            />
                                            <Label className="py-3 px-1">Show Password</Label>
                                        </Label>
                                        <Label className="flex text-xs px-1">
                                            <Input
                                                type="checkbox"
                                                className="w-3"
                                                checked={updatePassword}
                                                onChange={() => setUpdatePassword(!updatePassword)}
                                                aria-label="Update Password"
                                            />
                                            <Label className="py-3 px-1">Change Password</Label>
                                        </Label>
                                        <Button type="submit" className="bg-midnight hover:bg-gray-900 text-lightGray">
                                            Update
                                        </Button>
                                    </CardContent>
                                </CardContent>
                            </form>
                        </Form>
                    </Card >
                    : (status === 'failed')
                        ? <p>ERROR</p>
                        : <></>
            }
        </>
    );
}

export default LoginSecurity;