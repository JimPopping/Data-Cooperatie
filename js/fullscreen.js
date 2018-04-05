// create a fullscreen button and add it to the map
                                L.control.fullscreen({
                                  position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
                                  title: 'Geef de kaart fullscreen weer!', // change the title of the button, default Full Screen
                                  titleCancel: 'Exit fullscreen modus', // change the title of the button when fullscreen is on, default Exit Full Screen
                                  content: null, // change the content of the button, can be HTML, default null
                                  forceSeparateButton: false, // force seperate button to detach from zoom buttons, default false
                                  forcePseudoFullscreen: false, // force use of pseudo full screen even if full screen API is available, default false
                                  fullscreenElement: true // Dom element to render in full screen, false by default, fallback to map._container
                                }).addTo(map);

                                // events are fired when entering or exiting fullscreen.
                                map.on('enterFullscreen', function(){
                                  console.log('entered fullscreen');
                                });

                                map.on('exitFullscreen', function(){
                                  console.log('exited fullscreen');
                                });