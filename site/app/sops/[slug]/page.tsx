import { notFound } from "next/navigation";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { getAllSlugs, getFrontmatter, getSopSource } from "@/lib/content";
import { config } from "@/markdoc/config";
import { Callout } from "@/components/Callout";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function SopPage({ params }: { params: { slug: string } }) {
  let source: string;
  try {
    source = getSopSource(params.slug);
  } catch {
    notFound();
  }

  const frontmatter = getFrontmatter(source);
  const lastReviewed =
    frontmatter.last_reviewed instanceof Date
      ? frontmatter.last_reviewed.toISOString().slice(0, 10)
      : frontmatter.last_reviewed;
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, {
    components: { Callout },
  });

  return (
    <article className="prose max-w-none dark:prose-invert">
      <div className="not-prose mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
        <span className="font-mono">{frontmatter.sop_id}</span>
        <span>v{frontmatter.version}</span>
        <span>{frontmatter.status}</span>
        <span>Last reviewed {lastReviewed}</span>
      </div>
      {rendered}
    </article>
  );
}
