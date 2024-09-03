import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
    return (
        <div className='py-5'>
            <h1 className='text-midnight w-1/4 text-4xl font-bold text-center py-4 mx-auto'>
                SMART DEPOT
            </h1>
            <Card className="w-1/3 mx-auto px-4 py-2 mt-2 rounded-xl border-2 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">
                        Sign In
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">Email:</Label>
                    <Input value={`naasdad@gmail.com`} />
                </CardContent>
                <CardContent>
                    <Label className="text-sm font-semibold p-3">Password:</Label>
                    <Input value={`********`} />
                </CardContent>
                <CardContent className="text-center">
                    <Button className="bg-midnight hover:bg-gray-900 text-lightGray">
                        Sign In
                    </Button>
                </CardContent>
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