let mm = gsap.matchMedia();
mm.add("(min-width:600px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      // markers:true,
    },
  });

  tl.to(
    "#fanta",
    {
      top: "121%",
      left: "3%",
    },
    "orange"
  );

  tl.to(
    "#orange-cut",
    {
      top: "160%",
      left: "23%",
    },
    "orange"
  );

  tl.to(
    "#orange",
    {
      width: "15%",
      top: "165%",
      right: "10%",
    },
    "orange"
  );

  tl.to(
    "#leaf",
    {
      top: "110%",
      left: "82%",
      rotate: "150deg",
    },
    "orange"
  );

  tl.to(
    "#leaf2",
    {
      top: "110%",
      left: "5%",
      rotate: "150deg",
    },
    "orange"
  );

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "45% 50%",
      scrub: true,
      // markers: true,
    },
  });

  tl2.from(
    "#lemon",
    {
      rotate: "-90deg",
      left: "-100%",
      top: "50%",
    },
    "sprite"
  );

  tl2.from(
    "#orange3",
    {
      rotate: "-90deg",
      right: "-100%",
      top: "50%",
    },
    "sprite"
  );
  tl2.from(
    "#orange2",
    {
      rotate: "-90deg",
      top: "50%",
    },
    "sprite"
  );

  tl2.to(
    "#fanta",
    {
      width: "35%",
      left: "33%",
      top: "220%",
    },
    "sprite"
  );
});
