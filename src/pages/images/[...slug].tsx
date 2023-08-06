import { useRouter } from "next/router";
import React from "react";

const ImagesSlugPage = () => {
  const router = useRouter();
  console.log("ImagesSlugPage ~ router:", router);
  return <div>Image Slug Page</div>;
};

export default ImagesSlugPage;
