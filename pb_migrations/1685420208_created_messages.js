migrate((db) => {
  const collection = new Collection({
    "id": "nc2gmp7fpuca1uf",
    "created": "2023-05-30 04:16:48.980Z",
    "updated": "2023-05-30 04:16:48.980Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8onzmnyg",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nwofvyui",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nc2gmp7fpuca1uf");

  return dao.deleteCollection(collection);
})
