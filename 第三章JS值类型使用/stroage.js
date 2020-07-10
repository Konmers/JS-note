const Storage = {}

Storage.get = function (name) {
  return JSON.parse(localStorage.getItem(name))
}

Storage.set = function (name, val) {
  localStorage.setItem(name, JSON.stringify(val))
}

Storage.add = function (name, addVal) {
  const oldVal = Storage.get(name)
  const newVal = oldVal.concat(addVal)
  Storage.set(name, newVal)
}

Storage.delete = function (name) {
  localStorage.removeItem(name)
}

export default Storage
