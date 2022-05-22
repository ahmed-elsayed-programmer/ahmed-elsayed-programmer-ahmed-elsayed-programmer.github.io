import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "qmaf26g9",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skaxBa1RHHv0lKGwQLxuCswvceWavlIj0gOAK1ogZqRBEmILrGTE7ctKjDVif83jHRyqrrfTPepDSJrAfHHueMkURPX3DraMmnaebhVnvVFgIfroiri39khHv2CKjWBTM4PkyieE0IBXStmOcZIc0FhlD2c1CjF79WJd5IaORNOcROMPAQRs",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
