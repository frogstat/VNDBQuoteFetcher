import {useState} from "react";
import type {Image} from "../utils/vndbApi.ts";

type ImageViewProps = {
    image: Image;
}

function ImageView({image}: ImageViewProps) {

    const[isHidden, setIsHidden] = useState<boolean>(image.sexual > 0.3);

    return (
        <div className="image-container">
        <img
            className={`image ${isHidden ? 'image-hidden' : ''}`}
            alt=""
            src={image.url}
            onClick={() => {setIsHidden(false)}}
        />
        </div>
    );

}

export default ImageView;