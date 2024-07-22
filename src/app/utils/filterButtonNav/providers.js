function filterData(data, id, name) {
  try {
    // extrect the electricity matching data
    let filterData = data.filter((item) => {
      if (item[name] === id) {
        return item.id;
      }
    });

    // get the ids of the data
    let ids = filterData.map((item) => {
      return {
        id: item.id,
      };
    });

    // return the ids so we can change the state of electricityId according to filterData
    return ids;
  } catch (error) {
    console.log(error);
  }
}

export { filterData };
