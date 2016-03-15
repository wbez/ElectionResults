(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li><a class=\"\" href=\"#"
    + alias4(((helper = (helper = helpers.office_name || (depth0 != null ? depth0.office_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"office_name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.office_name || (depth0 != null ? depth0.office_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"office_name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dropdown\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Pick Office\n  <span class=\"caret\"></span></button>\n  <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.races : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n  <small> <i class=\"fa fa-info-circle\"></i> = incumbent</small> | <i class=\"fa fa-check\"></i> = winner\n</div>";
},"useData":true});
})();