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


@types/uuid": "^3.4.6
<https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41061>

node_modules/@types/uuid/index.d.ts

import { v1, v4, v5 } from './interfaces';

interface UuidStatic {
    v1: v1;
    v4: v4;
    v5: v5;
}

declare const uuid: UuidStatic & v4;
export = uuid;
