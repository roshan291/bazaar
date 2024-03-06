import React, {useState} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants'

const ReadyItinerary = () => {
    const [navigateUrl, setNavigateUrlUrl] = useState("")
    
    const handleNavigation = () => {
        setNavigateUrlUrl(navigationURL.createItinerary)
    }
    
  return (
    <>
    <div className='manage_top_view'>
      <CustomNavigation url = {navigateUrl}/>
      <div >ReadyItinerary</div>
      <h5 onClick={handleNavigation}>Create Itinerary</h5>
    </div>
    </>
  )
}

export default ReadyItinerary