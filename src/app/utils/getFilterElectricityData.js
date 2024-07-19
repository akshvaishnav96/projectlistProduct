function filterArr(data) {



    let newArr = []

    for (let i in data) {
        newArr.push(data[i])
    }


    return newArr

}

export { filterArr }