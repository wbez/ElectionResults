from elex import api
from collections import OrderedDict
try:
	import json
except ImportError:
	import simplejson as json
from slugify import slugify

RESULTS = '/srv/election-results/output/illinois_20161108.json'
# RESULTS = 'illinois_20161108.json'
SINGLE_RACES = '/srv/election-results/output/illinois_races_20161108.json'
# SINGLE_RACES = 'illinois_races_20161108.json'

# Setup and call the AP API.
e = api.Election(electiondate='2016-11-08',resultslevel='state',testresults=True)
# raw_races = e.get_raw_races()
# race_objs = e.get_race_objects(raw_races)

# Get lists of Python objects for each of the core models.
# ballot_measures = e.ballot_measures
# candidate_reporting_units = e.candidate_reporting_units
# candidates = e.candidates
races = e.races
races_json = []
illinois = filter(lambda race: race.statepostal=='IL', races)
# reporting_units = e.reporting_units
results = e.results

data = {
	'races': OrderedDict(),
}

office_priority = {
	"President":1,
	"U.S. Senate":2,
	"Comptroller":3,
	"Amendment":4,
	"U.S. House":5,
	"State House":6,
	"State Senate":7,
	"State's Attorney":8,
	"Recorder of Deeds":9,
	"Circuit Court Clerk":10,
	"County Auditor":11,
	"County Coroner":12,
	"Board Chairman":13,
	"County CEO":14,
	"Water Commissioner":15
}

interesting_races = {
	"16413":"Incumbent Sen. Mark Kirk (R) is attempting to hold off Democratic challenger Tammy Duckworth. The seat is rated as one of the most likely pickups for Democrats as they try to regain control of the Senate.",
	"16431":"Illinois voters are being asked to change the state constitution so money devoted to improving roads and bridges would have to go toward those projects.",
	"15268":"Judy Baar Topinka died shortly after winning reelection to Comptroller in 2014. Incumbent Leslie Munger was appointed by Gov. Bruce Rauner to take over the position, while lawmakers passed a measure saying the appointment would only last two years before having a special election.",
	"15997":"Democrat Raja Krishnamoorthi and Republican Pete DiCianni are squaring off in this open west suburban congressional seat that's being vacated by Tammy Duckworth, who's running for Illinois' U.S. Senate seat.",
	"15999":"Republican incumbent U.S. Rep. Bob Dold is facing off against former Congressman Brad Schneider for the third time in this perpetually competitive district.",
	"14901":"Chris Pfannkuche faces Kim Foxx, who defeated Democratic incumbent Anita Alvarez in a highly contested primary.",
}

def get_priority(race):
	if race in office_priority:
		return office_priority[race];
	else:
		return 3

def get_party(party):

	if party == 'GOP':
		return 'R'
	elif party in ['Yes','No']:
		return None
	else:
		return party[:1]

def get_races():
	for race in illinois:
		"""
		OrderedDict([('id', u'16412'), ('raceid', u'16412'), ('racetype', u'Primary'), ('racetypeid', u'D'), ('description', None), ('electiondate', '2016-03-15'), ('initialization_data', True), ('lastupdated', u'2016-03-18T12:29:42Z'), ('national', True), ('officeid', u'Z'), ('officename', u'State Senate'), ('party', u'Dem'), ('seatname', u'District 46'), ('seatnum', u'46'), ('statename', None), ('statepostal', u'IL'), ('test', False), ('uncontested', True)])
		"""
		# races[race.id] = race.serialize()

		interesting = False
		description = ''

		if race.officename not in data['races']:
			data['races'][race.officename] = OrderedDict()
			data['races'][race.officename]['slug'] = slugify(race.officename)
			data['races'][race.officename]['priority'] = get_priority(race.officename)

		if 'interesting' not in data['races'][race.officename]:
			data['races'][race.officename]['interesting'] = False;

		if race.raceid in interesting_races:
			interesting = True
			description = interesting_races[race.raceid]
			data['races'][race.officename]['interesting'] = True

		if race.raceid == "16431":
			race.seatname = "Transportation Lockbox"

		rs = race.serialize()
		races_json.append(rs)
		data['races'][race.officename][race.id] = rs
		data['races'][race.officename][race.id]['interesting'] = interesting
		data['races'][race.officename][race.id]['description'] = description
		results_list = []
		results_obj = filter(lambda result: result.raceid == race.id and result.statepostal=='IL', results)
		
		for result in results_obj:
			results_list.append({
				'id': result.id,
				'unique_id': result.unique_id,
				'last_name': result.last,
				'first_name': result.first,
				'ballotorder': result.ballotorder,
				'party': get_party(result.party),
				'vote_total': "{0:,}".format(result.votecount),
				'is_incumbent': result.incumbent,
				'vote_percent': "{0:.0%}".format(result.votepct).strip('%'),
				'is_winner': result.winner,
				'uncontested': result.uncontested
		})

		data['races'][race.officename][race.id]['precinctsreporting'] = "{0:,}".format(results_obj[0].precinctsreporting)
		data['races'][race.officename][race.id]['precinctsreportingpct'] = "{0:.0%}".format(results_obj[0].precinctsreportingpct)
		data['races'][race.officename][race.id]['precinctstotal'] = "{0:,}".format(results_obj[0].precinctstotal)
		data['races'][race.officename][race.id]['results'] = results_list

	data['races'] = OrderedDict(sorted(data['races'].items(), key=lambda x: x[1]['priority']))

def get_results():
	for result in results: 
		print result.party

get_races()
# get_results()

with open(RESULTS, 'w') as outfile:
	json.dump(data, outfile, indent=4, separators=(',', ': '))

with open(SINGLE_RACES, 'w') as outfile:
	json.dump(races_json, outfile, indent=4, separators=(',', ': '))