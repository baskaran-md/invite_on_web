"use strict";

//show password
jQuery(document).ready(function(){
    jQuery("#pw").focus(function(){
        this.type = "text";
    }).blur(function(){
        this.type = "password";
    })   
});

//Search In Button
jQuery('#SignIn').on('click', function(){
  jQuery('.login').show();
  jQuery('#lightbox').fadeIn('slow');
});

//close
jQuery('#close').on('click', function(){
  jQuery('.login').hide('fast');
  jQuery('#lightbox').fadeOut('slow');
});

//Placeholder fixed for Internet Explorer
jQuery(function() {
	var input = document.createElement("input");
	if(('placeholder' in input)==false) { 
		jQuery('[placeholder]').focus(function() {
			var i = jQuery(this);
			if(i.val() == i.attr('placeholder')) {
				i.val('').removeClass('placeholder');
				if(i.hasClass('password')) {
					i.removeClass('password');
					this.type='password';
				}			
			}
		}).blur(function() {
			var i = jQuery(this);	
			if(i.val() == '' || i.val() == i.attr('placeholder')) {
				if(this.type=='password') {
					i.addClass('password');
					this.type='text';
				}
				i.addClass('placeholder').val(i.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			jQuery(this).find('[placeholder]').each(function() {
				var i = jQuery(this);
				if(i.val() == i.attr('placeholder'))
					i.val('');
			})
		});
	}
});
