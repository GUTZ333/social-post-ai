import { HtmlHTMLAttributes } from "react";
import { ArticleFeatures, ArticleWelcome } from "./articles";
import clsx from "clsx";

export default function Section({ className, ...props } : HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx(className)} {...props}>
      <ArticleWelcome />
      <ArticleFeatures/>
    </section>
  );
}
