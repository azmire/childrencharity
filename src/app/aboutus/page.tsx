"use client";

import React from "react";

function page() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl pt-5 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About us
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Stand With Children: Built by Us, Fueled by Transparency
              <div className="font-bold">
                Witnessing the Crisis, Inspiring Change
              </div>
              Stand With Children started with Ben and Andelo, two aspiring
              developers who felt compelled to act after witnessing the global
              children's crisis. We saw the statistics, the headlines, but more
              importantly, the real children facing unimaginable hardships. We
              built this platform to empower individuals to make a real
              difference.
              <div className="font-bold">
                Learning as We Go: Building with Impact
              </div>
              Though still honing our coding skills, the urgency of the
              situation fueled our creativity. We used what we knew (Next.js,
              GraphQL, MongoDB, Apollo) to craft a user-friendly platform
              connecting you with impactful children's charities. Every line of
              code reflects our goal: empower you to be the change.
              <div className="font-bold">
                More Than Donations, a Supportive Community
              </div>
              Stand With Children goes beyond secure donations. Here's what you
              can experience: Find Your Cause: Search a comprehensive database
              of verified charities aligned with your passions. Donate with
              Confidence: Every contribution is processed through secure
              platforms like Every.org, ensuring transparency and efficient
              delivery of your donation. Track Your Impact: See the positive
              change you create with clear metrics (coming soon). Share Your
              Passion (In Development): We're building a feature to launch
              personalized fundraising campaigns (stay tuned!).
              <div className="font-bold">Respecting Trusted Platforms</div> We
              leverage the power of established, secure platforms like Every.org
              for donation processing. This ensures your contributions reach
              those who need them most, while allowing us to focus on connecting
              you with the causes you care about.
              <div className="font-bold">Join the Movement</div> We're a small
              team with a big dream. If you share our vision of a brighter
              future for children, let's connect! Email: angelo.zmire@gmail.com
              | ezzbendev@gmail.com
              <div className="font-bold">
                Together, We Can Make a Difference
              </div>
              Stand With Children is a testament to the power of passion and a
              desire to help. By joining us, you're not just supporting children
              in need, you're inspiring a new generation of developers who
              believe technology can change the world.
              <div className="font-bold">Visit Stand With Children Today!</div>
              (link to website) and explore the incredible opportunities to make
              a lasting impact.
              <div className="font-bold">Spread the Word!</div> Share our
              message to amplify our reach and create a ripple effect for
              children worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
