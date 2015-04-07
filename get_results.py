
from elections import AP
try:
    import json
except ImportError:
    import simplejson as json
from config import config
from ordereddict import OrderedDict
import locale
locale.setlocale(locale.LC_ALL, 'en_US')


client = AP(config["user"], config["pwd"])
ill = client.get_state('IL')
mayor = ill.filter_races(name='Mayor Chicago')[0]
# Now the ill variable holds all of the AP result data

# Set up the main data dict and set the percent of precincts reporting
data = {
    'races': [],
}

# Loop through the statewide races results, and append them
# in a format we like into the data dict's race list.
for race in ill.races:
    print race.state.results
    results = []
    for result in race.state.results:
        print result.vote_total_percent
        if result.vote_total_percent != None:
            vote_percent = round(float(result.vote_total_percent),2)
        else:
            vote_percent = round(float(0),2)
        
        results.append({
            'name': result.candidate.name,
            'last_name': result.candidate.last_name,
            'first_name': result.candidate.first_name,
            'vote_total': locale.format("%d", result.vote_total, grouping=True),
            'is_incumbent': result.candidate.is_incumbent,
            'vote_percent': vote_percent,
            'is_winner': result.candidate.is_winner,
        })

    data['races'].append(OrderedDict({
        'name': race.name,
        'office_name': race.office_name,
        'precincts_total': race.state.precincts_total,
        'precincts_reporting': race.state.precincts_reporting,
        'precincts_pct': 100*(race.state.precincts_reporting/float(race.state.precincts_total)),
        'results': results
    }))

    # Loop through the statewide candidate results, and append them
    # in a format we like into the data dict's candidate list.

print json.dumps(data)
# Then dump the data dict out as JSON
# with open('data.json', 'w') as outfile:
#   json.dump(data, outfile)