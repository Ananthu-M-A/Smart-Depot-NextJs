import dbConnect from '@/lib/mongoose';

export async function GET(req: Request) {
    dbConnect();
}
