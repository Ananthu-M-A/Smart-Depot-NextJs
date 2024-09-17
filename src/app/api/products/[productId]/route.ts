import { ParamsInterface } from "@/interfaces/params.interface";
import connectDb from "@/lib/mongoose";
import Product from "@/models/product.model";

export async function GET(_req: Request, { params }: ParamsInterface) {
  connectDb();
  try {
    const product = await Product.find({ _id: params.productId });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
  }
}
