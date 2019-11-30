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
        /*for(var i = 0; i < itemArray.length; i++) {
          itemArray[i]["link"] =  itemArray[i]._links.self.href;
          items.push(itemArray[i]);
        }*/
        return json.items;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getItem(itemLink, token) {
    console.log("ItemService.getItem():");
    console.log("Item: " + itemLink);
    return fetch(this.config.ITEM_GET_URL + token)
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(item => {
          item["link"] = item._links.self.href;
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
      mode: "cors",
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

  async deleteItem(itemlink, token) {
    console.log("ItemService.deleteItem():");
    console.log("item: " + itemlink);
    return fetch(this.config.ITEM_DELETE_URL + token, {
      method: "DELETE",
      mode: "cors",
	  body: JSON.stringify(itemlink)
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
		method: "PUT",
		mode: "cors",
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
