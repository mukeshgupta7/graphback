(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1315:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),s=a,u=p["".concat(b,".").concat(s)]||p[s]||m[s]||i;return n?r.a.createElement(u,l(l({ref:t},d),{},{components:n})):r.a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var d=2;d<i;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},509:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),i=(n(0),n(1315)),b={id:"annotations",title:"Annotations",sidebar_label:"Annotations"},l={unversionedId:"model/annotations",id:"version-0.15.x/model/annotations",isDocsHomePage:!1,title:"Annotations",description:"@model",source:"@site/versioned_docs/version-0.15.x/model/annotations.md",slug:"/model/annotations",permalink:"/docs/0.15.x/model/annotations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/model/annotations.md",version:"0.15.x",sidebar_label:"Annotations",sidebar:"version-0.15.x/docs",previous:{title:"Data Model",permalink:"/docs/0.15.x/model/datamodel"},next:{title:"Graphback Scalars",permalink:"/docs/0.15.x/model/scalars"}},o=[{value:"@model",id:"model",children:[]},{value:"@oneToMany",id:"onetomany",children:[]},{value:"@oneToOne",id:"onetoone",children:[]},{value:"@index",id:"index",children:[]},{value:"PostgreSQL",id:"postgresql",children:[{value:"@id",id:"id",children:[]},{value:"@index",id:"index-1",children:[]},{value:"@db",id:"db",children:[]},{value:"@default",id:"default",children:[]}]},{value:"MongoDB",id:"mongodb",children:[{value:"@index",id:"index-2",children:[]},{value:"@versioned",id:"versioned",children:[]}]}],d={rightToc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"model"},"@model"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," annotation is at the core of the Graphback's model definition syntax. It tells Graphback if a type should be considered part of the data model i.e. a table in a relational database or a collection in MongoDB."),Object(i.b)("p",null,"It also tells Graphback about what queries and mutations it needs to generate for a type. For Graphback to autogenerate type definitions and resolvers, there must be at least one type annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@model"),"."),Object(i.b)("p",null,"Let's have a look at a simple ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," data model."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("p",null,"This will generate all the API definitions, resolvers, services and data providers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n\n// highlight-start\ntype Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n\ntype Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n  deleteNote(input: MutateNoteInput!): Note\n}\n\ntype Subscription {\n  newNote(filter: NoteSubscriptionFilter): Note!\n  updatedNote(filter: NoteSubscriptionFilter): Note!\n  deletedNote(filter: NoteSubscriptionFilter): Note!\n}\n// highlight-end\n')),Object(i.b)("p",null,"You can customise what gets generated per model by adding ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#arguments"}),"arguments"),". This example tells Graphback to generate all resolvers ",Object(i.b)("em",{parentName:"p"},"except")," the ",Object(i.b)("inlineCode",{parentName:"p"},"deleteNote")," mutation and ",Object(i.b)("inlineCode",{parentName:"p"},"deletedNote"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model(\n  delete: false\n)\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"create")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"create")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(create: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"delete")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"delete")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(delete: true)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"find")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"find")," query is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(find: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"findOne")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"findOne")," query is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(findOne: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"update")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"update")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(update: true)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subCreate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"new")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subCreate: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subUpdate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether an ",Object(i.b)("inlineCode",{parentName:"td"},"updated")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subUpdate: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subDelete")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"deleted")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subDelete: false)"))))),Object(i.b)("h3",{id:"onetomany"},"@oneToMany"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@oneToMany")," is used to define a One To Many relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""model"""\ntype User {\n  id: ID!\n  """@oneToMany(field: \'author\')"""\n  posts: [Post]!\n}\n\n"""@model"""\ntype Post {\n  id:ID!\n  text: String!\n}\n')),Object(i.b)("p",null,"This will generate the an ",Object(i.b)("inlineCode",{parentName:"p"},"author")," field on the ",Object(i.b)("inlineCode",{parentName:"p"},"Post")," to model to enable bidirectional querying."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype Post {\n  id: ID!\n  text: String!\n  // highlight-next-line\n  author: User\n}\n')),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"field")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the name of resolver field on the foreign object. ",Object(i.b)("strong",{parentName:"td"},"Required"),". Accepts a string value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToMany(field: 'user'"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies the name of foreign key field on the foreign object. Accepts a string value. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<typeName>Id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToMany(field: 'user', key: 'user_key')"))))),Object(i.b)("h3",{id:"onetoone"},"@oneToOne"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@oneToOne")," is used to define a One To One relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype Character {\n  id:ID!\n  name: String!\n  """@oneToOne"""\n  cast_actor: Actor!\n}\n\n"""@model"""\ntype Actor { ... }\n')),Object(i.b)("p",null,"This example generates an ",Object(i.b)("inlineCode",{parentName:"p"},"character")," field on the ",Object(i.b)("inlineCode",{parentName:"p"},"Actor")," type with a ",Object(i.b)("inlineCode",{parentName:"p"},"Character")," resolver as well as a ",Object(i.b)("inlineCode",{parentName:"p"},"characterId")," field internally which can be used to query across relationships."),Object(i.b)("h4",{id:"arguments-2"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies the name of foreign key field on the foreign object. Accepts a string value. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<typeName>Id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToOne(key: 'user_key')"))))),Object(i.b)("h3",{id:"index"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field or a set of fields at runtime. The supported arguments are different between the different databases. See the variations for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#index-1"}),"PostgreSQL")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#index-2"}),"MongoDB"),"."),Object(i.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(i.b)("h3",{id:"id"},"@id"),Object(i.b)("p",null,"You can customise the default primary key field with the ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," annotation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """@id"""\n  username: String!\n}\n')),Object(i.b)("h3",{id:"index-1"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design#index"}),"GraphQL Migrations")," to create indexes on your PostgreSQL database tables."),Object(i.b)("p",null,"You can create one or multiple indexes per table."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index\n  """\n  name: String!\n  """\n  @index(name: \'userEmail_Idx\', type: \'hash\')\n  """\n  email: String!\n}\n')),Object(i.b)("p",null,"This creates two custom indexes on the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," table:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"user_name_index" btree (name)\n"userEmail_index" hash (email)\n')),Object(i.b)("p",null,"You can also create a composite index."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index(name: \'user_unique_index\')\n  """\n  email: String!\n  """\n  @index(name: \'user_unique_index\')\n  """\n  name: String!\n}\n')),Object(i.b)("p",null,"This creates the following composite index:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"user_unique_index" btree (email, name)\n')),Object(i.b)("h4",{id:"arguments-3"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the name of index. ",Object(i.b)("strong",{parentName:"td"},"Optional"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<tablename>_<columnname>_index"),". Accepts a string value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@index(name: 'myIndex')"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the index type. ",Object(i.b)("strong",{parentName:"td"},"Optional"),". Accepts a string value. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"btree")," (default), ",Object(i.b)("inlineCode",{parentName:"td"},"hash"),", ",Object(i.b)("inlineCode",{parentName:"td"},"gist"),", ",Object(i.b)("inlineCode",{parentName:"td"},"spgist"),", ",Object(i.b)("inlineCode",{parentName:"td"},"gin")," and ",Object(i.b)("inlineCode",{parentName:"td"},"brin")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@index(type: 'hash')"))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have relationships in your models, the relevant foreign keys are automatically indexed by Graphback, so you do not have to index them using ",Object(i.b)("inlineCode",{parentName:"p"},"@index"),". Similarly, custom primary keys marked with ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," are also automatically indexed by Graphback.")),Object(i.b)("h3",{id:"db"},"@db"),Object(i.b)("p",null,"GraphQL Migrations is a library to perform database migrations tables for PostgreSQL using a GraphQL schema. Most of the migration operations can be specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"@db")," annotation. Check out the documentation for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design"}),"GraphQL Migrations")," to learn more."),Object(i.b)("h3",{id:"default"},"@default"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@default")," annotation is used to specify a default value. This is currently only supported for PostgreSQL through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design#default-field-value"}),"GraphQL Migrations")," package."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """@default(value: false)"""\n  verified: Boolean!\n}\n')),Object(i.b)("h4",{id:"arguments-4"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the default value for the field. ",Object(i.b)("strong",{parentName:"td"},"Required"),"."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@default(value: 1)"))))),Object(i.b)("h2",{id:"mongodb"},"MongoDB"),Object(i.b)("h3",{id:"index-2"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field or a set of fields at runtime."),Object(i.b)("p",null,"You can create one or multiple indexes per collection."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  Add an index with a generated name\n  @index\n  """\n  text: String\n  """\n  Creating a custom named index\n  @index(\n    name: \'descriptionIndex\'\n  )\n  """\n  description: String\n}\n')),Object(i.b)("p",null,"You can also create a compound index with they ",Object(i.b)("inlineCode",{parentName:"p"},"key")," property (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#arguments-1"}),"Arguments")," for an explanation of how to use it)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index(\n    name: \'user_unique_index\',\n    key: {\n      email: 1,\n      name: 1\n    }\n  )\n  """\n  email: String!\n  name: String!\n}\n')),Object(i.b)("p",null,"Graphback creates the following indexes on the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," collection in the Mongo database ",Object(i.b)("inlineCode",{parentName:"p"},"users"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "v" : 2,\n  "key" : {\n    "email" : 1,\n    "name" : 1\n  },\n  "name" : "user_unique_index",\n  "ns" : "users.user"\n}\n')),Object(i.b)("h4",{id:"arguments-5"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the index\u2019s fields. For each field, specify a key-value pair in which the key is the name of the field to index and the value is either the index direction or index type. If specifying direction, specify ",Object(i.b)("strong",{parentName:"td"},"1")," for ascending or ",Object(i.b)("strong",{parentName:"td"},"-1")," for descending. For example: ",Object(i.b)("inlineCode",{parentName:"td"},"{ text: 1, description: 1 }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. A name that uniquely identifies the index."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"unique")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. Creates a unique index so that the collection will not accept insertion or update of documents where the index key value matches an existing value in the index. ",Object(i.b)("br",null),Object(i.b)("br",null)," Specify true to create a unique index. The default value is false."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have relationships in your models, the relevant foreign keys are automatically indexed by Graphback, so you do not have to index them using ",Object(i.b)("inlineCode",{parentName:"p"},"@index"),". Similarly, custom primary keys marked with ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," are also automatically indexed by Graphback.")),Object(i.b)("h3",{id:"versioned"},"@versioned"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@versioned")," annotation adds two fields to a model: ",Object(i.b)("inlineCode",{parentName:"p"},"updatedAt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"createdAt")," to track the documents's last updated and created at timestamps. The fields are then automatically managed and updated by Graphback."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@versioned\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("p",null,"This generates the following GraphQL type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@versioned\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  // highlight-start\n  createdAt: String\n  updatedAt: String\n  // highlight-end\n}\n')))}c.isMDXComponent=!0}}]);