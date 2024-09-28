"use client"

import React, { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUser, selectUser, selectUserStatus } from '@/redux/slices/user.slice';
import IUser from '@/interfaces/user.interface';
import { useParams } from 'next/navigation';
import Loading from '@/app/(user)/account/loading';

const LoginSecurity: React.FC = () => {

    const { userId } = useParams();
    const dispatch = useDispatch<AppDispatch>();   
    const user = useSelector(selectUser);
    const status = useSelector(selectUserStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUser(userId as string));
        }
    }, [dispatch, status, userId]);

    return (
        <>
            {(status === 'loading')
                ? <Loading />
                : (status === 'succeeded')
                    ? < Card className="flex justify-center border-0 p-5">
                        <CardContent className="w-1/2 border rounded-lg p-5">
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Name:</Label>
                                <Input value={user.name}  type='text'/>
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Email:</Label>
                                <Input value={user.email} type='email'/>
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Mobile:</Label>
                                <Input value={user.mobile} type='text' />
                            </CardContent>
                            <CardContent>
                                <Label className="text-sm font-semibold p-3">Password:</Label>
                                <Input value={user.password} type='password'/>
                            </CardContent>
                        </CardContent>
                    </Card >
                    : (status === 'failed')
                        ? <p>ERROR</p>
                        : <></>
            }
        </>
    );

}

export default LoginSecurity

