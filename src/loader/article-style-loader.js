import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = "articles/subCounters";

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master");
    
    return endpoint.find(resource, { keyword: keyword })
        .then(results => {
            return results.data;
        });    
}