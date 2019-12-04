# id_generator
A generic ID and token generator for an organization.

## Bug

"nano": "^8.1.0",
<https://github.com/apache/couchdb-nano/pull/187>

node_modules/nano/lib/nano.d.ts

```
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
