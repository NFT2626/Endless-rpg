!(function (e) {
  function t(r) {
    if (a[r]) return a[r].exports;
    var n = (a[r] = { i: r, l: !1, exports: {} });
    return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var a = {};
  (t.m = e),
    (t.c = a),
    (t.d = function (e, a, r) {
      t.o(e, a) ||
        Object.defineProperty(e, a, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(a, "a", a), a;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "./"),
    t((t.s = 3));
})([
  function (e, t, a) {
    "use strict";
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (t.$ = function (e) {
        return document.querySelector(e);
      }),
      i =
        ((t.C = function (e) {
          return document.createElement("div");
        }),
        (t.rndInt = function (e, t) {
          return Math.floor(Math.random() * (t - e) + e);
        }),
        function (e, t) {
          return [
            { x: e - 1, y: t },
            { x: e, y: t + 1 },
            { x: e + 1, y: t },
            { x: e, y: t - 1 },
            { x: e - 1, y: t - 1 },
            { x: e + 1, y: t + 1 },
            { x: e - 1, y: t + 1 },
            { x: e + 1, y: t - 1 },
          ];
        });
    (t.cellIsFree = function (e, t) {
      return [].concat(r(n("#c" + e + "-" + t).classList)).indexOf("free") >= 0;
    }),
      (t.updateNeighbours = function (e, t) {
        i(e, t).forEach(function (e) {
          var t = n("#c" + e.x + "-" + e.y);
          t && t.classList.remove("fade");
        });
      });
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.game = void 0);
    var r = a(4),
      n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      i = (t.game = new n.default(20));
    i.initialize(),
      i.buildNewRoom(120),
      i.populateRoom(),
      (document.onkeyup = function (e) {
        var t = 0,
          a = 0;
        switch (e.which) {
          case 37:
            t = -1;
            break;
          case 39:
            t = 1;
            break;
          case 38:
            a = -1;
            break;
          case 40:
            a = 1;
        }
        i.canMove && i.player.movePlayerTo(i.player.x + t, i.player.y + a);
      });
  },
  function (e, t, a) {
    "use strict";
    function r(e) {
      (n.src = jsfxr(e)), n.play();
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.play = r), a(6);
    var n = new Audio(),
      i = {
        coinSound: [
          0,
          ,
          0.0858,
          0.3519,
          0.4919,
          0.6174,
          ,
          ,
          ,
          ,
          ,
          0.3313,
          0.6645,
          ,
          ,
          ,
          ,
          ,
          1,
          ,
          ,
          ,
          ,
          0.5,
        ],
        hit: [
          1,
          ,
          0.0651,
          ,
          0.1751,
          0.2774,
          ,
          -0.456,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          1,
          ,
          ,
          ,
          ,
          0.5,
        ],
        victory: [
          0,
          ,
          0.3406,
          ,
          0.4373,
          0.4871,
          ,
          0.1043,
          ,
          0.619,
          0.5411,
          ,
          ,
          0.4838,
          ,
          ,
          ,
          ,
          1,
          ,
          ,
          ,
          ,
          0.5,
        ],
        death: [
          3,
          ,
          0.3671,
          0.5574,
          0.4783,
          0.1295,
          ,
          -0.2627,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          -0.0347,
          -0.2744,
          1,
          ,
          ,
          ,
          ,
          0.31,
        ],
        down: [
          2,
          ,
          0.3588,
          ,
          0.36,
          0.2084,
          ,
          0.173,
          ,
          ,
          ,
          ,
          ,
          0.166,
          ,
          0.6834,
          ,
          ,
          1,
          ,
          ,
          ,
          ,
          0.4,
        ],
      };
    t.default = i;
  },
  function (e, t, a) {
    a(1), (e.exports = a(11));
  },
  function (e, t, a) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
      }
      return Array.from(e);
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function () {
        function e(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, a, r) {
          return a && e(t.prototype, a), r && e(t, r), t;
        };
      })(),
      o = a(0),
      l = a(5),
      c = r(l),
      u = a(2),
      h = r(u),
      f = (function () {
        function e(t) {
          i(this, e),
            (this.player = new c.default()),
            (this.side = t),
            (this.cells = 0),
            (this.exit = {}),
            (this.chunks = []),
            (this.canMove = !0),
            (this.logger = null),
            (this.turnCount = 0);
        }
        return (
          s(
            e,
            [
              {
                key: "initialize",
                value: function () {
                  this.chunks = [];
                  var e = (0, o.$)(".holder");
                  e.innerHTML = "";
                  for (var t = 0; t < this.side * this.side; t++) {
                    var a = (0, o.C)();
                    (a.className = "cell fade"),
                      (a.id =
                        "c" +
                        Math.floor(t % this.side) +
                        "-" +
                        Math.floor(t / this.side)),
                      e.appendChild(a);
                  }
                },
              },
              {
                key: "buildNewRoom",
                value: function (t) {
                  for (; document.querySelectorAll(".free").length <= t; )
                    this.generateChunks();
                  e: for (var a = 0; a < 20; a++)
                    for (var r = 0; r < 20; r++)
                      if (
                        []
                          .concat(n((0, o.$)("#c" + a + "-" + r).classList))
                          .indexOf("free") >= 0
                      ) {
                        ((0, o.$)("#c" + a + "-" + r).className =
                          "cell player"),
                          (this.player.x = a),
                          (this.player.y = r);
                        break e;
                      }
                  e: for (var i = 19; i >= 0; i--)
                    for (var s = 19; s >= 0; s--)
                      if (
                        []
                          .concat(n((0, o.$)("#c" + i + "-" + s).classList))
                          .indexOf("free") >= 0
                      ) {
                        ((0, o.$)("#c" + i + "-" + s).className =
                          "fade cell finish"),
                          (this.exit.x = i),
                          (this.exit.y = s);
                        break e;
                      }
                  for (var l = 0; l < this.chunks.length - 1; l++)
                    e.HT(
                      this.chunks[l].cx,
                      this.chunks[l + 1].cx,
                      this.chunks[l].cy
                    ),
                      e.VT(
                        this.chunks[l].cy,
                        this.chunks[l + 1].cy,
                        this.chunks[l + 1].cx
                      );
                  (this.cells = document.querySelectorAll(".free").length),
                    this.player.movePlayerTo(this.player.x, this.player.y),
                    (0, o.updateNeighbours)(this.player.x, this.player.y),
                    ((0, o.$)("#level").innerHTML =
                      "Floor: " + this.player.level);
                },
              },
              {
                key: "generateChunks",
                value: function () {
                  var e = (0, o.rndInt)(3, 7),
                    t = (0, o.rndInt)(3, 7);
                  e % 2 || (e += 1), t % 2 || (t += 1);
                  for (
                    var a = Math.floor(Math.random() * (this.side - 1 - e)) + 1,
                      r = Math.floor(Math.random() * (this.side - 1 - t)) + 1,
                      n = r;
                    n < r + t;
                    n++
                  )
                    for (var i = a; i < a + e; i++)
                      (0, o.$)("#c" + i + "-" + n).classList.add("free");
                  this.chunks.push({
                    cx: a + Math.floor(e / 2),
                    cy: r + Math.floor(t / 2),
                  });
                },
              },
              {
                key: "populateRoom",
                value: function () {
                  for (
                    var e = Math.floor(this.cells / 14),
                      t = ["skeleton", "crab", "wrath"];
                    e;

                  ) {
                    var a = (0, o.rndInt)(2, this.side - 2),
                      r = (0, o.rndInt)(2, this.side - 2),
                      n = (0, o.rndInt)(0, 3);
                    if ((0, o.cellIsFree)(a, r)) {
                      var i = (0, o.$)("#c" + a + "-" + r);
                      i.classList.add("enemy"),
                        (i.dataset.enemyType = "" + t[n]),
                        i.classList.remove("free"),
                        e--;
                    }
                  }
                },
              },
              {
                key: "startBattle",
                value: function (e, t, a, r) {
                  var n = this;
                  this.canMove = !1;
                  var i = (0, o.C)();
                  (this.playerTurn = !0),
                    (i.className = "battle"),
                    (i.innerHTML =
                      "A foul <i>" +
                      e.name +
                      "</i> with " +
                      e.hp +
                      "hp stands before you!"),
                    document.body.appendChild(i),
                    (this.logger = setInterval(function () {
                      return n.performTurn(e, t, a, r);
                    }, 1250));
                },
              },
              {
                key: "performTurn",
                value: function (e, t, a, r) {
                  var n = (0, o.C)();
                  if (this.playerTurn) {
                    this.playerTurn = !1;
                    var i =
                      Math.floor((t.stats.damage * t.stats.str) / 25) -
                      4 * this.player.level;
                    i = (0, o.rndInt)(i - i / 5, i + i / 5);
                    var s =
                      t.stats.agi >= t.stats.str + t.stats.damage / 3 ? 2 : 1;
                    (i *= s), (e.hp -= i);
                    var l = 2 === s ? "critically hit" : "hit";
                    e.hp <= 0
                      ? ((n.innerHTML =
                          "You finish <i>" +
                          e.name +
                          "</i> with a massive blow of " +
                          i +
                          " damage!"),
                        (0, o.$)(".battle").appendChild(n),
                        (0, u.play)(h.default.victory),
                        this.endBattle(a))
                      : ((0, u.play)(h.default.hit),
                        (n.innerHTML =
                          "You " +
                          l +
                          " <i>" +
                          e.name +
                          "</i> for " +
                          i +
                          " damage"),
                        (0, o.$)(".battle").appendChild(n));
                  } else {
                    this.turnCount++, (this.playerTurn = !0);
                    var c = e.damage + 2 * this.turnCount,
                      f = "";
                    if (
                      (this.turnCount >= 7 && ((c *= 2), (f = "Enraged ")),
                      (t.hp -= c),
                      t.hp < 0 && (t.hp = 0),
                      ((0, o.$)("#hp").innerHTML = "Health: " + t.hp),
                      (n.innerHTML =
                        "<i>" +
                        (f + e.name) +
                        "</i> hits you for " +
                        c +
                        " damage"),
                      0 === t.hp)
                    )
                      return (
                        (n.innerHTML += "\nYou died!"),
                        (0, o.$)(".battle").appendChild(n),
                        (0, u.play)(h.default.death),
                        this.endBattle(a, r)
                      );
                    (0, u.play)(h.default.hit),
                      (0, o.$)(".battle").appendChild(n);
                  }
                },
              },
              {
                key: "endBattle",
                value: function (e, t) {
                  var a = this;
                  if ((clearInterval(this.logger), !t))
                    return (
                      (this.turnCount = 0),
                      (this.player.hp = this.player.maxHp),
                      setTimeout(function () {
                        document.body.removeChild((0, o.$)(".battle")),
                          (a.canMove = !0);
                      }, 2e3),
                      e()
                    );
                  setTimeout(function () {
                    return (
                      document.body.removeChild((0, o.$)(".battle")),
                      (a.canMove = !1),
                      t()
                    );
                  }, 2e3);
                },
              },
            ],
            [
              {
                key: "HT",
                value: function (e, t, a) {
                  for (
                    var r = Math.min(e, t), n = Math.max(e, t), i = r;
                    i <= n;
                    i++
                  )
                    (0, o.$)("#c" + i + "-" + a).classList.add("free");
                },
              },
              {
                key: "VT",
                value: function (e, t, a) {
                  for (
                    var r = Math.min(e, t), n = Math.max(e, t), i = r;
                    i <= n;
                    i++
                  )
                    (0, o.$)("#c" + a + "-" + i).classList.add("free");
                },
              },
            ]
          ),
          e
        );
      })();
    t.default = f;
  },
  function (e, t, a) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
      }
      return Array.from(e);
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function () {
        function e(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, a, r) {
          return a && e(t.prototype, a), r && e(t, r), t;
        };
      })(),
      o = a(0),
      l = a(2),
      c = r(l),
      u = a(7),
      h = r(u),
      f = a(10),
      d = r(f),
      y = a(1),
      p = (function () {
        function e() {
          i(this, e),
            (this.loot = []),
            (this.x = this.y = this.Eth = 0),
            (this.kills = 0),
            (this.level = 1),
            (this.stats = { str: 35, vit: 35, agi: 35, per: 35, damage: 35 }),
            (this.gear = {}),
            this.updateInfobar();
        }
        return (
          s(e, [
            {
              key: "movePlayerTo",
              value: function (e, t) {
                var a = this,
                  r = (0, o.$)("#c" + e + "-" + t),
                  i = (0, o.$)("#c" + this.x + "-" + this.y);
                if ([].concat(n(r.classList)).indexOf("finish") >= 0)
                  this.level++,
                    y.game.initialize(),
                    (this.cells = 120),
                    (0, l.play)(c.default.down),
                    y.game.buildNewRoom(this.cells),
                    y.game.populateRoom();
                else if ([].concat(n(r.classList)).indexOf("free") >= 0)
                  (i.className = "free cell"),
                    (r.className = "player cell"),
                    (0, o.updateNeighbours)(e, t),
                    (this.x = e),
                    (this.y = t);
                else if ([].concat(n(r.classList)).indexOf("item") >= 0)
                  (i.className = "free cell"),
                    (r.className = "player cell"),
                    (0, o.updateNeighbours)(e, t),
                    (this.x = e),
                    (this.y = t),
                    new h.default(),
                    (0, l.play)(c.default.coinSound);
                else if ([].concat(n(r.classList)).indexOf("enemy") >= 0) {
                  var s = r.dataset.enemyType,
                    u = new d.default(s),
                    f = this;
                  y.game.startBattle(
                    u,
                    f,
                    function () {
                      (r.classList = "cell item"), a.kills++, a.updateInfobar();
                    },
                    function () {
                      a.showGameover();
                    }
                  );
                }
              },
            },
            {
              key: "updateInfobar",
              value: function () {
                var e = this;
                Object.keys(this.stats).forEach(function (t) {
                  (e.stats[t] = 35),
                    e.gear &&
                      Object.keys(e.gear).forEach(function (a) {
                        e.stats[t] += e.gear[a].stats[t] || 0;
                      });
                }),
                  this.gear &&
                    Object.keys(this.gear).forEach(function (t) {
                      var a = "";
                      e.gear[t].name &&
                        (a +=
                          '<div class="sidebar-itemname">' +
                          e.gear[t].name +
                          "</div>"),
                        Object.keys(e.gear[t].stats).forEach(function (r) {
                          a +=
                            "<div>" + r + ": " + e.gear[t].stats[r] + "</div>";
                        }),
                        ((0, o.$)("#" + t).innerHTML = a),
                        ((0, o.$)("#" + t).className = e.gear[t].rarity);
                    }),
                  (this.hp = 9 * this.stats.vit),
                  (this.score = this.kills * this.level * this.Eth),
                  ((0, o.$)("#Eth").innerHTML = "Eth: " + this.Eth),
                  ((0, o.$)("#kill").innerHTML = "Kills: " + this.kills),
                  ((0, o.$)("#hp").innerHTML = "Health: " + this.hp),
                  ((0, o.$)("#score").innerHTML = "Score: " + this.score),
                  Object.keys(this.stats).forEach(function (t) {
                    return ((0, o.$)("#" + t).innerHTML =
                      t + ": " + e.stats[t]);
                  });
              },
            },
            {
              key: "showGameover",
              value: function () {
                y.game.canMove = !1;
                var e = (0, o.C)();
                e.classList.add("gameover"),
                  (e.innerHTML =
                    "<h1>Game Over!</h1><h2>Score: " +
                    this.score +
                    "</h2>\n<p>You defeated " +
                    this.kills +
                    " foes and ventured down the dungeon level " +
                    this.level +
                    "</p>\n<p>Sadly, you perished but your fame and courage will outlive the greatest of the kings.</p>\n");
                var t = (0, o.C)();
                (t.className = "card-button"),
                  (t.innerHTML = "Restart"),
                  (t.onclick = function () {
                    window.location.reload(!0);
                  }),
                  e.appendChild(t),
                  (0, o.$)(".holder").appendChild(e);
              },
            },
          ]),
          e
        );
      })();
    t.default = p;
  },
  function (e, t, a) {
    "use strict";
    function r() {
      this.A = function (e) {
        for (var t = 0; 24 > t; t++)
          this[String.fromCharCode(97 + t)] = e[t] || 0;
        0.01 > this.c && (this.c = 0.01),
          0.18 > (e = this.b + this.c + this.e) &&
            ((e = 0.18 / e), (this.b *= e), (this.c *= e), (this.e *= e));
      };
    }
    var n = new (function () {
      this.z = new r();
      var e, t, a, n, i, s, o, l, c, u, h, f;
      (this.reset = function () {
        var e = this.z;
        (n = 100 / (e.f * e.f + 0.001)),
          (i = 100 / (e.g * e.g + 0.001)),
          (s = 1 - 0.01 * e.h * e.h * e.h),
          (o = 1e-6 * -e.i * e.i * e.i),
          e.a || ((h = 0.5 - e.n / 2), (f = 5e-5 * -e.o)),
          (l = 1 + e.l * e.l * (0 < e.l ? -0.9 : 10)),
          (c = 0),
          (u = 1 == e.m ? 0 : 2e4 * (1 - e.m) * (1 - e.m) + 32);
      }),
        (this.C = function () {
          this.reset();
          var r = this.z;
          return (
            (e = 1e5 * r.b * r.b),
            (t = 1e5 * r.c * r.c),
            (a = 1e5 * r.e * r.e + 12),
            3 * (((e + t + a) / 3) | 0)
          );
        }),
        (this.B = function (r, d) {
          var y = this.z,
            p = 1 != y.s || y.v,
            v = 0.1 * y.v * y.v,
            m = 1 + 3e-4 * y.w,
            g = 0.1 * y.s * y.s * y.s,
            b = 1 + 1e-4 * y.t,
            k = 1 != y.s,
            M = y.x * y.x,
            w = y.g,
            x = y.q || y.r,
            C = 0.2 * y.r * y.r * y.r,
            T = y.q * y.q * (0 > y.q ? -1020 : 1020),
            I = y.p ? 32 + ((2e4 * (1 - y.p) * (1 - y.p)) | 0) : 0,
            L = y.d,
            O = y.j / 2,
            j = 0.01 * y.k * y.k,
            H = y.a,
            N = e,
            $ = 1 / e,
            A = 1 / t,
            _ = 1 / a,
            y = (5 / (1 + 20 * y.u * y.u)) * (0.01 + g);
          0.8 < y && (y = 0.8);
          for (
            var S,
              P,
              E,
              R,
              q,
              y = 1 - y,
              z = !1,
              B = 0,
              G = 0,
              F = 0,
              U = 0,
              W = 0,
              Y = 0,
              D = 0,
              V = 0,
              K = 0,
              J = 0,
              X = Array(1024),
              Q = Array(32),
              Z = X.length;
            Z--;

          )
            X[Z] = 0;
          for (Z = Q.length; Z--; ) Q[Z] = 2 * Math.random() - 1;
          for (Z = 0; Z < d; Z++) {
            if (z) return Z;
            if (
              (I && ++K >= I && ((K = 0), this.reset()),
              u && ++c >= u && ((u = 0), (n *= l)),
              (s += o),
              (n *= s),
              n > i && ((n = i), 0 < w && (z = !0)),
              (P = n),
              0 < O && ((J += j), (P *= 1 + Math.sin(J) * O)),
              (P |= 0),
              8 > P && (P = 8),
              H || ((h += f), 0 > h ? (h = 0) : 0.5 < h && (h = 0.5)),
              ++G > N)
            )
              switch (((G = 0), ++B)) {
                case 1:
                  N = t;
                  break;
                case 2:
                  N = a;
              }
            switch (B) {
              case 0:
                F = G * $;
                break;
              case 1:
                F = 1 + 2 * (1 - G * A) * L;
                break;
              case 2:
                F = 1 - G * _;
                break;
              case 3:
                (F = 0), (z = !0);
            }
            x &&
              ((T += C),
              (E = 0 | T),
              0 > E ? (E = -E) : 1023 < E && (E = 1023)),
              p &&
                m &&
                ((v *= m), 1e-5 > v ? (v = 1e-5) : 0.1 < v && (v = 0.1)),
              (q = 0);
            for (var ee = 8; ee--; ) {
              if (++D >= P && ((D %= P), 3 == H))
                for (S = Q.length; S--; ) Q[S] = 2 * Math.random() - 1;
              switch (H) {
                case 0:
                  R = D / P < h ? 0.5 : -0.5;
                  break;
                case 1:
                  R = 1 - (D / P) * 2;
                  break;
                case 2:
                  (R = D / P),
                    (R = 6.28318531 * (0.5 < R ? R - 1 : R)),
                    (R =
                      1.27323954 * R + 0.405284735 * R * R * (0 > R ? 1 : -1)),
                    (R = 0.225 * ((0 > R ? -1 : 1) * R * R - R) + R);
                  break;
                case 3:
                  R = Q[Math.abs(((32 * D) / P) | 0)];
              }
              p &&
                ((S = Y),
                (g *= b),
                0 > g ? (g = 0) : 0.1 < g && (g = 0.1),
                k ? ((W += (R - Y) * g), (W *= y)) : ((Y = R), (W = 0)),
                (Y += W),
                (U += Y - S),
                (R = U *= 1 - v)),
                x && ((X[V % 1024] = R), (R += X[(V - E + 1024) % 1024]), V++),
                (q += R);
            }
            (q *= 0.125 * F * M),
              (r[Z] = 1 <= q ? 32767 : -1 >= q ? -32768 : (32767 * q) | 0);
          }
          return d;
        });
    })();
    window.jsfxr = function (e) {
      n.z.A(e);
      var t = n.C(),
        e = new Uint8Array(4 * (((t + 1) / 2) | 0) + 44),
        t = 2 * n.B(new Uint16Array(e.buffer, 44), t),
        a = new Uint32Array(e.buffer, 0, 44);
      (a[0] = 1179011410),
        (a[1] = t + 36),
        (a[2] = 1163280727),
        (a[3] = 544501094),
        (a[4] = 16),
        (a[5] = 65537),
        (a[6] = 44100),
        (a[7] = 88200),
        (a[8] = 1048578),
        (a[9] = 1635017060),
        (a[10] = t);
      for (var t = t + 44, a = 0, r = "data:audio/wav;base64,"; a < t; a += 3)
        var i = (e[a] << 16) | (e[a + 1] << 8) | e[a + 2],
          r =
            r +
            ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              i >> 18
            ] +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                (i >> 12) & 63
              ] +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                (i >> 6) & 63
              ] +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                63 & i
              ]);
      return r;
    };
  },
  function (e, t, a) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
        function e(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, a, r) {
          return a && e(t.prototype, a), r && e(t, r), t;
        };
      })(),
      i = a(0),
      s = a(1),
      o = a(8),
      l = a(9),
      c = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(l),
      u = (function () {
        function e() {
          r(this, e),
            (this.price = 0),
            (this.type = ""),
            (this.slot = ""),
            (this.name = ""),
            (this.rarity = ""),
            (this.stats = {}),
            this.rollItem(),
            "coins" !== this.type && this.showCard();
        }
        return (
          n(
            e,
            [
              {
                key: "rollItem",
                value: function () {
                  if ((0, i.rndInt)(0, 101) <= 50)
                    (this.type = "coins"),
                      (this.price =
                        (0, i.rndInt)(10, 25) + s.game.player.level),
                      (s.game.player.Eth += this.price),
                      s.game.player.updateInfobar();
                  else {
                    if ((0, i.rndInt)(0, 101) <= 75) {
                      this.type = "armor";
                      var e = (0, i.rndInt)(0, 101);
                      (this.slot =
                        e <= 25
                          ? "head"
                          : e > 25 && e <= 50
                          ? "chest"
                          : e > 50 && e <= 75
                          ? "hand"
                          : "leg"),
                        (this.price =
                          (0, i.rndInt)(15, 40) + s.game.player.level);
                    } else
                      (this.type = "weapon"),
                        (this.slot = "one-hand"),
                        (this.price =
                          (0, i.rndInt)(55, 125) + s.game.player.level);
                    this.rollRarity(),
                      "one-hand" === this.slot
                        ? this.rollWeaponStats()
                        : this.rollItemStats(),
                      this.alterStat(),
                      s.game.player.loot.push(this);
                  }
                },
              },
              {
                key: "rollRarity",
                value: function () {
                  var e = (0, i.rndInt)(0, 100);
                  e <= 75
                    ? (this.rarity = "common")
                    : e > 75 && e <= 92
                    ? ((this.rarity = "rare"),
                      (this.name = (0, o.generateName)(2)))
                    : ((this.rarity = "legendary"),
                      (this.name = (0, o.generateName)(1)));
                },
              },
              {
                key: "rollItemStats",
                value: function () {
                  var t = {
                    str: e.rollStat(),
                    vit: e.rollStat(),
                    agi: e.rollStat(),
                    per: e.rollStat(),
                  };
                  switch (this.slot) {
                    case "head":
                      t.per = Math.floor(1.5 * t.per);
                      break;
                    case "chest":
                      t.vit = Math.floor(1.5 * t.vit);
                      break;
                    case "hand":
                      t.str = Math.floor(1.5 * t.str);
                      break;
                    case "leg":
                      t.agi = Math.floor(1.5 * t.agi);
                  }
                  return Object.assign(this.stats, t);
                },
              },
              {
                key: "rollWeaponStats",
                value: function () {
                  return Object.assign(this.stats, {
                    damage: (0, i.rndInt)(1, 35) + s.game.player.level,
                  });
                },
              },
              {
                key: "alterStat",
                value: function () {
                  var e = this;
                  Object.keys(this.stats).forEach(function (t) {
                    return "rare" === e.rarity
                      ? (e.stats[t] = Math.floor(1.5 * e.stats[t]))
                      : "legendary" === e.rarity
                      ? (e.stats[t] *= 2)
                      : null;
                  });
                },
              },
              {
                key: "showCard",
                value: function () {
                  var e = new c.default(this);
                  document.body.appendChild(e);
                },
              },
            ],
            [
              {
                key: "rollStat",
                value: function () {
                  return (0, i.rndInt)(1, 25) + s.game.player.level;
                },
              },
            ]
          ),
          e
        );
      })();
    t.default = u;
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.generateName = void 0);
    var r = a(0),
      n = "AEIOU".split(""),
      i = "BCDFGHJKLMNPRSTVWX".split("");
    t.generateName = function (e) {
      for (var t = ""; e--; ) {
        for (var a = 0; a < (0, r.rndInt)(4, 7); a++)
          t +=
            a % 2
              ? n[(0, r.rndInt)(0, n.length)]
              : i[(0, r.rndInt)(0, i.length)];
        e && (t += " ");
      }
      return t;
    };
  },
  function (e, t, a) {
    "use strict";
    function r(e) {
      i.game.canMove = !1;
      var t = (0, n.C)();
      t.className = "card";
      var a = e.name ? '<div class="t-name">' + e.name + "</div>" : "",
        r = "";
      Object.keys(e.stats).forEach(function (t) {
        (r += '<div class="t-stat">' + t + ": " + e.stats[t]),
          i.game.player.gear[e.slot]
            ? (r +=
                "(" +
                (e.stats[t] - i.game.player.gear[e.slot].stats[t]) +
                ")</div>")
            : (r += "</div>");
      });
      var s =
          a +
          '<div class="t-desc">' +
          e.rarity +
          " " +
          e.slot +
          " " +
          e.type +
          "</div>" +
          r,
        o = (0, n.C)();
      (o.className = "card-button"),
        (o.innerHTML = "Equip"),
        (o.onclick = function () {
          return (
            (i.game.player.gear[e.slot] = e),
            document.body.removeChild((0, n.$)(".card")),
            (i.game.canMove = !0),
            i.game.player.updateInfobar()
          );
        });
      var l = (0, n.C)();
      return (
        (l.className = "card-button"),
        (l.onclick = function () {
          return (
            (i.game.player.Eth += e.price),
            document.body.removeChild((0, n.$)(".card")),
            (i.game.canMove = !0),
            i.game.player.updateInfobar()
          );
        }),
        (l.innerHTML = "Sell"),
        (t.innerHTML = s),
        t.appendChild(o),
        t.appendChild(l),
        t
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    var n = a(0),
      i = a(1);
  },
  function (e, t, a) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function () {
        function e(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, a, r) {
          return a && e(t.prototype, a), r && e(t, r), t;
        };
      })(),
      i = a(0),
      s = a(1),
      o = {
        skeleton: {
          name: "Skeleton",
          damage: (0, i.rndInt)(25, 45),
          hp: (0, i.rndInt)(75, 260),
        },
        crab: {
          name: "Crab",
          damage: (0, i.rndInt)(40, 58),
          hp: (0, i.rndInt)(55, 240),
        },
        wrath: {
          name: "Wrath",
          damage: (0, i.rndInt)(22, 35),
          hp: (0, i.rndInt)(125, 365),
        },
      },
      l = (function () {
        function e(t) {
          r(this, e),
            (this.name = e.getName(t)),
            (this.damage = e.getDamage(t)),
            (this.hp = e.getHp(t));
        }
        return (
          n(e, null, [
            {
              key: "getName",
              value: function (e) {
                return o[e].name;
              },
            },
            {
              key: "getDamage",
              value: function (e) {
                return (
                  Math.round(o[e].damage * (1 + s.game.player.level / 6)) +
                  5 * s.game.player.level
                );
              },
            },
            {
              key: "getHp",
              value: function (e) {
                return (
                  Math.round(o[e].hp * (1 + s.game.player.level / 5)) +
                  14 * s.game.player.level
                );
              },
            },
          ]),
          e
        );
      })();
    t.default = l;
  },
  function (e, t) {},
]);
