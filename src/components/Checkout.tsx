import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Checkout: React.FC = () => {
    return (
        <div className="flex gap-4 p-4">
            <Card className='w-3/4 shadow-lg'>
                <CardHeader>
                    <CardTitle>
                        Checkout
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Your addresses</AccordionTrigger>
                            <AccordionContent>
                                Address 1
                            </AccordionContent>
                            <AccordionContent>
                                Address 1
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Payment method</AccordionTrigger>
                            <AccordionContent>
                                UPI
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Items and delivery</AccordionTrigger>
                            <AccordionContent>
                                UPI
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
            <Card>
            </Card>
        </div>
    )
}

export default Checkout;