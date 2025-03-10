import { offers } from "../data.ts";

export default function Services() {
    return (
        <div className="mt-8 grid grid-cols-4 gap-5">
            {offers.map((offer) => (
                <div
                    key={offer.id}
                    className="p-5 shadow-md hover:shadow-2xl border-t-orange-300 border-t-4 transition-all"
                >
                    <div className="flex items-center space-x-4">
                        <img src={offer.icon} alt={offer.name} className="text-amber-300" />
                        <h5 className="font-bold">{offer.name}</h5>
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
