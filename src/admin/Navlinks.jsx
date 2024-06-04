import { MdHome } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Navlinks = [
    {   
        icon: <MdHome/>,
        link: 'Home',
        url: '/Home'
    },
    {   
        icon:<MdMovie/>,
        link: 'Movies',
        url: '/Movie'
    },
    {   
        icon:<MdCategory/>,
        link: 'Categories',
        url: '/Category'
    },
    {   
        icon:<FaUsers />,
        link: 'Users',
        url: '/User'
    }
    
];

export default Navlinks;
