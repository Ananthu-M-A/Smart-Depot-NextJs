import connectDb from "@/lib/mongoose";
import Product from "@/models/product.model";

export async function GET() {
  await connectDb();
  try {
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
  }
}
