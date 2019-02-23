{
  ABSTRACT: {
    [Function: ABSTRACT] warn: [Function: warn], types: {}
  },
  STRING:
   { [Function: STRING]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'STRING',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  CHAR:
   { [Function: CHAR]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'CHAR',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  TEXT:
   { [Function: TEXT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'TEXT',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: false } },
  NUMBER:
   { [Function: NUMBER]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'NUMBER',
     types: {} },
  TINYINT:
   { [Function: TINYINT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'TINYINT',
     types: { mysql: [Array], sqlite: [Array], mssql: [Array] } },
  SMALLINT:
   { [Function: SMALLINT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'SMALLINT',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  MEDIUMINT:
   { [Function: MEDIUMINT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'MEDIUMINT',
     types: { mysql: [Array], sqlite: [Array], mssql: false } },
  INTEGER:
   { [Function: INTEGER]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'INTEGER',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  BIGINT:
   { [Function: BIGINT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'BIGINT',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: false } },
  FLOAT:
   { [Function: FLOAT]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'FLOAT',
     types: { mysql: [Array], sqlite: [Array], mssql: [Array] } },
  TIME:
   { [Function: TIME]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'TIME',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  DATE:
   { [Function: DATE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'DATE',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  DATEONLY:
   { [Function: DATEONLY]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     key: 'DATEONLY',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  BOOLEAN:
   { [Function: BOOLEAN]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'BOOLEAN',
     parse: [Function: _sanitize],
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  NOW:
   { [Function: NOW]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'NOW',
     types: {} },
  BLOB:
   { [Function: BLOB]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'BLOB',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  DECIMAL:
   { [Function: DECIMAL]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'DECIMAL',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  NUMERIC:
   { [Function: DECIMAL]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'DECIMAL',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  UUID:
   { [Function: UUID]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'UUID',
     types:
      { postgres: [Object],
        mysql: false,
        sqlite: [Array],
        mssql: false } },
  UUIDV1:
   { [Function: UUIDV1]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'UUIDV1',
     types: {} },
  UUIDV4:
   { [Function: UUIDV4]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'UUIDV4',
     types: {} },
  HSTORE:
   { [Function: HSTORE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'HSTORE',
     types: { postgres: [Object] } },
  JSON:
   { [Function: JSONTYPE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'JSON',
     types: { postgres: [Object], mysql: [Array], sqlite: [Array] } },
  JSONB:
   { [Function: JSONB]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'JSONB',
     types: { postgres: [Object] } },
  VIRTUAL:
   { [Function: VIRTUAL]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'VIRTUAL',
     types: {} },
  ARRAY:
   { [Function: ARRAY]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'ARRAY',
     is: [Function: is],
     types: {} },
  NONE:
   { [Function: VIRTUAL]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'VIRTUAL',
     types: {} },
  ENUM:
   { [Function: ENUM]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'ENUM',
     types: { postgres: [Object], mysql: false, sqlite: false, mssql: false } },
  RANGE:
   { [Function: RANGE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'RANGE',
     types: { postgres: [Object] } },
  REAL:
   { [Function: REAL]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'REAL',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  DOUBLE:
   { [Function: DOUBLE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'DOUBLE PRECISION',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  'DOUBLE PRECISION':
   { [Function: DOUBLE]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'DOUBLE PRECISION',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: [Array],
        mssql: [Array] } },
  GEOMETRY:
   { [Function: GEOMETRY]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'GEOMETRY',
     types:
      { postgres: [Object],
        mysql: [Array],
        sqlite: false,
        mssql: false } },
  GEOGRAPHY:
   { [Function: GEOGRAPHY]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'GEOGRAPHY',
     types: { postgres: [Object] } },
  CIDR:
   { [Function: CIDR]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'CIDR',
     types: { postgres: [Object] } },
  INET:
   { [Function: INET]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'INET',
     types: { postgres: [Object] } },
  MACADDR:
   { [Function: MACADDR]
     super_: { [Function: ABSTRACT] warn: [Function: warn], types: {} },
     warn: [Function: warn],
     key: 'MACADDR',
     types: { postgres: [Object] } },
  postgres:
   { DECIMAL:
      { [Function: DECIMAL]
        super_: [Object],
        warn: [Function: warn],
        key: 'DECIMAL',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     BLOB:
      { [Function: BLOB]
        super_: [Object],
        warn: [Function: warn],
        key: 'BLOB',
        types: [Object],
        extend: [Function] },
     STRING:
      { [Function: STRING]
        super_: [Object],
        warn: [Function: warn],
        key: 'STRING',
        types: [Object],
        extend: [Function] },
     CHAR:
      { [Function: CHAR]
        super_: [Object],
        warn: [Function: warn],
        key: 'CHAR',
        types: [Object],
        extend: [Function] },
     TEXT:
      { [Function: TEXT]
        super_: [Object],
        warn: [Function: warn],
        key: 'TEXT',
        types: [Object],
        extend: [Function] },
     SMALLINT:
      { [Function: SMALLINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'SMALLINT',
        types: [Object],
        extend: [Function] },
     INTEGER:
      { [Function: INTEGER]
        super_: [Object],
        warn: [Function: warn],
        key: 'INTEGER',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     BIGINT:
      { [Function: BIGINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'BIGINT',
        types: [Object],
        extend: [Function] },
     BOOLEAN:
      { [Function: BOOLEAN]
        super_: [Object],
        warn: [Function: warn],
        key: 'BOOLEAN',
        parse: [Function: _sanitize],
        types: [Object],
        extend: [Function] },
     DATE:
      { [Function: DATE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DATE',
        types: [Object],
        extend: [Function] },
     DATEONLY:
      { [Function: DATEONLY]
        super_: [Object],
        key: 'DATEONLY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     REAL:
      { [Function: REAL]
        super_: [Object],
        warn: [Function: warn],
        key: 'REAL',
        types: [Object],
        extend: [Function] },
     'DOUBLE PRECISION':
      { [Function: DOUBLE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DOUBLE PRECISION',
        types: [Object],
        extend: [Function] },
     FLOAT:
      { [Function: FLOAT]
        super_: [Object],
        warn: [Function: warn],
        key: 'FLOAT',
        types: [Object],
        extend: [Function] },
     GEOMETRY:
      { [Function: GEOMETRY]
        super_: [Object],
        warn: [Function: warn],
        key: 'GEOMETRY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     GEOGRAPHY:
      { [Function: GEOGRAPHY]
        super_: [Object],
        warn: [Function: warn],
        key: 'GEOGRAPHY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     HSTORE:
      { [Function: HSTORE]
        super_: [Object],
        warn: [Function: warn],
        key: 'HSTORE',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     RANGE:
      { [Function: RANGE]
        super_: [Object],
        warn: [Function: warn],
        key: 'RANGE',
        types: [Object],
        oid_map: [Object],
        parse: [Function: parse],
        extend: [Function] },
     ENUM:
      { [Function: ENUM]
        super_: [Object],
        warn: [Function: warn],
        key: 'ENUM',
        types: [Object],
        parse: [Function],
        extend: [Function] } },
  mysql:
   { ENUM:
      { [Function: ENUM]
        super_: [Object],
        warn: [Function: warn],
        key: 'ENUM',
        types: [Object],
        extend: [Function: extend] },
     DATE:
      { [Function: DATE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DATE',
        types: [Object],
        parse: [Function: parse],
        extend: [Function: extend] },
     DATEONLY:
      { [Function: DATEONLY]
        super_: [Object],
        key: 'DATEONLY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function: extend] },
     UUID:
      { [Function: UUID]
        super_: [Object],
        warn: [Function: warn],
        key: 'UUID',
        types: [Object],
        extend: [Function: extend] },
     GEOMETRY:
      { [Function: GEOMETRY]
        super_: [Object],
        warn: [Function: warn],
        key: 'GEOMETRY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function: extend] },
     DECIMAL:
      { [Function: DECIMAL]
        super_: [Object],
        warn: [Function: warn],
        key: 'DECIMAL',
        types: [Object],
        extend: [Function: extend] },
     BLOB:
      { [Function: BLOB]
        super_: [Object],
        warn: [Function: warn],
        key: 'BLOB',
        types: [Object],
        parse: [Function],
        extend: [Function: extend] },
     JSON:
      { [Function: JSONTYPE]
        super_: [Object],
        warn: [Function: warn],
        key: 'JSON',
        types: [Object],
        extend: [Function: extend] } },
  sqlite:
   { DATE:
      { [Function: DATE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DATE',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     DATEONLY:
      { [Function: DATEONLY]
        super_: [Object],
        key: 'DATEONLY',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     STRING:
      { [Function: STRING]
        super_: [Object],
        warn: [Function: warn],
        key: 'STRING',
        types: [Object],
        extend: [Function] },
     CHAR:
      { [Function: CHAR]
        super_: [Object],
        warn: [Function: warn],
        key: 'CHAR',
        types: [Object],
        extend: [Function] },
     NUMBER:
      { [Function: NUMBER]
        super_: [Object],
        warn: [Function: warn],
        key: 'NUMBER',
        types: {},
        extend: [Function] },
     FLOAT:
      { [Function: FLOAT]
        super_: [Object],
        warn: [Function: warn],
        key: 'FLOAT',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     REAL:
      { [Function: REAL]
        super_: [Object],
        warn: [Function: warn],
        key: 'REAL',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     'DOUBLE PRECISION':
      { [Function: DOUBLE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DOUBLE PRECISION',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] },
     TINYINT:
      { [Function: TINYINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'TINYINT',
        types: [Object],
        extend: [Function] },
     SMALLINT:
      { [Function: SMALLINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'SMALLINT',
        types: [Object],
        extend: [Function] },
     MEDIUMINT:
      { [Function: MEDIUMINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'MEDIUMINT',
        types: [Object],
        extend: [Function] },
     INTEGER:
      { [Function: INTEGER]
        super_: [Object],
        warn: [Function: warn],
        key: 'INTEGER',
        types: [Object],
        extend: [Function] },
     BIGINT:
      { [Function: BIGINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'BIGINT',
        types: [Object],
        extend: [Function] },
     TEXT:
      { [Function: TEXT]
        super_: [Object],
        warn: [Function: warn],
        key: 'TEXT',
        types: [Object],
        extend: [Function] },
     ENUM:
      { [Function: ENUM]
        super_: [Object],
        warn: [Function: warn],
        key: 'ENUM',
        types: [Object],
        extend: [Function] },
     JSON:
      { [Function: JSONTYPE]
        super_: [Object],
        warn: [Function: warn],
        key: 'JSON',
        types: [Object],
        parse: [Function: parse],
        extend: [Function] } },
  mssql:
   { BLOB:
      { [Function: BLOB]
        super_: [Object],
        warn: [Function: warn],
        key: 'BLOB',
        types: [Object],
        extend: [Function: extend] },
     BOOLEAN:
      { [Function: BOOLEAN]
        super_: [Object],
        warn: [Function: warn],
        key: 'BOOLEAN',
        parse: [Function: _sanitize],
        types: [Object],
        extend: [Function: extend] },
     ENUM:
      { [Function: ENUM]
        super_: [Object],
        warn: [Function: warn],
        key: 'ENUM',
        types: [Object],
        extend: [Function: extend] },
     STRING:
      { [Function: STRING]
        super_: [Object],
        warn: [Function: warn],
        key: 'STRING',
        types: [Object],
        extend: [Function: extend] },
     UUID:
      { [Function: UUID]
        super_: [Object],
        warn: [Function: warn],
        key: 'UUID',
        types: [Object],
        extend: [Function: extend] },
     DATE:
      { [Function: DATE]
        super_: [Object],
        warn: [Function: warn],
        key: 'DATE',
        types: [Object],
        extend: [Function: extend] },
     DATEONLY:
      { [Function: DATEONLY]
        super_: [Object],
        key: 'DATEONLY',
        types: [Object],
        parse: [Function],
        extend: [Function: extend] },
     NOW:
      { [Function: NOW]
        super_: [Object],
        warn: [Function: warn],
        key: 'NOW',
        types: {},
        extend: [Function: extend] },
     TINYINT:
      { [Function: TINYINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'TINYINT',
        types: [Object],
        extend: [Function: extend] },
     SMALLINT:
      { [Function: SMALLINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'SMALLINT',
        types: [Object],
        extend: [Function: extend] },
     INTEGER:
      { [Function: INTEGER]
        super_: [Object],
        warn: [Function: warn],
        key: 'INTEGER',
        types: [Object],
        extend: [Function: extend] },
     BIGINT:
      { [Function: BIGINT]
        super_: [Object],
        warn: [Function: warn],
        key: 'BIGINT',
        types: [Object],
        extend: [Function: extend] },
     REAL:
      { [Function: REAL]
        super_: [Object],
        warn: [Function: warn],
        key: 'REAL',
        types: [Object],
        extend: [Function: extend] },
     FLOAT:
      { [Function: FLOAT]
        super_: [Object],
        warn: [Function: warn],
        key: 'FLOAT',
        types: [Object],
        extend: [Function: extend] },
     TEXT:
      { [Function: TEXT]
        super_: [Object],
        warn: [Function: warn],
        key: 'TEXT',
        types: [Object],
        extend: [Function: extend] } }
}
