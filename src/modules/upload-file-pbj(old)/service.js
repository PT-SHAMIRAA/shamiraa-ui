import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api"

const serviceUri = '/docs/shm-pk-pbj';

export class Service extends RestService {
  constructor(http, aggregator, config, api) {
    super(http, aggregator, config, "merchandiser");
  }

  search(info) {
    var endpoint = `${serviceUri}`;
    return super.list(endpoint, info);
  }

  getModuleConfig() {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master").client.baseUrl + 'modules?keyword=shm-PK/PBJ';
    return super.get(endpoint);
  }

  getStorageById(id) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master").client.baseUrl + 'storages/' + id;
    return super.get(endpoint);
  }

  getById(id) {
    var endpoint = '/docs/shm-pk-pbj/draft/' + id;
    return super.get(endpoint);
  }

}