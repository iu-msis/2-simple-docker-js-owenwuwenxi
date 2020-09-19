var app = new Vue ({
  el: '#usefprofile',
  data: {
    userName: '',
    userEmail:'',
    userImageLarge:'',
    userImageThumb:''
  },

  created(){
    this.fetchUser();
  },

  methods:{
    fetchUser: function(){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImageLarge = userData.picture.large;
        this.userImageThumb = userData.picture.thumbnail;
        console.log('user country' + userData.location.country);
      });
    }
  }
})
