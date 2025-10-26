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
            "8096851841"
        ]
    },
    {
        icon: icon2,
        title: "Mail Information",
        description: "Drop Line",
        contacts: [
            "indigenousdevelopment2019@gmail.com"
        ]
    },
    {
        icon: icon3,
        title: "Our Location",
        description: "Address",
        contacts: [
            "6-194, Gattumalla Village, Laxmidevipally Mandal, Bhadradri Kothagudem District, Telangana 507101",
            "4-6-131, Kammari Basthi, Hayathnagar, Rangareddy District, Telangana 501505"
        ]
    }
]
