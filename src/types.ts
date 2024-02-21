import React from "react";

export interface SlideData {
    title: string;
    description: string;
    img: string;
    component?: () => JSX.Element;
}