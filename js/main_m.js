/*메뉴*/
function openGnb() {
    document.getElementById("Gnb").style.display = "block";
}

function closeGnb() {
    document.getElementById("Gnb").style.display = "none";
}

/*맨위로*/
$( document ).ready( function() {
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 100 ) {
        $( '.fixed-btn' ).fadeIn();
      } else {
        $( '.fixed-btn' ).fadeOut();
      }
    });
    $( '.fixed-btn-top' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
      return false;
    });
  });