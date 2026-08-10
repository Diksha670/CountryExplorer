import { MdPlace } from 'react-icons/md'
import footerContactdata from '../../api/footerApi.json'
import { IoCallSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";

export const Footer=()=>
{
    const footerIcon={
        MdPlace:<MdPlace></MdPlace>,
        IoCallSharp:<IoCallSharp></IoCallSharp>,
        TbMailPlus:<MdEmail></MdEmail>
    }
    return <footer className='footer-section'>
        <div className="container grid grid-three-cols">
          {footerContactdata.map((currentdata,index)=>{
            return (
                <div className="footer-contact" key={index}>
                     <div className="icon">
                        <p className='icon p'>{footerIcon[currentdata.icon]}</p>
                     </div>
                     <div className="footer-contact-text">
                        <p>{currentdata.title}</p>
                        <p className='detail-description'>{currentdata.details}</p>
                     </div>
                </div>
            )
          })
          }
        </div>
    </footer>
}