var app = new Vue (
  {
    el: "#wrapper",
    data: {
      discs: []
    }, //fine data
    methods: {

    }, //fine methods
    mounted: function() {
      const self = this;
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(function (result) {
          self.discs = result.data.response;
          console.log(self.discs);
        }
        );
    } //fine mounted
  }
);
