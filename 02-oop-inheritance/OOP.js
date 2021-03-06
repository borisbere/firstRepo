$(document).ready(function(){ 

            var social = {share : function(friendName){console.log("Sharing "+this.title+" with "+friendName)}
                }
            var like = {likes : function(friendName){console.log(friendName+" likes "+this.title)}}     
            //Create the mixins.
           
            function movie(){
                    this.play= function(){console.log("Now playing: "+this.title)};
                    this.stop= function(){console.log(this.title+" has stopped")}
                    this.set = function(attr,value){this[attr]=value};
                    this.get = function(attr){return this[attr]};
                    this.share = social.share;
                    this.like = like.likes;
                    this.arrayActors = arrActors;  
                } //this function creates the class movie and its methods.

            function actor(){
                    this.name;
                    this.age;
                    this.birthday;
                    this.set = function(name,age,birthday){this.name=name;this.age=age;this.birthday=birthday};
            }; 
            var marlon = new actor();
            marlon.set("Marlon Brando", 40,"21/08/1975"); 
            var angelina = new actor();
            angelina.set("Angelina Jolie",42,"10/06/1973");
            var arrActors =[marlon,angelina]
            //Create the class actor and some actor objects.

            var movieObserver= document;
            var term = new movie();    
            term.set("title","Terminator");
            term.share("VICTORIA M.");
            term.like("MARCELO S.");
            //instantiate a movie object and use the mixins

            var playEvent= new Event("playing");   
            var stopEvent= new Event("stopped");
            //create the events "Playing" and "Stopped"

            movieObserver.addEventListener("playing",function(){$("h1").text("Playing Movie");console.log("Playing");},false);
            movieObserver.addEventListener("stopped",function(){$("h1").text("The movie has stopped");console.log("Stopped")},false);
            //add some listeners for these events.

            $("#playbut").click(function(){
               movieObserver.dispatchEvent(playEvent);
             });
             $("#stopbut").click(function(){
               movieObserver.dispatchEvent(stopEvent);
             });
             //dispatch the events when user clicks a button

             function downloadableMovie(){movie.call(this)};
             downloadableMovie.prototype = new movie(); 
             //difine a class that extends from movie.

             var dwnrocky = new downloadableMovie(); 
             dwnrocky.set("title","Rocky V");
             dwnrocky.play();
             //instantiate a downloadable movie



        }); 
