import { object, string, array } from "yup";

const parsedURLSchema = object({
  hash: string().defined(),
  host: string().defined(),
  hostname: string().defined(),
  href: string().defined(),
  origin: string().defined(),
  password: string().defined(),
  pathname: string().defined(),
  pathSegments: array().of(string().required()).default([]),
  port: string().defined(),
  protocol: string().defined(),
  search: string().defined(),
  searchParamsObject: object().default({}),
  username: string().defined(),
});

export { parsedURLSchema };
