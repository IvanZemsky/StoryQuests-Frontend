"use client"

import { useState } from "react"
import { ToggleButtonGroup } from "../shared/ui"

export function Test() {
   const [count, setCount] = useState(0)

   return (
      <div>
         {count}
         <ToggleButtonGroup
            name="test"
            value={count}
            variant="column"
            onChange={(e) => setCount(Number(e.target.value))}
         >
            <ToggleButtonGroup.Button value={1} id="first">
               1
            </ToggleButtonGroup.Button>
            <ToggleButtonGroup.Button value={2} id="second">
               2
            </ToggleButtonGroup.Button>
            <ToggleButtonGroup.Button value={3} id="third">
               3
            </ToggleButtonGroup.Button>
         </ToggleButtonGroup>
      </div>
   )
}
