import { offers } from "../data.ts";

export default function Services() {
    return (
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {offers.map((offer) => (
                <div
                    key={offer.id}
                    className="p-5 group shadow-lg hover:shadow-[0_15px_15px_rgba(0.25,0.25,0.25,0.25)] border-t-orange-300 border-t-4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d"
                >
                    <div className="flex items-center space-x-4">
                        <img src={offer.icon} alt={offer.name} className="text-amber-300" />
                        <h5 className="font-bold group-hover:text-amber-400">{offer.name}</h5>
                    </div>
                    <ul className="mt-3 text-sm list-disc list-inside leading-6">
                        {offer.items.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
