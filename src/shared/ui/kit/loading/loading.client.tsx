import "./loading.css"
import TubeSpinner from "../../../assets/animated/tube-spinner.svg"

export function ClientLoading() {
   return (
      <div className="ui-loading">
         <div className="ui-loading-content">
            <TubeSpinner />
         </div>
      </div>
   )
}