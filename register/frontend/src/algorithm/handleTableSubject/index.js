import ReactDOMServer from "react-dom/server";
import SubjectTimeTable from "../../components/ModalTimetable/SubjectTimeTable";
import { constants } from "../../constants";
import DeletedSubject from "../../pages/Schedules/Schedule/DeletedSubject";
import Subject from "../../pages/Schedules/Schedule/Subject";
import { handleDeleteSubject } from "../handleDeleteSubject";
export const handleTableSubject = (array, setArray, deleteArr, setDeleteArr, boolean) => {
    let radom = Math.floor(Math.random() * 6) + 1
    let color = { number : radom }

    const tableElement = document.getElementById("myTable")
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']
    
    if(tableElement) {
        for (let i in tableElement.rows) {
            let row = tableElement.rows[i]
            let arr = ['0','1']
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0' && j !=='0') {

                        col.setAttribute('rowspan', 1)
                        col.innerHTML = ""
                            
                    }
                    if(col.id) {
                      arr.push(col.id[col.id.length - 1])
                    }
                }
            }
            if(arr.length > 2) {
                var k = 0
                var checkDay = []
                // var c = ""
                for(let v = 0; v < dayArr.length; v++)
                {
                    if(dayArr[v] == arr[k])
                    {
                        checkDay.push(false);
                        k++;
                    }
                    else
                    checkDay.push(true);
                }
                
                for(let v = 0; v < checkDay.length; v++) {
                    if(checkDay[v]) {
                        const roww = tableElement.rows[i]
                        roww.insertCell(v-1).setAttribute('class', 'border-l p-2 border-gray-400')
                        const cell = roww.cells[v-1]
                        if(cell) {
                            cell.setAttribute('id', `${i}-${v}`)
                            
                        }
                    }
                }
            }
            
         }
    }

    array?.map((value) => {        
        // let periods = value.period.replace(/[-]/g, '')
        let periods = value.period

        const periodArray = []
        let j = 1
        for(let i = 0; i < periods.length; i++) {
            if(periods[i] != '-') {
                periodArray.push(j)
            }
            j++
        }

        
        const periodStart = periodArray[0]
        const valueId = `${periodStart}-${value.day}`
        let subjectElement = document.getElementById(valueId)
   
        if(subjectElement == null) {
            return false
        }
        if(subjectElement) {

            subjectElement.setAttribute('rowspan', periodArray.length)
            
            subjectElement.innerHTML += ReactDOMServer.renderToString(<Subject groupSubjects={array} setGroupSubjects={setArray} color={color} value={value} isDelete={boolean} />)

            if(boolean) {

                const ele = document.getElementById(`${value._id}`)
                ele.onclick = (e) => {
                    handleDeleteSubject(value, array, setArray, setDeleteArr)
                }
            }
        }

        const removePeriod = periodArray.slice(1)
        removePeriod.map((val) => {
            const elementExists = document.getElementById(`${val}-${value.day}`)
            if(elementExists) {
                elementExists.remove()
            }

        })
    })
    if(deleteArr.length > 0) {
        deleteArr?.map((value) => {        
            // let periods = value.period.replace(/[-]/g, '')
            let periods = value.period
    
            const periodArray = []
            let j = 1
            for(let i = 0; i < periods.length; i++) {
                if(periods[i] != '-') {
                    periodArray.push(j)
                }
                j++
            }
    
            const periodStart = periodArray[0]
            const valueId = `${periodStart}-${value.day}`
            let subjectElement = document.getElementById(valueId)

            // if(subjectElement == null) {
            //     console.log(valueId);
            // }
            if(subjectElement) {
    
                subjectElement.setAttribute('rowspan', periodArray.length)
                
                subjectElement.innerHTML += ReactDOMServer.renderToString(<DeletedSubject groupSubjects={array} setGroupSubjects={setArray} color={color} value={value} isRestore={boolean} />)
    
                if(boolean) {    
                    const ele = document.getElementById(`${value._id}`)
                    ele.onclick = (e) => {
                        setArray((prev) => [...prev, value])
                        setDeleteArr(deleteArr.filter((val) => val != value))
                    }
                }
            }
    
            const removePeriod = periodArray.slice(1)
            removePeriod.map((val) => {
                const elementExists = document.getElementById(`${val}-${value.day}`)
                if(elementExists) {
                    elementExists.remove()
                }

            })
        })
    }
}

export const handleTableModalTimeTable = (array) => {
    
    const tableElement = document.getElementById("myModalTimetable")
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']

    if(tableElement) {
        for (let i in tableElement.rows) {
            let row = tableElement.rows[i]
            let arr = ['0','1']
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0' && j !=='0') {

                        col.setAttribute('rowspan', 1)
                        col.innerHTML = ""
                            
                    }
                    if(col.id) {
                      arr.push(col.id[col.id.length - 1])
                    }
                }
            }
            if(arr.length > 2) {
                var k = 0
                var checkDay = []
                // var c = ""
                for(let v = 0; v < dayArr.length; v++)
                {
                    if(dayArr[v] == arr[k])
                    {
                        checkDay.push(false);
                        k++;
                    }
                    else
                    checkDay.push(true);
                }
                
                for(let v = 0; v < checkDay.length; v++) {
                    if(checkDay[v]) {
                        const roww = tableElement.rows[i]
                        roww.insertCell(v-1).setAttribute('class', 'border-l p-2 border-gray-400')
                        const cell = roww.cells[v-1]
                        if(cell) {
                            cell.setAttribute('id', `${i}-${v}`)
                            
                        }
                    }
                }
            }
            
         }
    }
    
    if(array?.length > 0) {
        array?.map((value) => {        
            let periods = value.period

            const periodArray = []
            let j = 1
            for(let i = 0; i < periods.length; i++) {
                if(periods[i] != '-') {
                    periodArray.push(j)
                }
                j++
            }
                
                const periodStart = periodArray[0]
        
                const amPeriod = [1,2,3,4,5,6]
            // const pmPeriod = ['7', '8', '9', '10', '11', '12']
    
            let valueId
            if(amPeriod.includes(periodStart)) {
    
                valueId = `md1-${value.day}`
            }
            else {
                valueId = `md2-${value.day}`
            }
    
            let subjectElement = document.getElementById(valueId)

            if(subjectElement == null) {                
                return false
            }
            if(subjectElement) {
                subjectElement.innerHTML += ReactDOMServer.renderToString(<SubjectTimeTable value={value} />)
                // subjectElement.innerHTML += <div>hihihihi</div>
                return true

            }
        })
    }

}
