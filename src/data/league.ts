import data from './league.json';

export interface LeagueConfig {
  season: {
    current: number;
    label: string;
    since: string;
  };
  social: {
    discord: string;
    youtube: string;
    merch: string;
    contact: string;
  };
  houses: {
    order: string[];
  };
}

export const league: LeagueConfig = data as LeagueConfig;
export const houseOrder: string[] = data.houses.order;
export const season = data.season;
export const social = data.social;
