import { Definition } from "../context/domain";

interface props {
  definition: Definition;
}

const DefinitionItem = (props: props) => {
  return <li className="definition-element">{props.definition.definition}</li>;
};

export default DefinitionItem;
