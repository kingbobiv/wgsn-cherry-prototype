// ====================================================================================================
//  __  __ _            
// |  \/  (_)           
// | \  / |_ ___  ___   
// | |\/| | / __|/ __|  
// | |  | | \__ \ (__ _ 
// |_|  |_|_|___/\___(_)       
// ====================================================================================================

//- heart icons
$('.file-heart').on('click', function() {
  $(this).toggleClass('icon-heart icon-heart-filled');
});

$(document).ready(function() {
  if($('body').hasClass('workspace-favourites-view')) {
    $('.file-heart').removeClass('icon-heart').addClass('icon-heart-filled');
  };
});

//- checkbox icons (for detail view file)
// $('.file-details-view .file-checkbox').on('click', function() {
//   $(this).toggleClass('icon-tick-circle icon-tick-circle-filled');
// });

// show/hide captions
showCaptions = function() {
  if ($('#toggle-show-caption').hasClass('toggle-on')) {
    $('.file').addClass('show-caption');
    $('.file .caption-container').show();
    $('.file').css({'padding-bottom': '62px'});
  } else if ($('#toggle-show-caption').hasClass('toggle-off')) {
    $('.file').removeClass('show-caption');
    $('.file').removeClass('show-filename');
    $('.file .caption-container').hide();
    $('.file').css({'padding-bottom': '0'});
    $('#toggle-show-filename').removeClass('toggle-on').addClass('toggle-off');
  }
};

//- show/hide filenames
showFilenames = function() {
  if ($('#toggle-show-filename').hasClass('toggle-on')) {
    $('.file').addClass('show-filename');
    $('.file .caption-container .filename').show();
    $('.file').css({'padding-bottom': '84px'});
  } else if ($('#toggle-show-filename').hasClass('toggle-off')) {
    $('.file').removeClass('show-filename');
    $('.file .caption-container .filename').hide();
    $('.file').css({'padding-bottom': '62px'});
  }
};

// toggle icons
$('.toggle').on('click', function() {
  $(this).toggleClass('toggle-on toggle-off');
  showCaptions();
  showFilenames();
});

// default hide LHS for tablet
// $(document).ready(function() {
//   if($('html').hasClass('tablet')) {
//     $('.page-content').removeClass('show-left-side-panel');
//     collage(400);
//   };
// });


// ====================================================================================================
//   _____      _           _         __   ____                     ______ _ _           
//  / ____|    | |         | |       / /  / __ \                   |  ____(_) |          
// | (___   ___| | ___  ___| |_     / /  | |  | |_ __   ___ _ __   | |__   _| | ___  ___ 
//  \___ \ / _ \ |/ _ \/ __| __|   / /   | |  | | '_ \ / _ \ '_ \  |  __| | | |/ _ \/ __|
//  ____) |  __/ |  __/ (__| |_   / /    | |__| | |_) |  __/ | | | | |    | | |  __/\__ \
// |_____/ \___|_|\___|\___|\__| /_/      \____/| .__/ \___|_| |_| |_|    |_|_|\___||___/
//                                              | |                                      
//                                              |_|                                      
// ====================================================================================================

// remove file utility buttons once in "select mode"
checkforhover = function(){
  if ($('.file').hasClass('selected')){
    // $('.file .file-heart').hide(); 
    $('.file .btn').hide(); 
    
    // Count number of items selected
    var myaccount = $('.file.selected').length;
    console.log(myaccount);
    
    // if only one file is selected
    if (myaccount == 1) {
      // $('.file.selected .file-heart').show();  
      $('.file.selected .btn').show();
      $('.right-side-panel').addClass('has-file-selected');
      // $('.btn-back-to-top').css({transform: "translate3d(0, -50px, 0)"})
      $('.file-checkbox').css({opacity: "1"})
      $('.floating-utility-row .displaying-results').text(myaccount + ' item selected');
      $('.btn-comments').removeClass('active');
    };
    
    // if more than one file is selected
    if (myaccount > 1) { 
      $('.right-side-panel').addClass('has-multiple-files-selected');
      $('.btn-comments').removeClass('active');
    };
  } else {
    // $('.file .file-heart').show(); 
    $('.file .btn').show(); 
    $('.floating.context-menu .count').hide();
    $('.right-side-panel').removeClass('has-file-selected').removeClass('has-multiple-files-selected');
    // $('.btn-back-to-top').css({transform: "translate3d(0, 0, 0)"})
    $('.file-checkbox').css({opacity: "0"})
  };
};

// ===== SELECT FILE ON SINGLE CLICK, OPEN FILE ON DOUBLE CLICK =====

// select file on single click, open file on double click
// var DELAY = 160, clicks = 0, timer = null;

// $(function(){
//   $('.file').click(function(e, evt) {
//       clicks++;  //count clicks

//       var selectedImg = $(this).find('img').prop('src');

//       if(clicks === 1) {
//         timer = setTimeout(function() {
//           if($(e.target).is('.file-heart, .btn, ul.context-menu, ul.context-menu li, ul.context-menu li span, ul.context-menu li .icon')) {
//             e.preventDefault();
//             return;
//           }
          
//           $(e.target).parentsUntil('.files-container').toggleClass('selected');
//           // $(e.target).siblings('.file-checkbox').toggleClass('icon-tick-circle icon-tick-circle-filled');
//           $('.context-menu').removeClass('show');
//           checkforhover();
//           clicks = 0; // after action performed, reset counter
//         }, DELAY);
//       } else {
//         clearTimeout(timer); // prevent single-click action
//         $('.overlay').addClass('show');
//         $('#item-detail-modal').addClass('show');
//         $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});
//         clicks = 0; // after action performed, reset counter

//         // file type
//         if ($(this).hasClass('file-type-image')) {
//           $('#item-detail-modal').addClass('file-type-image');
//         } else if ($(this).hasClass('file-type-report')) {
//           $('#item-detail-modal').addClass('file-type-report');
//         } else if ($(this).hasClass('file-type-video')) {
//           $('#item-detail-modal').addClass('file-type-video');
//         } else if ($(this).hasClass('file-type-color-card')) {
//           $('#item-detail-modal').addClass('file-type-color-card');
//         }
//       }
//   })

//   .on("dblclick", function(e){
//     e.preventDefault(); // cancel system double-click event
//   });
// });

// // select file from details view, open file on double click
// $(function(){
//   $('.file-details-view .thumb-container').click(function(e, evt) {
//       clicks++;  //count clicks

//       var selectedImg = $(this).find('img').prop('src');

//       if(clicks === 1) {
//         timer = setTimeout(function() {
//           if($(e.target).is('.file-utilites, .file-heart')) {
//             e.preventDefault();
//             return;
//           }
          
//           $(e.target).parentsUntil('.details-view').toggleClass('selected');
//           // $(e.target).parentsUntil('.details-view').find('.file-checkbox').toggleClass('icon-tick-circle icon-tick-circle-filled');
//           clicks = 0; // after action performed, reset counter
//         }, DELAY);
//       } else {
//         clearTimeout(timer); // prevent single-click action
//         $('.overlay').addClass('show');
//         $('#item-detail-modal').addClass('show');
//         $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});
//         clicks = 0; // after action performed, reset counter
//       }
//   })

//   .on("dblclick", function(e){
//     e.preventDefault(); // cancel system double-click event
//   });
// });

// ===== end SELECT FILE ON SINGLE CLICK, OPEN FILE ON DOUBLE CLICK =====


// ===== SELECT FILE ON CHECKBOX, OPEN FILE ON SINGLE CLICK =====

$('.file-checkbox').click(function() {
  $(this).parentsUntil('.collage').toggleClass('selected');
  $(this).toggleClass('icon-tick-circle icon-tick-circle-filled');
});

multiFileSelect = function(e) {
  // Count number of items selected
  var myaccount = $('.file.selected').length;
  var selectedImg = $(e.target).siblings('img').prop('src');

  // if no files are selected
  if (myaccount == 0) {
    if($(e.target).is('.file-checkbox, .file-heart, .icon, .context-menu, .context-menu li, .context-menu li .icon, .context-menu li span')) {
      return;
    } else if(!($('body').hasClass('workspace-trash-view'))) {
      $('.overlay').addClass('show');
      $('#item-detail-modal').addClass('show');
      $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});

      // file type
      if ($(e.target).parent().hasClass('file-type-image')) {
        $('#item-detail-modal').addClass('file-type-image');
      } else if ($(e.target).parent().hasClass('file-type-report')) {
        $('#item-detail-modal').addClass('file-type-report');
      } else if ($(e.target).parent().hasClass('file-type-video')) {
        $('#item-detail-modal').addClass('file-type-video');
      } else if ($(e.target).parent().hasClass('file-type-color-card')) {
        $('#item-detail-modal').addClass('file-type-color-card');
      }
    };

  // if 1 file is selected
  } else if (myaccount == 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.right-side-panel').addClass('has-file-selected');
      $('.floating-utility-row .displaying-results').text(myaccount + ' item selected');
      $('.file-checkbox').css({'opacity': 1})
      $(e.target).parent().addClass('selected');
      $(e.target).siblings('.file-checkbox').removeClass('icon-tick-circle').addClass('icon-tick-circle-filled');

      // remove overflow on a timeout to display tooltips, not quite working though
      // setTimeout(function(){
      //   $('.floating-utility-row-container').css({'overflow-y': 'visible'});
      // }, 200);
    };

  // if 1 or more files are selected
  } else if (myaccount >= 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.right-side-panel').addClass('has-multiple-files-selected');
      $('.floating-utility-row .displaying-results').text((myaccount + 1) + ' items selected');
      $('.file-checkbox').css({'opacity': 1})
      $(e.target).parent().addClass('selected');
      $(e.target).siblings('.file-checkbox').removeClass('icon-tick-circle').addClass('icon-tick-circle-filled');
    };
  };
};

$('.file').on('click', function(e) {
  multiFileSelect(e);
});

// ===== end SELECT FILE ON CHECKBOX, OPEN FILE ON SINGLE CLICK =====


// select all files
$('.select-all').click(function() {
  if ($('.file').length == $('.file.selected').length) {
    $('.select-all').text('Select all');
    $('.file').removeClass('selected');
    $('.file-checkbox').removeClass('icon-tick-circle-filled').addClass('icon-tick-circle');
    $('.right-side-panel').removeClass('has-file-selected').removeClass('has-multiple-files-selected');
    $('.file-checkbox').css({'opacity': 0})
  } else {
    $('.select-all').text('Deselect all');
    $('.file').addClass('selected');
    $('.file-checkbox').removeClass('icon-tick-circle').addClass('icon-tick-circle-filled');
  }
});

// x to close select mode / floating utility row
$('.floating-utility-row .icon-cross').click(function() {
  $('.file').removeClass('selected');
  $('.file-checkbox').removeClass('icon-tick-circle-filled').addClass('icon-tick-circle');
  $('.right-side-panel').removeClass('has-file-selected').removeClass('has-multiple-files-selected');
  $('.file-checkbox').css({'opacity': 0})
});


// ====================================================================================================
//   _____            _            _     __  __                      
//  / ____|          | |          | |   |  \/  |                     
// | |     ___  _ __ | |_ _____  _| |_  | \  / | ___ _ __  _   _ ___ 
// | |    / _ \| '_ \| __/ _ \ \/ / __| | |\/| |/ _ \ '_ \| | | / __|
// | |___| (_) | | | | ||  __/>  <| |_  | |  | |  __/ | | | |_| \__ \
//  \_____\___/|_| |_|\__\___/_/\_\\__| |_|  |_|\___|_| |_|\__,_|___/
// ====================================================================================================

//- item context menu
$('.file .btn-item-menu').on('click', function() {
  $(this).siblings('#item-context-menu').toggleClass('show');
});

// - board context menu
$(".board-row .icon-ellipsis").click(function(e){
  // event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-board-context-menu").addClass('show');
  $("#floating-board-context-menu").css({"left": (e.pageX), "top":(e.pageY)});
  console.log("yello board style");
});

// prevent link from loading when clicking the ellipsis/context menu on the link row
$('a.board-row').click(function(e, evt) {
  if($(e.target).is('.icon-ellipsis, .context-menu, .context-menu li')) {
    e.preventDefault();
    return;
  }
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
$('.btn-settings').on('click', function() {
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

//- notifications context menu
$('.btn-notifications').on('click', function() {
  $('#message-notifications-context-menu').removeClass('show');
  $('#notifications-context-menu').toggleClass('show');
});

//- messages context menu
$('.btn-message-notifications').on('click', function() {
  $('#notifications-context-menu').removeClass('show');
  $('#message-notifications-context-menu').toggleClass('show');
});

//- close context menu
$('.context-menu').click(function(e, evt) {
  if($(e.target).is('.toggle, form input, .context-menu .btn-view-option-container .btn-view-option, .context-menu .btn-view-option-container .btn-view-option .icon')) {
    // e.preventDefault();
    return;
  } else {
    $('.context-menu').removeClass('show');
  }
});

// floating item context menu
$(".file").contextmenu(function(e){
  $(this).addClass("selected");
  // $(this).children('.file-checkbox').removeClass('icon-tick-circle').addClass('icon-tick-circle-filled');
  $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1)").show();
  $("#floating-item-context-menu .block-ver-xxs:nth-of-type(2)").show();
  checkforhover();
  event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-item-context-menu").addClass('show');
  $("#floating-item-context-menu").css({"left": (e.pageX), "top":(e.pageY)});

  // Count number of items selected
  var myaccount = $('.file.selected').length;
    
  // if more than one file is selected, hide 'open'
  if(myaccount > 1) {
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1) span").text(myaccount + " items selected");
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(2)").hide();
  } else {
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1)").hide();
  }
});

// floating board context menu
$(".board-row").contextmenu(function(e){
  event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-board-context-menu").addClass('show');
  $("#floating-board-context-menu").css({"left": (e.pageX), "top":(e.pageY)});
});

// click anywhere on the screen to close the context menus and deselect all items
$('.files-row').click(function(e, evt) {
  $(".file").removeClass("selected");
  $('.file .file-checkbox').removeClass('icon-tick-circle-filled').addClass('icon-tick-circle');
  $(".context-menu").removeClass("show");
  $('.select-all').prop('checked', false);
  $("#floating-item-context-menu").removeClass("show");
  checkforhover();
});

$(".file").click(function(e) {
  e.stopPropagation();
  return false;
});


// ====================================================================================================
//  ____                      _    _____      _              _           _          _     
// |  _ \                    | |  / ____|    | |            | |         | |        | |    
// | |_) | ___   __ _ _ __ __| | | |     ___ | | ___  _ __  | |     __ _| |__   ___| |___ 
// |  _ < / _ \ / _` | '__/ _` | | |    / _ \| |/ _ \| '__| | |    / _` | '_ \ / _ \ / __|
// | |_) | (_) | (_| | | | (_| | | |___| (_) | | (_) | |    | |___| (_| | |_) |  __/ \__ \
// |____/ \___/ \__,_|_|  \__,_|  \_____\___/|_|\___/|_|    |______\__,_|_.__/ \___|_|___/
// ====================================================================================================

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


// ====================================================================================================
//   _____      _ _                    _                             _   
//  / ____|    | | |                  | |                           | |  
// | |     ___ | | | __ _  __ _  ___  | |     __ _ _   _  ___  _   _| |_ 
// | |    / _ \| | |/ _` |/ _` |/ _ \ | |    / _` | | | |/ _ \| | | | __|
// | |___| (_) | | | (_| | (_| |  __/ | |___| (_| | |_| | (_) | |_| | |_ 
//  \_____\___/|_|_|\__,_|\__, |\___| |______\__,_|\__, |\___/ \__,_|\__|
//                         __/ |                    __/ |                
//                        |___/                    |___/                 
// ====================================================================================================

function collage(height) {
  $('.collage').collagePlus({
    'allowPartialLastRow' : true,
    'fadeSpeed'           : 1000,
    'targetHeight'        : height
  });
};

collage(400);

var resizeTimer = null;
$(window).bind('resize', function() {
  // hide all the images until we resize them
  // set the element you are scaling i.e. the first child nodes of ```.Collage``` to opacity 0
  $('.collage .Image_Wrapper').css("opacity", 0);
  // set a timer to re-apply the plugin
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(collage, 200);
});


// ====================================================================================================
// __      ___                 _______ _ _         ____        _   _                 
// \ \    / (_)               |__   __(_) |       / __ \      | | (_)                
//  \ \  / / _  _____      __    | |   _| | ___  | |  | |_ __ | |_ _  ___  _ __  ___ 
//   \ \/ / | |/ _ \ \ /\ / /    | |  | | |/ _ \ | |  | | '_ \| __| |/ _ \| '_ \/ __|
//    \  /  | |  __/\ V  V /     | |  | | |  __/ | |__| | |_) | |_| | (_) | | | \__ \
//     \/   |_|\___| \_/\_/      |_|  |_|_|\___|  \____/| .__/ \__|_|\___/|_| |_|___/
//                                                      | |                          
//                                                      |_|                          
// ====================================================================================================

$('.btn-view-option-sm').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(240);
});

$('.btn-view-option-md').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(400);
});

$('.btn-view-option-lg').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(1000);
});

$('.btn-view-option-details').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').hide();
  $('.files-container .details-view').show();
});


// ====================================================================================================
//  _____                    _____ _                   _                  
// |  __ \                  / ____| |                 | |                 
// | |__) |_ _  __ _  ___  | (___ | |_ _ __ _   _  ___| |_ _   _ _ __ ___ 
// |  ___/ _` |/ _` |/ _ \  \___ \| __| '__| | | |/ __| __| | | | '__/ _ \
// | |  | (_| | (_| |  __/  ____) | |_| |  | |_| | (__| |_| |_| | | |  __/
// |_|   \__,_|\__, |\___| |_____/ \__|_|   \__,_|\___|\__|\__,_|_|  \___|
//              __/ |                                                     
//             |___/                                                      
// ====================================================================================================

//- left-side panel
$('.btn-left-side-panel').on('click', function() {
  $('.page-content').toggleClass('show-left-side-panel');
});

// left side panel accordion
accordion = function(name) {
  $('.left-side-panel .accordion-btn-' + name).on('click', function() {
    $(this).toggleClass('closed')
    $('.accordion-content-' + name).toggle();
  });
}

accordion('messages');
accordion('favourites');
accordion('my-boards');
accordion('shared-boards');
accordion('trash');

//- image library left-side tabs
$('#tab-filters').on('click', function() {
  $(this).addClass('active');
  $('#tab-folders').removeClass('active');
  $('.image-library-view .left-side-panel').addClass('image-library-filters-active').removeClass('image-library-folders-active');
});

$('#tab-folders').on('click', function() {
  $(this).addClass('active');
  $('#tab-filters').removeClass('active');
  $('.filter').removeClass('show');
  $('.filter-btn').removeClass('active');
  $('.image-library-view .left-side-panel').addClass('image-library-folders-active').removeClass('image-library-filters-active');
});

//- comments panel
$('.btn-comments').on('click', function() {
  $('.page-content').toggleClass('show-comments-panel');
  $('.btn-comments').toggleClass('active');
  $('.btn-back-to-top').toggleClass('show-comments-panel');
});

// board preview
$('.board-preview').on('click', function() {
  $(this).toggleClass('closed open');
  $('.panel-folders').toggleClass('board-preview-open');
})

//- filter row expand/condense
$('.btn-filter-row-expand').on('click', function() {
  $('.filter-row').toggleClass('condensed expanded');
});

$('.btn-filter-row-delete').on('click', function() {
  $('.filter-row').remove();
  $('.btn-filter-row-fixed').remove();
});

$('.filter-tag .icon-cross').on('click', function() {
  $(this).parent().remove();
}); 


// ====================================================================================================
//  ______ _ _ _                
// |  ____(_) | |               
// | |__   _| | |_ ___ _ __ ___ 
// |  __| | | | __/ _ \ '__/ __|
// | |    | | | ||  __/ |  \__ \
// |_|    |_|_|\__\___|_|  |___/
// ====================================================================================================

openFilter = function(filtername) {
  $('#filter-btn-' + filtername).on('click', function() {
    if($(this).hasClass('active')) {
      $('.filter').removeClass('show');
      $('.filter-btn').removeClass('active');
      $('.right-side-panel').removeClass('has-file-selected has-multiple-files-selected');
      $('.file').removeClass('selected');
      // $('.file-checkbox').addClass('icon-tick-circle').removeClass('icon-tick-circle-filled');
    } else {
      $('.filter').removeClass('show');
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      $('#filter-'+ filtername).addClass('show');
      $('.right-side-panel').removeClass('has-file-selected has-multiple-files-selected');
      $('.file').removeClass('selected');
      // $('.file-checkbox').addClass('icon-tick-circle').removeClass('icon-tick-circle-filled');
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
openFilter("brand");
openFilter("city");
openFilter("season");
openFilter("colour");
openFilter("prints");
openFilter("fabric");


// ====================================================================================================
//  __  __           _       _     
// |  \/  |         | |     | |    
// | \  / | ___   __| | __ _| |___ 
// | |\/| |/ _ \ / _` |/ _` | / __|
// | |  | | (_) | (_| | (_| | \__ \
// |_|  |_|\___/ \__,_|\__,_|_|___/
// ====================================================================================================

downloadTimer = function(){
  $('#download-modal').removeClass('show minimise');
};

openModal = function(modalname) {
  $('.btn-' + modalname).on('click', function() {
    if(modalname != 'download') {
      $('.overlay').addClass('show');
    }

    $('#' + modalname + '-modal').addClass('show');

    setTimeout(function() {
      downloadTimer();
    }, 5000);

    var myaccount = $('.file.selected').length;

    if (myaccount > 1) {
      $('#add-to-board-modal').addClass('add-multiple-files');
      $('.num-of-files').text(myaccount + ' images');
      console.log(myaccount + ' helllooo')
    } else {
      return;
    }

  });
};

openModal('share');
openModal('add-to-board');
openModal('copy');
openModal('move');
openModal('download');
openModal('send');
openModal('print');
openModal('create-new-board');
openModal('duplicate-board');
openModal('rename-board');
openModal('save-search');

//- close modal
$('.modal .close-modal').on('click', function() {
  if($('#item-detail-modal').hasClass('show')) {
    $(this).parentsUntil('body').removeClass('show');  
    $('.modal-overlay').removeClass('show');
    $('.btn-modal-tool').removeClass('active');
  } else {
    $(this).parentsUntil('body').removeClass('show');
    $('.overlay').removeClass('show');
  }
});

//- minimise modal
$('.modal .minimise-modal').on('click', function() {
  $(this).parentsUntil('body').toggleClass('minimise');
});

// close modal with escape key
$(document).keyup(function(e) { 
  if (e.keyCode == 27) { 
    $('.modal').removeClass('show');
    $('#item-detail-modal').removeClass('fullscreen');
    $('.overlay').removeClass('show');
  } 
});

// print modal layout options
$('.print-layout-tile').on('click', function() {
  $('.print-layout-tile').removeClass('active');
  $(this).addClass('active');
})


// ====================================================================================================
//  _____ _                   _____       _        _ _   __  __           _       _ 
// |_   _| |                 |  __ \     | |      (_) | |  \/  |         | |     | |
//   | | | |_ ___ _ __ ___   | |  | | ___| |_ __ _ _| | | \  / | ___   __| | __ _| |
//   | | | __/ _ \ '_ ` _ \  | |  | |/ _ \ __/ _` | | | | |\/| |/ _ \ / _` |/ _` | |
//  _| |_| ||  __/ | | | | | | |__| |  __/ || (_| | | | | |  | | (_) | (_| | (_| | |
// |_____|\__\___|_| |_| |_| |_____/ \___|\__\__,_|_|_| |_|  |_|\___/ \__,_|\__,_|_|                                                                                  
// ====================================================================================================

$('.btn-open').on('click', function() {
  $('.overlay').addClass('show');
  $('#item-detail-modal').addClass('show');
  
  // show actual selected image in the modal
  var selectedImg = $(this).parentsUntil('.collage').find('img').prop('src');
  $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});

  // file type
  if ($(this).parentsUntil('.collage').hasClass('file-type-image')) {
    $('#item-detail-modal').addClass('file-type-image');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-report')) {
    $('#item-detail-modal').addClass('file-type-report');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-video')) {
    $('#item-detail-modal').addClass('file-type-video');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-color-card')) {
    $('#item-detail-modal').addClass('file-type-color-card');
  }
});

// close item detail modal
$('#item-detail-modal .close-modal').on('click', function() {
  $(this).parentsUntil('body').removeClass('show');
  $('.overlay').removeClass('show');
  $('#item-detail-modal .modal-image-panel .img').css({"background-image": "none"});
  $('#item-detail-modal').removeClass('file-type-image').removeClass('file-type-report').removeClass('file-type-video').removeClass('file-type-color-card');
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

// fullscreen
$('.btn-fullscreen').on('click', function() {
  $('#item-detail-modal').addClass('fullscreen');
  $('#item-detail-modal').fullScreen(true);
});

$('.btn-close-fullscreen').on('click', function() {
  $('#item-detail-modal').removeClass('fullscreen');
  $('#item-detail-modal').fullScreen(false);
});

// add to board
$('#item-detail-modal .btn-add-to-board').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});

// send
$('#item-detail-modal .btn-send').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});

// print
$('#item-detail-modal .btn-print').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});


// ====================================================================================================
//  _______            _      _     _   
// |__   __|          | |    (_)   | |  
//    | | __ _  __ _  | |     _ ___| |_ 
//    | |/ _` |/ _` | | |    | / __| __|
//    | | (_| | (_| | | |____| \__ \ |_ 
//    |_|\__,_|\__, | |______|_|___/\__|
//              __/ |                   
//             |___/                    
// ====================================================================================================

$(document).ready(function() {
  $("#myTags").tagit({
    availableTags: [
      "Amelia Lewis",
      "Anna Glassman",
      "Julian Ramirez",
      "Sansan Chen",
      "Nicky Ashwell",
      "Hema Sivaram",
      "Sarah Freiser",
      "Andrew Harris",
      "Oleg Zolotnisky",
      "Peter Morrison",
      "Pathik Tanna",
      "Pedro Santos",
      "Hans Zhou",
      "Eugene Grabov",
      "Can Citak",
      "Vincent Pantano",
      "Hai Zheng",
      "Ahmed Radwan",
      "Parisa Vahdatinia",
      "Manu Paka",
      "Malaya Mallick",
      "Dani Miga",
      "Steve Weiss",
      "Igor Pokryshevskiy",
      "Alex Shishkevich",
      "Deepa Kini",
      "Robert Conn",
      "Deepa Bhat",
      "Aleksey Mezhva",
      "Samuel Elliott"
    ],
    autocomplete: {delay: 0, minLength: 0},
    // showAutocompleteOnFocus: true,
    removeConfirmation: true,
    placeholderText: "Recipients"
  });
});


// ====================================================================================================
//  ____             _      _          _______          
// |  _ \           | |    | |        |__   __|         
// | |_) | __ _  ___| | __ | |_ ___      | | ___  _ __  
// |  _ < / _` |/ __| |/ / | __/ _ \     | |/ _ \| '_ \ 
// | |_) | (_| | (__|   <  | || (_) |    | | (_) | |_) |
// |____/ \__,_|\___|_|\_\  \__\___/     |_|\___/| .__/ 
//                                               | |    
//                                               |_|    
// ====================================================================================================

$(document).ready(function() {
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

// moveBacktotop = function() {
//   if($('.right-side-panel').hasClass('has-file-selected')) {
//     console.log("hello");
//     $('.btn-back-to-top').css({transform: "translate3d(0, -30px, 0);"})
//   } else {
//     $('.btn-back-to-top').css({transform: "translate3d(0, 0, 0);"})
//   };
// };

// moveBacktotop();


// ====================================================================================================
//  ______ _ _ _              _____               
// |  ____(_) | |            |  __ \              
// | |__   _| | |_ ___ _ __  | |__) |_____      __
// |  __| | | | __/ _ \ '__| |  _  // _ \ \ /\ / /
// | |    | | | ||  __/ |    | | \ \ (_) \ V  V / 
// |_|    |_|_|\__\___|_|    |_|  \_\___/ \_/\_/  
// ====================================================================================================

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


// ====================================================================================================
//  __  __                                     
// |  \/  |                                    
// | \  / | ___  ___ ___  __ _  __ _  ___  ___ 
// | |\/| |/ _ \/ __/ __|/ _` |/ _` |/ _ \/ __|
// | |  | |  __/\__ \__ \ (_| | (_| |  __/\__ \
// |_|  |_|\___||___/___/\__,_|\__, |\___||___/
//                              __/ |          
//                             |___/           
// ====================================================================================================

$('.message-preview').click(function(e, evt) {
  if($(e.target).is('.btn-send, .btn-delete-message')) {
    // e.preventDefault();
    return;
  } else {
    $(this).parentsUntil('.messages-row').toggleClass('message-closed message-open');

    var height = $(this).siblings('.message-content-container').find('.message-content').height();

    if ($(this).parentsUntil('.messages-row').hasClass('message-open')) {
      $(this).siblings('.message-content-container').css({height: height + "px"})
    } else {
      $(this).siblings('.message-content-container').css({height: "0px"})
    }
  }
});

$('.btn-delete-message').on('click', function() {
  $(this).parentsUntil('.messages-row').remove();
});


// ====================================================================================================
//  _                       _                     _ 
// | |                     | |                   | |
// | |     __ _ _____   _  | |     ___   __ _  __| |
// | |    / _` |_  / | | | | |    / _ \ / _` |/ _` |
// | |___| (_| |/ /| |_| | | |___| (_) | (_| | (_| |
// |______\__,_/___|\__, | |______\___/ \__,_|\__,_|
//                   __/ |                          
//                  |___/                           
// ====================================================================================================

// disbled because it doesn't work with the collage layout

// $(function() {
//   $("img.lazy").lazyload();
// });