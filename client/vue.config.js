

module.exports= {
  transpileDependencies:["vuetify"],
  devServer:{

    proxy:{
      '/api':{
        // target:"http://localhost:4000",
        taret:"https://thawing-earth-15324.herokuapp.com/",
    },
  
},
  }
};