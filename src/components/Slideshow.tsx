

export default function Slideshow(props:{pics:String[], alts:String[]}) {
    const pics = props.pics;
    const alts = props.alts;

    return(
        <span className="pics">
            <a href={pics[0]}>
                <img src={pics[0]} alt={alts[0]} />
            </a>
            <a href={pics[0]}>
                <img src={pics[1]} alt={alts[1]} />
            </a>
        </span>
    );
}