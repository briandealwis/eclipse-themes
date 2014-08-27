EPFParser = (function() {
	/*
	 * Generated by PEG.js 0.8.0.
	 * 
	 * http://pegjs.majda.cz/
	 */

	function peg$subclass(child, parent) {
		function ctor() {
			this.constructor = child;
		}
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();
	}

	function SyntaxError(message, expected, found, offset, line, column) {
		this.message = message;
		this.expected = expected;
		this.found = found;
		this.offset = offset;
		this.line = line;
		this.column = column;

		this.name = "SyntaxError";
	}

	peg$subclass(SyntaxError, Error);

	function parse(input) {
		var options = arguments.length > 1 ? arguments[1] : {},

		peg$FAILED = {},

		peg$startRuleFunctions = {
			entries : peg$parseentries
		}, peg$startRuleFunction = peg$parseentries,

		peg$c0 = peg$FAILED, peg$c1 = [], peg$c2 = "\n", peg$c3 = {
			type : "literal",
			value : "\n",
			description : "\"\\n\""
		}, peg$c4 = function(each) {
			return each;
		}, peg$c5 = function(first, trail) {
			return [ first ].concat(trail);
		}, peg$c6 = "=", peg$c7 = {
			type : "literal",
			value : "=",
			description : "\"=\""
		}, peg$c8 = null, peg$c9 = function(key, value) {
			var result = {
				"key" : key,
				"value" : value
			}
			if (comments.length > 0) {
				result["comments"] = comments;
				comments = [];
			}
			return result;
		}, peg$c10 = "#", peg$c11 = {
			type : "literal",
			value : "#",
			description : "\"#\""
		}, peg$c12 = /^[^\n]/, peg$c13 = {
			type : "class",
			value : "[^\\n]",
			description : "[^\\n]"
		}, peg$c14 = function(comment) {
			comments.push(comment.join("").trim());
			return comment.join("").trim()
		}, peg$c15 = function(id) {
			return id.join("")
		}, peg$c16 = /^[a-zA-Z_]/, peg$c17 = {
			type : "class",
			value : "[a-zA-Z_]",
			description : "[a-zA-Z_]"
		}, peg$c18 = /^[ \t]/, peg$c19 = {
			type : "class",
			value : "[ \\t]",
			description : "[ \\t]"
		}, peg$c20 = /^[0-9]/, peg$c21 = {
			type : "class",
			value : "[0-9]",
			description : "[0-9]"
		}, peg$c22 = ".", peg$c23 = {
			type : "literal",
			value : ".",
			description : "\".\""
		}, peg$c24 = function(pre, post) {
			var exp = pre.join("");
			if (post)
				exp = exp + "." + post[1].join("");
			return parseFloat(exp);
		}, peg$c25 = function(digits) {
			return parseInt(digits.join(""));
		}, peg$c26 = function(value) {
			return {
				type : "Integer",
				"value" : value
			};
		}, peg$c27 = ",", peg$c28 = {
			type : "literal",
			value : ",",
			description : "\",\""
		}, peg$c29 = function(h, s, b) {
			return {
				"type" : "HSB",
				"hue" : h,
				"saturation" : s,
				"brightness" : b
			}
		}, peg$c30 = function(h, s, b, p) {
			return {
				"hue" : h,
				"saturation" : s,
				"brightness" : b,
				"percent" : p
			}
		}, peg$c31 = "|", peg$c32 = {
			type : "literal",
			value : "|",
			description : "\"|\""
		}, peg$c33 = function(first, trail) {
			return {
				type : "gradient",
				colorStops : [ first ].concat(trail)
			}
		}, peg$c34 = "true", peg$c35 = {
			type : "literal",
			value : "true",
			description : "\"true\""
		}, peg$c36 = function() {
			return {
				type : "Boolean",
				value : true
			}
		}, peg$c37 = function(first, trail) {
			return {
				type : "IntArray",
				values : [ first ].concat(trail)
			};
		},

		peg$currPos = 0, peg$reportedPos = 0, peg$cachedPos = 0, peg$cachedPosDetails = {
			line : 1,
			column : 1,
			seenCR : false
		}, peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0,

		peg$result;

		if ("startRule" in options) {
			if (!(options.startRule in peg$startRuleFunctions)) {
				throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
			}

			peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
		}

		function text() {
			return input.substring(peg$reportedPos, peg$currPos);
		}

		function offset() {
			return peg$reportedPos;
		}

		function line() {
			return peg$computePosDetails(peg$reportedPos).line;
		}

		function column() {
			return peg$computePosDetails(peg$reportedPos).column;
		}

		function expected(description) {
			throw peg$buildException(null, [ {
				type : "other",
				description : description
			} ], peg$reportedPos);
		}

		function error(message) {
			throw peg$buildException(message, null, peg$reportedPos);
		}

		function peg$computePosDetails(pos) {
			function advance(details, startPos, endPos) {
				var p, ch;

				for (p = startPos; p < endPos; p++) {
					ch = input.charAt(p);
					if (ch === "\n") {
						if (!details.seenCR) {
							details.line++;
						}
						details.column = 1;
						details.seenCR = false;
					} else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
						details.line++;
						details.column = 1;
						details.seenCR = true;
					} else {
						details.column++;
						details.seenCR = false;
					}
				}
			}

			if (peg$cachedPos !== pos) {
				if (peg$cachedPos > pos) {
					peg$cachedPos = 0;
					peg$cachedPosDetails = {
						line : 1,
						column : 1,
						seenCR : false
					};
				}
				advance(peg$cachedPosDetails, peg$cachedPos, pos);
				peg$cachedPos = pos;
			}

			return peg$cachedPosDetails;
		}

		function peg$fail(expected) {
			if (peg$currPos < peg$maxFailPos) {
				return;
			}

			if (peg$currPos > peg$maxFailPos) {
				peg$maxFailPos = peg$currPos;
				peg$maxFailExpected = [];
			}

			peg$maxFailExpected.push(expected);
		}

		function peg$buildException(message, expected, pos) {
			function cleanupExpected(expected) {
				var i = 1;

				expected.sort(function(a, b) {
					if (a.description < b.description) {
						return -1;
					} else if (a.description > b.description) {
						return 1;
					} else {
						return 0;
					}
				});

				while (i < expected.length) {
					if (expected[i - 1] === expected[i]) {
						expected.splice(i, 1);
					} else {
						i++;
					}
				}
			}

			function buildMessage(expected, found) {
				function stringEscape(s) {
					function hex(ch) {
						return ch.charCodeAt(0).toString(16).toUpperCase();
					}

					return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g,
							'\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) {
						return '\\x0' + hex(ch);
					}).replace(/[\x10-\x1F\x80-\xFF]/g, function(ch) {
						return '\\x' + hex(ch);
					}).replace(/[\u0180-\u0FFF]/g, function(ch) {
						return '\\u0' + hex(ch);
					}).replace(/[\u1080-\uFFFF]/g, function(ch) {
						return '\\u' + hex(ch);
					});
				}

				var expectedDescs = new Array(expected.length), expectedDesc, foundDesc, i;

				for (i = 0; i < expected.length; i++) {
					expectedDescs[i] = expected[i].description;
				}

				expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];

				foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

				return "Expected " + expectedDesc + " but " + foundDesc + " found.";
			}

			var posDetails = peg$computePosDetails(pos), found = pos < input.length ? input.charAt(pos) : null;

			if (expected !== null) {
				cleanupExpected(expected);
			}

			return new SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, pos, posDetails.line, posDetails.column);
		}

		function peg$parseentries() {
			var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

			s0 = peg$currPos;
			s1 = [];
			s2 = peg$currPos;
			s3 = [];
			s4 = peg$parseWS();
			while (s4 !== peg$FAILED) {
				s3.push(s4);
				s4 = peg$parseWS();
			}
			if (s3 !== peg$FAILED) {
				if (input.charCodeAt(peg$currPos) === 10) {
					s4 = peg$c2;
					peg$currPos++;
				} else {
					s4 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c3);
					}
				}
				if (s4 !== peg$FAILED) {
					s5 = [];
					s6 = peg$parseWS();
					while (s6 !== peg$FAILED) {
						s5.push(s6);
						s6 = peg$parseWS();
					}
					if (s5 !== peg$FAILED) {
						s3 = [ s3, s4, s5 ];
						s2 = s3;
					} else {
						peg$currPos = s2;
						s2 = peg$c0;
					}
				} else {
					peg$currPos = s2;
					s2 = peg$c0;
				}
			} else {
				peg$currPos = s2;
				s2 = peg$c0;
			}
			if (s2 === peg$FAILED) {
				s2 = peg$parsecomment();
			}
			while (s2 !== peg$FAILED) {
				s1.push(s2);
				s2 = peg$currPos;
				s3 = [];
				s4 = peg$parseWS();
				while (s4 !== peg$FAILED) {
					s3.push(s4);
					s4 = peg$parseWS();
				}
				if (s3 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 10) {
						s4 = peg$c2;
						peg$currPos++;
					} else {
						s4 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c3);
						}
					}
					if (s4 !== peg$FAILED) {
						s5 = [];
						s6 = peg$parseWS();
						while (s6 !== peg$FAILED) {
							s5.push(s6);
							s6 = peg$parseWS();
						}
						if (s5 !== peg$FAILED) {
							s3 = [ s3, s4, s5 ];
							s2 = s3;
						} else {
							peg$currPos = s2;
							s2 = peg$c0;
						}
					} else {
						peg$currPos = s2;
						s2 = peg$c0;
					}
				} else {
					peg$currPos = s2;
					s2 = peg$c0;
				}
				if (s2 === peg$FAILED) {
					s2 = peg$parsecomment();
				}
			}
			if (s1 !== peg$FAILED) {
				s2 = peg$parseentry();
				if (s2 !== peg$FAILED) {
					s3 = [];
					s4 = peg$currPos;
					s5 = [];
					s6 = peg$currPos;
					s7 = [];
					s8 = peg$parseWS();
					while (s8 !== peg$FAILED) {
						s7.push(s8);
						s8 = peg$parseWS();
					}
					if (s7 !== peg$FAILED) {
						if (input.charCodeAt(peg$currPos) === 10) {
							s8 = peg$c2;
							peg$currPos++;
						} else {
							s8 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c3);
							}
						}
						if (s8 !== peg$FAILED) {
							s9 = [];
							s10 = peg$parseWS();
							while (s10 !== peg$FAILED) {
								s9.push(s10);
								s10 = peg$parseWS();
							}
							if (s9 !== peg$FAILED) {
								s7 = [ s7, s8, s9 ];
								s6 = s7;
							} else {
								peg$currPos = s6;
								s6 = peg$c0;
							}
						} else {
							peg$currPos = s6;
							s6 = peg$c0;
						}
					} else {
						peg$currPos = s6;
						s6 = peg$c0;
					}
					if (s6 === peg$FAILED) {
						s6 = peg$parsecomment();
					}
					if (s6 !== peg$FAILED) {
						while (s6 !== peg$FAILED) {
							s5.push(s6);
							s6 = peg$currPos;
							s7 = [];
							s8 = peg$parseWS();
							while (s8 !== peg$FAILED) {
								s7.push(s8);
								s8 = peg$parseWS();
							}
							if (s7 !== peg$FAILED) {
								if (input.charCodeAt(peg$currPos) === 10) {
									s8 = peg$c2;
									peg$currPos++;
								} else {
									s8 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c3);
									}
								}
								if (s8 !== peg$FAILED) {
									s9 = [];
									s10 = peg$parseWS();
									while (s10 !== peg$FAILED) {
										s9.push(s10);
										s10 = peg$parseWS();
									}
									if (s9 !== peg$FAILED) {
										s7 = [ s7, s8, s9 ];
										s6 = s7;
									} else {
										peg$currPos = s6;
										s6 = peg$c0;
									}
								} else {
									peg$currPos = s6;
									s6 = peg$c0;
								}
							} else {
								peg$currPos = s6;
								s6 = peg$c0;
							}
							if (s6 === peg$FAILED) {
								s6 = peg$parsecomment();
							}
						}
					} else {
						s5 = peg$c0;
					}
					if (s5 !== peg$FAILED) {
						s6 = peg$parseentry();
						if (s6 !== peg$FAILED) {
							peg$reportedPos = s4;
							s5 = peg$c4(s6);
							s4 = s5;
						} else {
							peg$currPos = s4;
							s4 = peg$c0;
						}
					} else {
						peg$currPos = s4;
						s4 = peg$c0;
					}
					while (s4 !== peg$FAILED) {
						s3.push(s4);
						s4 = peg$currPos;
						s5 = [];
						s6 = peg$currPos;
						s7 = [];
						s8 = peg$parseWS();
						while (s8 !== peg$FAILED) {
							s7.push(s8);
							s8 = peg$parseWS();
						}
						if (s7 !== peg$FAILED) {
							if (input.charCodeAt(peg$currPos) === 10) {
								s8 = peg$c2;
								peg$currPos++;
							} else {
								s8 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c3);
								}
							}
							if (s8 !== peg$FAILED) {
								s9 = [];
								s10 = peg$parseWS();
								while (s10 !== peg$FAILED) {
									s9.push(s10);
									s10 = peg$parseWS();
								}
								if (s9 !== peg$FAILED) {
									s7 = [ s7, s8, s9 ];
									s6 = s7;
								} else {
									peg$currPos = s6;
									s6 = peg$c0;
								}
							} else {
								peg$currPos = s6;
								s6 = peg$c0;
							}
						} else {
							peg$currPos = s6;
							s6 = peg$c0;
						}
						if (s6 === peg$FAILED) {
							s6 = peg$parsecomment();
						}
						if (s6 !== peg$FAILED) {
							while (s6 !== peg$FAILED) {
								s5.push(s6);
								s6 = peg$currPos;
								s7 = [];
								s8 = peg$parseWS();
								while (s8 !== peg$FAILED) {
									s7.push(s8);
									s8 = peg$parseWS();
								}
								if (s7 !== peg$FAILED) {
									if (input.charCodeAt(peg$currPos) === 10) {
										s8 = peg$c2;
										peg$currPos++;
									} else {
										s8 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c3);
										}
									}
									if (s8 !== peg$FAILED) {
										s9 = [];
										s10 = peg$parseWS();
										while (s10 !== peg$FAILED) {
											s9.push(s10);
											s10 = peg$parseWS();
										}
										if (s9 !== peg$FAILED) {
											s7 = [ s7, s8, s9 ];
											s6 = s7;
										} else {
											peg$currPos = s6;
											s6 = peg$c0;
										}
									} else {
										peg$currPos = s6;
										s6 = peg$c0;
									}
								} else {
									peg$currPos = s6;
									s6 = peg$c0;
								}
								if (s6 === peg$FAILED) {
									s6 = peg$parsecomment();
								}
							}
						} else {
							s5 = peg$c0;
						}
						if (s5 !== peg$FAILED) {
							s6 = peg$parseentry();
							if (s6 !== peg$FAILED) {
								peg$reportedPos = s4;
								s5 = peg$c4(s6);
								s4 = s5;
							} else {
								peg$currPos = s4;
								s4 = peg$c0;
							}
						} else {
							peg$currPos = s4;
							s4 = peg$c0;
						}
					}
					if (s3 !== peg$FAILED) {
						s4 = [];
						s5 = peg$currPos;
						s6 = [];
						s7 = peg$parseWS();
						while (s7 !== peg$FAILED) {
							s6.push(s7);
							s7 = peg$parseWS();
						}
						if (s6 !== peg$FAILED) {
							if (input.charCodeAt(peg$currPos) === 10) {
								s7 = peg$c2;
								peg$currPos++;
							} else {
								s7 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c3);
								}
							}
							if (s7 !== peg$FAILED) {
								s8 = [];
								s9 = peg$parseWS();
								while (s9 !== peg$FAILED) {
									s8.push(s9);
									s9 = peg$parseWS();
								}
								if (s8 !== peg$FAILED) {
									s6 = [ s6, s7, s8 ];
									s5 = s6;
								} else {
									peg$currPos = s5;
									s5 = peg$c0;
								}
							} else {
								peg$currPos = s5;
								s5 = peg$c0;
							}
						} else {
							peg$currPos = s5;
							s5 = peg$c0;
						}
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$currPos;
							s6 = [];
							s7 = peg$parseWS();
							while (s7 !== peg$FAILED) {
								s6.push(s7);
								s7 = peg$parseWS();
							}
							if (s6 !== peg$FAILED) {
								if (input.charCodeAt(peg$currPos) === 10) {
									s7 = peg$c2;
									peg$currPos++;
								} else {
									s7 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c3);
									}
								}
								if (s7 !== peg$FAILED) {
									s8 = [];
									s9 = peg$parseWS();
									while (s9 !== peg$FAILED) {
										s8.push(s9);
										s9 = peg$parseWS();
									}
									if (s8 !== peg$FAILED) {
										s6 = [ s6, s7, s8 ];
										s5 = s6;
									} else {
										peg$currPos = s5;
										s5 = peg$c0;
									}
								} else {
									peg$currPos = s5;
									s5 = peg$c0;
								}
							} else {
								peg$currPos = s5;
								s5 = peg$c0;
							}
						}
						if (s4 !== peg$FAILED) {
							peg$reportedPos = s0;
							s1 = peg$c5(s2, s3);
							s0 = s1;
						} else {
							peg$currPos = s0;
							s0 = peg$c0;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$c0;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parseentry() {
			var s0, s1, s2, s3, s4, s5, s6, s7;

			s0 = peg$currPos;
			s1 = peg$parseid();
			if (s1 !== peg$FAILED) {
				s2 = [];
				s3 = peg$parseWS();
				while (s3 !== peg$FAILED) {
					s2.push(s3);
					s3 = peg$parseWS();
				}
				if (s2 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 61) {
						s3 = peg$c6;
						peg$currPos++;
					} else {
						s3 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c7);
						}
					}
					if (s3 !== peg$FAILED) {
						s4 = [];
						s5 = peg$parseWS();
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$parseWS();
						}
						if (s4 !== peg$FAILED) {
							s5 = peg$parsevalue();
							if (s5 === peg$FAILED) {
								s5 = peg$c8;
							}
							if (s5 !== peg$FAILED) {
								s6 = [];
								s7 = peg$parseWS();
								while (s7 !== peg$FAILED) {
									s6.push(s7);
									s7 = peg$parseWS();
								}
								if (s6 !== peg$FAILED) {
									peg$reportedPos = s0;
									s1 = peg$c9(s1, s5);
									s0 = s1;
								} else {
									peg$currPos = s0;
									s0 = peg$c0;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$c0;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$c0;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$c0;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parsecomment() {
			var s0, s1, s2, s3;

			s0 = peg$currPos;
			if (input.charCodeAt(peg$currPos) === 35) {
				s1 = peg$c10;
				peg$currPos++;
			} else {
				s1 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c11);
				}
			}
			if (s1 !== peg$FAILED) {
				s2 = [];
				if (peg$c12.test(input.charAt(peg$currPos))) {
					s3 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s3 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c13);
					}
				}
				if (s3 !== peg$FAILED) {
					while (s3 !== peg$FAILED) {
						s2.push(s3);
						if (peg$c12.test(input.charAt(peg$currPos))) {
							s3 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s3 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c13);
							}
						}
					}
				} else {
					s2 = peg$c0;
				}
				if (s2 !== peg$FAILED) {
					peg$reportedPos = s0;
					s1 = peg$c14(s2);
					s0 = s1;
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parsevalue() {
			var s0;

			s0 = peg$parseGradient();
			if (s0 === peg$FAILED) {
				s0 = peg$parseHSB();
				if (s0 === peg$FAILED) {
					s0 = peg$parseTrue();
					if (s0 === peg$FAILED) {
						s0 = peg$parseIntArray();
						if (s0 === peg$FAILED) {
							s0 = peg$parseInteger();
						}
					}
				}
			}

			return s0;
		}

		function peg$parseid() {
			var s0, s1, s2;

			s0 = peg$currPos;
			s1 = [];
			s2 = peg$parseIDPart();
			if (s2 !== peg$FAILED) {
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					s2 = peg$parseIDPart();
				}
			} else {
				s1 = peg$c0;
			}
			if (s1 !== peg$FAILED) {
				peg$reportedPos = s0;
				s1 = peg$c15(s1);
			}
			s0 = s1;

			return s0;
		}

		function peg$parseIDPart() {
			var s0;

			if (peg$c16.test(input.charAt(peg$currPos))) {
				s0 = input.charAt(peg$currPos);
				peg$currPos++;
			} else {
				s0 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c17);
				}
			}

			return s0;
		}

		function peg$parseWS() {
			var s0;

			if (peg$c18.test(input.charAt(peg$currPos))) {
				s0 = input.charAt(peg$currPos);
				peg$currPos++;
			} else {
				s0 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c19);
				}
			}

			return s0;
		}

		function peg$parseUnsignedFloat() {
			var s0, s1, s2, s3, s4, s5;

			s0 = peg$currPos;
			s1 = [];
			if (peg$c20.test(input.charAt(peg$currPos))) {
				s2 = input.charAt(peg$currPos);
				peg$currPos++;
			} else {
				s2 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c21);
				}
			}
			if (s2 !== peg$FAILED) {
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					if (peg$c20.test(input.charAt(peg$currPos))) {
						s2 = input.charAt(peg$currPos);
						peg$currPos++;
					} else {
						s2 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c21);
						}
					}
				}
			} else {
				s1 = peg$c0;
			}
			if (s1 !== peg$FAILED) {
				s2 = peg$currPos;
				if (input.charCodeAt(peg$currPos) === 46) {
					s3 = peg$c22;
					peg$currPos++;
				} else {
					s3 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c23);
					}
				}
				if (s3 !== peg$FAILED) {
					s4 = [];
					if (peg$c20.test(input.charAt(peg$currPos))) {
						s5 = input.charAt(peg$currPos);
						peg$currPos++;
					} else {
						s5 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c21);
						}
					}
					if (s5 !== peg$FAILED) {
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							if (peg$c20.test(input.charAt(peg$currPos))) {
								s5 = input.charAt(peg$currPos);
								peg$currPos++;
							} else {
								s5 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c21);
								}
							}
						}
					} else {
						s4 = peg$c0;
					}
					if (s4 !== peg$FAILED) {
						s3 = [ s3, s4 ];
						s2 = s3;
					} else {
						peg$currPos = s2;
						s2 = peg$c0;
					}
				} else {
					peg$currPos = s2;
					s2 = peg$c0;
				}
				if (s2 !== peg$FAILED) {
					peg$reportedPos = s0;
					s1 = peg$c24(s1, s2);
					s0 = s1;
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parseINT() {
			var s0, s1, s2;

			s0 = peg$currPos;
			s1 = [];
			if (peg$c20.test(input.charAt(peg$currPos))) {
				s2 = input.charAt(peg$currPos);
				peg$currPos++;
			} else {
				s2 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c21);
				}
			}
			if (s2 !== peg$FAILED) {
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					if (peg$c20.test(input.charAt(peg$currPos))) {
						s2 = input.charAt(peg$currPos);
						peg$currPos++;
					} else {
						s2 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c21);
						}
					}
				}
			} else {
				s1 = peg$c0;
			}
			if (s1 !== peg$FAILED) {
				peg$reportedPos = s0;
				s1 = peg$c25(s1);
			}
			s0 = s1;

			return s0;
		}

		function peg$parseInteger() {
			var s0, s1;

			s0 = peg$currPos;
			s1 = peg$parseINT();
			if (s1 !== peg$FAILED) {
				peg$reportedPos = s0;
				s1 = peg$c26(s1);
			}
			s0 = s1;

			return s0;
		}

		function peg$parseHSB() {
			var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

			s0 = peg$currPos;
			s1 = peg$parseUnsignedFloat();
			if (s1 !== peg$FAILED) {
				s2 = [];
				s3 = peg$parseWS();
				while (s3 !== peg$FAILED) {
					s2.push(s3);
					s3 = peg$parseWS();
				}
				if (s2 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 44) {
						s3 = peg$c27;
						peg$currPos++;
					} else {
						s3 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c28);
						}
					}
					if (s3 !== peg$FAILED) {
						s4 = [];
						s5 = peg$parseWS();
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$parseWS();
						}
						if (s4 !== peg$FAILED) {
							s5 = peg$parseUnsignedFloat();
							if (s5 !== peg$FAILED) {
								s6 = [];
								s7 = peg$parseWS();
								while (s7 !== peg$FAILED) {
									s6.push(s7);
									s7 = peg$parseWS();
								}
								if (s6 !== peg$FAILED) {
									if (input.charCodeAt(peg$currPos) === 44) {
										s7 = peg$c27;
										peg$currPos++;
									} else {
										s7 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c28);
										}
									}
									if (s7 !== peg$FAILED) {
										s8 = [];
										s9 = peg$parseWS();
										while (s9 !== peg$FAILED) {
											s8.push(s9);
											s9 = peg$parseWS();
										}
										if (s8 !== peg$FAILED) {
											s9 = peg$parseUnsignedFloat();
											if (s9 !== peg$FAILED) {
												peg$reportedPos = s0;
												s1 = peg$c29(s1, s5, s9);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$c0;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$c0;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$c0;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$c0;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$c0;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$c0;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$c0;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parseColorStop() {
			var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

			s0 = peg$currPos;
			s1 = peg$parseUnsignedFloat();
			if (s1 !== peg$FAILED) {
				s2 = [];
				s3 = peg$parseWS();
				while (s3 !== peg$FAILED) {
					s2.push(s3);
					s3 = peg$parseWS();
				}
				if (s2 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 44) {
						s3 = peg$c27;
						peg$currPos++;
					} else {
						s3 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c28);
						}
					}
					if (s3 !== peg$FAILED) {
						s4 = [];
						s5 = peg$parseWS();
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$parseWS();
						}
						if (s4 !== peg$FAILED) {
							s5 = peg$parseUnsignedFloat();
							if (s5 !== peg$FAILED) {
								s6 = [];
								s7 = peg$parseWS();
								while (s7 !== peg$FAILED) {
									s6.push(s7);
									s7 = peg$parseWS();
								}
								if (s6 !== peg$FAILED) {
									if (input.charCodeAt(peg$currPos) === 44) {
										s7 = peg$c27;
										peg$currPos++;
									} else {
										s7 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c28);
										}
									}
									if (s7 !== peg$FAILED) {
										s8 = [];
										s9 = peg$parseWS();
										while (s9 !== peg$FAILED) {
											s8.push(s9);
											s9 = peg$parseWS();
										}
										if (s8 !== peg$FAILED) {
											s9 = peg$parseUnsignedFloat();
											if (s9 !== peg$FAILED) {
												s10 = [];
												s11 = peg$parseWS();
												while (s11 !== peg$FAILED) {
													s10.push(s11);
													s11 = peg$parseWS();
												}
												if (s10 !== peg$FAILED) {
													if (input.charCodeAt(peg$currPos) === 44) {
														s11 = peg$c27;
														peg$currPos++;
													} else {
														s11 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c28);
														}
													}
													if (s11 !== peg$FAILED) {
														s12 = [];
														s13 = peg$parseWS();
														while (s13 !== peg$FAILED) {
															s12.push(s13);
															s13 = peg$parseWS();
														}
														if (s12 !== peg$FAILED) {
															s13 = peg$parseINT();
															if (s13 !== peg$FAILED) {
																peg$reportedPos = s0;
																s1 = peg$c30(s1, s5, s9, s13);
																s0 = s1;
															} else {
																peg$currPos = s0;
																s0 = peg$c0;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$c0;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$c0;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$c0;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$c0;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$c0;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$c0;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$c0;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$c0;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$c0;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$c0;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parseGradient() {
			var s0, s1, s2, s3, s4, s5, s6, s7;

			s0 = peg$currPos;
			s1 = peg$parseColorStop();
			if (s1 !== peg$FAILED) {
				s2 = [];
				s3 = peg$parseWS();
				while (s3 !== peg$FAILED) {
					s2.push(s3);
					s3 = peg$parseWS();
				}
				if (s2 !== peg$FAILED) {
					s3 = [];
					s4 = peg$currPos;
					if (input.charCodeAt(peg$currPos) === 124) {
						s5 = peg$c31;
						peg$currPos++;
					} else {
						s5 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c32);
						}
					}
					if (s5 !== peg$FAILED) {
						s6 = [];
						s7 = peg$parseWS();
						while (s7 !== peg$FAILED) {
							s6.push(s7);
							s7 = peg$parseWS();
						}
						if (s6 !== peg$FAILED) {
							s7 = peg$parseColorStop();
							if (s7 !== peg$FAILED) {
								peg$reportedPos = s4;
								s5 = peg$c4(s7);
								s4 = s5;
							} else {
								peg$currPos = s4;
								s4 = peg$c0;
							}
						} else {
							peg$currPos = s4;
							s4 = peg$c0;
						}
					} else {
						peg$currPos = s4;
						s4 = peg$c0;
					}
					if (s4 !== peg$FAILED) {
						while (s4 !== peg$FAILED) {
							s3.push(s4);
							s4 = peg$currPos;
							if (input.charCodeAt(peg$currPos) === 124) {
								s5 = peg$c31;
								peg$currPos++;
							} else {
								s5 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c32);
								}
							}
							if (s5 !== peg$FAILED) {
								s6 = [];
								s7 = peg$parseWS();
								while (s7 !== peg$FAILED) {
									s6.push(s7);
									s7 = peg$parseWS();
								}
								if (s6 !== peg$FAILED) {
									s7 = peg$parseColorStop();
									if (s7 !== peg$FAILED) {
										peg$reportedPos = s4;
										s5 = peg$c4(s7);
										s4 = s5;
									} else {
										peg$currPos = s4;
										s4 = peg$c0;
									}
								} else {
									peg$currPos = s4;
									s4 = peg$c0;
								}
							} else {
								peg$currPos = s4;
								s4 = peg$c0;
							}
						}
					} else {
						s3 = peg$c0;
					}
					if (s3 !== peg$FAILED) {
						s4 = [];
						s5 = peg$parseWS();
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$parseWS();
						}
						if (s4 !== peg$FAILED) {
							peg$reportedPos = s0;
							s1 = peg$c33(s1, s3);
							s0 = s1;
						} else {
							peg$currPos = s0;
							s0 = peg$c0;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$c0;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		function peg$parseTrue() {
			var s0, s1;

			s0 = peg$currPos;
			if (input.substr(peg$currPos, 4) === peg$c34) {
				s1 = peg$c34;
				peg$currPos += 4;
			} else {
				s1 = peg$FAILED;
				if (peg$silentFails === 0) {
					peg$fail(peg$c35);
				}
			}
			if (s1 !== peg$FAILED) {
				peg$reportedPos = s0;
				s1 = peg$c36();
			}
			s0 = s1;

			return s0;
		}

		function peg$parseIntArray() {
			var s0, s1, s2, s3, s4, s5, s6, s7;

			s0 = peg$currPos;
			s1 = peg$parseINT();
			if (s1 !== peg$FAILED) {
				s2 = [];
				s3 = peg$currPos;
				s4 = [];
				s5 = peg$parseWS();
				while (s5 !== peg$FAILED) {
					s4.push(s5);
					s5 = peg$parseWS();
				}
				if (s4 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 44) {
						s5 = peg$c27;
						peg$currPos++;
					} else {
						s5 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c28);
						}
					}
					if (s5 !== peg$FAILED) {
						s6 = [];
						s7 = peg$parseWS();
						while (s7 !== peg$FAILED) {
							s6.push(s7);
							s7 = peg$parseWS();
						}
						if (s6 !== peg$FAILED) {
							s7 = peg$parseINT();
							if (s7 !== peg$FAILED) {
								peg$reportedPos = s3;
								s4 = peg$c4(s7);
								s3 = s4;
							} else {
								peg$currPos = s3;
								s3 = peg$c0;
							}
						} else {
							peg$currPos = s3;
							s3 = peg$c0;
						}
					} else {
						peg$currPos = s3;
						s3 = peg$c0;
					}
				} else {
					peg$currPos = s3;
					s3 = peg$c0;
				}
				if (s3 !== peg$FAILED) {
					while (s3 !== peg$FAILED) {
						s2.push(s3);
						s3 = peg$currPos;
						s4 = [];
						s5 = peg$parseWS();
						while (s5 !== peg$FAILED) {
							s4.push(s5);
							s5 = peg$parseWS();
						}
						if (s4 !== peg$FAILED) {
							if (input.charCodeAt(peg$currPos) === 44) {
								s5 = peg$c27;
								peg$currPos++;
							} else {
								s5 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c28);
								}
							}
							if (s5 !== peg$FAILED) {
								s6 = [];
								s7 = peg$parseWS();
								while (s7 !== peg$FAILED) {
									s6.push(s7);
									s7 = peg$parseWS();
								}
								if (s6 !== peg$FAILED) {
									s7 = peg$parseINT();
									if (s7 !== peg$FAILED) {
										peg$reportedPos = s3;
										s4 = peg$c4(s7);
										s3 = s4;
									} else {
										peg$currPos = s3;
										s3 = peg$c0;
									}
								} else {
									peg$currPos = s3;
									s3 = peg$c0;
								}
							} else {
								peg$currPos = s3;
								s3 = peg$c0;
							}
						} else {
							peg$currPos = s3;
							s3 = peg$c0;
						}
					}
				} else {
					s2 = peg$c0;
				}
				if (s2 !== peg$FAILED) {
					peg$reportedPos = s0;
					s1 = peg$c37(s1, s2);
					s0 = s1;
				} else {
					peg$currPos = s0;
					s0 = peg$c0;
				}
			} else {
				peg$currPos = s0;
				s0 = peg$c0;
			}

			return s0;
		}

		var comments = [];

		peg$result = peg$startRuleFunction();

		if (peg$result !== peg$FAILED && peg$currPos === input.length) {
			return peg$result;
		} else {
			if (peg$result !== peg$FAILED && peg$currPos < input.length) {
				peg$fail({
					type : "end",
					description : "end of input"
				});
			}

			throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
		}
	}

	return {
		SyntaxError : SyntaxError,
		parse : parse
	};
})();