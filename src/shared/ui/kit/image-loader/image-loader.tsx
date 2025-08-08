"use client"
import { ComponentProps, Ref, useEffect, useState } from "react"
import { TextInput } from "../text-input/text-input"
import clsx from "clsx"
import "./image-loader.css"
import Image from "next/image"

type Props = ComponentProps<"input"> & {
   ref?: Ref<HTMLInputElement>
   label?: React.ReactNode
   value?: string
   onSuccess?: (value: string) => void
   onError?: () => void
}

export function ImageLoader({
   ref,
   label,
   value: defaultValue,
   onChange,
   onSuccess,
   onError,
   className,
   placeholder = "Image link",
   ...attrs
}: Props) {
   const [value, setValue] = useState<string>(defaultValue || "")
   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

   const canRenderImage = status === "success" || status === "loading"

   const handleImageLoad = () => {
      setStatus("success")
      onSuccess?.(value)
   }

   const handleImageError = () => {
      setStatus("error")
      onError?.()
   }

   useEffect(() => handleValue(value), [])

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleValue(event.target.value)
      onChange?.(event)
   }

   const handleValue = (value: string) => {
      setValue(value)
      if (value === "") {
         setStatus("idle")
         return
      }
      if (!URL.canParse(value)) {
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
            {...attrs}
            onChange={handleInputChange}
            placeholder={placeholder}
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
            {canRenderImage && (
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
