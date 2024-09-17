"use client"

import React, { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUser } from '@/redux/slices/user.slice';

const LoginSecurity: React.FC = () => {

    const { status, user , error } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUser());
        }
    }, [dispatch, status]);

    return (
        <>
            {(status === 'loading')
                ? <></>
                : (status === 'succeeded')
                    ? < Card className="flex justify-center border-0 p-5">
                        <CardContent className="w-1/2 border rounded-lg p-5">
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Name:</Label>
                                <Input value={`Ananthu`} />
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Email:</Label>
                                <Input value={`ana****@gmail.com`} />
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Mobile:</Label>
                                <Input value={`8********1`} />
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Password:</Label>
                                <Input value={`******`} />
                            </CardContent>
                        </CardContent>
                    </Card >
                    : (status === 'failed')
                        ? <p>{error}</p>
                        : <></>
            }
        </>
    );

}

export default LoginSecurity

