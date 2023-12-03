const generate = document.getElementById('generate');
const bracketContainer= document.getElementById('bracket-Container');
const division = document.getElementsByClassName('division');
const round = document.getElementsByClassName('round');
const games = document.getElementsByClassName('game');
const teams = document.getElementsByClassName('team');


let round4Winner = [];
let round5Winner = [];
let round6Winner = [];



const southTeams = [
    team1 = {
        team: 'Alabama',
        seed: 1,
    },
    team2 = {
        team: 'Texas CC',
        seed: 16,
    },
    team3 = {
        team: 'Maryland',
        seed: 8,
    },
    team4 = {
        team: 'West Virginia',
        seed: 9,
    },
    team5 = {
        team: 'San Diego St.',
        seed: 5,
    },
    team6 = {
        team: 'Charlston',
        seed: 12,
    },
    team7 = {
        team: 'virginia',
        seed: 4,
    },
    team8 = {
        team: 'Furman',
        seed: 13,
    },
    team9 = {
        team: 'Creighton',
        seed: 6,
    },
    team10 = {
        team: 'NC State',
        seed: 11,
    },
    team11 = {
        team: 'Baylor',
        seed: 3,
    },
    team12 = {
        team: 'UC Santa barbara',
        seed: 14,
    },
    team13 = {
        team: 'Missouri',
        seed: 7,
    },
    team14 = {
        team: 'Utah State',
        seed: 10,
    },
    team15 = {
        team: 'Arizona',
        seed: 2,
    },
    team16 = {
        team: 'princton',
        seed: 15,
    },
]


const eastTeams = [
    team1 = {
        team: 'Purdue',
        seed: 1,
    },
    team2 = {
        team: 'FDU',
        seed: 16,
    },
    team3 = {
        team: 'Memphis',
        seed: 8,
    },
    team4 = {
        team: 'Florida Atlantic',
        seed: 9,
    },
    team5 = {
        team: 'Duke',
        seed: 5,
    },
    team6 = {
        team: 'Oarl Roberts',
        seed: 12,
    },
    team7 = {
        team: 'Tennessee',
        seed: 4,
    },
    team8 = {
        team: 'Louisiana',
        seed: 13,
    },
    team9 = {
        team: 'Kentucky',
        seed: 6,
    },
    team10 = {
        team: 'Providance',
        seed: 11,
    },
    team11 = {
        team: 'Kansas St.',
        seed: 3,
    },
    team12 = {
        team: 'Montana St.',
        seed: 14,
    },
    team13 = {
        team: 'Michigan St.',
        seed: 7,
    },
    team14 = {
        team: 'Souther Cali',
        seed: 10,
    },
    team15 = {
        team: 'Marquette',
        seed: 2,
    },
    team16 = {
        team: 'Vermont',
        seed: 15,
    },
]


const midwestTeams = [
    team1 = {
        team: 'Huston',
        seed: 1,
    },
    team2 = {
        team: 'Northern Ky.',
        seed: 16,
    },
    team3 = {
        team: 'Iowa',
        seed: 8,
    },
    team4 = {
        team: 'Auburn',
        seed: 9,
    },
    team5 = {
        team: 'Miami',
        seed: 5,
    },
    team6 = {
        team: 'Drake',
        seed: 12,
    },
    team7 = {
        team: 'Indiana',
        seed: 4,
    },
    team8 = {
        team: 'Kent St.',
        seed: 13,
    },
    team9 = {
        team: 'Iowa St.',
        seed: 6,
    },
    team10 = {
        team: 'Pittsburg',
        seed: 11,
    },
    team11 = {
        team: 'Xavier',
        seed: 3,
    },
    team12 = {
        team: 'Keenesaw St.',
        seed: 14,
    },
    team13 = {
        team: 'Texas A&M',
        seed: 7,
    },
    team14 = {
        team: 'Penn St.',
        seed: 10,
    },
    team15 = {
        team: 'Texas',
        seed: 2,
    },
    team16 = {
        team: 'Colgate',
        seed: 15,
    },
]


const westTeams = [
    team1 = {
        team: 'Kansas',
        seed: 1,
    },
    team2 = {
        team: 'Howard',
        seed: 16,
    },
    team3 = {
        team: 'Arkansas',
        seed: 8,
    },
    team4 = {
        team: 'Illinois',
        seed: 9,
    },
    team5 = {
        team: 'Saint Marys',
        seed: 5,
    },
    team6 = {
        team: 'VCU',
        seed: 12,
    },
    team7 = {
        team: 'UCONN',
        seed: 4,
    },
    team8 = {
        team: 'Iona',
        seed: 13,
    },
    team9 = {
        team: 'TCU',
        seed: 6,
    },
    team10 = {
        team: 'Arizona St.',
        seed: 11,
    },
    team11 = {
        team: 'Gonzaga',
        seed: 3,
    },
    team12 = {
        team: 'Grand Canyon',
        seed: 14,
    },
    team13 = {
        team: 'Northwestern',
        seed: 7,
    },
    team14 = {
        team: 'Boise St.',
        seed: 10,
    },
    team15 = {
        team: 'UCLA',
        seed: 2,
    },
    team16 = {
        team: 'UNC Asheville',
        seed: 15,
    },
]
