import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Markdoc from "@markdoc/markdoc";

const CONTENT_DIR = path.join(process.cwd(), "..", "content");

export interface SopFrontmatter {
  title: string;
  sop_id: string;
  version: string;
  status: string;
  owner: string;
  last_reviewed: string | Date;
  tags: string[];
  related_sops?: string[];
}

export interface SopSummary {
  slug: string;
  frontmatter: SopFrontmatter;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function readSopFile(filename: string): { slug: string; source: string } {
  const source = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
  return { slug: slugFromFilename(filename), source };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(slugFromFilename);
}

export function getFrontmatter(source: string): SopFrontmatter {
  const ast = Markdoc.parse(source);
  const raw = ast.attributes.frontmatter;
  return raw ? (yaml.load(raw) as SopFrontmatter) : ({} as SopFrontmatter);
}

export function getAllSops(): SopSummary[] {
  const slugs = getAllSlugs();
  const sops = slugs.map((slug) => {
    const { source } = readSopFile(`${slug}.md`);
    return { slug, frontmatter: getFrontmatter(source) };
  });
  return sops.sort((a, b) => a.frontmatter.sop_id.localeCompare(b.frontmatter.sop_id));
}

export function getSopSource(slug: string): string {
  const { source } = readSopFile(`${slug}.md`);
  return source;
}
