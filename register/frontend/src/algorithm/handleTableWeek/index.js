import ReactDOMServer from "react-dom/server";
import { constants } from "../../constants";
import Activity from "../../pages/ScheduleWeek/CalendarWeek/Activity";
import SubjectWeek from "../../pages/ScheduleWeek/CalendarWeek/SubjectWeek";
export const handleTableWeek = (array, setArray, activity, setActivity) => {

    const tableElement = document.getElementById("myTableWeek")
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
            let periods = value.period.replace(/[-]/g, '')
            const filterCa4 = periods.includes(constants.CA4)
            const periodArray = []
            if(filterCa4) {
                for(var i = 0; i < periods.length; i++) {
                    if(periods[i] == '0') {
                        periodArray.push('10')
                    }
                    else if(periods[i] == '1') {
                        periodArray.push('11')
                    }
                    else if(periods[i] == '2') {
                        periodArray.push('12')
                    }
                    else {
                        periodArray.push(periods[i])
                    }
                }
            } else {
                for(var i = 0; i < periods.length; i++) {
                    periodArray.push(periods[i])
                }
            }
            
            const periodStart = periodArray[0]
    
            const amPeriod = ['1','2','3','4', '5', '6']
            // const pmPeriod = ['7', '8', '9', '10', '11', '12']
    
            let valueId
            if(amPeriod.includes(periodStart)) {
    
                valueId = `am-${value.day}`
            }
            else {
                valueId = `pm-${value.day}`
            }
    
            let subjectElement = document.getElementById(valueId)
            
            // if(subjectElement == null) {
            //     console.log(valueId);
            // }
            if(subjectElement) {
                subjectElement.innerHTML += ReactDOMServer.renderToString(<SubjectWeek value={value} />)
            }
        })
    }

    if(activity?.length > 0) {
        activity?.map((value) => {  
            const time = value.start.split(":")
            
            const hour = time[0]
    
            const amPeriod = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
            
            const days = ['8', '2', '3', '4', '5', '6', '7']
            const date = new Date(value.date)
            const day = days[date.getDay()]

            let valueId
            if(amPeriod.includes(hour)) {
    
                valueId = `am-${day}`
            }
            else {
                valueId = `pm-${day}`
            }
    
            let subjectElement = document.getElementById(valueId)
            
            // if(subjectElement == null) {
            //     console.log(valueId);
            // }
            if(subjectElement) {
                subjectElement.innerHTML += ReactDOMServer.renderToString(<Activity value={value} />)
            }
        })
    }
}