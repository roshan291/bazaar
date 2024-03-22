import React, {useState} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants';

const Invoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");

  const handleCreateInvoice = () => {
    setNavigateUrlUrl(navigationURL.createinvoice)
  }

  return (
    <div className='manage_top_view'>Invoice
      <CustomNavigation url = {navigateUrl}/>
      <button onClick={handleCreateInvoice}>Create Invoice</button>
    </div>
  )
}

export default Invoice