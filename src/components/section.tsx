import { HtmlHTMLAttributes } from "react";
import { ArticleFeatures, ArticleWelcome } from "./articles";
import clsx from "clsx";

export default function Section({ className, ...props } : HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx(className)} {...props}>
      <ArticleWelcome className="min-h-screen flex items-center justify-center mt-40" />
      <ArticleFeatures className="mt-20"/>
    </section>
  );
}
