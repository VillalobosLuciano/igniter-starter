import { groq } from "next-sanity";

const serviceFields = groq`
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
`;

export const indexQuery = groq`
*[_type == "service"] | order(date desc, _updatedAt desc) {
  ${serviceFields}
}`;

export const serviceQuery = groq`
{
  "service": *[_type == "service" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${serviceFields}
  },
  "moreServices": *[_type == "service" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${serviceFields}
  }
}`;

export const serviceSlugsQuery = groq`
*[_type == "service" && defined(slug.current)][].slug.current
`;

export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0] {
  ${serviceFields}
}
`;
