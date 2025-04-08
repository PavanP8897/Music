       var buttons = document.querySelectorAll(".drum").length;

       for(let i=0;i<buttons;i++){

        document.querySelectorAll(".drum")[i].addEventListener("click",function(){


            var buttonInnerHtml = this.getAttribute("data-key");

            let soundFile;
            let gif;
            let existingGif;
            switch (buttonInnerHtml) {
                case "piano":
                    soundFile = "../public/sounds/soft-piano-100-bpm-121529.mp3";
                     gif = document.createElement("img");
                    gif.src = "https://media.giphy.com/media/11J027GnyjrcJi/giphy.gif?cid=ecf05e478iuu9fv3j5qyx4lfznve78n4rx237w0y2csc729i&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);

                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();
        }
        gif.id = "music-gif";
                    break;

                case "violin":
                    soundFile = "../public/sounds/ethnic-violin-64897.mp3";
                    
                     gif = document.createElement("img");
                    gif.src = "../public/images/tenor.gif"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);
                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();
        }
        gif.id = "music-gif";
                   
                    break;
                case "drums":
                    soundFile = "../public/sounds/beat-boom-bap-style-drum-break-03-125bpm-321067.mp3";

                    gif = document.createElement("img");
                    gif.src = "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=790b76111qmcvpmiakgy0r74zk43e6xtgavrc4v44vyz5hw8&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);
                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();
          
        }
        gif.id = "music-gif";
                   

                    break;
                case "keyboard":
                    soundFile = "../public/sounds/dark-engine-logo-141942.mp3";

                    gif = document.createElement("img");
                    gif.src = "../public/images/tom-and-jerry-tom-the-cat.gif"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);
                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();

        }
        gif.id = "music-gif";
                   

                    break;
                case "all":
                    soundFile = "../public/sounds/noise-drum-loop-134bpm-245852.mp3";

                    gif = document.createElement("img");
                    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjhkOG5uNG9xZ3lhZXVvcTVxM2h0ZjJtb21neWU2aHQ2azd3cjd2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wUMyW0P54loc/giphy.gif"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);
                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();
          
        }
        gif.id = "music-gif";
                   

                    break;
                case "flute":
                    soundFile = "../public/sounds/dizi-flute-02-72563.mp3";

                    gif = document.createElement("img");
                    gif.src = "../public/images/tom-multitasking-solo-concert-t4f1vhuj6gu57yw4.gif"; // Change this to your GIF path or URL
                    gif.alt = "Draw Animation";
                    gif.style.width = "200px"; // Adjust size
                    gif.style.display = "block";
                    gif.style.margin = "20px auto"; // Center the GIF
                    document.body.appendChild(gif);
                     existingGif = document.getElementById("music-gif");
        if (existingGif) {
          existingGif.remove();
          
        }
        gif.id = "music-gif";
                   

                    break;
                default:
                    console.log("No sound assigned for: " + buttonKey);
                    return; // Exit if no match
            }
            let audio = new Audio(soundFile);
            audio.play();
    

        });

       }
       
       
       
      
        
