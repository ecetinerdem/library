"use client";

import React from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUploader = () => {
  return <div>ImageUploader</div>;
};

export default ImageUploader;
