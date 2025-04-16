import { extendSchema } from ".";
import type { AnySchema, ObjectSchema } from "yup";
import type { ParsedURL } from "../../../../core/src";

/**
 * Creates a higher-order function that extends a given base schema.
 *
 * @example
 * ```ts
 * const extendHTTPSchema = createSchemaExtender(httpOnlySchema);
 *
 * const facebookURLSchema = extendHTTPSchema({
 *   hostname: yup.string().required().oneOf(["facebook.com", "www.facebook.com"]),
 * });
 *
 * const chatGPTSchema = extendHTTPSchema({
 *   hostname: yup.string().required().oneOf(["chatgpt.com"]),
 * });
 * ```
 */
function createSchemaExtender<T extends ObjectSchema<ParsedURL>>(
  baseSchema: T
) {
  return function <U extends Partial<Record<keyof ParsedURL, AnySchema>>>(
    extensions: U
  ) {
    return extendSchema(baseSchema, extensions);
  };
}

export { createSchemaExtender };
