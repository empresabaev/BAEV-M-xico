import { client } from '@utils/sanity-client';
import { IMAGE } from './blocks';

const CONFIG_QUERY_OBJ = `{
  _id,
  "favicon": {
    src/LOGO BAEV WEB SVG.svg
  },
  header {
    ...,
    logo ${IMAGE}
  },
  footer,
  titleSuffix
}`;

export async function fetchData() {
    return await client.fetch(`*[_type == "siteConfig"][0] ${CONFIG_QUERY_OBJ}`);
}
