(function () {
    'use strict';
        var widgetData = document.getElementById('scrollie');
        
        function getContent(callback) {  
            var api_key = widgetData.getAttribute('itemid'),
                pub_id = widgetData.getAttribute('itemprop'),
                widget_id = widgetData.getAttribute('itemtype');
            
            var oScrollie = new XMLHttpRequest();
                oScrollie.overrideMimeType("application/json");

                
                oScrollie.open('GET', 'https://trends.revcontent.com/api/v1/?api_key='+api_key+'&pub_id='+pub_id+'&widget_id='+widget_id+'&domain=apiexamples.powr.com&sponsored_count=6&sponsored_offset=0&internal_count=0', true); // Replace 'my_data' with the path to your file
                oScrollie.onreadystatechange = function () {
                
                if (oScrollie.readyState == 4 && oScrollie.status == "200") {
                    callback(oScrollie.responseText);
                }
                else{
                    // error control. email error response
                }
            };
            oScrollie.send();  
        }
        
        function addStyle() {
        var head = document.head,
            link = document.createElement('link')
                link.type = 'text/css'
                link.rel = 'stylesheet'
                link.href = 'http://www.mikegartley.com/widget-demo/css/scrollie.css'

        head.appendChild(link)
        }

        function init() {
            getContent(function(response) {
            var data = JSON.parse(response);
            var ran_key = data[Math.floor(Math.random() * data.length)];

            var div = document.createElement('div');
                div.setAttribute('class', 'featured-banner');
                div.setAttribute('id', 'scrollie');
                var imgSrc = ran_key.image;
                imgSrc = imgSrc.replace("h=315", "h=120");
                imgSrc = imgSrc.replace("w=420", "w=370");
                div.innerHTML = '<a href="' + ran_key.url + '" target="_blank"><div class="img-holder"><img alt="" src="' + imgSrc + '" class="img-responsive"><p class="brand">' + ran_key.brand + '</p></div><div class="content"><p class="ad-headline">' + ran_key.headline + '</p></div><span class="sponsored">Sponsored</span></a>';
                document.body.insertBefore(div, document.body.firstChild);
         });
        }

        function scrollUpdate() {
            getContent(function(response) {
            var data = JSON.parse(response);
            var ran_key = data[Math.floor(Math.random() * data.length)];
            var oldDiv = document.getElementById('scrollie');
            var imgSrc = ran_key.image;
                imgSrc = imgSrc.replace("h=315", "h=120");
                imgSrc = imgSrc.replace("w=420", "w=370");
                oldDiv.innerHTML = '<a href="' + ran_key.url + '" target="_blank"><div class="img-holder"><img alt="" src="' + imgSrc + '" class="img-responsive"><p class="brand">' + ran_key.brand + '</p></div><div class="content"><p class="ad-headline">' + ran_key.headline + '</p></div><span class="sponsored">Sponsored</span></a>';
                oldDiv.appendChild(oldDiv.firstChild);

         });
        }
 
        window.addEventListener("load", function(){
            addStyle();
            init();
        }, false);

        window.addEventListener("scroll", function(){
            var updateContent = 0;
            if (window.pageYOffset <= 0) {
                updateContent = 1;

            if(updateContent == 1){
                scrollUpdate();            }
            }
            else{
                updateContent = 0;
            }

        }, false);



}());
