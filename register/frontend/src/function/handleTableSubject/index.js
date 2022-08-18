import ReactDOMServer from "react-dom/server";
import { constants } from "../../constants";
import Subject from "../../pages/Schedules/Subject";
export const handleTableSubject = (array, setArray) => {
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
        const valueId = `${periodStart}-${value.day}`
        const subjectElement = document.getElementById(valueId)
      
        if(subjectElement) {
            subjectElement.setAttribute('rowspan', periods.length)
            
            subjectElement.innerHTML += ReactDOMServer.renderToString(<Subject groupSubjects={array} setGroupSubjects={setArray} value={value} isDelete />)
            // console.log(ReactDOMServer.renderToString(<Subject groupSubjects={groupSubjects} setGroupSubjects={setGroupSubjects} color={color} value={value} isDelete />))
            const ele = document.getElementById(`${value._id}`)
            console.log(ele)
            ele.onclick = (e) => {
                console.log(e)
                const arr = array.filter((e) => 
                value["sub-group"].length > 0 && e.group === value.group 
                    ? e["sub-group"] !== value["sub-group"] && e.title === value.title && e.group === value.group
                    : e.group !== value.group && e.title === value.title        
                )
                setArray(arr)
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