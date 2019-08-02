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

        "object": {
            "defaultProperties": [
                "properties"
            ],
            "properties": {
                "options": {
                    "properties": {
                        "collapsed": {
                            "type": "boolean"
                        },
                        "disable_collapse": {
                            "type": "boolean"
                        },
                        "disable_edit_json": {
                            "type": "boolean"
                        },
                        "disable_properties": {
                            "type": "boolean"
                        },
                        "remove_empty_properties": {
                            "type": "boolean"
                        },
                        "layout": {
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
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "patternProperties": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "additionalProperties": {
                    "type": "boolean"
                },
                "required": {
                    "type": "array",
                    "uniqueItems": true,
                    "format": "table",
                    "items": {
                        "type": "string",
                        "title": "property"
                    }
                },
                "format": {
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
                    "type": "string",
                    "format": "uri"
                },
                "$schema": {
                    "type": "string",
                    "format": "uri"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 2
                },
                "description": {
                    "type": "string",
                    "propertyOrder": 4
                },

                "enum": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "propertyOrder": 50,
                    "format": "table"
                },
                "enumSource": {
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
                    "type": "string"
                },
                "oneOf": {
                    "$ref": "#/definitions/schemaArray"
                },
                "anyOf": {
                    "$ref": "#/definitions/schemaArray"
                },
                "allOf": {
                    "$ref": "#/definitions/schemaArray"
                },
                "not": {
                    "$ref": "#/definitions/schema"
                },
                "propertyOrder": {
                    "type": "number",
                    "default": 1000
                },
                "links": {
                    "type": "array",
                    "format": "table",
                    "items": {
                        "type": "object",
                        "title": "link",
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
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "type": "string"
                        }
                    }
                },
                "headerTemplate": {
                    "type": "string"
                },
                "options": {
                    "type": "object",
                    "options": {
                        "keep_oneof_values": false
                    },
                    "default": {},
                    "defaultProperties": {},
                    "properties": {
                        "enum_titles": {
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
                            "default": 1,
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
                    "$ref": "#/definitions/object"
                },
                {
                    "title": "Array",
                    "$ref": "#/definitions/array"
                },
                {
                    "title": "String",
                    "$ref": "#/definitions/string"
                },
                {
                    "title": "Number",
                    "$ref": "#/definitions/number"
                },
                {
                    "title": "Integer",
                    "$ref": "#/definitions/integer"
                },
                {
                    "title": "Boolean",
                    "$ref": "#/definitions/boolean"
                },
                {
                    "title": "Null",
                    "$ref": "#/definitions/null"
                }
            ]
        }
    },
    "title": "JSON Schema",
    "$ref": "#/definitions/schema",
    "properties": {
        "definitions": {
            "type": "object",
            "patternProperties": {
                ".*": {
                    "$ref": "#/definitions/schema"
                }
            }
        }
    }
};