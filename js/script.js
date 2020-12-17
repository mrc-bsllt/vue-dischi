// {
//   "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//   "title": "New Jersey",
//   "author": "Bon Jovi",
//   "genre": "Rock",
//   "year": "1988",
//   "visible": true
// },

var app = new Vue (
  {
    el: "#wrapper",
    data: {
      discs: [],
      genres: [],
      selectValue: ""
    }, //fine data
    methods: {
      saluta: function() {
        console.log(this.selectValue);
      }

    }, //fine methods
    mounted: function() {

      const self = this;

      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (result) {
          self.discs = result.data.response;

          self.discs.forEach(
            (element) => {
              element.visible = true;
            }
          );

          result.data.response.forEach(
            (element) => {
              if (!self.genres.includes(element.genre))
              // console.log(element.genre);
              self.genres.push(element.genre);
            }
          );
          console.log(self.discs);

        }
        );
    } //fine mounted
  }
);
