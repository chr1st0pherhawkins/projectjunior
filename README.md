## CHRIS CAROUSEL - JQUERY 

HI ALL!!!

jquery.chris_carousel.js Is a carousel that uses a very basic concept to create a functional carousel that allows you to determine the length of time a picture is on the screen, and the time it takes to transition between pictures.

The folder arrangement is as follows

            your-project-folder/
            	dest/
            	     index.html
            	     js/
                        jquery.chris_carousel.js
                        script.min.js
                src/
                    js/ 
                       jquery.chris_carousel.js

Your src/js folder has everything you need to get started using my carousel.

It works by using a div called "my_carousel" and using a basic unordered list. Add the images to the list items.

             <!-- <div id="my_carousel">
                <ul class="slider">
                	<li class="picture_slide"><img src="images/Fish.jpg" alt="Fish"></li>
                	<li class="picture_slide"><img src="images/elephant.jpg" alt="Elephant"></li>
                	<li class="picture_slide"><img src="images/giraffe.jpg" alt="Penguins"></li>
                </ul>
               </div>-->

I have given then ul a class of "slider" and the 'li' a class of "picture_slide". The jquery.chris_carousel.js plugin uses these classes to assist with the animation of the carousel.

## What is going on in the jquery.chris.carousel?

Within the plugin there are default configuration options that determine the 'default' rotation speed ('rotationSpeed') and the time the image stays on the screen ('screenTime')

Please see below:

            var pluginName = "chrisCarousel",
                defaults = {
                    rotationSpeed: 1000,
                    screenTime: 1000
                };

As you can see the default time for both configuration options is '1000' which is the equivalent of a second.


## The Code:

Below is the jquery code that creates the carousel functionality.

            var y = $(window).width();
        
            var t = setInterval(function () {
                $("#my_carousel ul").animate({marginLeft: - y }, defaults.rotationSpeed, function () {
                    $(this).find(".picture_slide:last").after($(this).find(".picture_slide:first"));
                    $(this).css({marginLeft: 0});
                })
            }, defaults.screenTime);
            $(".picture_slide").css("width", y);
            $(".slider").css("width", y * 3);		
        }
    } );


The images (li) aswell as well as the carousel slider (ul) have a width based on the width of the window screen 'y'.
As a default the carousel is designed to take 3 images, which means each li is the width of the screen and the ul is the width of the screen * 3.

The carousels animation of moving a picture to the left also works off the variable which determines the length of the screen. 
The first li is shifted to the right and then placed behind the last li. This  gives us the 'infinite' style carousel that keeps on rotating.

## How to get this code into your html?

By using a task runner such as Grunt or Gulp you can concat and uglify this plugin to add to your src folder.

## So What do you need to do?

Once you have created the un ordered list you need to implement this plugin into your own HTML. You can do this by adding script tags within the html doc itself or by creating a 'new' file. 

Please see plugin implementaion code below:

               <script> 
                $( function() {
                	$( "#my_carousel").chrisCarousel({
                		rotationSpeed:2000,
                		screenTime:5000
                	});
                } );
                </script>

As you can see this uses the class of the div that wraps the un ordered list which I have called 'my_carousel' and binds the plugin function onto it. 

As you can see I have added some configuration options. These example config options give each image a screen time of 5 seconds, and a rotation speed of 2 seconds. 

This plugin is constantly in development and will constantly be updated as the months progress.

Please try this out and let me know what you think!

Thanks

Chris



