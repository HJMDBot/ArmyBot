(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "ErikaPlugdj";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
            command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Bacon!!!");
                }
              }
            };
            bot.commands.božíCommand = {
            command: 'boží',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var currentDJ = API.getDJ().username;
                var user = chat.un; 
                  API.sendChat("/me @" + currentDJ + ", @" + user + " je z této písničky naprosto unešen/a, až se z toho roztekl/a a za doprovodu zmateného hekání se válí v transu na podlaze.");
                }
              }
            };
            bot.commands.sayCommand = {
            command: 'say',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'mod', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.moderateDeleteChat(chat.cid);
                    API.sendChat("/me [@" + chat.un + "] " + chat.message.substr(cmd.length + 1));
                }
            }
        };

        bot.commands.hledatCommand = {
            command: 'hledat',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var searchUser = chat.message.substr(cmd.length +2);
                    var found = false;
                    for (var i = 0; i < bot.room.users.length; i++) {
                        if (bot.room.users[i].username === searchUser) {
                            found = bot.room.users[i];
                            if (found.inRoom) {
                                API.sendChat("/me [@" + chat.un + "] Stačí otevřít oči! @"+searchUser+ " je tady.");
                            } else {
                                API.sendChat("/me [@" + chat.un + "] Bot naposledy viděl " + searchUser + " před " + bot.roomUtilities.msToStr(new Date().getTime() - found.lastActivity)+ "");
                            }
                            break;
                        }
                    }
                    if (!found) {
                        API.sendChat("/me Bot nemůže najít "+searchUser+". Pravděpodobně se odpojil/a před spuštěním bota.")
                    }
                }
            }
        };

bot.commands.gdgrabCommand = {
            command: 'gdgrab',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var user = chat.un;
                var currentDJ = API.getDJ().username;
                  API.sendChat("/me " + user + "  grab hype! Raduj se, " + currentDJ + "! Stal/a jsi se obětí vzáceného stisknutí tohoto tlačítka..");
               
                }
              }
            };
            bot.commands.topCommand = {
            command: 'top',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me TOP STATISTIKY: 1. Akacik: 1,02 bilión bodů, 2. LegeeeX: 29MLD bodů, 3. GodlikeSM: 156M bodů. 4. Krucifix: 12K bodů, 5. Vidie: 10K bodů");

                }
              }
            };
// !cleartokens
        bot.commands.cleartokensCommand = {
            command: 'resetzetony',  //The command to be called. With the standard command literal this would be: !cleartokens
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var user = chat.un;
                    localStorage.clear();
                    localStorage.setItem("Účet1", "0");
                    localStorage.setItem("Účet2", "0");
                    localStorage.setItem("Účet3", "0");
                    localStorage.setItem("Účet4", "0");
                    localStorage.setItem("Účet5", "0");
                    localStorage.setItem("Účet6", "0");
                    localStorage.setItem("Účet7", "0");
                    API.sendChat("/me Administrátor " + user + " resetoval body.");
                    
                    
                }
            }
        };
        
        // !givetokens - needs to be fixed
        bot.commands.givetokensCommand = {
            command: 'nefunkcniprikaz',  //The command to be called. With the standard command literal this would be: !givetokens
            rank: 'manager', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var msg = chat.message; 
					var space = msg.indexOf(' ');
                    var parse = msg.Split(' ');
                    var name = msg.substring(space + 2);
                    var gift = parse[2];
                    var user = bot.userUtilities.lookupUserName(name); 
                    var startingTokens = validateTokens(user);
                    var updatedTokens;
                    
                    if (space === -1) { 
                         API.sendChat("/me @" + chat.un + ", musíš zadat určitého uživatele k poslání žetonů."); 
                    } 
                    
                    if (gift == null || gift == "" || gift == " " || gift == "!nefunkcniprikaz" || isNaN(gift)) {
                         gift = 1;
                    }
                       
                    updatedTokens = Math.round(gift) + startingTokens;
                    localStorage.setItem(user, updatedTokens);
                    return API.sendChat("/me @" + chat.un + " poslal/a @" + user + " " + gift + " žetonů. @" + user + " má nyní " + updatedTokens + " žetonů.");
                }
            }
        };
        
        // !tokens
        bot.commands.tokensCommand = {
            command: ['zetony', 'konto'],  //The command to be called. With the standard command literal this would be: !tokens
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var user = chat.un;
                    var tokens = validateTokens(user);
                    
                    API.sendChat("/me [@" + user + "] Tvé herní konto: " + tokens + " bodů.");
                }
            }
        };
       
        
        // !tip
        bot.commands.tipCommand = {
            command: 'poslat',  //The command to be called. With the standard command literal this would be: !tip
            rank: 'bouncer', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var msg = chat.message; 
                    var space = msg.indexOf(' ');
                    var receiver = msg.substring(space + 2); 
                    var giverTokens = validateTokens(chat.un);
                    var receiverTokens = validateTokens(receiver);
                    var currentDJ = API.getDJ().username; 
            
                    if (giverTokens <= 0) {
                        return API.sendChat("/me @" + chat.un + " nepošle @" + receiver + " žádné body. Hráč nemá peníze."); 
                    }
                    else {
                        receiverTokens + 1000;
                        giverTokens - 1000;
                        localStorage.setItem(chat.un, giverTokens);
                        if (space === -1) { 
                            receiverTokens = validateTokens(currentDJ);
                            receiverTokens += 1000; //Repeat check in the event tip is for current DJ.
                            localStorage.setItem(currentDJ, receiverTokens);
                            return API.sendChat("/me @" + chat.un + " poslal/a 1000 bodů na účet @" + currentDJ + " . Zůstatek " + chat.un + " konta: " + giverTokens + " bodů. . Nové konto  " + currentDJ + " je " + receiverTokens + " bodů."); 
                        }
                        else {                        
                            localStorage.setItem(receiver, receiverTokens);
                            return API.sendChat("/me @" + chat.un + " poslal/a 1000 bodů na účet @" + receiver + ". Zůstatek " + chat.un + " konta: " + giverTokens + " bodů. Nové konto " + receiver + " je " + receiverTokens + " bodů");
                        }
                    }
                }
            }
        };
        
        //Validate Tokens
        function validateTokens(user){
            var tokens; 
            
            //Check for existing user tokens
            if (localStorage.getItem(user) == null || localStorage.getItem(user) == "undefined") {
                 localStorage.setItem(user, "5000");
                 tokens = localStorage.getItem(user);
            }
            else if (localStorage.getItem(user) !== null  && localStorage.getItem(user) !== "undefined") {
                 tokens = localStorage.getItem(user);
            }
            else {
                 tokens = localStorage.getItem(user);
            }
            
            return tokens;
        }
        
        //Slots---------------------------------------------------------------------------------------------------------------------------
        function spinSlots() {
            var slotArray = [':snail: - ',
                             ':hamster: - ',
                             ':frog: - ',
                             ':mouse: - ',
                             ':cow: - ',
                             ':monkey_face: - ',
                             ':honeybee: - ',
                             ':dog: - ',
                             ':horse: - ',
                             ':sheep: - ',
                             ':fish: - ',
                             ':wolf: - ',
                             ':penguin: - ',
                             ':cat: - ',
                             ':elephant: - ',
                             ':rooster: - ',
                             ':rabbit: - ',
                             ':octopus: - ',
                             ':bear: - ',
                             ':four_leaf_clover: - '];
            var slotValue = [2.5,
                             3,
                             3.2,
                             3.4,
                             3.6,
                             3.8,
                             4,
                             4.2,
                             4.4,
                             4.6,
                             4.8,
                             5,
                             5.5,
                             6,
                             6.5,
                             7,
                             7.5,
                             8,
                             10,
                            14];    
            var rand =  Math.floor(Math.random() * (slotArray.length));                
            return [slotArray[rand], slotValue[rand]]; 
        }
        
        function spinOutcome(bet) {
            var winnings;
            var outcome1 = spinSlots(); 
            var outcome2 = spinSlots(); 
            var outcome3 = spinSlots();
            var outcome4 = spinSlots();
            var outcome5 = spinSlots();
            var outcome6 = spinSlots();
            
            

            //Determine Winnings
             if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
            }
            else if (outcome1[0] == outcome2[0] && outcome1[0] != outcome3[0]) {
                winnings = Math.round(bet * (.45 * outcome1[1]));
            }
            else if (outcome1[0] == outcome3[0] && outcome1[0] != outcome2[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome3[0] && outcome2[0] != outcome1[0]) {
                winnings = Math.round(bet * (.40 * outcome2[1]));
                
            }
            else if (outcome4[0] == outcome5[0] && outcome4[0] != outcome6[0]) {
                winnings = Math.round(bet * (.45 * outcome4[1]));
            }
            else if (outcome4[0] == outcome6[0] && outcome4[0] != outcome5[0]) {
                winnings = Math.round(bet * (.5 * outcome4[1]));
            }
            else if (outcome5[0] == outcome6[0] && outcome5[0] != outcome4[0]) {
                winnings = Math.round(bet * (.40 * outcome5[1]));
                
            }
            else if (outcome1[0] == outcome6[0] && outcome1[0] != outcome5[0] + outcome4[0] + outcome3[0] + outcome2[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome6[0] && outcome2[0] != outcome5[0] + outcome4[0] + outcome3[0] + outcome1[0]) {
                winnings = Math.round(bet * (.5 * outcome2[1]));
            }
            else if (outcome3[0] == outcome6[0] && outcome3[0] != outcome5[0] + outcome4[0] + outcome2[0] + outcome1[0]) {
                winnings = Math.round(bet * (.5 * outcome3[1]));
                
            }
            else if (outcome1[0] == outcome5[0] && outcome1[0] != outcome2[0] + outcome3[0] + outcome4[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome5[0] && outcome2[0] != outcome1[0] + outcome3[0] + outcome4[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome2[1]));
            }
            else if (outcome3[0] == outcome5[0] && outcome3[0] != outcome1[0] + outcome2[0] + outcome4[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome3[1]));
                
            }
            else if (outcome1[0] == outcome4[0] && outcome1[0] != outcome2[0] + outcome3[0] + outcome5[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome4[0] && outcome2[0] != outcome1[0] + outcome3[0] + outcome5[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome2[1]));
            }
            else if (outcome3[0] == outcome4[0] && outcome3[0] != outcome1[0] + outcome2[0] + outcome6[0] + outcome6[0]) {
                winnings = Math.round(bet * (.5 * outcome3[1]));
      
            }
            else if (outcome6[0] == outcome4[0] & outcome5[0] && outcome6[0] != outcome1[0] + outcome2[0] + outcome3[0]) {
                winnings = Math.round(bet * (.40 * outcome6[1]));
                
            }
            else{
                winnings = 0;  
            }
                        
            return [outcome1[0], outcome2[0], outcome3[0], outcome4[0], outcome5[0], outcome6[0], winnings];                      
        }
        
        function checkTokens(bet, user) {
             var tokensPreBet = validateTokens(user);
             var tokensPostBet;
             var validBet = true;

             //Adjust amount of tokens
             if (bet > tokensPreBet || bet < 0) {
                  validBet = false;
                  tokensPostBet = tokensPreBet;
             }
             else {
                  tokensPostBet = tokensPreBet - bet;
             }
             
             localStorage.setItem(user, tokensPostBet);
             return [tokensPreBet, tokensPostBet, validBet];
        }
        
        function slotWinnings(winnings, user) {
             var userTokens = parseInt(localStorage.getItem(user)) + winnings;
             if (isNaN(userTokens)) {
                 userTokens = winnings;
             }
             localStorage.setItem(user, userTokens);
             return userTokens;
        }

        //slots
        bot.commands.slotsCommand = { 
            command: ['automat', 'automaty'],  //The command to be called. With the standard command literal this would be: !slots
            rank: 'user', 
            type: 'startsWith',  
            functionality: function (chat, cmd) { 
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 
                if (!bot.commands.executable(this.rank, chat)) return void (0); 
                else { 
                    var msg = chat.message; 
					var space = msg.indexOf(' ');
                    var user = chat.un; 
                    var updatedTokens;
                    var bet = parseInt(msg.substring(space + 1));
       
                    //Fix bet if blank
                    if (bet == null || isNaN(bet)) {
                        bet = 10;
                    }
                    bet = Math.round(bet);      
                                   
                    var playerTokens = checkTokens(bet, user);  
                    
                    //Prevent invalid betting
                    if (bet > playerTokens[0]) {
                        if (playerTokens[0] === 0){
                            return API.sendChat("/me [@" + chat.un + "] Nevsadíš " + bet + " bodů. Nemáš žádné body."); 
                        } 
                        else if (playerTokens[0] === 1) {
                            return API.sendChat("/me [@" + chat.un + "] Nevsadíš " + bet + " bodů. Vlastníš 10 bodů."); 
                        }
                        else {
                            return API.sendChat("/me [@" + chat.un + "] Nevsadíš " + bet + " bodů. Vlastníš " + playerTokens[0] + " bodů!"); 
                        }
                    }
                    else if (bet < 0) {
                        return API.sendChat("/me [@" + chat.un + "] Nelze vsadit " + bet + " bodů. Prosím, zkus to přiště bez nesmyslných částek!");
                    }
                    else if (bet < 10) {
                        return API.sendChat("/me [@" + chat.un + "] Nevsadíš " + bet + " bodů. Minimální sázka je 10 bodů!"); 
                    }
                    else if (bet === 0) { 
                        return API.sendChat("/me [@" + chat.un + "] Nemůžeš hrát zdarma. Požádej admin tým o resetování bodů."); 
                    }
                    //Process valid bets
                    else {
                        var outcome = spinOutcome(bet);
                        updatedTokens = slotWinnings(outcome[6], user);
                    }
                    
                    //Display Slots
                    if (space === -1 || bet == 10) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " vsadil/a 10 bodů do automatu.");
                        setTimeout(function() {API.sendChat("/me [ Automat ] "  + outcome[0]  + outcome[1]  + outcome[2] + outcome[3] + outcome[4] + outcome[5])}, 5000);
                    
                    } 
                    else if (bet > 10) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " vsadil/a " + bet + " bodů do automatu.");
                        setTimeout(function() {API.sendChat("/me [ Automat ] " + outcome[0]  + outcome[1]  + outcome[2] + outcome[3] + outcome[4] + outcome[5])}, 5000);
                    }  
                    else {
                        return false; 
                    }
                         
                    //Display Outcome
                    if (outcome[6] == 0) {
                        if (updatedTokens === 1) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Zbylo ti 100 bodů.")}, 7000);   
                        }  
                        else if (updatedTokens === 0) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Nemáš žádné body!")}, 7000);
                        }
                        else {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Zbylo ti " + updatedTokens + " bodů.")}, 7000);
                        }
                    }
                    else if (outcome[6] == (bet * 7)) {
                        setTimeout(function() {API.sendChat("/me @" + chat.un + ", vyhrál/a jsi jackpot " + outcome[6] + " bodů! Nyní máš " + updatedTokens + " bodů. Gratulujeme!!")}, 7000);
                        API.moderateMoveDJ(id, 1)
                    }
                    else {
                        setTimeout(function() {API.sendChat("/me @" + chat.un + ", vyhrál/a jsi! Tvá výhra je " + outcome[6] + " bodů! Nyní máš " + updatedTokens + " bodů. Jen tak dále!")}, 7000); 
                    }
                } 
            } 
        }; 
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "ArmyBot",
      language: "czech",
      chatLink: "https://rawgit.com/ErikaPlugdj/ArmyBot/master/lang/cs.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 8,
      autodisable: false,
      commandCooldown: 30,
      usercommandsEnabled: true,
      thorCommand: false,
      thorCooldown: 10,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: true,
      motdInterval: 5,
      motd: "děkujeme že jste s námi. <3",
      filterChat: false,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "http://tinyurl.com/HJMDpravidla",
      themeLink: null,
      fbLink: "http://tinyurl.com/HJMDarmy",
      youtubeLink: null,
      website: "http://tinyurl.com/HJMDweb",
      intervalMessages: [],
      messageInterval: 5,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/ErikaPlugdj/custom/master/blacklist/NSFWlist.json",
        OP: "https://rawgit.com/ErikaPlugdj/custom/master/blacklist/OPlist.json",
        BANNED: "https://rawgit.com/ErikaPlugdj/custom/master/blacklist/BANNEDlist.json"
      }
    }));
    
    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/ErikaPlugdj/ArmyBot/master/ArmyBot.js", extend);

}).call(this);
