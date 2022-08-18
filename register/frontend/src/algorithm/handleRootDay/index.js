import { numberDay } from "../numberDay"

export const rootDay = (Group) =>
{
    let numDay = numberDay(Group["start"])
    return numDay - (Group["day"] - 2) - 7*Group["week"]
}

export const createRootGroup = (list) =>
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
