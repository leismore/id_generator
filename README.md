# Leismore ID Generator (id_generator)

A generic ID and token generator for any organization. It provides:

1. Authentication Token
2. Numeric ID
3. Numeric ID for 3rd-party organizations
4. Numeric ID for users
5. Short ID
6. UUID (Random)
7. UUID (Namespace)
8. UUID (Namespace) for 3rd-party organizations
9. UUID (Namespace) for users

## Donation

Buy me a coffee via [![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

## Prerequisites

1. Deploy [auth_app_self](https://github.com/leismore/auth_app_self) v2.0.2
2. Configure CouchDB according to [id_generator_couchdb](https://github.com/leismore/id_generator_couchdb) v3.1.0

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
