import Prism from "prismjs";

// Include a theme:
import "prismjs/themes/prism-lucario.css";

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;