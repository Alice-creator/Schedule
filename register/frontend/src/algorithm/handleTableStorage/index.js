
export const handleTableStorage = (array, index) => {
    let radom = Math.floor(Math.random() * 6) + 1
    let color = { number : radom}
    const tableElement = document.getElementsByClassName(`table-storage-${index}`)
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']
    
    if(tableElement[0]) {
        for (let i in tableElement[0].rows) {
            let row = tableElement[0].rows[i]
            let arr = ['0','1']
            
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0') {

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
                     valueId = `st1-${value.day}`
                 }
                 else {
                     valueId = `st2-${value.day}`
                 }
         
                 let subjectElement = document.querySelectorAll(`.table-storage-${index} tbody tr .${valueId}`)
                
                //  if(subjectElement == null) {
                //      console.log(valueId);
                //  }
                 if(subjectElement[0]) {
                     subjectElement[0].innerHTML +=  "<div class='subject__container w-12 h-16 relative py-3 px-1 my-1 overflow-hidden rounded-xl text-center bg-gray-300'></div>"

                    
                 }
             })
         }
    }
}


export const handleTableRecent= (array, index) => {
    
    const tableElement = document.getElementsByClassName(`table-storage-${index}`)
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']
    if(tableElement[0]) {
        for (let i in tableElement[0].rows) {
            let row = tableElement[0].rows[i]
            let arr = ['0','1']
            
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0') {

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
                     valueId = `st1-${value.day}`
                 }
                 else {
                     valueId = `st2-${value.day}`
                 }
         
                 let subjectElement = document.querySelectorAll(`.table-storage-${index} tbody tr .${valueId}`)
                
                //  if(subjectElement == null) {
                //      console.log(valueId);
                //  }
                 if(subjectElement[0]) {
                     subjectElement[0].innerHTML +=  "<div class='subject__container w-6 h-8 relative py-3 px-1 my-1 overflow-hidden rounded-md text-center bg-gray-300'></div>"

                    
                 }
             })
         }
    }
}


