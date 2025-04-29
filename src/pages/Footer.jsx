
import footerdata from '../api/Footer.json';
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";


export const Footer=()=>{

    const footericon={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>
    }
    return <footer className="footer-section">
        <div className=" container grid grid-three-cols">
            {footerdata.map((curr,index)=>{
                const{icon,title,details}=curr;
                return(
                    <div className="footer-contact" key={index}>
                        <div className="icon">{footericon[icon]}</div>
                        <div className="footer-contact-text">
                            <p>{title}</p>
                            <p>{details}</p>
                        </div>
                    </div>
                )

                
            })
        }
        </div>
    </footer>
}