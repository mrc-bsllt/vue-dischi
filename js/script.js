var app = new Vue (
  {
    el: "#wrapper",
    data: {
      discs: [],
      genres: []
    }, //fine data
    methods: {
      saluta: function() {
        console.log("ciao");
      }

    }, //fine methods
    mounted: function() {
      const self = this;
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (result) {
          self.discs = result.data.response;
          result.data.response.forEach(
            (element) => {
              if (!self.genres.includes(element.genre))
              // console.log(element.genre);
              self.genres.push(element.genre);
            }
          );
        }
        );
    } //fine mounted
  }
);
