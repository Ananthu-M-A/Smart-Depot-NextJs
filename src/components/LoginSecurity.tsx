import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginSecurity:React.FC = () => {
    return (
        <Card className="flex justify-center border-0 p-5">
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
        </Card>
    );

}

export default LoginSecurity

