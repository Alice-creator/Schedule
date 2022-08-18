// root day 1/1/2021 
function createRootGroup(list)
{
    let rootGr = {}
    for(let i = 0; i < list.length; i++)
    {
        if(list[i].length > 0)
            {
                rootGr["start"] = list[i][0]["start"]
                rootGr["day"] = parseInt(list[i][0]["day"])
                rootGr["week"] = i
                return rootGr
            }
    }
}

function numberDay(day)
{
    let DMY = day.split('/')

    let numDay = parseInt(DMY[0]) - 1
    for(let i = 1; i < parseInt(DMY[1]); i++)
    {
        if(i == 1 || i == 3 || i == 7
            || i == 8 || i == 10)
            numDay += 31
        else if(i == 2)
        {
            if(DMY[2] % 4 == 0)
                numDay += 29
            else
                numDay += 28
        }
        else
            numDay += 30
    }
    numDay += (DMY[2] - 2021) % 4 == 0 ?  365 * (DMY[2] - 2021) + (DMY[2] - 2021) % 4 : 365 * (DMY[2] - 2021)
    return numDay
}

function rootDay(Group)
{
    let numDay = numberDay(Group["start"])
    return numDay - (Group["day"] - 2) - 7*Group["week"]
}

function weekOnDay(list, requestedDay, rootNumDay)
{
    return list[Math.floor((requestedDay - rootNumDay) / 7)]
}

let requestedDay = numberDay("1/4/2022")
let rootNumDay = rootDay(createRootGroup(weekSchedule))
