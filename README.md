# radvent
an Advent calendar / Christmas mixtape combo app

Every December since 2007, I've made a mix CD of weird and wonderful
Holiday songs that I distribute to my brothers and select friends. I
have a lot of fun finding the songs and putting together a crazy cover
illustration.

But in the last few years, this has become impractical. I mean, who
even has a CD player anymore? So this year I finally decided to get
rid of the physical artifact and go all-digital. But where's the fun
in just getting a ZIP file?

So this year I've decided to introduce the 2019 RADVENT!
calendar. Twenty five days, twenty five songs. With an HTML5 site and
some vanilla JavaScript to pull it all together.

Happy Holidays!

DEVELOPMENT NOTES

This is obviously not the final product, if the jokey placeholders
aren't a dead giveaway. The real thing is hidden behind a password
challenge and no I'm not telling you where it is or what the
password is. Sorry.

I'm deliberately making use of the way Chrome (and Safari and Opera)
handles fixed-position backgrounds on transformed elements to create
the illusion of continuity between the background and the doors. It
should be noted Firefox and Edge behave differently (i.e,
correctly). If you care about everything looking good in those
browsers you'll have to take a different approach to the background.

Obviously this is not all that accessible. You *can* use it with the
keyboard, but there are no ARIA states, the focus outlines appear
behind the absolutely positioned door elements, etc. etc. I could
probably work on that, and I might, if I have time.

You'll notice this checks the day of the month but doesn't actually
check to see what month it is. I honestly don't care, but you might if
your gift recipient is a snooper.

If you have any questions or suggestions please feel free to shoot me
a line at knave@7415comics.com.
