$(window).load(function(){

    $('.checkboxRelease').prop('checked', true);

    $('.main-menu li, .main-menu-burger li').on('click', function(){
        $('.main-menu li, .main-menu-burger li').removeClass('menuActive');
        $(this).addClass('menuActive');
    });

    //----------------Burger Menu Click
    $(".burger-menu").click(function () {
	    $(this).toggleClass("active");
        $('.main-menu-burger').toggle("slide, 200");
        if($(".burger-menu").hasClass("active")) {
            $('.overlay').fadeIn();
        } else {
            $('.overlay').fadeOut();
        }

	});
    //----------------Burger Menu Click End

    $('.overlay').click(function(){
		$('.overlay').fadeOut();
        $(".burger-menu").removeClass("active");
        $('.main-menu-burger').toggle("slide, 0");

	});

//--------------------Chart Elements show/hide

    $('.inTable').on('change', function(){
        if(this.checked) {
            $("#chartNew").contents().find(".table-look").fadeIn('slow');
        }else{
            $("#chartNew").contents().find(".table-look").fadeOut('slow');
        }
    });
    $('.inNews').on('change', function(){
        if(this.checked) {
            $("#chartNew").contents().find(".highcharts-markers.highcharts-tracker").fadeIn('slow');
        }else{
            $("#chartNew").contents().find(".highcharts-markers.highcharts-tracker").fadeOut('slow');
        }
    });
    $('.inCurrency').on('change',function(){
       if(this.checked) {
           $('#chartNew').contents().find('.IRChartCCHeader').fadeIn('slow');
       }else{
           $('#chartNew').contents().find('.IRChartCCHeader').fadeOut('slow');
       }
    });
    $('.inDividend').on('change',function(){
       if(this.checked) {
           $('#chartNew').contents().find('.IRChartTSRHeader').fadeIn('slow');
       }else{
           $('#chartNew').contents().find('.IRChartTSRHeader').fadeOut('slow');
       }
    });
    $('.inTech').on('change',function(){
       if(this.checked) {
           $('#chartNew').contents().find('.IRChartTAHeader').fadeIn('slow');
       }else{
           $('#chartNew').contents().find('.IRChartTAHeader').fadeOut('slow');
       }
    });
    $('.inCompar').on('change',function(){
       if(this.checked) {
           $('#chartNew').contents().find('.IRChartComparisonHeader').fadeIn('slow');
       }else{
           $('#chartNew').contents().find('.IRChartComparisonHeader').fadeOut('slow');
       }
    });
    $('.inSettings').on('change',function(){
       if(this.checked) {
           $('#chartNew').contents().find('.IRChartSettingsHeader').fadeIn('slow');
       }else{
           $('#chartNew').contents().find('.IRChartSettingsHeader').fadeOut('slow');
       }
    });
    $('.inFullScreen').on('change',function(){
        if(this.checked) {
            $('#chartNew').contents().find('.IRChartFullscreen').fadeIn('slow');
        }else{
            $('#chartNew').contents().find('.IRChartFullscreen').fadeOut('slow');
        }
     });

    //----------------------------Chart Elements Shoe/Hide End
    
    //----------------------------Trades Elements Show/Hide
    
    $('.inTrades').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.column-first.trade").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.timestampFull.column-first").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.column-first.trade").css('display','none');
            $(".trades-iframe").contents().find(".Data.timestampFull.column-first").fadeOut('slow');
        }

    });
    
    $('.inTime').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.updated").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.updated").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.updated").css('display','none');
            $(".trades-iframe").contents().find(".Data.updated").fadeOut('slow');
        }
    });
    $('.inPrice').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.price").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.price").fadeIn('slow');
            
        }else{
            $(".trades-iframe").contents().find(".Header.price").css('display','none');
            $(".trades-iframe").contents().find(".Data.price").fadeOut('slow');
            
        }
    });
    $('.inVolume').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.volume").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.volume").fadeIn('slow');
            
        }else{
            $(".trades-iframe").contents().find(".Header.volume").css('display','none');
            $(".trades-iframe").contents().find(".Data.volume").fadeOut('slow');
            
        }
    });
    $('.inBid').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.bid").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.bid").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.bid").css('display','none');
            $(".trades-iframe").contents().find(".Data.bid").fadeOut('slow');
        }
    });
    $('.inAsk').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.ask").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.ask").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.ask").css('display','none');
            $(".trades-iframe").contents().find(".Data.ask").fadeOut('slow');
        }
    });
    $('.inChange').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.change").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.change").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.change").css('display','none');
            $(".trades-iframe").contents().find(".Data.change").fadeOut('slow');
        }
    });
    $('.inChangePerc').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.changePercent").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.changePercent").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.changePercent").css('display','none');
            $(".trades-iframe").contents().find(".Data.changePercent").fadeOut('slow');
        }
    });
    $('.inValue').on('change', function(){
        if(this.checked) {
            $(".trades-iframe").contents().find(".Header.value").css('display','table-cell');
            $(".trades-iframe").contents().find(".Data.value").fadeIn('slow');
        }else{
            $(".trades-iframe").contents().find(".Header.value").css('display','none');
            $(".trades-iframe").contents().find(".Data.value").fadeOut('slow');
        }
    });        
    //----------------------------Trades Elements Show/Hide End


    //----------------------------Dropdown Menu
    var CheckboxDropdown = function(el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find('.dropdown-label');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.onCheckBox();

    this.$label.on('click', function(e) {
      e.preventDefault();
      _this.toggleOpen();
    });

    this.$inputs.on('change', function(e) {
      _this.onCheckBox();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function() {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function() {
    var checked = this.$el.find(':checked');

    this.areAllChecked = false;


    if(checked.length <= 0) {
      this.$label.html('Features Options');
    }
    else if(checked.length === 1) {
      this.$label.html(checked.parent('label').text());
    }
    else if(checked.length === this.$inputs.length) {
      this.areAllChecked = true;
    } else {
      this.$label.html(checked.length + ' Selected');
    }
  };


  CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
    var _this = this;

    if(!this.isOpen || forceOpen) {
       this.isOpen = true;
       this.$el.addClass('on');
      $(document).on('click', function(e) {
        if(!$(e.target).closest('[data-control]').length) {
         _this.toggleOpen();
        }
      });
    }
    else {
      this.isOpen = false;
      this.$el.removeClass('on');
      $(document).off('click');
    }
  };

  var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
  for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
    //----------------------------Dropdown Menu End

    //----------------------------Calculator Buttons

    $('.calcBtn').on('click', function(){
        $('.calcBtn').removeClass('activeBtn');
        $(this).addClass('activeBtn');
    });

    $('.calcBtn-1').on('click', function(){
        $('.calc-iframe-1').contents().find('.customCalcModuleWrapper, .IRChartCalcPlaceholder').removeClass('horizontalLayout');
//            $('.calc-iframe-1')[0].contentWindow.$('head').find('link[rel=stylesheet][href~="ir.client-2.css"]').remove();
//            $('.calc-iframe-1').contents().find('head').append('<link rel="stylesheet" type="text/css" media="screen" href="ir.client.css"/>');
    });
    $('.calcBtn-2').on('click', function(){
        $('.calc-iframe-1').contents().find('.customCalcModuleWrapper, .IRChartCalcPlaceholder').addClass('horizontalLayout');
//        $('.calc-iframe-1')[0].contentWindow.$('head').find('link[rel=stylesheet][href~="ir.client.css"]').remove();
//        $('.calc-iframe-1').contents().find('head').append('<link rel="stylesheet" type="text/css" media="screen" href="ir.client-2.css"/>');
    });
    //---------------------------- End Calculator Buttons

    //----------------------------Calculator Checkboxes
    $('.inList').on('change', function(){
        if(this.checked) {
            $('#calculator').contents().find('.IRCalcModule .customCalcModuleWrapper .calc-form').find('.formDivider').first().find('.input-row').first().fadeIn('slow');
       }else{
           $('#calculator').contents().find('.IRCalcModule .customCalcModuleWrapper .calc-form').find('.formDivider').first().find('.input-row').first().fadeOut('slow');
        }
    });
    $('.inDividend').on('change', function(){
        if(this.checked) {
            $('#calculator').contents().find('.IRCalcModule .customCalcModuleWrapper .calc-form .formDivider .input-row:nth-child(3)').fadeIn('slow');
       }else{
           $('#calculator').contents().find('.IRCalcModule .customCalcModuleWrapper .calc-form .formDivider .input-row:nth-child(3)').fadeOut('slow');
        }
    });
    //----------------------------End Calculator Checkboxes

    //----------------------------Lookup Buttons
    $('.lookupBtn-1').on('click', function(){
        $('#lookup').contents().find('#lookup-table-form, .IRLookupResultsTable.table-look.horizontal.responsive').css('display', 'none');
        $('#lookup').contents().find('.IRChartLookupPlaceholder, .lookup-form').css('display', 'block');
        $('#lookup-div label').css('display', 'inline-block');
    });
    $('.lookupBtn-2').on('click', function(){
        $('#lookup').contents().find('.IRChartLookupPlaceholder, .lookup-form').css('display', 'none');
        $('#lookup').contents().find('#lookup-table-form, .IRLookupResultsTable.table-look.horizontal.responsive').css('display', 'inline-table');
        $('#lookup-div label').css('display', 'none');
    });
    //----------------------------End Lookup Buttons

    //----------------------------Lookup Checkboxes
    $('.lookupBtn').on('click', function(){
        $('.lookupBtn').removeClass('activeBtn');
        $(this).addClass('activeBtn');
    });


    $('.inChartCheckbox').on('change', function(){
        if(this.checked) {
            $('#lookup').contents().find('.IRChartLookupPlaceholder').fadeIn('slow');
       }else{
           $('#lookup').contents().find('.IRChartLookupPlaceholder').fadeOut('slow');
        }
    });
    $('.inListCheckbox').on('change', function(){
        if(this.checked) {
            $('#lookup').contents().find('.IRLookupModule .lookup-form').find('.formDivider').first().find('.input-row').first().fadeIn('slow');
       }else{
           $('#lookup').contents().find('.IRLookupModule .lookup-form').find('.formDivider').first().find('.input-row').first().fadeOut('slow');
        }
    });


    //----------------------------End Lookup Checkboxes

    //----------------------------News Checkboxes
    $('.inCat').on('change', function(){
        if(this.checked) {
            $('#news').contents().find('.news-filter-box').fadeIn('slow');
       }else{
           $('#news').contents().find('.news-filter-box').fadeOut('slow');
        }
    });
    $('.inSearch').on('change', function(){
        if(this.checked) {
            $('#news').contents().find('.search-filter-wrapper.row').fadeIn('slow');
       }else{
           $('#news').contents().find('.search-filter-wrapper.row').fadeOut('slow');
        }
    });
    $('.inDatePicker').on('change', function(){
        if(this.checked) {
            $('#news').contents().find('.datepicker.row').fadeIn('slow');
       }else{
           $('#news').contents().find('.datepicker.row').fadeOut('slow');
        }
    });

    $('.inCat, .inSearch, .inDatePicker').on('change', function(){

        var boxhecked = $('.inCat:checked, .inSearch:checked, .inDatePicker:checked').length;
        console.log(boxhecked);
        if($(boxhecked).length == 0){
            console.log("legchecked is Zero");
            $('#news').contents().find('.submitButton').fadeOut('slow');
        } else {
            $('#news').contents().find('.submitButton').fadeIn('slow');
        }

    });

    $('.inPdf').on('change', function(){
        if(this.checked) {
            $('#news').contents().find('.IRHeader.column-last.file-type, .IRData.IRDownload').fadeIn('slow');
            $('#news').contents().find('.IRTitle.IRHeader').css('border-right', '1px solid #fff');
            $('#news').contents().find('.IRHeader.IRDate.column-first, .IRData').css('width', '24%');
            $('#news').contents().find('.IRData.IRTitle').css('width', '51%');
       }else{

           $('#news').contents().find('.IRTitle.IRHeader').css('border-right', 'none');


           $('#news').contents().find('.IRHeader.column-last.file-type, .IRData.IRDownload').fadeOut('slow');
        }
    });

    //----------------------------End News Checkboxes

    //---------------------------- Miniquote Checkboxes
    $('.checkboxRelease').prop('checked', true);
    $(".miniquoteSmall, .miniquoteMedium, .miniquoteLarge").css('display', 'inline-block');
    $('.inSmall').on('click', function(){
        if(this.checked) {
            $(".miniquoteSmall").fadeIn('slow');
        }else{
            $(".miniquoteSmall").fadeOut('slow');
        }
    });
    $('.inMedium').on('click', function(){
        if(this.checked) {
            $(".miniquoteMedium").fadeIn('slow');
        }else{
            $(".miniquoteMedium").fadeOut('slow');
        }
    });
    $('.inLarge').on('click', function(){
        if(this.checked) {
            $(".miniquoteLarge").fadeIn('slow');
        }else{
            $(".miniquoteLarge").fadeOut('slow');
        }
    });

    $(".miniquoteCont .imgBox").on("click", function() {
        $(".zoomImageBoxOverflow").fadeIn("fast");
        $(this).closest(".box").find(".zoomImageBox").fadeIn("fast");
    })
    $(".zoomImageBox .close-button-zoom, .zoomImageBoxOverflow").on("click", function() {
        $(".zoomImageBoxOverflow").fadeOut("fast");
        $(".zoomImageBox").fadeOut("fast");
    })


    //---------------------------- End Miniquote Checkboxes



}); // End Ready
