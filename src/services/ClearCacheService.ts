import {Service} from '../types/Service';
import Cache from '../helpers/Cache';

export default class ClearCacheService implements Service {
    private cache = new Cache();

    public init() {
        this.cache.clearInvalid();
        window.setInterval(this.cache.clearInvalid.bind(this.cache), 60 * 1000);
    }
}
