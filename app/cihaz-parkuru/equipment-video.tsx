"use client";

import Image from "next/image";
import { useState } from "react";

export function EquipmentVideo({ code, video, image }: { code: string; video: string; image: string }) {
  const [playing, setPlaying] = useState(false);
  return <div className="equipment-video-frame">
    {playing ? <iframe src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1`} title={`${code} cihaz videosu`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/> : <button className="equipment-video-play" type="button" onClick={() => setPlaying(true)} aria-label={`${code} cihaz videosunu oynat`}><Image src={image} alt="" fill sizes="(max-width:800px) 100vw, 55vw"/><span>▶ Videoyu oynat</span></button>}
  </div>;
}
