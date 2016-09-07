/*
* jquery.inputmask.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.26
*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(["jquery","./jquery.inputmask"], factory);} else {factory(jQuery);}}/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Optional extensions on the jquery.inputmask base
*/
(function ($) {
    //extra definitions
    $.extend($.inputmask.defaults.definitions, {
        'A': {
            validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
            cardinality: 1,
            casing: "upper" //auto uppercasing
        },
        '#': {
            validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
            cardinality: 1,
            casing: "upper"
        }
    });
    $.extend($.inputmask.defaults.aliases, {
        'url': {
            mask: "ir",
            placeholder: "",
            separator: "",
            defaultPrefix: "http://",
            regex: {
                urlpre1: new RegExp("[fh]"),
                urlpre2: new RegExp("(ft|ht)"),
                urlpre3: new RegExp("(ftp|htt)"),
                urlpre4: new RegExp("(ftp:|http|ftps)"),
                urlpre5: new RegExp("(ftp:/|ftps:|http:|https)"),
                urlpre6: new RegExp("(ftp://|ftps:/|http:/|https:)"),
                urlpre7: new RegExp("(ftp://|ftps://|http://|https:/)"),
                urlpre8: new RegExp("(ftp://|ftps://|http://|https://)")
            },
            definitions: {
                'i': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return true;
                    },
                    cardinality: 8,
                    prevalidator: (function () {
                        var result = [], prefixLimit = 8;
                        for (var i = 0; i < prefixLimit; i++) {
                            result[i] = (function () {
                                var j = i;
                                return {
                                    validator: function (chrs, maskset, pos, strict, opts) {
                                        if (opts.regex["urlpre" + (j + 1)]) {
                                            var tmp = chrs, k;
                                            if (((j + 1) - chrs.length) > 0) {
                                                tmp = maskset.buffer.join('').substring(0, ((j + 1) - chrs.length)) + "" + tmp;
                                            }
                                            var isValid = opts.regex["urlpre" + (j + 1)].test(tmp);
                                            if (!strict && !isValid) {
                                                pos = pos - j;
                                                for (k = 0; k < opts.defaultPrefix.length; k++) {
                                                    maskset.buffer[pos] = opts.defaultPrefix[k]; pos++;
                                                }
                                                for (k = 0; k < tmp.length - 1; k++) {
                                                    maskset.buffer[pos] = tmp[k]; pos++;
                                                }
                                                return { "pos": pos };
                                            }
                                            return isValid;
                                        } else {
                                            return false;
                                        }
                                    }, cardinality: j
                                };
                            })();
                        }
                        return result;
                    })()
                },
                "r": {
                    validator: ".",
                    cardinality: 50
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        "ip": { //ip-address mask
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                'i': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        if (pos - 1 > -1 && maskset.buffer[pos - 1] != ".") {
                            chrs = maskset.buffer[pos - 1] + chrs;
                            if (pos - 2 > -1 && maskset.buffer[pos - 2] != ".") {
                                chrs = maskset.buffer[pos - 2] + chrs;
                            } else chrs = "0" + chrs;
                        } else chrs = "00" + chrs;
                        return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1
                }
            }
        },
        "email": {
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,20}][.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    cardinality: 1,
                    casing: "lower"
                }
            }
        }
    });
    return $.fn.inputmask;
}));
/*
* jquery.inputmask.date.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.26
*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(["jquery","./jquery.inputmask"], factory);} else {factory(jQuery);}}/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Optional extensions on the jquery.inputmask base
*/
(function ($) {
    //date & time aliases
    $.extend($.inputmask.defaults.definitions, {
        'h': { //hours
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-2]", cardinality: 1 }]
        },
        's': { //seconds || minutes
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-5]", cardinality: 1 }]
        },
        'd': { //basic day
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-3]", cardinality: 1 }]
        },
        'm': { //basic month
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [{ validator: "[01]", cardinality: 1 }]
        },
        'y': { //basic year
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [
                        { validator: "[12]", cardinality: 1 },
                        { validator: "(19|20)", cardinality: 2 },
                        { validator: "(19|20)\\d", cardinality: 3 }
            ]
        }
    });
    $.extend($.inputmask.defaults.aliases, {
        'dd/mm/yyyy': {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"), //daypre
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), //day
                val2pre: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])"); }, //monthpre
                val2: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))"); }//month
            },
            leapday: "29/02/",
            separator: '/',
            yearrange: { minyear: 1900, maxyear: 2099 },
            isInYearRange: function (chrs, minyear, maxyear) {
                if (isNaN(chrs)) return false;
                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length)));
                var enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                return (!isNaN(enteredyear) ? minyear <= enteredyear && enteredyear <= maxyear : false) ||
            		   (!isNaN(enteredyear2) ? minyear <= enteredyear2 && enteredyear2 <= maxyear : false);
            },
            determinebaseyear: function (minyear, maxyear, hint) {
                var currentyear = (new Date()).getFullYear();
                if (minyear > currentyear) return minyear;
                if (maxyear < currentyear) {
                    var maxYearPrefix = maxyear.toString().slice(0, 2);
                    var maxYearPostfix = maxyear.toString().slice(2, 4);
                    while (maxyear < maxYearPrefix + hint) {
                        maxYearPrefix--;
                    }
                    var maxxYear = maxYearPrefix + maxYearPostfix;
                    return minyear > maxxYear ? minyear : maxxYear;
                }

                return currentyear;
            },
            onKeyUp: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == $.inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString());
                }
            },
            definitions: {
                '1': { //val1 ~ day or month
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.regex.val1.test(chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator || "-./".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.val1.test("0" + chrs.charAt(0));
                                if (isValid) {
                                    maskset.buffer[pos - 1] = "0";
                                    return { "refreshFromBuffer": { start: pos - 1, end: pos }, "pos": pos, "c": chrs.charAt(0) };
                                }
                            }
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            if (!isNaN(maskset.buffer[pos + 1])) chrs += maskset.buffer[pos + 1];
                            var isValid = chrs.length == 1 ? opts.regex.val1pre.test(chrs) : opts.regex.val1.test(chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val1.test("0" + chrs);
                                if (isValid) {
                                    maskset.buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                '2': { //val2 ~ day or month
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var frontValue = (opts.mask.indexOf("2") == opts.mask.length - 1) ? maskset.buffer.join('').substr(5, 3) : maskset.buffer.join('').substr(0, 3);
                        if (frontValue.indexOf(opts.placeholder[0]) != -1) frontValue = "01" + opts.separator;
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator || "-./".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0));
                                if (isValid) {
                                    maskset.buffer[pos - 1] = "0";
                                    return { "refreshFromBuffer": { start: pos - 1, end: pos }, "pos": pos, "c": chrs.charAt(0) };
                                }
                            }
                        }

                        //check leap yeap
                        if ((opts.mask.indexOf("2") == opts.mask.length - 1) && isValid) {
                            var dayMonthValue = maskset.buffer.join('').substr(4, 4) + chrs;
                            if (dayMonthValue != opts.leapday)
                                return true;
                            else {
                                var year = parseInt(maskset.buffer.join('').substr(0, 4), 10);  //detect leap year
                                if (year % 4 === 0)
                                    if (year % 100 === 0)
                                        if (year % 400 === 0)
                                            return true;
                                        else return false;
                                    else return true;
                                else return false;
                            }
                        }

                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            if (!isNaN(maskset.buffer[pos + 1])) chrs += maskset.buffer[pos + 1];
                            var frontValue = (opts.mask.indexOf("2") == opts.mask.length - 1) ? maskset.buffer.join('').substr(5, 3) : maskset.buffer.join('').substr(0, 3);
                            if (frontValue.indexOf(opts.placeholder[0]) != -1) frontValue = "01" + opts.separator;
                            var isValid = chrs.length == 1 ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs);
                                if (isValid) {
                                    maskset.buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                'y': { //year
                    validator: function (chrs, maskset, pos, strict, opts) {
                        if (opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                            var dayMonthValue = maskset.buffer.join('').substr(0, 6);
                            if (dayMonthValue != opts.leapday)
                                return true;
                            else {
                                var year = parseInt(chrs, 10);//detect leap year
                                if (year % 4 === 0)
                                    if (year % 100 === 0)
                                        if (year % 400 === 0)
                                            return true;
                                        else return false;
                                    else return true;
                                else return false;
                            }
                        } else return false;
                    },
                    cardinality: 4,
                    prevalidator: [
                {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        if (!strict && !isValid) {
                            var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);

                            isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                maskset.buffer[pos++] = yearPrefix.charAt(0);
                                return { "pos": pos };
                            }
                            yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2);

                            isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                maskset.buffer[pos++] = yearPrefix.charAt(0);
                                maskset.buffer[pos++] = yearPrefix.charAt(1);
                                return { "pos": pos };
                            }
                        }
                        return isValid;
                    },
                    cardinality: 1
                },
                {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        if (!strict && !isValid) {
                            var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);

                            isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                maskset.buffer[pos++] = yearPrefix.charAt(1);
                                return { "pos": pos };
                            }

                            yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                            if (opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                                var dayMonthValue = maskset.buffer.join('').substr(0, 6);
                                if (dayMonthValue != opts.leapday)
                                    isValid = true;
                                else {
                                    var year = parseInt(chrs, 10);//detect leap year
                                    if (year % 4 === 0)
                                        if (year % 100 === 0)
                                            if (year % 400 === 0)
                                                isValid = true;
                                            else isValid = false;
                                        else isValid = true;
                                    else isValid = false;
                                }
                            } else isValid = false;
                            if (isValid) {
                                maskset.buffer[pos - 1] = yearPrefix.charAt(0);
                                maskset.buffer[pos++] = yearPrefix.charAt(1);
                                maskset.buffer[pos++] = chrs.charAt(0);
                                return { "refreshFromBuffer": { start: pos - 3, end: pos }, "pos": pos };
                            }
                        }
                        return isValid;
                    }, cardinality: 2
                },
                {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                    }, cardinality: 3
                }
                    ]
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        'mm/dd/yyyy': {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy", //reuse functionality of dd/mm/yyyy alias
            regex: {
                val2pre: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])"); }, //daypre
                val2: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)"); }, //day
                val1pre: new RegExp("[01]"), //monthpre
                val1: new RegExp("0[1-9]|1[012]") //month
            },
            leapday: "02/29/",
            onKeyUp: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == $.inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString());
                }
            }
        },
        'yyyy/mm/dd': {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyUp: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == $.inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString());
                }
            }
        },
        'dd.mm.yyyy': {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: '.',
            alias: "dd/mm/yyyy"
        },
        'dd-mm-yyyy': {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: '-',
            alias: "dd/mm/yyyy"
        },
        'mm.dd.yyyy': {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: '.',
            alias: "mm/dd/yyyy"
        },
        'mm-dd-yyyy': {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: '-',
            alias: "mm/dd/yyyy"
        },
        'yyyy.mm.dd': {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: '.',
            alias: "yyyy/mm/dd"
        },
        'yyyy-mm-dd': {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: '-',
            alias: "yyyy/mm/dd"
        },
        'datetime': {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"), //hours pre
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"), //hours
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"), //minutes/seconds pre
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ':',
            hourFormat: "24", // or 12
            definitions: {
                'h': { //hours
                    validator: function (chrs, maskset, pos, strict, opts) {
                        if (opts.hourFormat == "24") {
                            if (parseInt(chrs, 10) == 24) {
                                maskset.buffer[pos - 1] = "0";
                                maskset.buffer[pos] = "0";
                                return { "refreshFromBuffer": { start: pos - 1, end: pos }, "c": "0" };
                            }
                        }

                        var isValid = opts.regex.hrs.test(chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.timeseparator || "-.:".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.hrs.test("0" + chrs.charAt(0));
                                if (isValid) {
                                    maskset.buffer[pos - 1] = "0";
                                    maskset.buffer[pos] = chrs.charAt(0);
                                    pos++;
                                    return { "refreshFromBuffer": { start: pos - 2, end: pos }, "pos": pos, "c": opts.timeseparator };
                                }
                            }
                        }

                        if (isValid && opts.hourFormat !== "24" && opts.regex.hrs24.test(chrs)) {

                            var tmp = parseInt(chrs, 10);

                            if (tmp == 24) {
                                maskset.buffer[pos + 5] = "a";
                                maskset.buffer[pos + 6] = "m";
                            } else {
                                maskset.buffer[pos + 5] = "p";
                                maskset.buffer[pos + 6] = "m";
                            }

                            tmp = tmp - 12;

                            if (tmp < 10) {
                                maskset.buffer[pos] = tmp.toString();
                                maskset.buffer[pos - 1] = "0";
                            } else {
                                maskset.buffer[pos] = tmp.toString().charAt(1);
                                maskset.buffer[pos - 1] = tmp.toString().charAt(0);
                            }

                            return { "refreshFromBuffer": { start: pos - 1, end: pos + 6 }, "c": maskset.buffer[pos] };
                        }

                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.hrspre.test(chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.hrs.test("0" + chrs);
                                if (isValid) {
                                    maskset.buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                's': { //seconds || minutes
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [
                        {
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.mspre.test(chrs);
                                if (!strict && !isValid) {
                                    isValid = opts.regex.ms.test("0" + chrs);
                                    if (isValid) {
                                        maskset.buffer[pos] = "0";
                                        pos++;
                                        return { "pos": pos };
                                    }
                                }
                                return isValid;
                            }, cardinality: 1
                        }]
                },
                't': { //am/pm
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return opts.regex.ampm.test(chrs + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        'datetime12': {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'hh:mm t': {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'h:s t': {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'hh:mm:ss': {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: false
        },
        'hh:mm': {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: false
        },
        'date': {
            alias: "dd/mm/yyyy" // "mm/dd/yyyy"
        },
        'mm/yyyy': {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: '/',
            alias: "mm/dd/yyyy"
        }
    });

    return $.fn.inputmask;
}));
/*
* jquery.inputmask.numeric.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.26
*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(["jquery","./jquery.inputmask"], factory);} else {factory(jQuery);}}/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Optional extensions on the jquery.inputmask base
*/
(function ($) {
    //number aliases
    $.extend($.inputmask.defaults.aliases, {
        'numeric': {
            mask: function (opts) {
                if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                    opts.integerDigits = opts.repeat;
                }
                opts.repeat = 0;
                if (opts.groupSeparator == opts.radixPoint) { //treat equal separator and radixpoint
                    if (opts.radixPoint == ".")
                        opts.groupSeparator = ",";
                    else if (opts.radixPoint == ",")
                        opts.groupSeparator = ".";
                    else opts.groupSeparator = "";
                }
                if (opts.groupSeparator === " ") { //prevent conflict with default skipOptionalPartCharacter
                    opts.skipOptionalPartCharacter = undefined;
                }
                opts.autoGroup = opts.autoGroup && opts.groupSeparator != "";

                if (opts.autoGroup && isFinite(opts.integerDigits)) {
                    var seps = Math.floor(opts.integerDigits / opts.groupSize);
                    var mod = opts.integerDigits % opts.groupSize;
                    opts.integerDigits += mod == 0 ? seps - 1 : seps;
                }

                opts.definitions[";"] = opts.definitions["~"]; //clone integer def for decimals

                var mask = opts.prefix;
                mask += "[+]";
                mask += "~{1," + opts.integerDigits + "}";
                if (opts.digits != undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                    if (opts.digitsOptional)
                        mask += "[" + (opts.decimalProtect ? ":" : opts.radixPoint) + ";{" + opts.digits + "}]";
                    else mask += (opts.decimalProtect ? ":" : opts.radixPoint) + ";{" + opts.digits + "}";
                }
                mask += opts.suffix;
                return mask;
            },
            placeholder: "",
            greedy: false,
            digits: "*", //number of fractionalDigits
            digitsOptional: true,
            groupSeparator: "",//",", // | "."
            radixPoint: ".",
            groupSize: 3,
            autoGroup: false,
            allowPlus: true,
            allowMinus: true,
            integerDigits: "+", //number of integerDigits
            prefix: "",
            suffix: "",
            rightAlign: true,
            decimalProtect: true, //do not allow assumption of decimals input without entering the radixpoint
            postFormat: function (buffer, pos, reformatOnly, opts) {  //this needs to be removed // this is crap
                var needsRefresh = false, charAtPos = buffer[pos];
                if (opts.groupSeparator == "" ||
                    ($.inArray(opts.radixPoint, buffer) != -1 && pos >= $.inArray(opts.radixPoint, buffer)) ||
                    new RegExp('[-\+]').test(charAtPos)
                    ) return { pos: pos };
                var cbuf = buffer.slice();
                if (charAtPos == opts.groupSeparator) {
                    cbuf.splice(pos--, 1);
                    charAtPos = cbuf[pos];
                }
                if (reformatOnly) cbuf[pos] = "?"; else cbuf.splice(pos, 0, "?"); //set position indicator
                var bufVal = cbuf.join('');
                if (opts.autoGroup || (reformatOnly && bufVal.indexOf(opts.groupSeparator) != -1)) {
                    var escapedGroupSeparator = $.inputmask.escapeRegex.call(this, opts.groupSeparator);
                    needsRefresh = bufVal.indexOf(opts.groupSeparator) == 0;
                    bufVal = bufVal.replace(new RegExp(escapedGroupSeparator, "g"), '');
                    var radixSplit = bufVal.split(opts.radixPoint);
                    bufVal = radixSplit[0];
                    if (bufVal != (opts.prefix + "?0") && bufVal.length >= (opts.groupSize + opts.prefix.length)) {
                        needsRefresh = true;
                        var reg = new RegExp('([-\+]?[\\d\?]+)([\\d\?]{' + opts.groupSize + '})');
                        while (reg.test(bufVal)) {
                            bufVal = bufVal.replace(reg, '$1' + opts.groupSeparator + '$2');
                            bufVal = bufVal.replace(opts.groupSeparator + opts.groupSeparator, opts.groupSeparator);
                        }
                    }
                    if (radixSplit.length > 1)
                        bufVal += opts.radixPoint + radixSplit[1];
                }
                buffer.length = bufVal.length; //align the length
                for (var i = 0, l = bufVal.length; i < l; i++) {
                    buffer[i] = bufVal.charAt(i);
                }
                var newPos = $.inArray("?", buffer);
                if (reformatOnly) buffer[newPos] = charAtPos; else buffer.splice(newPos, 1);

                return { pos: newPos, "refreshFromBuffer": needsRefresh };
            },
            onKeyDown: function (e, buffer, caretPos, opts) {
                if (e.keyCode == $.inputmask.keyCode.TAB && opts.placeholder.charAt(0) != "0") {
                    var radixPosition = $.inArray(opts.radixPoint, buffer);
                    if (radixPosition != -1 && isFinite(opts.digits)) {
                        for (var i = 1; i <= opts.digits; i++) {
                            if (buffer[radixPosition + i] == undefined || buffer[radixPosition + i] == opts.placeholder.charAt(0)) buffer[radixPosition + i] = "0";
                        }
                        return { "refreshFromBuffer": { start: ++radixPosition, end: radixPosition + opts.digits } };
                    }
                } else if (opts.autoGroup && (e.keyCode == $.inputmask.keyCode.DELETE || e.keyCode == $.inputmask.keyCode.BACKSPACE)) {
                    var rslt = opts.postFormat(buffer, caretPos - 1, true, opts);
                    rslt.caret = rslt.pos + 1;
                    return rslt;
                }
            },
            onKeyPress: function (e, buffer, caretPos, opts) {
                if (opts.autoGroup /*&& String.fromCharCode(k) == opts.radixPoint*/) {
                    var rslt = opts.postFormat(buffer, caretPos - 1, true, opts);
                    rslt.caret = rslt.pos + 1;
                    return rslt;
                }
            },
            regex: {
                integerPart: function (opts) { return new RegExp('[-\+]?\\d+'); }
            },
            negationhandler: function (chrs, buffer, pos, strict, opts) {
                if (!strict && opts.allowMinus && chrs === "-") {
                    var matchRslt = buffer.join('').match(opts.regex.integerPart(opts));

                    if (matchRslt.length > 0) {
                        if (buffer[matchRslt.index] == "+") {
                            return { "pos": matchRslt.index, "c": "-", "remove": matchRslt.index, "caret": pos };
                        } else if (buffer[matchRslt.index] == "-") {
                            return { "remove": matchRslt.index, "caret": pos - 1 };
                        } else {
                            return { "pos": matchRslt.index, "c": "-", "caret": pos + 1 };
                        }
                    }
                }
                return false;
            },
            radixhandler: function (chrs, maskset, pos, strict, opts) {
                if (!strict && chrs === opts.radixPoint) {
                    var radixPos = $.inArray(opts.radixPoint, maskset.buffer), integerValue = maskset.buffer.join('').match(opts.regex.integerPart(opts));

                    if (radixPos != -1) {
                        if (maskset["validPositions"][radixPos - 1])
                            return { "caret": radixPos + 1 };
                        else return { "pos": integerValue.index, c: integerValue[0], "caret": radixPos + 1 };
                    }
                }
                return false;
            },
            leadingZeroHandler: function (chrs, maskset, pos, strict, opts) {
                var matchRslt = maskset.buffer.join('').match(opts.regex.integerPart(opts)), radixPosition = $.inArray(opts.radixPoint, maskset.buffer);
                if (matchRslt && !strict && (radixPosition == -1 || matchRslt.index < radixPosition)) {
                    if (matchRslt["0"].indexOf("0") == 0 && pos >= opts.prefix.length) {
                        if (radixPosition == -1 || (pos <= radixPosition && maskset["validPositions"][radixPosition] == undefined)) {
                            maskset.buffer.splice(matchRslt.index, 1);
                            pos = pos > matchRslt.index ? pos - 1 : matchRslt.index;
                            return { "pos": pos, "remove": matchRslt.index };
                        } else if (pos > matchRslt.index && pos <= radixPosition) {
                            maskset.buffer.splice(matchRslt.index, 1);
                            pos = pos > matchRslt.index ? pos - 1 : matchRslt.index;
                            return { "pos": pos, "remove": matchRslt.index };
                        }
                    } else if (chrs == "0" && pos <= matchRslt.index) {
                        return false;
                    }
                }
                return true;
            },
            definitions: {
                '~': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.negationhandler(chrs, maskset.buffer, pos, strict, opts);
                        if (!isValid) {
                            isValid = opts.radixhandler(chrs, maskset, pos, strict, opts);
                            if (!isValid) {
                                isValid = strict ? new RegExp("[0-9" + $.inputmask.escapeRegex.call(this, opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                                if (isValid === true) {
                                    isValid = opts.leadingZeroHandler(chrs, maskset, pos, strict, opts);
                                    if (isValid === true) {
                                        //handle overwrite when fixed precision
                                        var radixPosition = $.inArray(opts.radixPoint, maskset.buffer);
                                        if (opts.digitsOptional === false && pos > radixPosition && !strict) {
                                            return { "pos": pos, "remove": pos };
                                        } else return { pos: pos };
                                    }
                                }
                            }
                        }

                        return isValid;
                    },
                    cardinality: 1,
                    prevalidator: null
                },
                '+': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var signed = "[";
                        if (opts.allowMinus === true) signed += "-";
                        if (opts.allowPlus === true) signed += "\+";
                        signed += "]";
                        return new RegExp(signed).test(chrs);
                    },
                    cardinality: 1,
                    prevalidator: null,
                    placeholder: ''
                },
                ':': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.negationhandler(chrs, maskset.buffer, pos, strict, opts);
                        if (!isValid) {
                            var radix = "[" + $.inputmask.escapeRegex.call(this, opts.radixPoint) + "]";
                            isValid = new RegExp(radix).test(chrs);
                            if (isValid && maskset["validPositions"][pos] && maskset["validPositions"][pos]["match"].placeholder == opts.radixPoint) {
                                isValid = { "pos": pos, "remove": pos };
                            }
                        }
                        return isValid;
                    },
                    cardinality: 1,
                    prevalidator: null,
                    placeholder: function (opts) { return opts.radixPoint; }
                }
            },
            insertMode: true,
            autoUnmask: false,
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                var processValue = maskedValue.replace(opts.prefix, "");
                processValue = processValue.replace(opts.suffix, "");
                processValue = processValue.replace(new RegExp($.inputmask.escapeRegex.call(this, opts.groupSeparator), "g"), "");
                //processValue = processValue.replace($.inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                return processValue;
            },
            isComplete: function (buffer, opts) {
                var maskedValue = buffer.join(''), bufClone = buffer.slice();
                //verify separator positions
                opts.postFormat(bufClone, 0, true, opts);
                if (bufClone.join('') != maskedValue) return false;

                var processValue = maskedValue.replace(opts.prefix, "");
                processValue = processValue.replace(opts.suffix, "");
                processValue = processValue.replace(new RegExp($.inputmask.escapeRegex.call(this, opts.groupSeparator), "g"), "");
                processValue = processValue.replace($.inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                return isFinite(processValue);
            },
            onBeforeMask: function (initialValue, opts) {
                if (isFinite(initialValue)) {
                    return initialValue.toString().replace(".", opts.radixPoint);
                } else {
                    var kommaMatches = initialValue.match(/,/g);
                    var dotMatches = initialValue.match(/\./g);
                    if (dotMatches && kommaMatches) {
                        if (dotMatches.length > kommaMatches.length) {
                            initialValue = initialValue.replace(/\./g, "");
                            initialValue = initialValue.replace(",", opts.radixPoint);
                        } else if (kommaMatches.length > dotMatches.length) {
                            initialValue = initialValue.replace(/,/g, "");
                            initialValue = initialValue.replace(".", opts.radixPoint);
                        }
                    } else {
                        initialValue = initialValue.replace(new RegExp($.inputmask.escapeRegex.call(this, opts.groupSeparator), "g"), "");
                    }
                    return initialValue;
                }
            }
        },
        'currency': {
            prefix: "$ ",
            groupSeparator: ",",
            radixPoint: ".",
            alias: "numeric",
            placeholder: "0",
            autoGroup: true,
            digits: 2,
            digitsOptional: false,
            clearMaskOnLostFocus: false,
            decimalProtect: true,
        },
        'decimal': {
            alias: "numeric"
        },
        'integer': {
            alias: "numeric",
            digits: "0"
        }
    });
    return $.fn.inputmask;
}));
/*
* jquery.inputmask.phone.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.26
*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(["jquery","./jquery.inputmask"], factory);} else {factory(jQuery);}}/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Phone extension.
When using this extension make sure you specify the correct url to get the masks

 $(selector).inputmask("phone", {
                url: "Scripts/jquery.inputmask/phone-codes/phone-codes.json", 
                onKeyValidation: function () { //show some metadata in the console
                    console.log($(this).inputmask("getmetadata")["cd"]);
                } 
  });


*/
(function ($) {
    $.extend($.inputmask.defaults.aliases, {
        'phone': {
            url: "phone-codes/phone-codes.js",
            maskInit: "+pp(pp)pppppppp",
            mask: function (opts) {
                opts.definitions = {
                    'p': {
                        validator: function () { return false; },
                        cardinality: 1
                    },
                    '#': {
                        validator: "[0-9]",
                        cardinality: 1
                    }
                };
                var maskList = [];
                $.ajax({
                    url: opts.url,
                    async: false,
                    dataType: 'json',
                    success: function (response) {
                        maskList = response;
                    }
                });

                maskList.splice(0, 0, opts.maskInit);
                maskList.sort(function (a, b) { return a.length - b.length; });
                return maskList;
            },
            nojumps: true,
            nojumpsThreshold: 1
        },
        'phonebe': {
            alias: "phone",
            url: "phone-codes/phone-be.js",
            maskInit: "+32(pp)pppppppp",
            nojumpsThreshold: 4
        }
    });
    return $.fn.inputmask;
}));
/*
* jquery.inputmask.regex.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.26
*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(["jquery","./jquery.inputmask"], factory);} else {factory(jQuery);}}/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Regex extensions on the jquery.inputmask base
Allows for using regular expressions as a mask
*/
(function ($) {
    $.extend($.inputmask.defaults.aliases, { // $(selector).inputmask("Regex", { regex: "[0-9]*"}
        'Regex': {
            mask: "r",
            greedy: false,
            repeat: "*",
            regex: null,
            regexTokens: null,
            //Thx to https://github.com/slevithan/regex-colorizer for the tokenizer regex
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function(buffer, opts){
            	return new RegExp(opts.regex).test(buffer.join(''));
            },
            definitions: {
                'r': {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        function regexToken(isGroup, isQuantifier) {
                            this.matches = [];
                            this.isGroup = isGroup || false;
                            this.isQuantifier = isQuantifier || false;
                            this.quantifier = { min: 1, max: 1 };
                            this.repeaterPart = undefined;
                        }
                        function analyseRegex() {
                            var currentToken = new regexToken(), match, m, opengroups = [];

                            opts.regexTokens = [];

                            // The tokenizer regex does most of the tokenization grunt work
                            while (match = opts.tokenizer.exec(opts.regex)) {
                                m = match[0];
                                switch (m.charAt(0)) {
                                    case "(": // Group opening
                                        opengroups.push(new regexToken(true));
                                        break;
                                    case ")": // Group closing
                                        var groupToken = opengroups.pop();
                                        if (opengroups.length > 0) {
                                            opengroups[opengroups.length - 1]["matches"].push(groupToken);
                                        } else {
                                            currentToken.matches.push(groupToken);
                                        }
                                        break;
                                    case "{": case "+": case "*": //Quantifier
                                        var quantifierToken = new regexToken(false, true);
                                        m = m.replace(/[{}]/g, "");
                                        var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length == 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
                                        quantifierToken.quantifier = { min: mq0, max: mq1 };
                                        if (opengroups.length > 0) {
                                            var matches = opengroups[opengroups.length - 1]["matches"];
                                            match = matches.pop();
                                            if (!match["isGroup"]) {
                                                var groupToken = new regexToken(true);
                                                groupToken.matches.push(match);
                                                match = groupToken;
                                            }
                                            matches.push(match);
                                            matches.push(quantifierToken);
                                        } else {
                                            match = currentToken.matches.pop();
                                            if (!match["isGroup"]) {
                                                var groupToken = new regexToken(true);
                                                groupToken.matches.push(match);
                                                match = groupToken;
                                            }
                                            currentToken.matches.push(match);
                                            currentToken.matches.push(quantifierToken);
                                        }
                                        break;
                                    default:
                                        if (opengroups.length > 0) {
                                            opengroups[opengroups.length - 1]["matches"].push(m);
                                        } else {
                                            currentToken.matches.push(m);
                                        }
                                        break;
                                }
                            }

                            if (currentToken.matches.length > 0)
                                opts.regexTokens.push(currentToken);
                        };

                        function validateRegexToken(token, fromGroup) {
                            var isvalid = false;
                            if (fromGroup) {
                                regexPart += "(";
                                openGroupCount++;
                            }
                            for (var mndx = 0; mndx < token["matches"].length; mndx++) {
                                var matchToken = token["matches"][mndx];
                                if (matchToken["isGroup"] == true) {
                                    isvalid = validateRegexToken(matchToken, true);
                                } else if (matchToken["isQuantifier"] == true) {
                                    var crrntndx = $.inArray(matchToken, token["matches"]),
                                        matchGroup = token["matches"][crrntndx - 1];
                                    var regexPartBak = regexPart;
                                    if (isNaN(matchToken.quantifier.max)) {
                                        while (matchToken["repeaterPart"] && matchToken["repeaterPart"] != regexPart && matchToken["repeaterPart"].length > regexPart.length) {
                                            isvalid = validateRegexToken(matchGroup, true);
                                            if (isvalid) break;
                                        }
                                        isvalid = isvalid || validateRegexToken(matchGroup, true);
                                        if (isvalid) matchToken["repeaterPart"] = regexPart;
                                        regexPart = regexPartBak + matchToken.quantifier.max;
                                    } else {
                                        for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm; i++) {
                                            isvalid = validateRegexToken(matchGroup, true);
                                            if (isvalid) break;
                                        }
                                        regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                                    }
                                } else if (matchToken["matches"] != undefined) {
                                    for (var k = 0; k < matchToken.length; k++) {
                                        isvalid = validateRegexToken(matchToken[k], fromGroup);
                                        if (isvalid) break;
                                    }
                                } else {
                                    var testExp;
                                    if (matchToken.charAt(0) == "[") {
                                        testExp = regexPart;
                                        testExp += matchToken;
                                        for (var j = 0; j < openGroupCount; j++) {
                                            testExp += ")";
                                        }
                                        var exp = new RegExp("^(" + testExp + ")$");
                                        isvalid = exp.test(bufferStr);
                                    } else {
                                        for (var l = 0, tl = matchToken.length; l < tl; l++) {
                                            if (matchToken.charAt(l) == "\\") continue;
                                            testExp = regexPart;
                                            testExp += matchToken.substr(0, l + 1);
                                            testExp = testExp.replace(/\|$/, "");
                                            for (var j = 0; j < openGroupCount; j++) {
                                                testExp += ")";
                                            }
                                            var exp = new RegExp("^(" + testExp + ")$");
                                            isvalid = exp.test(bufferStr);
                                            if (isvalid) break;
                                        }
                                    }
                                    regexPart += matchToken;
                                }
                                if (isvalid) break;
                            }

                            if (fromGroup) {
                                regexPart += ")";
                                openGroupCount--;
                            }

                            return isvalid;
                        }


                        if (opts.regexTokens == null) {
                            analyseRegex();
                        }

                        var cbuffer = maskset.buffer.slice(), regexPart = "", isValid = false, openGroupCount = 0;
                        cbuffer.splice(pos, 0, chrs);
                        var bufferStr = cbuffer.join('');
                        for (var i = 0; i < opts.regexTokens.length; i++) {
                            var regexToken = opts.regexTokens[i];
                            isValid = validateRegexToken(regexToken, regexToken["isGroup"]);
                            if (isValid) break;
                        }

                        return isValid;
                    },
                    cardinality: 1
                }
            }
        }
    });
    return $.fn.inputmask;
}));