var commentApp = new Vue({
  el: '#commentrecord',
  data: {
    cmList: [{
      commentText:'',
      commentID:''
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
    },

    newCMData() {
      return {
        commentText: "",
        commentID:""
      }
    },
  create() {
    this.fetchComment();
  }
    //.then( response => response.json() )
    //.then( json => {
      //this.cmList = json;

      //console.log(json)}
    //);
    //this.cm = this.newCMData();
  //}
},
})
