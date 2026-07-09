import Link from "next/link";
import { getAllSops } from "@/lib/content";

export function Sidebar() {
  const sops = getAllSops();

  return (
    <nav className="w-64 shrink-0 border-r border-gray-200 px-4 py-6 dark:border-gray-800">
      <Link href="/" className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
        SOP Portfolio
      </Link>
      <ul className="mt-6 space-y-1">
        {sops.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link
              href={`/sops/${slug}`}
              className="block rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <span className="font-mono text-xs text-gray-400 dark:text-gray-500">
                {frontmatter.sop_id}
              </span>{" "}
              {frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
