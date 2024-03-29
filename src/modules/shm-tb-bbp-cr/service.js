import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../utils/rest-service';

//const serviceUri = '/docs/shm-tb-bbp'; 
const serviceUriTransferIn = 'transfer-in';
const serviceUriSPK = 'pkpbj/by-user'
const serviceUriSPKPending = 'pkpbj/by-user/packingRTP'
const serviceUriStorages = '/storages';

export class Service extends RestService {

    constructor(http, aggregator, config, api) {
        super(http, aggregator, config, "inventory");
    }

    search(info) {
        var endpoint = `${serviceUriTransferIn}`
        return super.list(endpoint, info);
    }

    getById(id) {
        var endpoint = `${serviceUriTransferIn}/${id}`;
        return super.get(endpoint);
    }

    create(data) {
        var endpoint = `${serviceUriTransferIn}`;
        return super.post(endpoint, data);
    }

    listPending(info) {
        var endpoint = `${serviceUriSPKPending}`;
        return super.list(endpoint, info);
    }

    getPendingSPKById(id) {
        var endpoint = `${serviceUriSPK}/${id}`;
        return super.get(endpoint);
    }

}
