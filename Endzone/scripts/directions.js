jQuery(document).ready(function(){
  var map = new google.maps.Map(jQuery('#mapLocationSrc').get(0),{
      center: new google.maps.LatLng(latitude, longitude),
      zoom: zoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }),
  marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map
  }),
  info = new google.maps.InfoWindow({
      content: popupContent
  });
  info.open(map, marker);
  
  var old_v='',
    ds=new google.maps.DirectionsService(),
    dr=new google.maps.DirectionsRenderer();
  dr.setMap(map);
  dr.setPanel(jQuery('#map-directions-data').get(0));  
  
  jQuery('#frmPostcode').bind('submit', function(){
    var v=jQuery.trim(jQuery('#tbPostcode').val());
    if(v!=''&&v!=old_v){
      old_v=v;      
      var r = {
        origin:v,
        destination: destinationAddress,
        travelMode:google.maps.TravelMode.DRIVING
      };
      ds.route(r, function(result, status){        
        if (status == google.maps.DirectionsStatus.OK) {
          info.close();
          marker.setMap(null);
          dr.setDirections(result);
          jQuery('#map-directions').css({display:'block'});
          
          setTimeout(function ()
                     {
                       var x = document.getElementById("map-directions-data").innerHTML;
                       var str = x;
                       str = str.replace(/&/g, "amp;");
                       str = str.replace(/>/g, "gt;");
                       str = str.replace(/</g, "lt;");
                       str = str.replace(/"/g, "quot;");
                       str = str.replace(/'/g, "#039;");
                       
                       //console.log(str);
                       //document.getElementById("ContentPlaceHolderDefault_BodyText_Hidden1").value =  str;
                       
                       
                     },2000
                    );
          
          
        } else {
          alert('Location ' + old_v + ' not found.');
          //console.log({r:result,s:status});
        }
      });      
    }
  });
});

                