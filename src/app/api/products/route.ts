import connectDb from "@/lib/mongoose";
import Product from "@/models/product.model";

export async function GET() {
  connectDb();
  try {
    const products = await Product.find();
  console.log(products);  
    
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
  }
}
