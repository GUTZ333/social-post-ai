import { ArticleFeatures, ArticleWelcome } from "./articles";

export default function Section() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <ArticleWelcome className="flex items-center justify-center mt-10" />
      <ArticleFeatures />
    </section>
  );
}
