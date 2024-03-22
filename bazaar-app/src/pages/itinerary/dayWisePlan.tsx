import React from 'react'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Daywiseplan = ({createItinerary}:any) => {
    const {
        itineraryTitle,
        destination,
        typeOfHoliday,
        noOfAdults,
        noOfKids,
        startDate,
        endDate,
        coupleList,
        currencyType,
        budgetForTrip,
        noOfNights,
        travellers,
        serviceList,
        welcomenote,
        customerName,
        emailId,
        mobileNumber,
        address,
        country,
        state,
        city,
        postalCode, 
        birthDate,
        anniversaryDate,
        note,
        dayWisePlanFinal,
        inclusion,
        exclusion,
        cost,
        termsConditions,
        tips,
        otherVisaInformation,
        thankyounote, 
        changestatus, 
    } = createItinerary;

    console.log("dayWisePlanFinal2:", dayWisePlanFinal)

    const styles = StyleSheet.create({
        page: { backgroundColor: '#FFFFFF' },
        inner : { margin: 20 },
        section: { margin:10 },
        heading:{ fontSize: 30, color: '#5d96e9', padding: 30,textAlign:'center' },
        header:{ fontSize: 16, backgroundColor: '#2b3f5d', color: 'white', padding:"25 20" },
        text : { padding: 2, fontSize: 12, textAlign: "justify", lineHeight:2 },
        summaryinner: { flex: 1, flexDirection: 'column', backgroundColor:"#648dc9", margin: 20 },
        summarySection: { margin:10, backgroundColor:'#2b3f5d', position: 'absolute', bottom: 0, left: 0, right: 0 },
        title: { fontSize : 16 },
        summary: { backgroundColor:'#648dc9',opacity: 0.5, color: 'white', padding: '20 10'},
        flextProp : { display: 'flex', flexDirection: 'row', padding: 10},
        summarytext: { fontSize: 14,opacity: 1, padding: 4, color: 'white' },
        summarytitle : { fontSize : 16, opacity: 1},
        inclusion: {flex: '0 0 auto', marginLeft: 30, textAlign: 'left', color: 'white' },
        inclusionText: { fontSize: 10, padding: 2, color:'white' }
      });

  return (
    <>
        <Page style={styles.page}>
            <View style={styles.summaryinner}>
                <View style={styles.summarySection}>
                    <View style={styles.summary}>
                        <Text style={styles.summarytitle}>Summary</Text>
                    </View>
                    <View style={styles.flextProp}>
                        <View>
                            <Text style={styles.summarytext}>{noOfNights} Nights & </Text>
                            <Text style={styles.summarytext}>INR {budgetForTrip} {coupleList} {currencyType} </Text>
                            <Text style={styles.summarytext}>{noOfAdults} People</Text>
                            <Text style={styles.summarytext}>{startDate} To {endDate} </Text>

                            {itineraryTitle && <Text style={styles.summarytext}>Itinerary Title: {itineraryTitle}</Text>}
                            {destination && <Text style={styles.summarytext}>Destination: {destination}</Text>}
                            {typeOfHoliday && <Text style={styles.summarytext}>Type of Holiday: {typeOfHoliday}</Text>}
                            {noOfAdults && <Text style={styles.summarytext}>noOfAdults: {noOfAdults}</Text>}
                            {noOfKids && <Text style={styles.summarytext}>noOfKids: {noOfKids}</Text>}                        
                            {startDate && <Text style={styles.summarytext}>Start Date: {startDate}</Text>}
                            {endDate && <Text style={styles.summarytext}>End Date: {endDate}</Text>}
                            {noOfNights && <Text style={styles.summarytext}>No. of Nights: {noOfNights}</Text>}
                            {travellers && <Text style={styles.summarytext}>Travellers: {travellers}</Text>}
                            {budgetForTrip && <Text style={styles.summarytext}>Budget for Trip: {budgetForTrip}</Text>}
                            {coupleList && <Text style={styles.summarytext}>coupleList: {coupleList}</Text>}
                            {currencyType && <Text style={styles.summarytext}>currencyType: {currencyType}</Text>}
                        </View> 
                
                        {serviceList && serviceList.length > 0 && (
                            <View style={styles.inclusion}>
                             <Text style={styles.title}>Inclusion:</Text>
                                {serviceList.map((service:any, index:any) => (
                                    service.isChecked && (
                                    <Text key={index} style={styles.inclusionText}>
                                        {service.serviceName}
                                    </Text>
                                    )
                                ))}
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </Page>
        {welcomenote && (
            <>
                <Page style={styles.page}>
                    <View style={styles.inner}>
                        <Text>{welcomenote}</Text>
                    </View>
                </Page>
            </>
            )
        }

        {customerName && (
            <>
                <Page style={styles.page}>
                    <View style={styles.inner}>
                        {customerName && <Text>CustomerName:{customerName}</Text>}
                        {emailId && <Text>EmailId:{emailId}</Text>}
                        {mobileNumber && <Text>Phone:{mobileNumber}</Text>}
                        {country && <Text>Country:{country}</Text>}
                        {state && <Text>State:{state}</Text>}
                        {city && <Text>City:{city}</Text>}
                        {postalCode && <Text>Postal Code:{postalCode}</Text>}
                        {birthDate && <Text>Birth Date:{birthDate}</Text>}
                        {anniversaryDate && <Text>Anniversary Date:{anniversaryDate}</Text>}
                        {address && <Text>Address:{address}</Text>}
                        {note && <Text>Note:{note}</Text>}
                    </View>
                </Page>
            </>
        )}            
            <Page size="A4" style={styles.page}>
                <View style={styles.inner}>
                    <View style={styles.header}>
                        <Text>inclusion & exclusion, Terms & Condition / Cancellation</Text>
                    </View>
                    <View style={styles.section}>
                        {inclusion && <Text style={styles.text}>inclusion : {inclusion} </Text>}
                        {exclusion && <Text style={styles.text}>exclusion : {exclusion} </Text>}
                        {cost && <Text style={styles.text}>cost : {cost} </Text>}
                        {termsConditions && <Text style={styles.text}>termsConditions : {termsConditions} </Text>}
                        {tips && <Text style={styles.text}>tips : {tips} </Text>}
                        {otherVisaInformation && <Text style={styles.text}>otherVisaInformation : {otherVisaInformation} </Text>}
                    </View>
                </View>
            </Page>
            
        {   <Page style={styles.page}>
                {dayWisePlanFinal.map((item:any, index:any) => (
                    <View key={index} style={styles.section}>
                        {item.description.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.title}>Description:</Text>
                                {item.description.map((desc:any, i:number) => (
                                    <View key={i}>
                                        {/* Return JSX elements here */}
                                        {desc.dayTitleText && <Text>Day Title: {desc.dayTitleText}</Text>}
                                        {desc.dayDescriptionText && <Text>Description: {desc.dayDescriptionText}</Text>}
                                    </View>
                                ))}
                            </View>
                        )}

                        {item.transportation.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.title}>Transportation:</Text>
                                    {item.transportation.map((trans:any, i:any) => (
                                        <View key={i}>
                                            {trans.transportationTitle && <Text style={styles.text}>Title: {trans.transportationTitle}</Text>}
                                            {trans.transpotationMode && <Text style={styles.text}>Mode: {trans.transpotationMode}</Text>}
                                            {trans.departingCountry && <Text style={styles.text}>departingCountry: {trans.departingCountry}</Text>}
                                            {trans.arrivalCountry && <Text style={styles.text}>arrivalCountry: {trans.arrivalCountry}</Text>}
                                            {trans.departingCity && <Text style={styles.text}>departingCity: {trans.departingCity}</Text>}
                                            {trans.arrivalCity && <Text style={styles.text}>arrivalCity: {trans.arrivalCity}</Text>}
                                            {trans.startingPoint && <Text style={styles.text}>startingPoint: {trans.startingPoint}</Text>}
                                            {trans.endingPoint && <Text style={styles.text}>endingPoint: {trans.endingPoint}</Text>}
                                            {trans.departDate && <Text style={styles.text}>departDate: {trans.departDate}</Text>}
                                            {trans.arrialDate && <Text style={styles.text}>arrialDate: {trans.arrialDate}</Text>}
                                            {trans.actualDepartureTime && <Text style={styles.text}>actualDepartureTime: {trans.actualDepartureTime}</Text>}
                                            {trans.actualArrivalTime && <Text style={styles.text}>actualArrivalTime: {trans.actualArrivalTime}</Text>}
                                            {trans.reportingTime && <Text style={styles.text}>reportingTime: {trans.reportingTime}</Text>}
                                            {trans.transpotationNote && <Text style={styles.text}>transpotationNote: {trans.transpotationNote}</Text>}
                                        </View>
                                    ))}
                            </View>
                        )}
                    </View>
                ))}
            </Page>
        }

        {
          <Page style={styles.page}>
          <View style={styles.inner}>
            <View style={styles.header}>
              <Text>Hotel</Text>
            </View>
            {dayWisePlanFinal.map((item: any, index: any) => (
              <View key={index} style={styles.section}>
                {item.hotel.length > 0 && (
                  <View style={styles.section}>
                    <Text style={styles.title}>Hotel:</Text>
                    {item.hotel.map((hotl: any, i: number) => (
                      <View key={i}>
                        {hotl.checkInDate && <Text>CheckInDate: {hotl.checkInDate}</Text>}
                        {hotl.checkInTime && <Text>CheckInTime: {hotl.checkInTime}</Text>}
                        {hotl.numberOfNights && <Text>Number Of Nights: {hotl.numberOfNights}</Text>}
                        {hotl.adults && <Text>Adults: {hotl.adults}</Text>}
                        {hotl.rooms && <Text>Rooms: {hotl.rooms}</Text>}
                        {hotl.childs && <Text>Childs: {hotl.childs}</Text>}
                        {hotl.extrabed && <Text>Extrabed: {hotl.extrabed}</Text>}
                        {hotl.roomTypes && <Text>Room Types: {hotl.roomTypes}</Text>}
                        {hotl.noteText && <Text>Note Text: {hotl.noteText}</Text>}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </Page>
        
            
        }

        <Page size="A4" style={styles.page}>
            <View style={styles.inner}>
                <View style={styles.section}>
                    <Text style={styles.heading}> Thank You </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Thank You </Text>
                    <Text style={styles.text}>We believe the above provided is according to your speci'ed requirements, and hope that the information will be helpful
                        for your holiday plans. For travelers who wish to ensure they are well covered for any incidents, Holiday Bazaar also offers
                        a wide range of travel insurance solutions and services, which can be customized based on individual needs and
                        preferences.
                    </Text>
                    <Text style={styles.text}>For any clarification or further information at all regarding the above, please do not hesitate to call or email us directly.</Text>
                </View>
            </View>
        </Page>
    </>
  )
}

export default Daywiseplan