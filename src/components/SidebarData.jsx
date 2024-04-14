import React from 'react' ;
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon : <AiIcons.AiFillHome />,
        cName : 'nav-text',
        
    },
    {
        title: "Doc. Appointment",
        path: '/appointment',
        icon : <FaIcons.FaStethoscope />,
        cName : 'nav-text'
    },
    {
        title: "med. Reminer",
        path: '/medicinereminder',
        icon : <FaIcons.FaFileMedical />,
        cName : 'nav-text'
    },
    {
        title: "Reports",
        path: '/reports',
        icon : <IoIcons.IoIosPaper />,
        cName : 'nav-text'
    },
    {
        title: "Stocks",
        path: '/Stocks',
        icon : <FaIcons.FaCartPlus />,
        cName : 'nav-text'
    },
    {
        title: "Gallery",
        path: '/Gallery',
        icon : <FaIcons.FaImage />,
        cName : 'nav-text'
    },
    {
        title: "Messages",
        path: 'messages/',
        icon : <FaIcons.FaEnvelopeOpenText />,
        cName : 'nav-text'
    },
    {
        title: "About Us",
        path: '/support',
        icon : <IoIcons.IoMdHelpCircle />,
        cName : 'nav-text'
    }
    
]