$(document).ready(function(){
      $('.parallax').parallax();
    });
    
$(function () {  
    var APPLICATION_ID = "A6F6DD55-04BA-F79D-FFFB-292EAE2AD200",
        SECRET_KEY = "9F7830D5-5DC2-183D-FF60-DC026ED65500",
        VERSION = "v1";
        
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
   var postsCollection = Backendless.Persistence.of(Posts).find();
   
   console.log(postsCollection);
   
   var wrapper = {
       posts: postsCollection.data
   };
   
   Handlebars.registerHelper('format', function (time) {
       return moment(time).format("dddd, MMMM Do YYYY");
   });
   
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
});

function Posts(args){
    args =  args || {};
    this.title= args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
} 