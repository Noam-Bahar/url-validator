import type { ObjectSchema, AnySchema } from "yup";
import type { ParsedURL } from "../types";

/**
 * This function lets you extend an object schema with additions defined in an object. The extension itself is done by Yup's `ObjectSchema.shape` method.
 *
 * @param baseSchema The base schema you want to extend. Must be an extension of the Base URL Schema.
 * @param extension A partial record of additional Yup schemas that override the base schema.
 * @returns A new schema that is extended from the Base URL schema.
 * @see [`ObjectSchema.shape`](https://github.com/jquense/yup?tab=readme-ov-file#objectshapefields-object-nosortedges-arraystring-string-schema)
 */
function extendSchema<
  T extends ObjectSchema<ParsedURL>,
  U extends Partial<Record<keyof ParsedURL, AnySchema>>
>(baseSchema: T, extension: U) {
  return baseSchema.shape(extension);
}

export { extendSchema };
