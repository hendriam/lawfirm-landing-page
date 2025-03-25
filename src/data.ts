import fa_legal from "./assets/fa_legal.svg";
import fa_handshake from "./assets/fa_handshake.svg";
import fa_family from "./assets/fa_family.svg";
import fa_people from "./assets/fa_people.svg";
import fa_home from "./assets/fa_home.svg";
import fa_villa from "./assets/fa_villa.svg";
import mdi_legal from "./assets/mdi_legal.svg";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";
import blog5 from "./assets/blog5.jpg";
import blog6 from "./assets/blog6.jpg";
import lawyer1 from "./assets/lawyer-1.jpg";
import lawyer2 from "./assets/lawyer-2.jpg";
import lawyer3 from "./assets/lawyer-3.jpg";
import lawyer4 from "./assets/lawyer-4.jpg";

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

export type BlogType = {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
}[];

export type FaqType = {
    id: number;
    question: string;
    answer: string;
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
    { id: 1, name: "Austin Distel", title: "Family Lawyer", image: lawyer1 },
    {
        id: 2,
        name: "Christina Wocin",
        title: "Intellectual Property Law",
        image: lawyer2,
    },
    {
        id: 3,
        name: "Joachim Thiele",
        title: "Human Rights and Advocacy",
        image: lawyer3,
    },
    {
        id: 4,
        name: "Victor Quiroga",
        title: "Real Estate and Property Law",
        image: lawyer4,
    },
];

export const blogs: BlogType = [
    {
        id: 1,
        title: "The Legal Implications of Remote Work",
        description:
            "As remote work becomes more common, it's important to understand the legal implications for both employers and employees.",
        date: "June 15, 2021",
        category: "Employment Law",
        image: blog1,
    },
    {
        id: 2,
        title: "How to Protect Your Intellectual Property",
        description:
            "Intellectual property is a valuable asset for businesses. Learn how to protect your IP rights and avoid infringement.",
        date: "June 10, 2021",
        category: "Intellectual Property Law",
        image: blog2,
    },
    {
        id: 3,
        title: "Navigating Child Custody Disputes",
        description:
            "Child custody disputes can be emotionally challenging. Learn about the legal process and how to protect your child's best interests.",
        date: "June 5, 2021",
        category: "Family Law",
        image: blog3,
    },
    {
        id: 4,
        title: "The Role of Lawyers in Human Rights Advocacy",
        description:
            "Lawyers play a crucial role in advocating for human rights and social justice. Learn how legal professionals can make a difference.",
        date: "June 1, 2021",
        category: "Human Rights",
        image: blog4,
    },
    {
        id: 5,
        title: "Understanding the Basics of Tax Law",
        description:
            "Tax law can be complex, but understanding the basics is essential for individuals and businesses. Learn about tax compliance, deductions, and more.",
        date: "May 25, 2021",
        category: "Tax Law",
        image: blog5,
    },
    {
        id: 6,
        title: "Legal Considerations for Starting a Business",
        description:
            "Starting a business involves various legal considerations, from choosing the right business structure to protecting your intellectual property. Learn more.",
        date: "May 20, 2021",
        category: "Business Law",
        image: blog6,
    },
];

export const faqs: FaqType = [
    {
        id: 1,
        question: "What types of legal services do you provide?",
        answer: "We offer services in various legal areas, including family law, business law, property law, intellectual property, and litigation.",
    },
    {
        id: 2,
        question: "How can I find the right lawyer for my case?",
        answer: "You can find the right lawyer by researching their experience, expertise, and reputation in the legal community.",
    },
    {
        id: 3,
        question: "What should I expect during a legal consultation?",
        answer: "During a legal consultation, you can expect to discuss your case with the lawyer, ask questions, and receive legal advice.",
    },
    {
        id: 4,
        question: "How much does it cost to hire a lawyer?",
        answer: "The cost of hiring a lawyer varies depending on the complexity of the case, the lawyer's experience, and other factors.",
    },
    {
        id: 5,
        question: "What is the difference between litigation and mediation?",
        answer: "Litigation involves resolving legal disputes in court, while mediation is a form of alternative dispute resolution that involves a neutral third party helping the parties reach a settlement.",
    },
];
