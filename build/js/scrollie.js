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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JvbGxpZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgICAgIHZhciB3aWRnZXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGllJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudChjYWxsYmFjaykgeyAgXHJcbiAgICAgICAgICAgIHZhciBhcGlfa2V5ID0gd2lkZ2V0RGF0YS5nZXRBdHRyaWJ1dGUoJ2l0ZW1pZCcpLFxyXG4gICAgICAgICAgICAgICAgcHViX2lkID0gd2lkZ2V0RGF0YS5nZXRBdHRyaWJ1dGUoJ2l0ZW1wcm9wJyksXHJcbiAgICAgICAgICAgICAgICB3aWRnZXRfaWQgPSB3aWRnZXREYXRhLmdldEF0dHJpYnV0ZSgnaXRlbXR5cGUnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBvU2Nyb2xsaWUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIG9TY3JvbGxpZS5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9TY3JvbGxpZS5vcGVuKCdHRVQnLCAnaHR0cHM6Ly90cmVuZHMucmV2Y29udGVudC5jb20vYXBpL3YxLz9hcGlfa2V5PScrYXBpX2tleSsnJnB1Yl9pZD0nK3B1Yl9pZCsnJndpZGdldF9pZD0nK3dpZGdldF9pZCsnJmRvbWFpbj1hcGlleGFtcGxlcy5wb3dyLmNvbSZzcG9uc29yZWRfY291bnQ9NiZzcG9uc29yZWRfb2Zmc2V0PTAmaW50ZXJuYWxfY291bnQ9MCcsIHRydWUpOyAvLyBSZXBsYWNlICdteV9kYXRhJyB3aXRoIHRoZSBwYXRoIHRvIHlvdXIgZmlsZVxyXG4gICAgICAgICAgICAgICAgb1Njcm9sbGllLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG9TY3JvbGxpZS5yZWFkeVN0YXRlID09IDQgJiYgb1Njcm9sbGllLnN0YXR1cyA9PSBcIjIwMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sob1Njcm9sbGllLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIGNvbnRyb2wuIGVtYWlsIGVycm9yIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9TY3JvbGxpZS5zZW5kKCk7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU3R5bGUoKSB7XHJcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkLFxyXG4gICAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXHJcbiAgICAgICAgICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnXHJcbiAgICAgICAgICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgICAgICAgbGluay5ocmVmID0gJ2h0dHA6Ly93d3cubWlrZWdhcnRsZXkuY29tL3dpZGdldC1kZW1vL2Nzcy9zY3JvbGxpZS5jc3MnXHJcblxyXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluaylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgICAgIGdldENvbnRlbnQoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgdmFyIHJhbl9rZXkgPSBkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV07XHJcblxyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmZWF0dXJlZC1iYW5uZXInKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Njcm9sbGllJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nU3JjID0gcmFuX2tleS5pbWFnZTtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKFwiaD0zMTVcIiwgXCJoPTEyMFwiKTtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IGltZ1NyYy5yZXBsYWNlKFwidz00MjBcIiwgXCJ3PTM3MFwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIicgKyByYW5fa2V5LnVybCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48ZGl2IGNsYXNzPVwiaW1nLWhvbGRlclwiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGltZ1NyYyArICdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCI+PHAgY2xhc3M9XCJicmFuZFwiPicgKyByYW5fa2V5LmJyYW5kICsgJzwvcD48L2Rpdj48ZGl2IGNsYXNzPVwiY29udGVudFwiPjxwIGNsYXNzPVwiYWQtaGVhZGxpbmVcIj4nICsgcmFuX2tleS5oZWFkbGluZSArICc8L3A+PC9kaXY+PHNwYW4gY2xhc3M9XCJzcG9uc29yZWRcIj5TcG9uc29yZWQ8L3NwYW4+PC9hPic7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVXBkYXRlKCkge1xyXG4gICAgICAgICAgICBnZXRDb250ZW50KGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHZhciByYW5fa2V5ID0gZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCldO1xyXG4gICAgICAgICAgICB2YXIgb2xkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGllJyk7XHJcbiAgICAgICAgICAgIHZhciBpbWdTcmMgPSByYW5fa2V5LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gaW1nU3JjLnJlcGxhY2UoXCJoPTMxNVwiLCBcImg9MTIwXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gaW1nU3JjLnJlcGxhY2UoXCJ3PTQyMFwiLCBcInc9MzcwXCIpO1xyXG4gICAgICAgICAgICAgICAgb2xkRGl2LmlubmVySFRNTCA9ICc8YSBocmVmPVwiJyArIHJhbl9rZXkudXJsICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPjxkaXYgY2xhc3M9XCJpbWctaG9sZGVyXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgaW1nU3JjICsgJ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIj48cCBjbGFzcz1cImJyYW5kXCI+JyArIHJhbl9rZXkuYnJhbmQgKyAnPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJjb250ZW50XCI+PHAgY2xhc3M9XCJhZC1oZWFkbGluZVwiPicgKyByYW5fa2V5LmhlYWRsaW5lICsgJzwvcD48L2Rpdj48c3BhbiBjbGFzcz1cInNwb25zb3JlZFwiPlNwb25zb3JlZDwvc3Bhbj48L2E+JztcclxuICAgICAgICAgICAgICAgIG9sZERpdi5hcHBlbmRDaGlsZChvbGREaXYuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYWRkU3R5bGUoKTtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZUNvbnRlbnQgPSAwO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnQgPSAxO1xyXG5cclxuICAgICAgICAgICAgaWYodXBkYXRlQ29udGVudCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFVwZGF0ZSgpOyAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuXHJcblxyXG59KCkpO1xyXG4iXSwiZmlsZSI6InNjcm9sbGllLmpzIn0=
