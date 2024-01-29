import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faFileLines, faFileCircleXmark, faSquarePen, faFileMedical, faNoteSticky, faFileImage, faSquareH, faHotel, faClipboard, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
export const pleaseSelect = "Please select";
export const startDate = "Start Date";
export const endDate = "End Date";
export const pleaseEnterText = "Please enter text";
export const pleaseEnterEmail = "name@domain.com";
export const pleaseEnterNumber = "Please enter number";
export const notApplicable = "N/A";

export const selectRequirement = [
    "FIT (Customised) Tour Package",
    "Group Tour Package",
    "Hotel Stay",
    "Cab Service / Pick Up & Drop",
    "Flights",
    "Train",
    "Forex",
    "Visa",
];

export const leadStatus = [
    "All",
    "New",
    "Pending",
    "In Progress",
    "Confirmed",
    "Completed",
    "Cancelled", 
]

export const changeLeadStatus = [
    "New",
    "Pending",
    "In Progress",
    "Confirmed",
    "Completed",
    "Cancelled", 
]

export const selectRequirementDefault = {
    fItTourPackage: "FIT (Customised) Tour Package",
    groupTourPackage: "Group Tour Package",
    hotelStay : "Hotel Stay",
    cabServicePickUpandDrop: "Cab Service / Pick Up & Drop",
    flights: "Flights",
    train: "Train",
    forex: "Forex",
    visa: "Visa",
};

export const createNewCustomer = [
    "Syed Roshan",
    "Mahesh Babu",
    "Raghavendra",
    "Nayanatara",
];

export const selectCouple = [
    "Per Person",
    "Couple"
]

export const leadsChild = ["Create New Lead", "Manage Leads"];
export const itineraryChild = ["Customized Itinerary", "Group Itinerary", "Ready Itinerary"];
export const invoiceChild = ["My Customers", "Proforma Invoice", "Invoice"];
export const toolsChild = ["Website Builder", "Travel Flyer", "Setup Common Feedback Form", "View All Feedback"];
export const helpChild = ["+91 9727338866"]

export const navigationConstant = [ "Dashboard", "Leads", "My Itinerary", "Customer & Billing", "Hotels", "Tools", "Help"]

export const selectToastMessage = {
    success: "Success !!",
    failed: "Failed !!",
    successMessage: "Request sumitted successful.",
    failedMessage: "Request failed to sumitted."
}

export const modeOfPayment = [
    "Cash",
    "Cheque",
    "RTGS / NEFT / IMPS",
    "Payment Gateway", 
]

export const selectServiceIncluded = [
    "Airfare",
    "Internal Transportation",
    "Hotel Stay",
    "Sightseeing",
    "Visa Fees",
    "Government Tax",
    "Surcharge",
    "Cruise Stay",
    "Free Goodies",
    "APAI - Stay & All Meals",
    "Passport Fees",
    "CP - Stay & Breakfast",
    "Tour Manager",
    "MAP - Stay, Breakfast & Dinner",
]

export const selectServiceIncludedObj = [
    {id: 1, isChecked: "false", serviceName: "Airfare"},
    {id: 2, isChecked: "false", serviceName: "Internal Transportation"},
    {id: 3, isChecked: "false", serviceName: "Hotel Stay"},
    {id: 4, isChecked: "false", serviceName: "Sightseeing"},
    {id: 5, isChecked: "false", serviceName: "Visa Fees"},
    {id: 6, isChecked: "false", serviceName: "Government Tax"},
    {id: 7, isChecked: "false", serviceName: "Surcharge"},
    {id: 8, isChecked: "false", serviceName: "Cruise Stay"},
    {id: 9, isChecked: "false", serviceName: "Free Goodies"},
    {id: 10, isChecked: "false", serviceName: "APAI - Stay & All Meals"},
    {id: 11, isChecked: "false", serviceName: "Passport Fees"},
    {id: 12, isChecked: "false", serviceName: "CP - Stay & Breakfast"},
    {id: 13, isChecked: "false", serviceName: "Tour Manager"},
    {id: 14, isChecked: "false", serviceName: "MAP - Stay, Breakfast & Dinner"},
]

export const selectHotelPreferences = [
    "1 Star",
    "2 Star",
    "3 Star",
    "4 Star",
    "5 Star",
]

export const manageLeadSideNavMoreList = [
    {
        navTitle: "Edit Lead",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileLines} /> 
    },
    {
        navTitle: "Remove Lead",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileCircleXmark} /> 
    },
    {
        navTitle: "Change Lead Status",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faSquarePen} /> 
    },
    {
        navTitle: "Add New Itinerary",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileMedical} /> 
    },
    {
        navTitle: "View Itinerary",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faNoteSticky} /> 
    },
    {
        navTitle: "Add new Flyer",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileImage} />
    },
    {
        navTitle: "View Travel Flyer",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faClipboard} />
    },
    {
        navTitle: "Hotels",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faSquareH} />  
    },
    {
        navTitle: "Hotel Vouchers",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faHotel} /> 
    },
    {
        navTitle: "Documents",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faClipboardList} />
    },
    {
        navTitle: "Invoices",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileInvoice} />
    }
]

export const selectVehicleType = [                      
    "Airplane",                    
    "Auto",                    
    "Boat",                    
    "Bus",                    
    "Bus (12 Seater)",                    
    "Bus (20 Seater)",                    
    "Bus (34 Seater)",                    
    "Bus (36 Seater)",                    
    "Bus (45 Seater)",                    
    "Bus (49 Seater)",                    
    "By Cycle",                    
    "Car (Indica or Equivalent 4 Seater)",                    
    "Car (Innova or Equivalent 6 Seater)",                    
    "Car (Swift Dzire or Equivalent 4 Seater)",                    
    "Car (Tavera or Equivalent 7 Seater)",                    
    "Car - Normal Sedan",                    
    "Coach (SIC)",                    
    "Cruise",                    
    "Ferry",                    
    "Helicopter",                    
    "Longtail Boat",                    
    "Metro",                    
    "Mini Bus",                    
    "Mini Van",                    
    "Motorcycle",                    
    "Premium Car",                    
    "Rup Way",                    
    "Speed Boat",                    
    "Suv (Big Car)",                    
    "Tempo Traveller (12 Seater)",                    
    "Tempo Traveller (14 Seater)",                    
    "Tempo Traveller (17 Seater)",                    
    "Tempo Traveller (19 Seater)",                    
    "Tempo Traveller (26 Seater)",                    
    "Tempo Traveller (9 Seater)",                    
    "Train",                    
    "Tuk Tuk",                    
    "Van",                    
    "Walk",                    
    "Water Crafts",                    
]

export const selectTrainClass = [
    "First Class",
    "AC First Class",
    "AC 2-Tier",
    "AC 3-Tier",
    "AC Chair Car",
    "Sleeper",
    "Second Sitting",
]

export const selectCurrency = [
    "INR (Indian rupee)",
    "USD (United States dollar)",
    "EUR (European euro)",
    "AUD (Australian dollar)",
    "NZD (New Zealand dollar)",
    "AED (UAE dirham)",
    "GBP (Pound sterling)",
    "CAD (Canadian dollar)",
    "CNY (Chinese Yuan Renminbi)",
    "OMR (Omani rial)",
    "RUB (Russian ruble)",
    "SGD (Singapore dollar)",
    "CHF (Swiss franc)",
    "NPR (Nepal)",
    "THB (Thai Baht)",
    "MAD (Moroccan dirham)",
    "RAND (South African Rand)",
]

export const selectTypeOfHoliday = [
    "Adventure / Camping",
    "Beach / Hill Stations",
    "Corporate / Event",
    "Cruise",
    "Family / Leisure",
    "Nature / Safari / Wildlife",
    "Pilgrimage",
    "Rejuvenate / Meditation / Spa",
    "Romantic / Honeymoon",
    "Short Breaks",
    "Theme Park / Amusement Park",
    "Others",
]

export const selectCountries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire",
    "Azerbaijan",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Bavaria",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin (Dahomey)",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Brunswick and Lüneburg",
    "Bulgaria",
    "Burkina Faso (Upper Volta)",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Central American Federation",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo Free State",
    "Costa Rica",
    "Cote d’Ivoire (Ivory Coast)",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Czechoslovakia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Duchy of Parma",
    "East Germany (German Democratic Republic)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Federal Government of Germany (1848-49)",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Grand Duchy of Tuscany",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hanover",
    "Hanseatic Republics",
    "Hawaii",
    "Hesse",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kingdom of Serbia/Yugoslavia",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Lew Chew (Loochoo)",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mecklenburg-Schwerin",
    "Mecklenburg-Strelitz",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nassau",
    "Nauru",
    "Nepal",
    "Netherlands, The",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North German Confederation",
    "North German Union",
    "North Macedonia",
    "Norway",
    "Oldenburg",
    "Oman",
    "Orange Free State",
    "Pakistan",
    "Palau",
    "Panama",
    "Papal States",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Piedmont-Sardinia",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Genoa",
    "Republic of Korea (South Korea)",
    "Republic of the Congo",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Schaumburg-Lippe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands, The",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Texas",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Two Sicilies",
    "Uganda",
    "Ukraine",
    "Union of Soviet Socialist Republics",
    "United Arab Emirates, The",
    "United Kingdom, The",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Württemberg",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
  