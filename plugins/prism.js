import Prism from "prismjs";

// Include custom CSS:
import "assets/prism-vaporwave.css";
import "assets/prism-toolbar.css";

// Include toolbar plugin:
import "prismjs/plugins/toolbar/prism-toolbar";

// Include some plugins:
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/autoloader/prism-autoloader";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

// Include additional languages
import "prismjs/components/prism-bash";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-shell-session";
import "prismjs/components/prism-json"

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;
