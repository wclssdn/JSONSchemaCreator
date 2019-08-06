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
            "properties": {
                "type": {
                    "enum": [
                        "null"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "null"
                    }
                },
                "default": {
                    "type": "null",
                    "propertyOrder": 10
                }
            }
        },
        "boolean": {
            "properties": {
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
                    "title": "展示形式(format)",
                    "description": "选择列表或者复选框",
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
                        }
                    }
                },
                "format": {
                    "title": "展示形式(format)",
                    "description": "例如日期、数字、颜色、富文本编辑器、markdown等等（部分需要额外组件支持）",
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
                    "title": "最小长度(minLength)",
                    "description": "包含",
                    "type": "integer",
                    "minimum": 0,
                    "propertyOrder": 25
                },
                "maxLength": {
                    "title": "最大长度(maxLength)",
                    "description": "包含",
                    "type": "integer",
                    "minimum": 0,
                    "propertyOrder": 30
                },
                "pattern": {
                    "title": "正则表达式约束(pattern)",
                    "description": "值需符合此正则表达式",
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
                    "title": "媒体类型(media)",
                    "description": "如：text/html",
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "type": {
                            "type": "string"
                        }
                    }
                },
                "template": {
                    "title": "值模板(template)",
                    "description": "一般用于展示其他被watch的属性",
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
                    "title": "最小值(minimum)",
                    "description": "包含",
                    "type": "number",
                    "propertyOrder": 25
                },
                "maximum": {
                    "title": "最大值(maximum)",
                    "description": "包含",
                    "type": "number",
                    "propertyOrder": 30
                },
                "multipleOf": {
                    "title": "可整除此值(multipleOf)",
                    "description": "填写的值需能整除此值",
                    "type": "number",
                    "propertyOrder": 35
                },
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
                        }
                    }
                },
                "default": {
                    "type": "integer"
                },
                "minimum": {
                    "title": "最小值(minimum)",
                    "description": "包含",
                    "type": "number",
                    "propertyOrder": 25
                },
                "maximum": {
                    "title": "最大值(maximum)",
                    "description": "包含",
                    "type": "number",
                    "propertyOrder": 30
                },
                "multipleOf": {
                    "title": "可整除此值(multipleOf)",
                    "description": "填写的值需能整除此值",
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

        "object": {
            "defaultProperties": [
                "properties"
            ],
            "properties": {
                "options": {
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
                    "description": "此对象的属性列表",
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
                    "title": "新增属性开关(additionalProperties)",
                    "description": "是否允许新增属性",
                    "type": "boolean"
                },
                "defaultProperties": {
                    "title": "默认展示属性列表(defaultProperties)",
                    "description": "可设置哪些属性默认展示，未展示的需要通过点击属性按钮勾选后才展示",
                    "type": "array",
                    "format": "table",
                    "uniqueItems": true,
                    "items": {
                        "title": "属性名",
                        "description": "仅当前对象的属性",
                        "type": "string"
                    }
                },
                "required": {
                    "title": "必选字段列表(required)",
                    "type": "array",
                    "uniqueItems": true,
                    "format": "table",
                    "items": {
                        "type": "string",
                        "title": "property"
                    }
                },
                "format": {
                    "title": "展示样式(format)",
                    "description": "默认每行一个属性。grid表示网格方式展示，每行可能有多个属性，适合属性多，且值简短的情况",
                    "type": "string",
                    "enum": [
                        "grid"
                    ]
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
                        "enable_array_copy": {
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
                    "format": "tabs-top"
                },
                "items": {
                    "title": "数组元素列表(items)",
                    "description": "设定数组内元素的格式",
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
                    "title": "数组元素是否要求唯一(uniqueItems)",
                    "description": "如果要求唯一，则数组内元素不能重复",
                    "type": "boolean"
                },
                "minItems": {
                    "title": "数组最少元素个数(minItems)",
                    "type": "integer",
                    "minimum": 0
                },
                "maxItems": {
                    "title": "数组最多元素个数(maxItems)",
                    "type": "integer",
                    "minimum": 0
                },
                "additionalItems": {
                    "$ref": "#/definitions/schema"
                },
                "format": {
                    "title": "展示形式(format)",
                    "description": "表单中此数组的编辑形式",
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

        "schemaBase": {
            "type": "object",
            "defaultProperties": [
                "title",
                "type"
            ],
            "required": ["type"],
            "properties": {
                "type": {
                    "propertyOrder": 1,
                    "type": "string",
                    "options": {
                        "hidden": true
                    }
                },
                "id": {
                    "title": "此schema的唯一标识(id)",
                    "type": "string",
                    "format": "uri"
                },
                "$schema": {
                    "title": "JSON Schema规范($schema)",
                    "description": "非顶级不要使用",
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
                    "description": "表单默认填写的值"
                },
                "enum": {
                    "title": "枚举值列表(enum)",
                    "description": "只可选择此列表中的值",
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "propertyOrder": 50,
                    "format": "table"
                },
                "enumSource": {
                    "title": "枚举值来源定义(enumSource)",
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
                                "oneOf": [
                                    {
                                        "title": "Constant Values",
                                        "type": "array",
                                        "format": "table",
                                        "uniqueItems": true,
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    {
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
                                                "oneOf": [
                                                    {
                                                        "title": "Watched Field",
                                                        "type": "string"
                                                    },
                                                    {
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
                                                    }
                                                ]
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
                                    }
                                ]
                            }
                        }
                    ]
                },
                "$ref": {
                    "title": "schema引用($ref)",
                    "description": "可根据id、路径引用其他schema",
                    "type": "string"
                },
                "oneOf": {
                    "title": "只允许符合一个(oneOf)",
                    "description": "只允许符合其中一个schema",
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
                    "description":"小的在前，大的在后",
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
                        "title": "超链接",
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
                "options": {
                    "title": "编辑器选项(options)",
                    "type": "object",
                    "options": {
                        "keep_oneof_values": false
                    },
                    "default": {},
                    "defaultProperties": {},
                    "properties": {
                        "enum_titles": {
                            "title": "枚举值列表展示文案(enum_titles)",
                            "description": "与enum配合使用，一一对应",
                            "type": "array",
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "type": "string",
                                "tilte": "title"
                            }
                        },
                        "grid_columns": {
                            "title": "网格展示列数(grid_columns)",
                            "description": "当展示形式为网格(grid)是生效",
                            "type": "integer",
                            "default": 1,
                            "minimum": 1,
                            "maximum": 12
                        },
                        "hidden": {
                            "title": "是否隐藏(hidden)",
                            "description": "一般无需隐藏，隐藏后相当于没有",
                            "type": "boolean"
                        },
                        "keep_oneof_values": {
                            "title": "多种类型切换时保持已填写数据(keep_oneof_values)",
                            "description": "当schema指定的是oneOf时，切换多类型时，保留已填写在表单中的数据（数据类型过于复杂时慎用）",
                            "type": "boolean"
                        }
                    }
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
                    "title": "Object",
                    "additionalProperties": false,
                    "$ref": "#/definitions/object"
                },
                {
                    "title": "Array",
                    "additionalProperties": false,
                    "$ref": "#/definitions/array"
                },
                {
                    "title": "String",
                    "additionalProperties": false,
                    "$ref": "#/definitions/string"
                },
                {
                    "title": "Number",
                    "additionalProperties": false,
                    "$ref": "#/definitions/number"
                },
                {
                    "title": "Integer",
                    "additionalProperties": false,
                    "$ref": "#/definitions/integer"
                },
                {
                    "title": "Boolean",
                    "additionalProperties": false,
                    "$ref": "#/definitions/boolean"
                },
                {
                    "title": "Null",
                    "additionalProperties": false,
                    "$ref": "#/definitions/null"
                }
            ]
        }
    },
    "title": "JSON Schema",
    "$ref": "#/definitions/schema",
    "properties": {
        "definitions": {
            "title": "schema定义(definitions)",
            "description": "仅在顶层使用，可使用$ref进行引用，适用于可复用对象",
            "type": "object",
            "patternProperties": {
                ".*": {
                    "$ref": "#/definitions/schema"
                }
            }
        }
    }
};
