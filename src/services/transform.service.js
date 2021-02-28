class TransformService {
  static fbObjectToArray(fbData = {}) {
    if (fbData) {
      return  Object.keys(fbData).map(key => {
        const item = fbData[key]
        item.id = key

        return item
      })
    }
  }
}

export {
  TransformService
}