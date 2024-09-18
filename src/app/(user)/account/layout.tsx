"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useParams();
    const pathname = usePathname();

    const defaultTab = pathname.slice(10 + params.userId.length);

    return (
        <div className="p-4">
            <Card className="shadow-lg">
                <CardHeader className="border-b">
                    <CardTitle>Your Account</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <Tabs value={defaultTab}>
                    <TabsList className="flex justify-center w-min mx-auto mt-5">
                        <TabsTrigger value="login-security">
                            <Link href={`/account/login-security/${params.userId}`} passHref>Login Security</Link>
                        </TabsTrigger>
                        <TabsTrigger value="orders">
                            <Link href={`/account/orders/${params.userId}`} passHref>Orders</Link>
                        </TabsTrigger>
                        <TabsTrigger value="addresses">
                            <Link href={`/account/addresses/${params.userId}`} passHref>Addresses</Link>
                        </TabsTrigger>
                    </TabsList>
                    {children}
                </Tabs>
            </Card>
        </div>
    );
}
