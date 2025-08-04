"use server"

import "./loading.css"
import TubeSpinner from "../../../assets/animated/tube-spinner.svg"

export async function Loading() {
   return (
      <div className="ui-loading">
         <div className="ui-loading-content">
            <TubeSpinner />
         </div>
      </div>
   )
}
