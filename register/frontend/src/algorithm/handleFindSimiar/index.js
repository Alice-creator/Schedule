const hashCode = (schedule) =>
{
    let hash = new Array(schedule.length).fill(0)
    for(let i = 0; i < schedule.length; i++)
        hash[i] = schedule[i].indexGr

    return hash
}

const binaryString = (hash) =>
{
    let biS = ''
    for(let i of hash)
    {
        if(i != 0)
            biS += "0"
        else
            biS += "1"
    }
    return biS
}

export const  mostSuitableSchedule = (schedules, chosenSchedule, deleteSJ) =>
{
    let suitabeSchedule = new Array()
    let sLength = schedules[0].length
    let sample = hashCode(chosenSchedule)
    let sampleB = JSON.parse(JSON.stringify(sample))
    for(let i of deleteSJ)
    {
        for(let j in chosenSchedule)
        if(i._id == chosenSchedule[j]._id)
        {
            sampleB[j] = 0
            break
        }
    }

    let sampleBString = binaryString(binaryString(sampleB))
    for(let i of schedules)
    {
        let candidate = hashCode(i)
        for(let j = 0; j < sLength; j++)
            candidate[j] -= sample[j]
        let candidateString = binaryString(candidate)
        for(let j in sampleBString)
        {
            if(sampleBString[j] == 1 && candidateString[j] != 1)
                break
            else if(j == sampleBString.length - 1)
                suitabeSchedule.push(i)
        }
    }

    return suitabeSchedule
}

// console.log(mostSuitableSchedule(TKB, rootTKB, deletedSJ))
