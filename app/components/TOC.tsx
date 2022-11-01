import React from "react";
import speakingurl from "speakingurl";

export default function TOC({ content }: any) {
  const filter = (ast: any, match: any) =>
    ast.reduce((acc: any, node: any) => {
      if (match(node)) acc.push(node);
      if (node.children) acc.push(...filter(node.children, match));
      return acc;
    }, []);

  const findHeadings = (ast: any) =>
    filter(ast, (node: any) => /h\d/.test(node.style)).map((node: any) => {
      const text = getChildrenText(node);
      const slug = speakingurl(text);

      return { ...node, text, slug };
    });

  const get = (object: any, path: any) =>
    path.reduce((prev: any, curr: any) => prev[curr], object);
  const getObjectPath = (path: any) =>
    path.length === 0
      ? path
      : ["subheadings"].concat(path.join(".subheadings.").split("."));

  const parseOutline = (ast: any) => {
    const outline = { subheadings: [] };
    const headings = findHeadings(ast);
    const path: any = [];
    let lastLevel = 0;

    headings.forEach((heading: any) => {
      const level = Number(heading.style.slice(1));
      heading.subheadings = [];

      if (level < lastLevel)
        for (let i = lastLevel; i >= level; i--) path.pop();
      else if (level === lastLevel) path.pop();

      const prop = get(outline, getObjectPath(path));
      prop.subheadings.push(heading);
      path.push(prop.subheadings.length - 1);
      lastLevel = level;
    });

    return outline.subheadings;
  };

  const getChildrenText = (props: any) =>
    props.children
      .map((node: any) => (typeof node === "string" ? node : node.text || ""))
      .join("");

  const TableOfContents = (props: any) => (
    <ol>
      {props.outline.map((heading: any) => (
        <li key={heading.slug}>
          <a href={`#${heading.slug}`}>{heading.text}</a>
          {heading.subheadings.length > 0 && (
            <TableOfContents outline={heading.subheadings} />
          )}
        </li>
      ))}
    </ol>
  );

  const outline = parseOutline(content);
  return (
    <div>
      <TableOfContents outline={outline} />
    </div>
  );
}
