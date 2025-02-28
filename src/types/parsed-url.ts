type ParsedURL = {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
  pathSegments: string[];
  searchParamsObject: Record<string, string>;
};

export type { ParsedURL };
