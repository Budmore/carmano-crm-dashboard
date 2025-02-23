export function AuthTerms() {
  return (
    <div className="text-center text-xs text-gray-500">
      <p>
        By continuing, you agree to our{" "}
        <a
          href="/terms"
          className="underline underline-offset-2 hover:text-violet-500 transition-colors"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-violet-500 transition-colors"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
