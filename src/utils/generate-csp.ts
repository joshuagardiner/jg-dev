/**
 * The properties available to the generateCSP function.
 */
interface generateCSPProps {
  /**
   * The generated nonce value.
   */
  nonce?: string;
}

/**
 * The directives available to the Content-Security-Policy.
 */
type Directive =
  | "child-src"
  | "connect-src"
  | "default-src"
  | "font-src"
  | "frame-src"
  | "img-src"
  | "manifest-src"
  | "media-src"
  | "object-src"
  | "prefetch-src"
  | "script-src"
  | "script-src-elem"
  | "script-src-attr"
  | "style-src"
  | "style-src-elem"
  | "style-src-attr"
  | "worker-src"
  | "base-uri"
  | "plugin-types"
  | "sandbox"
  | "form-action"
  | "frame-ancestors"
  | "navigate-to"
  | "report-uri"
  | "report-to"
  | "block-all-mixed-content"
  | "referrer"
  | "require-sri-for"
  | "require-trusted-types-for"
  | "trusted-types"
  | "upgrade-insecure-requests";

/**
 * Responsible for generating the Content-Security-Policy
 * by adding a Directive and it's associated value(s) to the policy.
 *
 * @param nonce the generated nonce value.
 * @returns the Content-Security-Policy.
 */
export const generateCSP = ({ nonce }: generateCSPProps = {}) => {
  const policy: Partial<Record<Directive, string[]>> = {};

  const add = (directive: Directive, value: string) => {
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  add("base-uri", `'none'`);
  add("connect-src", `'self' *.netlify.app`);
  add("default-src", `'none'`);
  add("font-src", `'self'`);
  add("form-action", `'none'`);
  add("frame-ancestors", `'none'`);
  add("frame-src", `'self' *.netlify.com`);
  add("img-src", `'self' *.netlify.app data:`);
  add("require-trusted-types-for", `'script'`);
  add("script-src", `'self' *.netlify.app`);
  add("style-src", `'self' 'unsafe-inline'`);

  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(" ")}`)
    .join("; ");
};
