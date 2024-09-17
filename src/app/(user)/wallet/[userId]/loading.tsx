import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {

    return (
        <Card className="flex justify-center text-center border-0 shadow-0">
            <CardHeader className="my-20 p-20">
                <CardTitle className="text-4xl animate-ping">
                    Loading Wallet...
                </CardTitle>
            </CardHeader>
        </Card>
    )
}