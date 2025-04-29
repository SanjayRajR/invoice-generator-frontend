import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '30px',
    },
    section: {
        textAlign: 'center',
        border: '2px solid, black',
        borderBottom: 'none',
        padding: '10px',
        fontSize: '18px'
    },
    separation: {
        backgroundColor: 'grey',
        paddingBottom: '20px'
    },
    employeeDetails: {
        padding: '10px',
        borderBottom: '2px solid black'
    },
    tableLeft: {
        width: '50%',
        textAlign: 'left'
    }, 
    tableRight: {
        width: '50%',
        textAlign: 'right'
    }
});

const monthNum = {
    'january': '01',
    'february': '02',
    'march': '03',
    'april': '04',
    'may': '05',
    'june': '06',
    'july': '07',
    'august': '08',
    'september': '09',
    'october': '10',
    'november': '11',
    'december': '12',
}

const PdfCreator = ({ employeeDetails }) => {

    return (
        <Document>
            {employeeDetails.map((employee) => (
                <Page size="A4" style={styles.page} key={employee["Mobile No"]}>
                    <View style={styles.section}>
                        <Text style={{fontWeight: 600}}>
                            Salary Invoice
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={{
                            fontSize: '15px',
                            fontWeight: 500,
                            paddingBottom: '10px'
                        }}>
                            {employee['Restaurant Name']}
                        </Text>
                        <Text style={{
                            fontSize: '12px',
                            width: '80%',
                            margin: 'auto'
                        }}>
                            {employee.Address}
                        </Text>
                    </View>

                    <View style={{
                        ...styles.section,
                        fontSize: '15px',
                        textAlign: 'left',
                        fontWeight: 500,
                        padding: '0px'
                    }}>
                        <Text style={styles.separation} />
                        <Text style={styles.employeeDetails}>
                            Bill No: <Text style={{ fontWeight: 600 }}> {`${new Date().getFullYear()}-${monthNum[employee.Month.toLowerCase()]}-${employee['Sl No']}`} </Text>
                        </Text>
                        <Text style={styles.employeeDetails}>
                            Bill To: <Text style={{ fontWeight: 600 }}> {employee.Name} </Text>
                        </Text>
                        <Text style={styles.employeeDetails}>
                            Mobile No: <Text style={{ fontWeight: 600 }}> {employee["Mobile No"]} </Text>
                        </Text>
                        <Text style={{
                            ...styles.employeeDetails,
                        }}>
                            Payment Mode: <Text style={{ fontWeight: 600 }}> {employee["Payment Mode"]} </Text>
                        </Text>
                        <Text style={{
                            ...styles.employeeDetails,
                            borderBottom: 'none'
                        }}>
                            Payment Date : 
                        </Text>
                    </View>
                    <View style={{
                        ...styles.section,
                        padding: '0px',
                        fontSize: '15px'
                    }}>
                        <Text style={styles.separation} />
                        <View style={{
                            flexDirection: 'row',
                            padding: '10px',
                            borderBottom: '2px solid black',
                            fontWeight: 600
                        }}>
                            <Text style={styles.tableLeft}>
                                Description
                            </Text>
                            <Text style={styles.tableRight}>
                                Amount
                            </Text>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: '10px',
                            borderBottom: '2px solid black'
                        }}>
                            <Text style={styles.tableLeft}>
                                Salary for Month: <Text style={{ fontWeight: 600 }}> {employee.Month} </Text>
                            </Text>
                            <Text style={styles.tableRight}>
                                {employee.Amount}
                            </Text>


                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: '10px',
                            fontWeight: 600
                        }}>

                            <Text style={styles.tableLeft}>
                                Total
                            </Text>
                            <Text style={styles.tableRight}>
                                {employee.Amount}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        ...styles.section,
                        padding: '0px',
                        fontSize: '16px'
                    }}>
                        <Text style={styles.separation} />
                        <Text style={{
                            textAlign: 'left',
                            paddingLeft: '10px',
                            paddingTop: '20px',
                            paddingBottom: '40px'
                        }}>
                            Received
                        </Text>
                        <Text style={{
                            textAlign: 'left',
                            paddingLeft: '10px',
                            paddingBottom: '20px',
                            borderBottom: '2px solid black',
                            fontWeight: '600'
                        }}>
                            {employee.Name}
                        </Text>
                    </View>
                </Page>
                
            ))}
        </Document>
    )
}

export default PdfCreator
