function NextP(){
    window.location="game_page.html";
    player_1=document.getElementById("Player_1_username").value;
    player_2=document.getElementById("Player_2_username").value;
    localStorage.setItem("player_1" , player_1);
    localStorage.setItem("player_2" , player_2);
    console.log("Conformed ready and done")
    }
    