import React from 'react';
import CreateLead from './components/lead/create_Lead';
import ManageLead from './components/lead/manage_Lead';
import NavigationBar from './components/navigation';
import Suggested from './components/lead/suggested';
import CreateItinerary from './components/itinerary/create_Itinerary';

function App() {
  return (
    <div className="page"> 
    <div className="loader"></div>
    <NavigationBar />
        {/* <CreateLead /> */}
        {/* <ManageLead /> */}
        {/* <Suggested /> */}
        <CreateItinerary />
    </div>
  );
}

export default App;
