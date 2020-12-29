(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["../widgets/datepicker"], factory);
    } else {
        factory(jQuery.datepicker);
    }

}(function (datepicker) {

    datepicker.regional["zh-TW"] = {
        closeText: "關閉",
        prevText: "<上個月",
        nextText: "下個月>",
        currentText: "今天",
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        weekHeader: "週",
        dateFormat: "yymmdd",
        firstDay: 1,
        isRTL: false,
        showOn: "button",
        buttonImage: "vendor/images/datepicker-img.png",
        buttonImageOnly: true,
        changeYear: true,
        changeMonth: true,
        showMonthAfterYear: true,
        yearRange: '1912:2030',
        onSelect: function (dateText, inst) {
            var date = $(this).datepicker('getDate'),
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = date.getFullYear() - 1911;

            if ($(this).closest('.cia-calendar').hasClass('cia-calendar--active') == false) {
                $(this).closest('.cia-calendar').append('<div class="cia-calendar--text"></div>');
                $(this).closest('.cia-calendar').addClass('cia-calendar--active');
                $(this).closest('.cia-calendar').find('.cia-calendar--text').html(year + '/' + month + '/' + day);
            } else {
                $(this).closest('.cia-calendar').find('.cia-calendar--text').html(year + '/' + month + '/' + day);
            }
        }
    };
    datepicker.setDefaults(datepicker.regional["zh-TW"]);

    return datepicker.regional["zh-TW"];

}));

//將.datepicker改成民國年與西元年小套件同時存在
/* 參考
    http://aqr199.blog.ithome.com.tw/trackbacks/411/62016 ( 羅必達工作室)
    http://www.dotblogs.com.tw/louis/archive/2011/12/01/60291.aspx  (阿儒※練功房※)
*/
$(function () {
    //先設定預設西元年的datepicker必要功能
    var old_generateMonthYearHeader = $.datepicker._generateMonthYearHeader;
    var old_formatDate = $.datepicker.formatDate;
    var old_parseDate = $.datepicker.parseDate;

    $.extend($.datepicker, {
        //選擇日期之後的value
        formatDate: function (format, date, settings) {
            var oformatDate = old_formatDate(format, date, settings);
            if (format == 'Rmmdd') {
                var d = date.getDate();
                var m = date.getMonth() + 1;
                var y = date.getFullYear();
                var fm = function (v) {
                    return (v < 10 ? '0' : '') + v;
                };

                if ((y - 1911) >= 100) {
                    y = y - 1911;
                }
                else {
                    y = "0" + String(y - 1911);
                }

                return (y) + '' + fm(m) + '' + fm(d);
            }
            return oformatDate;

        },
        //點取已存在日期的parse
        parseDate: function (format, value, settings) {
            var v = new String(value);
            var Y, M, D;
            if (format == 'Rmmdd') {
                if (v.length == 7) {/*1001215*/
                    Y = v.substring(0, 3) - 0 + 1911;
                    M = v.substring(3, 5) - 0 - 1;
                    D = v.substring(5, 7) - 0;
                    return (new Date(Y, M, D));
                } else if (v.length == 6) {/*0981215*/
                    Y = "0" + String(v.substring(0, 2) - 0 + 1911);
                    M = v.substring(2, 4) - 0 - 1;
                    D = v.substring(4, 6) - 0;
                    return (new Date(Y, M, D));
                }
                return (new Date());
            } else {
                var oparseDate = old_parseDate.apply(this, [format, value, settings]);
                return (oparseDate);
            }

        },
        //改變小工具的年
        _generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var dateFormat = this._get(inst, "dateFormat");
            var htmlYearMonth = old_generateMonthYearHeader.apply(this, [inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort]);
            if (dateFormat == 'Rmmdd') {
                if ($(htmlYearMonth).find(".ui-datepicker-year").length > 0) {
                    htmlYearMonth = $(htmlYearMonth).find(".ui-datepicker-year").find("option").each(function (i, e) {
                        // console.log(e.textContent);
                        if (Number(e.value) - 1911 > 0) {
                            var yycc = Number(e.textContent) - 1911;
                            $(e).text('民國' + yycc + '年');
                        }

                    }).end().end().get(0).outerHTML;
                }
            }
            return htmlYearMonth;
        }
    });
});