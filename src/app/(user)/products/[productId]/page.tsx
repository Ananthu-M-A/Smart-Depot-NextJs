"use client"
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
    const { productId } = useParams();
    return (
        <>
            <ProductDetails id={{
                productId: productId,
                userId: "1"
            }} />
        </>
    )
}