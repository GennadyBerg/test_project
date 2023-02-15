import styles from "./ImageLogoSignal.module.css";
import { Image } from './Image';
import { ImageLayer15 } from '../../images';
import { Paper, Box } from "@mui/material";

const ImageBackgroundHeader = (props) => {
    let { url, imageprops } = props;
    //

    return (
        <>
            <Box id="mbTest1"  {...props}  width="1488px"  height= "943px" sx={{ backgroundImage: `url(${ImageLayer15})`, backgroundAttachment:"local" }}>
                {props.children}
            </Box>
        </>
    )
}
export { ImageBackgroundHeader };
