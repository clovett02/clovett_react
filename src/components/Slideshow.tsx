import { useState, useEffect } from "react";


export default function Slideshow(props:{pics:String[], alts:String[]}) {
    const pics = props.pics;
    const alts = props.alts;

    const [picindex, setpicindex] = useState(0);
    let index = 0;

    useEffect( () => {

        const interval = setInterval(() => {            
            setpicindex(nextImage());
        }, 3000);
        return () => {clearInterval(interval)};
    }, [])

    function nextImage(){
        if(index === (pics.length - 1)){ 
            index = 0;
            return index;
        }
        else {
            index = index + 1;
            return index;
        }
    }

    return(
        <span className="pics">
            <a href={pics[picindex]}>
                <img src={pics[picindex]} alt={alts[picindex]} />
            </a>
        </span>
    );
}