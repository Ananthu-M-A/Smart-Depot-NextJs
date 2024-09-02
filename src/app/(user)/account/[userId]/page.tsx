"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginSecurity from "@/components/LoginSecurity";
import Addresses from "@/components/Addresses";
import Orders from "@/components/Orders";
import { useEffect, useState } from "react";

export default function AccountDetails() {
    const [defaultTab, setDefaultTab] = useState("account");

    useEffect(() => {
        const tabToLoad = "orders";
        setDefaultTab(tabToLoad);
    }, []);

    return (
        <div className="p-4">
            <Card className='shadow-lg'>
                <CardHeader className="border-b">
                    <CardTitle>Your Account</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <Tabs defaultValue={defaultTab}>
                    <TabsList className="flex justify-center w-min mx-auto mt-5">
                        <TabsTrigger value="login-security">Login & Security</TabsTrigger>
                        <TabsTrigger value="orders">Your Orders</TabsTrigger>
                        <TabsTrigger value="addresses">Your Addresses</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login-security">
                        <LoginSecurity />
                    </TabsContent>
                    <TabsContent value="orders">
                        <Orders />
                    </TabsContent>
                    <TabsContent value="addresses">
                        <Addresses />
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
}
