"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function AvatarPage() {
  const [isPending, setIsPending] = useState<boolean>(false)
  const [img, setImg] = useState<string | null>(null)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File
    setIsPending(true)

    const data = new FormData()
    data.set("file", file) 

    const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/files`, {
      method: "POST",
      body: data
    })
    const signedUrl = await response.json()
    setImg(signedUrl.url)
    setIsPending(false)
  }

  const inputRef = useRef<HTMLInputElement | null>(null)
  return <div className="h-screen pt-10 flex flex-col">
    <h1 className="text-3xl font-semibold text-center pt-10 capitalize">
      Create yout gallery
    </h1>

    <div className="flex flex-wrap gap-1 p-5 w-[650px] min-h-[300px] mx-auto mt-6 mb-10 rounded-md shadow-sm">
      {img && <Image  className="object-cover rounded-md" width={400} height={400} src={img} alt={img} />}
    </div>

    <div className="flex justify-center">
      <input ref={inputRef} disabled={isPending} type="file" onChange={handleChange} className="absolute right-[99999px]" />
      <Button disabled={isPending} onClick={() => {
        inputRef.current?.click();
      }}>Upload Image</Button>
    </div>
  </div>
}