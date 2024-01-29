import React from 'react';
import CreateLead from './components/lead/create_Lead';
import ManageLead from './components/lead/manage_Lead';
import NavigationBar from './components/navigation';

function App() {
  return (
    <div className="page"> 
    <NavigationBar />
        {/* <CreateLead /> */}
        <ManageLead />
        
    </div>
  );
}

export default App;
