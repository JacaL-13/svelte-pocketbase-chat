migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nc2gmp7fpuca1uf")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nc2gmp7fpuca1uf")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
