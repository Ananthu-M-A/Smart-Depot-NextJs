import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
    return (
        <Card className="flex justify-center text-center border-0 shadow-0">
            <CardHeader className="my-20 p-20">
                <CardTitle className="text-4xl">
                    404 | Not Found
                </CardTitle>
                <CardDescription>
                    The page you requested does not exist.
                </CardDescription>
            </CardHeader>
        </Card>
    )
}