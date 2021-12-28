from os import SEEK_DATA
import redis
import json
import pandas as pd
import numpy as np

r = redis.Redis(
host= 'us1-upward-lioness-34844.upstash.io',
port= '34844',
password= '1ab8f665ce744567ba3c4ee12ed4c869', ssl=True)

with open('data//rawOutAPI.json', 'r') as infile:
    raw = json.load(infile)

def to_pct_odds(odds_american):
    if odds_american > 0:
        odds = 100/(odds_american+100)
    elif odds_american < 0:
        odds = abs(odds_american)/(abs(odds_american)+100)
    else:
        odds = "nan"
    return(odds)

def to_american_odds(odds_pct):
    if odds_pct > 0.5:
        odds_american = -100*odds_pct / (1-odds_pct)
    elif odds_pct < 0.5:
        odds_american = 100/odds_pct - 100
    elif odds_pct == "nan":
        odds_american = "nan"
    else:
        odds_american = +100
    return(odds_american)

def calc_odds(odds, home_team):
    markets =[]
    home_prices =[]
    homes_lines =[]
    away_prices =[]
    away_lines =[]
    for j in range(len(odds)):
        tmp1 = odds[j]['markets']
        for k in range(len(tmp1)):
            market = tmp1[k]['key']
            tmp2 = tmp1[k]['outcomes']
            for l in range(len(tmp2)):
                if home_team == tmp2[1]['name'] or tmp2[1]['name'] == "Under":
                    home_i = 1
                    home_price = tmp2[home_i]['price']
                    try:
                        home_line = tmp2[home_i]['point']
                    except:
                        home_line = 'N/A'
                    away_price = tmp2[1-home_i]['price']
                    try:
                        away_line = tmp2[1-home_i]['point']
                    except:
                        away_line = 'N/A'
                elif home_team == tmp2[0]['name'] or tmp2[0]['name'] == "Under":
                    home_i = 0
                    home_price = tmp2[home_i]['price']
                    try:
                        home_line = tmp2[home_i]['point']
                    except:
                        home_line = 'N/A'
                    away_price = tmp2[1-home_i]['price']
                    try:
                        away_line = tmp2[1-home_i]['point']
                    except:
                        away_line = 'N/A'
                else:
                    print(home_team, tmp2[1]['name'])
                    home_price = 'N/A'
                    home_line = 'N/A'
                    away_price = 'N/A'
                    away_line = 'N/A'


                #append
                markets.append(market)
                home_prices.append(home_price)
                homes_lines.append(home_line)
                away_prices.append(away_price)
                away_lines.append(away_line)

    data = {'market': markets,'home_price': home_prices,'home_line': homes_lines,'away_price': away_prices,'away_lines': away_lines}
    df = pd.DataFrame(data, columns=['market', 'home_price', 'home_line', 'away_price', 'away_line']).reset_index(drop=True)

    # h2h
    h2h_home = df[df['market']=='h2h']['home_price'].median()
    h2h_away = df[df['market']=='h2h']['away_price'].median()
    h2h_home_equal = round(to_american_odds(
        (to_pct_odds(h2h_home) + 1 - to_pct_odds(h2h_away))/2
        ))

    # spread
    try:
        spread_home_line = df[df['market']=='spreads'].mode().loc[[0],'home_line'].values[0]
        spread_home = df[(df['market']=='spreads') & (df['home_line'].values==spread_home_line)]['home_price'].median()
        spread_away_line = -spread_home_line 
        spread_away = df[(df['market']=='spreads') & (df['home_line'].values==spread_home_line)]['away_price'].median()

        spread_home_equal = round(to_american_odds(
            (to_pct_odds(spread_home)+1-to_pct_odds(spread_away))/2
            ))
    except:
        spread_home_line = "N/A"
        spread_home = "N/A"
        spread_away_line = "N/A"
        spread_away = "N/A"

        spread_home_equal = "N/A"

    # totals
    try:
        totals_line = df[df['market']=='totals'].mode().loc[[0],'home_line'].values[0]
        totals_over = df[(df['market']=='totals') & (df['home_line'].values==totals_line)]['home_price'].median()
        totals_under = df[(df['market']=='totals') & (df['home_line'].values==totals_line)]['away_price'].median()

        totals_over_equal = round(to_american_odds(
            (to_pct_odds(totals_over)+1-to_pct_odds(totals_under))/2
            ))

    except:
        totals_line = "N/A"
        totals_over = "N/A"
        totals_under = "N/A"

        totals_over_equal = "N/A"

    # odds_dict = {'h2h_home': h2h_home,'h2h_away': h2h_away,
    # 'spread_home_line': spread_home_line, 'spread_home': spread_home,'spread_away_line': spread_away_line,'spread_away': spread_away,
    # 'totals_line': totals_line, 'totals_over': totals_over,'totals_under': totals_under}
    odds_dict = {'h2h_home': h2h_home_equal,
    'spread_home_line': spread_home_line, 'spread_home': spread_home_equal,
    'totals_line': totals_line, 'totals_over': totals_over_equal}

    return(odds_dict)

data = {}
for i in range(len(raw)):
    #game data
    game_id = raw[i]['id']
    home_team = raw[i]['home_team']
    try:
        sport_title = raw[i]['sport_title']
    except:
        sport_title = raw[i]['sport_key']
    away_team = raw[i]['away_team']
    commence_time = raw[i]['commence_time']
    odd = calc_odds(raw[i]['bookmakers'],home_team)

    data[game_id] = {'game_id': game_id,'sport_title': sport_title,'home_team': home_team,'away_team': away_team,'commence_time': commence_time,'odds': odd}   

r.hset('marketodds','raw',json.dumps(data))
print(r.hgetall('marketodds'))