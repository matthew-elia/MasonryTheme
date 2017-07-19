// var instagramAccounts = new Array();
// console.log(instagramAccounts);
// instagramAccounts = ['swrve_la','rab.equipment','fjallravenusa','penfieldusa','wmountaineering','topodesigns','bergansofnorway'];
// for(var idx = 0; idx < instagramAccounts.length; idx++) {
//  console.log(instagramAccounts[idx]);
//  $.ajax({
//      type: 'GET',
//      url: '//www.instagram.com/'+instagramAccounts[idx]+'/media/',
//      headers: {'Access-Control-Allow-Origin': '*'},
//      // crossOrigin: true,
//      data: JSON.stringify(),
//      success: function(data) {
//          alert(data);
//          // for(var i = 0; i < data.items.length-1; i++) {
//          //  $('.insta-'+i+'').html('<img src="' + data.data[i].images.standard_resolution.url+ '">');
//          // }
//      }
//  });
// }
// $.ajax({
//  type: 'GET',
//  // url: '//api.instagram.com/v1/users/5582371914/media/recent/?access_token=5582371914.e897285.a95a1b74744e44f4a03b9f0e23c6e035',
//  url: '//www.instagram.com/swrve_la/media/',
//  dataType: 'jsonp',
//  cache: false,
//  success: function(data) {
//      console.log(data);
//      for(var i = 0; i < data.length-1; i++) {
//          $('.insta-'+i+'').html('<img src="' + data.data[i].images.standard_resolution.url+ '">');
//      }
//  }