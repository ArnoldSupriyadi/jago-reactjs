import "./Avatar.css"
import { FC } from "react";
import React from 'react';

type size = "small" | "medium" | "large";
interface Props {
    url?: string;
    label?: string;
    size?: size;
}



const Avatar: FC<Props> = ({ url, label, size = "medium"}) => {
    return (
        <>
            <div className={`avatar avatar_${size}`}>
                {url && <img src={url} alt={label} />}
            </div>
            
        </>
    )
}

export default Avatar;

// https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60