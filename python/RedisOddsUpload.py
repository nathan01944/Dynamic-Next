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
    #rawpd = pd.read_json(infile)

#odds1 = rawpd.loc[[0],'bookmakers']
#df = pd.concat({k: pd.DataFrame(v) for k, v in rawpd.items()}, axis=1)

odds1 = raw[0]['bookmakers']
tmp1 = odds1[0]['markets']
tmp2 = tmp1[1]['outcomes']
#print(tmp2[1])

def to_pct_odds(odds_american):
    if odds_american > 0:
        odds = 100/(odds_american+100)
    elif odds_american < 0:
        odds = odds_american/(odds_american+100)
    else:
        odds = "nan"
    return(odds)

def calc_odds(odds):
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
                home_price = tmp2[0]['price']
                try:
                    home_line = tmp2[0]['point']
                except:
                    home_line = 'N/A'
                away_price = tmp2[1]['price']
                try:
                    away_line = tmp2[1]['point']
                except:
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

    # spread
    try:
        spread_home_line = df[df['market']=='spreads'].mode().loc[[0],'home_line'].values[0]
        spread_home = df[(df['market']=='spreads') & (df['home_line'].values==spread_home_line)]['home_price'].median()
        spread_away_line = -spread_home_line 
        spread_away = df[(df['market']=='spreads') & (df['home_line'].values==spread_home_line)]['away_price'].median()
    except:
        spread_home_line = "N/A"
        spread_home = "N/A"
        spread_away_line = "N/A"
        spread_away = "N/A"

    # totals
    try:
        totals_line = df[df['market']=='totals'].mode().loc[[0],'home_line'].values[0]
        totals_over = df[(df['market']=='totals') & (df['home_line'].values==totals_line)]['home_price'].median()
        totals_under = df[(df['market']=='totals') & (df['home_line'].values==totals_line)]['away_price'].median()
    except:
        totals_line = "N/A"
        totals_over = "N/A"
        totals_under = "N/A"

    odds_dict = {'h2h_home': h2h_home,'h2h_away': h2h_away,
    'spread_home_line': spread_home_line, 'spread_home': spread_home,'spread_away_line': spread_away_line,'spread_away': spread_away,
    'totals_line': totals_line, 'totals_over': totals_over,'totals_under': totals_under}

    return(odds_dict)

#print(json.dumps(calc_odds(raw[4]['bookmakers'])))
data = {}
#for i in range(len(raw)):
for i in range(2):
    #game data
    game_id = raw[i]['id']
    home_team = raw[i]['home_team']
    try:
        sport_title = raw[i]['sport_title']
    except:
        sport_title = raw[i]['sport_key']
    away_team = raw[i]['away_team']
    commence_time = raw[i]['commence_time']
    odd = calc_odds(raw[i]['bookmakers'])

    data[game_id] = {'game_id': game_id,'sport_title': sport_title,'home_team': home_team,'away_team': away_team,'commence_time': commence_time,'odds': odd}   

r.hset('odds','raw',json.dumps(data))
print(r.hgetall('odds'))