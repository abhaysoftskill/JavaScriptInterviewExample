var uniq = {}
var arr  = [{"id":"1"},{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"7"},{"id":"2"},{"id":"6"}]


var arrFiltered = arr.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
console.log('arrFiltered', arrFiltered)


function removeDuplicateObjects(array) {
    return [...new Set(array.map(s => JSON.stringify(s)))]
      .map(s => JSON.parse(s));
  }
  removeDuplicateObjects([{"id":"1"},{"id":"1"},{"id":"2"},{"id":"3"},{"id":"4"},{"id":"7"},{"id":"2"},{"id":"6"}])

