import { Separator } from "@/components/ui/separator";
import { SiGithub, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si"
import Image from "next/image";
import Link from "next/link";
import Icon from "@/images/social-post-icon.webp"

const footerLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Terms",
    href: "/terms",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <Image src={Icon} alt="Social Post AI" width={128} height={34} />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Social Post AI
              </Link>
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="https://github.com/GUTZ333" target="_blank">
                <SiGithub size={20}/>
              </Link>
              <Link href="https://www.tiktok.com/@gutz333?lang=en" target="_blank">
                <SiTiktok size={20} />
              </Link>
              <Link href="https://www.youtube.com/@GUTZ333" target="_blank">
                <SiYoutube size={20} />
              </Link>
              <Link href="https://www.instagram.com/lpsking32" target="_blank">
                <SiInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
