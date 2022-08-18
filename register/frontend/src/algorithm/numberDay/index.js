export const numberDay = (day) =>
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