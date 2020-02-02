import { defaultPic } from './../helpers/show';

export const UseCardHandleHook = () => {


    const handlePic = (pic: string) => {
        return pic ? pic : defaultPic;
    }

    const convertString = (xmlString: string) => {
        const temporalDivElement: HTMLDivElement = document.createElement("div");
        temporalDivElement.innerHTML = xmlString;
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }
    return [handlePic, convertString]
}