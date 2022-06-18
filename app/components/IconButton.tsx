import React from "react";

interface IconButtonProps {
  href: string;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-zinc-600 transition-colors hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
    >
      {children}
    </a>
  );
};

export default IconButton;
