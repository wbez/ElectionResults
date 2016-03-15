
from elections import AP
try:
    import json
except ImportError:
    import simplejson as json
from config import config
from ordereddict import OrderedDict
from operator import itemgetter
import locale
locale.setlocale(locale.LC_ALL, 'en_US')


client = AP(config["user"], config["pwd"])
ill = client.get_state('IL')

office_list = [
    'President',
    'U.S. Senate',
    'U.S. House',
    "State's Attorney",
    'State House',
    'State Senate',
    'County Auditor',
    'County CEO',
    'Recorder of Deeds',
    'Circuit Court Clerk',
    'Comptroller',
    'Board Chairman',
    'County Coroner',
    'Water Reclaim Unexpired',
    'Water Reclaim Comm',
    'Delegates',
]

party_list = [
    'Democrat',
    'Republican',
    'Green',
]

# mayor = ill.filter_races(name='Mayor Chicago')[0]
# Now the ill variable holds all of the AP result data

def get_results():
    # Set up the main data dict and set the percent of precincts reporting
    data = {
        'races': OrderedDict(),
    }

    # Loop through the statewide races results, and append them
    # in a format we like into the data dict's race list.
    for race in ill.races:
        results = []
        for result in race.state.results:
            is_winner = result.candidate.is_winner

            if result.vote_total_percent != None:
                vote_percent = round(float(result.vote_total_percent),1)
            else:
                vote_percent = round(float(0),1)

            if race.state.precincts_total != 0:
                precincts_pct = round(100*(race.state.precincts_reporting/float(race.state.precincts_total)),1)
            else:
                precincts_pct = race.state.precincts_total
            
            results.append({
                'name': result.candidate.name,
                'last_name': result.candidate.last_name,
                'first_name': result.candidate.first_name,
                'vote_total': locale.format("%d", result.vote_total, grouping=True),
                'is_incumbent': result.candidate.is_incumbent,
                'vote_percent': vote_percent,
                'is_winner': result.candidate.is_winner,
            })

        office_name = race.office_name
        seat_name = race.seat_name
        if office_name == "U.S. Senate":
            seat_name = ""

        seat_number = race.seat_number
        party = race.party

        if race.party == 'Dem':
            party = 'Democrat'
        elif party == 'GOP':
            party = 'Republican'
        elif party == 'Grn':
            party = 'Green'

        if office_name not in data['races']:
            data['races'][office_name] = {'office_name':office_name, 'seats':OrderedDict()}
        
        if seat_name not in data['races'][office_name]['seats']:
            data['races'][office_name]['seats'][seat_name] = {'seat_name':seat_name, 'seat_number':seat_number, 'parties':OrderedDict()} 

        if party not in data['races'][office_name]['seats'][seat_name]['parties']:
            data['races'][office_name]['seats'][seat_name]['parties'][party] = {'party': party, 'races':[]}


        data['races'][office_name]['seats'][seat_name]['parties'][party]['races'].append(OrderedDict({
            'name': race.name,
            'race_number': race.ap_race_number,
            'office_name': race.office_name,
            'office_id': race.office_id,
            'precincts_total': race.state.precincts_total,
            'precincts_reporting': race.state.precincts_reporting,
            'precincts_pct': precincts_pct,
            'race_type_name':race.race_type_name,
            'seat_name': race.seat_name,
            'seat_number': race.seat_number,
            'uncontested':race.uncontested,
            'is_referendum':race.is_referendum,
            'results': results
        }))

    return data

def add_parties(data):
    parties = ['Democrat','Republican']

    for office_name in data['races']:
        s = data['races'][office_name]['seats']
        data['races'][office_name]['seats'] = OrderedDict(sorted(s.items(),key=lambda t: int(t[1]['seat_number'])))
        for seat_name in data['races'][office_name]['seats']:
            for party_name in parties:
                if party_name not in  data['races'][office_name]['seats'][seat_name]['parties']:
                    data['races'][office_name]['seats'][seat_name]['parties'][party_name] = {'party': party_name, 'races':[]}
                    data['races'][office_name]['seats'][seat_name]['parties'][party_name]['races'].append(OrderedDict({
                        'name': 'No primary',
                        'race_number':None,
                        'office_name':None,
                        'office_id':None,
                        'precincts_total': None,
                        'precincts_reporting': None,
                        'precincts_pct': None,
                        'race_type_name':None,
                        'seat_name': None,
                        'uncontested':True,
                        'is_referendum':False,
                        'results': OrderedDict()
                    }))
                for race in data['races'][office_name]['seats'][seat_name]['parties'][party_name]['races']:
                    r = race['results']
                    race['results'] = sorted(r, key=itemgetter('vote_percent'), reverse=True)

            p = data['races'][office_name]['seats'][seat_name]['parties']
            data['races'][office_name]['seats'][seat_name]['parties'] = OrderedDict(sorted(p.items(),key=lambda t: t[0]))
            
            if 'Green' in data['races'][office_name]['seats'][seat_name]['parties']:
                data['races'][office_name]['seats'][seat_name]['parties'] = OrderedDict((key, data['races'][office_name]['seats'][seat_name]['parties'][key]) for key in party_list)

    # data['races'] = OrderedDict(sorted(data['races'].items(),key=lambda t: t[0]))

    data['races'] = OrderedDict((key, data['races'][key]) for key in office_list)
        
    return data

# print json.dumps(data)
# Then dump the data dict out as JSON
data = get_results()
data = add_parties(data)
# print data

with open('data.json', 'w') as outfile:
  json.dump(data, outfile)
