import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "./mdx/MDXComponents";

export default function MDXRender({ source }: { source: string }) {
  return (
    <div className="prose">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypePrettyCode, { theme: "github-dark-dimmed" }],
            ],
          },
        }}
      />
    </div>
  );
}
