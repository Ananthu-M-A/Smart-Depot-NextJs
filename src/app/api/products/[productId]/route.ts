import { ParamsInterface } from "@/interfaces/params.interface";
import connectDb from "@/lib/mongoose";
import Product from "@/models/product.model";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: ParamsInterface) {
  try {
    await connectDb();
    const product = await Product.findOne({ _id: params.productId });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching product details:', error);
    return NextResponse.json({ error: 'Failed to fetch product details' }, { status: 500 });
  }
}
