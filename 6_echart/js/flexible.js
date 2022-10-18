( function flexible ( window, document )
{
  var docEl = document.documentElement  // return root element
  var dpr = window.devicePixelRatio || 1 // grab dpr

  // adjust body font size 
  function setBodyFontSize ()
  {
    if ( document.body )
    {
      document.body.style.fontSize = ( 12 * dpr ) + 'px'
    }
    else
    {
      document.addEventListener( 'DOMContentLoaded', setBodyFontSize )
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 24
  function setRemUnit ()
  {
    var rem = docEl.clientWidth / 24
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener( 'resize', setRemUnit )
  window.addEventListener( 'pageshow', function ( e )
  {
    if ( e.persisted )
    {
      setRemUnit()
    }
  } )


  if ( dpr >= 2 )
  {
    var fakeBody = document.createElement( 'body' )
    var testElement = document.createElement( 'div' )
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild( testElement )
    docEl.appendChild( fakeBody )
    if ( testElement.offsetHeight === 1 )
    {
      docEl.classList.add( 'hairlines' )
    }
    docEl.removeChild( fakeBody )
  }
}( window, document ) )
