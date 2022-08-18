export const handleScheduleWeek = (array) => {
    let TKBT = [];
    for(let i = 0; i < 33; i++)
        TKBT.push([]);

    function getWeek(mon_hoc)
    {
        return mon_hoc["week"];
    }

    function weekS()
    {
        for(let j = 0; j < array.length; j++)
        {

            let temp = getWeek(array[j]);
            for(let i = 0; i < temp.length; i++)
            {
                if(temp[i] !== "-")
                    TKBT[i].push(array[j]);
            }
            
        }
    }

    weekS();
    return TKBT
}