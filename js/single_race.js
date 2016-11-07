(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['single_race'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"office\" data-interesting=\""
    + alias4(((helper = (helper = helpers.interesting || (depth0 != null ? depth0.interesting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"interesting","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"col-xs-12 section\" id=\""
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.officename || (depth0 != null ? depth0.officename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officename","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"seat\" data-uncontested=\""
    + alias4(((helper = (helper = helpers.uncontested || (depth0 != null ? depth0.uncontested : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uncontested","hash":{},"data":data}) : helper)))
    + "\" data-interesting=\""
    + alias4(((helper = (helper = helpers.interesting || (depth0 != null ? depth0.interesting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"interesting","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.seatname : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.interesting : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.first_name : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"col-xs-12 title\">"
    + container.escapeExpression(((helper = (helper = helpers.seatname || (depth0 != null ? depth0.seatname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"seatname","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"col-xs-12 description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"row result "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_winner : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"candidate col-xs-6 col-sm-4\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_incumbent : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <span class=\""
    + alias4(((helper = (helper = helpers.party || (depth0 != null ? depth0.party : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"party","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.party || (depth0 != null ? depth0.party : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"party","hash":{},"data":data}) : helper)))
    + "</span> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_winner : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n          <div class=\"col-sm-2 col-xs-3 vote_total\">"
    + alias4(((helper = (helper = helpers.vote_total || (depth0 != null ? depth0.vote_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_total","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"col-sm-2 col-xs-3 vote_pct\">"
    + alias4(((helper = (helper = helpers.vote_percent || (depth0 != null ? depth0.vote_percent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_percent","hash":{},"data":data}) : helper)))
    + "%</div>\n          <div class=\"col-sm-4 hidden-xs vote_bar_container\">\n            <div class=\"vote_bar\" style=\"width:"
    + alias4(((helper = (helper = helpers.vote_percent || (depth0 != null ? depth0.vote_percent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_percent","hash":{},"data":data}) : helper)))
    + "%\"></div>\n          </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "winner";
},"10":function(container,depth0,helpers,partials,data) {
    return "*";
},"12":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-check\"></i>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <span class=\"precincts\">Precincts reporting: "
    + alias4(((helper = (helper = helpers.precinctsreportingpct || (depth0 != null ? depth0.precinctsreportingpct : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precinctsreportingpct","hash":{},"data":data}) : helper)))
    + " percent ("
    + alias4(((helper = (helper = helpers.precinctsreporting || (depth0 != null ? depth0.precinctsreporting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precinctsreporting","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.precinctstotal || (depth0 != null ? depth0.precinctstotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precinctstotal","hash":{},"data":data}) : helper)))
    + ")</span><br>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"precincts\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();