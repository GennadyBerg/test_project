import styles from "./ImageLogoSignal.module.css";
import { Image } from './Image';
import { ImageSignal } from "../../images";
import WebFont from 'webfontloader';
import { Box } from "@mui/material";

const ImageLogoSignal = (props) => {
    let { url, imageprops } = props;
//  <Image url={ImageLogoSignalPic} className={styles.logo} imageprops={{ ...imageprops, width: "137px", height: "52px" }} />
//height="36px"

    return (
        <>
            <div  {...props}>
                <Box>
                    <Image url={ImageSignal} className={styles.signal} imageprops={{ ...imageprops, }} />
                    
                    <svg
                        className={styles.svg} 
                        >
                        <text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="36px" x="0px" y="36px">
                            <tspan font-size="36px" font-family="Droid Sans" font-weight="bold" fill="#FFFFFF">ba</tspan>
                            <tspan font-size="36px" font-family="Droid Sans" font-weight="bold" fill="#4BCAFF">zinger</tspan>
                        </text>
                    </svg>
                </Box>
            </div>
        </>
    );
}

export { ImageLogoSignal };


