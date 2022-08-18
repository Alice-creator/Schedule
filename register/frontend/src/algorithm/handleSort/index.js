
export const handleSort = (array, setSorted) => {
    //Copy tkb bảo toàn data gốc
    let copySJ = JSON.parse(JSON.stringify(array));
    //Tổng số môn học
    let SJTotal = array.length;

    //mảng lưu tkb trong lúc quay lui
    let schedules = [];

    //mảng lưu tkb chính thức
    let finalSchedule = []

    //mảng đánh dấu vị trí
    let place = [];
    for(let i = 0; i < 35000; i++)
        place[i] = true;

    let fakeLT = {
        "_id": "",
        "sub-group": "",
        "day": "2",
        "week": "-------------------------------",
        "period": "----------------",
    }

    function setIndex(list)
    {
        for(let i = 0; i < list.length; i++)
        {
            list[i].indexGr = i + 1
        }
    }

    function Arrange(list)
    {
        let Group = []
        let RS = []
        for(let i = 0; i < 100; i++)
        {
            Group.push([])
        }

        for(let i = 0; i < list.length; i++)
        {
            if(list[i]["sub-group"] == "")
            {
                Group[parseInt(list[i]["group"])].splice(0, 0, list[i])
            }
            else
                {

                    Group[parseInt(list[i]["group"])].push(list[i])
                }
        }
        for(let i = 0; i < 100; i++)
        {
            RS = RS.concat(Group[i])
        }
        return RS
    }

    function THLT(list)
    { 
        if(list.length >= 2)
        {
            let tempLT;
            for(let i = 0; i < list.length - 1; i++)
            {
                if(list[i]["sub-group"] !== "")
                {
                    list[i]["lt"] = tempLT;
                }
                else if(list[i + 1]["sub-group"] !== "")
                {
                    tempLT = list[i];
                    list.splice(i, 1);
                    i--;
                }
                else
                {
                    list[i]["lt"] = fakeLT;
                }
            }
            if(list[list.length - 1]["sub-group"] !== "")
                list[list.length - 1]["lt"] = tempLT;
            else
                list[list.length - 1]["lt"] = fakeLT;
        }
        else if(list.length == 1)
        {
            list[0]["lt"] = fakeLT;
        }
    }

    function getWeek(mon_hoc)
    {
        return mon_hoc["week"];
    }

    function getPeriod(mon_hoc)
    {
        return mon_hoc["period"];
    }

    function encodeIndex(week, day, lesson)
    {
        week = String(week - 2);
        day = String(parseInt(day) - 2);
        lesson = String(lesson - 1);

        return parseInt(week + day + lesson);
    }

    function exportSchedule(list)
    {
        let RS = []
        for(let i = 0; i <list.length; i++)
            RS = RS.concat(list[i])
        return RS
    }

    function trace(gr, state, wcount, pcount)
    {
        let week = getWeek(gr);
        let period = getPeriod(gr);

        if(state == 0)
        {
            for(let i = 0; i < week.length; i++)
            {
                if(week[i] !== "-")
                {
                    for(let j = 0; j < period.length; j++)
                    {
                        if(period[j] !== "-")
                        {

                            if(place[encodeIndex(wcount, gr["day"], pcount)] == true)
                            {
                                place[encodeIndex(wcount, gr["day"], pcount)] = false;
                            }
                            else
                            {
                                trace(gr, 1, --wcount, --pcount);
                                return 1;
                            }
                        }
                        pcount++;
                    }
                }
                pcount = 1; 
                wcount++;       
            }   
        }
        else
        {
            for(let i = wcount - 2; i >= 0; i--)
            {
                if(week[i] !== "-")
                {
                    for(let j = pcount - 1; j >= 0; j--)
                    {
                        if(period[j] !== "-")
                        {
                            place[encodeIndex(i + 2, gr["day"], j + 1)] = true;
                        }
                    }
                }     
            }  
        }
        return 0;
    }

    function decodeGr(list)
    {
        let preLT = fakeLT;
        let newGr = [];
        for(let i = 0; i < list.length; i++)
        {
            if(JSON.stringify(list[i]["lt"]) !== JSON.stringify(fakeLT) && JSON.stringify(list[i]["lt"]) !== JSON.stringify(preLT))
            {
                newGr.push(list[i]["lt"]);
                preLT = list[i]["lt"];
            }  
            delete list[i]["lt"];
            newGr.push(list[i]);
        }
        return newGr;
    }

    function Sort(i)
    {
        for(let j = 0; j < copySJ[i].length; j++)
        {
            if(trace(copySJ[i][j]["lt"], 0, 2, 1) == 0)
            { 
                if(trace(copySJ[i][j], 0, 2, 1) == 0)
                {
                    let temp = JSON.parse(JSON.stringify(copySJ[i][j]))
                    schedules.push(decodeGr([temp]))
                    if(i < SJTotal - 1)
                    {
                        Sort(i + 1);
                    }
                    else
                    {
                        finalSchedule.push(exportSchedule(schedules))
                        setSorted(finalSchedule)
                    }
                    trace(copySJ[i][j], 1, 32, 16);
                    trace(copySJ[i][j]["lt"], 1, 32, 16);
                    schedules.pop();
                }
                else
                    trace(copySJ[i][j]["lt"], 1, 32, 16);
            }
        }
    }

    for(let i = 0; i < copySJ.length; i++)
    {
        copySJ[i] = Arrange(copySJ[i])
        setIndex(copySJ[i], i)
        THLT(copySJ[i])
    }

    Sort(0);
}