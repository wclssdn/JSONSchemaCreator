window.jsonSchema = {
    "definitions": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/definitions/schema",
                "title": "schema"
            }
        },
        "null": {
            "type": {
                "enum": [
                    "null"
                ]
            },
            "enum": {
                "items": {
                    "type": "null"
                }
            }
        },
        "boolean": {
            "properties": {
                "options": {
                    "title": "选项",
                    "properties": {
                        "enum_titles": {
                            "title": "下拉列表显示值",
                            "description": "用于下拉列表选项的显示值，第一个值为“是”的显示值，第二个为“否”的显示值",
                            "type": "array",
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "type": "string",
                                "tilte": "title"
                            }
                        }
                    }
                },
                "type": {
                    "enum": [
                        "boolean"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "boolean"
                    }
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "select",
                        "checkbox"
                    ]
                },
                "default": {
                    "type": "boolean",
                    "propertyOrder": 10
                }
            }
        },
        "string": {
            "properties": {
                "options": {
                    "properties": {
                        "input_width": {
                            "type": "string"
                        },
                        "input_height": {
                            "type": "string"
                        },
                        "expand_height": {
                            "type": "boolean"
                        },
                        "wysiwyg": {
                            "type": "boolean"
                        },
                        "enum_titles": {
                            "title": "下拉列表显示值",
                            "description": "用于下拉列表选项的显示值，顺序与可选列表一致",
                            "type": "array",
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "type": "string",
                                "tilte": "title"
                            }
                        }
                    }
                },
                "format": {
                    "type": "string",
                    "propertyOrder": 20,
                    "enum": [
                        "color",
                        "date",
                        "datetime",
                        "datetime-local",
                        "email",
                        "month",
                        "number",
                        "range",
                        "tel",
                        "text",
                        "textarea",
                        "time",
                        "url",
                        "week",
                        "actionscript",
                        "batchfile",
                        "c",
                        "c++",
                        "cpp",
                        "coffee",
                        "cshart",
                        "css",
                        "dart",
                        "django",
                        "ejs",
                        "erlang",
                        "golang",
                        "groovy",
                        "handlebars",
                        "haskell",
                        "haxe",
                        "html",
                        "ini",
                        "jade",
                        "java",
                        "javascript",
                        "json",
                        "less",
                        "lisp",
                        "lua",
                        "makefile",
                        "markdown",
                        "matlab",
                        "mysql",
                        "objectivec",
                        "pascal",
                        "perl",
                        "pgsql",
                        "php",
                        "python",
                        "r",
                        "ruby",
                        "sass",
                        "scala",
                        "scss",
                        "smarty",
                        "sql",
                        "stylus",
                        "svg",
                        "twig",
                        "vbscript",
                        "xml",
                        "yaml"
                    ]
                },
                "minLength": {
                    "type": "integer",
                    "minimum": 0,
                    "propertyOrder": 25
                },
                "maxLength": {
                    "type": "integer",
                    "minimum": 0,
                    "propertyOrder": 30
                },
                "pattern": {
                    "type": "string",
                    "format": "regex",
                    "propertyOrder": 35
                },
                "type": {
                    "enum": [
                        "string"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "string"
                    }
                },
                "default": {
                    "type": "string",
                    "propertyOrder": 10
                },
                "media": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "type": {
                            "type": "string"
                        }
                    }
                },
                "template": {
                    "type": "string"
                }
            }
        },
        "number": {
            "properties": {
                "options": {
                    "properties": {
                        "input_width": {
                            "type": "string"
                        },
                        "input_height": {
                            "type": "string"
                        },
                        "expand_height": {
                            "type": "boolean"
                        },
                        "enum_titles": {
                            "title": "下拉列表显示值",
                            "description": "用于下拉列表选项的显示值，顺序与可选列表一致",
                            "type": "array",
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "type": "string",
                                "tilte": "title"
                            }
                        }
                    }
                },
                "type": {
                    "enum": [
                        "number"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "number"
                    }
                },
                "default": {
                    "type": "number"
                },
                "minimum": {
                    "type": "number",
                    "propertyOrder": 25
                },
                "maximum": {
                    "type": "number",
                    "propertyOrder": 30
                },
                "multipleOf": {
                    "type": "number",
                    "propertyOrder": 35
                }
            }
        },
        "integer": {
            "properties": {
                "options": {
                    "properties": {
                        "input_width": {
                            "type": "string"
                        },
                        "input_height": {
                            "type": "string"
                        },
                        "expand_height": {
                            "type": "boolean"
                        },
                        "enum_titles": {
                            "title": "下拉列表显示值",
                            "description": "用于下拉列表选项的显示值，顺序与可选列表一致",
                            "type": "array",
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "type": "string",
                                "tilte": "title"
                            }
                        }
                    }
                },
                "default": {
                    "type": "integer"
                },
                "minimum": {
                    "type": "number",
                    "propertyOrder": 25
                },
                "maximum": {
                    "type": "number",
                    "propertyOrder": 30
                },
                "multipleOf": {
                    "type": "number",
                    "propertyOrder": 35
                },
                "type": {
                    "enum": [
                        "integer"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "integer"
                    }
                }
            }
        },
        "schemaBase": {
            "type": "object",
            "additionalProperties": false,
            "defaultProperties": [
                "title",
                "type"
            ],
            "options": {
                "type": "object",
                "options": {
                    "keep_oneof_values": false
                },
                "default": {},
                "properties": {
                    "enum_titles": {
                        "title": "下拉列表显示值",
                        "description": "用于下拉列表选项的显示值，顺序与可选列表一致",
                        "type": "array",
                        "uniqueItems": true,
                        "format": "table",
                        "items": {
                            "type": "string",
                            "tilte": "title"
                        }
                    },
                    "grid_columns": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 12
                    },
                    "hidden": {
                        "type": "boolean"
                    },
                    "keep_oneof_values": {
                        "type": "boolean"
                    }
                }
            },
            "properties": {
                "type": {
                    "title": "字段类型(type)",
                    "propertyOrder": 1,
                    "type": "string",
                    "options": {
                        "hidden": false
                    }
                },
                "id": {
                    "title": "ID(id)",
                    "type": "string",
                    "format": "uri"
                },
                "$schema": {
                    "title": "schema($schema)",
                    "type": "string",
                    "format": "uri"
                },
                "title": {
                    "title": "标题(title)",
                    "type": "string",
                    "propertyOrder": 2
                },
                "description": {
                    "title": "描述(description)",
                    "type": "string",
                    "propertyOrder": 4
                },
                "default": {
                    "title": "默认值(default)",
                    "propertyOrder": 10
                },
                "enum": {
                    "title": "枚举值列表(enum)",
                    "description": "取值列表，如配置则展示为选择列表",
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "propertyOrder": 50
                },
                "enumSource": {
                    "title": "枚举值来源(enumSource)",
                    "description": "在字段中使用，表示字段的enum源策略。例如可指定固定的值，也可以通过watch其他字段（一般为数组）获得其列表",
                    "oneOf": [
                        {
                            "title": "Simple Source",
                            "type": "string"
                        },
                        {
                            "title": "Complex Source",
                            "type": "array",
                            "format": "tabs",
                            "minItems": 1,
                            "items": {
                                "oneOf": [{
                                    "title": "Constant Values",
                                    "type": "array",
                                    "format": "table",
                                    "uniqueItems": true,
                                    "items": {
                                        "type": "string"
                                    }
                                }, {
                                    "title": "Source",
                                    "type": "object",
                                    "additionalProperties": false,
                                    "required": [
                                        "source"
                                    ],
                                    "defaultProperties": [
                                        "source"
                                    ],
                                    "properties": {
                                        "source": {
                                            "oneOf": [{
                                                "title": "Watched Field",
                                                "type": "string"
                                            }, {
                                                "title": "Constant Values",
                                                "type": "array",
                                                "format": "table",
                                                "minItems": 1,
                                                "items": {
                                                    "title": "value",
                                                    "type": "object",
                                                    "additionalProperties": false,
                                                    "properties": {
                                                        "value": {
                                                            "type": "string"
                                                        },
                                                        "title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }]
                                        },
                                        "slice": {
                                            "type": "array",
                                            "format": "table",
                                            "minItems": 2,
                                            "maxItems": 2,
                                            "items": {
                                                "type": "integer"
                                            }
                                        },
                                        "filter": {
                                            "type": "string"
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "value": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }]
                },
                "$ref": {
                    "title": "引用对象($ref)",
                    "description": "引用 格式：#/definitions/xxx 或者 完整url。需要通过公共对象定义定义被引用对象",
                    "type": "string"
                },
                "oneOf": {
                    "title": "只允许满足一个(oneOf)",
                    "description": "只允许满足其中一个schema",
                    "$ref": "#/definitions/schemaArray"
                },
                "anyOf": {
                    "title": "符合任何一个(anyOf)",
                    "description": "符合任何一个schema即可",
                    "$ref": "#/definitions/schemaArray"
                },
                "allOf": {
                    "title": "必须符合所有(allOf)",
                    "description": "必须符合所有schema",
                    "$ref": "#/definitions/schemaArray"
                },
                "not": {
                    "title": "不可符合(not)",
                    "description": "不可符合此schema",
                    "$ref": "#/definitions/schema"
                },
                "propertyOrder": {
                    "title": "展示顺序(propertyOrder)",
                    "type": "number",
                    "default": 1000
                },
                "links": {
                    "title": "超链接(links)",
                    "description": "可使用{{self}}表示当前字段的值",
                    "type": "array",
                    "format": "table",
                    "items": {
                        "type": "object",
                        "title": "link",
                        "additionalProperties": false,
                        "properties": {
                            "rel": {
                                "type": "string"
                            },
                            "href": {
                                "type": "string",
                                "format": "url"
                            },
                            "class": {
                                "type": "string"
                            },
                            "download": {
                                "oneOf": [
                                    {
                                        "type": "boolean"
                                    },
                                    {
                                        "type": "string"
                                    }
                                ]
                            },
                            "mediaType": {
                                "type": "string"
                            }
                        }
                    }
                },
                "watch": {
                    "title": "观察(watch)",
                    "description": "为某些字段定义临时变量，可供引用",
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "type": "string"
                        }
                    }
                },
                "headerTemplate": {
                    "title": "元素标题格式(headerTemplate)",
                    "description": "格式化元素标题，支持模板引擎。如：{{ self }}、{{ self.name }}。在数组的items对象中比较有用",
                    "type": "string"
                },
                "defaultProperties": {
                    "title": "默认展示属性列表",
                    "description": "当定义公共对象时，需要设置此项",
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "type": "string"
                    }
                }
            },
            "dependencies": {
                "enumSource": "watch"
            }
        },
        "object": {
            "defaultProperties": [
                "properties"
            ],
            "properties": {
                "options": {
                    "title": "选项(options)",
                    "description": "针对编辑器的选项",
                    "properties": {
                        "collapsed": {
                            "title": "是否折叠(collapsed)",
                            "type": "boolean"
                        },
                        "disable_collapse": {
                            "title": "禁止折叠(disable_collapse)",
                            "type": "boolean"
                        },
                        "disable_edit_json": {
                            "title": "禁止直接编辑json(disable_edit_json)",
                            "type": "boolean"
                        },
                        "disable_properties": {
                            "title": "不显示属性按钮(disable_properties)",
                            "type": "boolean"
                        },
                        "remove_empty_properties": {
                            "title": "是否移除空属性(remove_empty_properties)",
                            "type": "boolean"
                        },
                        "layout": {
                            "title": "对象展示形式(layout)",
                            "type": "string",
                            "enum": [
                                "grid"
                            ]
                        }
                    }
                },
                "type": {
                    "enum": [
                        "object"
                    ]
                },
                "default": {
                    "type": "object"
                },
                "properties": {
                    "title": "属性(properties)",
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "patternProperties": {
                    "title": "属性约束(patternProperties)",
                    "description": "key为正则表达式，值为对象，可用$ref进行对象引用",
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "additionalProperties": {
                    "title": "允许新增属性(additionalProperties)",
                    "description": "是否允许新增属性",
                    "type": "boolean"
                },
                "required": {
                    "title": "必选字段(required)",
                    "type": "array",
                    "uniqueItems": true,
                    "format": "table",
                    "items": {
                        "type": "string",
                        "title": "property"
                    }
                },
                "format": {
                    "title": "格式化(format)",
                    "descripti": "表单展示样式",
                    "type": "string",
                    "enum": [
                        "grid"
                    ]
                },
                "dependencies": {
                    "title": "相关性管理(dependencies)",
                    "description": "管理属性之间的依赖关系，依赖id、watch等属性",
                    "type": "object",
                    "additionalProperties": {
                        "type": "array",
                        "items": {
                            "title": "依赖字段",
                            "description": "当key存在时，此字段必须存在",
                            "type": "string"
                        }
                    }
                },
                "defaultProperties": {
                    "title": "默认展示属性列表(defaultProperties)",
                    "description": "当定义公共对象时，需要设置此项",
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "title": "默认显示字段名",
                        "description": "此对象中的字段名",
                        "type": "string"
                    }
                }
            }
        },
        "array": {
            "defaultProperties": [
                "items"
            ],
            "properties": {
                "options": {
                    "properties": {
                        "collapsed": {
                            "type": "boolean"
                        },
                        "disable_array_add": {
                            "type": "boolean"
                        },
                        "disable_array_delete": {
                            "type": "boolean"
                        },
                        "disable_array_delete_all_rows": {
                            "type": "boolean"
                        },
                        "disable_array_delete_last_row": {
                            "type": "boolean"
                        },
                        "disable_array_reorder": {
                            "type": "boolean"
                        },
                        "disable_collapse": {
                            "type": "boolean"
                        }
                    }
                },
                "type": {
                    "enum": [
                        "array"
                    ]
                },
                "default": {
                    "type": "array",
                    "format": "table"
                },
                "items": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/schema"
                        },
                        {
                            "type": "array",
                            "$ref": "#/definitions/schemaArray",
                            "format": "tabs"
                        }
                    ]
                },
                "uniqueItems": {
                    "type": "boolean"
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 0
                },
                "additionalItems": {
                    "$ref": "#/definitions/schema"
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "array",
                        "table",
                        "tabs",
                        "tabs-top",
                        "checkbox",
                        "select",
                        "categories"
                    ]
                }
            }
        },
        "schema": {
            "$ref": "#/definitions/schemaBase",
            "options": {
                "keep_oneof_values": false
            },
            "default": {
                "type": "object"
            },
            "oneOf": [
                {
                    "title": "String",
                    "$ref": "#/definitions/string"
                }, {
                    "title": "Number",
                    "$ref": "#/definitions/number"
                }, {
                    "title": "Integer",
                    "$ref": "#/definitions/integer"
                }, {
                    "title": "Boolean",
                    "$ref": "#/definitions/boolean"
                }, {
                    "title": "Object",
                    "$ref": "#/definitions/object"
                }, {
                    "title": "Array",
                    "$ref": "#/definitions/array"
                }, {
                    "title": "Null",
                    "$ref": "#/definitions/null"
                }, {
                    "title": "No Type",
                    "$ref": "#/definitions/schemaBase"
                }]
        }
    },
    "title": "JSON Schema",
    "$ref": "#/definitions/schema",
    "properties": {
        "definitions": {
            "title": "公共对象定义(definitions)",
            "description": "其他对象可通过$ref列进行引用",
            "type": "object",
            "patternProperties": {
                ".*": {
                    "$ref": "#/definitions/schema"
                }
            }
        }
    }
};
