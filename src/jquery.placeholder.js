(function($){

  $.fn.placeholder = function(options) {

    var settings = $.extend({
      attribute: 'placeholder',
      color: null
    },options||{});

    var placeholder_text = $(this).attr('data-' + settings.attribute);
    // Setup the placeholder
    if ($(this).val() === ''){
      $(this).val(placeholder_text);
      $(this).addClass('placeholder-input');
      if(settings.color != null){ $(this).css('color', settings.color); }
    }

    $(this).focus(function(){
      if ($(this).val() === placeholder_text) {
        $(this).val('');
        $(this).removeClass('placeholder-input');
        if(settings.color){ $(this).css('color', ''); }
      }
    });

    $(this).blur(function(){
      if ($(this).val() === '' ) {
        $(this).val(placeholder_text);
        $(this).addClass('placeholder-input')
        if(settings.color != null){ $(this).css('color', settings.color); }
      }
    });
  }
})(jQuery);