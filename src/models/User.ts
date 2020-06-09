import m, { request } from "mithril";

let User: any = {
  list: [],
  //TO LOAD LIST OF USERS IN THE LIST []
  loadList: async () => {
    //TODO: make request to api to load data in list
    let result: any = await m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users",
      withCredentials: true,
    });
    User.list = result.data;
  }, //loadlist end
  current: {},
  load: async (id: any) => {
    let result: any = await m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
      withCredentials: true,
    });
    User.current = result;
  }, //Load ends, it loads data about a single user
  save: () => {
    m.request({
      method: "PUT",
      url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
      body: User.current,
      withCredentials: true,
    });
  },
};

export default User;
