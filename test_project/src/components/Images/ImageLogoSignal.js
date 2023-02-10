import styles from "./ImageLogoSignal.module.css";
import {ImageLogo, ImageSignal} from "../../images"
import { Image } from "./Image";

const ImageLogoSignal = (props) => {
    return (
        <>
            <Image {...props} url={ImageSignal} className={styles.signal} imageprops={{width:"27px", height:"11px"}}/>
            <Image {...props} url={ImageLogo} className={styles.signal} imageprops={{width:"27px", height:"11px"}}/>
        </>
    );
}

export { ImageLogoSignal };