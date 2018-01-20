
var autoScroll = true;
$(document).ready(function() {

    SetAutoScrollPerfect();

    SetSocket();

});

/////////////////////////////////////////

var themeIndex = "linear-flare-custm";

function InitParams(data) {

    //console.debug(data);

    if  (data.themeIndex == themeIndex) {

        if (data.HideIcons == true) {

            getStyleRule('#div_site_img').display = 'none ';

        } else {

            getStyleRule('#div_site_img').display = '';

        }

        timeNewMessage = data.TimeNewMessages * 1000;

    }

}
var qtyMessages = 6;

var qtyAllMessages = 100;

var timeNewMessage = 10000;
/////////////////////////////////////////

function NewMessage(data) {

    var obj = JSON.parse( data );

    if (obj.clear_chat) {

        $(".user_mess[tag='" + obj.user + "']").html(obj.text);

    } else {
/////////////////////////////////////////
        $('#content').append(

            $('#message_template').tmpl(obj)

        );

        $('.mess').last()

            .delay(timeNewMessage)

            .queue(function() {

                $(this)

                    .animate({height: 'toggle',  "opacity": 0}, "slow")

                    .dequeue();

            });

        /////////////////////////////////////////
    }

    if ($('.mess').length > qtyMess) {

        $('.mess:first').detach();

    }
    UpdateScroll();

}