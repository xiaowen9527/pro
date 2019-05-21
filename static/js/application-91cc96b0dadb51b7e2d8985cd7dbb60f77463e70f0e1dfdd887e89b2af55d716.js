!
function () {
    var e = {
        ajax: function (e) {
            var t = $('meta[name="csrf-token"]').attr("content"),
                n = {
                    method: "GET",
                    beforeSend: function (e) {
                        t && e.setRequestHeader("X-CSRF-Token", t)
                    }
                };
            for (var a in e) n[a] = e[a];
            return $.ajax(n)
        },
        alert: function (e) {
            alert(e)
        },
        urlParams: function () {
            var e = window.location.search,
                t = new Object;
            if (-1 != e.indexOf("?")) {
                    var n = e.substr(1);
                    strs = n.split("&");
                    for (var a = 0; a < strs.length; a++) t[strs[a].split("=")[0]] = unescape(encodeURIComponent(strs[a].split("=")[1]))
                }
            return t
        },
        goToPath: function (e, t, n) {
            for (keyB in urlParams = JUN.urlParams(), t) urlParams[keyB] = t[keyB];
            var a = e + "?";
            for (key in urlParams) n.indexOf(key) < 0 && (a += key + "=" + urlParams[key] + "&");
            a = a.substr(0, a.length - 1),
            window.location.href = a
        },
        refresh_posts: function (t, e) {
            t = t;
            var r = "ModelSeries" == e ? ".model-series" : ".post",
                a = ".model-series" == r ? "series" : "posts",
                n = "/current-user-post-check";
            $.ajax({
                    url: n,
                    data: {
                        ids: t,
                        post_type: e
                    },
                    method: "GET",
                    success: function (e) {
                        if (1 == e.code) {
                            var i = e.url;
                            t.forEach(function (e) {
                                var t = $(r + "[data-id=" + e + "]"),
                                    n = t.find(".download-shop").children("a"),
                                    a = t.attr("data-style");
                                "true" == t.attr("data-free") ? n.text("\u4e0b\u8f7d") : n.text("\u8d2d\u4e70"),
                                "collect-and-download" == a && t.find(".collection").replaceWith('<a class="collection" href="' + i + '" >\u6536\u85cf</a>')
                            })
                        } else e.data.forEach(function (e) {
                            var t = $(r + "[data-id=" + e.id + "]"),
                                n = t.find(".download-shop").children("a");
                                ("collect-and-download" == t.attr("data-style") || ".model-series" == r && "true" == t.attr("data-free")) && (e.mark ? t.find(".collection").replaceWith('<span data-model= "' + a + '" class="collection collection-active">\u5df2\u6536\u85cf</span>') : t.find(".collection").replaceWith('<span data-model= "' + a + '"class="collection">\u6536\u85cf</span>')),
                            e.buy ? n.text("\u4e0b\u8f7d") : n.text("\u8d2d\u4e70")
                        })
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
        }
    };
    window.JUN = e,
    window.showSignIn = function (e) {
        $('<div class="blocker"><div class="bjj-signin-modal"><a class="modal-close" href><b></b><b></b><b></b><b></b></a><iframe src="' + e + '" width="400" height="538" class="bjj-sigin-iframe"></iframe></div></div>').appendTo($("body"))
    };
    var t = function (e) {
        "BJJ_USER_SIGNED_IN" === e.data ? window.location.reload() : "TP_SIGNED_IN" === e.data && parent.postMessage("BJJ_USER_SIGNED_IN", "*")
    };
    window.removeEventListener("message", t, !1),
    window.addEventListener("message", t, !1);
    var n = function (e) {
        for (var t, n = [], a = 0, i = e.length; a < i; a++) t = e[a],
        -1 === n.indexOf(t) && n.push(t);
        return n
    };
    window.array_uniq = n
}(),
Vue.http.headers.common["X-CSRF-Token"] = document.querySelector("meta[name=csrf-token]").getAttribute("content"),
Vue.component("congrat", {
    template: '<div class="congrat-message"></div>',
    props: ["for"],
    mounted: function () {
        for (var e = $(this.$el), t = this["for"].split(","), n = 0; n < t.length; n++) e.addClass("attr-" + t[n])
    }
}),
Vue.component("error", {
    template: '<div class="error-message"></div>',
    props: ["for"],
    mounted: function () {
        for (var e = $(this.$el), t = this["for"].split(","), n = 0; n < t.length; n++) e.addClass("attr-" + t[n])
    }
}),
window.mixinErrors = {
    created: function () {
        var e = function () {
            var e = $(this).parents(".control");
            e.find(".error-message").text(""),
            e.removeClass("erroneous")
        };
        $(document).off("change", ".form-select").on("change", ".form-select", e).off("input", ".form-control").on("input", ".form-control", e)
    },
    directives: {
        disabled: {
            inserted: function (e, t) {
                $(e).find("input, select, button, textarea").prop("disabled", t.value)
            },
            componentUpdated: function (e, t) {
                $(e).find("input, select, button, textarea").prop("disabled", t.value)
            }
        }
    },
    methods: {
        congrats: function (e) {
            for (var t in $(".congrat-message").removeClass("active"), e) $(".congrat-message.attr-" + t).text(e[t].join("\u3001")).addClass("active");
            setTimeout(function () {
                $(".congrat-message").text("").removeClass("active")
            }, 5e3)
        },
        processErrors: function (e) {
            if ("string" == typeof e) return window.alert(e);
            for (var t in e.base && window.alert(e.base.join("\u3001")), $(".control.erroneous .error-message").text(""), $(".control.erroneous").removeClass("erroneous"), e) {
                var n = $(".error-message.attr-" + t);
                n.parents(".control").addClass("erroneous"),
                n.text(e[t].join("\u3001"))
            }
            $(".control.erroneous:first").find(".form-select, .form-control, .form-btn").first().focus()
        }
    }
},
$(function () {
    function s(e, t, n) {
        var a = new FormData;
        return a.append("file", e),
        a.append("key", t),
        a.append("token", n),
        $.ajax({
            url: "https://up.qbox.me",
            data: a,
            cache: !1,
            processData: !1,
            contentType: !1,
            type: "POST"
        })
    }
    function c() {
        var e = $(".posts-comment-image").length;
        $(".posts-comment-help").text("\u5171" + e + "\u5f20\uff0c\u8fd8\u80fd\u4e0a\u4f20" + (3 - e) + "\u5f20"),
        0 < e ? $(".posts-comment-ok").removeClass("disabled") : $(".posts-comment-ok").addClass("disabled")
    }
    $(document).off("submit", ".post-comment-form").on("submit", ".post-comment-form", function () {
        var a = $(this),
            e = a.attr("action"),
            t = a.find(".posts-comment-list-image"),
            n = a.serialize();
        t.each(function () {
                var e = $(this).data("url");
                e && (n += "&images[]=" + encodeURIComponent(e))
            }),
        a.find(".main-review-value").each(function () {
                n += "&" + $(this).data("key") + "=" + $(this).text()
            });
        var i = $(this).hasClass("no-redirect");
        return $.post(e, n).then(function (e) {
                if (i) {
                    var t = a.parent(".reply-comment"),
                        n = t.prev(".reply").find("[data-toggle]");
                    return t.hasClass("shown") && (t.removeClass("shown"), n.data("toggle", n.text()), n.text("\u6210\u529f\u56de\u590d")),
                    a[0].reset(),
                    $.rails.enableFormElements(a),
                    void(window.loadComments && window.loadComments())
                }
                "object" == typeof Turbolinks && "function" == typeof Turbolinks.visit ? ($.rails.enableFormElements(a), Turbolinks.visit(e["continue"]), $(document).one("turbolinks:load", function () {
                    Turbolinks.visit(e.canonical)
                })) : window.location.href = e["continue"]
            }, function (e) {
                if (e.responseJSON && e.responseJSON["continue"]) window.location.href = e.responseJSON["continue"];
                else {
                    $.rails.enableFormElements(a);
                    var t = a.find(".textarea-container");
                    t.addClass("field-with-errors").attr("data-error", e.responseJSON.message),
                    t.removeClass("review-error"),
                    e.responseJSON.review_error && t.addClass("review-error")
                }
            }),
        !1
    }).off("click", ".upvote, .downvote").on("click", ".upvote, .downvote", function () {
        var n = $(this),
            e = $("#comments").data(n.hasClass("upvote") ? "upvote" : "downvote");
        return $.post(e.replace("ID", $(this).data("id"))).then(function (e) {
                n.parent().find(".active").removeClass("active"),
                "voted" === e.status && n.addClass("active");
                var t = n.parent().find(".votes-total");
                t.length || (t = n.parent().siblings(".votes-total")),
                t.text(e.total_votes)
            }, function (e) {
                e.responseJSON && e.responseJSON["continue"] && (window.location.href = e.responseJSON["continue"])
            }),
        !1
    }).off("click", ".insert-image").on("click", ".insert-image", function () {
        var e = $(this).nextAll(".posts-comment-images-popup");
        e.toggleClass("active");
        var n = e.find(".posts-comment-insert");
        return n.prevAll().remove(),
        $(".posts-comment-list-image").each(function () {
            var e = $(this).data("url"),
                t = $('<div class="posts-comment-image" />');
            $('<a class="posts-comment-image-remove" href title="\u4e0d\u4e0a\u4f20\u8fd9\u5f20\u56fe\u7247"></a>').appendTo(t).click(function () {
                    return t.remove(),
                    c(),
                    !1
                }),
            t.data("url", e),
            t.css("background-image", "url(" + e + "?imageView2/1/w/200/h/200)"),
            t.insertBefore(n)
        }),
        c(),
        !1
    }).off("change", ".comment-image-uploader").on("change", ".comment-image-uploader", function () {
        var e = $(this).parents(".posts-comment-images-popup"),
            a = e.data("upload");
        e.find(".posts-comment-ok").off("click").on("click", function () {
                var n = e.parents(".post-comment-form").find(".posts-comment-list").empty();
                return e.find(".posts-comment-image").each(function () {
                    var e = $('<div class="posts-comment-list-image" />'),
                        t = $(this).data("url");
                    e.data("url", t).css("background-image", "url(" + t + "?imageView2/1/w/200/h/200)"),
                    $('<a class="posts-comment-list-remove" href title="\u4e0d\u4e0a\u4f20\u8fd9\u5f20\u56fe\u7247"></a>').appendTo(e).click(function () {
                            return e.remove(),
                            !1
                        }),
                    n.append(e)
                }),
                e.removeClass("active"),
                !1
            });
        for (var i = e.find(".posts-comment-insert"), r = e.find(".posts-comment-image").length, o = [], t = 0; t < this.files.length && !(3 <= r); t++)!
        function (t) {
                if (-1 !== t.type.indexOf("image")) if (1048576 < t.size) o.push(t.name);
                else {
                    var n = $('<div class="posts-comment-image loading" />');
                    $('<a class="posts-comment-image-remove" href title="\u4e0d\u4e0a\u4f20\u8fd9\u5f20\u56fe\u7247"></a>').appendTo(n).click(function () {
                        return n.remove(),
                        c(),
                        !1
                    }),
                    n.insertBefore(i),
                    $.getJSON(a).then(function (e) {
                        return s(t, e.key, e.token).then(function (e) {
                            n.data("url", e.url),
                            n.removeClass("loading"),
                            n.css("background-image", "url(" + e.url + "?imageView2/1/w/200/h/200)"),
                            c()
                        })
                    })["catch"](function () {
                        n.remove()
                    }),
                    r++
                }
            }(this.files[t]);
        o.length && window.alert("\u4e0b\u5217\u56fe\u7247\u6587\u4ef6\u592a\u5927\uff0c\u4e0d\u5141\u8bb8\u4e0a\u4f20\uff08\u6bcf\u5f20\u56fe\u7247\u4e0d\u80fd\u8d85\u8fc71M\uff09\uff1a\n" + o.join("\n")),
        this.value = ""
    }).off("click", ".reply").on("click", ".reply", function () {
        console.log("\u70ed\u6367\u54af");
        var e = $(this).find("[data-toggle]"),
            t = $(this).next(".reply-comment");
        if (0 === t.length) {
                var n = $(this).data("p") || "#post-comment",
                    a = $(this).data("post-id"),
                    i = $(n).find(".post-comment-form").clone();
                t = $('<div class="reply-comment" />').append(i).insertAfter(this),
                setTimeout(function () {
                        t.addClass("shown")
                    }, 50),
                i.find(".reply-remove").remove();
                var r = e.data("commenter");
                r = r ? "\u56de\u590d " + r + "\uff1a" : "",
                i.find(".textarea").val("").attr("placeholder", r).trigger("keyup"),
                i.find(".submit").val("\u56de\u590d"),
                i.find("input[name=parent_comment_id]").val($(this).data("id")),
                i.attr("action", i.attr("action").replace("POST_ID", a))
            } else t.toggleClass("shown");
        setTimeout(function () {
                t.hasClass("shown") && t.find("textarea").focus()
            }, 200);
        var o = e.data("toggle");
        return e.data("toggle", e.text()),
        e.text(o),
        !1
    }).off("keydown", ".main-form textarea").on("keydown", ".main-form textarea", function (e) {
        !e.ctrlKey && !e.metaKey || 13 != e.keyCode && 10 != e.keyCode || $(this).parents(".main-form").submit()
    }).off("keyup", ".main-form textarea").on("keyup", ".main-form textarea", function () {
        var e = $(this).val();
        500 < e.length ? ($(this).val(e.slice(0, 500)), $(this).parents(".main-form").find(".count").text(0)) : $(this).parents(".main-form").find(".count").text(500 - e.length)
    }).off("click", ".smiley-item").on("click", ".smiley-item", function () {
        var e = $(this).parents("form").find("textarea");
        return e.insertAtCaret($(this).data("smiley")),
        $(this).parents(".dropdown-menu-active").removeClass("dropdown-menu-active"),
        e.focus(),
        !1
    })
}),


function () {
    var r = function (e) {
        var t = document.cookie.indexOf(e + "=");
        if (-1 == t) return !1;
        t = t + e.length + 1;
        var n = document.cookie.indexOf(";", t);
        return -1 == n && (n = document.cookie.length),
        document.cookie.substring(t, n)
    },
        e = function (e) {
            var t = new Date;
            t.setTime(t.getTime() - 1);
            var n = r(e);
            null != n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString())
        };
    window.getCookie = r,
    window.delCookie = e;
    var t = function () {
            var e = r("model_id"),
                t = r("model_type"),
                n = r("post-xdl"),
                a = r("version");
            if (t = "ModelSeries" == t ? "ModelSeries" : "Post", null != e && "" != e && null != t && "" != t) {
                    var i = "";
                    i = "ModelSeries" == t ? "/download?id=" + e + "&type=Series" : 1 === parseInt(n) ? "/download?id=" + e + "&xdl=1" : null != a && 0 < a.length ? "/download?id=" + e + "&version=" + a : "/download?id=" + e,
                    setTimeout(function () {
                        window.location.href = i + "&_t=" + Date.now()
                    }, 300)
                }
        };
    window.JUN.pageReload = t;
    var n = function (e) {
            JUN.ajax({
                url: "/posts/" + e + "/ticket-msg",
                method: "GET",
                data: {},
                success: function (e) {
                    if (-1 == e.code) $(".pay-warp").find(".tickets-num").html(""),
                    $(".pay-warp").find(".quan").hide();
                    else {
                        var t = $(".pay-warp").find(".tickets-num");
                        t.show(),
                        $(".pay-warp").find(".quan").show();
                        var n = "";
                        for (i in e.tickets) n += '\u6216 <span style="color: #ec5e5e;">' + e.tickets[i].num + "</span>\u5f20" + e.tickets[i].name + "</span>";
                        t.html(n)
                    }
                },
                error: function () {
                    $(".pay-warp").find(".tickets-num").html("")
                }
            })
        };
    window.JUN.getTicketmMsg = n
}();
var newestSearch = {
    setKeyword: function (e) {
        if (window.localStorage) {
            for (index in saved = JSON.parse(window.localStorage.getItem("newest_keyword")) || [], saved) saved[index] == e && saved.splice(index, 1);
            saved.splice(0, 0, e),
            6 < saved.length && saved.splice(saved.length - 1, 1),
            window.localStorage.setItem("newest_keyword", JSON.stringify(saved))
        }
    },
    getKeyword: function () {
        if (window.localStorage) {
            var e = JSON.parse(window.localStorage.getItem("newest_keyword")) || [],
                t = "\u6700\u8fd1\u641c\u7d22\uff1a";
            for (index in e) null != e[index] && (t += '<a href="/plus/search.php?keyword=' + e[index] + '">' + e[index] + "</a>");
            $(".lately-search").html(t)
        }
    }
};
window.newestSearch = newestSearch,
$(function () {
    newestSearch.getKeyword(),
    window.JUN.pageReload()
}),
$(function () {
    !
    function () {
        var e = document.createElement("script");
        e.src = "https://hm.baidu.com/hm.js?3328585cecf6ec313e849b75f233dcda";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }()
}),
$(function () {
    function r() {
        var t, n = $("#error-form .radi");
        return $.each(n, function (e) {
            !0 === n.eq(e).prop("checked") && (t = "identical" === n.eq(e).attr("id") ? n.eq(e).val() + $(".feedback-post-id").val() : n.eq(e).val())
        }),
        t
    }
    function n() {
        var t = $(".ver_list .ver_radio"),
            n = $(".download-version .two-btn .rar-rais");
        $.each(t, function (e) {
                t.eq(e).prop("checked") && (console.log(n.eq(e)), n.eq(e).prop("checked", "checked"))
            })
    }
    function a(e, t, n, a) {
        if (!a.children("a").hasClass("login")) {
            if (a.find("a").length <= 0) return !1;
            var i = t.attr("data-free"),
                r = t.attr("data-paid"),
                o = t.attr("data-author");
            if (1 == i || 1 == r || 1 == o) {
                    e.preventDefault();
                    var s = t.attr("data-download");
                    $(".download-warp-tan-no").stop(!0).fadeIn(200),
                    $(".download-rad .rar-rais").attr("data-down", s)
                } else {
                    e.preventDefault();
                    var c = a.parents(".details-center-warp").data("id");
                    $(".pay-warp").stop().fadeIn(),
                    1 != n ? (document.cookie = "post-xdl=0; path=/", $(".pay-warp").find(".model-xdl-l").hide()) : (document.cookie = "post-xdl=1; path=/", $(".pay-warp").find(".model-xdl-l").show()),
                    $(".pay-list .name").text($(".left-warp .medel-name-title .title").text()),
                    $(".pay-list .price").text($(".right-warp .model_price").data("price")),
                    JUN.getTicketmMsg(c)
                }
        }
    }
    if (document.querySelector("#post-details-section")) {
        $(".carousel-thumbnail-ul li").length < 6 && ($(".left").css("display", "none"), $(".right").css("display", "none")),
        $(".big-img-center-warp img").on("mousewheel", function () {
            var e = parseFloat($(this).attr("data-size"));
            0 < event.wheelDelta ? e += .1 : e -= .1,
            e < 1 && (e = 1),
            $(this).attr("data-size", e),
            $(this).css("transform", "scale(" + e + ")")
        }),
        $(".big-img-center-warp img").on("DOMMouseScroll", function (e) {
            var t = parseFloat($(this).attr("data-size"));
            e.detail < 0 ? t += .1 : t -= .1,
            t < 1 && (t = 1),
            $(this).attr("data-size", t),
            $(this).css("transform", "scale(" + t + ")")
        }),
        document.querySelector(".big-img-center-warp img").addEventListener("mousedown", function (e) {
            var a = this,
                i = e,
                r = i.clientX,
                o = i.clientY,
                s = parseFloat($(a).attr("data-left")),
                c = parseFloat($(a).attr("data-top"));
            document.onmousemove = function (e) {
                    i = e;
                    var t = parseFloat(i.clientX + s - r),
                        n = parseFloat(i.clientY + c - o);
                    $(a).attr("data-left", t),
                    $(a).attr("data-top", n),
                    a.style.left = t + "px",
                    a.style.top = n + "px"
                },
            document.onmouseup = function () {
                    document.onmousemove = null,
                    document.onmouseup = null
                }
        });
        setTimeout(function () {
            0 <= window.location.href.indexOf("download-tag") && $(".download-sc .download").click()
        }, 0);
        var i = 0;
        $(".right").on("click", function () {
            var e = $(".carousel-thumbnail-ul li").length - 5;
            e <= ++i && (i = e);
            var t = -167 * i;
            $(".carousel-thumbnail-ul").animate({
                left: t
            }, 200)
        }),
        $(".left").on("click", function () {
            --i < 0 && (i = 0);
            var e = -167 * i;
            $(".carousel-thumbnail-ul").animate({
                left: e
            }, 200)
        }),
        $(".sub-btn").on("click", function () {
            var e = window.location.href,
                t = e.split("/")[e.split("/").length - 1],
                n = r(),
                a = $(".error-txt").val(),
                i = $(".qq-txt").val();
            if (!i) return alert("\u8bf7\u586b\u5199\u4e0a\u60a8\u7684\u8054\u7cfbQQ"),
            !1;
            $.post("/post-feedback", {
                    post_feedback: {
                        post_id: t,
                        url: e,
                        reason: n,
                        description: a,
                        qq: i
                    }
                }, function () {
                    $(".error-x").click(),
                    alert("\u53cd\u9988\u6210\u529f!")
                })
        }),
        $(".shop-success-close-btn").on("click", function () {
            $(this).parents(".shop-success-warp").fadeOut(200)
        }),
        $(".more-details-btn").on("click", function () {
            "off" == $(this).attr("data-bl") ? ($(this).addClass("more-details-btn-no"), $(this).attr("data-bl", "on"), $(".details-content-warp").show()) : ($(this).removeClass("more-details-btn-no"), $(this).attr("data-bl", "off"), $(".details-content-warp").hide())
        }),
        $(".download-sc .download").on("click", function (e) {
            n();
            $(this).children("a");
            var t = $(this);
            btn = t.find("a"),
            exist = btn.attr("data-exist"),
            a(e, btn, exist, t),
            0 == exist ? ($(".pay-warp").find(".model-rar-rai").prop("checked", "true"), $(".pay-warp").find(".model-xdl-l").hide()) : ($(".pay-warp").find(".model-xdl-rai").prop("checked", "true"), $(".pay-warp").find(".model-xdl-l").show())
        })
    }
}),
$(function () {
    function t() {
        $(".big-img-center-warp img").css("transform", "scale(1)"),
        $(".big-img-center-warp img").attr("data-size", 1),
        $(".big-img-center-warp img").attr("style", ""),
        $(".big-img-center-warp img").attr("data-left", 0),
        $(".big-img-center-warp img").attr("data-top", 0)
    }
    function n(e) {
        var t = new Date,
            n = e.attr("data-src") + "?" + t.getTime(),
            a = e.attr("data-id");
        $(".big-img-center-warp img").attr("src", n),
        $(".img-count span:first-of-type").text(a)
    }
    function a(e) {
        collection = e.find("span:first-of-type"),
        count = e.find("span:nth-of-type(2)"),
        twoCount = $(".person-icon-list .xing span"),
        shoucang = $(".download-sc .shoucang").find(".shoucang-span"),
        id = e.attr("data-id"),
        console.log(id),
        $.post("/marks", {
            id: id
        }).then(function (e) {
            200 == e.code ? (collection.addClass("two-active"), collection.text("\u5df2\u6536\u85cf("), count.text(parseInt(count.text()) + 1), shoucang.text("\u5df2\u6536\u85cf"), shoucang.addClass("shoucang-active"), twoCount.text(parseInt(twoCount.text()) + 1)) : (collection.text("\u6536\u85cf("), collection.removeClass("two-active"), count.text(parseInt(count.text()) - 1), shoucang.text("\u6536\u85cf"), shoucang.removeClass("shoucang-active"), twoCount.text(parseInt(twoCount.text()) - 1))
        })["catch"](function () {})
    }
    if (document.querySelector("#post-details-section")) {
        var e, i = 0,
            r = !1;
        $(".details-carousel-ul li").click(function () {
                var e = $(".carousel-img").length;
                n($(this).find(".carousel-img")),
                $(".img-count span:last-of-type").text("/" + e),
                $(".big-img-warp").stop(!0).fadeIn(),
                t()
            }),
        $(document).on("keydown", function (e) {
                27 == e.keyCode && $(".big-img-warp").stop(!0).fadeOut()
            }),
        $(".x-btn").click(function () {
                $(".big-img-warp").stop(!0).fadeOut()
            }),
        $(".right-btn").click(function () {
                ++i > $(".details-carousel-ul li").length - 1 && (i = 0),
                n($(".carousel-img").eq(i)),
                t()
            }),
        $(".left-btn").click(function () {
                --i < 0 && (i = $(".details-carousel-ul li").length - 1),
                n($(".carousel-img").eq(i)),
                t()
            }),
        $(".carousel-thumbnail-ul li").mouseover(function () {
                $(".carousel-thumbnail-ul li").removeClass("li-active"),
                $(this).addClass("li-active"),
                i = $(this).index(),
                $(".details-carousel-ul li").stop(!0).fadeOut(0),
                $(".details-carousel-ul li").eq($(this).index()).stop(!0).fadeIn(0)
            }),
        $(".carousel-left").click(function () {
                --i < 0 && (i = $(".details-carousel-ul li").length - 1),
                $(".details-carousel-ul li").stop(!0).fadeOut(0),
                $(".details-carousel-ul li").eq(i).stop(!0).fadeIn(0),
                $(".carousel-thumbnail-ul li").removeClass("li-active"),
                $(".carousel-thumbnail-ul li").eq(i).addClass("li-active")
            }),
        $(".carousel-right").click(function () {
                ++i > $(".details-carousel-ul li").length - 1 && (i = 0),
                $(".details-carousel-ul li").stop(!0).fadeOut(0),
                $(".details-carousel-ul li").eq(i).stop(!0).fadeIn(0),
                $(".carousel-thumbnail-ul li").removeClass("li-active"),
                $(".carousel-thumbnail-ul li").eq(i).addClass("li-active")
            }),
        $(".advertisement-carousel").hover(function () {
                clearTimeout(e),
                $(".advertisement-warp").animate({
                    height: 304
                }, 0)
            }, function () {
                e = setTimeout(function () {
                    $(".advertisement-warp").animate({
                        height: 0
                    }, 0),
                    clearTimeout(e)
                }, 500)
            }),
        $(".advertisement-warp").hover(function () {
                clearTimeout(e)
            }, function () {
                $(".advertisement-warp").animate({
                    height: 0
                }, 0)
            }),
        $(".download-sc .shoucang").click(function (e) {
                e.stopPropagation(),
                a($(this))
            }),
        $(document).on("click", ".copy_title", function () {
                document.getElementById("model_title").value,
                document.getElementById("model_title").select(),
                document.execCommand("copy"),
                alert("\u590d\u5236\u6210\u529f\uff01")
            }),
        $(".guanzhu").click(function () {
                0 == r ? ($(this).text("\u5df2\u5173\u6ce8"), r = !0) : ($(this).text("\u5173\u6ce8"), r = !1)
            }),
        $(".error-btn").click(function () {
                $(".error-correction-warp").stop(!0).fadeIn()
            }),
        $(".error-x").click(function () {
                $(".error-correction-warp").stop(!0).fadeOut()
            })
    }
}),
window.middleCourse = function () {
    var e, t = $(".yun-advertisement a"),
        n = 0,
        a = t.length - 1,
        i = $(".yun-advertisement");
    e = setInterval(function () {
            a <= n ? n = 0 : n++,
            t.stop().fadeOut(),
            t.eq(n).stop().fadeIn()
        }, 4e3),
    i.on("mouseenter", function () {
            clearInterval(e)
        }),
    i.on("mouseleave", function () {
            e != undefined && clearInterval(e),
            e = setInterval(function () {
                a <= n ? n = 0 : n++,
                t.stop().fadeOut(),
                t.eq(n).stop().fadeIn()
            }, 4e3)
        })
},
window.initFeedback = function () {
    $(".feedback-tan, [data-feedback]").on("click", function () {
        $(".freed-back-warp").stop(!0).fadeIn(200);
        var e = $(this).data("feedback");
        return e && $(".freed-back-type .type").eq(e).trigger("click"),
        !1
    }),
    $(".freed-back-close").on("click", function () {
        $(this).parents(".freed-back-warp").stop(!0).fadeOut(200)
    }),
    $(".freed-no").on("click", function () {
        $(".freed-back-close").click()
    }),
    $(".freed-back-type .type").on("click", function () {
        $(".freed-back-type .type").removeClass("freed-back-type-active"),
        $(this).addClass("freed-back-type-active")
    })
},
window.initFooter = function () {
    $(document).on("keydown", "#main-search-query", function (e) {
        13 == e.keyCode && $("#main-search-btn").click()
    }),
    $(".header-title-service").on("mouseenter", function () {
        var e = $(".service-show-warp");
        thisWidth = e.width(),
        obsWidth = $(window).width(),
        obsWidth <= 713 + thisWidth ? (e.css({
            left: "auto",
            right: "-35px"
        }), e.find(".service-show-warp-center").addClass("service-show-warp-at")) : (e.css({
            right: "auto",
            left: "-35px"
        }), e.find(".service-show-warp-center").removeClass("service-show-warp-at"))
    });
    !
    function () {
        var e = document.createElement("script");
        e.src = "https://hm.baidu.com/hm.js?d5cb7782e9c2366cd820e59ba063bfc4";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }(),


    function () {
        var e = document.createElement("script"),
            t = window.location.protocol.split(":")[0];
        e.src = "https" === t ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
    }()
},
$(function () {
    function e(e) {
        clearInterval(u),
        f.stop().fadeOut(),
        f.eq(e).stop().fadeIn()
    }
    function t(e) {
        spans.stop().animate({
            width: "0px"
        }, 0),
        spans.eq(e).stop().animate({
            width: "40px"
        }, 4e3)
    }
    function n(e) {
        var t = 50,
            n = 0;
        e.find("ul:first-of-type").clone().addClass("last-ul").appendTo(e);
        e.find("ul").length;
        var a = -1 * $(".hot-label-carousel-inside-warp").height() + 50;
        d = setInterval(function () {
                n++,
                e.stop().animate({
                    top: -t * n
                }, 300, function () {
                    -t * n < a + 50 && (e.stop().animate({
                        top: 0
                    }, 0), n = 0)
                })
            }, 3e3),
        $(".hot-label-carousel-warp").hover(function () {
                clearInterval(d)
            }, function () {
                d = setInterval(function () {
                    n++,
                    e.stop().animate({
                        top: -t * n
                    }, 300, function () {
                        -t * n < a + 50 && (e.stop().animate({
                            top: 0
                        }, 0), n = 0)
                    })
                }, 3e3)
            })
    }
    function a() {
        $(this).children("div:first-of-type").children(".similar-collection").stop().animate({
            bottom: "0"
        }, 100)
    }
    function i() {
        $(this).children("div:first-of-type").children(".similar-collection").stop().animate({
            bottom: "-34"
        }, 100)
    }
    function r(t, n) {
        var e, a = 0;
        e != undefined && clearInterval(e),
        t.find("span").mouseover(function (e) {
            e.stopPropagation(),
            t.find("span").removeClass("btns-active"),
            $(this).addClass("btns-active"),
            a = $(this).index(),
            n.find(".last-li-carousel-img").stop().fadeOut(200),
            n.find(".last-li-carousel-img").eq(a).stop().fadeIn(0)
        }),
        e = setInterval(function () {
            ++a > t.find("span").length - 1 && (a = 0),
            t.find("span").eq(a).trigger("mouseenter")
        }, 4e3),
        n.hover(function () {
            clearInterval(e)
        }, function () {
            e = setInterval(function () {
                ++a > t.find("span").length - 1 && (a = 0),
                t.find("span").eq(a).trigger("mouseover")
            }, 4e3)
        })
    }
    function o(e) {
        e.parent().find("span").removeClass("newest-btn-active"),
        e.addClass("newest-btn-active")
    }
    function s(t) {
        var n;
        return $.each(t, function (e) {
            t.eq(e).hasClass("newest-btn-active") && (n = t.eq(e).attr("data-id"))
        }),
        n
    }
    function c(e, t, n, a, i) {
        a != undefined && clearInterval(a);
        var r = (t - e) / (n / 100),
            o = 0;
        a = setInterval(function () {
                o += 100,
                0 < r ? e += r : e -= Math.abs(r),
                i.parents(".model-warps").find(".count-title").text(parseInt(e)),
                o == n && (clearInterval(a), i.parents(".model-warps").find(".count-title").text(t))
            }, 100)
    }
    function l() {
        0 <= window.location.href.indexOf("feedback=1") && $(".freed-back-warp").fadeIn()
    }
    var u, d, p, f = $(".carousel-ul li"),
        h = 0;
    spans = $(".i-btn-warp span"),
    $(".i-btn-warp i").on("mouseenter", function () {
            e(h = $(this).index()),
            t(h)
        }),
    $(".right-jiantou").click(function () {
            ++h > f.length - 1 && (h = 0),
            e(h),
            t(h)
        }),
    $(".left-jiantou").click(function () {
            --h < 0 && (h = f.length - 1),
            e(h),
            t(h)
        }),
    $(".carousel-warp").on("mouseover", function () {
            clearInterval(u)
        }),
    $(".carousel-warp").on("mouseleave", function () {
            u && clearInterval(u),
            u = setInterval(function () {
                ++h > f.length - 1 && (h = 0),
                f.stop().fadeOut(),
                f.eq(h).stop().fadeIn(),
                t(h)
            }, 4e3)
        });
    var m = setTimeout(function () {
            spans.eq(0).trigger("mouseenter"),
            clearTimeout(m),
            u = setInterval(function () {
                ++h > f.length - 1 && (h = 0),
                f.stop().fadeOut(),
                f.eq(h).stop().fadeIn(),
                t(h)
            }, 4e3)
        }, 0);
    n($(".hot-label-carousel-inside-warp")),
    $(".items-li").hover(a, i),
    $(document).on("mouseenter", ".items-li", a),
    $(document).on("mouseleave", ".items-li", i),
    r($(".last-li-carousel-btn-danti"), $(".last-li-carousel-danti")),
    r($(".first-item-carousel-btn"), $(".first-item")),
    r($(".last-item-carousel-btn"), $(".last-item")),
    r($(".btn-list"), $(".details-small-carousel")),
    r($(".first-item-carousel-btn-page"), $(".first-item-page")),
    r($(".last-item-carousel-btn-page"), $(".last-item-page")),
    $(".model-select-list .load-more-btn").on("click", function () {
            if ("\u8fdb\u5165\u5217\u8868" == ts.text()) window.location.href = "/series";
            else {
                ts.text("\u52a0\u8f7d\u4e2d...");
                var e = ts.attr("data-padding");
                e = !e || e.length <= 0 ? 6 : 8,
                $.ajax({
                    url: "/more-model-series",
                    data: {
                        category_id: 1,
                        page: 2,
                        per: 8,
                        padding: e
                    },
                    method: "GET",
                    success: function (e) {
                        $(e).appendTo($(".model-selected-ul"))
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25"),
                        ts.text("\u52a0\u8f7d\u66f4\u591a")
                    }
                })
            }
        }),
    $(".change-list").on("click", function (e) {
            var t = $(this),
                n = $(".newest-upload-ul-danti"),
                a = parseInt($(this).attr("data-page")),
                i = s($(".model-type-list span"));
            t.find(".change-list-before").addClass("change-list-active"),
            t.find(".change-list-active").css({
                    transform: "rotateZ(" + 360 * (a - 1) + "deg)"
                }),
            e.preventDefault(),
            $.ajax({
                    url: "/newest-posts",
                    data: {
                        category_id: i,
                        page: a,
                        per: 8
                    },
                    method: "GET",
                    success: function (e) {
                        n.find("li:not(:last-of-type)").remove(),
                        n.html(e),
                        a += 1,
                        t.attr("data-page", a)
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".model-type-list span").on("click", function (e) {
            o($(this)),
            $(".change-list").attr("data-page", 2);
            var t = $(this).attr("data-id"),
                n = $(".newest-upload-ul-danti");
            $(".change-list-before").removeClass("change-list-active"),
            $(".change-list-before").css({
                    transform: "rotateZ(0deg)"
                }),
            e.preventDefault(),
            $.ajax({
                    url: "/newest-posts",
                    data: {
                        category_id: t,
                        page: 1,
                        per: 8
                    },
                    method: "GET",
                    success: function (e) {
                        n.find("li:not(:last-of-type)").remove(),
                        n.html(e)
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".model-warps .load-more-btn").on("click", function () {
            var t = $(this),
                n = $(this).parent().find(".model-bottom-warp");
            if (id = s(t.parent().find(".model-list span")), "rjdt" != id && "kjcj" != id || (id = t.parent().find(".model-list span:eq(1)").data("id")), "\u8fdb\u5165\u5217\u8868" == t.text()) window.location.href = "/posts?category_id=" + id;
            else {
                    t.text("\u52a0\u8f7d\u4e2d...");
                    var e = t.attr("data-padding");
                    e = !e || e.length <= 0 ? 6 : 8,
                    $.ajax({
                        url: "/more-posts",
                        data: {
                            category_id: id,
                            page: 2,
                            per: 8,
                            padding: e
                        },
                        method: "GET",
                        success: function (e) {
                            t.text("\u8fdb\u5165\u5217\u8868"),
                            $(e).appendTo(n)
                        },
                        error: function () {
                            alert("\u83b7\u53d6\u5931\u8d25"),
                            t.text("\u52a0\u8f7d\u66f4\u591a")
                        }
                    })
                }
        }),
    $(".more-material-warp .load-more-btn").on("click", function () {
            var t = $(this),
                n = $(this).parent().find(".more-material-ul");
            if (id = s(t.parent().find(".more-material-list span")), "\u8fdb\u5165\u5217\u8868" == t.text()) window.location.href = "/posts?category_id=" + id;
            else {
                    t.text("\u52a0\u8f7d\u4e2d...");
                    var e = t.attr("data-padding");
                    e = !e || e.length <= 0 ? 6 : 8,
                    $.ajax({
                        url: "/more-posts",
                        data: {
                            category_id: id,
                            page: 2,
                            per: 8,
                            collection: 1,
                            padding: e
                        },
                        method: "GET",
                        success: function (e) {
                            t.text("\u8fdb\u5165\u5217\u8868"),
                            $($(e).html()).appendTo(n)
                        },
                        error: function () {
                            alert("\u83b7\u53d6\u5931\u8d25"),
                            t.text("\u52a0\u8f7d\u66f4\u591a")
                        }
                    })
                }
        }),
    $(".design-book-warp .load-more-btn").on("click", function () {
            var t = $(this),
                n = $(this).parent().find(".design-book-bottom-warp");
            if (id = t.parent().find(".design-book-list .newest-btn-active").attr("data-id"), "\u8fdb\u5165\u5217\u8868" == t.text()) window.location.href = "/posts?category_id=" + id;
            else {
                    t.text("\u52a0\u8f7d\u4e2d...");
                    var e = t.attr("data-padding");
                    e = !e || e.length <= 0 ? 6 : 8,
                    $.ajax({
                        url: "/more-posts",
                        data: {
                            category_id: id,
                            page: 2,
                            per: 8,
                            sort: "all",
                            collection: 1,
                            padding: e,
                            is_book: "yes"
                        },
                        method: "GET",
                        success: function (e) {
                            t.text("\u8fdb\u5165\u5217\u8868"),
                            $(e).appendTo(n)
                        },
                        error: function () {
                            alert("\u83b7\u53d6\u5931\u8d25"),
                            t.text("\u52a0\u8f7d\u66f4\u591a")
                        }
                    })
                }
        }),
    $(".design-book-list span").on("click", function () {
            o($(this));
            var t = $(this),
                n = $(".design-book-ul"),
                e = t.attr("data-id");
            $.ajax({
                    url: "/more-posts",
                    data: {
                        category_id: e,
                        page: 1,
                        per: 6,
                        collection: 1,
                        is_book: "yes"
                    },
                    method: "GET",
                    success: function (e) {
                        t.parents(".design-book-warp").find(".danti-model-ul").remove(),
                        t.parents(".design-book-warp").find(".load-more-btn").text("\u52a0\u8f7d\u66f4\u591a"),
                        n.html($(e).html())
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".more-software-list span").on("click", function () {
            o($(this));
            var e = $(this),
                t = ($(".software-download-ul"), e.attr("data-id"));
            $.ajax({
                    url: "/more-posts",
                    data: {
                        category_id: t,
                        page: 1,
                        per: 4,
                        collection: 1
                    },
                    method: "GET",
                    success: function (e) {
                        $(".software-download-ul").html($(e).html())
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".more-material-list span").on("click", function () {
            o($(this));
            var t = $(this),
                n = $(".more-material-ul");
            id = s(t.parent().find("span")),
            $.ajax({
                    url: "/more-posts",
                    data: {
                        category_id: id,
                        page: 1,
                        per: 8,
                        collection: 1
                    },
                    method: "GET",
                    success: function (e) {
                        n.html($(e).html()),
                        t.parents(".more-material-warp").find(".load-more-btn").text("\u52a0\u8f7d\u66f4\u591a")
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".model-list span").on("click", function () {
            t != undefined && clearInterval(t);
            var t, n = $(this);
            o(n);
            var e = s(n.parent().find("span"));
            n.parents(".model-warps").find(".danti-model-ul-danti-more").remove(),
            n.parents(".model-warps").find(".load-more-btn").text("\u52a0\u8f7d\u66f4\u591a"),
            $.ajax({
                url: "/posts-with-tags",
                data: {
                    category_id: e
                },
                method: "GET",
                success: function (e) {
                    n.parents(".model-warps").find(".model-bottom-warp").html(e),
                    n.parents(".model-warps").find(".count-title").text(0),
                    endNum = parseInt(n.parents(".model-warps").find(".count-title").attr("data-to")),
                    c(0, endNum, 1e3, t, n)
                },
                error: function () {
                    alert("\u83b7\u53d6\u5931\u8d25")
                }
            })
        }),
    $(document).on("click", ".collection", function (e) {
            var t = $(this);
            if (!(t.attr("href") && 0 < t.attr("href").length)) {
                e.stopPropagation();
                var n = t.attr("data-model");
                if ("\u6536\u85cf" == t.text().trim() || "\u5df2\u6536\u85cf" == t.text().trim()) {
                    var a, i = t.parents(".items-li").attr("data-id");
                    a = "series" == n ? {
                        id: i,
                        type: 1
                    } : {
                        id: i
                    },
                    $.post("/marks", a).then(function (e) {
                        200 == e.code ? (t.text("\u5df2\u6536\u85cf"), t.addClass("collection-active")) : (t.text("\u6536\u85cf"), t.removeClass("collection-active"))
                    })["catch"](function (e) {
                        4 != e.readyState ? alert("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5") : e.responseJSON && ((e = e.responseJSON).url ? window.location.href = e.url : e.msg && alert(e.msg))
                    })
                }
            }
        }),
    $(".ranking-upload .load-more-btn").on("click", function (e) {
            e.stopPropagation();
            var t = $(this),
                n = s(t.parents(".ranking-upload").find(".ranking-type-list span")),
                a = t.attr("data-page"),
                i = t.parents(".ranking-upload").find(".ranking-upload-ul"),
                r = t.parents(".ranking-upload").find(".model-name").attr("data-cate");
            r == undefined ? data = {
                    day: n,
                    page: a,
                    per: 20
                } : data = {
                    day: n,
                    category_id: r,
                    page: a,
                    per: 20
                },
            t.text("\u52a0\u8f7d\u4e2d..."),
            $.ajax({
                    url: "/ranks",
                    data: data,
                    method: "GET",
                    success: function (e) {
                        a++,
                        $(e).appendTo(i),
                        t.attr("data-page", a),
                        5 < a && t.hide(),
                        t.text("\u52a0\u8f7d\u66f4\u591a")
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25"),
                        t.text("\u52a0\u8f7d\u66f4\u591a")
                    }
                })
        }),
    $(".ranking-type-list span").on("click", function (e) {
            e.stopPropagation();
            var t = $(this);
            o(t);
            var n = s(t.parent(".ranking-type-list").find("span")),
                a = t.parents(".ranking-upload").find(".ranking-upload-ul"),
                i = t.parents(".ranking-upload").find(".model-name").attr("data-cate");
            i == undefined ? data = {
                    day: n,
                    page: 1,
                    per: 20
                } : data = {
                    day: n,
                    category_id: i,
                    page: 1,
                    per: 20
                },
            $.ajax({
                    url: "/ranks",
                    data: data,
                    method: "GET",
                    success: function (e) {
                        a.html(e),
                        t.parents(".ranking-upload").find(".load-more-btn").attr("data-page", 2),
                        t.parents(".ranking-upload").find(".load-more-btn").show()
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".model-select-ul li").on("click", function (e) {
            e.stopPropagation(),
            $(".ranking-upload-name-bottom .model-name").text($(this).text()),
            $(".ranking-upload-name-bottom .model-name").attr("data-cate", $(this).attr("data-cate")),
            $(this).parents(".model-select").css("display", "none");
            var t = $(this),
                n = s(t.parents(".ranking-upload").find(".ranking-type-list span")),
                a = t.parents(".ranking-upload").find(".ranking-upload-ul"),
                i = t.parents(".ranking-upload").find(".model-name").attr("data-cate");
            $.ajax({
                    url: "/ranks",
                    data: {
                        day: n,
                        category_id: i,
                        page: 1,
                        per: 20
                    },
                    method: "GET",
                    success: function (e) {
                        a.html(e),
                        t.parents(".ranking-upload").find(".load-more-btn").show(),
                        t.parents(".ranking-upload").find(".load-more-btn").attr("data-page", 2)
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
    $(".design-book-follow-ul li").mouseover(function () {
            $(".design-book-follow-ul li").removeClass("follow-active"),
            $(this).addClass("follow-active")
        }),
    $(".login-message-group .pt").hover(function () {
            clearTimeout(p),
            $(".pt-person-info").css("display", "inline-block")
        }, function () {
            p = setTimeout(function () {
                $(".pt-person-info").css("display", "none"),
                clearTimeout(p)
            }, 500)
        }),
    $(".pt-person-info").hover(function () {
            clearTimeout(p),
            $(this).css("display", "inline-block")
        }, function () {
            $(this).css("display", "none"),
            clearTimeout(p)
        }),
    $("#web-feedback-send").on("click", function () {
            var e = $(this);
            if ("\u8bf7\u7a0d\u540e.." != e.text()) {
                var t = "";
                $(".freed-back-type").children("span").each(function () {
                    $(this).hasClass("freed-back-type-active") && (t = $(this).text())
                });
                var n = $(".freed-back-txta").val() || "",
                    a = $(".freed-back-contact").val() || "";
                t.length <= 0 || n.length <= 0 || a.length <= 0 ? JUN.alert("\u8bf7\u586b\u5199\u5b8c\u6574\u4fe1\u606f") : (e.text("\u8bf7\u7a0d\u540e.."), JUN.ajax({
                        method: "post",
                        url: "/feedbacks",
                        data: {
                            type: t,
                            content: n,
                            contact: a
                        },
                        success: function (e) {
                            200 == e.code ? (JUN.alert("\u63d0\u4ea4\u6210\u529f,\u611f\u8c22\u60a8\u7684\u53cd\u9988"), $(".freed-back-close").click()) : JUN.alert(e.msg)
                        },
                        error: function () {
                            JUN.alert("\u63d0\u4ea4\u5931\u8d25,\u7f51\u7edc\u9519\u8bef\u6216\u670d\u52a1\u533a\u5f02\u5e38,\u8bf7\u7a0d\u540e\u91cd\u8bd5")
                        }
                    }).always(function () {
                        e.text("\u53d1\u9001\u53cd\u9988")
                    }))
            }
        }),
    $(".money-not-enough-close-btn").on("click", function () {
            $(this).parents(".money-not-enough-warp").fadeOut(200)
        }),
    $(".rh-mess-close-btn").on("click", function () {
            $(this).parents(".rh-mess-warp").fadeOut(200)
        }),
    l()
}),
$(function () {
    function e() {
        $("#format-xdl").prop("checked") ? $(".download-warp-tan .download-version").hide() : $(".download-warp-tan .download-version").show()
    }
    $(".down-yes-btn").on("click", function () {
        if (!$(this).is("a")) {
            var e = "/download?id=" + $(".download-warp-tan").data("id"),
                t = $(".download-warp-tan").data("type"),
                n = $(".download-warp-tan input[name='ver-select']:checked").val();
            "model_series" == t ? e += "&type=Series" : n && (e += "&version=" + n),
            window.location.href = e,
            $(".download-warp-tan").hide()
        }
    }),
    $(".shop-model").on("click", function () {
        if (!($(this).attr("href") && 0 < $(this).attr("href").length)) {
            $(".pay-warp").stop().fadeIn(200),
            $(".pay-warp").find(".model-type").hide();
            var e = "\uffe5" + $(this).attr("data-price"),
                t = $(this).attr("data-title"),
                n = $(this).attr("data-id"),
                a = $(this).attr("data-model");
            $(".pay-list .name").text(t),
            $(".pay-list .money").text(e),
            $(".pay-warp").attr("data-id", n),
            $(".pay-warp").attr("data-model", a)
        }
    }),
    $("input[name='format-file']").on("change", function () {
        e()
    }),
    e()
}),
$(function () {
    function r(e, t, n, a, i) {
        $.ajax({
            url: "/zt/xdl2.0/set-change",
            type: "DELETE",
            data: {},
            success: function () {
                $(".new-activity-wrap").attr("data-change", a - 1),
                $(".luck-message").children("span").text("\u60a8\u6709" + (a - 1) + "\u6b21\u62bd\u5956\u673a\u4f1a")
            }
        });
        var r, o = i.prize.name.split(":")[0],
            s = i.prize.name.split(":")[1],
            c = 98.3;
        1 < o && o < 13 ? (t = [n = 14 - o, n, n], r = "luck-i" + o) : 1 == o ? (t = [n = 1, 1, 1], r = "luck-i" + o) : (n = 0, t = l(), r = ""),
        $(".luck-item").slots(c, t, s, r, function () {
                e.removeClass("luck-btn-start-at"),
                e.text("\u5f00\u59cb"),
                r ? $("body").yesLuck(s, r) : $("body").notLuck()
            })
    }
    function o(e, t, n) {
        var a = l(),
            i = 98.3,
            r = "",
            o = "";
        0 <= t.responseJSON.message.indexOf("err_drawed") && ($.ajax({
                url: "/zt/xdl2.0/set-change",
                type: "DELETE",
                data: {},
                success: function () {
                    $(".new-activity-wrap").attr("data-change", n - 1),
                    $(".luck-message").children("span").text("\u60a8\u6709" + (n - 1) + "\u6b21\u62bd\u5956\u673a\u4f1a")
                }
            }), $(".luck-item").slots(i, a, r, o, function () {
                e.removeClass("luck-btn-start-at"),
                e.text("\u5f00\u59cb"),
                $("body").notLuck()
            }))
    }
    function l() {
        for (var e, t, n, a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], i = [], r = 2; 0 <= r; r--) {
            if (n = 12 <= a.length ? Math.round(10 * Math.random() + 1) : Math.round(9 * Math.random() + 1), i.push(a[n]), 2 == r && (e = n), 1 == r) t = n,
            Math.round(Math.random()) ? a.splice(e, 1) : a.splice(t, 1)
        }
        return i
    }
    function e() {
        if ($.support.cors = !0, window.XDomainRequest) {
            var e = new XDomainRequest;
            e.open("get", "http://jf.banjiajia.com/_xdl_new_prizes"),
            e.onload = function () {
                t(JSON.parse(e.responseText))
            },
            e.onerror = function () {
                alert("\u7f51\u7edc\u9519\u8bef")
            },
            setTimeout(function () {
                e.send()
            }, 0)
        } else XMLHttpRequest && $.ajax({
            url: "http://jf.banjiajia.com/_xdl_new_prizes",
            method: "GET",
            xhrFields: {
                withCredentials: !0
            },
            success: function (e) {
                t(e)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
    function t(e) {
        for (var t = e.prizes, n = t.length, a = "", i = 0; i < n; i++) {
            var r = new Date(t[i].time),
                o = r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate() + " " + r.getHours() + ":" + r.getMinutes();
            a += '<li><span class="winn-name">' + t[i].user + '</span><span class="winn-mes">\u83b7\u5f97</span><span class="winn-luck">' + t[i].prize.split(":")[1] + '</span><span class="winn-date">' + o + "</span></li>"
        }
        $(".luck-user-ul").html(""),
        $(a).appendTo($(".luck-user-ul")),
        s(),
        $(".luck-user-ul").show()
    }
    function n(e) {
        var t = 40,
            n = 0,
            a = (e.find("li").length, $(".luck-user-ul").height());
        labelTime = setInterval(function () {
                n++,
                e.stop().animate({
                    top: -t * n
                }, 200, function () {
                    a - 120 <= t * n && (e.stop().animate({
                        top: 0
                    }, 0), n = 0)
                })
            }, 1e3)
    }
    function s() {
        4 < $(".luck-user-ul li").length && n($(".luck-user-ul"))
    }
    function a(e) {
        for (var t = e.prizes, n = t.length, a = "", i = 0; i < n; i++) {
            var r = new Date(t[i].time),
                o = "luck-i" + t[i].prize.split(":")[0],
                s = r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate() + " " + r.getHours() + ":" + r.getMinutes();
            a += '<tr><td class="td-name">' + t[i].user + '</td><td ><span class="td-img ' + o + '" ></span><span>' + t[i].prize.split(":")[1] + "</span></td><td>" + s + "</td></tr>"
        }
        $(".my-luck-list").html(""),
        $("<tr><th>\u7f16\u53f7</th><th>\u83b7\u5956\u5185\u5bb9</th><th>\u65f6\u95f4</th></tr>").appendTo($(".my-luck-list")),
        $(a).appendTo($(".my-luck-list")),
        $(".my-luck-wrap").show()
    }
    function i() {
        var e = setTimeout(function () {
            document.cookie = "share_is=; expires=Thu, 01 Jan 1970 00:00:00 GMT",
            clearTimeout(e)
        }, 6e5)
    }
    function c() {
        var e;
        $(".new-activity-wrap").attr("data-user") && (e = 0 <= document.cookie.indexOf("share_is=wb") ? "wb" : 0 <= document.cookie.indexOf("share_is=qq") ? "qq" : 0 <= document.cookie.indexOf("share_is=qz") ? "qz" : null) && $.post("/zt/xdl2.0/get-change", {
            from: e
        }).then(function () {
            var e = parseInt($(".new-activity-wrap").attr("data-change"));
            $(".new-activity-wrap").attr("data-change", e + 1),
            $(".luck-message").children("span").text("\u60a8\u6709" + (e + 1) + "\u6b21\u62bd\u5956\u673a\u4f1a"),
            $("body").shareAlert("\u5206\u4eab\u6d3b\u52a8\u94fe\u63a5\uff0c\u53ef\u62bd\u5956\u4e00\u6b21", "\u6bcf\u65e5\u5206\u4eab\u53ef\u83b7\u5f973\u6b21\u62bd\u5956\u673a\u4f1a"),
            document.cookie = "share_is=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        })
    }
    if (document.querySelector("#xdl2-zt")) {
        var u = $(".luck-show-list i").length - 6,
            d = 0;
        $("#luck-btn-start").on("click", function () {
                if (window.XDomainRequest) return alert("\u53c2\u4e0e\u6b64\u6d3b\u52a8\u9700\u4f7f\u7528IE10\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u6216\u7528\u8c37\u6b4c\u7b49\u73b0\u4ee3\u6d4f\u89c8\u5668\uff0c360\u7b49\u6d4f\u89c8\u5668\u9700\u5f00\u542f\u6781\u901f\u6a21\u5f0f"),
                !1;
                var t, n = $(this),
                    a = 0,
                    i = $(".new-activity-wrap").attr("data-change");
                if (!n.hasClass("luck-btn-start-at") && 0 < i) n.addClass("luck-btn-start-at"),
                n.text("\u8bf7\u7a0d\u7b49..."),
                $.support.cors = !0,
                $.ajax({
                        url: "http://jf.banjiajia.com/_xdl_new_draw",
                        method: "POST",
                        xhrFields: {
                            withCredentials: !0
                        },
                        success: function (e) {
                            r(n, t, a, i, e)
                        },
                        error: function (e) {
                            400 == e.status ? (alert("\u767b\u5f55\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"), window.location.href = "http://www.banjiajia.com/sign-in") : o(n, e, i)
                        }
                    });
                else {
                        if (n.hasClass("luck-btn-start-at") || !(i < 0)) return !1;
                        alert("\u62bd\u5956\u6b21\u6570\u4e0d\u8db3")
                    }
            }),
        jQuery.fn.extend({
                slots: function (n, a, i, r, o) {
                    $(this).css("backgroundPositionY", n),
                    $(this).each(function (e) {
                        var t = $(this);
                        setTimeout(function () {
                            t.animate({
                                backgroundPositionY: n * a[e] + 11804
                            }, 6e3 + 3e3 * e, function () {
                                2 == e && o(i, r)
                            })
                        }, 400 * e)
                    })
                }
            }),
        e(),
        jQuery.fn.extend({
                notLuck: function () {
                    $("body").append($("<div class='not-luck-wrap'><div class='not-luck-body'><div class='title'>\u518d\u52aa\u529b\u4e00\u628a\uff0c\u4e0b\u6b21\u5927\u5956\u5c31\u662f\u4f60\u7684\u54e6!</div><div class='not-luck-btn'>\u786e\u5b9a</div><span class='not-luck-close'></span></div></div>")),
                    $(".not-luck-btn").on("click", function () {
                        $(".not-luck-wrap").remove()
                    }),
                    $(".not-luck-close").on("click", function () {
                        $(".not-luck-wrap").remove()
                    })
                }
            }),
        jQuery.fn.extend({
                yesLuck: function (e, t) {
                    $("body").append('<div class="luck-yes-wrap"><div class="luck-yes-body"><div class="title">\u606d\u559c\u4f60\u83b7\u5f97' + e + '</div><div class="message">\u8bf7\u8ba4\u771f\u586b\u5199\u4e2a\u4eba\u4fe1\u606f\uff0c\u82e5\u83b7\u5f97\u4e66\u7c4d\u3001\u5de5\u5177\u5305\u7b49\u8bf7\u586b\u5199\u5bf9\u5e94\u90ae\u5bc4\u5730\u5740\u3002</div><div class="img ' + t + '"></div><form class="info-list"><div class="list-item-luck"><span class="name">QQ\u53f7\u7801:</span><input id="lick-qq" type="text" /></div><div class="list-item-luck"><span class="name">\u59d3&emsp;&ensp;\u540d:</span><input id="luck-user" type="text" /></div><div class="list-item-luck"><span class="name">\u8054\u7cfb\u7535\u8bdd:</span><input id="luck-tel" type="text" /></div><div class="list-item-luck"><span class="name">\u8054\u7cfb\u5730\u5740:</span><input id="luck-address" type="text" /></div></form><div class="yes-luck-btn">\u63d0\u4ea4</div><span class="yes-luck-close"></span></div></div>'),
                    $(".yes-luck-close").on("click", function () {
                        $(".luck-yes-wrap").remove()
                    }),
                    $(".yes-luck-btn").on("click", function () {
                        $.ajax({
                            url: "http://jf.banjiajia.com/_user_info",
                            method: "GET",
                            xhrFields: {
                                withCredentials: !0
                            }
                        }).then(function (e) {
                            var t = e.info;
                            if (t && t.name && t.address && t.cellphone && t.qq_number) $(".luck-yes-wrap").remove();
                            else {
                                var n = $("#lick-qq").val(),
                                    a = $("#luck-user").val(),
                                    i = $("#luck-tel").val(),
                                    r = $("#luck-address").val();
                                if (console.log(t), !(n && a && i && r)) return alert("\u9996\u6b21\u4e2d\u5956\u8bf7\u8ba4\u771f\u586b\u5199\u83b7\u5956\u8005\u8054\u7cfb\u65b9\u5f0f"),
                                !1;
                                $.support.cors = !0,
                                $.ajax({
                                        url: "http://jf.banjiajia.com/_user_info",
                                        method: "POST",
                                        xhrFields: {
                                            withCredentials: !0
                                        },
                                        data: {
                                            qq_number: n,
                                            name: a,
                                            cellphone: i,
                                            address: r
                                        },
                                        success: function () {
                                            $(".luck-yes-wrap").remove()
                                        }
                                    })
                            }
                        })
                    })
                }
            }),
        jQuery.fn.extend({
                shareAlert: function (e, t) {
                    $("body").append('<div class="share-wrap"><div class="share-wrap-center"><div class="share-wrap-t">\u83b7\u5f97\u4e00\u6b21\u62bd\u5956\u673a\u4f1a</div><div class="share-wrap-t2">' + e + '</div><div class="share-wrap-t2">' + t + '</div><div class="share-btn">\u53bb\u6d3b\u52a8\u9875\u62bd\u5956</div><span class="share-wrap-close"></span></div></div>'),
                    $(".share-wrap-close").on("click", function () {
                        $(".share-wrap").remove()
                    }),
                    $(".share-btn").on("click", function () {
                        $(".share-wrap").remove()
                    })
                }
            }),
        $("#my-luck").on("click", function () {
                if (window.XDomainRequest) return alert("\u53c2\u4e0e\u6b64\u6d3b\u52a8\u9700\u4f7f\u7528IE10\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u6216\u7528\u8c37\u6b4c\u7b49\u73b0\u4ee3\u6d4f\u89c8\u5668\uff0c360\u7b49\u6d4f\u89c8\u5668\u9700\u5f00\u542f\u6781\u901f\u6a21\u5f0f"),
                !1;
                $.support.cors = !0,
                $.ajax({
                    url: "http://jf.banjiajia.com/_xdl_new_prizes?current_user=true",
                    method: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function (e) {
                        a(e)
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }),
        $(".luck-show-right").on("click", function () {
                u <= ++d && (d = u),
                $(".luck-show-list").animate({
                    left: -173 * d
                }, 300)
            }),
        $(".luck-show-left").on("click", function () {
                --d < 0 && (d = 0),
                $(".luck-show-list").animate({
                    left: -173 * d
                }, 300)
            }),
        $(".section-1-change span").on("click", function () {
                var e = $(this).index();
                $(".section-1-change span").removeClass("new-at-btn-at"),
                $(this).addClass("new-at-btn-at"),
                $(".section-2 .section-2-item").hide(),
                $(".section-2 .section-2-item").eq(e).stop().show()
            }),
        $("#luck-nav").on("click", function () {
                $(".new-at-left").click(),
                $(document.documentElement).animate({
                    scrollTop: 920
                }, 500),
                $(document.body).animate({
                    scrollTop: 920
                }, 500)
            }),
        $("#decrypt-nav").on("click", function () {
                $(".new-at-right").click(),
                $(document.documentElement).animate({
                    scrollTop: 920
                }, 500),
                $(document.body).animate({
                    scrollTop: 920
                }, 500)
            }),
        $(".nav-item-list .nav-item").on("click", function () {
                $(".nav-item-list .nav-item").removeClass("nav-item-active"),
                $(this).addClass("nav-item-active")
            }),
        $("#new-activity-back-top").on("click", function () {
                $(".nav-item-list .nav-item").removeClass("nav-item-active"),
                $(document.documentElement).animate({
                    scrollTop: 0
                }, 500),
                $(document.body).animate({
                    scrollTop: 0
                }, 500)
            }),
        $("#rule-close").on("click", function () {
                $(".activity-rule-wrap").hide(),
                $(".rule-activity").removeClass("nav-item-active")
            }),
        $("#luck-rule").on("click", function () {
                $(".activity-rule-wrap").show()
            }),
        $(".rule-activity").on("click", function () {
                $(".activity-rule-wrap").show()
            }),
        $(".my-luck-close").on("click", function () {
                $(".my-luck-wrap").hide(),
                $(".my-luck-nav").removeClass("nav-item-active")
            }),
        $(".my-luck-nav").on("click", function () {
                $("#my-luck").click()
            }),
        $("#leave-word").on("click", function () {
                $(document.documentElement).animate({
                    scrollTop: 3132
                }, 500),
                $(document.body).animate({
                    scrollTop: 3132
                }, 500)
            }),
        $(".wb").on("click", function () {
                document.cookie = "share_is=wb",
                i()
            }),
        $(".qz").on("click", function () {
                document.cookie = "share_is=qz",
                i()
            }),
        $(".qq").on("click", function () {
                document.cookie = "share_is=qq",
                i()
            }),
        $(".wx").on("click", function () {
                1 == $(this).attr("data-click") ? ($(this).find(".wx-code").hide(), $(this).attr("data-click", 0)) : ($(this).find(".wx-code").show(), $(this).attr("data-click", 1))
            }),
        c()
    }
}),
$(function () {}),
$(function () {
    var s = "";
    $(".left span").click(function () {
        $(".left span").removeClass("list-item-active"),
        $(this).addClass("list-item-active")
    }),
    $(".mode-list .pay-type").on("click", function () {
        $(".mode-list .pay-type").removeClass("mode-active"),
        $(this).addClass("mode-active")
    }),
    $(".btn-close").on("click", function () {
        $(this).parents(".pay-warp").fadeOut()
    }),
    $("#go-pay").on("click", function () {
        var t = $(this);
        if ("\u8bf7\u7a0d\u5019..." != t.text()) {
            t.text("\u8bf7\u7a0d\u5019...");
            var e = $(this).parents("#model-series-pay-warp").find(".mode-list"),
                n = "balance";
            e.children("span").each(function () {
                    $(this).hasClass("mode-active") && (n = $(this).attr("data-way"))
                });
            var a = $("input[name='version-type-r']:checked").val();
            a ? document.cookie = "version=" + a + "; path=/" : window.delCookie("version");
            var i = $(this).parents("#model-series-pay-warp"),
                r = {
                    _time: Date.now(),
                    model_id: i.attr("data-id"),
                    pay_type: n
                };
            if ("ser" == i.attr("data-model") && (r.model = "ser"), "post" == i.attr("data-model-type") && (r.target_id = i.attr("data-target")), "balance" !== n) {
                    if ("ticket" === n) return r.ticket_id = t.parents(".pay-warp").find(".real-quan").attr("data-id"),
                    void(confirm("\u5c06\u4f1a\u6263\u9664\u76f8\u5e94\u7684\u4e0b\u8f7d\u5238\uff0c\u786e\u5b9a\u5417\uff1f") ? l(r, t) : t.text("\u53bb\u652f\u4ed8"));
                    var o = "balance" === n ? "" : "http://www.xiadele.com/wx-ali-pay";
                    console.log("what the url is ?", o),
                    $.ajax({
                        url: o,
                        data: r,
                        cache: !1,
                        timeout: 15e3,
                        success: function (e) {
                            if (0 == e.code) {
                                if ("ali" == e.data.type) return document.cookie = "model_id=" + r.model_id + "; path=/",
                                r.model && "ser" == r.model && (document.cookie = "model_type=ModelSeries; path=/"),
                                void(location.href = e.data.url);
                                $(".small-pay-warp").stop().fadeOut(0),
                                $(".weixin-pay").stop().fadeIn(100),
                                jQuery("#qrcode").qrcode({
                                    render: "canvas",
                                    width: 240,
                                    height: 240,
                                    text: e.data.url
                                }),
                                $(".total-price").text($(".money").text()),
                                s = e.data.order,
                                u(e.data.order)
                            } else - 1 == e.code ? alert(e.msg) : 1 == e.code && alert("\u60a8\u5df2\u7ecf\u8d2d\u4e70\u8be5\u8d44\u6e90,\u4e0d\u7528\u91cd\u590d\u8d2d\u4e70");
                            t.text("\u53bb\u652f\u4ed8")
                        },
                        error: function () {
                            alert("\u8d2d\u4e70\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"),
                            t.text("\u53bb\u652f\u4ed8")
                        }
                    })
                } else confirm("\u5c06\u4f1a\u6263\u9664\u76f8\u5e94\u7684\u4f59\u989d\uff0c\u786e\u5b9a\u5417\uff1f") ? c(r, t) : t.text("\u53bb\u652f\u4ed8")
        }
    }),
    $(".btn-group .no").on("click", function () {
        $(".btn-close").click()
    }),
    $(".weixin-close").on("click", function () {
        $("#qrcode").html(""),
        $(this).parents(".weixin-pay").stop().fadeOut(100),
        $(".small-pay-warp").stop().fadeIn(0)
    });
    var c = function (e, t) {
        var n = "/buy_with_ye";
        JUN.ajax({
            url: n,
            method: "POST",
            data: e,
            success: function (e) {
                e.data ? a() : e.msg ? -2 == e.code ? ($(".money-not-enough-warp").show(), $(".pay-warp").hide()) : JUN.alert(e.msg) : JUN.alert("\u652f\u4ed8\u5931\u8d25"),
                t.text("\u53bb\u652f\u4ed8")
            },
            error: function () {
                t.text("\u53bb\u652f\u4ed8")
            }
        })
    },
        l = function (e, t) {
            var n = "/buy_with_ticket";
            JUN.ajax({
                url: n,
                method: "POST",
                data: e,
                success: function (e) {
                    200 != e.code ? JUN.alert(e.msg) : a(),
                    t.text("\u53bb\u652f\u4ed8")
                },
                error: function () {
                    JUN.alert("\u8d2d\u4e70\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"),
                    t.text("\u53bb\u652f\u4ed8")
                }
            })
        },
        u = function (e) {
            "" !== $("#qrcode").html() && e == s && $.ajax({
                url: "/order/status",
                data: {
                    order: e,
                    _time: Date.now()
                },
                cache: !1,
                success: function (e) {
                    1 == e.code ? (document.cookie = "model_id=" + e.data.post_id + "; path=/", document.cookie = "model_type=" + e.data.post_type + "; path=/", a()) : -1 == e.code || 2 == e.code ? (alert(e.msg), 2 == e.code && window.location.reload()) : 0 == e.code && setTimeout(function () {
                        u(e.data.order)
                    }, 5e3)
                },
                error: function (e) {
                    0 === e.readyState ? setTimeout(function () {
                        u(data.data.order)
                    }, 5e3) : alert("\u652f\u4ed8\u5931\u8d25,\u7f51\u7edc\u9519\u8bef\u6216\u670d\u52a1\u5668\u5f02\u5e38")
                }
            })
        },
        a = function () {
            $(".shop-success-warp").show();
            var e = 3,
                t = setInterval(function () {
                    e < 0 ? ($(".shop-success-warp").hide(), clearInterval(t), window.location.reload()) : ($(".time-mess").text(e + "\u79d2\u540e\u5237\u65b0\u9875\u9762"), e--)
                }, 1e3)
        }
}),
$(function () {
    jQuery.fn.extend({
        seeDetails: function (e) {
            $("body").append($('<div class="see-details-wrap"><div class="see-details-body"><p class="see-details-close"></p>' + e + "</div></div>")),
            $(".see-details-close").on("click", function () {
                $(".see-details-wrap").remove()
            })
        }
    }),
    $(document).on("click", ".see-details", function () {
        $(this).attr("data-details");
        var e = $(this).attr("data-id");
        JUN.ajax({
            method: "get",
            data: {
                id: e
            },
            url: "/get-review-reason",
            success: function (e) {
                $("body").seeDetails(e.msg)
            },
            error: function () {
                alert("\u83b7\u53d6\u5931\u8d25")
            }
        })
    })
}),
window.initRightNav = function () {
    var e = '<ul class="right-nav">\n<div class="new-liwu l">\n<a href="http://www.banjiajia.com/posts/49874" target="_blank">\u70b9\u51fb\u9886\u53d6</a>\n</div>\n<li>\n<a>\u4e0a\u4f20</a>\n<a href="/posts/new" class="setup-tan" target="_blank" rel="nofollow">\u4e0a\u4f20\u7d20\u6750</a>\n</li>\n<li>\n<a>\u7b7e\u5230</a>\n<div class="setup-tan qiandao-btns">\u70b9\u51fb\u7b7e\u5230</div>\n<div class="qiandao-tan"><span class="qiandao-btn">\u7b7e\u5230\u9886\u79ef\u5206</span><a class="linkto-jf" href="http://jf.banjiajia.com/" target="_blank">\u79ef\u5206\u5546\u57ce</a></div>\n</li>\n<li>\n<a>QQ\u7fa4</a>\n<div class="setup-tan">QQ\u7fa4</div>\n<div class="qq-warp">\n<p class="qq-title">\u7d20\u6750\u4ea4\u6d41\u7fa4</p>\n<ul class="qq-a-list">\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=fa956b48051633ebc6719aa4ff5e8b4d35c195c13b78a06bbe8bc18295fae975" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">141356058</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u4ea4\u6d41\u2460\u7fa4</span>\n</a>\n</li>\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=1fbf7d8ca6109c1c0e5eac7123dd232bb1177135fe4e12d4e014cd322e375342" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">398545854</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u4ea4\u6d41\u2461\u7fa4</span>\n</a>\n</li>\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=ee342cedb6cc483f92f467ec6543754ef8c5604035e7dc6d980051ed7aefa0bf" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">451200141</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u4ea4\u6d41\u2462\u7fa4</span>\n</a>\n</li>\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=5cacdf8e024bd83ea9b5efa5565c93ee21f3a7cee90303b12f8c96d93a92a3ef" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">297605458</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u4ea4\u6d41\u2463\u7fa4</span>\n</a>\n</li>\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=71eb6a8b6bfb46e0a82ac558fd0f9195c75331a4309b390b4beaf8f1603b4b7e" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">461777255</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u4ea4\u6d41\u2464\u7fa4</span>\n</a>\n</li>\n<li>\n<a href="//shang.qq.com/wpa/qunwpa?idkey=7d3c3fa5815d9c11da1aa89c0a816ab93630319279e7de4e8928b3b56171d76c" target="_blank" rel="nofollow">\n<span class="qq-icon"></span>\n<span class="qq-num">203917424</span><span class="qq-txt">\u4e0b\u5f97\u4e50\u8f6f\u4ef6\u4ea4\u6d41\u7fa4</span>\n</a>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<a>\u5ba2\u670d</a>\n<div class="setup-tan">\u8054\u7cfb\u5ba2\u670d</div>\n<div class="kefu-tan">\n<p class="kefu-title"><span>\u5728\u7ebf\u5ba2\u670d</span>\u5468\u4e00\u81f3\u5468\u516d\uff089:00-18:00\uff09</p>\n<div class="kefu-list">\n<span class="kefu-icon"></span>\n<span class="kefu-name">\u9ed1\u52a0\u4ed1</span>\n<span class="kefu-num">2821352491</span>\n<a href="http://wpa.qq.com/msgrd?v=3&uin=2821352491&site=qq&menu=yes" target="_blank" class="kefu-btn" rel="nofollow">QQ\u4ea4\u8c08</a>\n</div>\n<div class="kefu-list">\n<span class="kefu-icon kefu-icon-women"></span>\n<span class="kefu-name">\u6591\u6591</span>\n<span class="kefu-num">3231943783</span>\n<a href="http://wpa.qq.com/msgrd?v=3&uin=3231943783&site=qq&menu=yes" target="_blank" class="kefu-btn" rel="nofollow">QQ\u4ea4\u8c08</a>\n</div>\n</div>\n</li>\n<li class="freed-back-li">\n<a href="">\u53cd\u9988</a>\n<div class="feedback-tan new-tucao setup-tan">\u65b0\u7248\u5410\u69fd</div>\n</li>\n<li class="back-top"></li>\n</ul>\n';
    $(".right-nav").length || $(e).appendTo("body"),
    500 < $(window).scrollTop() && ($(".back-top").css("height", "44px"), $(".freed-back-li").addClass("freed-back-li-active")),
    $(window).scroll(function () {
        500 < $(window).scrollTop() ? ($(".back-top").css("height", "44px"), $(".freed-back-li").addClass("freed-back-li-active")) : ($(".back-top").css("height", "0px"), $(".freed-back-li").removeClass("freed-back-li-active"))
    }),
    $(".back-top").click(function () {
        $(document.documentElement).animate({
            scrollTop: 0
        }, 1e3),
        $(document.body).animate({
            scrollTop: 0
        }, 1e3)
    }),
    $(".sign-btn-a").on("click", function (e) {
        e.stopPropagation(),
        e.preventDefault(),
        JUN.ajax({
            method: "Post",
            url: "http://www.xiadele.com/daily-signs",
            success: function (e) {
                $(".for-daily-sign-warp").html(e.html),
                $(".for-daily-sign-warp").children().show(),
                $(".sign-num").show(200),
                $(".sign-num").hide(1200)
            },
            error: function () {
                alert("\u7b7e\u5230\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
            }
        })
    }),
    $(".qiandao-btn").on("click", function () {
        $(".sign-warp").stop(!0).fadeIn(200)
    }),
    $(".qiandao-btns").on("click", function () {
        $(".sign-warp").stop(!0).fadeIn(200)
    }),
    $(document).on("click", ".sign-warp-close", function () {
        $(".sign-warp").stop(!0).fadeOut(200)
    }),
    $(".new-user-wrap .close").on("click", function (e) {
        e.preventDefault(),
        $(".new-user-wrap").fadeOut()
    })
},
window.initSearch = function (r, t) {
    var n, a = $(".list-item-warp .list-item-warp-title"),
        i = $(".right-warp .download-sc");
    if ($(window).scroll(function () {
            if (110 <= $(window).scrollTop()) {
                $(".header").addClass("header-active"),
                $(".head-body").hide();
                var e = $(".search-group").clone(!0);
                if ($(".search-group").css("opacity", "0"), $(".header").find(".search-group").length <= 0 && e.appendTo($(".header")), 1200 < $(window).scrollTop() ? $(".collage-container .nav").fadeIn() : $(".collage-container .nav").fadeOut(), i.length) {
                    var t = i.offset().top;
                    t - $(window).scrollTop() <= 0 && $(".header .detail_top").length <= 0 ? ($(".header .search-group").hide(), $(".medel-name-title").clone(!0).appendTo($(".detail_top")), $(".download-sc").clone(!0).appendTo($(".detail_top")), $(".detail_top").clone(!0).appendTo($(".header"))) : 0 < t - $(window).scrollTop() && ($(".header .detail_top").remove(), $(".header .search-group").show(), $(".detail_top").html(""))
                }
                if (a.length) {
                    var n = a.offset().top;
                    n - $(window).scrollTop() <= 0 && $(".header .list-item-warp-title").length <= 0 ? ($(".header .search-group").hide(), $(".list-item-warp-title").clone(!0).appendTo($(".header")), $(".header .list-item-warp-title").addClass("list_title_at"), $(".header").height(56)) : 0 < n - $(window).scrollTop() && ($(".header .search-group").show(), $(".header .list-item-warp-title").remove(), $(".header").height("auto"))
                }
            } else $(".header").height("auto"),
            $(".header").removeClass("header-active"),
            $(".search-group").css("opacity", "1"),
            $(".header").find(".search-group").remove(),
            $(".head-body").fadeIn(),
            $(".hot-search").show()
        }), 110 <= $(window).scrollTop()) {
            $(".header").addClass("header-active"),
            $(".head-body").hide();
            var e = $(".search-group").clone(!0);
            $(".search-group").css("opacity", "0"),
            $(".header").find(".search-group").length <= 0 && e.appendTo($(".header"))
        }
    var o = "suggestCb";
    window[o] = function (e) {
            var t = e.length;
            if (t) {
                $(".search-bottom-ul").html(""),
                $("<div class='mes'>\u5efa\u8bae\u641c\u7d22</div>").appendTo($(".search-bottom-ul"));
                for (var n = 0; n < t; n++) {
                    var a = "<a target='_blank' href='/plus/search.php?keyword=" + e[n].word + "' class='query-link'>" + e[n].html + "<span class='fr'>" + e[n].occurrence + "</span></a>";
                    $(a).appendTo($(".search-bottom-ul"))
                }
            } else for ($(".search-bottom-ul").html(""), $("<div class='mes'>\u70ed\u95e8\u641c\u7d22</div>").appendTo($(".search-bottom-ul")), n = 0; n < r.length; n++) {
                var i = "<li><a target='_blank' href='/plus/search.php?keyword=" + r[n] + "'>" + r[n] + "</a></li>";
                $(i).appendTo($(".search-bottom-ul"))
            }
        },
    $(".search-inp").on("keyup", function () {
            var e = $(this).val();
            clearTimeout(n),
            n = setTimeout(function () {
                $.getScript(t + "?callback=" + o + "&query=" + encodeURIComponent(e))
            }, 400)
        }),
    $(".search-inp").on("click", function (e) {
            e.stopPropagation(),
            $(this).parents(".search-group-right").find(".search-bottom-ul").show(),
            $(".search-type ul").hide()
        }),
    $(".search-inp").focus(function () {
            $(".search-btn-group").addClass("search-at")
        }),
    $(".search-inp").blur(function () {
            $(".search-btn-group").removeClass("search-at")
        }),
    $(document).on("click", function () {
            $(this).find(".search-bottom-ul").hide(),
            $(".search-type ul").hide()
        }),
    $(".search-type-wrap").on("click", function (e) {
            e.stopPropagation(),
            $(this).parent().find("ul").show(),
            $(".search-bottom-ul").hide()
        }),
    $(".search-type ul li").on("click", function (e) {
            e.stopPropagation(),
            $(this).parents(".search-type").find(".search-type-wrap").text($(this).text());
            var t = $(this).attr("data-id");
            $(this).parents(".search-type").find("#search-id").val(t),
            $(this).parent().hide()
        })
},
$(function () {
    function e() {
        var e = (new Date).getTime() / 1e3,
            t = $(".daojishi").attr("data-start-time"),
            n = $(".daojishi").attr("data-end-time");
        if (e < t) return !1;
        time = n - e,
        i = setInterval(function () {
                time--,
                time <= 0 && clearInterval(i);
                var e = parseInt(time / 86400),
                    t = parseInt(time / 3600 % 24),
                    n = parseInt(time / 60 % 60),
                    a = parseInt(time % 60);
                t < 10 && (t = "0" + t),
                n < 10 && (n = "0" + n),
                a < 10 && (a = "0" + a),
                $(".daojishi .time").text(e + "\u5929" + t + "\u65f6" + n + "\u5206" + a + "\u79d2")
            }, 1e3)
    }
    function t(e) {
        e.children().children().is("a") || ($(".model-one").find(".sell-price").text($(".price-group").find(".ones-price").text()), $(".model-more").find(".total-price").text($(".price-group").find(".total-price").text()), $(".model-pay .single-price-group").hide(), $("#more-price").click(), $(".model-pay").fadeIn())
    }
    function n() {
        0 <= window.location.href.indexOf("#download-tag") && ($(".download-all").attr("data-buy") && "true" == $(".download-all").attr("data-buy") ? ($(".download-warp-tan .rar-rais").attr("data-down", $(".download-all").attr("data-url")), $(".download-warp-tan").show()) : $(".download-all").click())
    }
    var i;
    document.querySelector("#frontend-post-model-series") && ($(".header").addClass("search-header-active"), $(".shop").on("click", function () {
        $(this).hasClass("download") || ($(".model-pay .single-price-group").show(), $(".model-pay").attr("data-post", $(this).parents("li").attr("data-id")), $(".model-pay").attr("data-post-name", $(this).parents("li").find(".list-page-ul-model-txt-title").text()), $(".model-pay").stop().fadeIn(), $(".model-one .sell-price").text($(".price-group .ones-price").text()), $(".model-more .total-price").text($(".price-group .total-price").text()))
    }), $(".model-pay-close").on("click", function () {
        $(this).parents(".model-pay").stop().fadeOut()
    }), $(".model-pay-ok").on("click", function () {
        var e = $("#model-series-pay-warp");
        e.attr("data-model", "ser");
        var t = $(this).parents(".model-pay").find('input[name="price"]:checked').val(),
            n = $(this).parents(".model-pay").attr("data-post"),
            a = $(this).parents(".model-pay").attr("data-post-name");
        "price" == t ? e.find("span.name").text($(".model-count").text()) : (e.attr("data-model-type", "post"), e.find("span.name").text(a)),
        e.attr("data-target", n),
        $(this).parents(".model-pay").stop().fadeOut(),
        $(".pay-warp").stop().fadeIn(),
        1 == $("#one-price").prop("checked") ? $(".money .price").text($(".model-one .sell-price").text()) : $(".money .price").text($(".model-more .total-price").text()),
        $(".pay-warp").find(".quan").hide()
    }), $(".model-pay-no").on("click", function () {
        $(".model-pay-close").click()
    }), e(), $(".shop-down").on("click", function () {
        t($(this))
    }), n())
}),
$(function (i) {
    function a(e) {
        e.addClass("niceIn"),
        setTimeout(function () {
            e.removeClass("niceIn")
        }, 1e3)
    }
    i(".vote-option").on("click", function () {
        event.preventDefault();
        var t = i(this),
            e = t.data("voteurl"),
            n = t.data("votetype");
        i.ajax({
                url: e,
                data: "",
                method: "GET",
                async: !1,
                success: function (e) {
                    1 == e.success ? (i(".likes_num").text(e.likes_count), i(".dislikes_num").text(e.dislikes_count), "like" == n ? (i(".like-up").html("<img src=//cache.xiadele.com/assets/frontend/topics/like/like-a60344c247ea4b54f574da4587363dd303ea35862da313031f233bef6e13780e.png>"), i.tipsBox({
                        obj: t,
                        str: "+1",
                        callback: function () {
                            setTimeout("$('.like-content').addClass('hide-vote');", 3e3)
                        }
                    }), a(i(this))) : (i(".like-down").html("<img src=//cache.xiadele.com/assets/frontend/topics/dislike/dislike-b579d2dfad8a6298e74f3d082fd8ee9a61bdf23c9ec3ffff5ccf8aea970134d2.png>"), setTimeout("$('.like-content').addClass('hide-vote');", 3e3))) : alert(e.msg)
                },
                error: function (e) {
                    401 != e.status ? alert("\u64cd\u4f5c\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5") : alert("\u8bf7\u5148\u767b\u5f55")
                }
            })
    }),
    i.extend({
        tipsBox: function (e) {
            e = i.extend({
                obj: e.obj,
                str: "+1",
                startSize: "12px",
                endSize: "30px",
                interval: 600,
                color: "red",
                callback: function () {}
            }, e),
            i("body").append("<span class='num'>" + e.str + "</span>");
            var t = i(".num"),
                n = e.obj.offset().left + e.obj.width() / 2,
                a = e.obj.offset().top - e.obj.height();
            t.css({
                    position: "absolute",
                    left: n + "px",
                    top: a + "px",
                    "z-index": 9999,
                    "font-size": e.startSize,
                    "line-height": e.endSize,
                    color: e.color
                }),
            t.animate({
                    "font-size": e.endSize,
                    opacity: "0",
                    top: a - parseInt(e.endSize) + "px"
                }, e.interval, function () {
                    t.remove(),
                    e.callback()
                })
        }
    }),
    i(".series-collect").on("click", function (e) {
        e.preventDefault();
        var t = i(this),
            n = t.data("id"),
            a = t.data("collecturl");
        t.attr("disabled", !0).css("pointer-events", "none"),
        i.ajax({
                url: a,
                data: {
                    id: n,
                    type: 1,
                    collect_type: "multi"
                },
                method: "POST",
                async: !0,
                success: function (e) {
                    200 == e.code ? t.html('<div class="button-circle-box"><span class="button-like-circle"></span></div><div class="button-like-text-box">\u5df2\u6536\u85cf</div>\n') : t.html('<div class="button-circle-box"><span class="button-like-circle"></span></div><div class="button-like-text-box">\u6536\u85cf\u81f3\u7a7a\u95f4\u9177</div>\n')
                },
                error: function (e) {
                    401 != e.status ? alert("\u64cd\u4f5c\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5") : alert("\u8bf7\u5148\u767b\u5f55")
                },
                complete: function () {
                    t.attr("disabled", !1).css("pointer-events", "auto")
                }
            })
    })
}),
$(function () {}),
$(function () {
    var t = {
        pickUpload: function () {
            var d = $(".picture_list");
            $.each(d, function (u) {
                var a = WebUploader.create({
                    auto: !0,
                    swf: "//cache.xiadele.com/assets/frontend/Uploader-aacbc6855ec7c860aa087baab69583a7e8e16c8f8bf78873a4f2168ebac583be.swf",
                    server: "http://up-z0.qiniu.com",
                    pick: $(".picture_item_first").eq(u),
                    fileNumLimit: 5,
                    accept: {
                        title: "Images",
                        extensions: "jpg,jpeg,png",
                        mimeTypes: "image/jpg,image/jpeg,image/png"
                    },
                    formData: {
                        token: "",
                        key: ""
                    }
                });
                a.on("fileQueued", function (e) {
                    var t = e.name.split("."),
                        n = t[t.length - 1].toLowerCase();
                    if ("jpg" != n && "jpeg" != n && "png" != n) return alert("\u6587\u4ef6\u683c\u5f0f\u4e0d\u5bf9"),
                    !1;
                    var a = d.eq(u).find(".picture_item_first"),
                        i = $('<div id="' + e.id + '" class="pick_item picture_item thumbnail"><img class="picture_img" data-url=""><p class = "set_cover">\u8bbe\u7f6e\u5c01\u9762</p><p class="pick_close"></p></div>'),
                        r = $('<svg width="232px" height="206px" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill:#ffffff;"></svg>'),
                        o = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        s = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        c = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                        l = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    $(o).attr("transform", "translate(122,104)"),
                    $(s).attr("transform", "translate(122,104)"),
                    $(c).attr({
                            cx: "122",
                            cy: "104",
                            r: 48
                        }),
                    $(l).attr({
                            x: "100",
                            y: "110"
                        }),
                    $(o).appendTo(r),
                    $(s).appendTo(r),
                    $(c).appendTo(r),
                    $(l).appendTo(r),
                    $(o).css("fill", "#cccccc"),
                    $(s).css("fill", "#0259f0"),
                    $(c).css("fill", "#FFFFFF"),
                    $(l).css({
                            fill: "#0259f0",
                            "font-size": "22px"
                        }),
                    r.appendTo(i),
                    i.insertBefore(a),
                    p.drawSvg($(o), 99.99, 50)
                }),
                a.on("uploadBeforeSend", function (e, t) {
                    var n = {
                        name: name,
                        type: "image",
                        bucket: 1
                    };
                    p.getToken(e, t, n)
                }),
                a.on("uploadProgress", function (e, t) {
                    var n = $("#" + e.id),
                        a = 0;
                    a = 1 == t ? 99.99 : 100 * t,
                    perent = n.find("svg"),
                    perent.children()[3].textContent = parseInt(100 * t) + "%",
                    p.drawSvg($(perent.children()[1]), a, 50)
                }),
                a.on("uploadSuccess", function (e, t) {
                    var n = $("#" + e.id);
                    n.find("svg").css("display", "none"),
                    n.find(".picture_img").attr({
                        src: t.url + "?imageView2/1/w/228/h/171",
                        "data-url": t.url
                    }),
                    n.parents(".picture_list").removeClass("error"),
                    a.removeFile(e)
                })
            })
        },
        rarUpload: function () {
            var c = $(".rar_list");
            $.each(c, function (s) {
                var e = c.eq(s).find(".rar_btn ");
                $.each(e, function (r) {
                    var o = WebUploader.create({
                        auto: !0,
                        swf: "//cache.xiadele.com/assets/frontend/Uploader-aacbc6855ec7c860aa087baab69583a7e8e16c8f8bf78873a4f2168ebac583be.swf",
                        server: "http://up-z0.qiniu.com",
                        pick: e.eq(r),
                        fileNumLimit: 1,
                        accept: {
                            title: "Images",
                            extensions: "rar,zip,7z"
                        },
                        formData: {
                            token: "",
                            key: ""
                        }
                    });
                    o.on("fileQueued", function () {
                        c.eq(s).find(".rar_item").eq(r).find(".rar_percent")
                    }),
                    o.on("uploadBeforeSend", function (e, t) {
                        var n = {
                            name: name,
                            type: "attachment",
                            bucket: 1
                        };
                        p.getToken(e, t, n)
                    }),
                    o.on("uploadProgress", function (e, t) {
                        var n = c.eq(s).find(".rar_item").eq(r).find(".rar_percent"),
                            a = n.find(".wait");
                        n.show(),
                        n.find(".parcent_at").width(180 * t),
                        n.find(".parcent_num").text(parseInt(100 * t) + "%"),
                        t <= 0 ? a.text("\u7b49\u5f85\u4e0a\u4f20") : 0 < t && t < 1 ? a.text("\u6b63\u5728\u4e0a\u4f20") : a.text("\u4e0a\u4f20\u5b8c\u6210")
                    }),
                    o.on("uploadSuccess", function (e, t) {
                        var n = c.eq(s).find(".rar_item").eq(r),
                            a = n.find(".rar_btn"),
                            i = n.find(".rar_uploading");
                        i.find(".rar_name").text(e.name),
                        a.hide(),
                        i.show(),
                        n.attr({
                                "data-size": parseFloat(e.size / 1024 / 1024).toFixed(2),
                                "data-key": t.key,
                                "data-name": e.name
                            }),
                        n.find(".rar_ver").attr("data-id") && n.parents(".rar_list").removeClass("error"),
                        o.removeFile(e)
                    })
                })
            })
        }
    };
    t.pickUpload(),
    t.rarUpload();
    var p = {
        drawSvg: function (e, t, n) {
            var a = 3.6 * t,
                i = a * (Math.PI / 180),
                r = (Math.sin(i) * n).toFixed(2),
                o = -(Math.cos(i) * n).toFixed(2),
                s = ["M", 0, 0, "v", -n, "A", n, n, 0, window.Number(180 < a), 1, r, o, "z"];
            e.attr("d", s.join(" "))
        },
        getToken: function (e, t, n) {
            e.file.name,
            $.ajax({
                url: "/uploads",
                data: n,
                method: "GET",
                async: !1,
                success: function (e) {
                    t.token = e.Data.token,
                    t.key = e.Data.key
                },
                error: function () {
                    alert("\u83b7\u53d6\u5931\u8d25")
                }
            })
        },
        getModelType: function (e, t, n, a, i) {
            $.ajax({
                url: "/categories",
                type: "GET",
                data: {
                    parent_id: e
                },
                success: function (e) {
                    t(e, n, a, i)
                }
            })
        },
        getChildModel: function (e, t, n, a) {
            for (var i = 0, r = e.categories.length; i < r; i++) $("<li class='" + a + "' data-id='" + e.categories[i].id + "'>" + e.categories[i].name + "</li>").appendTo(n)
        },
        addRarUploadInit: function () {
            return $(".add_none").clone(!0)
        },
        ckeckVer: function (e) {
            for (var t = !1, n = 0, a = e.length; n < a; n++) for (var i = n + 1; i <= a; i++) e[n] === e[i] && (t = !0);
            return t
        }
    },
        g = {
            getModelInfo: function () {
                var l = $(".upload_msg"),
                    u = {
                        activityableTypeList: [],
                        activityableIdList: [],
                        nameList: [],
                        styleList: [],
                        typeList: [],
                        mapList: [],
                        limpList: [],
                        priceList: []
                    };
                return $.each(l, function (e) {
                        var t = l.eq(0).find(".activityable_type").val(),
                            n = l.eq(0).find(".activityable_id").val(),
                            a = l.eq(e).find(".upload_txt").val(),
                            i = l.eq(e).find(".model_style").attr("data-id"),
                            r = l.eq(e).find(".model_type_parent").attr("data-id"),
                            o = l.eq(e).find(".model_map").attr("data-id"),
                            s = l.eq(e).find(".model_light").attr("data-id"),
                            c = l.eq(e).find(".model_price").attr("data-price");
                        a || l.eq(e).find(".upload_txt").parents(".upload_item ").addClass("error"),
                        i || l.eq(e).find(".model_style").parents(".upload_item ").addClass("error"),
                        r || l.eq(e).find(".type_thr_val").parents(".upload_item ").addClass("error"),
                        o || l.eq(e).find(".model_map").parents(".upload_item ").addClass("error"),
                        s || l.eq(e).find(".model_light").parents(".upload_item ").addClass("error"),
                        c || l.eq(e).find(".model_price").parents(".upload_item ").addClass("error"),
                        u.activityableTypeList.push(t),
                        u.activityableIdList.push(n),
                        u.nameList.push(a),
                        u.styleList.push(i),
                        u.typeList.push(r),
                        u.mapList.push(o),
                        u.limpList.push(s),
                        u.priceList.push(c)
                    }),
                u
            },
            getImgUrl: function () {
                var t = [],
                    i = $(".picture_list");
                return $.each(i, function (e) {
                        var n = i.eq(e).find(".picture_img"),
                            a = [];
                        n.length <= 0 && i.eq(e).addClass("error"),
                        $.each(n, function (e) {
                                if (e < 5) {
                                    var t = n.eq(e).attr("data-url");
                                    a.push({
                                        url: t
                                    })
                                }
                            }),
                        t.push(a)
                    }),
                t
            },
            getCover: function () {
                var a = $(".picture_list"),
                    i = [];
                return $.each(a, function (e) {
                        var t = a.eq(e).find(".img_cover");
                        if (t.length) {
                            var n = t.attr("data-url");
                            i.push(n)
                        } else n = a.eq(e).find(".picture_img").eq(0).attr("data-url"),
                        i.push(n)
                    }),
                i
            },
            getRar: function () {
                var t = $(".rar_list"),
                    n = [];
                return $.each(t, function (e) {
                        var r = t.eq(e).find(".rar_item"),
                            o = [];
                        $.each(r, function (e) {
                                var t = r.eq(e).attr("data-key"),
                                    n = r.eq(e).attr("data-size"),
                                    a = r.eq(e).attr("data-name"),
                                    i = r.eq(e).find(".rar_ver").attr("data-id");
                                if (!(t && n && a && i)) return !0;
                                o.push({
                                        name: i,
                                        size: n,
                                        key: t,
                                        rar_name: a
                                    })
                            }),
                        0 < o.length ? (t.eq(e).removeClass("error"), n.push(o), t.removeClass("error")) : t.eq(e).addClass("error")
                    }),
                n
            },
            finalPost: function (e, t) {
                if (e.length < $(".updown-warp-center").length) return t.text("\u5b8c\u6210\u4e0a\u4f20"),
                void alert("\u4fe1\u606f\u6ca1\u586b\u5199\u5b8c\u6574\uff0c\u4fdd\u5b58\u81f3\u8349\u7a3f,\u53ef\u5728\u6211\u7684\u4e0a\u4f20\u8bb0\u5f55\u67e5\u770b");
                0 < e.length ? $.post("/publish", {
                    ids: e
                }).then(function (e) {
                    0 < e.count ? (window.location.href = "/upload-success?num=" + e.count, t.text("\u5b8c\u6210\u4e0a\u4f20")) : alert("\u63d0\u4ea4\u5931\u8d25")
                }) : (alert("\u4fe1\u606f\u6ca1\u586b\u5199\u5b8c\u6574\uff0c\u4fdd\u5b58\u81f3\u8349\u7a3f,\u53ef\u5728\u6211\u7684\u4e0a\u4f20\u8bb0\u5f55\u67e5\u770b"), t.text("\u5b8c\u6210\u4e0a\u4f20"))
            },
            getModelId: function (e) {
                var d = $(".updown-warp-center"),
                    p = g.getModelInfo(),
                    f = g.getImgUrl(),
                    h = g.getRar(),
                    m = (g.getCover(), h = g.getRar(), []);
                $.each(d, function (e) {
                        var t = p.nameList[e],
                            n = p.typeList[e],
                            a = p.mapList[e],
                            i = p.limpList[e],
                            r = p.styleList[e],
                            o = f[e],
                            s = p.priceList[e],
                            c = h[e],
                            l = null;
                        if ($.each(c, function (e) {
                                l = c[e].name && c[e].key ? 1 : 0
                            }), !(t && n && a && i && s && r && o.length && l)) return !0;
                        var u = d.eq(e).attr("data-id");
                        m.push(u)
                    }),
                g.finalPost(m, e)
            },
            getUploadBeforeId: function () {
                var n = $(".updown-warp-center");
                return idList = [],
                $.each(n, function (e) {
                    var t = n.eq(e).attr("data-id");
                    t || (t = ""),
                    idList.push(t)
                }),
                idList
            }
        };
    $(".complete-button").on("click", function () {
            if (1 != $("#check").prop("checked")) return alert("\u9700\u8981\u5148\u540c\u610f\u4e0b\u5f97\u4e50\u7528\u6237\u534f\u8bae\uff01"),
            !1;
            var a = g.getModelInfo(),
                i = g.getImgUrl(),
                r = g.getCover(),
                o = g.getRar(),
                s = g.getUploadBeforeId(),
                c = $(".updown-warp-center").length,
                l = $(this),
                u = 0;
            l.text("\u4e0a\u4f20\u4e2d..."),
            $.each($(".updown-warp-center"), function (t) {
                    var e = s[t],
                        n = {
                            post: {
                                activityable_type: a.activityableTypeList[t],
                                activityable_id: a.activityableIdList[t],
                                title: a.nameList[t],
                                cover: r[t],
                                category_id: a.typeList[t],
                                price: a.priceList[t],
                                pictures: a.mapList[t],
                                lights: a.limpList[t],
                                styles: a.styleList[t],
                                images: i[t],
                                max_attachments: o[t]
                            }
                        };
                    e && (n.id = e),
                    JUN.ajax({
                            method: "post",
                            url: "/posts",
                            contentType: "application/json",
                            data: JSON.stringify(n)
                        }).then(function (e) {
                            u++,
                            $(".updown-warp-center").eq(t).attr("data-id", e.Data.id),
                            u === c && g.getModelId(l)
                        })["catch"](function () {
                            l.text("\u5b8c\u6210\u4e0a\u4f20")
                        })
                })
        }),
    $(document).on("click", ".pick_close", function () {
            $(this).parents(".pick_item").remove()
        }),
    $(document).on("click", ".del_rar", function () {
            var e = $(this).parents(".rar_item");
            e.hasClass("first_item") ? (e.find(".rar_percent").hide(), e.find(".rar_uploading").hide(), e.find(".rar_btn").show(), e.attr({
                "data-size": "",
                "data-key": "",
                "data-name": ""
            }), e.find(".rar_ver").attr("data-id", ""), e.find(".rar_ver").val(""), t.rarUpload()) : e.remove()
        }),
    $(document).on("mouseenter", ".select_val", function () {
            $(this).find(".show_ul").show()
        }),
    $(document).on("mouseleave", ".select_val", function () {
            $(this).find(".show_ul").hide()
        }),
    $(document).on("click", ".show_ul li", function () {
            var e = $(this),
                t = e.text(),
                n = e.attr("data-id");
            if (e.hasClass("ver_li")) {
                    var a = [],
                        i = $(this).parents(".rar_list").find(".rar_ver");
                    if (a.push(e.text()), $.each(i, function (e) {
                            i.eq(e).val() && a.push(i.eq(e).val())
                        }), e.parents("ul").prev().val() == t) return;
                    if (p.ckeckVer(a)) return alert("\u4e0d\u80fd\u4e0a\u4f20\u76f8\u540c\u7248\u672c"),
                    !1
                }
            e.parent().hide(),
            e.parents(".select_val").find(".show_val").val(t),
            e.parents(".select_val").find(".show_val").attr("data-id", n),
            e.hasClass("type_one") || e.hasClass("type_two") || e.parents(".upload_item ").removeClass("error")
        }),
    $(document).on("click", ".type_one", function () {
            var e = $(this),
                t = e.attr("data-id"),
                n = e.parents(".model_type_parent"),
                a = n.find(".type_two_ul"),
                i = "type_two";
            n.find(".type_two_val").val(""),
            n.find(".type_thr_val").val(""),
            n.find(".type_thr_val").attr("data-id", ""),
            n.attr("data-id", t),
            a.html(""),
            $(this).parents(".upload_item").removeClass("error"),
            p.getModelType(t, p.getChildModel, e, a, i)
        }),
    $(document).on("click", ".type_two", function () {
            var e = $(this),
                t = e.attr("data-id"),
                n = e.parents(".model_type_parent"),
                a = n.find(".type_thr_ul"),
                i = "type_thr";
            n.attr("data-id", t),
            n.find(".type_thr_val").val(""),
            n.find(".type_thr_val").attr("data-id", ""),
            a.html(""),
            $(this).parents(".upload_item").removeClass("error"),
            p.getModelType(t, p.getChildModel, e, a, i)
        }),
    $(document).on("click", ".type_thr", function () {
            $(this).parents(".model_type_parent").attr("data-id", $(this).data("id")),
            $(this).parents(".upload_item").removeClass("error")
        }),
    $(document).on("click", ".add_ver", function () {
            if (!(5 <= $(".rar_list .rar_item").length)) {
                var e = p.addRarUploadInit();
                e.removeClass("add_rar_wrap add_none"),
                e.insertBefore($(this)),
                t.rarUpload()
            }
        }),
    $(document).on("click", ".add-btn", function () {
            var e = "no" == $(".updown-warp").data("activity") ? "/upload-page" : "/upload-page?from=activity";
            $.ajax({
                url: e,
                method: "GET",
                success: function (e) {
                    $(e).insertBefore($(".rule-btn-group")),
                    t.pickUpload(),
                    t.rarUpload()
                }
            })
        }),
    $(document).on("click", ".upload_type .btn", function () {
            var e = $(this).parent(),
                t = e.find(".btn"),
                n = $(this);
            t.removeClass("active"),
            n.addClass("active"),
            e.attr("data-price", n.text().slice(0, -1))
        }),
    $(document).on("click", ".set_cover", function () {
            var e = $(this).parents(".picture_item");
            e.parent().find(".img_cover").remove();
            var t = e.find(".picture_img").attr("data-url");
            $('<span class="img_cover" data-url="' + t + '">\u5c01\u9762</span>').appendTo(e)
        }),
    $(document).on("click", ".delete_from", function () {
            if (!window.confirm("\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f")) return !1;
            $(this).parent().remove()
        }),
    $(document).on("keyup", ".upload_txt", function () {
            var e = $(this);
            e.val() && e.parents(".upload_item").removeClass("error")
        })
}),
$(function () {
    document.querySelector("#user-center-post-warp") && ($(".delete-user-btn").on("click", function (e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this).parents(".items-li").find(".del-firm");
        t.is(":hidden") ? t.show() : t.hide()
    }), $(".not-collection").on("click", function (e) {
        e.preventDefault(),
        e.stopPropagation(),
        $(this).parents(".items-li").find(".not-collection-firm").show()
    }), $(".design-book-img").on("mouseleave", function () {
        var e = $(this).find(".del-firm"),
            t = $(this).find(".not-collection-firm");
        0 < e.length && !e.is(":hidden") && e.hide(),
        0 < t.length && !t.is(":hidden") && t.hide()
    }), $(document).on("click", function () {
        $(".del-firm").hide(),
        $(".not-collection-firm").hide()
    }), $(".del-rirm-yes").on("click", "a", function (e) {
        if ("\u5220\u9664\u4e2d.." == $(this).text()) return e.preventDefault(),
        void e.stopPropagation();
        $(this).text("\u5220\u9664\u4e2d..")
    }), $(".not-collection-yes").on("click", "a", function (e) {
        if ("\u64cd\u4f5c\u4e2d.." == $(this).text()) return e.preventDefault(),
        void e.stopPropagation();
        $(this).text("\u64cd\u4f5c\u4e2d..")
    }), $(".del-rirm-yes").on("click", function () {
        $(this).children("a").click()
    }), $(".not-collection-yes").on("click", function () {
        $(this).children("a").click()
    }))
}),
$(function () {
    function e() {
        if (0 <= window.location.href.indexOf("value=")) var e = setTimeout(function () {
            $(".select-money .select-money-active").click(),
            clearTimeout(e)
        }, 0);
        else e = setTimeout(function () {
            $(".select-money .recharge-money").eq(0).click(),
            clearTimeout(e)
        }, 0)
    }
    function i(e, t) {
        $("#wx-qrcode").html("\u8bf7\u7a0d\u540e.."),
        $("#ali-qrcode").html("\u8bf7\u7a0d\u540e.."),
        $(".select-money").attr("data-wait", "y"),
        JUN.ajax({
            url: "/recharge",
            data: {
                type: e,
                pay: t,
                _time: Date.now()
            },
            cache: !1,
            success: function (e) {
                if ($("#ali-redirect-url").show(), $(".mess-ali").text("\u70b9\u51fb\u8df3\u8f6c\u652f\u4ed8\u5b9d\u652f\u4ed8"), $("#wx-qrcode").html(""), $("#ali-qrcode").html(""), e.wx.success ? ($("#wx-qrcode").qrcode({
                    render: "canvas",
                    width: 100,
                    height: 100,
                    text: e.wx.url
                }), $("#order-uuid").text(e.wx.order), $("#order-uuid").attr("data-uuid", e.ali.order), e.wx.order != a && (a = e.wx.order, n(e.wx.order, "wx"))) : $("#wx-qrcode").html("\u83b7\u53d6\u5931\u8d25"), e.ali.qr.success ? ($("#ali-qrcode").qrcode({
                    render: "canvas",
                    width: 100,
                    height: 100,
                    text: e.ali.qr.url
                }), e.ali.order != r && (r = e.ali.order, n(e.ali.order, "ali"))) : $("#ali-qrcode").html("\u83b7\u53d6\u5931\u8d25"), e.ali.redirect.success && $("#ali-redirect-url").attr("href", e.ali.redirect.url), 0 < $(".other-span").find(".dazhe").length && $(".other").hasClass("other-money-active")) $(".other-span").find(".dazhe")
            },
            error: function () {
                $("#wx-qrcode").html("\u83b7\u53d6\u5931\u8d25"),
                $("#ali-qrcode").html("\u83b7\u53d6\u5931\u8d25"),
                r = a = "",
                JUN.alert("\u7f51\u7edc\u5f02\u5e38\u6216\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u6216\u8054\u7cfb\u7f51\u7ad9\u7ba1\u7406\u5458")
            }
        }).always(function () {
            $(".select-money").attr("data-wait", "n")
        })
    }
    function n(e, t) {
        if ("wx" == t) {
            if (e != a) return
        } else if ("ali" == t && e != r) return;
        $.ajax({
            url: "/order/status",
            data: {
                order: e,
                _time: Date.now()
            },
            cache: !1,
            success: function (e) {
                1 == e.code ? window.location.href = window.location.pathname + "?do=recharged" : -1 == e.code || 2 == e.code ? alert(e.msg) : 0 == e.code && setTimeout(function () {
                    n(e.data.order, t)
                }, 6e3)
            },
            error: function (e) {
                0 === e.readyState ? setTimeout(function () {
                    n(data.data.order, t)
                }, 5e3) : alert("\u652f\u4ed8\u5931\u8d25,\u7f51\u7edc\u9519\u8bef\u6216\u670d\u52a1\u5668\u5f02\u5e38")
            }
        })
    }
    if (document.querySelector("#user-cash-center")) {
        e();
        var a = "",
            r = "";
        $(".select-money .recharge-money").on("click", function () {
                $("#ali-redirect-url").hide(),
                $(".mess-ali").text("\u8bf7\u7a0d\u540e..."),
                $(".payment-price .real-price").text($(this).find(".really-price").text());
                parseFloat($(this).find(".old-price").text()),
                parseFloat($(this).find(".really-price").text());
                if (!$(this).hasClass("no-request") && "y" !== $(".select-money").attr("data-wait")) {
                    $(".select-money .recharge-money").removeClass("select-money-active"),
                    $(".select-money .other").val(""),
                    $(".select-money .other").removeClass("other-money-active"),
                    $(".select-money .recharge-money").removeClass("no-request"),
                    $(this).addClass("select-money-active no-request");
                    var e = $(this).attr("data-name"),
                        t = $(this).attr("data-extra");
                    $(".select-payment").children("span").each(function () {
                            if ($(this).hasClass("select-payment-active")) return $(this).attr("data-name"),
                            !1
                        }),
                    $(".discount-warp").html(t),
                    i(e, "")
                }
            }),
        $(".select-money .other").on("keyup", function () {
                $(this).val() ? ($(".select-money .recharge-money").removeClass("select-money-active"), $(this).addClass("other-money-active")) : $(".select-money .other").removeClass("other-money-active")
            }),
        $(".select-payment span").on("click", function () {
                var e = $("#order-uuid").attr("data-uuid"),
                    t = $("#order-uuid").text();
                $("#order-uuid").text(e),
                $("#order-uuid").attr("data-uuid", t),
                $(".select-payment span").removeClass("select-payment-active"),
                $(this).addClass("select-payment-active"),
                $(this).index() ? ($(".wx-pay").hide(), $(".ali-pay").show(), $(".orcode").hide(), $(".select-payment-txt").hide(), $(".payment-price").css("top", "83px"), $(".payment-img").css("margin-top", "55px")) : ($(".wx-pay").show(), $(".ali-pay").hide(), $(".orcode").show(), $(".select-payment-txt").show(), $(".payment-price").css("top", "83px"), $(".payment-img").css("margin-top", "10px"))
            }),
        $(".td-del").on("mouseover", function () {
                $(this).parents("td").find(".del-message").css("display", "block")
            }),
        $(".td-del").on("mouseout", function () {
                $(this).parents("td").find(".del-message").css("display", "none")
            }),
        $(".del-group .td-del").on("click", function () {
                $(this).parent().find(".del-window").css("display", "block")
            }),
        $(".del-window .yes").on("click", function () {
                var e = $(this);
                "\u7b49\u5f85.." != e && (e.text("\u7b49\u5f85.."), JUN.ajax({
                    url: "/users/order-remove",
                    method: "delete",
                    data: {
                        id: e.attr("data-id")
                    },
                    success: function () {
                        e.parents("tr").remove()
                    },
                    error: function () {
                        JUN.alert("\u64cd\u4f5c\u5931\u8d25\uff1a\u7f51\u7edc\u5f02\u5e38\u6216\u670d\u52a1\u5668\u9519\u8bef,\u8bf7\u7a0d\u540e\u91cd\u8bd5")
                    }
                }).always(function () {
                    e.text("\u662f")
                }))
            }),
        $(".del-window .no").on("click", function () {
                $(this).parent().css("display", "none")
            }),
        $(document).on("keydown", ".other-span", function (e) {
                13 == e.keyCode && $(".other-span .other").blur()
            }),
        $(".other-span .other").on("blur", function () {
                var e = $(this).val();
                if ((e < .01 || !/^[0-9]+(.[0-9]{1,2})?$/.test(e)) && "" != e) return alert("\u8bf7\u8f93\u5165\u5927\u4e8e0.01\u5c0f\u4e8e\u4e09\u4f4d\u5c0f\u6570\u4e14\u6b63\u786e\u7684\u91d1\u989d"),
                !1;
                $("#ali-redirect-url").hide(),
                $(".mess-ali").text("\u8bf7\u7a0d\u540e...");
                var t = $(this).parent().find(".dazhe"),
                    n = t.length;
                if ($(this).val()) {
                        if ($(".discount-warp").html(""), i("", parseFloat($(this).val())), n) {
                            var a = parseFloat(t.text());
                            $(".payment-price .real-price").text((parseFloat($(this).val()) * (a / 10)).toFixed(2))
                        } else $(".payment-price .real-price").text($(this).val());
                        $(this).addClass("other-money-active")
                    }
            }),
        $("#income-2-transfer").on("click", function () {
                confirm("\u8f6c\u5b58\u4f59\u989d\u53ea\u80fd\u7528\u4e8e\u6d88\u8d39\uff0c\u64cd\u4f5c\u4e0d\u53ef\u9006\uff0c\u786e\u5b9a\u8f6c\u5b58\uff1f") && JUN.ajax({
                    url: window.location.pathname + "/income-transferring",
                    method: "Post",
                    success: function () {
                        JUN.alert("\u8f6c\u5165\u6210\u529f"),
                        window.location.href = window.location.pathname + "?do=cash"
                    },
                    error: function () {
                        JUN.alert("\u7f51\u7edc\u5f02\u5e38\u6216\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
                    }
                })
            })
    }
}),
$(function () {
    function t() {
        var e = $(".bottom-wrap .message"),
            t = $(".banner-time"),
            s = t.find("b"),
            n = new Date(e.attr("data-now")).getTime(),
            a = new Date(e.attr("data-expire")).getTime(),
            i = new Date(t.attr("data-now")).getTime(),
            r = new Date(t.attr("data-expire")).getTime(),
            c = (a - n) / 1e3,
            l = (r - i) / 1e3;
        setInterval(function () {
                c--,
                l--;
                var e = parseInt(c / 3600),
                    t = parseInt(c / 60 % 60),
                    n = parseInt(c % 60);
                e < 10 && 0 <= e ? e = "0" + e : e < 0 && (e = "00"),
                t < 10 && 0 <= t ? t = "0" + t : t < 0 && (t = "00"),
                n < 10 && 0 <= n ? n = "0" + n : n < 0 && (n = "00");
                var a = parseInt(l / 86400),
                    i = parseInt(l / 3600 % 24),
                    r = parseInt(l / 60 % 60),
                    o = parseInt(l % 60);
                a = a < 10 ? "0" + a : a.toString(),
                i = i < 10 ? "0" + i : i.toString(),
                r = r < 10 ? "0" + r : r.toString(),
                o = o < 10 ? "0" + o : o.toString(),
                $(".bottom-wrap .message").find(".time").text(e + "\uff1a" + t + "\uff1a" + n),
                s.eq(0).text(a[0]),
                s.eq(1).text(a[1]),
                s.eq(2).text(i[0]),
                s.eq(3).text(i[1]),
                s.eq(4).text(r[0]),
                s.eq(5).text(r[1]),
                s.eq(6).text(o[0]),
                s.eq(7).text(o[1])
            }, 1e3)
    }
    function n(e) {
        var t = e.find(".title2"),
            n = (e.find(".title2").find("b"), new Date(t.attr("data-now")).getTime()),
            a = (new Date(t.attr("data-expire")).getTime() - n) / 1e3,
            i = parseInt(a / 3600),
            r = parseInt(a / 60 % 60),
            o = parseInt(a % 60);
        i = i < 10 ? "0" + i : i.toString(),
        r = r < 10 ? "0" + r : r.toString(),
        o = o < 10 ? "0" + o : o.toString(),
        t.find("b").eq(1).text(i[0]),
        t.find("b").eq(2).text(i[1]),
        t.find("b").eq(3).text(r[0]),
        t.find("b").eq(4).text(r[1]),
        t.find("b").eq(5).text(o[0]),
        t.find("b").eq(6).text(o[1])
    }
    function a() {
        var i = [];
        $.each($(".s3-3-t2"), function (e, t) {
            var n = new Date($(t).attr("data-now")).getTime(),
                a = new Date($(t).attr("data-expire")).getTime();
            i.push((a - n) / 1e3)
        }),
        setInterval(function () {
            $.each(i, function (e) {
                i[e]--
            }),
            r(i)
        }, 1e3)
    }
    function r(e) {
        var r = $(".s3-3-t2");
        $.each(e, function (e, t) {
            var n = parseInt(t / 3600),
                a = parseInt(t / 60 % 60),
                i = parseInt(t % 60);
            n = n < 10 ? "0" + n : n.toString(),
            a = a < 10 ? "0" + a : a.toString(),
            i = i < 10 ? "0" + i : i.toString(),
            r.eq(e).find("b").eq(0).text(n[0]),
            r.eq(e).find("b").eq(1).text(n[1]),
            r.eq(e).find("b").eq(2).text(a[0]),
            r.eq(e).find("b").eq(3).text(a[1]),
            r.eq(e).find("b").eq(4).text(i[0]),
            r.eq(e).find("b").eq(5).text(i[1])
        })
    }
    function i(e, t) {
        var n = e;
        JUN.ajax({
            url: "/special/groupon-create",
            method: "post",
            data: {
                belonger_groupon_id: n,
                groupon_id: $(".zt-groupons").attr("data-id")
            },
            success: function (e) {
                0 != e.code ? (alert(e.msg), window.location.reload()) : "pc" == d ? 0 == res.code ? (t && t.parents(".partake-collage").hide(), $(".success-p-collage").show(), $(".success-p-collage .link").val(e.url)) : alert(res.msg) : 0 == res.code ? (alert("\u62fc\u56e2\u6210\u529f, \u5feb\u9080\u8bf7\u597d\u53cb\u53c2\u52a0\u62fc\u56e2\u5427~"), window.location.href = e.url) : alert(res.msg)
            },
            error: function (e) {
                "\u8bf7\u767b\u5f55" === e.responseJSON.msg ? "pc" == d ? window.showSignIn(e.responseJSON.url) : window.location.href = e.responseJSON.url : alert("\u53c2\u56e2\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
            }
        })
    }
    function o(t) {
        var e = t.attr("data-page");
        $.ajax({
            url: "/special/groupon-groups",
            method: "get",
            data: {
                page: e,
                groupon_id: $(".zt-groupons").attr("data-id")
            },
            success: function (e) {
                t.parents(".groupon-groups").replaceWith(e),
                clearInterval(l)
            },
            error: function () {
                alert("\u83b7\u53d6\u5931\u8d25")
            }
        })
    }
    function s() {
        clearInterval(l),
        l = setInterval(function () {
            0 < ".groupon-group-prev".length ? $(".groupon-group-prev").click() : clearInterval(l)
        }, 5e3)
    }
    function c() {
        return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
    }
    if (document.querySelector(".zt-groupons")) {
        alert("\u6d3b\u52a8\u5df2\u7ecf\u8fc7\u671f~");
        var l, u, d = "pc";
        document.querySelector(".collage-container-m") && (d = "mobile"),
        $(".bottom-center .btn1").on("click", function () {
            $(window).scrollTop(1300)
        }),
        $(document).on("click", ".share .wx", function () {
            var e = $(this).parents(".body").find("#copy").val();
            0 == $(this).attr("data-on") ? ($("#wxcode").html(""), $("#wxcode").fadeIn(), jQuery("#wxcode").qrcode({
                render: "canvas",
                width: 200,
                height: 200,
                text: e
            }), $(this).attr("data-on", 1)) : ($(this).attr("data-on", 0), $("#wxcode").fadeOut())
        }),
        $(document).on("click", ".copy-link", function () {
            document.getElementById("copy").value,
            document.getElementById("copy").select(),
            document.execCommand("Copy"),
            alert("\u590d\u5236\u6210\u529f\uff01")
        }),
        $(".act-msg").on("click", function () {
            $(window).scrollTop(1300)
        }),
        $(".act-fuli").on("click", function () {
            $(window).scrollTop(1880)
        }),
        $(".ks-collage").on("click", function () {
            $(window).scrollTop(2510)
        }),
        $(".nav ul li:nth-of-type(4)").on("click", function () {
            $(window).scrollTop(2849)
        }),
        $(".nav ul li:nth-of-type(5)").on("click", function () {
            $(window).scrollTop(9008)
        }),
        $(".nav ul li:nth-of-type(6)").on("click", function () {
            $(window).scrollTop(15067)
        }),
        $(".nav ul li:nth-of-type(7)").on("click", function () {
            $(window).scrollTop(21126)
        }),
        $(".footer").hide(),
        $(document).on("click", ".item-list .img img", function (e) {
            e.stopPropagation();
            var t = $(this).attr("data-src");
            $(".img-wrap img").attr("src", t),
            $(".img-wrap").fadeIn()
        }),
        $(".img-wrap .close").on("click", function () {
            $(this).parent().fadeOut()
        }),
        $(document).on("click", function () {
            $(".img-wrap").fadeOut()
        }),
        $(".img-wrap img").on("click", function (e) {
            e.stopPropagation()
        }),
        t(),
        a(),
        $(".category-change").on("touchstart click", function () {
            var e = $(this).attr("data-id"),
                t = $(this);
            t.parent().find(".category-change").removeClass("active"),
            t.addClass("active"),
            JUN.ajax({
                    method: "get",
                    data: {
                        cate_id: e
                    },
                    url: "/special/groupon-posts",
                    success: function (e) {
                        e && 0 < e.length && t.parent().next().replaceWith(e)
                    },
                    error: function () {
                        alert("\u83b7\u53d6\u5931\u8d25")
                    }
                })
        }),
        $(document).on("touchstart click", ".partake-collage .close", function () {
            $(".partake-collage").hide()
        }),
        $(document).on("touchstart click", ".go-collage", function () {
            var e = $(this);
            if (e.hasClass("disabled")) return !1;
            $.ajax({
                method: "get",
                data: {
                    user_groupon_id: e.parent().attr("data-id")
                },
                url: "/special/groupon-detail",
                success: function (e) {
                    $(".partake-collage").replaceWith(e),
                    n($(".partake-collage"))
                },
                error: function () {
                    alert("error")
                }
            })
        }),
        $(document).on("touchstart click", ".close-partake", function () {
            $(this).parents(".partake-collage").hide()
        }),
        $(document).on("touchstart click", ".partake-link", function () {
            var e = $(this);
            e.attr("href") && 0 < e.attr("href").length || i($(this).attr("data-id"), e)
        }),
        $(document).on("touchstart click", ".close-success-collage", function () {
            $(this).parents(".success-p-collage").hide(),
            window.location.reload()
        }),
        $(document).on("touchstart click", ".close-success-collage-share", function () {
            $(this).parents(".success-collage").hide(),
            window.location.href = $(this).parents(".success-collage").find("input[class='link']").val()
        }),
        $(document).on("touchstart click", ".close-ok-collage", function () {
            $(this).parents(".ok-collage").hide()
        }),
        $(document).on("touchstart click", ".open-groupon", function () {
            JUN.ajax({
                method: "post",
                url: "/special/groupon-create",
                data: {
                    groupon_id: $(".zt-groupons").attr("data-id")
                },
                success: function (e) {
                    "pc" == d ? 0 == e.code ? ($(".success-collage").replaceWith(e.html), $(".success-collage").show()) : alert(e.msg) : 0 == e.code ? (alert("\u53d1\u8d77\u6210\u529f, \u5feb\u9080\u8bf7\u597d\u53cb\u53c2\u52a0\u60a8\u7684\u62fc\u56e2\u5427~"), window.location.href = e.url) : alert(e.msg)
                },
                error: function (e) {
                    "\u8bf7\u767b\u5f55" === e.responseJSON.msg ? "pc" == d ? window.showSignIn(e.responseJSON.url) : window.location.href = e.responseJSON.url : alert("\u62fc\u56e2\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")
                }
            })
        }),
        "pc" == d ? $(document).on("click", ".share-groupon", function () {
            $.ajax({
                method: "get",
                data: {
                    user_groupon_id: $(this).attr("data-id")
                },
                url: "/special/groupon-share",
                success: function (e) {
                    "pc" == d && ($(".success-collage").replaceWith(e), $(".success-collage").show(), n($(".success-collage")))
                },
                error: function () {
                    alert("\u5206\u4eab\u5931\u8d25")
                }
            })
        }) : "pc" != d && c() && ($(document).on("touchstart", ".share-groupon", function () {
            e.stopPropagation(),
            $('<div class="wx-share"></div>').appendTo($("body"))
        }), $(document).on("touchstart", function () {
            $(".wx-share").remove()
        })),
        $(document).on("touchstart click", ".join-groupon", function () {
            i($(this).attr("data-id"), !1)
        }),
        $(document).on("touchstart click", ".groupon-group-next", function () {
            o($(this))
        }),
        $(document).on("touchstart click", ".groupon-group-prev", function () {
            o($(this))
        }),
        s(),
        (u = new Clipboard(".for-copy")).on("success", function (e) {
            e.clearSelection(),
            alert("\u5df2\u7ecf\u590d\u5236\u5206\u4eab\u94fe\u63a5\uff0c\u8d76\u5feb\u53d1\u9001\u7ed9\u60a8\u7684\u4eb2\u670b\u597d\u53cb\u5427~")
        }),
        u.on("error", function () {
            alert("\u5206\u4eab\u94fe\u63a5\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u901a\u8fc7\u6d4f\u89c8\u5668\u5206\u4eab\u529f\u80fd\u624b\u52a8\u5206\u4eab\u672c\u94fe\u63a5~")
        })
    }
}),
$(function () {
    if (document.querySelector("#zt-07-groupon")) {
        var n = $("#zt-07-groupon").data("id");
        $(document).on("click", ".join-groupon", function () {
            var e = $(this);
            return e.hasClass("joined") ? alert("\u60a8\u5df2\u7ecf\u53c2\u4e0e\u56e2\u8d2d") : $.ajax({
                method: "get",
                data: {
                    user_groupon_id: e.parent().attr("data-id"),
                    tmp: "groupon_zt07_groupon_detail"
                },
                url: "/special/groupon-detail",
                success: function (e) {
                    $("#modal-02").html(e),
                    $('<div class="zt-06-blocker"></div>').append($("#modal-02").html()).appendTo("body")
                },
                error: function () {
                    alert("error")
                }
            }),
            !1
        }),
        $(document).on("click", ".zt-07-sw a", function () {
            var t = $(this).parents(".groupon-groups"),
                e = $(this).data("page");
            $.ajax({
                    url: "/special/groupon-groups",
                    data: {
                        page: e,
                        groupon_id: n,
                        tmp: "groupon_zt07_groupon_group"
                    }
                }).then(function (e) {
                    t.html(e)
                })["catch"](function () {
                    console.log("get next page errpr")
                })
        }),
        $(document).on("click", ".iv-friend", function () {
            $('<div class="zt-06-blocker"></div>').append($("#modal-05").html()).appendTo("body")
        })
    }
}),
$(function () {
    if (document.querySelector("#zt-o9-06-groupon")) {
        var n = $("#zt-o9-06-groupon").data("id");
        document.querySelector(".zt-o9-06-groupon") && "mobile",
        $(document).on("click", ".iv-friend", function () {
            $('<div class="zt-06-blocker"></div>').append($("#modal-05").html()).appendTo("body")
        }),
        $(document).on("click", ".join-groupon", function () {
            var e = $(this);
            return e.hasClass("joined") ? alert("\u60a8\u5df2\u7ecf\u53c2\u4e0e\u56e2\u8d2d") : $.ajax({
                method: "get",
                data: {
                    user_groupon_id: e.parent().attr("data-id")
                },
                url: "/special/groupon-detail",
                success: function (e) {
                    $("#modal-02").html(e),
                    $('<div class="zt-06-blocker"></div>').append($("#modal-02").html()).appendTo("body")
                },
                error: function () {
                    alert("error")
                }
            }),
            !1
        }),
        $(document).on("click", ".page-p a", function () {
            var t = $(this).parents(".groupon-groups"),
                e = $(this).data("page");
            $.ajax({
                    url: "/special/groupon-groups",
                    data: {
                        page: e,
                        groupon_id: n
                    }
                }).then(function (e) {
                    t.html(e)
                })["catch"](function () {
                    console.log("get next page errpr")
                })
        })
    }
}),


function (e, c) {
    e.fn.insertAtCaret = function (s) {
        return this.each(function () {
            var e, t, n, a, i = this,
                r = 0,
                o = "selectionStart" in i && "selectionEnd" in i;
                (i.tagName && "textarea" === i.tagName.toLowerCase() || i.tagName && "input" === i.tagName.toLowerCase() && "text" === i.type.toLowerCase()) && (e = i.scrollTop, o ? r = i.selectionStart : (i.focus(), (a = c.selection.createRange()).moveStart("character", -i.value.length), r = a.text.length), t = i.value.substring(0, r), n = i.value.substring(r, i.value.length), i.value = t + s + n, r += s.length, o ? (i.selectionStart = r, i.selectionEnd = r) : ((a = c.selection.createRange()).moveStart("character", r), a.moveEnd("character", 0), a.select()), i.scrollTop = e)
        })
    }
}(jQuery, document, window),
$(function () {
    $(".search-btn-group").on("submit", function () {
        var e = $(this).find("input[name='keyword']").val();
        newestSearch.setKeyword(e)
    }),
    $(".hot-search a").on("click", function () {
        newestSearch.setKeyword($(this).attr("href").split("keyword=")[1])
    }),
    $(document).on("click", ".search-bottom-ul a", function () {
        newestSearch.setKeyword($(this).attr("href").split("keyword=")[1])
    })
}),
window.setPopup = function (e, t) {
    if (sessionStorage.getItem("popup_ignore") !== t) {
        var n = "";
        e && (n = ' style="background-image: url(' + e + ')"');
        var a = $('<div class="collage-activity-container"><a target="_blank" class="collage-body collage-body-size"' + n + ' href="' + t + '"><b class="close"></b><span class="collage-time">\u5012\u8ba1\u65f6\uff1a6s</span></a></div>').appendTo("body"),
            i = 6,
            r = setInterval(function () {
                i--,
                $(a).find(".collage-time").text("\u5012\u8ba1\u65f6\uff1a" + i + "s"),
                i <= 0 && (clearInterval(r), a.remove())
            }, 1e3);
        $(a).find(".close").on("click", function () {
                return clearInterval(r),
                a.remove(),
                sessionStorage.setItem("popup_ignore", t),
                !1
            })
    }
},


function (n, t) {
    var e, s = {},
        r = function (e, t) {
            var n, a, i;
            if ("string" == typeof e) return o(e);
            for (n = [], a = e.length, i = 0; i < a; i++) n.push(o(e[i]));
            return t.apply(null, n)
        },
        a = function (e, t, n) {
            2 === arguments.length && (n = t, t = null),
            r(t || [], function () {
                i(e, n, arguments)
            })
        },
        i = function (e, t, n) {
            var a, i = {
                exports: t
            };
            "function" == typeof t && (n.length || (n = [r, i.exports, i]), void 0 !== (a = t.apply(null, n)) && (i.exports = a)),
            s[e] = i.exports
        },
        o = function (e) {
            var t = s[e] || n[e];
            if (!t) throw new Error("`" + e + "` is undefined");
            return t
        },
        c = function (e) {
            var t, n, a, i, r, o;
            for (t in o = function (e) {
                return e && e.charAt(0).toUpperCase() + e.substr(1)
            }, s) if (n = e, s.hasOwnProperty(t)) {
                for (r = o((a = t.split("/")).pop()); i = o(a.shift());) n[i] = n[i] || {},
                n = n[i];
                n[r] = s[t]
            }
            return e
        },
        l = function (e) {
            return n.__dollar = e,
            c(t(n, a, r))
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = l() : "function" == typeof define && define.amd ? define(["jquery"], l) : (e = n.WebUploader, n.WebUploader = l(), n.WebUploader.noConflict = function () {
            n.WebUploader = e
        })
}(window, function (y, e, t) {
    return e("dollar-third", [], function () {
        var e = y.__dollar || y.jQuery || y.Zepto;
        if (!e) throw new Error("jQuery or Zepto not found!");
        return e
    }),
    e("dollar", ["dollar-third"], function (e) {
        return e
    }),
    e("promise-third", ["dollar"], function (e) {
        return {
            Deferred: e.Deferred,
            when: e.when,
            isPromise: function (e) {
                return e && "function" == typeof e.then
            }
        }
    }),
    e("promise", ["promise-third"], function (e) {
        return e
    }),
    e("base", ["dollar", "promise"], function (i, e) {
        function t(e) {
            return function () {
                return $.apply(e, arguments)
            }
        }
        function n(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }
        function r(e) {
            var t;
            return Object.create ? Object.create(e) : ((t = function () {}).prototype = e, new t)
        }
        var a, o, s, c, l, u, d, p, f, h, m, g, v, w = function () {},
            $ = Function.call;
        return {
                version: "0.1.5",
                $: i,
                Deferred: e.Deferred,
                isPromise: e.isPromise,
                when: e.when,
                browser: (u = navigator.userAgent, d = {}, p = u.match(/WebKit\/([\d.]+)/), f = u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/), h = u.match(/MSIE\s([\d\.]+)/) || u.match(/(?:trident)(?:.*rv:([\w.]+))?/i), m = u.match(/Firefox\/([\d.]+)/), g = u.match(/Safari\/([\d.]+)/), v = u.match(/OPR\/([\d.]+)/), p && (d.webkit = parseFloat(p[1])), f && (d.chrome = parseFloat(f[1])), h && (d.ie = parseFloat(h[1])), m && (d.firefox = parseFloat(m[1])), g && (d.safari = parseFloat(g[1])), v && (d.opera = parseFloat(v[1])), d),
                os: (o = navigator.userAgent, s = {}, c = o.match(/(?:Android);?[\s\/]+([\d.]+)?/), l = o.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/), c && (s.android = parseFloat(c[1])), l && (s.ios = parseFloat(l[1].replace(/_/g, "."))), s),
                inherits: function (e, t, n) {
                    var a;
                    return "function" == typeof t ? (a = t, t = null) : a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return e.apply(this, arguments)
                    },
                    i.extend(!0, a, e, n || {}),
                    a.__super__ = e.prototype,
                    a.prototype = r(e.prototype),
                    t && i.extend(!0, a.prototype, t),
                    a
                },
                noop: w,
                bindFn: n,
                log: y.console ? n(console.log, console) : w,
                nextTick: function (e) {
                    setTimeout(e, 1)
                },
                slice: t([].slice),
                guid: (a = 0, function (e) {
                    for (var t = (+new Date).toString(32), n = 0; n < 5; n++) t += Math.floor(
                    65535 * Math.random()).toString(32);
                    return (e || "wu_") + t + (a++).toString(32)
                }),
                formatSize: function (e, t, n) {
                    var a;
                    for (n = n || ["B", "K", "M", "G", "TB"];
                    (a = n.shift()) && 1024 < e;) e /= 1024;
                    return ("B" === a ? e : e.toFixed(t || 2)) + a
                }
            }
    }),
    e("mediator", ["base"], function (e) {
        function i(e, t, n, a) {
            return s.grep(e, function (e) {
                return !(!e || t && e.e !== t || n && e.cb !== n && e.cb._cb !== n || a && e.ctx !== a)
            })
        }
        function o(e, n, a) {
            s.each((e || "").split(l), function (e, t) {
                a(t, n)
            })
        }
        function r(e, t) {
            for (var n, a = !1, i = -1, r = e.length; ++i < r;) if (!1 === (n = e[i]).cb.apply(n.ctx2, t)) {
                a = !0;
                break
            }
            return !a
        }
        var t, s = e.$,
            c = [].slice,
            l = /\s+/;
        return t = {
                on: function (e, t, a) {
                    var i, r = this;
                    return t && (i = this._events || (this._events = []), o(e, t, function (e, t) {
                        var n = {
                            e: e
                        };
                        n.cb = t,
                        n.ctx = a,
                        n.ctx2 = a || r,
                        n.id = i.length,
                        i.push(n)
                    })),
                    this
                },
                once: function (e, t, a) {
                    var i = this;
                    return t && o(e, t, function (e, t) {
                        var n = function () {
                            return i.off(e, n),
                            t.apply(a || i, arguments)
                        };
                        n._cb = t,
                        i.on(e, n, a)
                    }),
                    i
                },
                off: function (e, t, n) {
                    var a = this._events;
                    return a && (e || t || n ? o(e, t, function (e, t) {
                        s.each(i(a, e, t, n), function () {
                            delete a[this.id]
                        })
                    }) : this._events = []),
                    this
                },
                trigger: function (e) {
                    var t, n, a;
                    return this._events && e ? (t = c.call(arguments, 1), n = i(this._events, e), a = i(this._events, "all"), r(n, t) && r(a, arguments)) : this
                }
            },
        s.extend({
                installTo: function (e) {
                    return s.extend(e, t)
                }
            }, t)
    }),
    e("uploader", ["base", "mediator"], function (e, i) {
        function n(e) {
            this.options = r.extend(!0, {}, n.options, e),
            this._init(this.options)
        }
        var r = e.$;
        return n.options = {},
        i.installTo(n.prototype),
        r.each({
            upload: "start-upload",
            stop: "stop-upload",
            getFile: "get-file",
            getFiles: "get-files",
            addFile: "add-file",
            addFiles: "add-file",
            sort: "sort-files",
            removeFile: "remove-file",
            cancelFile: "cancel-file",
            skipFile: "skip-file",
            retry: "retry",
            isInProgress: "is-in-progress",
            makeThumb: "make-thumb",
            md5File: "md5-file",
            getDimension: "get-dimension",
            addButton: "add-btn",
            predictRuntimeType: "predict-runtime-type",
            refresh: "refresh",
            disable: "disable",
            enable: "enable",
            reset: "reset"
        }, function (e, t) {
            n.prototype[e] = function () {
                return this.request(t, arguments)
            }
        }),
        r.extend(n.prototype, {
            state: "pending",
            _init: function (e) {
                var t = this;
                t.request("init", e, function () {
                    t.state = "ready",
                    t.trigger("ready")
                })
            },
            option: function (e, t) {
                var n = this.options;
                return 1 < arguments.length ? void(r.isPlainObject(t) && r.isPlainObject(n[e]) ? r.extend(n[e], t) : n[e] = t) : e ? n[e] : n
            },
            getStats: function () {
                var e = this.request("get-stats");
                return e ? {
                    successNum: e.numOfSuccess,
                    progressNum: e.numOfProgress,
                    cancelNum: e.numOfCancel,
                    invalidNum: e.numOfInvalid,
                    uploadFailNum: e.numOfUploadFailed,
                    queueNum: e.numOfQueue,
                    interruptNum: e.numofInterrupt
                } : {}
            },
            trigger: function (e) {
                var t = [].slice.call(arguments, 1),
                    n = this.options,
                    a = "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
                return !(!1 === i.trigger.apply(this, arguments) || r.isFunction(n[a]) && !1 === n[a].apply(this, t) || r.isFunction(this[a]) && !1 === this[a].apply(this, t) || !1 === i.trigger.apply(i, [this, e].concat(t)))
            },
            destroy: function () {
                this.request("destroy", arguments),
                this.off()
            },
            request: e.noop
        }),
        e.create = n.create = function (e) {
            return new n(e)
        },
        e.Uploader = n
    }),
    e("runtime/runtime", ["base", "mediator"], function (t, e) {
        function a(e) {
            this.options = i.extend({
                container: document.body
            }, e),
            this.uid = t.guid("rt_")
        }
        var i = t.$,
            r = {},
            o = function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return t;
                return null
            };
        return i.extend(a.prototype, {
                getContainer: function () {
                    var e, t, n = this.options;
                    return this._container ? this._container : (e = i(n.container || document.body), (t = i(document.createElement("div"))).attr("id", "rt_" + this.uid), t.css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden"
                    }), e.append(t), e.addClass("webuploader-container"), this._container = t, this._parent = e, t)
                },
                init: t.noop,
                exec: t.noop,
                destroy: function () {
                    this._container && this._container.remove(),
                    this._parent && this._parent.removeClass("webuploader-container"),
                    this.off()
                }
            }),
        a.orders = "html5,flash",
        a.addRuntime = function (e, t) {
                r[e] = t
            },
        a.hasRuntime = function (e) {
                return !!(e ? r[e] : o(r))
            },
        a.create = function (e, t) {
                var n;
                if (t = t || a.orders, i.each(t.split(/\s*,\s*/g), function () {
                    return r[this] ? (n = this, !1) : void 0
                }), !(n = n || o(r))) throw new Error("Runtime Error");
                return new r[n](e)
            },
        e.installTo(a.prototype),
        a
    }),
    e("runtime/client", ["base", "mediator", "runtime/runtime"], function (r, e, o) {
        function t(t, n) {
            var a, e, i = r.Deferred();
            this.uid = r.guid("client_"),
            this.runtimeReady = function (e) {
                return i.done(e)
            },
            this.connectRuntime = function (e, t) {
                if (a) throw new Error("already connected!");
                return i.done(t),
                "string" == typeof e && s.get(e) && (a = s.get(e)),
                (a = a || s.get(null, n)) ? (r.$.extend(a.options, e), a.__promise.then(i.resolve), a.__client++) : ((a = o.create(e, e.runtimeOrder)).__promise = i.promise(), a.once("ready", i.resolve), a.init(), s.add(a), a.__client = 1),
                n && (a.__standalone = n),
                a
            },
            this.getRuntime = function () {
                return a
            },
            this.disconnectRuntime = function () {
                a && (a.__client--, a.__client <= 0 && (s.remove(a), delete a.__promise, a.destroy()), a = null)
            },
            this.exec = function () {
                if (a) {
                    var e = r.slice(arguments);
                    return t && e.unshift(t),
                    a.exec.apply(this, e)
                }
            },
            this.getRuid = function () {
                return a && a.uid
            },
            this.destroy = (e = this.destroy, function () {
                e && e.apply(this, arguments),
                this.trigger("destroy"),
                this.off(),
                this.exec("destroy"),
                this.disconnectRuntime()
            })
        }
        var s, a;
        return a = {},
        s = {
            add: function (e) {
                a[e.uid] = e
            },
            get: function (e, t) {
                var n;
                if (e) return a[e];
                for (n in a) if (!t || !a[n].__standalone) return a[n];
                return null
            },
            remove: function (e) {
                delete a[e.uid]
            }
        },
        e.installTo(t.prototype),
        t
    }),
    e("lib/dnd", ["base", "mediator", "runtime/client"], function (e, t, n) {
        function a(e) {
            (e = this.options = i.extend({}, a.options, e)).container = i(e.container),
            e.container.length && n.call(this, "DragAndDrop")
        }
        var i = e.$;
        return a.options = {
            accept: null,
            disableGlobalDnd: !1
        },
        e.inherits(n, {
            constructor: a,
            init: function () {
                var e = this;
                e.connectRuntime(e.options, function () {
                    e.exec("init"),
                    e.trigger("ready")
                })
            }
        }),
        t.installTo(a.prototype),
        a
    }),
    e("widgets/widget", ["base", "uploader"], function (d, e) {
        function p(e) {
            if (!e) return !1;
            var t = e.length,
                n = r.type(e);
            return !(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && "string" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e))
        }
        function i(e) {
            this.owner = e,
            this.options = e.options
        }
        var r = d.$,
            t = e.prototype._init,
            n = e.prototype.destroy,
            f = {},
            o = [];
        return r.extend(i.prototype, {
                init: d.noop,
                invoke: function (e, t) {
                    var n = this.responseMap;
                    return n && e in n && n[e] in this && r.isFunction(this[n[e]]) ? this[n[e]].apply(this, t) : f
                },
                request: function () {
                    return this.owner.request.apply(this.owner, arguments)
                }
            }),
        r.extend(e.prototype, {
                _init: function () {
                    var n = this,
                        a = n._widgets = [],
                        i = n.options.disableWidgets || "";
                    return r.each(o, function (e, t) {
                            (!i || !~i.indexOf(t._name)) && a.push(new t(n))
                        }),
                    t.apply(n, arguments)
                },
                request: function (e, t, n) {
                    var a, i, r, o = 0,
                        s = this._widgets,
                        c = s && s.length,
                        l = [],
                        u = [];
                    for (t = p(t) ? t : [t]; o < c; o++)(a = s[o].invoke(e, t)) !== f && (d.isPromise(a) ? u.push(a) : l.push(a));
                    return n || u.length ? (i = d.when.apply(d, u))[r = i.pipe ? "pipe" : "then"](function () {
                            var e = d.Deferred(),
                                t = arguments;
                            return 1 === t.length && (t = t[0]),
                            setTimeout(function () {
                                    e.resolve(t)
                                }, 1),
                            e.promise()
                        })[n ? r : "done"](n || d.noop) : l[0]
                },
                destroy: function () {
                    n.apply(this, arguments),
                    this._widgets = null
                }
            }),
        e.register = i.register = function (e, t) {
                var n, a = {
                    init: "init",
                    destroy: "destroy",
                    name: "anonymous"
                };
                return 1 === arguments.length ? (t = e, r.each(t, function (e) {
                    return "_" === e[0] || "name" === e ? void("name" === e && (a.name = t.name)) : void(a[e.replace(/[A-Z]/g, "-$&").toLowerCase()] = e)
                })) : a = r.extend(a, e),
                t.responseMap = a,
                (n = d.inherits(i, t))._name = a.name,
                o.push(n),
                n
            },
        e.unRegister = i.unRegister = function (e) {
                if (e && "anonymous" !== e) for (var t = o.length; t--;) o[t]._name === e && o.splice(t, 1)
            },
        i
    }),
    e("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"], function (r, e, o) {
        var s = r.$;
        return e.options.dnd = "",
        e.register({
            name: "dnd",
            init: function (e) {
                if (e.dnd && "html5" === this.request("predict-runtime-type")) {
                    var t, n = this,
                        a = r.Deferred(),
                        i = s.extend({}, {
                            disableGlobalDnd: e.disableGlobalDnd,
                            container: e.dnd,
                            accept: e.accept
                        });
                    return this.dnd = t = new o(i),
                    t.once("ready", a.resolve),
                    t.on("drop", function (e) {
                            n.request("add-file", [e])
                        }),
                    t.on("accept", function (e) {
                            return n.owner.trigger("dndAccept", e)
                        }),
                    t.init(),
                    a.promise()
                }
            },
            destroy: function () {
                this.dnd && this.dnd.destroy()
            }
        })
    }),
    e("lib/filepaste", ["base", "mediator", "runtime/client"], function (e, t, n) {
        function a(e) {
            (e = this.options = i.extend({}, e)).container = i(e.container || document.body),
            n.call(this, "FilePaste")
        }
        var i = e.$;
        return e.inherits(n, {
            constructor: a,
            init: function () {
                var e = this;
                e.connectRuntime(e.options, function () {
                    e.exec("init"),
                    e.trigger("ready")
                })
            }
        }),
        t.installTo(a.prototype),
        a
    }),
    e("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"], function (r, e, o) {
        var s = r.$;
        return e.register({
            name: "paste",
            init: function (e) {
                if (e.paste && "html5" === this.request("predict-runtime-type")) {
                    var t, n = this,
                        a = r.Deferred(),
                        i = s.extend({}, {
                            container: e.paste,
                            accept: e.accept
                        });
                    return this.paste = t = new o(i),
                    t.once("ready", a.resolve),
                    t.on("paste", function (e) {
                            n.owner.request("add-file", [e])
                        }),
                    t.init(),
                    a.promise()
                }
            },
            destroy: function () {
                this.paste && this.paste.destroy()
            }
        })
    }),
    e("lib/blob", ["base", "runtime/client"], function (e, a) {
        function t(e, t) {
            var n = this;
            n.source = t,
            n.ruid = e,
            this.size = t.size || 0,
            this.type = !t.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg" : this.ext) : t.type || "application/octet-stream",
            a.call(n, "Blob"),
            this.uid = t.uid || this.uid,
            e && n.connectRuntime(e)
        }
        return e.inherits(a, {
            constructor: t,
            slice: function (e, t) {
                return this.exec("slice", e, t)
            },
            getSource: function () {
                return this.source
            }
        }),
        t
    }),
    e("lib/file", ["base", "lib/blob"], function (e, a) {
        function t(e, t) {
            var n;
            this.name = t.name || "untitled" + i++,
            !(n = r.exec(t.name) ? RegExp.$1.toLowerCase() : "") && t.type && (n = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(t.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + n),
            this.ext = n,
            this.lastModifiedDate = t.lastModifiedDate || (new Date).toLocaleString(),
            a.apply(this, arguments)
        }
        var i = 1,
            r = /\.([^.]+)$/;
        return e.inherits(a, t)
    }),
    e("lib/filepicker", ["base", "runtime/client", "lib/file"], function (e, t, r) {
        function n(e) {
            if ((e = this.options = o.extend({}, n.options, e)).container = o(e.id), !e.container.length) throw new Error("\u6309\u94ae\u6307\u5b9a\u9519\u8bef");
            e.innerHTML = e.innerHTML || e.label || e.container.html() || "",
            e.button = o(e.button || document.createElement("div")),
            e.button.html(e.innerHTML),
            e.container.html(e.button),
            t.call(this, "FilePicker", !0)
        }
        var o = e.$;
        return n.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: !0,
            accept: null,
            name: "file"
        },
        e.inherits(t, {
            constructor: n,
            init: function () {
                var n = this,
                    a = n.options,
                    i = a.button;
                i.addClass("webuploader-pick"),
                n.on("all", function (e) {
                        var t;
                        switch (e) {
                        case "mouseenter":
                            i.addClass("webuploader-pick-hover");
                            break;
                        case "mouseleave":
                            i.removeClass("webuploader-pick-hover");
                            break;
                        case "change":
                            t = n.exec("getFiles"),
                            n.trigger("select", o.map(t, function (e) {
                                return (e = new r(n.getRuid(), e))._refer = a.container,
                                e
                            }), a.container)
                        }
                    }),
                n.connectRuntime(a, function () {
                        n.refresh(),
                        n.exec("init", a),
                        n.trigger("ready")
                    }),
                this._resizeHandler = e.bindFn(this.refresh, this),
                o(y).on("resize", this._resizeHandler)
            },
            refresh: function () {
                var e = this.getRuntime().getContainer(),
                    t = this.options.button,
                    n = t.outerWidth ? t.outerWidth() : t.width(),
                    a = t.outerHeight ? t.outerHeight() : t.height(),
                    i = t.offset();
                n && a && e.css({
                        bottom: "auto",
                        right: "auto",
                        width: n + "px",
                        height: a + "px"
                    }).offset(i)
            },
            enable: function () {
                this.options.button.removeClass("webuploader-pick-disable"),
                this.refresh()
            },
            disable: function () {
                var e = this.options.button;
                this.getRuntime().getContainer().css({
                    top: "-99999px"
                }),
                e.addClass("webuploader-pick-disable")
            },
            destroy: function () {
                var e = this.options.button;
                o(y).off("resize", this._resizeHandler),
                e.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
            }
        }),
        n
    }),
    e("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function (c, e, l) {
        var u = c.$;
        return u.extend(e.options, {
            pick: null,
            accept: null
        }),
        e.register({
            name: "picker",
            init: function (e) {
                return this.pickers = [],
                e.pick && this.addBtn(e.pick)
            },
            refresh: function () {
                u.each(this.pickers, function () {
                    this.refresh()
                })
            },
            addBtn: function (a) {
                var i = this,
                    r = i.options,
                    o = r.accept,
                    s = [];
                if (a) return u.isPlainObject(a) || (a = {
                        id: a
                    }),
                u(a.id).each(function () {
                        var e, t, n;
                        n = c.Deferred(),
                        e = u.extend({}, a, {
                            accept: u.isPlainObject(o) ? [o] : o,
                            swf: r.swf,
                            runtimeOrder: r.runtimeOrder,
                            id: this
                        }),
                        (t = new l(e)).once("ready", n.resolve),
                        t.on("select", function (e) {
                            i.owner.request("add-file", [e])
                        }),
                        t.init(),
                        i.pickers.push(t),
                        s.push(n.promise())
                    }),
                c.when.apply(c, s)
            },
            disable: function () {
                u.each(this.pickers, function () {
                    this.disable()
                })
            },
            enable: function () {
                u.each(this.pickers, function () {
                    this.enable()
                })
            },
            destroy: function () {
                u.each(this.pickers, function () {
                    this.destroy()
                }),
                this.pickers = null
            }
        })
    }),
    e("lib/image", ["base", "runtime/client", "lib/blob"], function (t, n, a) {
        function i(e) {
            this.options = r.extend({}, i.options, e),
            n.call(this, "Image"),
            this.on("load", function () {
                this._info = this.exec("info"),
                this._meta = this.exec("meta")
            })
        }
        var r = t.$;
        return i.options = {
            quality: 90,
            crop: !1,
            preserveHeaders: !1,
            allowMagnify: !1
        },
        t.inherits(n, {
            constructor: i,
            info: function (e) {
                return e ? (this._info = e, this) : this._info
            },
            meta: function (e) {
                return e ? (this._meta = e, this) : this._meta
            },
            loadFromBlob: function (e) {
                var t = this,
                    n = e.getRuid();
                this.connectRuntime(n, function () {
                        t.exec("init", t.options),
                        t.exec("loadFromBlob", e)
                    })
            },
            resize: function () {
                var e = t.slice(arguments);
                return this.exec.apply(this, ["resize"].concat(e))
            },
            crop: function () {
                var e = t.slice(arguments);
                return this.exec.apply(this, ["crop"].concat(e))
            },
            getAsDataUrl: function (e) {
                return this.exec("getAsDataUrl", e)
            },
            getAsBlob: function (e) {
                var t = this.exec("getAsBlob", e);
                return new a(this.getRuid(), t)
            }
        }),
        i
    }),
    e("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function (t, e, s) {
        var o, n, a, i, r, c = t.$;
        return n = 5242880,
        a = 0,
        i = [],
        r = function () {
            for (var e; i.length && a < n;) e = i.shift(),
            a += e[0],
            e[1]()
        },
        o = function (e, t, n) {
            i.push([t, n]),
            e.once("destroy", function () {
                a -= t,
                setTimeout(r, 1)
            }),
            setTimeout(r, 1)
        },
        c.extend(e.options, {
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: !0,
                crop: !0,
                preserveHeaders: !1,
                type: "image/jpeg"
            },
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: !1,
                crop: !1,
                preserveHeaders: !0
            }
        }),
        e.register({
            name: "image",
            makeThumb: function (e, t, n, a) {
                var i, r;
                return (e = this.request("get-file", e)).type.match(/^image/) ? (i = c.extend({}, this.options.thumb), c.isPlainObject(n) && (i = c.extend(i, n), n = null), n = n || i.width, a = a || i.height, (r = new s(i)).once("load", function () {
                    e._info = e._info || r.info(),
                    e._meta = e._meta || r.meta(),
                    n <= 1 && 0 < n && (n = e._info.width * n),
                    a <= 1 && 0 < a && (a = e._info.height * a),
                    r.resize(n, a)
                }), r.once("complete", function () {
                    t(!1, r.getAsDataUrl(i.type)),
                    r.destroy()
                }), r.once("error", function (e) {
                    t(e || !0),
                    r.destroy()
                }), void o(r, e.source.size, function () {
                    e._info && r.info(e._info),
                    e._meta && r.meta(e._meta),
                    r.loadFromBlob(e.source)
                })) : void t(!0)
            },
            beforeSendFile: function (n) {
                var a, i, r = this.options.compress || this.options.resize,
                    e = r && r.compressSize || 0,
                    o = r && r.noCompressIfLarger || !1;
                return n = this.request("get-file", n),
                !r || !~"image/jpeg,image/jpg".indexOf(n.type) || n.size < e || n._compressed ? void 0 : (r = c.extend({}, r), i = t.Deferred(), a = new s(r), i.always(function () {
                        a.destroy(),
                        a = null
                    }), a.once("error", i.reject), a.once("load", function () {
                        var e = r.width,
                            t = r.height;
                        n._info = n._info || a.info(),
                        n._meta = n._meta || a.meta(),
                        e <= 1 && 0 < e && (e = n._info.width * e),
                        t <= 1 && 0 < t && (t = n._info.height * t),
                        a.resize(e, t)
                    }), a.once("complete", function () {
                        var e, t;
                        try {
                            e = a.getAsBlob(r.type),
                            t = n.size,
                            (!o || e.size < t) && (n.source = e, n.size = e.size, n.trigger("resize", e.size, t)),
                            n._compressed = !0,
                            i.resolve()
                        } catch (c) {
                            i.resolve()
                        }
                    }), n._info && a.info(n._info), n._meta && a.meta(n._meta), a.loadFromBlob(n.source), i.promise())
            }
        })
    }),
    e("file", ["base", "mediator"], function (e, t) {
        function n() {
            return r + o++
        }
        function a(e) {
            this.name = e.name || "Untitled",
            this.size = e.size || 0,
            this.type = e.type || "application/octet-stream",
            this.lastModifiedDate = e.lastModifiedDate || 1 * new Date,
            this.id = n(),
            this.ext = s.exec(this.name) ? RegExp.$1 : "",
            this.statusText = "",
            c[this.id] = a.Status.INITED,
            this.source = e,
            this.loaded = 0,
            this.on("error", function (e) {
                this.setStatus(a.Status.ERROR, e)
            })
        }
        var i = e.$,
            r = "WU_FILE_",
            o = 0,
            s = /\.([^.]+)$/,
            c = {};
        return i.extend(a.prototype, {
                setStatus: function (e, t) {
                    var n = c[this.id];
                    void 0 !== t && (this.statusText = t),
                    e !== n && (c[this.id] = e, this.trigger("statuschange", e, n))
                },
                getStatus: function () {
                    return c[this.id]
                },
                getSource: function () {
                    return this.source
                },
                destroy: function () {
                    this.off(),
                    delete c[this.id]
                }
            }),
        t.installTo(a.prototype),
        a.Status = {
                INITED: "inited",
                QUEUED: "queued",
                PROGRESS: "progress",
                ERROR: "error",
                COMPLETE: "complete",
                CANCELLED: "cancelled",
                INTERRUPT: "interrupt",
                INVALID: "invalid"
            },
        a
    }),
    e("queue", ["base", "mediator", "file"], function (e, t, n) {
        function a() {
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            },
            this._queue = [],
            this._map = {}
        }
        var r = e.$,
            i = n.Status;
        return r.extend(a.prototype, {
                append: function (e) {
                    return this._queue.push(e),
                    this._fileAdded(e),
                    this
                },
                prepend: function (e) {
                    return this._queue.unshift(e),
                    this._fileAdded(e),
                    this
                },
                getFile: function (e) {
                    return "string" != typeof e ? e : this._map[e]
                },
                fetch: function (e) {
                    var t, n, a = this._queue.length;
                    for (e = e || i.QUEUED, t = 0; t < a; t++) if (e === (n = this._queue[t]).getStatus()) return n;
                    return null
                },
                sort: function (e) {
                    "function" == typeof e && this._queue.sort(e)
                },
                getFiles: function () {
                    for (var e, t = [].slice.call(arguments, 0), n = [], a = 0, i = this._queue.length; a < i; a++) e = this._queue[a],
                    (!t.length || ~r.inArray(e.getStatus(), t)) && n.push(e);
                    return n
                },
                removeFile: function (e) {
                    this._map[e.id] && (delete this._map[e.id], e.destroy(), this.stats.numofDeleted++)
                },
                _fileAdded: function (e) {
                    var n = this;
                    this._map[e.id] || (this._map[e.id] = e).on("statuschange", function (e, t) {
                        n._onFileStatusChange(e, t)
                    })
                },
                _onFileStatusChange: function (e, t) {
                    var n = this.stats;
                    switch (t) {
                    case i.PROGRESS:
                        n.numOfProgress--;
                        break;
                    case i.QUEUED:
                        n.numOfQueue--;
                        break;
                    case i.ERROR:
                        n.numOfUploadFailed--;
                        break;
                    case i.INVALID:
                        n.numOfInvalid--;
                        break;
                    case i.INTERRUPT:
                        n.numofInterrupt--
                    }
                    switch (e) {
                    case i.QUEUED:
                        n.numOfQueue++;
                        break;
                    case i.PROGRESS:
                        n.numOfProgress++;
                        break;
                    case i.ERROR:
                        n.numOfUploadFailed++;
                        break;
                    case i.COMPLETE:
                        n.numOfSuccess++;
                        break;
                    case i.CANCELLED:
                        n.numOfCancel++;
                        break;
                    case i.INVALID:
                        n.numOfInvalid++;
                        break;
                    case i.INTERRUPT:
                        n.numofInterrupt++
                    }
                }
            }),
        t.installTo(a.prototype),
        a
    }),
    e("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function (l, e, u, t, n, d) {
        var p = l.$,
            a = /\.\w+$/,
            o = t.Status;
        return e.register({
                name: "queue",
                init: function (e) {
                    var t, n, a, i, r, o, s, c = this;
                    if (p.isPlainObject(e.accept) && (e.accept = [e.accept]), e.accept) {
                        for (r = [], a = 0, n = e.accept.length; a < n; a++)(i = e.accept[a].extensions) && r.push(i);
                        r.length && (o = "\\." + r.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                        c.accept = new RegExp(o, "i")
                    }
                    return c.queue = new u,
                    c.stats = c.queue.stats,
                    "html5" === this.request("predict-runtime-type") ? (t = l.Deferred(), this.placeholder = s = new d("Placeholder"), s.connectRuntime({
                        runtimeOrder: "html5"
                    }, function () {
                        c._ruid = s.getRuid(),
                        t.resolve()
                    }), t.promise()) : void 0
                },
                _wrapFile: function (e) {
                    if (!(e instanceof t)) {
                        if (!(e instanceof n)) {
                            if (!this._ruid) throw new Error("Can't add external files.");
                            e = new n(this._ruid, e)
                        }
                        e = new t(e)
                    }
                    return e
                },
                acceptFile: function (e) {
                    return !(!e || !e.size || this.accept && a.exec(e.name) && !this.accept.test(e.name))
                },
                _addFile: function (e) {
                    var t = this;
                    return e = t._wrapFile(e),
                    t.owner.trigger("beforeFileQueued", e) ? t.acceptFile(e) ? (t.queue.append(e), t.owner.trigger("fileQueued", e), e) : void t.owner.trigger("error", "Q_TYPE_DENIED", e) : void 0
                },
                getFile: function (e) {
                    return this.queue.getFile(e)
                },
                addFile: function (e) {
                    var t = this;
                    e.length || (e = [e]),
                    e = p.map(e, function (e) {
                        return t._addFile(e)
                    }),
                    t.owner.trigger("filesQueued", e),
                    t.options.auto && setTimeout(function () {
                        t.request("start-upload")
                    }, 20)
                },
                getStats: function () {
                    return this.stats
                },
                removeFile: function (e, t) {
                    var n = this;
                    e = e.id ? e : n.queue.getFile(e),
                    this.request("cancel-file", e),
                    t && this.queue.removeFile(e)
                },
                getFiles: function () {
                    return this.queue.getFiles.apply(this.queue, arguments)
                },
                fetchFile: function () {
                    return this.queue.fetch.apply(this.queue, arguments)
                },
                retry: function (e, t) {
                    var n, a, i, r = this;
                    if (e) return (e = e.id ? e : r.queue.getFile(e)).setStatus(o.QUEUED),
                    void(t || r.request("start-upload"));
                    for (a = 0, i = (n = r.queue.getFiles(o.ERROR)).length; a < i; a++)(e = n[a]).setStatus(o.QUEUED);
                    r.request("start-upload")
                },
                sortFiles: function () {
                    return this.queue.sort.apply(this.queue, arguments)
                },
                reset: function () {
                    this.owner.trigger("reset"),
                    this.queue = new u,
                    this.stats = this.queue.stats
                },
                destroy: function () {
                    this.reset(),
                    this.placeholder && this.placeholder.destroy()
                }
            })
    }),
    e("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function (e, i) {
        return e.support = function () {
            return i.hasRuntime.apply(i, arguments)
        },
        e.register({
            name: "runtime",
            init: function () {
                if (!this.predictRuntimeType()) throw Error("Runtime Error")
            },
            predictRuntimeType: function () {
                var e, t, n = this.options.runtimeOrder || i.orders,
                    a = this.type;
                if (!a) for (e = 0, t = (n = n.split(/\s*,\s*/g)).length; e < t; e++) if (i.hasRuntime(n[e])) {
                        this.type = a = n[e];
                        break
                    }
                return a
            }
        })
    }),
    e("lib/transport", ["base", "runtime/client", "mediator"], function (e, n, t) {
        function a(e) {
            var t = this;
            e = t.options = i.extend(!0, {}, a.options, e || {}),
            n.call(this, "Transport"),
            this._blob = null,
            this._formData = e.formData || {},
            this._headers = e.headers || {},
            this.on("progress", this._timeout),
            this.on("load error", function () {
                t.trigger("progress", 1),
                clearTimeout(t._timer)
            })
        }
        var i = e.$;
        return a.options = {
            server: "",
            method: "POST",
            withCredentials: !1,
            fileVal: "file",
            timeout: 12e4,
            formData: {},
            headers: {},
            sendAsBinary: !1
        },
        i.extend(a.prototype, {
            appendBlob: function (e, t, n) {
                var a = this,
                    i = a.options;
                a.getRuid() && a.disconnectRuntime(),
                a.connectRuntime(t.ruid, function () {
                        a.exec("init")
                    }),
                a._blob = t,
                i.fileVal = e || i.fileVal,
                i.filename = n || i.filename
            },
            append: function (e, t) {
                "object" == typeof e ? i.extend(this._formData, e) : this._formData[e] = t
            },
            setRequestHeader: function (e, t) {
                "object" == typeof e ? i.extend(this._headers, e) : this._headers[e] = t
            },
            send: function (e) {
                this.exec("send", e),
                this._timeout()
            },
            abort: function () {
                return clearTimeout(this._timer),
                this.exec("abort")
            },
            destroy: function () {
                this.trigger("destroy"),
                this.off(),
                this.exec("destroy"),
                this.disconnectRuntime()
            },
            getResponse: function () {
                return this.exec("getResponse")
            },
            getResponseAsJson: function () {
                return this.exec("getResponseAsJson")
            },
            getStatus: function () {
                return this.exec("getStatus")
            },
            _timeout: function () {
                var e = this,
                    t = e.options.timeout;
                t && (clearTimeout(e._timer), e._timer = setTimeout(function () {
                        e.abort(),
                        e.trigger("error", "timeout")
                    }, t))
            }
        }),
        t.installTo(a.prototype),
        a
    }),
    e("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function (u, e, t, d) {
        function o(e, t) {
            var n, a, i = [],
                r = e.source.size,
                o = t ? Math.ceil(r / t) : 1,
                s = 0,
                c = 0;
            for (a = {
                    file: e,
                    has: function () {
                        return !!i.length
                    },
                    shift: function () {
                        return i.shift()
                    },
                    unshift: function (e) {
                        i.unshift(e)
                    }
                }; c < o;) n = Math.min(t, r - s),
            i.push({
                    file: e,
                    start: s,
                    end: t ? s + n : r,
                    total: r,
                    chunks: o,
                    chunk: c++,
                    cuted: a
                }),
            s += n;
            return e.blocks = i.concat(),
            e.remaning = i.length,
            a
        }
        var p = u.$,
            s = u.isPromise,
            f = t.Status;
        p.extend(e.options, {
                prepareNextFile: !1,
                chunked: !1,
                chunkSize: 5242880,
                chunkRetry: 2,
                threads: 3,
                formData: {}
            }),
        e.register({
                name: "upload",
                init: function () {
                    var e = this.owner,
                        t = this;
                    this.runing = !1,
                    this.progress = !1,
                    e.on("startUpload", function () {
                            t.progress = !0
                        }).on("uploadFinished", function () {
                            t.progress = !1
                        }),
                    this.pool = [],
                    this.stack = [],
                    this.pending = [],
                    this.remaning = 0,
                    this.__tick = u.bindFn(this._tick, this),
                    e.on("uploadComplete", function (e) {
                            e.blocks && p.each(e.blocks, function (e, t) {
                                t.transport && (t.transport.abort(), t.transport.destroy()),
                                delete t.transport
                            }),
                            delete e.blocks,
                            delete e.remaning
                        })
                },
                reset: function () {
                    this.request("stop-upload", !0),
                    this.runing = !1,
                    this.pool = [],
                    this.stack = [],
                    this.pending = [],
                    this.remaning = 0,
                    this._trigged = !1,
                    this._promise = null
                },
                startUpload: function (n) {
                    var a = this;
                    if (p.each(a.request("get-files", f.INVALID), function () {
                        a.request("remove-file", this)
                    }), n) if ((n = n.id ? n : a.request("get-file", n)).getStatus() === f.INTERRUPT) p.each(a.pool, function (e, t) {
                        t.file === n && t.transport && t.transport.send()
                    }),
                    n.setStatus(f.QUEUED);
                    else {
                        if (n.getStatus() === f.PROGRESS) return;
                        n.setStatus(f.QUEUED)
                    } else p.each(a.request("get-files", [f.INITED]), function () {
                        this.setStatus(f.QUEUED)
                    });
                    if (!a.runing) {
                        a.runing = !0;
                        var i = [];
                        for (p.each(a.pool, function (e, t) {
                            var n = t.file;
                            n.getStatus() === f.INTERRUPT && (i.push(n), a._trigged = !1, t.transport && t.transport.send())
                        }); n = i.shift();) n.setStatus(f.PROGRESS);
                        n || p.each(a.request("get-files", f.INTERRUPT), function () {
                            this.setStatus(f.PROGRESS)
                        }),
                        a._trigged = !1,
                        u.nextTick(a.__tick),
                        a.owner.trigger("startUpload")
                    }
                },
                stopUpload: function (n, e) {
                    var a = this;
                    if (!0 === n && (e = n, n = null), !1 !== a.runing) {
                        if (n) {
                            if ((n = n.id ? n : a.request("get-file", n)).getStatus() !== f.PROGRESS && n.getStatus() !== f.QUEUED) return;
                            return n.setStatus(f.INTERRUPT),
                            p.each(a.pool, function (e, t) {
                                t.file === n && (t.transport && t.transport.abort(), a._putback(t), a._popBlock(t))
                            }),
                            u.nextTick(a.__tick)
                        }
                        a.runing = !1,
                        this._promise && this._promise.file && this._promise.file.setStatus(f.INTERRUPT),
                        e && p.each(a.pool, function (e, t) {
                            t.transport && t.transport.abort(),
                            t.file.setStatus(f.INTERRUPT)
                        }),
                        a.owner.trigger("stopUpload")
                    }
                },
                cancelFile: function (e) {
                    (e = e.id ? e : this.request("get-file", e)).blocks && p.each(e.blocks, function (e, t) {
                        var n = t.transport;
                        n && (n.abort(), n.destroy(), delete t.transport)
                    }),
                    e.setStatus(f.CANCELLED),
                    this.owner.trigger("fileDequeued", e)
                },
                isInProgress: function () {
                    return !!this.progress
                },
                _getStats: function () {
                    return this.request("get-stats")
                },
                skipFile: function (e, t) {
                    (e = e.id ? e : this.request("get-file", e)).setStatus(t || f.COMPLETE),
                    e.skipped = !0,
                    e.blocks && p.each(e.blocks, function (e, t) {
                        var n = t.transport;
                        n && (n.abort(), n.destroy(), delete t.transport)
                    }),
                    this.owner.trigger("uploadSkip", e)
                },
                _tick: function () {
                    var e, t, n = this,
                        a = n.options;
                    return n._promise ? n._promise.always(n.__tick) : void(n.pool.length < a.threads && (t = n._nextBlock()) ? (n._trigged = !1, e = function (e) {
                            n._promise = null,
                            e && e.file && n._startSend(e),
                            u.nextTick(n.__tick)
                        }, n._promise = s(t) ? t.always(e) : e(t)) : n.remaning || n._getStats().numOfQueue || n._getStats().numofInterrupt || (n.runing = !1, n._trigged || u.nextTick(function () {
                            n.owner.trigger("uploadFinished")
                        }), n._trigged = !0))
                },
                _putback: function (e) {
                    e.cuted.unshift(e),
                    ~this.stack.indexOf(e.cuted) || this.stack.unshift(e.cuted)
                },
                _getStack: function () {
                    for (var e, t = 0; e = this.stack[t++];) {
                        if (e.has() && e.file.getStatus() === f.PROGRESS) return e;
                        (!e.has() || e.file.getStatus() !== f.PROGRESS && e.file.getStatus() !== f.INTERRUPT) && this.stack.splice(--t, 1)
                    }
                    return null
                },
                _nextBlock: function () {
                    var t, e, n, a, i = this,
                        r = i.options;
                    return (t = this._getStack()) ? (r.prepareNextFile && !i.pending.length && i._prepareNextFile(), t.shift()) : i.runing ? (!i.pending.length && i._getStats().numOfQueue && i._prepareNextFile(), e = i.pending.shift(), n = function (e) {
                            return e ? (t = o(e, r.chunked ? r.chunkSize : 0), i.stack.push(t), t.shift()) : null
                        }, s(e) ? (a = e.file, (e = e[e.pipe ? "pipe" : "then"](n)).file = a, e) : n(e)) : void 0
                },
                _prepareNextFile: function () {
                    var t, n = this,
                        a = n.request("fetch-file"),
                        i = n.pending;
                    a && (t = n.request("before-send-file", a, function () {
                            return a.getStatus() === f.PROGRESS || a.getStatus() === f.INTERRUPT ? a : n._finishFile(a)
                        }), n.owner.trigger("uploadStart", a), a.setStatus(f.PROGRESS), t.file = a, t.done(function () {
                            var e = p.inArray(t, i);~e && i.splice(e, 1, a)
                        }), t.fail(function (e) {
                            a.setStatus(f.ERROR, e),
                            n.owner.trigger("uploadError", a, e),
                            n.owner.trigger("uploadComplete", a)
                        }), i.push(t))
                },
                _popBlock: function (e) {
                    var t = p.inArray(e, this.pool);
                    this.pool.splice(t, 1),
                    e.file.remaning--,
                    this.remaning--
                },
                _startSend: function (e) {
                    var t = this,
                        n = e.file;
                    return n.getStatus() !== f.PROGRESS ? void(n.getStatus() === f.INTERRUPT && t._putback(e)) : (t.pool.push(e), t.remaning++, e.blob = 1 === e.chunks ? n.source : n.source.slice(e.start, e.end), void t.request("before-send", e, function () {
                            n.getStatus() === f.PROGRESS ? t._doSend(e) : (t._popBlock(e), u.nextTick(t.__tick))
                        }).fail(function () {
                            1 === n.remaning ? t._finishFile(n).always(function () {
                                e.percentage = 1,
                                t._popBlock(e),
                                t.owner.trigger("uploadComplete", n),
                                u.nextTick(t.__tick)
                            }) : (e.percentage = 1, t.updateFileProgress(n), t._popBlock(e), u.nextTick(t.__tick))
                        }))
                },
                _doSend: function (n) {
                    var a, i, t = this,
                        r = t.owner,
                        o = t.options,
                        s = n.file,
                        c = new d(o),
                        e = p.extend({}, o.formData),
                        l = p.extend({}, o.headers);
                        (n.transport = c).on("destroy", function () {
                            delete n.transport,
                            t._popBlock(n),
                            u.nextTick(t.__tick)
                        }),
                    c.on("progress", function (e) {
                            n.percentage = e,
                            t.updateFileProgress(s)
                        }),
                    a = function (t) {
                            var e;
                            return (i = c.getResponseAsJson() || {})._raw = c.getResponse(),
                            e = function (e) {
                                t = e
                            },
                            r.trigger("uploadAccept", n, i, e) || (t = t || "server"),
                            t
                        },
                    c.on("error", function (e, t) {
                            n.retried = n.retried || 0,
                            1 < n.chunks && ~"http,abort".indexOf(e) && n.retried < o.chunkRetry ? (n.retried++, c.send()) : (t || "server" !== e || (e = a(e)), s.setStatus(f.ERROR, e), r.trigger("uploadError", s, e), r.trigger("uploadComplete", s))
                        }),
                    c.on("load", function () {
                            var e;
                            return (e = a()) ? void c.trigger("error", e, !0) : void(1 === s.remaning ? t._finishFile(s, i) : c.destroy())
                        }),
                    e = p.extend(e, {
                            id: s.id,
                            name: s.name,
                            type: s.type,
                            lastModifiedDate: s.lastModifiedDate,
                            size: s.size
                        }),
                    1 < n.chunks && p.extend(e, {
                            chunks: n.chunks,
                            chunk: n.chunk
                        }),
                    r.trigger("uploadBeforeSend", n, e, l),
                    c.appendBlob(o.fileVal, n.blob, s.name),
                    c.append(e),
                    c.setRequestHeader(l),
                    c.send()
                },
                _finishFile: function (t, e, n) {
                    var a = this.owner;
                    return a.request("after-send-file", arguments, function () {
                        t.setStatus(f.COMPLETE),
                        a.trigger("uploadSuccess", t, e, n)
                    }).fail(function (e) {
                        t.getStatus() === f.PROGRESS && t.setStatus(f.ERROR, e),
                        a.trigger("uploadError", t, e)
                    }).always(function () {
                        a.trigger("uploadComplete", t)
                    })
                },
                updateFileProgress: function (e) {
                    var t = 0,
                        n = 0;
                    e.blocks && (p.each(e.blocks, function (e, t) {
                            n += (t.percentage || 0) * (t.end - t.start)
                        }), t = n / e.size, this.owner.trigger("uploadProgress", e, t || 0))
                }
            })
    }),
    e("widgets/validator", ["base", "uploader", "file", "widgets/widget"], function (t, e, n) {
        var a, i = t.$,
            r = {};
        return a = {
                addValidator: function (e, t) {
                    r[e] = t
                },
                removeValidator: function (e) {
                    delete r[e]
                }
            },
        e.register({
                name: "validator",
                init: function () {
                    var e = this;
                    t.nextTick(function () {
                        i.each(r, function () {
                            this.call(e.owner)
                        })
                    })
                }
            }),
        a.addValidator("fileNumLimit", function () {
                var e = this,
                    t = e.options,
                    n = 0,
                    a = parseInt(t.fileNumLimit, 10),
                    i = !0;
                a && (e.on("beforeFileQueued", function (e) {
                        return a <= n && i && (i = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", a, e), setTimeout(function () {
                            i = !0
                        }, 1)),
                        !(a <= n)
                    }), e.on("fileQueued", function () {
                        n++
                    }), e.on("fileDequeued", function () {
                        n--
                    }), e.on("reset", function () {
                        n = 0
                    }))
            }),
        a.addValidator("fileSizeLimit", function () {
                var e = this,
                    t = e.options,
                    n = 0,
                    a = parseInt(t.fileSizeLimit, 10),
                    i = !0;
                a && (e.on("beforeFileQueued", function (e) {
                        var t = n + e.size > a;
                        return t && i && (i = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", a, e), setTimeout(function () {
                            i = !0
                        }, 1)),
                        !t
                    }), e.on("fileQueued", function (e) {
                        n += e.size
                    }), e.on("fileDequeued", function (e) {
                        n -= e.size
                    }), e.on("reset", function () {
                        n = 0
                    }))
            }),
        a.addValidator("fileSingleSizeLimit", function () {
                var e = this,
                    t = e.options.fileSingleSizeLimit;
                t && e.on("beforeFileQueued", function (e) {
                        return e.size > t ? (e.setStatus(n.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", t, e), !1) : void 0
                    })
            }),
        a.addValidator("duplicate", function () {
                function n(e) {
                    for (var t = 0, n = 0, a = e.length; n < a; n++) t = e.charCodeAt(n) + (t << 6) + (t << 16) - t;
                    return t
                }
                var e = this,
                    t = e.options,
                    a = {};
                t.duplicate || (e.on("beforeFileQueued", function (e) {
                        var t = e.__hash || (e.__hash = n(e.name + e.size + e.lastModifiedDate));
                        return a[t] ? (this.trigger("error", "F_DUPLICATE", e), !1) : void 0
                    }), e.on("fileQueued", function (e) {
                        var t = e.__hash;
                        t && (a[t] = !0)
                    }), e.on("fileDequeued", function (e) {
                        var t = e.__hash;
                        t && delete a[t]
                    }), e.on("reset", function () {
                        a = {}
                    }))
            }),
        a
    }),
    e("lib/md5", ["runtime/client", "mediator"], function (e, t) {
        function n() {
            e.call(this, "Md5")
        }
        return t.installTo(n.prototype),
        n.prototype.loadFromBlob = function (e) {
            var t = this;
            t.getRuid() && t.disconnectRuntime(),
            t.connectRuntime(e.ruid, function () {
                t.exec("init"),
                t.exec("loadFromBlob", e)
            })
        },
        n.prototype.getResult = function () {
            return this.exec("getResult")
        },
        n
    }),
    e("widgets/md5", ["base", "uploader", "lib/md5", "lib/blob", "widgets/widget"], function (o, e, s, c) {
        return e.register({
            name: "md5",
            md5File: function (e, t, n) {
                var a = new s,
                    i = o.Deferred(),
                    r = e instanceof c ? e : this.request("get-file", e).source;
                return a.on("progress load", function (e) {
                        e = e || {},
                        i.notify(e.total ? e.loaded / e.total : 1)
                    }),
                a.on("complete", function () {
                        i.resolve(a.getResult())
                    }),
                a.on("error", function (e) {
                        i.reject(e)
                    }),
                1 < arguments.length && (n = n || 0, (t = t || 0) < 0 && (t = r.size + t), n < 0 && (n = r.size + n), n = Math.min(n, r.size), r = r.slice(t, n)),
                a.loadFromBlob(r),
                i.promise()
            }
        })
    }),
    e("runtime/compbase", [], function () {
        function e(e, t) {
            this.owner = e,
            this.options = e.options,
            this.getRuntime = function () {
                return t
            },
            this.getRuid = function () {
                return t.uid
            },
            this.trigger = function () {
                return e.trigger.apply(e, arguments)
            }
        }
        return e
    }),
    e("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function (c, t, n) {
        function e() {
            var o = {},
                s = this,
                e = this.destroy;
            t.apply(s, arguments),
            s.type = a,
            s.exec = function (e, t) {
                    var n, a = this,
                        i = a.uid,
                        r = c.slice(arguments, 2);
                    return l[e] && (n = o[i] = o[i] || new l[e](a, s))[t] ? n[t].apply(n, r) : void 0
                },
            s.destroy = function () {
                    return e && e.apply(this, arguments)
                }
        }
        var a = "html5",
            l = {};
        return c.inherits(t, {
                constructor: e,
                init: function () {
                    var e = this;
                    setTimeout(function () {
                        e.trigger("ready")
                    }, 1)
                }
            }),
        e.register = function (e, t) {
                return l[e] = c.inherits(n, t)
            },
        y.Blob && y.FileReader && y.DataView && t.addRuntime(a, e),
        e
    }),
    e("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function (e, a) {
        return e.register("Blob", {
            slice: function (e, t) {
                var n = this.owner.source;
                return n = (n.slice || n.webkitSlice || n.mozSlice).call(n, e, t),
                new a(this.getRuid(), n)
            }
        })
    }),
    e("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"], function (d, e, s) {
        var c = d.$,
            l = "webuploader-dnd-";
        return e.register("DragAndDrop", {
                init: function () {
                    var e = this.elem = this.options.container;
                    this.dragEnterHandler = d.bindFn(this._dragEnterHandler, this),
                    this.dragOverHandler = d.bindFn(this._dragOverHandler, this),
                    this.dragLeaveHandler = d.bindFn(this._dragLeaveHandler, this),
                    this.dropHandler = d.bindFn(this._dropHandler, this),
                    this.dndOver = !1,
                    e.on("dragenter", this.dragEnterHandler),
                    e.on("dragover", this.dragOverHandler),
                    e.on("dragleave", this.dragLeaveHandler),
                    e.on("drop", this.dropHandler),
                    this.options.disableGlobalDnd && (c(document).on("dragover", this.dragOverHandler), c(document).on("drop", this.dropHandler))
                },
                _dragEnterHandler: function (e) {
                    var t, n = this,
                        a = n._denied || !1;
                    return e = e.originalEvent || e,
                    n.dndOver || (n.dndOver = !0, (t = e.dataTransfer.items) && t.length && (n._denied = a = !n.trigger("accept", t)), n.elem.addClass(l + "over"), n.elem[a ? "addClass" : "removeClass"](l + "denied")),
                    e.dataTransfer.dropEffect = a ? "none" : "copy",
                    !1
                },
                _dragOverHandler: function (e) {
                    var t = this.elem.parent().get(0);
                    return t && !c.contains(t, e.currentTarget) || (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, e)),
                    !1
                },
                _dragLeaveHandler: function () {
                    var e, t = this;
                    return e = function () {
                        t.dndOver = !1,
                        t.elem.removeClass(l + "over " + l + "denied")
                    },
                    clearTimeout(t._leaveTimer),
                    t._leaveTimer = setTimeout(e, 100),
                    !1
                },
                _dropHandler: function (e) {
                    var t, n, a = this,
                        i = a.getRuid(),
                        r = a.elem.parent().get(0);
                    if (r && !c.contains(r, e.currentTarget)) return !1;
                    t = (e = e.originalEvent || e).dataTransfer;
                    try {
                            n = t.getData("text/html")
                        } catch (o) {}
                    return n ? void 0 : (a._getTansferFiles(t, function (e) {
                            a.trigger("drop", c.map(e, function (e) {
                                return new s(i, e)
                            }))
                        }), a.dndOver = !1, a.elem.removeClass(l + "over"), !1)
                },
                _getTansferFiles: function (e, t) {
                    var n, a, i, r, o, s, c, l = [],
                        u = [];
                    for (n = e.items, a = e.files, c = !(!n || !n[0].webkitGetAsEntry), o = 0, s = a.length; o < s; o++) i = a[o],
                    r = n && n[o],
                    c && r.webkitGetAsEntry().isDirectory ? u.push(this._traverseDirectoryTree(r.webkitGetAsEntry(), l)) : l.push(i);
                    d.when.apply(d, u).done(function () {
                            l.length && t(l)
                        })
                },
                _traverseDirectoryTree: function (e, r) {
                    var o = d.Deferred(),
                        s = this;
                    return e.isFile ? e.file(function (e) {
                            r.push(e),
                            o.resolve()
                        }) : e.isDirectory && e.createReader().readEntries(function (e) {
                            var t, n = e.length,
                                a = [],
                                i = [];
                            for (t = 0; t < n; t++) a.push(s._traverseDirectoryTree(e[t], i));
                            d.when.apply(d, a).then(function () {
                                    r.push.apply(r, i),
                                    o.resolve()
                                }, o.reject)
                        }),
                    o.promise()
                },
                destroy: function () {
                    var e = this.elem;
                    e && (e.off("dragenter", this.dragEnterHandler), e.off("dragover", this.dragOverHandler), e.off("dragleave", this.dragLeaveHandler), e.off("drop", this.dropHandler), this.options.disableGlobalDnd && (c(document).off("dragover", this.dragOverHandler), c(document).off("drop", this.dropHandler)))
                }
            })
    }),
    e("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"], function (s, e, c) {
        return e.register("FilePaste", {
            init: function () {
                var e, t, n, a, i = this.options,
                    r = this.elem = i.container,
                    o = ".*";
                if (i.accept) {
                        for (e = [], t = 0, n = i.accept.length; t < n; t++)(a = i.accept[t].mimeTypes) && e.push(a);
                        e.length && (o = (o = e.join(",")).replace(/,/g, "|").replace(/\*/g, ".*"))
                    }
                this.accept = o = new RegExp(o, "i"),
                this.hander = s.bindFn(this._pasteHander, this),
                r.on("paste", this.hander)
            },
            _pasteHander: function (e) {
                var t, n, a, i, r, o = [],
                    s = this.getRuid();
                for (i = 0, r = (t = (e = e.originalEvent || e).clipboardData.items).length; i < r; i++)"file" === (n = t[i]).kind && (a = n.getAsFile()) && o.push(new c(s, a));
                o.length && (e.preventDefault(), e.stopPropagation(), this.trigger("paste", o))
            },
            destroy: function () {
                this.elem.off("paste", this.hander)
            }
        })
    }),
    e("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function (e, t) {
        var u = e.$;
        return t.register("FilePicker", {
            init: function () {
                var e, t, n, a, i = this.getRuntime().getContainer(),
                    r = this,
                    o = r.owner,
                    s = r.options,
                    c = this.label = u(document.createElement("label")),
                    l = this.input = u(document.createElement("input"));
                if (l.attr("type", "file"), l.attr("name", s.name), l.addClass("webuploader-element-invisible"), c.on("click", function () {
                        l.trigger("click")
                    }), c.css({
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        cursor: "pointer",
                        background: "#ffffff"
                    }), s.multiple && l.attr("multiple", "multiple"), s.accept && 0 < s.accept.length) {
                        for (e = [], t = 0, n = s.accept.length; t < n; t++) e.push(s.accept[t].mimeTypes);
                        l.attr("accept", e.join(","))
                    }
                i.append(l),
                i.append(c),
                a = function (e) {
                        o.trigger(e.type)
                    },
                l.on("change", function (e) {
                        var t, n = arguments.callee;
                        r.files = e.target.files,
                        (t = this.cloneNode(!0)).value = null,
                        this.parentNode.replaceChild(t, this),
                        l.off(),
                        l = u(t).on("change", n).on("mouseenter mouseleave", a),
                        o.trigger("change")
                    }),
                c.on("mouseenter mouseleave", a)
            },
            getFiles: function () {
                return this.files
            },
            destroy: function () {
                this.input.off(),
                this.label.off()
            }
        })
    }),
    e("runtime/html5/util", ["base"], function (e) {
        var t = y.createObjectURL && y || y.URL && URL.revokeObjectURL && URL || y.webkitURL,
            n = e.noop,
            a = n;
        return t && (n = function () {
                return t.createObjectURL.apply(t, arguments)
            }, a = function () {
                return t.revokeObjectURL.apply(t, arguments)
            }),
        {
                createObjectURL: n,
                revokeObjectURL: a,
                dataURL2Blob: function (e) {
                    var t, n, a, i, r, o;
                    for (t = ~ (o = e.split(","))[0].indexOf("base64") ? atob(o[1]) : decodeURIComponent(o[1]), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
                    return r = o[0].split(":")[1].split(";")[0],
                    this.arrayBufferToBlob(a, r)
                },
                dataURL2ArrayBuffer: function (e) {
                    var t, n, a, i;
                    for (t = ~ (i = e.split(","))[0].indexOf("base64") ? atob(i[1]) : decodeURIComponent(i[1]), n = new Uint8Array(t.length), a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
                    return n.buffer
                },
                arrayBufferToBlob: function (e, t) {
                    var n, a = y.BlobBuilder || y.WebKitBlobBuilder;
                    return a ? ((n = new a).append(e), n.getBlob(t)) : new Blob([e], t ? {
                        type: t
                    } : {})
                },
                canvasToDataUrl: function (e, t, n) {
                    return e.toDataURL(t, n / 100)
                },
                parseMeta: function (e, t) {
                    t(!1, {})
                },
                updateImageHead: function (e) {
                    return e
                }
            }
    }),
    e("runtime/html5/imagemeta", ["runtime/html5/util"], function (e) {
        var d;
        return d = {
            parsers: {
                65505: []
            },
            maxMetaDataSize: 262144,
            parse: function (e, t) {
                var n = this,
                    a = new FileReader;
                a.onload = function () {
                        t(!1, n._parse(this.result)),
                        a = a.onload = a.onerror = null
                    },
                a.onerror = function (e) {
                        t(e.message),
                        a = a.onload = a.onerror = null
                    },
                e = e.slice(0, n.maxMetaDataSize),
                a.readAsArrayBuffer(e.getSource())
            },
            _parse: function (e, t) {
                if (!(e.byteLength < 6)) {
                    var n, a, i, r, o = new DataView(e),
                        s = 2,
                        c = o.byteLength - 4,
                        l = s,
                        u = {};
                    if (65496 === o.getUint16(0)) {
                            for (; s < c && (65504 <= (n = o.getUint16(s)) && n <= 65519 || 65534 === n) && !(s + (a = o.getUint16(s + 2) + 2) > o.byteLength);) {
                                if (i = d.parsers[n], !t && i) for (r = 0; r < i.length; r += 1) i[r].call(d, o, s, a, u);
                                l = s += a
                            }
                            6 < l && (u.imageHead = e.slice ? e.slice(2, l) : new Uint8Array(e).subarray(2, l))
                        }
                    return u
                }
            },
            updateImageHead: function (e, t) {
                var n, a, i, r = this._parse(e, !0);
                return i = 2,
                r.imageHead && (i = 2 + r.imageHead.byteLength),
                a = e.slice ? e.slice(i) : new Uint8Array(e).subarray(i),
                (n = new Uint8Array(t.byteLength + 2 + a.byteLength))[0] = 255,
                n[1] = 216,
                n.set(new Uint8Array(t), 2),
                n.set(new Uint8Array(a), t.byteLength + 2),
                n.buffer
            }
        },
        e.parseMeta = function () {
            return d.parse.apply(d, arguments)
        },
        e.updateImageHead = function () {
            return d.updateImageHead.apply(d, arguments)
        },
        d
    }),
    e("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function (f, e) {
        var h = {
            ExifMap: function () {
                return this
            }
        };
        return h.ExifMap.prototype.map = {
            Orientation: 274
        },
        h.ExifMap.prototype.get = function (e) {
            return this[e] || this[this.map[e]]
        },
        h.exifTagTypes = {
            1: {
                getValue: function (e, t) {
                    return e.getUint8(t)
                },
                size: 1
            },
            2: {
                getValue: function (e, t) {
                    return String.fromCharCode(e.getUint8(t))
                },
                size: 1,
                ascii: !0
            },
            3: {
                getValue: function (e, t, n) {
                    return e.getUint16(t, n)
                },
                size: 2
            },
            4: {
                getValue: function (e, t, n) {
                    return e.getUint32(t, n)
                },
                size: 4
            },
            5: {
                getValue: function (e, t, n) {
                    return e.getUint32(t, n) / e.getUint32(t + 4, n)
                },
                size: 8
            },
            9: {
                getValue: function (e, t, n) {
                    return e.getInt32(t, n)
                },
                size: 4
            },
            10: {
                getValue: function (e, t, n) {
                    return e.getInt32(t, n) / e.getInt32(t + 4, n)
                },
                size: 8
            }
        },
        h.exifTagTypes[7] = h.exifTagTypes[1],
        h.getExifValue = function (e, t, n, a, i, r) {
            var o, s, c, l, u, d, p = h.exifTagTypes[a];
            if (p) {
                if (!((s = 4 < (o = p.size * i) ? t + e.getUint32(n + 8, r) : n + 8) + o > e.byteLength)) {
                    if (1 === i) return p.getValue(e, s, r);
                    for (c = [], l = 0; l < i; l += 1) c[l] = p.getValue(e, s + l * p.size, r);
                    if (p.ascii) {
                        for (u = "", l = 0; l < c.length && "\0" !== (d = c[l]); l += 1) u += d;
                        return u
                    }
                    return c
                }
                f.log("Invalid Exif data: Invalid data offset.")
            } else f.log("Invalid Exif data: Invalid tag type.")
        },
        h.parseExifTag = function (e, t, n, a, i) {
            var r = e.getUint16(n, a);
            i.exif[r] = h.getExifValue(e, t, n, e.getUint16(n + 2, a), e.getUint32(n + 4, a), a)
        },
        h.parseExifTags = function (e, t, n, a, i) {
            var r, o, s;
            if (n + 6 > e.byteLength) f.log("Invalid Exif data: Invalid directory offset.");
            else {
                if (!((o = n + 2 + 12 * (r = e.getUint16(n, a))) + 4 > e.byteLength)) {
                    for (s = 0; s < r; s += 1) this.parseExifTag(e, t, n + 2 + 12 * s, a, i);
                    return e.getUint32(o, a)
                }
                f.log("Invalid Exif data: Invalid directory size.")
            }
        },
        h.parseExifData = function (e, t, n, a) {
            var i, r, o = t + 10;
            if (1165519206 === e.getUint32(t + 4)) {
                if (o + 8 > e.byteLength) return void f.log("Invalid Exif data: Invalid segment size.");
                if (0 !== e.getUint16(t + 8)) return void f.log("Invalid Exif data: Missing byte alignment offset.");
                switch (e.getUint16(o)) {
                case 18761:
                    i = !0;
                    break;
                case 19789:
                    i = !1;
                    break;
                default:
                    return void f.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== e.getUint16(o + 2, i)) return void f.log("Invalid Exif data: Missing TIFF marker.");
                r = e.getUint32(o + 4, i),
                a.exif = new h.ExifMap,
                r = h.parseExifTags(e, o, o + r, i, a)
            }
        },
        e.parsers[65505].push(h.parseExifData),
        h
    }),
    e("runtime/html5/jpegencoder", [], function () {
        function n(e) {
            function t(e) {
                for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
                    var a = d((t[n] * e + 50) / 100);
                    a < 1 ? a = 1 : 255 < a && (a = 255),
                    p[H[n]] = a
                }
                for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], r = 0; r < 64; r++) {
                    var o = d((i[r] * e + 50) / 100);
                    o < 1 ? o = 1 : 255 < o && (o = 255),
                    f[H[r]] = o
                }
                for (var s = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], c = 0, l = 0; l < 8; l++) for (var u = 0; u < 8; u++) F[c] = 1 / (p[H[c]] * s[l] * s[u] * 8),
                U[c] = 1 / (f[H[c]] * s[l] * s[u] * 8),
                c++
            }
            function n(e, t) {
                for (var n = 0, a = 0, i = new Array, r = 1; r <= 16; r++) {
                    for (var o = 1; o <= e[r]; o++) i[t[a]] = [],
                    i[t[a]][0] = n,
                    i[t[a]][1] = r,
                    a++,
                    n++;
                    n *= 2
                }
                return i
            }
            function a() {
                E = n(h, m),
                R = n(w, $),
                O = n(g, v),
                j = n(G, V)
            }
            function i() {
                for (var e = 1, t = 2, n = 1; n <= 15; n++) {
                    for (var a = e; a < t; a++) M[32767 + a] = n,
                    D[32767 + a] = [],
                    D[32767 + a][1] = n,
                    D[32767 + a][0] = a;
                    for (var i = -(t - 1); i <= -e; i++) M[32767 + i] = n,
                    D[32767 + i] = [],
                    D[32767 + i][1] = n,
                    D[32767 + i][0] = t - 1 + i;
                    e <<= 1,
                    t <<= 1
                }
            }
            function r() {
                for (var e = 0; e < 256; e++) J[e] = 19595 * e,
                J[e + 256 >> 0] = 38470 * e,
                J[e + 512 >> 0] = 7471 * e + 32768,
                J[e + 768 >> 0] = -11059 * e,
                J[e + 1024 >> 0] = -21709 * e,
                J[e + 1280 >> 0] = 32768 * e + 8421375,
                J[e + 1536 >> 0] = -27439 * e,
                J[e + 1792 >> 0] = -5329 * e
            }
            function b(e) {
                for (var t = e[0], n = e[1] - 1; 0 <= n;) t & 1 << n && (z |= 1 << A),
                n--,
                --A < 0 && (255 == z ? (c(255), c(0)) : c(z), A = 7, z = 0)
            }
            function c(e) {
                P.push(u[e])
            }
            function k(e) {
                c(e >> 8 & 255),
                c(255 & e)
            }
            function y(e, t) {
                var n, a, i, r, o, s, c, l, u, d, p = 0,
                    f = 8,
                    h = 64;
                for (u = 0; u < f; ++u) {
                        n = e[p],
                        a = e[p + 1],
                        i = e[p + 2],
                        r = e[p + 3],
                        o = e[p + 4],
                        s = e[p + 5],
                        c = e[p + 6];
                        var m = n + (l = e[p + 7]),
                            g = n - l,
                            v = a + c,
                            w = a - c,
                            $ = i + s,
                            y = i - s,
                            b = r + o,
                            k = r - o,
                            x = m + b,
                            _ = m - b,
                            q = v + $,
                            T = v - $;
                        e[p] = x + q,
                        e[p + 4] = x - q;
                        var C = .707106781 * (T + _);
                        e[p + 2] = _ + C,
                        e[p + 6] = _ - C;
                        var I = .382683433 * ((x = k + y) - (T = w + g)),
                            S = .5411961 * x + I,
                            E = 1.306562965 * T + I,
                            R = .707106781 * (q = y + w),
                            O = g + R,
                            j = g - R;
                        e[p + 5] = j + S,
                        e[p + 3] = j - S,
                        e[p + 1] = O + E,
                        e[p + 7] = O - E,
                        p += 8
                    }
                for (u = p = 0; u < f; ++u) {
                        n = e[p],
                        a = e[p + 8],
                        i = e[p + 16],
                        r = e[p + 24],
                        o = e[p + 32],
                        s = e[p + 40],
                        c = e[p + 48];
                        var F = n + (l = e[p + 56]),
                            U = n - l,
                            D = a + c,
                            M = a - c,
                            L = i + s,
                            P = i - s,
                            z = r + o,
                            A = r - o,
                            N = F + z,
                            B = F - z,
                            Q = D + L,
                            J = D - L;
                        e[p] = N + Q,
                        e[p + 32] = N - Q;
                        var H = .707106781 * (J + B);
                        e[p + 16] = B + H,
                        e[p + 48] = B - H;
                        var G = .382683433 * ((N = A + P) - (J = M + U)),
                            V = .5411961 * N + G,
                            W = 1.306562965 * J + G,
                            X = .707106781 * (Q = P + M),
                            K = U + X,
                            Y = U - X;
                        e[p + 40] = Y + V,
                        e[p + 24] = Y - V,
                        e[p + 8] = K + W,
                        e[p + 56] = K - W,
                        p++
                    }
                for (u = 0; u < h; ++u) d = e[u] * t[u],
                Z[u] = 0 < d ? d + .5 | 0 : d - .5 | 0;
                return Z
            }
            function x() {
                k(65504),
                k(16),
                c(74),
                c(70),
                c(73),
                c(70),
                c(0),
                c(1),
                c(1),
                c(0),
                k(1),
                k(1),
                c(0),
                c(0)
            }
            function _(e, t) {
                k(65472),
                k(17),
                c(8),
                k(t),
                k(e),
                c(3),
                c(1),
                c(17),
                c(0),
                c(2),
                c(17),
                c(1),
                c(3),
                c(17),
                c(1)
            }
            function q() {
                k(65499),
                k(132),
                c(0);
                for (var e = 0; e < 64; e++) c(p[e]);
                c(1);
                for (var t = 0; t < 64; t++) c(f[t])
            }
            function T() {
                k(65476),
                k(418),
                c(0);
                for (var e = 0; e < 16; e++) c(h[e + 1]);
                for (var t = 0; t <= 11; t++) c(m[t]);
                c(16);
                for (var n = 0; n < 16; n++) c(g[n + 1]);
                for (var a = 0; a <= 161; a++) c(v[a]);
                c(1);
                for (var i = 0; i < 16; i++) c(w[i + 1]);
                for (var r = 0; r <= 11; r++) c($[r]);
                c(17);
                for (var o = 0; o < 16; o++) c(G[o + 1]);
                for (var s = 0; s <= 161; s++) c(V[s])
            }
            function C() {
                k(65498),
                k(12),
                c(3),
                c(1),
                c(0),
                c(2),
                c(17),
                c(3),
                c(17),
                c(0),
                c(63),
                c(0)
            }
            function I(e, t, n, a, i) {
                for (var r, o = i[0], s = i[240], c = 16, l = 63, u = 64, d = y(e, t), p = 0; p < u; ++p) L[H[p]] = d[p];
                var f = L[0] - n;
                n = L[0],
                0 == f ? b(a[0]) : (b(a[M[r = 32767 + f]]), b(D[r]));
                for (var h = 63; 0 < h && 0 == L[h]; h--);
                if (0 == h) return b(o),
                n;
                for (var m, g = 1; g <= h;) {
                    for (var v = g; 0 == L[g] && g <= h; ++g);
                    var w = g - v;
                    if (c <= w) {
                        m = w >> 4;
                        for (var $ = 1; $ <= m; ++$) b(s);
                        w &= 15
                    }
                    r = 32767 + L[g],
                    b(i[(w << 4) + M[r]]),
                    b(D[r]),
                    g++
                }
                return h != l && b(o),
                n
            }
            function o() {
                for (var e = String.fromCharCode, t = 0; t < 256; t++) u[t] = e(t)
            }
            function S(e) {
                if (e <= 0 && (e = 1), 100 < e && (e = 100), l != e) {
                    t(Math.floor(e < 50 ? 5e3 / e : 200 - 2 * e)),
                    l = e
                }
            }
            function s() {
                e || (e = 50),
                o(),
                a(),
                i(),
                r(),
                S(e)
            }
            var E, R, O, j, l, d = (Math.round, Math.floor),
                p = new Array(64),
                f = new Array(64),
                F = new Array(64),
                U = new Array(64),
                D = new Array(65535),
                M = new Array(65535),
                Z = new Array(64),
                L = new Array(64),
                P = [],
                z = 0,
                A = 7,
                N = new Array(64),
                B = new Array(64),
                Q = new Array(64),
                u = new Array(256),
                J = new Array(2048),
                H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                h = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                g = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                v = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                w = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                $ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                G = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                V = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            this.encode = function (e, t) {
                    t && S(t),
                    P = new Array,
                    z = 0,
                    A = 7,
                    k(65496),
                    x(),
                    q(),
                    _(e.width, e.height),
                    T(),
                    C();
                    var n = 0,
                        a = 0,
                        i = 0;
                    z = 0,
                    A = 7,
                    this.encode.displayName = "_encode_";
                    for (var r, o, s, c, l, u, d, p, f, h = e.data, m = e.width, g = e.height, v = 4 * m, w = 0; w < g;) {
                            for (r = 0; r < v;) {
                                for (u = l = v * w + r, d = -1, f = p = 0; f < 64; f++) u = l + (p = f >> 3) * v + (d = 4 * (7 & f)),
                                g <= w + p && (u -= v * (w + 1 + p - g)),
                                v <= r + d && (u -= r + d - v + 4),
                                o = h[u++],
                                s = h[u++],
                                c = h[u++],
                                N[f] = (J[o] + J[s + 256 >> 0] + J[c + 512 >> 0] >> 16) - 128,
                                B[f] = (J[o + 768 >> 0] + J[s + 1024 >> 0] + J[c + 1280 >> 0] >> 16) - 128,
                                Q[f] = (J[o + 1280 >> 0] + J[s + 1536 >> 0] + J[c + 1792 >> 0] >> 16) - 128;
                                n = I(N, F, n, E, O),
                                a = I(B, U, a, R, j),
                                i = I(Q, U, i, R, j),
                                r += 32
                            }
                            w += 8
                        }
                    if (0 <= A) {
                            var $ = [];
                            $[1] = A + 1,
                            $[0] = (1 << A + 1) - 1,
                            b($)
                        }
                    k(65497);
                    var y = "data:image/jpeg;base64," + btoa(P.join(""));
                    return P = [],
                    y
                },
            s()
        }
        return n.encode = function (e, t) {
            return new n(t).encode(e)
        },
        n
    }),
    e("runtime/html5/androidpatch", ["runtime/html5/util", "runtime/html5/jpegencoder", "base"], function (e, c, l) {
        var u, d = e.canvasToDataUrl;
        e.canvasToDataUrl = function (e, t, n) {
            var a, i, r, o, s;
            return l.os.android ? ("image/jpeg" === t && void 0 === u && (o = (o = ~ (s = (o = d.apply(null, arguments)).split(","))[0].indexOf("base64") ? atob(s[1]) : decodeURIComponent(s[1])).substring(0, 2), u = 255 === o.charCodeAt(0) && 216 === o.charCodeAt(1)), "image/jpeg" !== t || u ? d.apply(null, arguments) : (i = e.width, r = e.height, a = e.getContext("2d"), c.encode(a.getImageData(0, 0, i, r), n))) : d.apply(null, arguments)
        }
    }),
    e("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function (a, e, i) {
        var t = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return e.register("Image", {
            modified: !1,
            init: function () {
                var n = this,
                    e = new Image;
                e.onload = function () {
                        n._info = {
                            type: n.type,
                            width: this.width,
                            height: this.height
                        },
                        n._metas || "image/jpeg" !== n.type ? n.owner.trigger("load") : i.parseMeta(n._blob, function (e, t) {
                            n._metas = t,
                            n.owner.trigger("load")
                        })
                    },
                e.onerror = function () {
                        n.owner.trigger("error")
                    },
                n._img = e
            },
            loadFromBlob: function (e) {
                var t = this,
                    n = t._img;
                t._blob = e,
                t.type = e.type,
                n.src = i.createObjectURL(e.getSource()),
                t.owner.once("load", function () {
                        i.revokeObjectURL(n.src)
                    })
            },
            resize: function (e, t) {
                var n = this._canvas || (this._canvas = document.createElement("canvas"));
                this._resize(this._img, n, e, t),
                this._blob = null,
                this.modified = !0,
                this.owner.trigger("complete", "resize")
            },
            crop: function (e, t, n, a, i) {
                var r = this._canvas || (this._canvas = document.createElement("canvas")),
                    o = this.options,
                    s = this._img,
                    c = s.naturalWidth,
                    l = s.naturalHeight,
                    u = this.getOrientation();
                i = i || 1,
                r.width = n,
                r.height = a,
                o.preserveHeaders || this._rotate2Orientaion(r, u),
                this._renderImageToCanvas(r, s, -e, -t, c * i, l * i),
                this._blob = null,
                this.modified = !0,
                this.owner.trigger("complete", "crop")
            },
            getAsBlob: function (e) {
                var t, n = this._blob,
                    a = this.options;
                if (e = e || this.type, this.modified || this.type !== e) {
                        if (t = this._canvas, "image/jpeg" === e) {
                            if (n = i.canvasToDataUrl(t, e, a.quality), a.preserveHeaders && this._metas && this._metas.imageHead) return n = i.dataURL2ArrayBuffer(n),
                            n = i.updateImageHead(n, this._metas.imageHead),
                            i.arrayBufferToBlob(n, e)
                        } else n = i.canvasToDataUrl(t, e);
                        n = i.dataURL2Blob(n)
                    }
                return n
            },
            getAsDataUrl: function (e) {
                var t = this.options;
                return "image/jpeg" === (e = e || this.type) ? i.canvasToDataUrl(this._canvas, e, t.quality) : this._canvas.toDataURL(e)
            },
            getOrientation: function () {
                return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
            },
            info: function (e) {
                return e ? (this._info = e, this) : this._info
            },
            meta: function (e) {
                return e ? (this._meta = e, this) : this._meta
            },
            destroy: function () {
                var e = this._canvas;
                this._img.onload = null,
                e && (e.getContext("2d").clearRect(0, 0, e.width, e.height), e.width = e.height = 0, this._canvas = null),
                this._img.src = t,
                this._img = this._blob = null
            },
            _resize: function (e, t, n, a) {
                var i, r, o, s, c, l = this.options,
                    u = e.width,
                    d = e.height,
                    p = this.getOrientation();~ [5, 6, 7, 8].indexOf(p) && (n ^= a, n ^= a ^= n),
                i = Math[l.crop ? "max" : "min"](n / u, a / d),
                l.allowMagnify || (i = Math.min(1, i)),
                r = u * i,
                o = d * i,
                l.crop ? (t.width = n, t.height = a) : (t.width = r, t.height = o),
                s = (t.width - r) / 2,
                c = (t.height - o) / 2,
                l.preserveHeaders || this._rotate2Orientaion(t, p),
                this._renderImageToCanvas(t, e, s, c, r, o)
            },
            _rotate2Orientaion: function (e, t) {
                var n = e.width,
                    a = e.height,
                    i = e.getContext("2d");
                switch (t) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        e.width = a,
                        e.height = n
                    }
                switch (t) {
                    case 2:
                        i.translate(n, 0),
                        i.scale(-1, 1);
                        break;
                    case 3:
                        i.translate(n, a),
                        i.rotate(Math.PI);
                        break;
                    case 4:
                        i.translate(0, a),
                        i.scale(1, -1);
                        break;
                    case 5:
                        i.rotate(.5 * Math.PI),
                        i.scale(1, -1);
                        break;
                    case 6:
                        i.rotate(.5 * Math.PI),
                        i.translate(0, -a);
                        break;
                    case 7:
                        i.rotate(.5 * Math.PI),
                        i.translate(n, -a),
                        i.scale(-1, 1);
                        break;
                    case 8:
                        i.rotate(-.5 * Math.PI),
                        i.translate(-n, 0)
                    }
            },
            _renderImageToCanvas: function () {
                function b(e, t, n) {
                    var a, i, r = document.createElement("canvas"),
                        o = r.getContext("2d"),
                        s = 0,
                        c = n,
                        l = n;
                    for (r.width = 1, r.height = n, o.drawImage(e, 0, 0), a = o.getImageData(0, 0, 1, n).data; s < l;) 0 === a[4 * (l - 1) + 3] ? c = l : s = l,
                    l = c + s >> 1;
                    return 0 === (i = l / n) ? 1 : i
                }
                function k(e) {
                    var t, n, a = e.naturalWidth;
                    return 1048576 < a * e.naturalHeight && ((t = document.createElement("canvas")).width = t.height = 1, (n = t.getContext("2d")).drawImage(e, 1 - a, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
                }
                return a.os.ios ? 7 <= a.os.ios ?
                function (e, t, n, a, i, r) {
                    var o = t.naturalWidth,
                        s = t.naturalHeight,
                        c = b(t, o, s);
                    return e.getContext("2d").drawImage(t, 0, 0, o * c, s * c, n, a, i, r)
                } : function (e, t, n, a, i, r) {
                    var o, s, c, l, u, d, p, f = t.naturalWidth,
                        h = t.naturalHeight,
                        m = e.getContext("2d"),
                        g = k(t),
                        v = "image/jpeg" === this.type,
                        w = 1024,
                        $ = 0,
                        y = 0;
                    for (g && (f /= 2, h /= 2), m.save(), (o = document.createElement("canvas")).width = o.height = w, s = o.getContext("2d"), c = v ? b(t, f, h) : 1, l = Math.ceil(w * i / f), u = Math.ceil(w * r / h / c); $ < h;) {
                            for (p = d = 0; d < f;) s.clearRect(0, 0, w, w),
                            s.drawImage(t, -d, -$),
                            m.drawImage(o, 0, 0, w, w, n + p, a + y, l, u),
                            d += w,
                            p += l;
                            $ += w,
                            y += u
                        }
                    m.restore(),
                    o = s = null
                } : function (e) {
                    var t = a.slice(arguments, 1),
                        n = e.getContext("2d");
                    n.drawImage.apply(n, t)
                }
            }()
        })
    }),
    e("runtime/html5/transport", ["base", "runtime/html5/runtime"], function (c, e) {
        var a = c.noop,
            l = c.$;
        return e.register("Transport", {
                init: function () {
                    this._status = 0,
                    this._response = null
                },
                send: function () {
                    var n, e, t, a = this.owner,
                        i = this.options,
                        r = this._initAjax(),
                        o = a._blob,
                        s = i.server;
                    i.sendAsBinary ? (s += (/\?/.test(s) ? "&" : "?") + l.param(a._formData), e = o.getSource()) : (n = new FormData, l.each(a._formData, function (e, t) {
                            n.append(e, t)
                        }), n.append(i.fileVal, o.getSource(), i.filename || a._formData.name || "")),
                    i.withCredentials && "withCredentials" in r ? (r.open(i.method, s, !0), r.withCredentials = !0) : r.open(i.method, s),
                    this._setRequestHeader(r, i.headers),
                    e ? (r.overrideMimeType && r.overrideMimeType("application/octet-stream"), c.os.android ? ((t = new FileReader).onload = function () {
                            r.send(this.result),
                            t = t.onload = null
                        }, t.readAsArrayBuffer(e)) : r.send(e)) : r.send(n)
                },
                getResponse: function () {
                    return this._response
                },
                getResponseAsJson: function () {
                    return this._parseJson(this._response)
                },
                getStatus: function () {
                    return this._status
                },
                abort: function () {
                    var e = this._xhr;
                    e && (e.upload.onprogress = a, e.onreadystatechange = a, e.abort(), this._xhr = e = null)
                },
                destroy: function () {
                    this.abort()
                },
                _initAjax: function () {
                    var n = this,
                        e = new XMLHttpRequest;
                    return !this.options.withCredentials || "withCredentials" in e || "undefined" == typeof XDomainRequest || (e = new XDomainRequest),
                    e.upload.onprogress = function (e) {
                            var t = 0;
                            return e.lengthComputable && (t = e.loaded / e.total),
                            n.trigger("progress", t)
                        },
                    e.onreadystatechange = function () {
                            return 4 === e.readyState ? (e.upload.onprogress = a, e.onreadystatechange = a, n._xhr = null, n._status = e.status, 200 <= e.status && e.status < 300 ? (n._response = e.responseText, n.trigger("load")) : 500 <= e.status && e.status < 600 ? (n._response = e.responseText, n.trigger("error", "server")) : n.trigger("error", n._status ? "http" : "abort")) : void 0
                        },
                    n._xhr = e
                },
                _setRequestHeader: function (n, e) {
                    l.each(e, function (e, t) {
                        n.setRequestHeader(e, t)
                    })
                },
                _parseJson: function (e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch (a) {
                        t = {}
                    }
                    return t
                }
            })
    }),
    e("runtime/html5/md5", ["runtime/html5/runtime"], function (e) {
        var o = function (e, t) {
            return e + t & 4294967295
        },
            s = function (e, t, n, a, i, r) {
                return t = o(o(t, e), o(a, r)),
                o(t << i | t >>> 32 - i, n)
            },
            c = function (e, t, n, a, i, r, o) {
                return s(t & n | ~t & a, e, t, i, r, o)
            },
            l = function (e, t, n, a, i, r, o) {
                return s(t & a | n & ~a, e, t, i, r, o)
            },
            u = function (e, t, n, a, i, r, o) {
                return s(t ^ n ^ a, e, t, i, r, o)
            },
            d = function (e, t, n, a, i, r, o) {
                return s(n ^ (t | ~a), e, t, i, r, o)
            },
            p = function (e, t) {
                var n = e[0],
                    a = e[1],
                    i = e[2],
                    r = e[3];
                n = c(n, a, i, r, t[0], 7, -680876936),
                r = c(r, n, a, i, t[1], 12, -389564586),
                i = c(i, r, n, a, t[2], 17, 606105819),
                a = c(a, i, r, n, t[3], 22, -1044525330),
                n = c(n, a, i, r, t[4], 7, -176418897),
                r = c(r, n, a, i, t[5], 12, 1200080426),
                i = c(i, r, n, a, t[6], 17, -1473231341),
                a = c(a, i, r, n, t[7], 22, -45705983),
                n = c(n, a, i, r, t[8], 7, 1770035416),
                r = c(r, n, a, i, t[9], 12, -1958414417),
                i = c(i, r, n, a, t[10], 17, -42063),
                a = c(a, i, r, n, t[11], 22, -1990404162),
                n = c(n, a, i, r, t[12], 7, 1804603682),
                r = c(r, n, a, i, t[13], 12, -40341101),
                i = c(i, r, n, a, t[14], 17, -1502002290),
                a = c(a, i, r, n, t[15], 22, 1236535329),
                n = l(n, a, i, r, t[1], 5, -165796510),
                r = l(r, n, a, i, t[6], 9, -1069501632),
                i = l(i, r, n, a, t[11], 14, 643717713),
                a = l(a, i, r, n, t[0], 20, -373897302),
                n = l(n, a, i, r, t[5], 5, -701558691),
                r = l(r, n, a, i, t[10], 9, 38016083),
                i = l(i, r, n, a, t[15], 14, -660478335),
                a = l(a, i, r, n, t[4], 20, -405537848),
                n = l(n, a, i, r, t[9], 5, 568446438),
                r = l(r, n, a, i, t[14], 9, -1019803690),
                i = l(i, r, n, a, t[3], 14, -187363961),
                a = l(a, i, r, n, t[8], 20, 1163531501),
                n = l(n, a, i, r, t[13], 5, -1444681467),
                r = l(r, n, a, i, t[2], 9, -51403784),
                i = l(i, r, n, a, t[7], 14, 1735328473),
                a = l(a, i, r, n, t[12], 20, -1926607734),
                n = u(n, a, i, r, t[5], 4, -378558),
                r = u(r, n, a, i, t[8], 11, -2022574463),
                i = u(i, r, n, a, t[11], 16, 1839030562),
                a = u(a, i, r, n, t[14], 23, -35309556),
                n = u(n, a, i, r, t[1], 4, -1530992060),
                r = u(r, n, a, i, t[4], 11, 1272893353),
                i = u(i, r, n, a, t[7], 16, -155497632),
                a = u(a, i, r, n, t[10], 23, -1094730640),
                n = u(n, a, i, r, t[13], 4, 681279174),
                r = u(r, n, a, i, t[0], 11, -358537222),
                i = u(i, r, n, a, t[3], 16, -722521979),
                a = u(a, i, r, n, t[6], 23, 76029189),
                n = u(n, a, i, r, t[9], 4, -640364487),
                r = u(r, n, a, i, t[12], 11, -421815835),
                i = u(i, r, n, a, t[15], 16, 530742520),
                a = u(a, i, r, n, t[2], 23, -995338651),
                n = d(n, a, i, r, t[0], 6, -198630844),
                r = d(r, n, a, i, t[7], 10, 1126891415),
                i = d(i, r, n, a, t[14], 15, -1416354905),
                a = d(a, i, r, n, t[5], 21, -57434055),
                n = d(n, a, i, r, t[12], 6, 1700485571),
                r = d(r, n, a, i, t[3], 10, -1894986606),
                i = d(i, r, n, a, t[10], 15, -1051523),
                a = d(a, i, r, n, t[1], 21, -2054922799),
                n = d(n, a, i, r, t[8], 6, 1873313359),
                r = d(r, n, a, i, t[15], 10, -30611744),
                i = d(i, r, n, a, t[6], 15, -1560198380),
                a = d(a, i, r, n, t[13], 21, 1309151649),
                n = d(n, a, i, r, t[4], 6, -145523070),
                r = d(r, n, a, i, t[11], 10, -1120210379),
                i = d(i, r, n, a, t[2], 15, 718787259),
                a = d(a, i, r, n, t[9], 21, -343485551),
                e[0] = o(n, e[0]),
                e[1] = o(a, e[1]),
                e[2] = o(i, e[2]),
                e[3] = o(r, e[3])
            },
            f = function (e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return n
            },
            h = function (e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                return n
            },
            a = function (e) {
                var t, n, a, i, r, o, s = e.length,
                    c = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= s; t += 64) p(c, f(e.substring(t - 64, t)));
                for (n = (e = e.substring(t - 64)).length, a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) a[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (a[t >> 2] |= 128 << (t % 4 << 3), 55 < t) for (p(c, a), t = 0; t < 16; t += 1) a[t] = 0;
                return i = (i = 8 * s).toString(16).match(/(.*?)(.{0,8})$/),
                r = parseInt(i[2], 16),
                o = parseInt(i[1], 16) || 0,
                a[14] = r,
                a[15] = o,
                p(c, a),
                c
            },
            i = function (e) {
                var t, n, a, i, r, o, s = e.length,
                    c = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= s; t += 64) p(c, h(e.subarray(t - 64, t)));
                for (n = (e = t - 64 < s ? e.subarray(t - 64) : new Uint8Array(0)).length, a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) a[t >> 2] |= e[t] << (t % 4 << 3);
                if (a[t >> 2] |= 128 << (t % 4 << 3), 55 < t) for (p(c, a), t = 0; t < 16; t += 1) a[t] = 0;
                return i = (i = 8 * s).toString(16).match(/(.*?)(.{0,8})$/),
                r = parseInt(i[2], 16),
                o = parseInt(i[1], 16) || 0,
                a[14] = r,
                a[15] = o,
                p(c, a),
                c
            },
            r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
            n = function (e) {
                var t, n = "";
                for (t = 0; t < 4; t += 1) n += r[e >> 8 * t + 4 & 15] + r[e >> 8 * t & 15];
                return n
            },
            m = function (e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t] = n(e[t]);
                return e.join("")
            },
            t = function () {
                this.reset()
            };
        return "5d41402abc4b2a76b9719d911017c592" !==
        function (e) {
                return m(a(e))
            }("hello") && (o = function (e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }),
        t.prototype.append = function (e) {
                return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
                this.appendBinary(e),
                this
            },
        t.prototype.appendBinary = function (e) {
                this._buff += e,
                this._length += e.length;
                var t, n = this._buff.length;
                for (t = 64; t <= n; t += 64) p(this._state, f(this._buff.substring(t - 64, t)));
                return this._buff = this._buff.substr(t - 64),
                this
            },
        t.prototype.end = function (e) {
                var t, n, a = this._buff,
                    i = a.length,
                    r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < i; t += 1) r[t >> 2] |= a.charCodeAt(t) << (t % 4 << 3);
                return this._finish(r, i),
                n = e ? this._state : m(this._state),
                this.reset(),
                n
            },
        t.prototype._finish = function (e, t) {
                var n, a, i, r = t;
                if (e[r >> 2] |= 128 << (r % 4 << 3), 55 < r) for (p(this._state, e), r = 0; r < 16; r += 1) e[r] = 0;
                n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/),
                a = parseInt(n[2], 16),
                i = parseInt(n[1], 16) || 0,
                e[14] = a,
                e[15] = i,
                p(this._state, e)
            },
        t.prototype.reset = function () {
                return this._buff = "",
                this._length = 0,
                this._state = [1732584193, -271733879, -1732584194, 271733878],
                this
            },
        t.prototype.destroy = function () {
                delete this._state,
                delete this._buff,
                delete this._length
            },
        t.hash = function (e, t) {
                /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e)));
                var n = a(e);
                return t ? n : m(n)
            },
        t.hashBinary = function (e, t) {
                var n = a(e);
                return t ? n : m(n)
            },
        t.ArrayBuffer = function () {
                this.reset()
            },
        t.ArrayBuffer.prototype.append = function (e) {
                var t, n = this._concatArrayBuffer(this._buff, e),
                    a = n.length;
                for (this._length += e.byteLength, t = 64; t <= a; t += 64) p(this._state, h(n.subarray(t - 64, t)));
                return this._buff = t - 64 < a ? n.subarray(t - 64) : new Uint8Array(0),
                this
            },
        t.ArrayBuffer.prototype.end = function (e) {
                var t, n, a = this._buff,
                    i = a.length,
                    r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < i; t += 1) r[t >> 2] |= a[t] << (t % 4 << 3);
                return this._finish(r, i),
                n = e ? this._state : m(this._state),
                this.reset(),
                n
            },
        t.ArrayBuffer.prototype._finish = t.prototype._finish,
        t.ArrayBuffer.prototype.reset = function () {
                return this._buff = new Uint8Array(0),
                this._length = 0,
                this._state = [1732584193, -271733879, -1732584194, 271733878],
                this
            },
        t.ArrayBuffer.prototype.destroy = t.prototype.destroy,
        t.ArrayBuffer.prototype._concatArrayBuffer = function (e, t) {
                var n = e.length,
                    a = new Uint8Array(n + t.byteLength);
                return a.set(e),
                a.set(new Uint8Array(t), n),
                a
            },
        t.ArrayBuffer.hash = function (e, t) {
                var n = i(new Uint8Array(e));
                return t ? n : m(n)
            },
        e.register("Md5", {
                init: function () {},
                loadFromBlob: function (n) {
                    var a, i, r = n.getSource(),
                        o = 2097152,
                        s = Math.ceil(r.size / o),
                        c = 0,
                        l = this.owner,
                        u = new t.ArrayBuffer,
                        d = this,
                        p = r.mozSlice || r.webkitSlice || r.slice;
                    i = new FileReader,
                    (a = function () {
                            var e, t;
                            e = c * o,
                            t = Math.min(e + o, r.size),
                            i.onload = function (e) {
                                u.append(e.target.result),
                                l.trigger("progress", {
                                    total: n.size,
                                    loaded: t
                                })
                            },
                            i.onloadend = function () {
                                i.onloadend = i.onload = null,
                                ++c < s ? setTimeout(a, 1) : setTimeout(function () {
                                    l.trigger("load"),
                                    d.result = u.end(),
                                    a = n = r = u = null,
                                    l.trigger("complete")
                                }, 50)
                            },
                            i.readAsArrayBuffer(p.call(r, e, t))
                        })()
                },
                getResult: function () {
                    return this.result
                }
            })
    }),
    e("runtime/flash/runtime", ["base", "runtime/runtime", "runtime/compbase"], function (l, a, n) {
        function e() {
            var e;
            try {
                e = (e = navigator.plugins["Shockwave Flash"]).description
            } catch (l) {
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                } catch (a) {
                    e = "0.0"
                }
            }
            return e = e.match(/\d+/g),
            parseFloat(e[0] + "." + e[1], 10)
        }
        function t() {
            function t(e, t) {
                var n, a, i = e.type || e;
                a = (n = i.split("::"))[0],
                "Ready" === (i = n[1]) && a === c.uid ? c.trigger("ready") : s[a] && s[a].trigger(i.toLowerCase(), e, t)
            }
            var o = {},
                s = {},
                e = this.destroy,
                c = this,
                n = l.guid("webuploader_");
            a.apply(c, arguments),
            c.type = r,
            c.exec = function (e, t) {
                    var n, a = this,
                        i = a.uid,
                        r = l.slice(arguments, 2);
                    return s[i] = a,
                    u[e] && (o[i] || (o[i] = new u[e](a, c)), (n = o[i])[t]) ? n[t].apply(n, r) : c.flashExec.apply(a, arguments)
                },
            y[n] = function () {
                    var e = arguments;
                    setTimeout(function () {
                        t.apply(null, e)
                    }, 1)
                },
            this.jsreciver = n,
            this.destroy = function () {
                    return e && e.apply(this, arguments)
                },
            this.flashExec = function (e, t) {
                    var n = c.getFlash(),
                        a = l.slice(arguments, 2);
                    return n.exec(this.uid, e, t, a)
                }
        }
        var i = l.$,
            r = "flash",
            u = {};
        return l.inherits(a, {
                constructor: t,
                init: function () {
                    var e, t = this.getContainer(),
                        n = this.options;
                    t.css({
                            position: "absolute",
                            top: "-8px",
                            left: "-8px",
                            width: "9px",
                            height: "9px",
                            overflow: "hidden"
                        }),
                    e = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + n.swf + '" ',
                    l.browser.ie && (e += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),
                    e += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + n.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',
                    t.html(e)
                },
                getFlash: function () {
                    return this._flash || (this._flash = i("#" + this.uid).get(0)),
                    this._flash
                }
            }),
        t.register = function (e, t) {
                return u[e] = l.inherits(n, i.extend({
                    flashExec: function () {
                        var e = this.owner;
                        return this.getRuntime().flashExec.apply(e, arguments)
                    }
                }, t))
            },
        11.4 <= e() && a.addRuntime(r, t),
        t
    }),
    e("runtime/flash/filepicker", ["base", "runtime/flash/runtime"], function (e, t) {
        var i = e.$;
        return t.register("FilePicker", {
            init: function (e) {
                var t, n, a = i.extend({}, e);
                for (t = a.accept && a.accept.length, n = 0; n < t; n++) a.accept[n].title || (a.accept[n].title = "Files");
                delete a.button,
                delete a.id,
                delete a.container,
                this.flashExec("FilePicker", "init", a)
            },
            destroy: function () {
                this.flashExec("FilePicker", "destroy")
            }
        })
    }),
    e("runtime/flash/image", ["runtime/flash/runtime"], function (e) {
        return e.register("Image", {
            loadFromBlob: function (e) {
                var t = this.owner;
                t.info() && this.flashExec("Image", "info", t.info()),
                t.meta() && this.flashExec("Image", "meta", t.meta()),
                this.flashExec("Image", "loadFromBlob", e.uid)
            }
        })
    }),
    e("runtime/flash/transport", ["base", "runtime/flash/runtime", "runtime/client"], function (e, t, n) {
        var o = e.$;
        return t.register("Transport", {
            init: function () {
                this._status = 0,
                this._response = null,
                this._responseJson = null
            },
            send: function () {
                var e, t = this.owner,
                    n = this.options,
                    a = this._initAjax(),
                    i = t._blob,
                    r = n.server;
                a.connectRuntime(i.ruid),
                n.sendAsBinary ? (r += (/\?/.test(r) ? "&" : "?") + o.param(t._formData), e = i.uid) : (o.each(t._formData, function (e, t) {
                        a.exec("append", e, t)
                    }), a.exec("appendBlob", n.fileVal, i.uid, n.filename || t._formData.name || "")),
                this._setRequestHeader(a, n.headers),
                a.exec("send", {
                        method: n.method,
                        url: r,
                        forceURLStream: n.forceURLStream,
                        mimeType: "application/octet-stream"
                    }, e)
            },
            getStatus: function () {
                return this._status
            },
            getResponse: function () {
                return this._response || ""
            },
            getResponseAsJson: function () {
                return this._responseJson
            },
            abort: function () {
                var e = this._xhr;
                e && (
                e.exec("abort"), e.destroy(), this._xhr = e = null)
            },
            destroy: function () {
                this.abort()
            },
            _initAjax: function () {
                var i = this,
                    r = new n("XMLHttpRequest");
                return r.on("uploadprogress progress", function (e) {
                        var t = e.loaded / e.total;
                        return t = Math.min(1, Math.max(0, t)),
                        i.trigger("progress", t)
                    }),
                r.on("load", function () {
                        var e, t = r.exec("getStatus"),
                            n = !1,
                            a = "";
                        return r.off(),
                        i._xhr = null,
                        200 <= t && t < 300 ? n = !0 : 500 <= t && t < 600 ? (n = !0, a = "server") : a = "http",
                        n && (i._response = r.exec("getResponse"), i._response = decodeURIComponent(i._response), e = y.JSON && y.JSON.parse ||
                            function (e) {
                                try {
                                    return new Function("return " + e).call()
                                } catch (i) {
                                    return {}
                                }
                            }, i._responseJson = i._response ? e(i._response) : {}),
                        r.destroy(),
                        r = null,
                        a ? i.trigger("error", a) : i.trigger("load")
                    }),
                r.on("error", function () {
                        r.off(),
                        i._xhr = null,
                        i.trigger("error", "http")
                    }),
                i._xhr = r
            },
            _setRequestHeader: function (n, e) {
                o.each(e, function (e, t) {
                    n.exec("setRequestHeader", e, t)
                })
            }
        })
    }),
    e("runtime/flash/blob", ["runtime/flash/runtime", "lib/blob"], function (e, a) {
        return e.register("Blob", {
            slice: function (e, t) {
                var n = this.flashExec("Blob", "slice", e, t);
                return new a(n.uid, n)
            }
        })
    }),
    e("runtime/flash/md5", ["runtime/flash/runtime"], function (e) {
        return e.register("Md5", {
            init: function () {},
            loadFromBlob: function (e) {
                return this.flashExec("Md5", "loadFromBlob", e.uid)
            }
        })
    }),
    e("preset/all", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "widgets/md5", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/androidpatch", "runtime/html5/image", "runtime/html5/transport", "runtime/html5/md5", "runtime/flash/filepicker", "runtime/flash/image", "runtime/flash/transport", "runtime/flash/blob", "runtime/flash/md5"], function (e) {
        return e
    }),
    e("widgets/log", ["base", "uploader", "widgets/widget"], function (e, t) {
        function a(e) {
            var t = r.extend({}, i, e),
                n = o.replace(/^(.*)\?/, "$1" + r.param(t));
                (new Image).src = n
        }
        var i, r = e.$,
            o = " http://static.tieba.baidu.com/tb/pms/img/st.gif??",
            n = (location.hostname || location.host || "protected").toLowerCase();
        if (n && /baidu/i.exec(n)) return i = {
                dv: 3,
                master: "webuploader",
                online: /test/.exec(n) ? 0 : 1,
                module: "",
                product: n,
                type: 0
            },
        t.register({
                name: "log",
                init: function () {
                    var e = this.owner,
                        t = 0,
                        n = 0;
                    e.on("error", function (e) {
                            a({
                                type: 2,
                                c_error_code: e
                            })
                        }).on("uploadError", function (e, t) {
                            a({
                                type: 2,
                                c_error_code: "UPLOAD_ERROR",
                                c_reason: "" + t
                            })
                        }).on("uploadComplete", function (e) {
                            t++,
                            n += e.size
                        }).on("uploadFinished", function () {
                            a({
                                c_count: t,
                                c_size: n
                            }),
                            t = n = 0
                        }),
                    a({
                            c_usage: 1
                        })
                }
            })
    }),
    e("webuploader", ["preset/all", "widgets/log"], function (e) {
        return e
    }),
    t("webuploader")
}),


function (le) {
    le.fn.slide = function (ce) {
        return le.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        },
        this.each(function () {
            var i, t = le.extend({}, le.fn.slide.defaults, ce),
                e = le(this),
                o = t.effect,
                r = le(t.prevCell, e),
                s = le(t.nextCell, e),
                c = le(t.pageStateCell, e),
                n = le(t.playStateCell, e),
                l = (H = le(t.titCell, e)).length,
                u = le(t.mainCell, e),
                d = u.children().length,
                p = t.switchLoad,
                f = le(t.targetCell, e),
                h = parseInt(t.defaultIndex),
                m = parseInt(t.delayTime),
                a = parseInt(t.interTime),
                g = (parseInt(t.triggerTime), parseInt(t.scroll)),
                v = parseInt(t.vis),
                w = "false" != t.autoPlay && 0 != t.autoPlay,
                $ = "false" != t.opp && 0 != t.opp,
                y = "false" != t.autoPage && 0 != t.autoPage,
                b = "false" != t.pnLoop && 0 != t.pnLoop,
                k = "false" != t.mouseOverStop && 0 != t.mouseOverStop,
                x = "false" != t.defaultPlay && 0 != t.defaultPlay,
                _ = "false" != t.returnDefault && 0 != t.returnDefault,
                q = 0,
                T = 0,
                C = 0,
                I = 0,
                S = t.easing,
                E = null,
                R = null,
                O = null,
                j = t.titOnClassName,
                F = H.index(e.find("." + j)),
                U = h = -1 == F ? h : F,
                D = h,
                M = h,
                L = v <= d ? d % g != 0 ? d % g : g : 0,
                P = "leftMarquee" == o || "topMarquee" == o,
                z = function () {
                    le.isFunction(t.startFun) && t.startFun(h, l, e, le(t.titCell, e), u, f, r, s)
                },
                A = function () {
                    le.isFunction(t.endFun) && t.endFun(h, l, e, le(t.titCell, e), u, f, r, s)
                },
                N = function () {
                    H.removeClass(j),
                    x && H.eq(D).addClass(j)
                };
            if ("menu" == t.type) return x && H.removeClass(j).eq(h).addClass(j),
            H.hover(function () {
                    i = le(this).find(t.targetCell);
                    var e = H.index(le(this));
                    R = setTimeout(function () {
                        switch (h = e, H.removeClass(j).eq(h).addClass(j), z(), o) {
                        case "fade":
                            i.stop(!0, !0).animate({
                                opacity: "show"
                            }, m, S, A);
                            break;
                        case "slideDown":
                            i.stop(!0, !0).animate({
                                height: "show"
                            }, m, S, A)
                        }
                    }, t.triggerTime)
                }, function () {
                    switch (clearTimeout(R), o) {
                    case "fade":
                        i.animate({
                            opacity: "hide"
                        }, m, S);
                        break;
                    case "slideDown":
                        i.animate({
                            height: "hide"
                        }, m, S)
                    }
                }),
            void(_ && e.hover(function () {
                    clearTimeout(O)
                }, function () {
                    O = setTimeout(N, m)
                }));
            if (0 == l && (l = d), P && (l = 2), y) {
                    if (v <= d) if ("leftLoop" == o || "topLoop" == o) l = d % g != 0 ? 1 + (d / g ^ 0) : d / g;
                    else {
                        var B = d - v;
                        (l = 1 + parseInt(B % g != 0 ? B / g + 1 : B / g)) <= 0 && (l = 1)
                    } else l = 1;
                    H.html("");
                    var Q = "";
                    if (1 == t.autoPage || "true" == t.autoPage) for (var J = 0; J < l; J++) Q += "<li>" + (J + 1) + "</li>";
                    else for (J = 0; J < l; J++) Q += t.autoPage.replace("$", J + 1);
                    H.html(Q);
                    var H = H.children()
                }
            if (v <= d) {
                    u.children().each(function () {
                        le(this).width() > C && (C = le(this).width(), T = le(this).outerWidth(!0)),
                        le(this).height() > I && (I = le(this).height(), q = le(this).outerHeight(!0))
                    });
                    var G = u.children(),
                        V = function () {
                            for (var e = 0; e < v; e++) G.eq(e).clone().addClass("clone").appendTo(u);
                            for (e = 0; e < L; e++) G.eq(d - e - 1).clone().addClass("clone").prependTo(u)
                        };
                    switch (o) {
                        case "fold":
                            u.css({
                                position: "relative",
                                width: T,
                                height: q
                            }).children().css({
                                position: "absolute",
                                width: C,
                                left: 0,
                                top: 0,
                                display: "none"
                            });
                            break;
                        case "top":
                            u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + v * q + 'px"></div>').css({
                                top: -h * g * q,
                                position: "relative",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                height: I
                            });
                            break;
                        case "left":
                            u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + v * T + 'px"></div>').css({
                                width: d * T,
                                left: -h * g * T,
                                position: "relative",
                                overflow: "hidden",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                "float": "left",
                                width: C
                            });
                            break;
                        case "leftLoop":
                        case "leftMarquee":
                            V(),
                            u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + v * T + 'px"></div>').css({
                                width: (d + v + L) * T,
                                position: "relative",
                                overflow: "hidden",
                                padding: "0",
                                margin: "0",
                                left: -(L + h * g) * T
                            }).children().css({
                                "float": "left",
                                width: C
                            });
                            break;
                        case "topLoop":
                        case "topMarquee":
                            V(),
                            u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + v * q + 'px"></div>').css({
                                height: (d + v + L) * q,
                                position: "relative",
                                padding: "0",
                                margin: "0",
                                top: -(L + h * g) * q
                            }).children().css({
                                height: I
                            })
                        }
                }
            var W = function (e) {
                    var t = e * g;
                    return e == l ? t = d : -1 == e && d % g != 0 && (t = -d % g),
                    t
                },
                X = function (n) {
                    var e = function (e) {
                        for (var t = e; t < v + e; t++) n.eq(t).find("img[" + p + "]").each(function () {
                            var e = le(this);
                            if (e.attr("src", e.attr(p)).removeAttr(p), u.find(".clone")[0]) for (var t = u.children(), n = 0; n < t.length; n++) t.eq(n).find("img[" + p + "]").each(function () {
                                le(this).attr(p) == e.attr("src") && le(this).attr("src", le(this).attr(p)).removeAttr(p)
                            })
                        })
                    };
                    switch (o) {
                    case "fade":
                    case "fold":
                    case "top":
                    case "left":
                    case "slideDown":
                        e(h * g);
                        break;
                    case "leftLoop":
                    case "topLoop":
                        e(L + W(M));
                        break;
                    case "leftMarquee":
                    case "topMarquee":
                        var t = "leftMarquee" == o ? u.css("left").replace("px", "") : u.css("top").replace("px", ""),
                            a = "leftMarquee" == o ? T : q,
                            i = L;
                        if (t % a != 0) {
                                var r = Math.abs(t / a ^ 0);
                                i = 1 == h ? L + r : L + r - 1
                            }
                        e(i)
                    }
                },
                K = function (e) {
                    if (!x || U != h || e || P) {
                        if (P ? 1 <= h ? h = 1 : h <= 0 && (h = 0) : l <= (M = h) ? h = 0 : h < 0 && (h = l - 1), z(), null != p && X(u.children()), f[0] && (i = f.eq(h), null != p && X(f), "slideDown" == o ? (f.not(i).stop(!0, !0).slideUp(m), i.slideDown(m, S, function () {
                            u[0] || A()
                        })) : (f.not(i).stop(!0, !0).hide(), i.animate({
                            opacity: "show"
                        }, m, function () {
                            u[0] || A()
                        }))), v <= d) switch (o) {
                        case "fade":
                            u.children().stop(!0, !0).eq(h).animate({
                                opacity: "show"
                            }, m, S, function () {
                                A()
                            }).siblings().hide();
                            break;
                        case "fold":
                            u.children().stop(!0, !0).eq(h).animate({
                                opacity: "show"
                            }, m, S, function () {
                                A()
                            }).siblings().animate({
                                opacity: "hide"
                            }, m, S);
                            break;
                        case "top":
                            u.stop(!0, !1).animate({
                                top: -h * g * q
                            }, m, S, function () {
                                A()
                            });
                            break;
                        case "left":
                            u.stop(!0, !1).animate({
                                left: -h * g * T
                            }, m, S, function () {
                                A()
                            });
                            break;
                        case "leftLoop":
                            var t = M;
                            u.stop(!0, !0).animate({
                                left: -(W(M) + L) * T
                            }, m, S, function () {
                                t <= -1 ? u.css("left", -(L + (l - 1) * g) * T) : l <= t && u.css("left", -L * T),
                                A()
                            });
                            break;
                        case "topLoop":
                            t = M;
                            u.stop(!0, !0).animate({
                                top: -(W(M) + L) * q
                            }, m, S, function () {
                                t <= -1 ? u.css("top", -(L + (l - 1) * g) * q) : l <= t && u.css("top", -L * q),
                                A()
                            });
                            break;
                        case "leftMarquee":
                            var n = u.css("left").replace("px", "");
                            0 == h ? u.animate({
                                left: ++n
                            }, 0, function () {
                                0 <= u.css("left").replace("px", "") && u.css("left", -d * T)
                            }) : u.animate({
                                left: --n
                            }, 0, function () {
                                u.css("left").replace("px", "") <= -(d + L) * T && u.css("left", -L * T)
                            });
                            break;
                        case "topMarquee":
                            var a = u.css("top").replace("px", "");
                            0 == h ? u.animate({
                                top: ++a
                            }, 0, function () {
                                0 <= u.css("top").replace("px", "") && u.css("top", -d * q)
                            }) : u.animate({
                                top: --a
                            }, 0, function () {
                                u.css("top").replace("px", "") <= -(d + L) * q && u.css("top", -L * q)
                            })
                        }
                        H.removeClass(j).eq(h).addClass(j),
                        U = h,
                        b || (s.removeClass("nextStop"), r.removeClass("prevStop"), 0 == h && r.addClass("prevStop"), h == l - 1 && s.addClass("nextStop")),
                        c.html("<span>" + (h + 1) + "</span>/" + l)
                    }
                };
            x && K(!0),
            _ && e.hover(function () {
                    clearTimeout(O)
                }, function () {
                    O = setTimeout(function () {
                        h = D,
                        x ? K() : "slideDown" == o ? i.slideUp(m, N) : i.animate({
                            opacity: "hide"
                        }, m, N),
                        U = h
                    }, 300)
                });
            var Y = function (e) {
                    E = setInterval(function () {
                        $ ? h-- : h++,
                        K()
                    }, e || a)
                },
                Z = function (e) {
                    E = setInterval(K, e || a)
                },
                ee = function () {
                    k || (clearInterval(E), Y())
                },
                te = function () {
                    (b || h != l - 1) && (h++, K(), P || ee())
                },
                ne = function () {
                    (b || 0 != h) && (h--, K(), P || ee())
                },
                ae = function () {
                    clearInterval(E),
                    P ? Z() : Y(),
                    n.removeClass("pauseState")
                },
                ie = function () {
                    clearInterval(E),
                    n.addClass("pauseState")
                };
            if (w ? P ? ($ ? h-- : h++, Z(), k && u.hover(ie, ae)) : (Y(), k && e.hover(ie, ae)) : (P && ($ ? h-- : h++), n.addClass("pauseState")), n.click(function () {
                    n.hasClass("pauseState") ? ae() : ie()
                }), "mouseover" == t.trigger ? H.hover(function () {
                    var e = H.index(this);
                    R = setTimeout(function () {
                        h = e,
                        K(),
                        ee()
                    }, t.triggerTime)
                }, function () {
                    clearTimeout(R)
                }) : H.click(function () {
                    h = H.index(this),
                    K(),
                    ee()
                }), P) {
                    if (s.mousedown(te), r.mousedown(ne), b) {
                        var re, oe = function () {
                            re = setTimeout(function () {
                                clearInterval(E),
                                Z(a / 10 ^ 0)
                            }, 150)
                        },
                            se = function () {
                                clearTimeout(re),
                                clearInterval(E),
                                Z()
                            };
                        s.mousedown(oe),
                        s.mouseup(se),
                        r.mousedown(oe),
                        r.mouseup(se)
                    }
                    "mouseover" == t.trigger && (s.hover(te, function () {}), r.hover(ne, function () {}))
                } else s.click(te),
            r.click(ne)
        })
    }
}(jQuery),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, a, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, a, i)
    },
    easeInQuad: function (e, t, n, a, i) {
        return a * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, a, i) {
        return -a * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, a, i) {
        return a * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, a, i) {
        return a * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, a, i) {
        return a * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, a, i) {
        return -a * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, a, i) {
        return a * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, a, i) {
        return a * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, a, i) {
        return -a * Math.cos(t / i * (Math.PI / 2)) + a + n
    },
    easeOutSine: function (e, t, n, a, i) {
        return a * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, a, i) {
        return -a / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, a, i) {
        return 0 == t ? n : a * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, a, i) {
        return t == i ? n + a : a * (1 - Math.pow(2, -10 * t / i)) + n
    },
    easeInOutExpo: function (e, t, n, a, i) {
        return 0 == t ? n : t == i ? n + a : (t /= i / 2) < 1 ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function (e, t, n, a, i) {
        return -a * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, a, i) {
        return a * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
                s = a;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o) + n
    },
    easeOutElastic: function (e, t, n, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
                s = a;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * i - r) * (2 * Math.PI) / o) + a + n
    },
    easeInOutElastic: function (e, t, n, a, i) {
        var r = 1.70158,
            o = 0,
            s = a;
        if (0 == t) return n;
        if (2 == (t /= i / 2)) return n + a;
        if (o || (o = i * (.3 * 1.5)), s < Math.abs(a)) {
                s = a;
                r = o / 4
            } else r = o / (2 * Math.PI) * Math.asin(a / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o) * .5 + a + n
    },
    easeInBack: function (e, t, n, a, i, r) {
        return r == undefined && (r = 1.70158),
        a * (t /= i) * t * ((r + 1) * t - r) + n
    },
    easeOutBack: function (e, t, n, a, i, r) {
        return r == undefined && (r = 1.70158),
        a * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + n
    },
    easeInOutBack: function (e, t, n, a, i, r) {
        return r == undefined && (r = 1.70158),
        (t /= i / 2) < 1 ? a / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : a / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
    },
    easeInBounce: function (e, t, n, a, i) {
        return a - jQuery.easing.easeOutBounce(e, i - t, 0, a, i) + n
    },
    easeOutBounce: function (e, t, n, a, i) {
        return (t /= i) < 1 / 2.75 ? a * (7.5625 * t * t) + n : t < 2 / 2.75 ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, a, i) {
        return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, a, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, a, i) + .5 * a + n
    }
});