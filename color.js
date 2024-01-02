var Body = {
    setColor: function (color) {
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        $('body').css('background-color', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i<alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

         $('a').css('color', color);
         /* $ mean all 'a' tags are controlled by jquery. */
    }
}
function nightDayHandler(self) {
    /* self is argument */
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}