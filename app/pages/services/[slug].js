import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import { serviceQuery, serviceSlugsQuery } from "../../lib/queries";
import { urlForImage, usePreviewSubscription } from "../../lib/sanity";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../../lib/sanity.server";
import Container from "../../components/Container";
import ProseableText from "../../components/ProseableText";

export default function Service({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.service?.slug;
  const {
    data: { service, moreServices },
  } = usePreviewSubscription(serviceQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <div className="mx-auto mt-12 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
                  {service.title}
                </h1>
                <p className="pt-2 pb-8 text-xl text-zinc-700 dark:text-zinc-400">
                  {service.excerpt}
                </p>
              </div>
              <div className="mx-auto max-w-3xl">
                <ProseableText content={service.content} />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug };
  const { service, moreServices } = await getClient(preview).fetch(
    serviceQuery,
    queryParams
  );

  return {
    props: {
      preview,
      data: {
        service,
        moreServices: overlayDrafts(moreServices),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(serviceSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
