class ItemService {

  constructor() {
    this.items = [
      {link:1, name:"Children on Nuclear Plant", summary:"Family show", description:"Desc 1", lastSeason: 1, episodes: [{episode: "s1e1", description: "The Fun", viewed:true}, {episode: "s1e2", description: "The Explosion", viewed:false}]},
      {link:2, name:"Test", summary:"Here should be summary", description:"Test Description", lastSeason: 1, episodes: [{episode: "s1e1", description: "First Test", viewed:false}]},
      {link:3, name:"Animals", summary:"Funny animals", description:"Really funny animals", lastSeason: 1, episodes: [{episode: "s1e1", description: "Cats", viewed:true}, {episode: "s1e2", description: "Dogs", viewed:true}, {episode: "s1e3", description: "Humans", viewed:false}]},
    ];
  }

  async retrieveItems(token) {
      return Promise.resolve(this.items);
  }

  async getItem(itemLink, token) {
    for(var i = 0; i < this.items.length; i++) {
      if ( this.items[i].link === itemLink) {
        return Promise.resolve(this.items[i]);
      }
    }
    return null;
  }

  async createItem(item, token) {
    console.log("ItemService.createItem():");
    console.log(item);
	this.items.push(item);
    return Promise.resolve(item);
  }

  async deleteItem(itemLink, token) {
    console.log("ItemService.deleteItem():");
    console.log("item ID:" + itemLink);
    for(var i = 0; i < this.items.length; i++) {
      if ( this.items[i].link === itemLink) {
		this.items.splice(i, 1); 
        return Promise.resolve();
	  }
	}
  }

  async updateItem(item, token) {
    console.log("ItemService.updateItem():");
    console.log(item);
  }

}

export default ItemService;
