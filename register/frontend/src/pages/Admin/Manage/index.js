import React, { useContext, useState } from 'react'
import DefaultLayout from '../../../components/Layout/DefaultLayout'
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { SubjectContext } from '../../../components/GlobalStates/SubjectsContext';
import { AddData, AddNotifyAll } from '../../../services/SubjectApi';

const Manage = () => {
    const [columns, setColumns] = useState([]);
    const { subjects, keys } = useContext(SubjectContext)
    const [data, setData] = useState([]);
    // process CSV data
    const processData = dataString => {
      const dataStringLines = dataString.split(/\r\n|\n/);
      const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
   
      const list = [];
      for (let i = 1; i < dataStringLines.length; i++) {
        const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        if (headers && row.length == headers.length) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            let d = row[j];
            if (d.length > 0) {
              if (d[0] == '"')
                d = d.substring(1, d.length - 1);
              if (d[d.length - 1] == '"')
                d = d.substring(d.length - 2, 1);
            }
            if (headers[j]) {
              obj[headers[j]] = d;
            }
          }
   
          // remove the blank rows
          if (Object.values(obj).filter(x => x).length > 0) {
            list.push(obj);
          }
        }
      }
      console.log(headers);
      // prepare columns list from headers
      const columns = headers.map(c => ({
        name: c,
        selector: row => row[c],
      }));
   
      setData(list);
      setColumns(columns);
    }
    // handle file upload
    const handleFileUpload = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        processData(data);
      };
      reader.readAsBinaryString(file);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const notitfy = {
          name: 'Yeeep',
          content: 'Subjtects have been updated',
          time: new Date()
        }
        // const config = {
        //   method: 'POST',
        //   url: 'subjects/store',
        //   data: data,
        //   headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //     // Authorization: `Bearer ${cookies.token}`,
        //   },
		    // }
        // const { data } = await axios(config)
        const dataSubject = await AddData(data)
        const dataNotify= await AddNotifyAll(notitfy)
        window.location.reload()
    }
    const handleDelete = (e) => {
      e.preventDefault()

      axios.delete('subjects/delete')
        .then(() => console.log("Deleted"))
        .catch((err) => console.log(err))
      window.location.reload()
    }

    const keysColumns = keys.current.map(c => ({
      name: c,
      selector: row => row[c],
    }));
    console.log(columns);
    console.log(keys.current);

    return (
      <DefaultLayout>
      <div className='flex flex-col justify-center items-center my-4 ml-36'>
        <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}
        />
        <DataTable
            pagination
            highlightOnHover
            columns={keysColumns.length > 0 ? keysColumns :columns}
            data={subjects.length > 0 ? subjects : data}
            className='bg-black'
        />
        <div className='mb-10'>
            <button 
                id='submit'
                className='hover:shadow-primaryBoxShadow text-white  bg-primary px-4 py-2 rounded-lg w-44 mx-5'
                onClick={handleSubmit}    
            > 
                Submit
            </button>
            <button 
                id='delete'
                className='hover:shadow-primaryBoxShadow text-white  bg-red-900 px-4 py-2 rounded-lg w-44 mx-5'
                onClick={handleDelete}    
            > 
                Delete
            </button>
        </div>
      </div>
      </DefaultLayout>
    );
}

export default Manage