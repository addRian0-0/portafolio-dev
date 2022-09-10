import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import yojaja from "../assets/yojaja.jpg"
import { herramientasAssets } from "../helpers/assets-imgs";

export default function Herramientas() {

    const [img, setImg] = useState<string>(herramientasAssets[0].link);

    const handleOnMouseMove = (tar: string) => {
        setImg(tar);
    }

    return (
        <div className="card-herramientas">
            <h2>Herramientas de mi uso...</h2>
            <div className="lista">
                <ul>
                    {
                        herramientasAssets.map(h => <li onMouseEnter={() => handleOnMouseMove(h.link)} key={h.nombre} >{h.nombre}</li>)
                    }
                </ul>
                <div className="container-img" >
                    <img src={img} className="animate__animated animate__bounce" />
                </div>
            </div>
        </div>
    )
}

