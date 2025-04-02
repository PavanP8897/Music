       var buttons = document.querySelectorAll(".drum").length;

       for(let i=0;i<buttons;i++){

        document.querySelectorAll(".drum")[i].addEventListener("click",function(){


            var buttonInnerHtml = this.getAttribute("data-key");

            let soundFile;
            switch (buttonInnerHtml) {
                case "piano":
                    soundFile = "../public/sounds/soft-piano-100-bpm-121529.mp3";
                    break;
                case "violin":
                    soundFile = "../public/sounds/ethnic-violin-64897.mp3";
                    break;
                case "drums":
                    soundFile = "../public/sounds/beat-boom-bap-style-drum-break-03-125bpm-321067.mp3";
                    break;
                case "keyboard":
                    soundFile = "../public/sounds/dark-engine-logo-141942.mp3";
                    break;
                case "all":
                    soundFile = "../public/sounds/noise-drum-loop-134bpm-245852.mp3";
                    break;
                case "flute":
                    soundFile = "../public/sounds/dizi-flute-02-72563.mp3";
                    break;
                default:
                    console.log("No sound assigned for: " + buttonKey);
                    return; // Exit if no match
            }
            let audio = new Audio(soundFile);
            audio.play();
    

        });

       }
       
       
       
      
        
