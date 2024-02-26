import connectDB from "../../../../db";
import hotel from '../../../../models/hotel-model';


export async function POST(request) {
    await connectDB();
    const res = await request.json();
    const newHotel = new hotel(res);
    const result = await newHotel.save()
    return new Response(JSON.stringify({ msg: 'Hotel added', result }), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}
export async function GET(request) {
    await connectDB();
    const hotels = await hotel.find({ location: request.nextUrl.searchParams.get('city') });
    if (hotels.length > 0) {
        return new Response(JSON.stringify({ msg: "Good", data: hotels }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 200
        })
    } else {
        const allHotels = await hotel.find({});
        return new Response(JSON.stringify({ msg: "All Hotels are here", data: allHotels }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 200
        })
    }
}