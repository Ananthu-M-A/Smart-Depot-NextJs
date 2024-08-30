import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { posters } from '@/constants/poster'
import Image from 'next/image'
import Link from 'next/link'

const Posters: React.FC = () => {
    return (
        <div className='flex justify-between p-4 gap-4 bg-lightGray'>
            {posters.map((poster, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{poster.title}</CardTitle>
                        <CardDescription>{poster.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4 w-full h-[300px] md:h-[400px]">
                        {poster.content.slice(0, 4).map((image, imgIndex) => (
                            <div key={imgIndex} className="relative w-full h-full border cursor-pointer">
                                <Image
                                    src={image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={`Poster Image ${imgIndex + 1}`}
                                />
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Link href={`${poster.footer}`}>see more ...</Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default Posters