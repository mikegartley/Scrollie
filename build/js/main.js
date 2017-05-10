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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudChjYWxsYmFjaykgeyAgIFxyXG4gICAgICAgICAgICB2YXIgcmV2T2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgICByZXZPYmoub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIHJldk9iai5vcGVuKCdHRVQnLCAnaHR0cHM6Ly90cmVuZHMucmV2Y29udGVudC5jb20vYXBpL3YxLz9hcGlfa2V5PTNlZWIwMGQ3ODZlOWE3N2JiZDYzMDU5NWFlMGJlN2U5YWE3YWZmM2ImcHViX2lkPTk0NSZ3aWRnZXRfaWQ9NjE4MSZkb21haW49YXBpZXhhbXBsZXMucG93ci5jb20mc3BvbnNvcmVkX2NvdW50PTYmc3BvbnNvcmVkX29mZnNldD0wJmludGVybmFsX2NvdW50PTAnLCB0cnVlKTsgLy8gUmVwbGFjZSAnbXlfZGF0YScgd2l0aCB0aGUgcGF0aCB0byB5b3VyIGZpbGVcclxuICAgICAgICAgICAgcmV2T2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXZPYmoucmVhZHlTdGF0ZSA9PSA0ICYmIHJldk9iai5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldk9iai5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBjb250cm9sLiBlbWFpbCBlcnJvciByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXZPYmouc2VuZCgpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlKCkge1xyXG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gICAgICAgICAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJ1xyXG4gICAgICAgICAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCdcclxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9ICdodHRwOi8vd3d3Lm1pa2VnYXJ0bGV5LmNvbS93aWRnZXQtZGVtby9jc3MvZmVhdEFkLmNzcydcclxuXHJcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICBnZXRDb250ZW50KGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHZhciByYW5fa2V5ID0gZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCldO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmVhdHVyZWQtYmFubmVyJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nU3JjID0gcmFuX2tleS5pbWFnZTtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKFwiaD0zMTVcIiwgXCJoPTEyMFwiKTtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKFwidz00MjBcIiwgXCJ3PTM3MFwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIicgKyByYW5fa2V5LnVybCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48ZGl2IGNsYXNzPVwiaW1nLWhvbGRlclwiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGltZ1NyYyArICdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCI+PHAgY2xhc3M9XCJicmFuZFwiPicgKyByYW5fa2V5LmJyYW5kICsgJzwvcD48L2Rpdj48ZGl2IGNsYXNzPVwiY29udGVudFwiPjxwIGNsYXNzPVwiYWQtaGVhZGxpbmVcIj4nICsgcmFuX2tleS5oZWFkbGluZSArICc8L3A+PC9kaXY+PHNwYW4gY2xhc3M9XCJzcG9uc29yZWRcIj5TcG9uc29yZWQ8L3NwYW4+PC9hPic7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYWRkU3R5bGUoKTtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcblxyXG5cclxuXHJcbn0oKSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
