import type { ParsedURL } from "../types";

/**
 * Parses a given URL string and returns a object with properties taken from a URL objects with enhanced properties.
 * This function uses the native URL API. However unlike the native `URL` object, this function provides additional utilities
 * and ensures a consistent data format.
 *
 * @param url
 * @returns An object consisting of the following properties: 
 * - `hash` {string} - taken from the URL object, and modified to have the initial `'#'` removed if `hash` is not an empty string.
 * - `host` {string}
 * - `hostname` {string}
 * - `href` {string}
 * - `origin` {string}
 * - `password` {string}
 * - `pathname` {string}
 * - `port` {string}
 * - `protocol` {string}
 * - `search` {string}
 * - `username` {string}
 * - `pathSegments`: `string[]` - derived from `URL.pathname`. Turned into an array by splitting the string by `'/'`, and has all empty segments removed.
 * - `searchParamsObject`: `Record<string, string>` - derived from `URL.searchParams`. Made by converting the `URLSearchParams` object into a plain JavaScript object using the `Object.fromEntries` method. Note: `URL.searchParams` is *not* included in the resulting object.

 * @throws {TypeError} Invalid URL
 * @see [URL - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL)
 */
function parseURL(url: string): ParsedURL {
  const urlObject = new URL(url);
  const { pathname, searchParams } = urlObject;

  const pathSegments = pathname.split("/").filter(Boolean);
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  return {
    hash: urlObject.hash.substring(1),
    host: urlObject.host,
    hostname: urlObject.hostname,
    href: urlObject.href,
    origin: urlObject.origin,
    password: urlObject.password,
    pathname,
    port: urlObject.port,
    protocol: urlObject.protocol,
    search: urlObject.search,
    username: urlObject.username,
    pathSegments,
    searchParamsObject,
  };
}

export { parseURL };
