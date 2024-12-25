import { Art, ArtBlack, Boston, Branding, BrandingBlack, ConvertKit, Croma, Design, DesignBlack, Development, DevelopmentBlack, DoraDesign, FortKnox, PeopleImg1, PeopleImg2, Portfolio, Proline, Sisila, Wavefun } from "../assets"

type Achievement = {
    stat: string,
    measure: string,
    title: string
}

export const achievement: Achievement[] = [
    {
        stat: "8.2",
        measure: "k",
        title: "Trusted Users"
    },
    {
        stat: "120",
        measure: "+",
        title: "Project Completed"
    },
    {
        stat: "97",
        measure: "%",
        title: "Clients Satisfaction"
    },
]

type Work = {
    image: string,
    title: string,
    category: string
}

export const work: Work[] = [
    {
        image: FortKnox,
        title: "FortKnox Chat Application",
        category: "Branding & Design"
    },
    {
        image: Boston,
        title: "Bsoston RealEstate App",
        category: "Branding & Ui"
    },
    {
        image: Portfolio,
        title: "Boltzshift - Portfolio",
        category: "Design & Development"
    },
    {
        image: Croma,
        title: "Croma - Agency",
        category: "Branding & Web"
    },
]

type Service = {
    icon: string,
    iconBlack: string;
    title: string,
    description: string
}

export const service: Service[] = [
    {
        icon: Branding,
        iconBlack: BrandingBlack,
        title: "Branding",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
        icon: Design,
        iconBlack: DesignBlack,
        title: "Design",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
        icon: Development,
        iconBlack: DevelopmentBlack,
        title: "Development",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
        icon: Art,
        iconBlack: ArtBlack,
        title: "Direction",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
]

type Brand = {
    logo: string
    alt: string
}

export const brand: Brand[] = [
    {
        logo: Wavefun,
        alt: "Wavefun",
    },
    {
        logo: Proline,
        alt: "Proline",
    },
    {
        logo: Sisila,
        alt: "Sisila",
    },
    {
        logo: DoraDesign,
        alt: "Doradesign",
    },
    {
        logo: ConvertKit,
        alt: "Convertkit",
    },
]

type Process = {
    index: string,
    title: string,
    description: string
}

export const process: Process[] = [
    {
        index: "01",
        title: "Research & Plan",
        description: "Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later"
    },
    {
        index: "02",
        title: "Mock Up",
        description: "Creating a mock up is the step of the design process most people recognize-it's the most visual part of the process In-depth sketching and brainstorming."
    },
    {
        index: "03",
        title: "Build",
        description: "Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers) Revise the solution as technical issues."
    },
]

type PricingPlan = {
    plan: string,
    price: string,
    bgColor: string,
    buttonBg: string,
    buttonText: string,
    buttonHover: string,
    features: string[]
}

export const pricingPlan: PricingPlan[] = [
    {
        plan: "BASIC",
        price: "$49",
        bgColor: "bg-white",
        buttonBg: "bg-primary",
        buttonText: "text-black",
        buttonHover: "hover:bg-yellow-500",
        features: [
            "Weekly updates",
            "Secure and Reliable",
            "Limited data points",
            "10+ Free Templates",
            "No Support",
            "Budget-friendly pricing"
        ]
    },
    {
        plan: "PRO",
        price: "$249",
        bgColor: "bg-primary",
        buttonBg: "bg-black",
        buttonText: "text-white",
        buttonHover: "hover:bg-[#141414]",
        features: [
            "Daily updates",
            "Secure and Reliable",
            "Hosting + Domain setup",
            "Website design $ development",
            "Pririty Support",
            "For businesses and professionals"
        ]
    },
    {
        plan: "ENTERPRISE",
        price: "$449",
        bgColor: "bg-white",
        buttonBg: "bg-primary",
        buttonText: "text-black",
        buttonHover: "hover:bg-yellow-500",
        features: [
            "For Enterprises",
            "Secure and Reliable",
            "Real-time data updates",
            "Comprehensive data points",
            "Pririty Support",
            "Budget-friendly pricing"
        ]
    },
]

type Review = {
    text: string,
    name: string,
    image: string,
    role: string
}

export const review: Review[] = [
    {
        text: "I am looking forward to working with the Boltzshift again",
        name: "Dora Dybala",
        image: PeopleImg1,
        role: "CEO & Founder of Company"
    },
    {
        text: "Anticipating the next chapter of collaboration with Boltzshift",
        name: "Ryan Dyson",
        image: PeopleImg2,
        role: "CTO of Company"
    },
]