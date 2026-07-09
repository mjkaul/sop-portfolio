import Link from "next/link";
import { getAllSops } from "@/lib/content";

export default function HomePage() {
  const sops = getAllSops();

  return (
    <article className="prose max-w-none dark:prose-invert">
      <h1>Technical Writing Portfolio — SOP Samples</h1>
      <p>
        <strong>Author:</strong> Matthew Kaul | Technical Writer
      </p>

      <h2>About This Portfolio</h2>
      <p>
        The SOPs in this portfolio are <strong>illustrative analogues</strong> of proprietary
        documentation authored or edited during a Product Lifecycle Management (PLM) system
        migration at a regulated medical device manufacturer.
      </p>
      <p>
        The originals supported a department-wide transition from a legacy PLM platform to an
        enterprise-grade replacement. Because those documents are proprietary, they have been
        recreated here using a fictional company (<strong>Meridian Medical</strong>), a fictional
        legacy system (<strong>LegacyVault PLM</strong>), and a fictional replacement system (
        <strong>Enterprise CorePLM</strong>). The structure, scope, and writing approach of each
        SOP faithfully reflect the originals.
      </p>

      <h2>Guiding Principles</h2>
      <ul>
        <li>
          <strong>Consistent terms, not synonyms.</strong> Each concept has one name, used every
          time.
        </li>
        <li>
          <strong>Clarity, not condescension.</strong> Written for experienced professionals
          learning a new system, not beginners learning a domain.
        </li>
        <li>
          <strong>Cross-references, not double-documenting.</strong> A process appears in exactly
          one place; other documents link to it.
        </li>
        <li>
          <strong>Global English.</strong> Precise, unambiguous language for native and
          non-native speakers alike.
        </li>
        <li>
          <strong>Happy Path priority.</strong> Standard workflows are documented clearly;
          exceptions live in Troubleshooting.
        </li>
      </ul>

      <h2>Document Set</h2>
      <table>
        <thead>
          <tr>
            <th>SOP ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {sops.map(({ slug, frontmatter }) => (
            <tr key={slug}>
              <td>{frontmatter.sop_id}</td>
              <td>
                <Link href={`/sops/${slug}`}>{frontmatter.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
