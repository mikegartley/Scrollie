(function () {
    'use strict';
        function getContent(callback) {   
            var revObj = new XMLHttpRequest();

            revObj.overrideMimeType("application/json");
            revObj.open('GET', 'https://trends.revcontent.com/api/v1/?api_key=3eeb00d786e9a77bbd630595ae0be7e9aa7aff3b&pub_id=945&widget_id=6181&domain=apiexamples.powr.com&sponsored_count=6&sponsored_offset=0&internal_count=0', true); // Replace 'my_data' with the path to your file
            revObj.onreadystatechange = function () {
                if (revObj.readyState == 4 && revObj.status == "200") {
                    callback(revObj.responseText);
                }
                else{
                    // error control. email error response
                }
            };
            revObj.send();  
        }
        
        function addStyle() {
        var head = document.head,
            link = document.createElement('link')
                link.type = 'text/css'
                link.rel = 'stylesheet'
                link.href = 'http://www.mikegartley.com/widget-demo/css/featAd.css'

        head.appendChild(link)
        }



        function init() {
            getContent(function(response) {
            var data = JSON.parse(response);
            var ran_key = data[Math.floor(Math.random() * data.length)];

            var div = document.createElement('div');
                div.setAttribute('class', 'featured-banner');
                var imgSrc = ran_key.image;
                imgSrc = imgSrc.replace("h=315", "h=120");
                imgSrc = imgSrc.replace("w=420", "w=370");
                div.innerHTML = '<a href="' + ran_key.url + '" target="_blank"><div class="img-holder"><img alt="" src="' + imgSrc + '" class="img-responsive"><p class="brand">' + ran_key.brand + '</p></div><div class="content"><p class="ad-headline">' + ran_key.headline + '</p></div><span class="sponsored">Sponsored</span></a>';
                document.body.insertBefore(div, document.body.firstChild);
         });
        }

 
        window.addEventListener("load", function(){
            addStyle();
            init();
        }, false);




}());
