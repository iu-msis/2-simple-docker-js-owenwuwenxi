var commentApp = new Vue({
  el: '#commentRecord',
  data: {
    cmList: [{
      commentText:'',
      commentD:''
    }],

    newComment: {
      commentText:'',
      commentID:''
    },
  },

  methods: {

    fetchComment(){
      fetch('api/comments/')
      .then( response => response.json() )
      .then( json => {
        this.cmList = json;
        console.log(this.cmList);
      });
    },

    createComment(){
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
      // TODO: Validate the data!
      //this.newComment.commentID
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.cmList.push(json[0]);
        this.newComment = this.newCMData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);

      fetch('api/comments/')
      .then( response => response.json() )
      .then( json => {
        this.cmList = json;
        console.log(this.cmList);
      });
    },

    newCMData() {
      return {
        commentText:"",
        commentID:""
      }
    }
  },
  created() {
    this.fetchComment();
  }
    //.then( response => response.json() )
    //.then( json => {
      //this.cmList = json;

      //console.log(json)}
    //);
    //this.cm = this.newCMData();
  //}
})
