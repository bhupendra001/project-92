function adduser(){

player_1_user = document.getElementById("player1_name_input").value;
player_2_user = document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name",player_1_user);
localStorage.setItem("player2_name",player_2_user);

window.location = "game_page.html";

}

