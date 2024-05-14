"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function ShareButton() {
  return (
    <div>
      <h1>Social Share</h1>
      <FacebookShareButton url={"http://localhost:3000"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={"http://localhost:3000"}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={"http://localhost:3000"}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
