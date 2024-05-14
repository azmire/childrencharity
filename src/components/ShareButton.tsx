"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { useParams } from "next/navigation";

export default function ShareButton({ id }) {
  return (
    <div>
      <h1>Social Share</h1>
      <FacebookShareButton url={`https://www.every.org/${id}/donate`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={`https://www.every.org/${id}/donate`}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={`https://www.every.org/${id}/donate`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={`https://www.every.org/${id}/donate`}
        title={"next-share is a social share buttons for your next React apps."}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}
