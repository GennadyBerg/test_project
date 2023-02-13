import styles from "./ImageLogoSignal.module.css";
import { Image } from './Image';
import { ImageLayer15 } from '../../images';

const ImageBackgroundHeader = (props) => {
    let { url, imageprops } = props;

    return (
        <>
            <div {...props}>
                <Image url={ImageLayer15} className={styles.layer15} imageprops={{ ...imageprops, width: "1480px", height: "943px" }} />
            </div>
        </>
    )
}
export { ImageBackgroundHeader };
