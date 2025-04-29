import './App.css';
import React, { useState} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfCreator from './components/PdfCreator';
import Papa from 'papaparse';

const styles = {
  mainContainer: {
    height: '100vh',
    width: '100%'
  },
  pdfContainer: {
    width: 'inherit',
    height: 'inherit',
    textAlign: 'center'
  }
}

const App = () => {

  const [employeeDetails, setEmployeeDetails] = useState();

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setEmployeeDetails(results.data)
      },
    });
  };

  return (
    <div style={styles.mainContainer}>
      <div>
        <input
          type='file'
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>
      {employeeDetails?.length > 0 && (

        <div style={styles.pdfContainer}>
          <PDFViewer width={'50%'} height={'80%'}>
            <PdfCreator employeeDetails={employeeDetails} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

export default App;
