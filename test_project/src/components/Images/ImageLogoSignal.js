import styles from "./ImageLogoSignal.module.css";
import { Image } from './Image';
import { ImageLogoSignalPic } from "../../images";
import WebFont from 'webfontloader';

const ImageLogoSignal = (props) => {
    let { url, imageprops } = props;
    //                <Image url={ImageLogoSignalPic} className={styles.logo} imageprops={{ ...imageprops, width: "137px", height: "52px" }} />

    return (
        <>
            <div  {...props}>

                <svg
                    height="16px">
                    <text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="36px" x="0px" y="16px">
                        <tspan font-size="16px" font-family="Droid Sans" font-weight="bold" fill="#FFFFFF">ba</tspan>
                        <tspan font-size="16px" font-family="Droid Sans" font-weight="bold" fill="#4BCAFF">zinger</tspan>
                    </text>
                </svg>
            </div>
        </>
    );
}

export { ImageLogoSignal };


