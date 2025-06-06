import { useState, useEffect } from "react";
import '../css/Slideshow.css';


export default function Slideshow(props:{pics:String[], alts:String[]}) {
    const pics = props.pics;
    const alts = props.alts;

    let index = 0;
    let previndex = pics.length - 1;
    const [picindex, setpicindex] = useState(index);
    const [prevpicindex, setprevpicindex] = useState(index);
    

    useEffect( () => {

        const interval = setInterval(() => {
            setprevpicindex(picindex);
            setpicindex(nextImage(picindex));
            // console.log(picindex);
        }, 8000);
        return () => {clearInterval(interval)};
    }, [picindex, previndex, nextImage])

    function nextImage(ind: number){
        if(ind === (pics.length - 1)){ 
            ind = 0;
            return ind;
        }
        else {
            ind = ind + 1;
            return ind;
        }
    }

    return(
        <span className="pics">
            <span>
                <a className="currentpic" href={`${pics[picindex]}`}>
                    <img src={`${pics[picindex]}`} alt={`${alts[picindex]}`} />
                </a>
                <a className="prevpic" href={`${pics[prevpicindex]}`}>
                    <img src={`${pics[prevpicindex]}`} alt={`${alts[prevpicindex]}`}/>
                </a>
            </span>
        </span>
    );
}