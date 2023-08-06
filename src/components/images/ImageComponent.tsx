import Image from "next/image";
import React, { useState } from "react";
import sea from "@public/sea-bay.jpeg";
import { rgbDataURL } from "@/utils/generateBlur";
import { shimmer, toBase64 } from "@/utils/shimmer";

const ImageComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [src, setSrc] = useState("/abc");
  const handleImageError = () => {
    setSrc(
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    );
  };
  return (
    <>
      {/* <img src="/sea-bay.jpeg" alt="sea-bay" /> */}
      <div className="flex items-center gap-10">
        <div className="relative flex-1 h-[600px]">
          <Image
            src={src}
            fill
            alt="sea"
            // className={`object-cover ${isLoaded ? "" : "blur"}`}
            // onLoadingComplete={() => setIsLoaded(true)}
            placeholder="blur"
            blurDataURL={rgbDataURL(104, 32, 203)}
            onError={handleImageError}
            // blurDataURL={`data:image/svg+xml;base64,${toBase64(
            //   shimmer(700, 600)
            // )}`}
          ></Image>
        </div>
        <div className="relative flex-1 h-[600px]">
          <Image
            src="/sea-bay.jpeg"
            alt="sea"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          ></Image>
        </div>
      </div>
      {/* <Image src={Sea} alt="sea"
    sizes=""
    ></Image> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque
        maiores, illum sit minus molestias veritatis, earum accusamus quam qui
        dolore eveniet culpa? Voluptate exercitationem architecto omnis
        molestias sint repudiandae.
      </p>
      <div className="h-screen"></div>
      <div className="grid grid-cols-6 gap-5">
        <div className="relative aspect-square">
          <Image src={sea} alt="" loading="lazy"></Image>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
