gsap.registerPlugin(ScrollTrigger);

function setScrollText(){

  gsap.to('#heading1', {
    scrollTrigger: {
      trigger: '#img1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading2', {
    scrollTrigger: {
      trigger: '#img2',
      toggleActions: 'play reverse play reverse',
      start: '+=500s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading3', {
    scrollTrigger: {
      trigger: '#img3',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=500s',
    },
    opacity: 1,
  });

  // gsap.to('#heading4', {
  //   scrollTrigger: {
  //     trigger: '#heading4',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=900s',
  //     end: '+=300s',
  //   },
  //   opacity: 1,
  // });


  // gsap.to('#heading5', {
  //   scrollTrigger: {
  //     trigger: '#heading5',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=1200s',
  //     end: '+=300s',
  //   },
  //   opacity: 1,
  // });

}

function setScrollImages() {

  gsap.to('#img1', {
    scrollTrigger: {
      trigger: '#img1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#img2', {
    scrollTrigger: {
      trigger: '#img2',
      toggleActions: 'play reverse play reverse',
      start: '+=500s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#img3', {
    scrollTrigger: {
      trigger: '#img3',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=500s',
    },
    opacity: 1,
  });

  // gsap.to('#img4', {
  //   scrollTrigger: {
  //     trigger: '#img4',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=900s',
  //     end: '+=300s',
  //   },
  //   opacity: 1,
  // });


  // gsap.to('#img5', {
  //   scrollTrigger: {
  //     trigger: '#img5',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=1200s',
  //     end: '+=300s',
  //   },
  //   opacity: 1,
  // });

}

gsap.to('.head', {
  scrollTrigger: {
    pin: '.head',
    end: '+=1500s',
    pinSpacing: true,
  },
});


setScrollText();
setScrollImages();