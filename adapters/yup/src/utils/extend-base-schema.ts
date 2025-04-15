import { destructuredURLSchema } from "../schemas";
import { createSchemaExtender } from "./create-schema-extender";

/**
 * Extends the Base URL Schema with additional validation rules.
 * This utility is built on top of `extendSchema`.
 *
 * @param extensions A partial record of additional Yup schemas that override the base schema.
 * @returns A new schema that is extended from the Base URL schema.
 * @example
 * ```ts
 * const httpOnlySchema = extendBaseSchema({
 *   protocol: yup.string().required().oneOf(["http:", "https:"]),
 * });
 * ```
 */
const extendBaseSchema = createSchemaExtender(destructuredURLSchema);

export { extendBaseSchema };
