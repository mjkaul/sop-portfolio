import { Tag, type Schema } from "@markdoc/markdoc";

export const callout: Schema = {
  render: "Callout",
  children: ["paragraph", "tag", "list"],
  attributes: {},
  transform(node, config) {
    const children = node.transformChildren(config);
    return new Tag("Callout", {}, children);
  },
};
