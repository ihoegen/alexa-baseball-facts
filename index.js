'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Baseball Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The chances of a fan being hit by a baseball are 300,000 to 1.",
    "In the early days, baseball players wore straw hats instead of baseball caps during games.",
    "Babe Ruth, one of baseball’s most famous players, used to keep a wet cabbage leaf beneath his cap in order to keep cool. He would change it every 2 innings.",
    "The shortest major league player was Eddie Gaedel—he was 3 feet, 7 inches tall.",
    "In 1921, baseball was first broadcast on the radio.  Not until 1939 was a baseball game televised.",
    "21 million hotdogs are consumed each year at baseball games.  If you lined up all of the hotdogs end to end, they would round the bases 29,691 times.",
    "The longest professional baseball game recorded was in 1984 and lasted 8 hours 6 minutes.",
    "The first official baseball game was played in 1846.",
    "Baltimore Orioles shortstop Cal Ripken, Jr. didn't miss a game in 16 years. He played in 2,632 consecutive games from April 30, 1982 to Sept. 19, 1998.",
    "The New York Yankees have won 26 World Series titles, which is more than any other team.",
    "During World War II, the U.S. military designed a grenade to be the size and weight of a baseball, since \"any young American man should be able to properly throw it.\"",
    "Pitcher Dock Ellis says he threw his June 12, 1970, no-hitter while under the influence of LSD.",
    "Joel Zumaya once missed three games in 2006 after injuring himself playing Guitar Hero."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a baseball fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
