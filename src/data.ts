import fa_legal from "./assets/fa_legal.svg";
import fa_handshake from "./assets/fa_handshake.svg";
import fa_family from "./assets/fa_family.svg";
import fa_people from "./assets/fa_people.svg";
import fa_home from "./assets/fa_home.svg";
import fa_villa from "./assets/fa_villa.svg";
import mdi_legal from "./assets/mdi_legal.svg";

export type MenuTyps = {
    id: number;
    name: string;
    link: string;
}[];

export type OfferType = {
    id: number;
    name: string;
    icon: string;
    items: {
        id: number;
        name: string;
    }[];
}[];

export type LawyerType = {
    id: number;
    name: string;
    title: string;
    image: string;
}[];

export const menus: MenuTyps = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "About", link: "/About" },
];

export const offers: OfferType = [
    {
        id: 1,
        name: "Litigation and Dispute Resolution",
        icon: fa_legal,
        items: [
            {
                id: 1,
                name: "Legal representation in court.",
            },
            {
                id: 2,
                name: "Civil, criminal, and commercial litigation.",
            },
            {
                id: 3,
                name: "Mediation and arbitration services.",
            },
        ],
    },
    {
        id: 2,
        name: "Corporate and Business Law",
        icon: fa_handshake,
        items: [
            {
                id: 1,
                name: "Drafting and reviewing contracts.",
            },
            {
                id: 2,
                name: "Corporate compliance and governance.",
            },
            {
                id: 3,
                name: "Mergers, acquisitions, and business restructuring.",
            },
        ],
    },
    {
        id: 3,
        name: "Family Law",
        icon: fa_family,
        items: [
            {
                id: 1,
                name: "Divorce and child custody.",
            },
            {
                id: 2,
                name: "Prenuptial agreements.",
            },
            {
                id: 3,
                name: "Estate planning and inheritance matters.",
            },
        ],
    },
    {
        id: 4,
        name: "Employment and Labor Law",
        icon: fa_people,
        items: [
            {
                id: 1,
                name: "Workplace disputes and wrongful termination.",
            },
            {
                id: 2,
                name: "Employment contracts and policies.",
            },
            {
                id: 3,
                name: "Labor union negotiations.",
            },
        ],
    },
    {
        id: 5,
        name: "Intellectual Property Law",
        icon: fa_home,
        items: [
            {
                id: 1,
                name: "Trademark and copyright registration.",
            },
            {
                id: 2,
                name: "IP infringement cases.",
            },
            {
                id: 3,
                name: "Licensing and patent agreements.",
            },
        ],
    },
    {
        id: 6,
        name: "Real Estate and Property Law",
        icon: fa_villa,
        items: [
            {
                id: 1,
                name: "Property transactions and contracts.",
            },
            {
                id: 2,
                name: "Land disputes and zoning issues.",
            },
            {
                id: 3,
                name: "Lease agreements and tenant rights.",
            },
        ],
    },
    {
        id: 7,
        name: "Human Rights and Advocacy",
        icon: mdi_legal,
        items: [
            {
                id: 1,
                name: "Legal aid for marginalized communities.",
            },
            {
                id: 2,
                name: "Protection of fundamental rights.",
            },
            {
                id: 3,
                name: "Representation in public interest litigation.",
            },
        ],
    },
    {
        id: 8,
        name: "Taxation and Financial Law",
        icon: fa_villa,
        items: [
            {
                id: 1,
                name: "Tax compliance and disputes.",
            },
            {
                id: 2,
                name: "Financial regulations and audits.",
            },
            {
                id: 3,
                name: "Tax planning for individuals and businesses.",
            },
        ],
    },
];

export const lawyers: LawyerType = [
    { id: 1, name: "Austin Distel", title: "Family Lawyer", image: "./assets/lawyer-1.jpg" },
    {
        id: 2,
        name: "Christina Wocin",
        title: "Intellectual Property Law",
        image: "./assets/lawyer-2.jpg",
    },
    {
        id: 3,
        name: "Joachim Thiele",
        title: "Human Rights and Advocacy",
        image: "./assets/lawyer-3.jpg",
    },
    {
        id: 4,
        name: "Victor Quiroga",
        title: "Real Estate and Property Law",
        image: "./assets/lawyer-4.jpg",
    },
];
