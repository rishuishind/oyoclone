import connectDB from "../../../../../db";
import hotelModel from "../../../../../models/hotel-model";

export async function GET(request) {
    await connectDB();
    const hotel = await hotelModel.findById(request.nextUrl.searchParams.get('id'));
    console.log('Hey main hotel hoon... ', hotel)
    return new Response(JSON.stringify({ hotel }, {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 200
    }))

}