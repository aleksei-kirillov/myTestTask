import Configuration from './configuration';

class ItemService {

  constructor() {
    this.config = new Configuration();
  }

  async retrieveItems(token) {
    return fetch(this.config.ITEM_COLLECTION_URL + token)
	.then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved items:");
        console.log(json);
        for(var i = 0; i < json.items.length; i++) {
          if(json.items[i].episodes === null || json.items[i].episodes === undefined)
			  json.items[i].episodes = [];
        }
        return json.items;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getItem(itemId, token) {
    console.log("ItemService.getItem():");
    console.log("Item: " + itemId);
    return fetch(this.config.ITEM_GET_URL + token)
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(item => {
          if(item.episodes === null || item.episodes === undefined)
			  item.episodes = [];
          return item;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createItem(newitem, token) {
    console.log("ItemService.createItem():");
    console.log(newitem);
    return fetch(this.config.ITEM_CREATE_URL + token, {
      method: "POST",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(newitem)
    })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async deleteItem(itemId, token) {
    console.log("ItemService.deleteItem():");
    console.log("itemId: " + itemId);
    return fetch(this.config.ITEM_DELETE_URL + token, {
		//method: "DELETE"
      method: "POST",
      headers: {"Content-Type": "application/json"},
	  body: JSON.stringify({id:itemId})
    })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async updateItem(item, token) {
    console.log("ItemService.updateItem():");
    console.log(item);
    return fetch(this.config.ITEM_UPDATE_URL + token, {
		//method: "PUT"
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(item)
	})
    .then(response => {
        if (!response.ok) 
          this.handleResponseError(response);
		return response.json();
    })
    .catch(error => {
        this.handleError(error);
    });
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
      console.log(error.message);
  }

}

export default ItemService;
