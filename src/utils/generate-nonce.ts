import crypto from "crypto";

/**
 * Responsible for generating a random nonce value.
 *
 * @returns a nonce value.
 */
export const generateNonce = (): string => {
  return crypto.randomBytes(16).toString("base64");
};
