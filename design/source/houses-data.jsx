// REAL PolyChampions content, pulled from the WordPress export 2026-05-20.
// All 10 current houses + bios + logo URLs hosted on polychampions.com.

const HOUSES = [
  {
    id: 'arctic-wolves', name: 'Arctic Wolves', slug: 'arctic-wolves',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/ArcticWolves-border.png',
    color: '#5BB7E5', accent: '#0E2A3D',
    blurb: 'Ambitious. We enjoy the game, but more importantly, we want to win.',
    bio: "AW are ambitious. We enjoy the game, but more importantly, we want to win. We don't make people feel bad if they lose, but we do expect folks to take the game seriously. The Arctic Academy pairs new players with experienced mentors. We also have channels for pictures of our pets, Brawl Stars, D&D, and other games. Yes, Polytopia is a hobby and real life is the priority, but AW do our best to win.",
  },
  {
    id: 'dragons', name: 'Dragons', slug: 'dragons',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/dragons_logo.png',
    color: '#C8324D', accent: '#330E14',
    blurb: 'High-performing and diverse house. Top seed in S15 and S16.',
    bio: "Dragons are a high-performing and diverse house, incorporating top players across a wide age range. We finished top seed in the last two seasons (S15 and 16). Characterized by stellar communication coupled with impressive game-sense, we're a dedicated community of tryhards, waging war to the best of our abilities. If you'll put in the effort to become the very best, then we'll gladly add you to our roster.",
  },
  {
    id: 'jets', name: 'Jets', slug: 'jets',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/JetsLogo.png',
    color: '#2E4DA8', accent: '#0E1426',
    motto: 'Mors Ab Alto',
    blurb: 'Strong and active. Playoffs every season.',
    bio: "The Jets are a team of very strong and active Polytopia players. We've made the playoffs every season, and have some of the most well-known and respected leaders in the community on our team. The team is looking for active, mature players who want to learn from the best. We are all adults, so if you are 21 or over you will probably fit in well with our team. To learn more, join the PolyChampions discord and message Merlin with any questions.",
  },
  {
    id: 'kraken', name: 'Kraken', slug: 'kraken',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/kraken-border.png',
    color: '#3B7A6E', accent: '#0E2620',
    blurb: 'Competitive and friendly. Krakens and Squids alike.',
    bio: "House Kraken is a competitive and friendly team full of both new and experienced players. Our house offers new members an environment to learn the game while having fun playing in PolyChampions. House Kraken provides two encouraging and helpful teams for both old and new players to enjoy on their Polytopia journey. Come join the Krakens and Squids under the waves in The Trench's murky depths!",
  },
  {
    id: 'lightning', name: 'Lightning', slug: 'lightning',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/LightningLogo2.png',
    color: '#F5C842', accent: '#1A1340',
    blurb: 'Rich in history and legend. Lightning, Thundercats, and Electrons.',
    bio: "House Lightning, rich in history and legend, has built a system that produces wins and great players. We draft passionate players who love the game, seek improvement, and enjoy a friendly community. Our team is run by leadership consensus, with all players involved in major decisions. Active players interested in leadership get opportunities to move up. We have two strong teams, Lightning and Thundercats, and a new third team, Electrons, for newer players to learn and grow.",
    historical: "Created at the start of season 1, Lightning had a rough start. Starlord led the team through the first season, before handing the role to Scott. The team did badly until season 4 when Bakalol, Ben and Chief joined from Ronin. Under Bakalol they finished no lower than fifth for 4 seasons. At the end of season 7, Bakalol stepped down and gave leadership to VikingTheCat.",
  },
  {
    id: 'plague', name: 'Plague', slug: 'plague',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/plague-border.png',
    color: '#7DC242', accent: '#1A2A14',
    motto: 'Our morale is infectious! No, seriously!',
    blurb: 'Competition with a chill vibe. In-house tournaments, training, Catan.',
    bio: "Plague is the House for you if you can blend competition with a chill vibe. We are always looking for competitive and enthusiastic members. We conduct many activities like in-house tournaments, training games, poly puzzles, online Catan, and question/song of the day. We have an entire group of advisors ready to guide you in your games and throughout your Polytopia career. We're an energetic, competitive, and enthusiastic community, and we would love to have you aboard!",
  },
  {
    id: 'ronin', name: 'Ronin', slug: 'ronin',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/ronin-border.png',
    color: '#4A4458', accent: '#16131C',
    motto: 'Slogans are for the weak!',
    blurb: 'We like winning.',
    bio: "We like winning.",
  },
  {
    id: 'tempest', name: 'Tempest', slug: 'tempest',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/Tempest.png',
    color: '#8B5BE5', accent: '#1F0F33',
    blurb: 'Newest house. Focus on training new players to a competitive level.',
    bio: "Tempest is the newest house in PolyChamps with a focus on training new players to a competitive level. New recruits can expect training games with Pros, live events (Games in VC), a structured training program, a chance to build a new team together, and more personalized attention in your training journey. Join us, the newest house, today and bop bop to victory.",
  },
  {
    id: 'vikings', name: 'Vikings', slug: 'vikings',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/vikings-border.png',
    color: '#D4882E', accent: '#3D260A',
    blurb: "We're out of this world!",
    bio: "We're out of this world!",
  },
  {
    id: 'wildfire', name: 'Wildfire', slug: 'wildfire',
    logo: 'https://polychampions.com/wp-content/uploads/2024/08/Wildfire_cir.png',
    color: '#E84A2D', accent: '#2A0E0A',
    motto: 'Spreading our red, hot flames of luv!',
    blurb: 'Thoughtful players, supportive environment, strong communication.',
    bio: "House Wildfire invites thoughtful players to join our welcoming and competitive team. We offer a supportive environment, strong communication, and the best tech. Balance Polytopia with real-life commitments while finding your place across our teams. With a history of success and a focus on luv and collaboration, we help you grow your skills and become a formidable force. Burn bright with us!",
  },
];

const SEASON = { number: 21, founded: 'May 25, 2018', teamCount: '25+', avgRosterSize: '5-20' };

const DISCORD_URL = 'https://discord.gg/7AKFVrZfqb';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UC9IStoy1QBIr4_iFTi3E6PA';
const MERCH_URL = 'https://polychampions-shop.fourthwall.com/';
const POLYTOPIA_URL = 'http://midjiwan.com/polytopia.html';
const FEATURED_YT = 'c6SqDIYaAcU';
const NOVAS_YT = '_KsDd0LT54M';

const FAQS = [
  { q: "How do I get on a team?", a: "New players need to register and learn how the Discord bot works before they can join a team. Once they pass probation and finish one 2v2 game and start a second 2v2, they can apply to be a Free Agent. Teams place bids and the team with the highest bid gets the player. Free Agents may say which teams they prefer." },
  { q: "When do auctions happen?", a: "Auctions occur every two weeks. You need to be a Free Agent to be in the New player auction. Players who have completed at least one 2v2 and started a second 2v2 may register for Free Agency and get in the Auction." },
  { q: "How does the whole season thing work?", a: "Seasons last three months. Teams play 12 games per season, one 2v2 and one 3v3 game vs every other team in their division. Teammates share screenshots of their game and coordinate moves to plan a joint strategy. The top teams in each division are promoted and the bottom teams are relegated." },
  { q: "What do teams use to bid on players?", a: "Teams have a currency called Free Agent Tokens (FATs). The top teams get fewer FATs. The teams that are struggling get more FATs so they can recruit better talent. The idea is to keep the league balanced and let struggling teams get ahead." },
  { q: "Can players get traded?", a: "Yes. If a player wants to switch teams, they can. Players may trade at any time, as long as the new team agrees to take them. Players who want to switch should reach out to the team leaders to arrange it." },
  { q: "Is there a max number of players that can be on a team in a given season?", a: "There is no max number of players. Each person usually plays 1-3 season games. Team leaders assign season games. Each team has their own way of deciding player rosters." },
  { q: "Do player contracts expire? Can you get cut from the team?", a: "Player contracts do not expire. Once you get on a team, you stay there unless you want to switch and arrange a trade. There are rare cases where players break league rules, are dropped from their team, and re-enter Free Agency." },
  { q: "What happens if I don't get picked to join a team in the auction?", a: "If you do not get picked to be on a team, keep practicing. Join more games and ask team recruiters to play games with you. Read strategy guides. Review replays of your games and figure out what your opponent did. Watch tutorials from GullYY or PolyChampions YouTube. Higher activity will get you noticed." },
];

const NOVAS_STEPS = [
  { n: 1, t: 'Join the Discord server', d: 'Head to discord.gg/7AKFVrZfqb' },
  { n: 2, t: 'Type $novas in any channel', d: 'The bot will queue you up' },
  { n: 3, t: 'Type $setname followed by your Polytopia in-app name', d: 'For example: $setname Espark' },
  { n: 4, t: 'Type $novagames or $games in bot-commands', d: 'See the list of games you can join' },
  { n: 5, t: 'Type $join [game ID] to get in a game', d: 'Pick one and start playing' },
  { n: 6, t: 'Register for free agency', d: 'After at least one completed 2v2 and a second started. Signups happen every two weeks.' },
];

const HALL_OF_CHAMPIONS = [
  { season: 8, winner: 'Wildfire', detail: 'Took down the Sparkies in Pro Season 8 finals' },
  { season: 7, winner: 'Crawfish', detail: 'Defeated the Ronin for the Season 7 champion title' },
  { season: 6, winner: 'Sparkies', detail: 'Won the Season 6 playoffs vs the Jets' },
  { season: 5, winner: 'Lightning', detail: 'Pro Season 5. 14-4 in regular season, beat Wildfire 2-1 in semis, beat Plague 2-1 in finals.' },
  { season: 4, winner: 'Crawfish', detail: 'With core players retiring (Hughmungus, Koric) and Shrimps growing.' },
  { season: 3, winner: 'Crawfish', detail: 'Jets made their 3rd straight final appearance but fell to the expansion Crawfish.' },
  { season: 2, winner: 'Jets', detail: '2-0 win over the Ronin after losing Unwise early.' },
  { season: 1, winner: 'Sparkies', detail: 'July 2018 — beat the Jets to become the first PolyChampions season winner.' },
];

const HISTORY_BEATS = [
  { date: 'May 25, 2018', title: 'TopiaRoyale founded', text: "MopWop (server creator) and ReapersTorment (first mod) wanted a place where team-based Polytopia matches could be played. The original idea: 4 color groups (red, blue, yellow, green)." },
  { date: 'That same night', title: 'zNewt changes the plan', text: "Invited to moderate, zNewt rewrote the structure overnight: 4 color groups became 10 separate teams. MopWop and Reaper agreed in the morning." },
  { date: 'First 40', title: 'The First 40 join', text: "The first 40 community members to join TopiaRoyale included James, foreverblue173, rickdaheals, Scott, StarLord and more. They had a unique Discord role for a brief time." },
  { date: 'May 26, 2018', title: 'Season 1 begins', text: "Bardur was permanently banned (understandable at the time). The ABBA Draft System, designed by zNewt, is still in use. Original season 1 teams: Jets, Ronin, Mallards, Cosmonauts, Lightning, Sparkies (originally the Bulls), Wildfire." },
  { date: 'June 25, 2018', title: 'First playoffs', text: "Sparkies (4-1, 1st seed), Jets (4-3), Mallards (3-3), Cosmonauts (3-4) made the playoffs. Sparkies beat Jets in the grand finals — the first TopiaRoyale champions." },
  { date: 'Season 2', title: '8 teams, fixed cadence', text: "The mod team brainstormed: standardize game counts (11/season), expand to 8 teams. The Bombers were added — 2nd oldest team in PolyChampions history." },
  { date: 'August 8, 2018', title: 'Crawfish — the 10th team', text: "After a multi-round server vote, Crawfish joined the Major league. Founded by Hughmungus and Koric 1v2." },
  { date: 'Season 21', title: 'Today', text: "The league has 25+ teams competing across skill levels. Seasons last three months. Each team has 5-20 members. Actively recruiting." },
];

const NEWS = [
  { slug: 'season-18-christmas-update-week-8', title: 'Season 18 Christmas update (week 8)', date: '2024-12-29', author: 'PolyChampions', excerpt: "Welcome to the first (public) update on how the season is going. 14 games have ended in bronze; Bandits and Axolotls lead, Voyagers off to a rough 0-2 debut.", tags: ['Recap', 'Season 18'] },
  { slug: 'ai-mo-strategy-guide', title: 'AI-MO Strategy Guide', date: '2024-02-02', author: 'PolyChampions', excerpt: "Another tribe strategy guide. This one focuses on the three things that make Ai-Mo different — the Altar of Peace monument, easy access to the philosophy tech, and of course, mind benders.", tags: ['Strategy', 'Tribes'] },
  { slug: 'play-polytopia-with-polychamps-livestream-guest-nemex', title: 'LIVESTREAM with guest Nemex', date: '2024-02-03', author: 'PolyChampions', excerpt: "Join our 'Play Polytopia with Polychampions' Livestream — guest Nemex talks animations and plays some games. Check out his YouTube channel.", tags: ['Livestream'] },
  { slug: 'season-8-and-9-awards', title: 'Season 8 and 9 Awards', date: '2022-01-02', author: 'PolyChampions', excerpt: "MVP Pro: callmesusanifyoulike (S8), Arthur248 (S9). Leadership of the season: Miguelonkonstin and sgtsub, both from Plague. Most improved Pro: Wildfire & Sparkies tie (S8), Vikings (S9).", tags: ['Awards', 'Recap'] },
  { slug: '507-2', title: 'Season 9', date: '2021-01-17', author: 'PolyChampions', excerpt: "Season 9 started January 4, immediately after the winter break. Season 8 games continue while season 9 is in progress. Moonrise — 2v2s on 324-tile maps, 3v3s on 400-tile. Water world banned.", tags: ['Season 9'] },
  { slug: 'polyelo-bot-turns-2-years-old', title: 'PolyElo bot turns 2 years old', date: '2020-09-24', author: 'PolyChampions', excerpt: "Happy Two Year Anniversary to @PolyELO Bot! Thanks to Nelluk for creating and administering it.", tags: ['Tools'] },
  { slug: 'season-8', title: 'Season 8', date: '2020-08-21', author: 'PolyChampions', excerpt: "Coming up September 1, Season 8 of PolyChampions will begin. Who's going to win the Major and Minor League championships?", tags: ['Season 8'] },
  { slug: 'season-5-junior-champs', title: 'Season 5 Junior Champs', date: '2019-12-13', author: 'PolyChampions', excerpt: "Congratulations to team @The Dynamite for winning season 5!", tags: ['Recap'] },
  { slug: 'announcing-the-dragons', title: 'Announcing the Dragons', date: '2019-11-23', author: 'PolyChampions', excerpt: "Welcoming our newest challengers, led by Team Leader Cake, Co-Team Leader Hero of War, and Co-Team Leader K3IZ3N — the Dragons! Competing starting Season 6.", tags: ['Roster moves'] },
  { slug: 'strategies-and-tactics', title: 'Strategies and Tactics', date: '2019-11-05', author: 'PolyChampions', excerpt: "Want to get good at Polytopia? Read the strategy guides below or ask for coaching from one of the PolyChamps teams.", tags: ['Strategy'] },
];

const houseById = (id) => HOUSES.find(h => h.id === id || h.slug === id);

Object.assign(window, {
  HOUSES, SEASON, FAQS, NOVAS_STEPS, HALL_OF_CHAMPIONS, HISTORY_BEATS, NEWS,
  DISCORD_URL, YOUTUBE_URL, MERCH_URL, POLYTOPIA_URL, FEATURED_YT, NOVAS_YT,
  houseById,
});
