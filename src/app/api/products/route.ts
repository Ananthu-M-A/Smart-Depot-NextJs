import connectDb from "@/lib/mongoose";
import Product from "@/models/product.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
