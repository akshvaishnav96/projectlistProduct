function filterData(data, id, name) {

    console.log("hello");
    let filterData = data.filter((item) => {
        if (item[name] === id) {
            return item.id;
        }
    });
    let ids = filterData.map((item) => {
        return {
            id: item.id,
        };
    });

    return ids
}




export { filterData } 