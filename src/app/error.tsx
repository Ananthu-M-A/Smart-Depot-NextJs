"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Errors } from "@/interfaces/ErrorInterface";

export default function ErrorBoundary({ error, reset }: Errors) {

    return (
        <Card className="flex justify-center text-center border-0 shadow-0">
            <CardHeader className="my-20 p-20 animate-bounce">
                <CardTitle className="text-4xl">
                    {error.name}
                </CardTitle>
                <CardDescription>
                    {error.message}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}