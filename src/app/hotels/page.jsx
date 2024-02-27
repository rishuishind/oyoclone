import Header1 from "@/components/Header1"
import Hotel from "@/components/Hotel"

const Hotels = async (params) => {
    const city = params.searchParams.city;
    const response = await fetch(`${process.env.BASE_URL}/api/hotels?city=${city}`);
    const result = await response.json();
    const allHotels = result.data;
    return (
        <>
            <Header1 />
            {allHotels.map((hotel) => (<div className="m-5" key={hotel._id}>
                <Hotel data={hotel} />
            </div>))}

        </>
    )
}


export default Hotels