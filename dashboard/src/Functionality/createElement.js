import Heading from "../Components/elements/child-elements/Heading"
import Paragraph from "../Components/elements/child-elements/Paragraph"
import ImageComponent from "../Components/elements/child-elements/Image";


const styles = {
    "xl": {},
    "lg": {},
    "md": {},
    "sm": {}
}

class Element {
    name = "";
    content = "";
    style = styles;
    id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}

class ImageElement extends Element {
    alt = ""
    constructor(name, content, alt) {
        super(name, content);
        this.alt = alt
    }
}

function generateElementData(name, content, alt) {
    if (name === "img") {
        return new ImageElement(name, content, alt)
    }
    return new Element(name, content)
}

const gED = generateElementData;

export const CreateElement = {
    "heading": () => {
        return gED("h1", "New Heading")
    },
    "paragraph": () => {
        return gED("p", "New Paragraph")
    },
    "image": (src = "", alt = "Placeholder Image") => {
        return gED("img", src, alt)
    }
}

export const mapElement = {
    "h1": Heading,
    "p": Paragraph,
    "img": ImageComponent,
}
