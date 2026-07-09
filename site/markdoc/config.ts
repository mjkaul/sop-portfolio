import Markdoc, { type Config, type Node, Tag } from "@markdoc/markdoc";
import { callout } from "./tags";

// Cross-references in the source content point at sibling `.md` files
// (e.g. `./SOP-007-troubleshooting.md`) so they render correctly on GitHub.
// Rewrite those to in-app routes at render time instead of editing every link.
const SOP_MD_LINK = /^\.?\/?(SOP-\d+[^./]*)\.md$/;

const link = {
  ...Markdoc.nodes.link,
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config);
    const href = attributes.href as string;
    const match = href.match(SOP_MD_LINK);
    if (match) {
      attributes.href = `/sops/${match[1]}`;
    }
    return new Tag("a", attributes, node.transformChildren(config));
  },
};

export const config: Config = {
  tags: { callout },
  nodes: { link },
};
