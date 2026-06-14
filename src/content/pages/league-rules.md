---
title: League Rules
slug: league-rules
---

# 1.0 Etiquette

1.1 No use of slurs. This includes racist, sexist, homophobic, transphobic, or other forms of derogatory speech.

1.2 Server invites are only allowed when relevant to the conversation at hand and do not break other rules.

1.3 Keep discussion civil (no political or religious debates, etc.).

1.4 No NSFW or gore. What classifies as NSFW or gore is up to the discretion of Mods.

1.5 No spam – pings, text walls, excessive attachments, etc.

1.6 No harassment of any kind. This includes no impersonation (no copying the username of another user in the server)

1.7 Use appropriate channels for discussion.

1.8 Stay honest and be respectful of others, including using preferred pronouns or their name.

1.9 Limit league-related memes and trash talking to ⁠⁠team-propaganda.

1.10 Alt accounts are not allowed. If you lose access to an old account and have made a new one, please let Mods know.

1.11 If a Mod (or Helper) tells you to change the discussion topic, do so.

# Polychampions League-specific Rules

## 2.0 General Game Rules

The following rules apply to all games played in the PolyChampions server, unless otherwise specified

### 2.1 Game Setup and Win Condition
**Game Settings.** Default settings for all Polychampions games are:

- Might
- 24-hour timer
- Size large (324 tiles) for 2v2s and huge (400 tiles) for 3v3s
- Game host chooses any map type except Waterworld
- All players on the current stable (non-beta) version of Polytopia (unless otherwise specified in section 3 for season games)

**Alternative settings.** For non-season games, players may use other game settings if all players agree, or if the game host so specifies in the game notes. For season games, see section 3.7.

**Game setup and start.** By default, players should be invited in the order given by PolyELO bot; players within the same team may switch positions if they wish. Each ranked game must correspond to a single Polytopia game in the Elo bot. Before the game begins, if requested, any Steam or Epic player must switch to mobile, find a substitute plater, or forfeit the game.

**Game end.** A team or player wins the game if they capture all human-controlled capitals. Use the *$win* command to log a win in the bot. Players are encouraged to post the replay link once the game is over.

### 2.2 Cheating and Glitches

Cheating is forbidden. Cheating includes:

- Knowingly using game glitches, bugs, or exploits to your advantage (e.g., turn resetting, ruin doubling), whether or not you intentionally caused the glitch/bug/exploit
- Using out-of-game tools to acquire game information not available through normal play (e.g., ruin prediction tools or other use of the game seed)
- Using always-on automated programs or macros to monitor the game state
- Elo manipulation (e.g., throwing games, bo3, double or nothing)
- Espionage (e.g., illicitly obtaining opponents' screenshots or other information)
- Any other method of gaining an unfair advantage, as determined by mods

These restrictions do not prohibit use of:

- General knowledge about game mechanics (e.g., general map generation and village placement rules)
- Basic image manipulation and calculation tools (including polycalc, mergebot, non-VBA Excel)

If an advantage is based on information that is not accessible through gameplay or public information, you must obtain mod approval before using it. If you are unsure whether something constitutes cheating, please submit a modmail ticket.

Cheating may result in penalties for both the cheating player and their team. A team may avoid the penalty if a teammate reports cheating before it is otherwise discovered.

All glitches that affect gameplay must be reported immediately to staff. Failure to do so may may be treated as cheating and punished accordingly.

### 2.3 Kicking, Skipping & Timing Out

Players may not skip or kick others from the game except in the circumstances specified below. 
**First timeout**: A mandatory grace period of 12 hours is then given after the first timeout is logged. A player may be skipped after the 12h grace period if they are still timed out. This skip is counted as a first timeout. 
**Two or more timeouts**: If a team has already had at least one logged timeout against them, any player on that team may be skipped immediately upon logging a subsequent timeout
**Three or more timeouts**: If a team has previously had at least two logged timeouts against them, and if any player on that team has previously been skipped, any player on that team may be kicked immediately after a third or subsequent timeout is logged. 

Maximum one timeout per player per turn, regardless of extensions or grace periods.

### 2.3.1 Definitions

**Timed out** - A player is timed out if they have taken more than their allotted time to complete their turn (normally 24 hours unless otherwise agreed upon, plus 24 hours per extension used). 
**Logged timeout** - A timeout is logged against a player when all players have been notified via *$ping* with a screenshot of the game and/or game info screen that shows the player in question is timed out.

### 2.3.2 24 Hour Turn Extensions

Asking for an extension adds 24 hours to a player's alloted time to complete a turn. Extensions can be stacked on a single turn or used on separate turns. Each team may use up to three extensions per game. To use an extension, the player or a teammate must notify all players via *$ping* before a timeout is logged. Extensions may be used during a grace period after a timeout is logged. 

### 2.3.3 Leniency

Teams that want to relax these skip/kick rules must agree to terms in an accord through pings. Timeout leniency is revocable by either side, given notice of a full turn (not including the current one). If there is no clear communication agreeing to be more lenient with timeouts, the above timeout rules should be followed.

### 2.3.4 Skip/kick shaming

Skip/kick shaming is prohibited and may be punished by FAT fines.

### 2.4 Restart Rules

Every team has 1 elective restart per game. If a team wants to use their restart, they must do so before the end of their team's final move of turn 3. Map type and points cannot be changed. However, a team may switch tribes, or even substitute players between restarts. You may define custom restart rules in game notes, but they must not be unbalanced (e.g. host gets 2 bonus restarts away gets none). 

**Restart Timeout Rule**: If host doesn't restart within 48 hours (with or without substitutions), the away side can choose to count it as a timeout. If there are substitutions, if the new player does not respond to a friend request within 24 hours, this can count as timeout against the team with the unresponsive player. A *$ping* notifying the sub that the friend request was sent will start the 24 hour clock ticking. For non-season games, players may modify restart rules by mutual agreement. 

If a team accidentally selects tribes that are not permitted under the game's rules (e.g., more tribe points used than allowed, duplicate tribes), that side must $ping the game by the end of turn 0 and can restart the game without penalty. If the team fails to do so, mods will decide how the game may proceed.

### 2.4.1 Automatic restarts

The game is deemed invalid and must be immediately restarted if:
- Any other tribe’s borders are visible at the start of T0, even an ally
- Any player has invalid starting resources (e.g., Bardur with 0 or 1 animal in capital) (see https://polytopia.fandom.com/wiki/File:Resource_rates_by_tribe.png)
- On Archi map, any player's capital does not have at least 1 water tile in its borders
- On Conti map, any player's capital spawns on a one-tile island

### 2.5 Embassies

Embassies with teammates are banned in games where any team has 3 or more players, unless all players in the game agree otherwise. In all other games, embassies are banned until T7 unless all players agree otherwise.

### 2.6 Setting Map and Tribes

Once the game has commenced, host must use the *$setmap* command. By the end of the game, players must enter their tribe picks with the *$settribe* command.

### 2.7 Consequences for Rule Violations

Breaking any rules may range anywhere from a warning to a perma-ban, depending on the severity of the case. Teams may also be fined FATs for rule infractions. All consequences and ambiguous cases concerning rules are up to the complete discretion of mods. This is not a legal contract. Players are expected to abide by the spirit of the rules, not merely the letter of them.

## 3.0 Houses and Teams

Individual Players are registered to both a House and a Team. Houses are umbrella organizations which contain Teams, each moving up/down in the tiers independently. For example: Ronin and Bandits are two distinct teams under the same Ronin House, Ronin Team in an upper tier and Bandits in a lower tier. Teams can move up or down tiers based on previous season performance. A player may play a game on a different team within the same house, in a higher tier. See section 3.9 for rules regarding team relegation/promotion between seasons. 

Two Teams within the same House may end up in the same Tier, and if so they are treated as regular opponents, with games being played against each other.

Players may play up to one game per season on a team other than their own.  That team must be within the same house and ranked above their current team’s tier. 

### 3.0.1 New Team creation

Houses may form new teams out of their existing house if the house has fewer teams than tiers in the league. Mods must be notified of the new team at least 2 weeks before the start of a new season in order for the new team to compete in that season.

### 3.0.2 New House creation

Any league member may create a new house at any time. All that is needed is a logo and a minimum of 3 players. Mods must be notified of a new house at least 4 weeks before the start of a season in order for the new house to compete in that season. New houses will receive FATs equal to the current average number of FATs per house.

The Tier Tribunal, composed of one rep per house, will determine tier placement of a new house, as high as Silver tier. 

Tiers above the bottom tier that have greater than 7 teams in it get one extra demotion slot (max 3 demotion slots per tier). This will cause all tiers to gradually return to their original sizes.

Players on a newly created house cannot trade back to their original house for 2 seasons without mod approval.

### 3.0.3 Team retirement

House leadership must inform mods of a team dropping out/retiring at least 2 weeks before the start of a new season. FAT fines of up to 20% of that house's total may be given for notification of a team dropping out after the deadline. 

### 3.0.3 Leadership roles

A **House Leader** is:
- Essential and unique; one and only one per house
- The sovereign decision maker for the house
- Able to access all leadership channels in the Polychampions server

A **House Co-leader** is:
- Able to authorize player trades, Free Agent bids, and promotions/retirement for recruiters, captains, and other co-leaders
- Able to access all leadership channels in the Polychampions server, except SLR
- Limited 10 per house
- Optional

A **Team Captain** is:
- A house co-leader
- The point person for that Team's season games, like doing the *$join* and *$open* commands, also finding subs if needed
- Limit one per team; but not necessarily a member of that team
- Optional

### 3.1 Map Size and Type

2v2s must be hosted on a large (324 tiles) map. 
3v3s must be hosted on a huge (400 tiles) map.
The hosting team must select dryland, lakes, pangea, continents, or archipelago as the map type, unless otherwise agreed by both teams.

### 3.2 Tribe Selection

Each tribe costs a set number of points as specified below. Teams must select tribes whose total corresponding points do not exceed the maximum chosen by the away side within the range for that week. All players on a given side must select different tribes (no duplicates on a side).

**v120 Season 22 Weekly Points Ranges**
Away picks points within a range of: 
Week 1 3v3: 8-12 (default 10)
Week 2 2v2 (low): 4-6 (default 5)
Week 3 2v2 (high): 6-9 (default 7)

See section 3.5 for fill date deadline rules

Teams may downsize their 3v3 games to 2v2 if both sides agree. Team leaders should send a modmail specifying how many games to downsize or if they have specific teams that they want to keep as 3v3 games.

All season 22 games should be played on v120

WaterWorld maps are banned on all league games
Polaris is banned on Archipelago and Continents 3v3 maps 

### 3.3 Tribe Tier List

Review the #season-info channel on the discord for an up-to-date tier list of tribe point values

### 3.4 Mid-season departures

Any player involved in a season game must remain in the PolyChampions discord server for the duration of that game. If a player leaves the server during a season game, the opposing team may count it as a timeout for the player's team.

### 3.5 Game Creation & Fill Deadline

The deadline to set up season games is the end of the game week. Each game week runs from Sunday through Saturday.

House Leaders and Co-Leaders must open, fully fill, and start all season games by the end of Saturday of that week.
If only one side has failed to fill a game by this deadline, the other side may claim a win by forfeit.

After a game is started in the bot, home has 48 hours to declare map type. If home does not declare the map in pings within 48 hours of game started in the bot, lakes map is used by default. Once the map type is determined, the game host has 48 hours to send out any needed friend requests. Other players may also send friend requests to the host. Players have 24 hours following friend requests to accept.
After home declares map type, away has 24 hours to declare points. If they don't, use the default points value.
After away declares points and host friend requests have been accepted, the game host has 48 hours to create the game lobby.
After the lobby is created, players have 48 hours to pick tribes. 

If a player or team exceeds any of above time limits (except the time limit to declare points), and if players have pinged information sufficient to show there was a violation, the other side may log a timeout.
Teams must make a good faith effort to start their games by the deadline, or the game will be ruled a loss. All season games must be created within one month of the season start, regardless of team accords, otherwise mods may rule a loss for both sides.

All league dates and deadlines without a specific hour refer to the end of the day in Universal Standard Time (i.e., 11:59 pm UTC).

### 3.6 Season Match Structure

The Season is a single-round, round-robin series of 12 games; 8x 2v2 and 4x 3v3 games (28 player slots).  Each team plays roughly even numbers of games against every other team in their tier.  The starting dates for these games are spread across three weeks (4 games each week).

Top Tier (Platinum): Best of 12 games between 5 teams. Each team plays 2x 2v2 and 1x 3v3 vs every other team.

Middle Tiers (Gold, Silver, etc): Best of 12 games between 7 teams. Each team plays 2 games vs each other team, and each team plays a total of 8x 2v2 and 4x 3v3.  Some pairings play 2x 2v2, while other pairings play 1x 2v2 and 1x 3v3.

Lowest Tier: Best of 12 games between 4-13 teams (Tier size will vary). Game count and size vs each team will be dynamically balanced but adhere to the same game count of 8x 2v2 and 4x 3v3 games.

### 3.7 Accords

Teams may come to an agreement on a change for any of the following rules: 

1. Timeouts - Per 2.3.3, teams may agree to leniency on timeout rules.
2. Different map - Teams may use the waterworld or continents map in season games if both sides agree to it.

Any other changes to the rules are not allowed without mod approval via @ModMail. Timeout leniency is revocable by either side, given notice of a full turn (not including the current one). (For example, $ping during t20 that you want to allow kicks, and from t22 onwards kicks are allowed)

All agreements that are not made using the $ping command will not be considered by mods in any dispute.

## 3.8 Overtime

### 3.8.1 Panel for promotion/relegation only

At the end of the season, any active season game is in overtime. Any overtime game affecting promotion or relegation must proceed until the start of the host’s turn. Players then submit screenshots of the game to mods, who will send it to be judged by a panel of skilled players. The panel’s decision determines the promotion and relegation results. Once the panel has determined who promotes/relegates, the game may continue. All other games continue as normal. 

If the panel decides the overtime game is obviously lost, the losing side may receive a FAT fine

### 3.8.2 Panel selection

Each panel consists of one representative from each House; Houses in the paneled game or Houses who have a conflicting interest (i.e. their promotion/demotion is affected by the outcome) will be excluded from judging that game. Only players who were members of and played for a Plat or Gold team within the most recent three seasons may be on the panel for Plat or Gold tier games.

### 3.9 Team promotion/relegation

At the end of the season, teams will be assigned to tiers based on season record.

Platinum Tier: always 5 teams: 3 stay, 2 demote.
Middle Tiers (Gold or lower): 7 teams by default: top 2 promote, bottom 2 demote, 3 remain.  If a Middle Tier contains more than 7 teams, one extra demotion slot is added until the tier has returned to 7.
Bottom Tier: 4-13 teams. Top 2 promote, the others remain.

### 3.9.1 Tier tiebreakers

Tiebreakers for any placements affecting prizes or promotion/demotion are broken by season record vs individual team(s) tied with. If those are a tie, then the teams play a single 2v2 Live Game to determine a winner. Any player who was on the team's main roster for that season, and played at least one game for that season, may play in the tiebreaker 2v2.

The Live Game for tie breaker positions can be in team VC with other teammates so people from the team can watch and comment. To facilitate scheduling for the tie-breaking Live 2v2. Tribe points are the week 2 and week 3 points ranges combined.

- Mods will create a temporary season schedule with placeholders for each tied team (i.e. Team 1/Team 2 in Platinum and Gold).
- Deadline to begin the Live 2v2 will be decided by mods. Tied teams may schedule and play the match before that time and date.

In the event the match has not begun by the deadline, the following steps are to be followed:

1. If one team fails to field a team for the 2v2 by the deadline and time designated by Mods, and/or is not present and available to play at that time, that team forfeits.

2. If both teams fail to field a team for the 2v2 by the deadline and time designated by Mods, and/or are not present and available to play at that time, but each side has a player available and willing to play an immediate 1v1, a Live 1v1 may be played. The outcome of that match will decide tier placement. A team may opt out of the 1v1 tiebreaker.

3. If one or both sides decline the 1v1 (or don’t have a player available or willing to play a 1v1), team tier placement will be decided by a coinflip. Mods will flip a coin, deciding which Teams are Heads and Tails beforehand, the winner of that coinflip getting promoted/not demoted.

### 3.10 Free Agent Tokens (FATs)

FATs are owned by houses. Houses will be given a FAT allowance every two weeks based on their top team's tier at the start of the season
﻿
**Biweekly FAT Allowance:**
Platinum: 6
Gold: 7
Silver and below: 8

### 3.11 Free Agency/The Auction

Nova grads can react to a biweekly announcement to get the @Free Agent role

Upon becoming a Free Agent (FA), these Novas may react in #⁠house-preferences (house preference channel) to get preference roles. These roles limit which Houses can place valid bids. (All Houses may bid by default). FAs may change their House preferences at any time until the auction opens. 

Sign-ups begin every other Monday and go through that Friday. The auction begins every other Saturday following the close of sign-ups, for 7 days (through the end of the following Friday). 

Houses may bid on players during the auction in #⁠free-agent-picks.

Each time a valid raise is placed the timer for accepting new bids resets to 24 hours. A bid cannot be retracted. Teams may only bid up to the total FAT amount they have listed in ⁠⁠#fats-and-trade-list. Teams may only increase bids; teams cannot match previous bid amounts. Only teams that the FA selected as a house preference may bid.

⁠#free-agent-picks may only be used by Team Leadership for making a bid which must contain: 
1) Which Free Agent they want. 
2) How many tokens they wish to bid on that Free Agent. 

The bid may also include why the team thinks the free agent should join them. For example: "I want @Player A to join the Lightning for 3 FATs. I believe she would be a good fit because she likes memes about thunder." 

The FA will go to the highest bidding house at the end of the 24 hours.

### 3.12 FAT Refunds

Free Agent refunds will be granted in the following scenarios:
- For proven alts before the alt gets to T5 in a season game
- If a Nova goes missing and the team spent more than 5 FATs on the player
- If it's a unique case and the team has a valid argument

A nova will be considered to have gone missing under any of the following circumstances: 
- Have zero completed games that they joined after getting recruited
- Have not joined any game within 4 weeks of joining a team
- Have not sent messages in the team server and/or PolyChamps for 30 days after getting on the team

If a refund is granted, that team is not allowed to bid on the player if/when the player becomes a Free Agent again.

### 3.13 Recruiting Code of Conduct

**Recruiters**:

Recruiters should never speak poorly of other teams or houses. Instead of tearing other houses down, build your house up. Recruiters may ask if the Nova is interested in joining their house. Recruiters may not coach a Nova to only select their house as a preference. If a recruiter misrepresents, talks poorly about, or otherwise disparages another house while acting in a recruiting role there will be consequences, including but not limited to FAT fines, being forcibly demoted from the recruiter role.

*Okay to ask:*
- "Are you okay joining my team?"
- "Do you have a number one favorite team that you only want to play for?"

*Not okay to ask:*

- "Can you only select my team, that way we get you for cheap?"
- "Did you know that plague is full of trolls?"

This code of conduct applies to both recruiting of Novas or League Members on another team. 

### 3.14 Trading

If a player wants to switch to a new team, they only need approval from the new House to join the new team.

- If a player switches teams immediately after a draft, the FAT compensation equals the price the player went for in Free Agent Picks.
- If a player switches teams after starting at least one season game, the FAT compensation equals the *$tradeprice* and depends on the player's tier, season record, and leadership roles.

The old House and new House may **negotiate any trade price** if the player’s old House, the player’s new House, and player consent

If both those options fail, the player can request to go to **Free Agency**. Veteran FA players in auction will be **reverse auction** starting at the list price and going down every 6 hours. Proceeds from Veteran FA auction may go to the old team at mods’ discretion.

Players moving from a disbanding team to a new team trade for 1 FAT

### 3.14.1 Trade Price Adjustments

At the start of each season, a committee of mods and Statisticians will update the *$tradeprice* baseline prices as they see fit, aka PolyChamps Federal Reserve

### 3.15 Prizes

**First blood.** The first team in each tier to get a qualifying win of each season will get a First Blood shoutout in ⁠#league-updates. To qualify, the game can’t be a live game and can’t involve any skips or kicks before t10.
**Winning your tier.** Players who competed in season games for the team that wins the tier will get the Season champion role, for example @S17 Champ and @S17 Gold Champ. In addition to roles, the team that won their tier may pick a new emoji to add to the server.
