interface AuthSideProps {
  testimonial: {
    content: string;
    author: string;
  };
}

export function AuthSide({ testimonial }: AuthSideProps) {
  return (
    <>
      <div className="flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Your App Name
      </div>
      <div className="mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">&ldquo;{testimonial.content}&rdquo;</p>
          <footer className="text-sm">{testimonial.author}</footer>
        </blockquote>
      </div>
    </>
  );
}
