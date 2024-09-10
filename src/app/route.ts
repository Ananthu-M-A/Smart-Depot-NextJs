import { brands } from "@/constants/filters";

export async function GET() {
    return Response.json(brands)
}

export async function POST(request: Request) {
    const brand = await request.json();
    const newBrand = {
        name: brand.name,
        id: brand.id,
    }
    brands.push(newBrand);
    return new Response(JSON.stringify(newBrand), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}