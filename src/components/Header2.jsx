
const Header2 = () => {
    const List = [{ name: 'Banglore' }, { name: 'Delhi' }, { name: 'Mumbai' }, { name: 'Pune' }, { name: 'Hydrebad' },]
    return (
        <div>
            <div className="flex justify-around px-5 py-3 bg-gray-100">
                {List.map((city) => (<span key={city.name} className="">{city.name}</span>))}
            </div>
        </div>
    )
}

export default Header2