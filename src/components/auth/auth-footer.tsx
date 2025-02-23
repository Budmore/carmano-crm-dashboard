interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export function AuthFooter({ text, linkText, href }: AuthFooterProps) {
  return (
    <p className="text-center text-sm text-gray-600">
      {text}{" "}
      <a
        href={href}
        className="font-medium text-violet-600 hover:text-violet-500 transition-colors"
      >
        {linkText}
      </a>
    </p>
  );
}
