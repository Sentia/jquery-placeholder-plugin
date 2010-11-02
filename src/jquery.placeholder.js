(function($){
  
  $.fn.placeholder = function(options) {
    
    var settings = $.extend({
      attribute: 'placeholder'
    },options||{});
    
    var placeholder_text = $(this).attr('data-' + settings.attribute);
    // Setup the placeholder
    if ($(this).val() === ''){
      $(this).val(placeholder_text);
      $(this).addClass('placeholder-input');
    }

    $(this).focus(function(){
      if ($(this).val() === placeholder_text) {
        $(this).val('');
        $(this).removeClass('placeholder-input');
      }
    });
    
    $(this).blur(function(){
      if ($(this).val() === '' ) {
        $(this).val(placeholder_text);
        $(this).addClass('placeholder-input');
      }
    });
  }
})(jQuery);