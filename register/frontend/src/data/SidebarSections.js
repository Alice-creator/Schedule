import { TbSmartHome } from "react-icons/tb"
import { GrSchedules } from "react-icons/gr"
import { MdOutlineEditCalendar } from "react-icons/md"
import { GoCalendar } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { FiHelpCircle } from "react-icons/fi"



const sidebarSections = [
    {
        title: "home",
        icon : <TbSmartHome size={23} />
    },
    {
        title: "schedule",
        icon : <GrSchedules size={23} />
    },
    {
        title: "schedule week",
        icon : <MdOutlineEditCalendar size={23} />
    },
    {
        title: "calendar",
        icon : <GoCalendar size={23} />
    },
    {
        title: "setting",
        icon : <IoSettingsOutline size={23} />
    },
    {
        title: "help",
        icon : <FiHelpCircle size={23} />
    },
]
export default sidebarSections