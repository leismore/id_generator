# id_generator

A generic ID and token generator for an organization. Provides:

1. Authentication Token
2. Numeric ID
3. Short ID
4. UUID (Random)
5. UUID (Namespace)

## Donation

Buy me a coffee via [![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

## Prerequisites

1. Deploy [auth_app_self](https://github.com/leismore/auth_app_self) v2.0.1
2. Configure CouchDB according to [id_generator_couchdb](https://github.com/leismore/id_generator_couchdb) v3.0.1

## Deployment

1. Configure `src/config.json`
2. Configure `src/corsOrigin.ts`
3. Configure `src/credential/couchdb.json`
4. Configure `src/credential/self.json`

## Test

1. Configure `test/config.json`

`npm test`

## Dependencies

* LMOS Database v2.0.0

## Copyright

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / Dec 17, 2019)
