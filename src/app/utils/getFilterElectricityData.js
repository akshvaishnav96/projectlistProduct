export default function (data) {



    let newArr = []

    for (let i in data) {
        newArr.push(data[i])
    }


    return newArr

}