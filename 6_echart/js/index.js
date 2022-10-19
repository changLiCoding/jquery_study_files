// monitoring section tabs display or none
( function ()
{
  $( ".monitor .tabs" ).on( "click", "a", function ()
  {
    $( this ).addClass( "active" ).siblings( "a" ).removeClass( "active" );
    let activeIndex = $( this ).index();
    console.log( $( ".content" )[ activeIndex ] )
    $( ".content" ).eq( activeIndex ).show().siblings( '.content' ).hide();
  } )
  $( ".marquee-view .marquee" ).each( function ()
  {
    let rows = $( this ).children().clone();
    $( this ).append( rows );
  } )




} )();

( function ()
{
  let myChart = echarts.init( document.querySelector( '.pie' ) );
  let option = {
    tooltip: {

    },
    series: [
      {
        name: 'Number of sets in the city',
        type: 'pie',
        radius: [ 5, 50 ],
        center: [ '50%', '50%' ],
        roseType: 'area',
        fontSize: 2,
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ],
        itemStyle: {
          borderRadius: 4
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };
  myChart.setOption( option );
  window.addEventListener( "resize", function ()
  {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  } );

} )();