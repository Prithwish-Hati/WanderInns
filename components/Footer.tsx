import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="section-containter flex flex-col mt-5 border-t">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/full-logo.svg"
            width={200}
            height={84}
            alt="Footer Logo"
            className="object-contain"
          />
          <p className="text-base text-gray-500">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {/* Mapping footerLinks */}
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {/* Mapping the "links" array within footerLinks */}
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t py-10">
          <p>@2023 CarHub. All Rights Reserved.</p>

          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of Use
            </Link>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;