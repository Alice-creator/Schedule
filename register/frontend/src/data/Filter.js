export const getListOptions = (arrays) => {
    const options = []
    arrays?.map((data, index) => {
        options[index] = {
            value: data.name,
            label: data.name
        }
    })
    return options
}