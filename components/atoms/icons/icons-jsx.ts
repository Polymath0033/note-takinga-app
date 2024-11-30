import { h, defineComponent } from "vue";
interface ParsedElement {
  tagName: string;
  attributes: { [key: string]: string };
  children: ParsedElement[];
}
const convertSvgToVueComponent = (svg: string) => {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svg, "image/svg+xml");
  const svgElement = svgDoc.documentElement;
  const parseAttributes = (element: Element) => {
    const attributes: { [key: string]: string } = {};
    for (let attr of element.attributes) {
      attributes[attr.name] = attr.value;
    }
    return attributes;
  };
  const parseElement = (element: Element): ParsedElement => {
    const tagName = element.tagName;
    const attributes = parseAttributes(element);
    const children: ParsedElement[] = [];
    for (let child of element.children) {
      children.push(parseElement(child));
    }
    return { tagName, attributes, children };
  };
  const parsedSVG = parseElement(svgElement);

  const generateJSX = (element: ParsedElement): string => {
    const { tagName, attributes, children } = element;
    const attrString = JSON.stringify(attributes, null, 2).replace(
      /"([^"]+)":/g,
      "$1:"
    );
    const childrenString = children.map(generateJSX).join(",\n    ");
    return `h("${tagName}", ${attrString}, [${childrenString}])`;
  };

  return generateJSX(parsedSVG);
};
export const icons: { [key: string]: string } = {
  "arrow-right": convertSvgToVueComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 7l-5 5 5 5V7z"/></svg>`
  ),
  "arrow-left": convertSvgToVueComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>`
  ),
};
export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => convertSvgToVueComponent(icons[props.name]);
  },
});
