import type {Image} from "../utils/vndbApi.ts";
import ImageView from "./ImageView.tsx";

type VndbItemProps = {
    name: string;
    id: string;
    image: Image | null;
}

const baseUrl= "https://vndb.org"

function VndbItem({name, id, image}: VndbItemProps) {



    return (
        <div className="vndb-item">
            <a href={`${baseUrl}/${id}`}>{name}</a>
            {image && <ImageView image={image}/>}
        </div>
    )

}

export default VndbItem;