//- heart icons
$('.file-heart').on('click', function() {
  $(this).toggleClass('icon-heart-o icon-heart');
});

//- checkbox icons (for detail view file)
$('.file-details-view .file-checkbox').on('click', function() {
  $(this).toggleClass('icon-tick-circle icon-tick-circle-filled');
});


//- toggle icons
showCaptions = function() {
  if ($('#toggle-show-caption').hasClass('toggle-on')) {
    $('.file').addClass('show-caption');
  } else if ($('#toggle-show-caption').hasClass('toggle-off')) {
    $('.file').removeClass('show-caption');
  }
};

showFilenames = function() {
  if ($('#toggle-show-filename').hasClass('toggle-on')) {
    $('.file').addClass('show-filename');
  } else if ($('#toggle-show-filename').hasClass('toggle-off')) {
    $('.file').removeClass('show-filename');
  }
};

$('.toggle').on('click', function() {
  $(this).toggleClass('toggle-on toggle-off');
  showCaptions();
  showFilenames();
});


//- ============================================================
//- CONTEXT MENUS
//- ============================================================

//- item context menu
$('.file .btn-item-menu').on('click', function() {
  $(this).siblings('#item-context-menu').toggleClass('show');
});

//- board context menu
$('.board-row .icon-ellipsis').on('click', function() {
  $(this).siblings('#board-context-menu').toggleClass('show');
});

//- board context menu
$('.btn-top-board-context-menu').on('click', function() {
  $('#top-board-context-menu').toggleClass('show');
});

//- utility row context menu
$('.utility-row .icon-ellipsis').on('click', function() {
  $('#utility-row-context-menu').toggleClass('show');
});

//- utility row settings context menu
$('.utility-row .icon-gear').on('click', function() {
  $('#utility-row-settings-context-menu').toggleClass('show');
});

//- utility row settings context menu
$('.utility-row .sort-input').on('click', function() {
  $('#sort-by-context-menu').toggleClass('show');
});

//- saved searches context menu
$('.btn-saved-searches').on('click', function() {
  $('#saved-searches-context-menu').toggleClass('show');
});

//- close context menu
$('.context-menu').click(function(e, evt) {
  if($(e.target).is('.toggle')) {
    e.preventDefault();
    return;
  }
  
  $('.context-menu').removeClass('show');
});


//- ============================================================
//- BOARD COLOR LABELS
//- ============================================================

$('.label-circle.label-circle-red').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').addClass('label-red').removeClass('label-orange').removeClass('label-yellow').removeClass('label-green').removeClass('label-blue').removeClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-orange').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').addClass('label-orange').removeClass('label-yellow').removeClass('label-green').removeClass('label-blue').removeClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-yellow').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').removeClass('label-orange').addClass('label-yellow').removeClass('label-green').removeClass('label-blue').removeClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-green').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').removeClass('label-orange').removeClass('label-yellow').addClass('label-green').removeClass('label-blue').removeClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-blue').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').removeClass('label-orange').removeClass('label-yellow').removeClass('label-green').addClass('label-blue').removeClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-purple').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').removeClass('label-orange').removeClass('label-yellow').removeClass('label-green').removeClass('label-blue').addClass('label-purple').removeClass('label-pink');
});

$('.label-circle.label-circle-grey').on('click', function() {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $(this).parentsUntil('.board-container').removeClass('label-red').removeClass('label-orange').removeClass('label-yellow').removeClass('label-green').removeClass('label-blue').removeClass('label-purple').addClass('label-pink');
});


//- ============================================================
//- SELECT FILES
//- ============================================================

$('.file').click(function(e, evt) {
  if($(e.target).is('.file-heart, .btn, ul.context-menu, ul.context-menu li, ul.context-menu li span, ul.context-menu li .icon')) {
    e.preventDefault();
    return;
  }
  
  $(this).toggleClass('selected');
  $(this).children('.file-checkbox').toggleClass('icon-tick-circle icon-tick-circle-filled');
  $('.context-menu').removeClass('show');

  if ($('.file').hasClass('selected')) {
    $('.right-side-panel').addClass('has-file-selected');
  } else {
    $('.right-side-panel').removeClass('has-file-selected');
  }
});

$('.file-details-view .thumb-container').click(function(e, evt) {
  if($(e.target).is('.file-utilites, .file-heart')) {
    e.preventDefault();
    return;
  }
  
  $(this).parentsUntil('.file-outer-details-view').toggleClass('selected');
  $(this).find('.file-checkbox').toggleClass('icon-tick-circle icon-tick-circle-filled');
});

$('.select-all').click(function() {
  $('.file').toggleClass('selected');
  $('.file-checkbox').toggleClass('icon-tick-circle icon-tick-circle-filled');
});


//- ============================================================
//- VIEW TILE OPTIONS
//- ============================================================

$('#btn-view-option-sm').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-row').addClass('view-tiles-sm').removeClass('view-tiles-md').removeClass('view-tiles-lg').removeClass('view-tiles-details');
});

$('#btn-view-option-md').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-row').removeClass('view-tiles-sm').addClass('view-tiles-md').removeClass('view-tiles-lg').removeClass('view-tiles-details');
});

$('#btn-view-option-lg').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-row').removeClass('view-tiles-sm').removeClass('view-tiles-md').addClass('view-tiles-lg').removeClass('view-tiles-details');
});

$('#btn-view-option-details').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-row').removeClass('view-tiles-sm').removeClass('view-tiles-md').removeClass('view-tiles-lg').addClass('view-tiles-details');
});


//- ============================================================
//- DELETE ITEM
//- ============================================================

$('.utility-row .icon-trash').on('click', function() {
  $('.file.selected').parentsUntil('.files-container').remove();
});


//- ============================================================
//- PAGE STRUCTURE
//- ============================================================

//- left-side panel
$('.btn-left-side-panel').on('click', function() {
  $('.page-content').toggleClass('show-left-side-panel');
});

//- comments panel
$('.btn-comments-panel').on('click', function() {
  $('.page-content').toggleClass('show-comments-panel');
  $('.btn-comments-panel').toggleClass('active');
});

//- image library left-side tabs
$('#tab-filters').on('click', function() {
  $(this).addClass('active');
  $('#tab-folders').removeClass('active');
  $('.image-library-view .left-side-panel').addClass('image-library-filters-active').removeClass('image-library-folders-active');
});

$('#tab-folders').on('click', function() {
  $(this).addClass('active');
  $('#tab-filters').removeClass('active');
  $('.image-library-view .left-side-panel').addClass('image-library-folders-active').removeClass('image-library-filters-active');
});

//- filter row expand/condense
$('.btn-filter-row-expand').on('click', function() {
  $('.filter-row').toggleClass('condensed expanded');
});

$('.btn-filter-row-delete').on('click', function() {
  $('.filter-row').remove();
  $('.btn-filter-row-fixed').remove();
});

$('.filter-tag').on('click', function() {
  $(this).remove();
});  

//- comments panel tabs
$('#tab-board-comments').on('click', function() {
  $(this).addClass('active');
  $('#tab-item-comments').removeClass('active');
  $('.comments-panel').addClass('comments-board-active').removeClass('comments-item-active');
});

$('#tab-item-comments').on('click', function() {
  $(this).addClass('active');
  $('#tab-board-comments').removeClass('active');
  $('.comments-panel').addClass('comments-item-active').removeClass('comments-board-active');
});


//- ============================================================
//- FILTERS
//- ============================================================

openFilter = function(filtername) {
  $('#filter-btn-' + filtername).on('click', function() {
    if($(this).hasClass('active')) {
      console.log("hello");
      $('.filter').removeClass('show');
      $('.filter-btn').removeClass('active');
    } else {
      $('.filter').removeClass('show');
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      $('#filter-'+ filtername).addClass('show');
    }
  });
};

$('header, .title-row, .filter-overlay').on('click', function() {
  $('.filter').removeClass('show');
  $('.filter-btn').removeClass('active');
});

openFilter("category");
openFilter("market");
openFilter("products");
openFilter("designer");
openFilter("city");
openFilter("season");


//- ============================================================
//- MODALS
//- ============================================================

//- share
$('.btn-share').on('click', function() {
  $('.overlay').addClass('show');
  $('#share-modal').addClass('show');
});

//- add
$('.btn-add-to-board').on('click', function() {
  $('.overlay').addClass('show');
  $('#add-modal').addClass('show');
});

//- add
$('.btn-send').on('click', function() {
  $('.overlay').addClass('show');
  $('#send-modal').addClass('show');
});

//- create new board
$('.btn-create-new-board').on('click', function() {
  $('.overlay').addClass('show');
  $('#create-new-board-modal').addClass('show');
});

//- duplicate board
$('.btn-duplicate-board').on('click', function() {
  $('.overlay').addClass('show');
  $('#duplicate-board-modal').addClass('show');
});

//- rename board
$('.btn-rename-board').on('click', function() {
  $('.overlay').addClass('show');
  $('#rename-board-modal').addClass('show');
});

//- save search
$('.btn-save-search').on('click', function() {
  $('.overlay').addClass('show');
  $('#save-search-modal').addClass('show');
});

//- close modal
$('.modal .close-modal').on('click', function() {
  $(this).parentsUntil('body').removeClass('show');
  $('.overlay').removeClass('show');

  //- keep overlay if it was a second level modal
  //- if ($('#item-detail-modal').hasClass('show')) {
  //-   return;
  //- } else {
  //-   $('.overlay').removeClass('show');
  //- }
});

//- item detail modal
$('.file').on('dblclick', function() {
  $('.overlay').addClass('show');
  $('#item-detail-modal').addClass('show');
});

$('.btn-open').on('click', function() {
  $('.overlay').addClass('show');
  $('#item-detail-modal').addClass('show');
});

//- tabs
$('.btn-modal-show-comments').on('click', function() {
  $('.modal-section-other').addClass('show-comments').removeClass('show-related-images').removeClass('show-related-reports');
});

$('.btn-modal-show-related-images').on('click', function() {
  $('.modal-section-other').removeClass('show-comments').addClass('show-related-images').removeClass('show-related-reports');
});

$('.btn-modal-show-related-reports').on('click', function() {
  $('.modal-section-other').removeClass('show-comments').removeClass('show-related-images').addClass('show-related-reports');
});

//- left side panel
$('.btn-modal-left-side-panel').on('click', function() {
  $('#item-detail-modal').toggleClass('show-left-side-panel');
});


//- ============================================================
//- BACK TO TOP
//- ============================================================

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.btn-back-to-top');

  //hide or show the "back to top" link
  $('.files-row').scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('.files-row').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
});


//- ============================================================
//- FILTER ROW UP/DOWN ON SCROLL
//- ============================================================

var scroller = $('.files-row')[0];
$(".files-row").headroom({
  "scroller": scroller,
  "offset": 200
});

$('.btn-filter-row-fixed').on('click', function() {
  var height = $('.filter-row-fixed').height() + 30;
  
  $(this).toggleClass('active');
  $('.filter-row-fixed').toggleClass('show');

  if ($(this).hasClass('active')) {
    $(this).children('span').text('Hide filters');
    $(this).css({transform: 'translate3d(0,' + height + 'px, 0)'});
  } else {
    $(this).children('span').text('Show filters');
    $(this).css({transform: 'translate3d(0, 0, 0)'});
  }
});