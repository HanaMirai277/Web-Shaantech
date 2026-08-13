 /* document ready */
 $(document).ready(function() {

 	/* LANGUAGE */
 	
 	/* SELECT2 GLOBAL */
 	$('.select-mjk').select2({
 		minimumResultsForSearch: Infinity,
 		// dropdownParent: $('.select-mjk-box'),
 		placeholder: function(){
 			$(this).data('placeholder');
 		}
 	});

 	/* SELECT2 GLOBAL WITH SEARCH ACTIVED */
 	$('.select-mjk-search-active').select2({
 		minimumResultsForSearch: 3
 	});

 	/* SELECT2 DROPDOWN COLOR HEX */
 	function formatColor(value) {
	    if (!value.id) return value.text; // to exclude optgroups
	    return "<strong class='color-preview-hex "+ value.id +"'></strong>" + value.text;
	}
	$(".select-color-hex").select2({
		templateResult: formatColor,
		templateSelection: formatColor,
		escapeMarkup: function(m) { return m; }
	});


	/* SELECT2 DROPDOWN COLOR IMAGE */
	function formatColorImage (color) {
		if (!color.id) { return color.text; }

		var baseUrl = "./themes/images/icons/";
		var $color = $(
			'<span><img src="' + baseUrl + '/' + color.element.value.toLowerCase() + '.png" class="product-color" /> ' + color.text + '</span>'
			);

		return $color;
	};

	$(".select-color-img").select2({
		templateResult: formatColorImage,
		templateSelection: formatColorImage
	});


	/* SELECT2 DROPDOWN LANGUAGE */
	function formatState (state) {
		if (!state.id) { return state.text; }


		var baseUrl = "./themes/images/icons/";
		var $state = $(
			'<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flags" /> ' + state.text + '</span>'
			);

		return $state;
	};

	$(".select-language-img").select2({
		templateResult: formatState,
		templateSelection: formatState,
		minimumResultsForSearch: Infinity
	});


	/* SELECT2 DROPDOWN LANGUAGE WITH FLAGICON.CSS */

	function format(item, state) {
		if (!item.id) {
			return item.text;
		}
		var countryUrl = "https://imajiku.com/themes/front/default/images/global/";
		var stateUrl = "https://imajiku.com/themes/front/default/images/global/";
		var url = state ? stateUrl : countryUrl;
		var img = $("<img>", {
			class: "img-flag",
			src: url + item.element.dataset.capital +'.png'
		});
		var div = $("<div>", {
			text: "" + item.text
		});
		div.prepend(img);
		return div;
	}

	$("#countries").select2({
		templateResult: function(item) {
			return format(item, false);
		},
		templateSelection: function(item) {
			return format(item, false);
		},
		minimumResultsForSearch: Infinity,
		dropdownCssClass:"dropdown-language"
	});

	$("#countries_mobile").select2({
		templateResult: function(item) {
			return format(item, false);
		},
		templateSelection: function(item) {
			return format(item, false);
		},
		minimumResultsForSearch: Infinity,
		dropdownCssClass:"dropdown-language"
	});



	/* starting date survey */
	$('.startingdate').daterangepicker({    	
		parentEl:'#startingdatepicker',
		singleDatePicker: false,
		showDropdowns: true,
		drops: "auto"
	});

	/* starting date survey add placeholder*/
	$('.startingdate').val('');
	$('.startingdate').attr("placeholder","Select Date");


	/* FILTER SELECT VALUE WITH SHOW CONTENT */
	$('#sort-mydata').change(function(){
		$(this).parents().find('.show-mytitle').addClass('d-none');
		$('#' + $(this).val()).removeClass('d-none');
	});


	/* UPLOAD PHOTO or IMAGE */
	function fuploadphoto(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$('#thisuphoto').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#uphoto").change(function() {
		fuploadphoto(this);
	});

	/* init input type files ( upload ) */
	bsCustomFileInput.init();

	/* FORM DATE */
	$('.datepicker').datepicker({
		format: "dd/mm/yyyy",
		autoclose: true, 
		todayHighlight: true
	});
	$('.forbirthday').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		maxDate: moment().endOf("day")
	});


	/* FILTER SELECT VALUE WITH SHOW CONTENT */
	$('#sort-mydata').change(function(){
		$(this).parents().find('.show-mytitle').addClass('d-none');
		$('#' + $(this).val()).removeClass('d-none');
	});

	$('#sort-mydata').change(function(){
		$(this).parents().find('.show-mycontent').addClass('d-none');
		$('.' + $(this).val()).removeClass('d-none');
	});

	/* ONLY NUMERIC */
	$(".only-numeric").bind("keypress", function (e) {
		var keyCode = e.which ? e.which : e.keyCode
		if (!(keyCode >= 48 && keyCode <= 57)) {
			$();
			return false;
		}else{
			$();
		}
	});

	/* RADIO/CHECKBOX VALUE WITH SHOW NEW INPUT TEXT */
	$("#form-input-other").css("display","none"); 
	$(".custom-control-input").click(function(){ 
		if ($("input[name='radio_input']:checked").val() == "valother" ) { 
			$("#form-input-other").slideDown("fast"); 
		} else {
			$("#form-input-other").slideUp("fast"); 
		}
	});

	/* RADIO/CHECKBOX CHOICE WHEN ANY INPUT DISABLED */
	$('input[name="radio_spesific"]').on("change", function () {
		if ($(this).prop("checked") && $(this).val() != 2) 
			$('#choice-spesific [name="select_spesific"]').prop("disabled", true);
		else 
			$('#choice-spesific [name="select_spesific"]').prop("disabled", false);
	});

	/* FORM VALIDATION */
	$("#form-login").validate({
		rules: {
			email: {
				required: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-login-checkout").validate({
		rules: {
			email: {
				required: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-forgot-password").validate({
		rules: {
			email: {
				required: true
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-register").validate({
		rules: {
			email: {
				required: true
			},
			verification: {
				required: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-reset-password").validate({
		rules: {
			password_new: {
				required: true,
				minlength: 5
			},
			password_retype: {
				required: true,
				minlength: 5,
				equalTo: '[name="password_new"]'
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-voucherapply").validate({
		rules: {
			voucherapply: {
				required: false,
				minlength: 3
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-profile-edit").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			gender: {
				required: true
			},
			birthday: {
				required: true
			},
			email: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-profile-password").validate({
		rules: {
			password: {
				required: true,
				minlength: 5
			},
			password_new: {
				required: true,
				minlength: 5
			},
			password_retype: {
				required: true,
				minlength: 5,
				equalTo: '[name="password_new"]'
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-address-add").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			address: {
				required: true
			},
			province: {
				required: true
			},
			city: {
				required: true
			},
			sub_district: {
				required: true
			},
			pos_code: {
				required: true,
				number: true,
				minlength: 4
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	$("#form-address-edit").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			address: {
				required: true
			},
			province: {
				required: true
			},
			city: {
				required: true
			},
			sub_district: {
				required: true
			},
			pos_code: {
				required: true,
				number: true,
				minlength: 4
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});

	/* form pilih alamat */
	$("#form-address-choose").validate({
		rules: {
			address_choose: {
				required: true
			}
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.parent().append(label);
		}
	});


	/*form karir detail*/ 
	$("#form-career").validate({
		rules: {
			name_first: {
				required: true
			},
			name_last: {
				required: true
			},
			email: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			},
			resume: {
				required: true,
			}
		},
		submitHandler: function(form) {		
			form.submit();    
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.closest('.form-group-mjk').append(label);
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(validClass).removeClass(errorClass);
		}
	});

	$('.custom-file-input').on('change', function() { 
		$(this).valid(); 
	});

	$('#querytype').on('change', function() { 
		$(this).valid(); 
	});

	/*form contact*/ 
	$("#form-contact").validate({
		rules: {
			email: {
				required: true
			}
		},
		submitHandler: function(form) {
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.closest('.form-group-mjk').append(label);
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(validClass).removeClass(errorClass);
		}
	});


	$("#form-spar").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			company: {
				required: true
			}
		},
		submitHandler: function(form) { 			
			form.submit();
		},
		errorPlacement: function(label, element) {
			label.addClass('error');
			element.closest('.form-group-mjk').append(label);
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group-mjk').addClass(validClass).removeClass(errorClass);
		}
	});

});