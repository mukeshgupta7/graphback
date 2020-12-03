(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1329:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(u,l(l({ref:n},b),{},{components:t})):i.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=t[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),o=(t(0),t(1329)),r={id:"db-design",title:"Database Design",sidebar_label:"Database Design"},l={unversionedId:"graphql-migrations/db-design",id:"version-0.15.x/graphql-migrations/db-design",isDocsHomePage:!1,title:"Database Design",description:"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a @model annotation.",source:"@site/versioned_docs/version-0.15.x/graphql-migrations/db-design.md",slug:"/graphql-migrations/db-design",permalink:"/docs/0.15.x/graphql-migrations/db-design",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/graphql-migrations/db-design.md",version:"0.15.x",sidebar_label:"Database Design",sidebar:"version-0.15.x/docs",previous:{title:"GraphQL Migrations",permalink:"/docs/0.15.x/graphql-migrations/intro"},next:{title:"API Reference",permalink:"/docs/0.15.x/graphql-migrations/api"}},c=[{value:"Primary key",id:"primary-key",children:[]},{value:"Nullability",id:"nullability",children:[]},{value:"Foreign keys",id:"foreign-keys",children:[{value:"OneToOne",id:"onetoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]},{value:"ManyToMany",id:"manytomany",children:[]}]},{value:"Default field value",id:"default-field-value",children:[]},{value:"Custom column type",id:"custom-column-type",children:[]},{value:"Column length",id:"column-length",children:[]},{value:"Rename",id:"rename",children:[]},{value:"Ignore a field",id:"ignore-a-field",children:[]},{value:"Column name",id:"column-name",children:[]},{value:"Index",id:"index",children:[]},{value:"Unique",id:"unique",children:[]}],b={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../model/datamodel#model"}),Object(o.b)("inlineCode",{parentName:"a"},"@model"))," annotation. "),Object(o.b)("h2",{id:"primary-key"},"Primary key"),Object(o.b)("p",null,"Each type must have a primary key. You can specify one are one using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../model/annotations#id"}),Object(o.b)("inlineCode",{parentName:"a"},"@id"))," annotation on a field."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  """\n  custom primary key on a note\n  @id  \n  """\n  reference: String!\n  \n  title: String!\n}\n')),Object(o.b)("p",null,"Alternatively, you can use auto-incremented primary keys by having an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field which mus be of type ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n}\n")),Object(o.b)("h2",{id:"nullability"},"Nullability"),Object(o.b)("p",null,"GraphQL Migrations packages automatically adds a ",Object(o.b)("inlineCode",{parentName:"p"},"NOT NULL")," constraint to all non null fields defined in the business model.\nAll primary keys are not nullable, irrespective of whether they are defined as non null or not. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  """\n  custom primary key on a note\n  @id  \n  """\n  reference: String!\n  \n  title: String!\n}\n')),Object(o.b)("p",null,"The above model definition will result in the following table being created: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d note\n              Table "public.note"\n  Column   |          Type          | Modifiers \n-----------+------------------------+-----------\n reference | character varying(255) | not null\n title     | character varying(255) | not null\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (reference)\n')),Object(o.b)("h2",{id:"foreign-keys"},"Foreign keys"),Object(o.b)("p",null,"GraphQL Migrations will automatically create and index foreign keys once it sees relationships between business models."),Object(o.b)("h3",{id:"onetoone"},"OneToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This creates a relationship via a ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"profile")," table. You can customize the key tracking the relationship with the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne(key: \'user_id\')\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This maps ",Object(o.b)("inlineCode",{parentName:"p"},"Profile.user")," to ",Object(o.b)("inlineCode",{parentName:"p"},"profile.user_id")," in the database."),Object(o.b)("h3",{id:"onetomany"},"OneToMany"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This specifies a relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"Note.comments")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note")," and maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.noteId")," in the database. "),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation you can customise the database column to map to."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\', key: \'note_id\')\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.note_id")," in the database."),Object(o.b)("h3",{id:"manytomany"},"ManyToMany"),Object(o.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationship mappings to create the relationship."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany(field: \'author\')\n  """\n  notes: [NoteAuthor]\n}\n')),Object(o.b)("p",null,"Let's see all of these in an example code below ran agains the PostgreSQL database:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { migrateDB } from \'graphql-migrations\';\n\nconst schemaText = ```\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" @model """\ntype Comment {\n  """\n  @id\n  """\n  text: String\n  description: String\n}\n```;\n\nconst dbConfig = {\n    client: process.env.DB_CLIENT,\n    connection: {\n      user: process.env.DB_USER,\n      password: process.env.DB_PASSWORD,\n      database: process.env.DB_DATABASE,\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n...\n')),Object(o.b)("p",null,"This is a classic business model containing two types: ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment"),", having a ",Object(o.b)("inlineCode",{parentName:"p"},"oneToMany")," relationship between them.\nFrom the relationship definition we can deduce that a ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," can have zero or many comments, inversely a ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," can be about\none ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(o.b)("p",null,"Upon successfuly completion, the above migration will create the following layout in your database schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"              List of relations\n Schema |    Name     |   Type   |   Owner    \n--------+-------------+----------+------------\n public | comment     | table    | postgresql\n public | note        | table    | postgresql\n public | note_id_seq | sequence | postgresql\n(3 rows)\n")),Object(o.b)("p",null,"We can see notice that we have the ",Object(o.b)("inlineCode",{parentName:"p"},"note_id_seq")," but not ",Object(o.b)("inlineCode",{parentName:"p"},"comment_id_seq"),", this is because we are using auto-incremented\nprimary key for the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model and a custom primary key for the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," model. We will see how these looks like in details\nfor each model below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n              Table "public.comment"\n   Column    |          Type          | Modifiers \n-------------+------------------------+-----------\n text        | character varying(255) | not null\n description | character varying(255) | \n noteId      | integer                | \nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (text)\nForeign-key constraints:\n    "comment_noteid_foreign" FOREIGN KEY ("noteId") REFERENCES note(id)\n')),Object(o.b)("p",null,"Table details for the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type shows that we have a ",Object(o.b)("inlineCode",{parentName:"p"},"text")," as the primary key and ",Object(o.b)("inlineCode",{parentName:"p"},"noteId")," as a foreign key on the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type because of the relationship we defined. "),Object(o.b)("p",null,"Here is how the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," table looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d note\n                                   Table "public.note"\n   Column    |          Type          |                     Modifiers                     \n-------------+------------------------+---------------------------------------------------\n title       | character varying(255) | not null\n description | character varying(255) | \n id          | integer                | not null default nextval(\'note_id_seq\'::regclass)\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\nReferenced by:\n    TABLE "comment" CONSTRAINT "comment_noteid_foreign" FOREIGN KEY ("noteId") REFERENCES note(id)\n')),Object(o.b)("p",null,"GraphQL Migrations created the auto-incremented primary key by inferring the usage of ",Object(o.b)("inlineCode",{parentName:"p"},"id: ID!")," field on the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model.\nAdditionally we can see that this primary key is referenced by the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table because of the relationship."),Object(o.b)("h2",{id:"default-field-value"},"Default field value"),Object(o.b)("p",null,"You can specify a default value using the ",Object(o.b)("inlineCode",{parentName:"p"},"@default")," field annotation as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  title: String!\n  """\n  Define a default value\n  @default(value: false)\n  """\n  complete: Boolean\n}\n')),Object(o.b)("h2",{id:"custom-column-type"},"Custom column type"),Object(o.b)("p",null,"You can specify a custom type usig the ",Object(o.b)("inlineCode",{parentName:"p"},"@db")," field annotation as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define a custom json type\n  @db(type: \'json\')\n  """\n  comments: [Comment]\n}\n\ntype Comment {\n  text: String\n  description: String\n}\n')),Object(o.b)("h2",{id:"column-length"},"Column length"),Object(o.b)("p",null,"By default string columns will be created as ",Object(o.b)("inlineCode",{parentName:"p"},"varchar")," with a column length of ",Object(o.b)("inlineCode",{parentName:"p"},"255"),".\nThis can be configured to any length using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db")," field annnotation and the ",Object(o.b)("inlineCode",{parentName:"p"},"length")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define custom column length\n  @db(length: 100)\n  """\n  title: String!\n}\n')),Object(o.b)("h2",{id:"rename"},"Rename"),Object(o.b)("p",null,"Table or columns can be renamed using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db(oldNames: ['old'])")," annotation as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@db(oldNames: [\'task\'])\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db(oldNames: [\'text\'])\n  """\n  title: String!\n}\n')),Object(o.b)("p",null,"This will rename the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," to ",Object(o.b)("inlineCode",{parentName:"p"},"title")," and the table name to ",Object(o.b)("inlineCode",{parentName:"p"},"note")," without data loss. "),Object(o.b)("h2",{id:"ignore-a-field"},"Ignore a field"),Object(o.b)("p",null,"Sometimes our business model can contain more fields and some of these fields may only be there for representation purposes.\nWe can safely ignore generating columns for these fields using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db(skip: true)")," annotation on the corresponding field. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define custom column length\n  @db(skip: true)\n  """\n  title: String!\n}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This annotation is not supported by Graphback CRUD."))),Object(o.b)("h2",{id:"column-name"},"Column name"),Object(o.b)("p",null,"When working with database migration library it is possible to change individual database columns."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  @db(name: \'note_title\')\n  """\n  title: String!\n}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This annotation is not supported by Graphback CRUD.\nWhen using custom name in database we need to map it directly inside resolver or db layer."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"      // In your data provider\n      data.title = data['note_title']\n      return data;\n    }\n")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field. This annotation takes ",Object(o.b)("inlineCode",{parentName:"p"},"name")," as argument representing\nthe name of the created index. If the name argument is left out, GraphQL Migrations will create one for you using the ",Object(o.b)("inlineCode",{parentName:"p"},"<tablename>_<columnName>_index")," format."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  @index(name: "title-index")\n  """\n  text: String!\n  """\n  @index\n  """\n  description: String\n}\n')),Object(o.b)("p",null,"The above model will result in the following indexes being created"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n                                   Table "public.comment"\n   Column    |          Type          |                       Modifiers                       \n-------------+------------------------+-------------------------------------------------------\n text        | character varying(255) | not null\n description | character varying(255) | \n id          | integer                | not null default nextval(\'comment_id_seq\'::regclass)\nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (id)\n    "comment_description_index" btree (description)\n    "title-index" btree (text)\n')),Object(o.b)("h2",{id:"unique"},"Unique"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@unique")," annotation can be used to create an unique constraint on a specific field. GraphQL Migrations will create the constraint name\nusing the ",Object(o.b)("inlineCode",{parentName:"p"},"<tablename>_<columnName>_unique")," format."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  @unique\n  """\n  text: String\n}\n')),Object(o.b)("p",null,"The above model will result in the following constraint being created"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n                                   Table "public.comment"\n   Column    |          Type          |                       Modifiers                       \n-------------+------------------------+-------------------------------------------------------\n text        | character varying(255) | \n id          | integer                | not null default nextval(\'comment_id_seq\'::regclass)\nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (id)\n    "comment_text_unique" UNIQUE CONSTRAINT, btree (text)\n')))}s.isMDXComponent=!0}}]);