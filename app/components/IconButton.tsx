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
      className="text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
    >
      {children}
    </a>
  );
};

export default IconButton;
