import { string } from "yup";

const urlStringSchema = string().required().url();

export { urlStringSchema };
