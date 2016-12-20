(function(module) {
  var movieListRenderObj = {};

  movieListRender = function() {
    for (var i = 5; i < 20; i++) {
      $('#movies-list').children().eq(i).hide();
    }
    // $('#movies-detail').hide();
  };

  showListRender = function(event){
    $('#showFullList').on('click', function(){

      if( $('#showFullList').html() === 'show all top movies' ){
        $('#showFullList').html('hide all top movies');
        $('#movies-list').children().hide();
        $('#movies-list').children().show();
      }

      else{
        $('#showFullList').html('show all top movies');
        $('#movies-list').children().show();
        for (var i = 5; i < 20; i++) {
          $('#movies-list').children().eq(i).hide();
        }
      }

    });
  };

  module.movieListRenderObj = movieListRenderObj;
})(window);
