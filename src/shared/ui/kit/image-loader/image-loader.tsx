"use client"
import { ComponentProps, Ref, useState } from "react"
import { TextInput } from "../text-input/text-input"
import clsx from "clsx"
import "./image-loader.css"
import Image from "next/image"

type Props = ComponentProps<"input"> & {
   ref?: Ref<HTMLInputElement>
   label?: React.ReactNode
   value?: string
   onError?: (...args: any) => any
}

export function ImageLoader({
   ref,
   label,
   onChange,
   className,
   placeholder = "Image link",
   ...attrs
}: Props) {
   const [value, setValue] = useState<string>("")
   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

   const canShowImg = status === "success" || status === "loading"

   const handleImageLoad = () => setStatus("success")
   const handleImageError = () => setStatus("error")

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      if (event.target.value === "") {
         setStatus("idle")
         return
      }
      if (!URL.canParse(event.target.value)) {
         setStatus("error")
         return
      }

      setStatus("loading")
   }

   return (
      <div className={clsx("ui-image-loader", className)}>
         <TextInput
            ref={ref}
            className="ui-image-loader-input"
            onChange={handleInputChange}
            placeholder={placeholder}
            {...attrs}
            value={value}
         />
         <div className="ui-image-loader-content">
            {status === "idle" && label}
            {status === "loading" && <p>Loading...</p>}
            {status === "error" && (
               <p>
                  Error occured. <br /> Please, try other link
               </p>
            )}
            {canShowImg && (
               <Image
                  src={String(value)}
                  alt="Uploaded image"
                  fill={true}
                  sizes="none"
                  loading="eager"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: status === "success" ? "block" : "none" }}
               />
            )}
         </div>
      </div>
   )
}
