(function(c){c.fn.tickerFreez=function(){return this.each(function(){c(this).attr("tickerTimer")?clearTimeout(c(this).attr("tickerTimer")):clearTimeout(c(c(this).children().get(0)).attr("tickerTimer"))})};c.fn.tickerScroll=function(){return this.each(function(){var b=c(this);b.attr("tickerHeight")||(b=c(b.children().get(0)));b.scrollTop()<b.attr("tickerHeight")?b.scrollTop(b.scrollTop()+1):b.scrollTop(1);b.attr("tickerTimer",setTimeout('$("#'+this.id+'").tickerScroll();',b.attr("tickerSpeed")))})};
c.fn.ticker=function(b,h,g){return this.each(function(){var a=c(this);a.css("overflow","hidden");if(g){var d=a.width(),e=a.css("padding-left"),f=a.css("padding-right");a.css({"padding-left":"0","padding-right":"0"});a.width(a.width());nC=c("<div></div>");nC.height("100%");nC.width(d);nC.html(a.html());nC.appendTo(a.html(""));a=nC;a.css({"overflow-y":"scroll","overflow-x":"hidden"})}d=c("<div></div>");d.css({overflow:"hidden",zoom:"1"});d.html(a.html());d.appendTo(a.html(""));g&&(a.width(2*a.width()-
d.width()),a.css({"padding-left":e,"padding-right":f}));a.attr("tickerHeight",d.height());if(a.attr("tickerHeight")!=0){a.height(a.height());e=0;for(f=a.height();f>e;)e+=d.height(),d.clone(!0).appendTo(a);b&&b>0||(b=50);a.attr("tickerSpeed",b);h&&a.hover(function(){a.tickerFreez()},function(){a.tickerScroll()});a.attr("id")||a.attr("id","ticker_"+(new Date).getTime());a.tickerScroll()}})}})(jQuery);