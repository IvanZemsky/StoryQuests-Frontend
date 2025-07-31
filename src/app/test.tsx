"use client"
import styles from "./test.module.css"

import { useState } from "react"
import { ImageLoader, ToggleButtonGroup } from "../shared/ui"

export function Test() {
   return (
      <div>
         <ImageLoader label="Image link" className={styles["image-loader-test"]} />
      </div>
   )
}
