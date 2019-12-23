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

1. Deploy [auth_app_self](https://github.com/leismore/auth_app_self) v1.0.2
2. Configure CouchDB according to [id_generator_couchdb](https://github.com/leismore/id_generator_couchdb) v1.0.0

## Deployment

1. Configure `src/config.json`
2. Configure `src/corsOrigin.ts`
3. Configure `src/credential/couchdb.json`

## Dependencies

* LMOS Database v0.5.0

## Dependency Bug

### Nano: 8.1.0

[Pull Request on GitHub](https://github.com/apache/couchdb-nano/pull/187)

The return value of `DocumentScope.atomic` method should be a user-customized structure instead of `OkResponse`.

**Solution**

Path: `node_modules/nano/lib/nano.d.ts`. Find `atomic` definition and replace it with:

```typescript
// http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
atomic<R>(
  designname: string,
  updatename: string,
  docname: string,
  callback?: Callback<R>
): Promise<R>;
// http://docs.couchdb.org/en/latest/api/ddoc/render.html#put--db-_design-ddoc-_update-func-docid
atomic<R>(
  designname: string,
  updatename: string,
  docname: string,
  body: any,
  callback?: Callback<R>
): Promise<R>;
```

## Copyright

MIT License

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / Dec 17, 2019)
