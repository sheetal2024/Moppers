import React from "react";
import Link from "next/link";
import footerLogo from "@/assets/slcr-logo-footer.svg";
import { navBar } from "@/utils/navbar";
import { servicesFooter } from "@/utils/services";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { posts } from "@/utils";

export default function Footer2() {
  return (
    <>
      <section className="bg-[#1C1959] w-full h-fit py-10">
        <div className="lg:main-container px-4">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-5">
              <img src={footerLogo.src} className="w-40" alt="Moppers Logo" />
              <p className="text-gray-500">
                We are a professional cleaning company founded in 1997,
                providing leading commercial and residential cleaning solutions
                in the U.S.
              </p>
              <p className="text-gray-500">
                Mail: info@moppers.com <br />
                Call: +1 972 500 4545
              </p>

              <div className="flex gap-5 text-gray-500 transition-colors duration-300 cursor-pointer hover:text-white">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">PAGES</h1>
              <div className="flex flex-col gap-3">
                {navBar.map((navItem) => (
                  <Link key={navItem.id} href={navItem.path}>
                    <div className="text-gray-500 font-semibold capitalize hover:text-white transition duration-300">
                      {navItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">SERVICES</h1>
              <div className="flex flex-col gap-3">
                {servicesFooter.map((servicesItem) => (
                  <Link key={servicesItem.id} href={servicesItem.path}>
                    <div className="text-gray-500 font-semibold capitalize hover:text-white transition duration-300">
                      {servicesItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-white">RECENT POSTS</h1>
              <div className="flex flex-col gap-5">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-start gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded object-cover w-12 h-12"
                    />
                    <div>
                      <h2 className="text-gray-500 font-semibold text-sm">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-xs italic">
                        {post.date} / by {post.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1959] w-full h-fit">
        <div className="h-px w-full bg-gray-600"></div>
        <div className="lg:main-container px-4">
          <div className="text-center text-white text-sm py-5">
            Â© 2024 - Moppers. All Rights Reserved | Corporate website by
            Moppers
          </div>
        </div>
      </section>
    </>
  );
}
