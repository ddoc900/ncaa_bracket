const createSouth = () => {

    let teamsToPlay = [];
    let round2Winner = [];
    let round3Winner = [];
    
    
    
    
    
     // resets previous bracket to start fresh //
    
    
    
    
     while (bracketContainer.firstChild) {
        bracketContainer.removeChild(bracketContainer.firstChild);
        teamsToPlay = [];
        round2Winner = [];
        round3Winner = [];
        round4Winner = [];
    }
    
    
    
    // creates all elements in HTML to be populated later //
    
    
    
    let southDiv = document.createElement('div');
    southDiv.classList.add('division')
    bracketContainer.appendChild(southDiv);
    
    for(let i = 0; i < 4; i++){
        let round = document.createElement('ul');
        round.classList.add('round');
        southDiv.appendChild(round);
    }
    
    for(let i = 0; i < 8; i++){
        let game = document.createElement('li');
        game.classList.add('game');
        round[0].appendChild(game);
    }
    
    for(let i = 0; i < 4; i++){
        let game = document.createElement('li');
        game.classList.add('game');
        round[1].appendChild(game);
    }
    
    for(let i = 0; i < 2; i++){
        let game = document.createElement('li');
        game.classList.add('game');
        round[2].appendChild(game);
    }
    
    
    let game = document.createElement('li');
    game.classList.add('game');
    round[3].appendChild(game);
    
      
    
    
    for(let i = 0; i < 15; i++){
        let team1 = document.createElement('p');
        team1.classList.add('team','team-top');
        team2 = document.createElement('p');
        team2.classList.add('team','team-bottom');
        games[i].appendChild(team1);
        let teamSpacer=document.createElement('li')
        teamSpacer.classList.add('team-spacer')
        games[i].appendChild(teamSpacer)
        games[i].appendChild(team2);
        let gameSpacer =document.createElement('li')
        gameSpacer.classList.add('game-spacer')
        games[i].appendChild(gameSpacer)
        console.log(games)
    
    }
    
    
    
    // functions called to decied winner //
    
    
    
        const simulateRound2 = (team1, team2) => {
        
    
            let randomNum = Math.floor(Math.random() * 100);
            let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
        
            if(team1.seed < team2.seed){
                if(randomNum <= oddsOfLoosing){
                    round2Winner.push(team2);
                    return team2.team;
                } else {
                    round2Winner.push(team1);
                    return team1.team;
                }
            } else {
                oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
        
                if(randomNum <= oddsOfLoosing){
                    round2Winner.push(team1);
                    return team1.team;
                } else {
                    round2Winner.push(team2);
                    return team2.team;
                }
        }
        }
        
        
        const simulateRound3 = (team1, team2) => {
            
            let randomNum = Math.floor(Math.random() * 100);
            let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
        
            if(team1.seed < team2.seed){
                if(randomNum <= oddsOfLoosing){
                    round3Winner.push(team2);
                    return team2.team;
                } else {
                    round3Winner.push(team1);
                    return team1.team;
                }
            } else {
                oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
        
                if(randomNum <= oddsOfLoosing){
                    round3Winner.push(team1);
                    return team1.team;
                } else {
                    round3Winner.push(team2);
                    return team2.team;
                }
        }
        }
        
        const simulateRound4 = (team1, team2) => {
            
          
        
            let randomNum = Math.floor(Math.random() * 100);
            let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
        
          
            if(team1.seed < team2.seed){
                if(randomNum <= oddsOfLoosing){
                    round4Winner.push(team2);
                    return team2.team;
                } else {
                    round4Winner.push(team1);
                    return team1.team;
                }
            } else {
                oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
        
                if(randomNum <= oddsOfLoosing){
                    round4Winner.push(team1);
                    return team1.team;
                } else {
                    round4Winner.push(team2);
                    return team2.team;
                }
        }
        }
    
    
    
    // loops through teams and games to populate with winner //
    
    
    // populate round 1 with all the teams //
    
    
            for(let i = 0; i < 16; i++){
                teams[i].innerHTML = southTeams[i].team;
            }
            
    
            
            // simulate round 2 //
    
            let t = 16;
            for(let i = 0; i < 16; i++){
                
                teamsToPlay.push(southTeams[i]);
                if(teamsToPlay.length === 2){
                    let winner = simulateRound2(teamsToPlay[0], teamsToPlay[1]);
                    teams[t].innerHTML = winner;
                    t++;
                    teamsToPlay = [];
                }
                
            }
    
            // simulate round 3 //
    
            let j = 24;
            for(let i = 0; i < 8; i++){
                
                teamsToPlay.push(round2Winner[i]);
                
                if(teamsToPlay.length === 2){
                    let winner = simulateRound3(teamsToPlay[0], teamsToPlay[1]);
                    teams[j].innerHTML = winner;
                    j++;
                    teamsToPlay = [];
                    
                }
            }
    
            // simulate round 4 //
    
            let x = 28;
            for(let i = 0; i < 4; i++){
                
                teamsToPlay.push(round3Winner[i]);
                
                if(teamsToPlay.length === 2){
                    let winner = simulateRound4(teamsToPlay[0], teamsToPlay[1]);
                    teams[x].innerHTML = winner;
                    x++;
                    teamsToPlay = [];
                }
            }
    
    
               
    }
    
    
    
    
    
    generate.addEventListener('click', createSouth);
