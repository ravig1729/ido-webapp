import icon1 from "@/assets/img/icons/vl-phone-icon1.1.svg"
import icon2 from "@/assets/img/icons/vl-phone-icon1.2.svg"
import icon3 from "@/assets/img/icons/vl-phone-icon1.3.svg"

type IconBoxType = {
    icon: string
    title: string
    description: string
    contacts: string[]
}

export const iconsBoxData: IconBoxType[] = [
    {
        icon: icon1,
        title: "Call Us Today",
        description: "24/7 Service",
        contacts: [
            "+00 123 456 789", "+00 987 654 321"
        ]
    },
    {
        icon: icon2,
        title: "Mail Information",
        description: "Drop Line",
        contacts: [
            "idoservice2@gmail.com",
            "idoservice@gmail.com"
        ]
    },
    {
        icon: icon3,
        title: "Our Location",
        description: "Address",
        contacts: [
            "8708 Technology Forest Pl Suite 125-G, The Woodlands, TX 77381"
        ]
    }
]
