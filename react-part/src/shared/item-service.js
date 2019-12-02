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
    return fetch(this.config.ITEM_DELETE_URL + token, {
		//to make easier debugging, HTTP method changed to POST
		//on production  
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
    return fetch(this.config.ITEM_UPDATE_URL + token, {
		//to make easier debugging, HTTP method changed to POST
		//on production  

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
