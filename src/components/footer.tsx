import {
  IconBrandInstagramFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200/60 text-base-content p-6 md:p-10 z-10">
      <aside>
        <Image src="/logo.png" alt="zynapse" width={80} height={80} />
        <p>
          Bharata Mata College
          <br />
          <span>
            Copyright © {new Date().getFullYear()} - All right reserved
          </span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.instagram.com/zynapse_25?utm_source=qr&igsh=MWMwaXI2dzE2MHFkMw==">
            <IconBrandInstagramFilled />
          </Link>
          <Link href="https://www.youtube.com/@ZynapseTechFest">
            <IconBrandYoutubeFilled />
          </Link>
        </div>
      </nav>
      <nav>
        <Link className="link link-hover" href="/#about">
          About us
        </Link>
        <Link className="link link-hover" href="/#contact">
          Contact
        </Link>
        <Link className="link link-hover" href="/#sponsors">
          Sponsors
        </Link>
      </nav>
      <nav>
        <Link className="link link-hover" href="/hackathon">
          Hackathon
        </Link>
        <Link className="link link-hover" href="/competitions">
          Competitions
        </Link>
        <Link className="link link-hover" href="/workshops">
          Workshops
        </Link>
      </nav>
    </footer>
  );
}
