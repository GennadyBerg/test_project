import styles from "./ImageLogoSignal.module.css";
import { Image } from "./Image";

const ImageLogoSignal = (props) => {
    return (
        <>
            <Image {...props} url={Image} className={styles.logo} imageprops={{ width: "137px", height: "52px" }} />
        </>
    );
}

export { ImageLogoSignal };