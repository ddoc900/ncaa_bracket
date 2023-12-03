

const createChamp = () => {

    teamsToPlay = [];
    round5Winner = [];
    round6Winner = [];

    let champDiv = document.createElement('div');
    champDiv.classList.add('division');
    bracketContainer.appendChild(champDiv);

    for(let i = 0; i < 3; i++){
        let round = document.createElement('div');
        round.classList.add('round');
        champDiv.appendChild(round);
    }
    
    for(let i = 0; i < 2; i++){
        let game = document.createElement('div');
        game.classList.add('game');
        round[16].appendChild(game);
    }

  
    
        let game = document.createElement('div');
        game.classList.add('game');
        round[17].appendChild(game);

        let champion = document.createElement('div');
        champion.classList.add('game');
        round[18].appendChild(champion);

    



    for(let i = 60; i < 64; i++){
        let team1 = document.createElement('p');
        team1.classList.add('team');  
        team2 = document.createElement('p');
        team2.classList.add('team');
        games[i].appendChild(team1);
        games[i].appendChild(team2);
    
    }


    // simulate game //

    const simulateRound5 = (team1, team2) => {
        
      
    
        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
      
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                round5Winner.push(team2);
                return team2.team;
            } else {
                round5Winner.push(team1);
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                round5Winner.push(team1);
                return team1.team;
            } else {
                round5Winner.push(team2);
                return team2.team;
            }
    }
    }

    const simulateRound6 = (team1, team2) => {
        
      
    
        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
      
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                round6Winner.push(team2);
                return team2.team;
            } else {
                round6Winner.push(team1);
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                round6Winner.push(team1);
                return team1.team;
            } else {
                round6Winner.push(team2);
                return team2.team;
            }
    }
    }


    const simulateRound7 = (team1, team2) => {
        
      
    
        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
      
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                
                return team2.team;
            } else {
                
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                
                return team1.team;
            } else {
               
                return team2.team;
            }
    }
    }



     let t = 120;
        for(let i = 0; i < 8; i++){
            
            teamsToPlay.push(round4Winner[i]);
            if(teamsToPlay.length === 2){
                let winner = simulateRound5(teamsToPlay[0], teamsToPlay[1]);
                teams[t].innerHTML = winner;
                t++;
                teamsToPlay = [];
            }
            
        }

        let g = 124;
        for(let i = 0; i < 4; i++){
            
            teamsToPlay.push(round5Winner[i]);
            if(teamsToPlay.length === 2){
                let winner = simulateRound6(teamsToPlay[0], teamsToPlay[1]);
                teams[g].innerHTML = winner;
                g++;
                teamsToPlay = [];
            }
            
        }

        let y = 126;
        for(let i = 0; i < 2; i++){
            
            teamsToPlay.push(round6Winner[i]);
            if(teamsToPlay.length === 2){
                let winner = simulateRound7(teamsToPlay[0], teamsToPlay[1]);
                teams[y].innerHTML = winner;
                y++;
                teamsToPlay = [];
            }
            
        }
        console.log(round5Winner);
}




generate.addEventListener('click', createChamp);
