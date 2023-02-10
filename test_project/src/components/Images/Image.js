import styles from "./Image.module.css";
const Image = (props) => {
    let { url, imageprops } = props;
    return (
        <>
            <div {...props}>
                <img className={styles.image} src={url} {...imageprops} />
            </div>
        </>
    );
}

export { Image };