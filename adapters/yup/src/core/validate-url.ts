import { urlStringSchema } from "../schemas";
import { parseURL } from "../../../../core/src";
import type { ObjectSchema, InferType } from "yup";
import type { ParsedURL } from "../../../../core/src";

/**
 * Validates a URL string against a Parsed URL object schema.
 *
 * This function first validates the URL using a basic URL string schema.
 * Then, the URL is converted into a parsed URL object, and then that object is validated by the custom schema.
 *
 * @see [Yup string URL schema](https://github.com/jquense/yup?tab=readme-ov-file#stringurlmessage-string--function-schema)
 */
function validateURL<T extends ObjectSchema<ParsedURL>>(
  url: string,
  schema: T
): InferType<T> {
  urlStringSchema.validateSync(url);

  const destructuredURL = parseURL(url);

  return schema.validateSync(destructuredURL);
}

export { validateURL };
