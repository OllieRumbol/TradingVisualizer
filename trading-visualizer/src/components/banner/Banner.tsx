import React, { Children } from "react";
import "./Banner.css"

type BannerProps = {
    children: React.ReactNode
}

export default function Banner(props: BannerProps){
    
    return(
        <div className="banner">
            {props.children}
        </div>
    )
}