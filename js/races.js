(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['races'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"office\">\n    <div class=\"col-xs-12 section\" id=\""
    + alias4(((helper = (helper = helpers.race_number || (depth0 != null ? depth0.race_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"race_number","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.office_name || (depth0 != null ? depth0.office_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"office_name","hash":{},"data":data}) : helper)))
    + " <a class=\"return btn btn-primary\" href=\"#top\">Return to top</a></div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.seats : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"seat\">\n      <div class=\"col-xs-12 title\">"
    + container.escapeExpression(((helper = (helper = helpers.seat_name || (depth0 != null ? depth0.seat_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"seat_name","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.parties : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "      <div class=\"col-xs-12 col-sm-6 race\">\n        <div class=\"row party\">"
    + container.escapeExpression(((helper = (helper = helpers.party || (depth0 != null ? depth0.party : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"party","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.races : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.precincts_total : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.races : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"row table-header\">\n          <div class=\"candidate col-xs-6\">Candidate</div>\n          <div class=\"col-sm-2 col-xs-3 vote_total\">Votes</div>\n          <div class=\"col-sm-2 col-xs-3 vote_pct\">Vote %</div>\n          <div class=\"col-sm-2 hidden-xs\"></div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"row table-header\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.races : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.precincts_total : stack1), depth0))
    + "</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.first_name : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"row result "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_winner : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"candidate col-xs-6\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_winner : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_incumbent : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n          <div class=\"col-sm-2 col-xs-3 vote_total\">"
    + alias4(((helper = (helper = helpers.vote_total || (depth0 != null ? depth0.vote_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_total","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"col-sm-2 col-xs-3 vote_pct\">"
    + alias4(((helper = (helper = helpers.vote_percent || (depth0 != null ? depth0.vote_percent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_percent","hash":{},"data":data}) : helper)))
    + "%</div>\n          <div class=\"col-sm-2 hidden-xs vote_bar_container\">\n            <div class=\"vote_bar\" style=\"width:"
    + alias4(((helper = (helper = helpers.vote_percent || (depth0 != null ? depth0.vote_percent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_percent","hash":{},"data":data}) : helper)))
    + "%\"></div>\n          </div>\n        </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "winner";
},"12":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-check\"></i>";
},"14":function(container,depth0,helpers,partials,data) {
    return " <i class=\"fa fa-info-circle\"></i>";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <span class=\"precincts\">Precincts reporting: "
    + alias4(((helper = (helper = helpers.precincts_pct || (depth0 != null ? depth0.precincts_pct : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precincts_pct","hash":{},"data":data}) : helper)))
    + " percent ("
    + alias4(((helper = (helper = helpers.precincts_reporting || (depth0 != null ? depth0.precincts_reporting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precincts_reporting","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.precincts_total || (depth0 != null ? depth0.precincts_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precincts_total","hash":{},"data":data}) : helper)))
    + ")</span><br>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"precincts\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.races : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();