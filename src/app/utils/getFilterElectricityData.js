function filterArr(data) {
  try {
    let newArr = [];
    for (let i in data) {
      newArr.push(data[i]);
    }
    return newArr;
  } catch (error) {
    console.log(error);
  }
}

export { filterArr };
