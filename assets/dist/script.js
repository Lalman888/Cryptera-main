gsap.registerPlugin(ScrollTrigger);

function setScrollText(){

  gsap.to('#heading1', {
    scrollTrigger: {
      trigger: '#heading1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#heading2', {
    scrollTrigger: {
      trigger: '#heading2',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#heading3', {
    scrollTrigger: {
      trigger: '#heading3',
      toggleActions: 'play reverse play reverse',
      start: '+=2000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#heading4', {
    scrollTrigger: {
      trigger: '#heading4',
      toggleActions: 'play reverse play reverse',
      start: '+=3000s',
      end: '+=1000s',
    },
    opacity: 1,
  });


  gsap.to('#heading5', {
    scrollTrigger: {
      trigger: '#heading5',
      toggleActions: 'play reverse play reverse',
      start: '+=4000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

}

function setScrollImages() {

  gsap.to('#img1', {
    scrollTrigger: {
      trigger: '#img1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#img2', {
    scrollTrigger: {
      trigger: '#img2',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#img3', {
    scrollTrigger: {
      trigger: '#img3',
      toggleActions: 'play reverse play reverse',
      start: '+=2000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

  gsap.to('#img4', {
    scrollTrigger: {
      trigger: '#img4',
      toggleActions: 'play reverse play reverse',
      start: '+=3000s',
      end: '+=1000s',
    },
    opacity: 1,
  });


  gsap.to('#img5', {
    scrollTrigger: {
      trigger: '#img5',
      toggleActions: 'play reverse play reverse',
      start: '+=4000s',
      end: '+=1000s',
    },
    opacity: 1,
  });

}

gsap.to('.head', {
  scrollTrigger: {
    pin: '.head',
    end: '+=5000s',
    pinSpacing: true,
  },
});


setScrollText();
setScrollImages();