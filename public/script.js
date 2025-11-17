const a0_0xbc5d54 = a0_0x4c04;
(function (_0x2563c2, _0x2879e3) {
  const _0xb2e5db = a0_0x4c04,
    _0x484aff = _0x2563c2();
  while (!![]) {
    try {
      const _0x364088 =
        parseInt(_0xb2e5db(0x2f4)) / 0x1 +
        (-parseInt(_0xb2e5db(0x92)) / 0x2) * (parseInt(_0xb2e5db(0xb4)) / 0x3) +
        -parseInt(_0xb2e5db(0x85)) / 0x4 +
        (parseInt(_0xb2e5db(0x1a9)) / 0x5) *
          (-parseInt(_0xb2e5db(0xa0)) / 0x6) +
        (parseInt(_0xb2e5db(0x179)) / 0x7) *
          (-parseInt(_0xb2e5db(0x316)) / 0x8) +
        (parseInt(_0xb2e5db(0x291)) / 0x9) *
          (-parseInt(_0xb2e5db(0x16c)) / 0xa) +
        parseInt(_0xb2e5db(0x1db)) / 0xb;
      if (_0x364088 === _0x2879e3) break;
      else _0x484aff["push"](_0x484aff["shift"]());
    } catch (_0x269782) {
      _0x484aff["push"](_0x484aff["shift"]());
    }
  }
})(a0_0x320d, 0x2d189);
let selectedPackage = "",
  quantity = 0x1,
  individualItems = {
    polo: { price: 0x167, quantity: 0x0 },
    jacket: { price: 0x316, quantity: 0x0 },
    jersey: { price: 0x103, quantity: 0x0 },
    belt: { price: 0x81, quantity: 0x0 },
    tung: { price: 0x77, quantity: 0x0 },
    tie: { price: 0x77, quantity: 0x0 },
  },
  totalAmount = 0x0,
  selectedSizes = { polo: [], jacket: [], jersey: [] },
  currentOrderRef = null;
const packages = {
    individual: {
      name: "ซื้อแยกชิ้น",
      price: 0x0,
      originalPrice: 0x0,
      items: [],
    },
  },
  patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{9,10}$/,
    name: /^[ก-๏a-zA-Z\s]{2,}$/,
  };
document[a0_0xbc5d54(0xcc)](a0_0xbc5d54(0x2d0), function () {
  const _0x68dd78 = a0_0xbc5d54,
    _0x51bff8 = {
      NMUuB: _0x68dd78(0x265),
      oLGlA: _0x68dd78(0x272),
      JSTIb: _0x68dd78(0x11b),
    };
  document[_0x68dd78(0x9b)](_0x51bff8[_0x68dd78(0x201)])[_0x68dd78(0x2b6)](
    (_0x15003d) => {
      const _0x48f8ee = _0x68dd78,
        _0x1ae1b9 = {
          TywlK: function (_0x4381ce) {
            return _0x4381ce();
          },
        };
      _0x15003d[_0x48f8ee(0xcc)](_0x51bff8[_0x48f8ee(0x20f)], function () {
        const _0x1b7543 = _0x48f8ee;
        (selectedPackage = this[_0x1b7543(0x271)]),
          _0x1ae1b9[_0x1b7543(0x2e9)](updatePackageSelection),
          _0x1ae1b9[_0x1b7543(0x2e9)](showSelectionDetails);
      });
    }
  ),
    (document[_0x68dd78(0x223)](_0x51bff8[_0x68dd78(0x200)])[_0x68dd78(0x133)][
      _0x68dd78(0x141)
    ] = _0x68dd78(0xe5));
});
function updatePackageSelection() {
  const _0x33eb14 = a0_0xbc5d54,
    _0x20f259 = { xyvet: _0x33eb14(0x1c6), zPzJQ: "selected" };
  document[_0x33eb14(0x9b)](_0x20f259[_0x33eb14(0x2bf)])[_0x33eb14(0x2b6)](
    (_0x3eeaff) => {
      const _0x34d8aa = _0x33eb14;
      _0x3eeaff["classList"][_0x34d8aa(0x89)](_0x34d8aa(0x260));
    }
  );
  const _0x2ba8e2 = document[_0x33eb14(0x1ef)](
    _0x33eb14(0x1ed) + selectedPackage + "\x22]"
  );
  _0x2ba8e2 &&
    _0x2ba8e2[_0x33eb14(0xee)][_0x33eb14(0x10f)](_0x20f259[_0x33eb14(0x1b5)]);
}
function showSelectionDetails() {
  const _0x10351c = a0_0xbc5d54,
    _0xfaa0b = {
      RRHcC: _0x10351c(0x2a6),
      diqBV: _0x10351c(0x213),
      hPUzs: _0x10351c(0x11b),
      ALEqd: _0x10351c(0x1f2),
      Zqiit: _0x10351c(0x19f),
      hflWE: "jacket-size-section",
      kDRqx: _0x10351c(0x165),
      xCkVi: _0x10351c(0x1f3),
      Uorpi: _0x10351c(0xe5),
      KbtAl: _0x10351c(0x106),
      REOne: function (_0x58321b, _0x365367) {
        return _0x58321b === _0x365367;
      },
      ZOQzO: "individual",
      xripy: "block",
      wrmBz: function (_0x105e3f) {
        return _0x105e3f();
      },
    },
    _0x17beb1 = document[_0x10351c(0x223)](_0xfaa0b[_0x10351c(0x292)]),
    _0x413ab7 = document["getElementById"](_0xfaa0b[_0x10351c(0xba)]),
    _0x4a0a96 = document[_0x10351c(0x223)](_0xfaa0b["hPUzs"]),
    _0x549883 = document["getElementById"](_0xfaa0b["ALEqd"]),
    _0x1ac6e7 = document[_0x10351c(0x223)](_0xfaa0b[_0x10351c(0x18e)]),
    _0x2e5e05 = document["getElementById"](_0x10351c(0x1b1)),
    _0x4ddf1b = document["getElementById"](_0xfaa0b[_0x10351c(0x2e6)]),
    _0x2f3483 = document[_0x10351c(0x223)](_0xfaa0b["kDRqx"]);
  (_0x17beb1["style"][_0x10351c(0x141)] = _0x10351c(0x167)),
    (selectedSizes = { polo: [], jacket: [], jersey: [] }),
    document[_0x10351c(0x9b)](_0xfaa0b[_0x10351c(0x227)])[_0x10351c(0x2b6)](
      (_0x44181f) => {
        const _0x1c7054 = _0x10351c;
        _0x44181f[_0x1c7054(0xee)][_0x1c7054(0x89)]("selected");
      }
    ),
    (_0x413ab7[_0x10351c(0x133)][_0x10351c(0x141)] = _0xfaa0b["Uorpi"]),
    (_0x2e5e05[_0x10351c(0x133)][_0x10351c(0x141)] =
      _0xfaa0b[_0x10351c(0x1bf)]),
    (_0x4ddf1b[_0x10351c(0x133)][_0x10351c(0x141)] = _0xfaa0b["Uorpi"]),
    (_0x2f3483[_0x10351c(0x133)]["display"] = _0xfaa0b["Uorpi"]),
    (_0x4a0a96[_0x10351c(0x133)][_0x10351c(0x141)] =
      _0xfaa0b[_0x10351c(0x1bf)]),
    (_0x549883[_0x10351c(0x297)] = ""),
    (_0x1ac6e7[_0x10351c(0x297)] = "");
  const _0x548a5c = document[_0x10351c(0x223)](_0xfaa0b[_0x10351c(0x1ab)]);
  if (_0x548a5c) _0x548a5c[_0x10351c(0x297)] = "";
  _0xfaa0b[_0x10351c(0xa1)](selectedPackage, _0xfaa0b["ZOQzO"]) &&
    ((_0x4a0a96[_0x10351c(0x133)][_0x10351c(0x141)] = _0xfaa0b["xripy"]),
    document["querySelectorAll"](_0x10351c(0xb5))["forEach"]((_0x51dfd5) => {
      _0x51dfd5["value"] = "0";
    }),
    (individualItems = {
      polo: { price: 0x167, quantity: 0x0 },
      jacket: { price: 0x316, quantity: 0x0 },
      jersey: { price: 0x103, quantity: 0x0 },
      belt: { price: 0x81, quantity: 0x0 },
      tung: { price: 0x77, quantity: 0x0 },
      tie: { price: 0x77, quantity: 0x0 },
    }),
    updateIndividualItems()),
    _0xfaa0b[_0x10351c(0x256)](updateTotal),
    _0x17beb1[_0x10351c(0x248)]({ behavior: "smooth" });
}
function selectSize(_0xfd58cb, _0xf56505) {
  const _0xa08f09 = a0_0xbc5d54,
    _0x14d61a = {
      QVpHw: _0xa08f09(0x260),
      CiRGc: function (_0x4bc255, _0x550e96) {
        return _0x4bc255 === _0x550e96;
      },
      NNBbL: _0xa08f09(0xc8),
      lWfSQ: "polo-size-section",
      DUECD: _0xa08f09(0x300),
    };
  selectedSizes[_0xfd58cb][0x0] = _0xf56505;
  const _0x30b920 = _0x14d61a[_0xa08f09(0x2c8)](
      _0xfd58cb,
      _0x14d61a[_0xa08f09(0x25f)]
    )
      ? _0x14d61a[_0xa08f09(0x282)]
      : _0x14d61a[_0xa08f09(0x216)],
    _0x4543c7 = document[_0xa08f09(0x223)](_0x30b920);
  _0x4543c7[_0xa08f09(0x9b)](_0xa08f09(0x1f3))[_0xa08f09(0x2b6)](
    (_0x26e869) => {
      const _0x48ebe4 = _0xa08f09;
      _0x26e869["classList"][_0x48ebe4(0x89)](_0x14d61a[_0x48ebe4(0x2be)]);
    }
  );
  const _0x34fb69 = _0x4543c7[_0xa08f09(0x1ef)](
    _0xa08f09(0x2cc) + _0xf56505 + "\x22]"
  );
  _0x34fb69 && _0x34fb69["classList"]["add"](_0x14d61a[_0xa08f09(0x2be)]);
}
function updateSizeSelectors(_0x26bedc) {
  const _0x35ddcb = a0_0xbc5d54,
    _0x5aa8ce = {
      rzPel: _0x35ddcb(0xdc),
      RnwuW: "button",
      Kbure: _0x35ddcb(0x11a),
      jQtcJ: function (_0x12324c, _0x281982) {
        return _0x12324c <= _0x281982;
      },
      odbwZ: "none",
      lFvvm: function (_0x4e690b, _0x412fe5) {
        return _0x4e690b < _0x412fe5;
      },
      KmjXi: "card\x20bg-light\x20mb-3\x20p-3",
      yPUbN: _0x35ddcb(0x250),
      qWMWJ: _0x35ddcb(0x1ee),
      Idqyt: _0x35ddcb(0x224),
      VeCkf: function (_0x28f2af, _0xe2df30) {
        return _0x28f2af === _0xe2df30;
      },
      BiAzT: "jacket",
      OjsEm: _0x35ddcb(0x290),
      nNShY: _0x35ddcb(0x193),
      jQNdw: _0x35ddcb(0xec),
      NwfPO: _0x35ddcb(0x1dc),
      NDJcO: "SSS",
      mpsdK: _0x35ddcb(0x228),
      lnedK: _0x35ddcb(0xd4),
      eSbcX: _0x35ddcb(0x1af),
    },
    _0x3df476 = document[_0x35ddcb(0x223)](_0x26bedc + _0x35ddcb(0x21a)),
    _0x2f19a3 = individualItems[_0x26bedc]["quantity"];
  (_0x3df476["innerHTML"] = ""), (selectedSizes[_0x26bedc] = []);
  if (_0x5aa8ce[_0x35ddcb(0x122)](_0x2f19a3, 0x0)) {
    _0x3df476[_0x35ddcb(0x133)][_0x35ddcb(0x141)] = _0x5aa8ce[_0x35ddcb(0x17d)];
    return;
  }
  _0x3df476[_0x35ddcb(0x133)]["display"] = _0x35ddcb(0x167);
  for (
    let _0x3d7a4b = 0x0;
    _0x5aa8ce[_0x35ddcb(0x2ff)](_0x3d7a4b, _0x2f19a3);
    _0x3d7a4b++
  ) {
    const _0x2af741 = document["createElement"](_0x5aa8ce[_0x35ddcb(0x2fe)]);
    _0x2af741[_0x35ddcb(0xe4)] = _0x5aa8ce[_0x35ddcb(0x2fb)];
    const _0x515d9f = document[_0x35ddcb(0x198)](_0x5aa8ce["yPUbN"]);
    _0x515d9f[_0x35ddcb(0xe4)] = _0x5aa8ce[_0x35ddcb(0x27d)];
    let _0x19596c = _0x5aa8ce[_0x35ddcb(0x2f8)];
    if (_0x5aa8ce[_0x35ddcb(0xa8)](_0x26bedc, _0x5aa8ce[_0x35ddcb(0x146)]))
      _0x19596c = _0x5aa8ce["OjsEm"];
    if (_0x5aa8ce[_0x35ddcb(0xa8)](_0x26bedc, _0x5aa8ce[_0x35ddcb(0xfb)]))
      _0x19596c = _0x35ddcb(0x1ae);
    (_0x515d9f[_0x35ddcb(0x1b9)] =
      _0x19596c + _0x35ddcb(0x19e) + (_0x3d7a4b + 0x1) + ":"),
      _0x2af741[_0x35ddcb(0xc3)](_0x515d9f);
    const _0x38f3b5 = document["createElement"](_0x5aa8ce["rzPel"]);
    (_0x38f3b5["className"] = _0x35ddcb(0x19a)),
      _0x38f3b5[_0x35ddcb(0x1c3)](_0x5aa8ce[_0x35ddcb(0x15b)], _0x26bedc),
      _0x38f3b5["setAttribute"](_0x5aa8ce[_0x35ddcb(0x13b)], _0x3d7a4b);
    const _0x2e58f5 = [
      _0x5aa8ce[_0x35ddcb(0x16e)],
      "SS",
      "S",
      "M",
      "L",
      "XL",
      _0x5aa8ce[_0x35ddcb(0x20e)],
      _0x5aa8ce["lnedK"],
      _0x5aa8ce[_0x35ddcb(0x19b)],
      "5XL",
    ];
    _0x2e58f5["forEach"]((_0x23fb72) => {
      const _0x3c6bad = _0x35ddcb,
        _0x11c510 = document[_0x3c6bad(0x198)](_0x5aa8ce[_0x3c6bad(0x2fe)]);
      _0x11c510["className"] = _0x3c6bad(0x255);
      const _0x3e3de6 = document[_0x3c6bad(0x198)](_0x3c6bad(0x90));
      (_0x3e3de6["type"] = _0x5aa8ce["RnwuW"]),
        (_0x3e3de6[_0x3c6bad(0xe4)] = _0x3c6bad(0x30a)),
        _0x3e3de6["setAttribute"](_0x3c6bad(0x104), _0x23fb72),
        (_0x3e3de6[_0x3c6bad(0x1b9)] = _0x23fb72),
        _0x3e3de6[_0x3c6bad(0xcc)](_0x5aa8ce[_0x3c6bad(0xbc)], () =>
          selectMultiSize(_0x26bedc, _0x3d7a4b, _0x23fb72)
        ),
        _0x11c510[_0x3c6bad(0xc3)](_0x3e3de6),
        _0x38f3b5[_0x3c6bad(0xc3)](_0x11c510);
    }),
      _0x2af741[_0x35ddcb(0xc3)](_0x38f3b5),
      _0x3df476[_0x35ddcb(0xc3)](_0x2af741),
      (selectedSizes[_0x26bedc][_0x3d7a4b] = null);
  }
}
function selectMultiSize(_0x4b4958, _0x509d35, _0x4fcb4f) {
  const _0x173a5e = a0_0xbc5d54,
    _0x2ff0d9 = { vxpVh: _0x173a5e(0x260), iwRKN: _0x173a5e(0x1f3) };
  selectedSizes[_0x4b4958][_0x509d35] = _0x4fcb4f;
  const _0x5b23d1 = document[_0x173a5e(0x1ef)](
    _0x173a5e(0x9f) + _0x4b4958 + _0x173a5e(0xb2) + _0x509d35 + "\x22]"
  );
  _0x5b23d1["querySelectorAll"](_0x2ff0d9[_0x173a5e(0x14b)])[_0x173a5e(0x2b6)](
    (_0x32fe02) => {
      const _0x229407 = _0x173a5e;
      _0x32fe02[_0x229407(0xee)][_0x229407(0x89)](_0x2ff0d9[_0x229407(0xd2)]);
    }
  );
  const _0x132c25 = _0x5b23d1["querySelector"](
    ".size-btn[data-size=\x22" + _0x4fcb4f + "\x22]"
  );
  _0x132c25 && _0x132c25[_0x173a5e(0xee)][_0x173a5e(0x10f)](_0x173a5e(0x260));
}
function updateIndividualItems() {
  const _0x34d4b3 = a0_0xbc5d54,
    _0xa6067a = {
      HtPPb: function (_0x3564b3, _0x4f1560) {
        return _0x3564b3 === _0x4f1560;
      },
      wyARK: _0x34d4b3(0x2e2),
      oORxj: function (_0x2bd23b, _0x4f9696) {
        return _0x2bd23b(_0x4f9696);
      },
      lEbuQ: _0x34d4b3(0x2fa),
      vuwtc: "jacket-select",
      ReqpR: "jersey-select",
      NwrWm: function (_0x1c0b12, _0x1709b3) {
        return _0x1c0b12(_0x1709b3);
      },
      GhAGh: function (_0x463df7, _0x325088) {
        return _0x463df7(_0x325088);
      },
      ynJKd: function (_0x2673f3, _0x2ce142) {
        return _0x2673f3 + _0x2ce142;
      },
      uteEA: function (_0x2a3cdd, _0x3b97fd) {
        return _0x2a3cdd > _0x3b97fd;
      },
      ypbUd: _0x34d4b3(0x13a),
      qbdAj: "เกินจำนวนเสื้อที่กำหนด",
      Elbla: _0x34d4b3(0x1c2),
      LfRpC: _0x34d4b3(0xc0),
      SMdpb: _0x34d4b3(0x1ba),
      CQfOz: "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้นรวมทั้งหมด",
      qqQEp: _0x34d4b3(0x314),
      DprCV: function (_0x3b1fd4, _0x425234) {
        return _0x3b1fd4(_0x425234);
      },
      sVqPb: _0x34d4b3(0xc8),
      VZFpI: _0x34d4b3(0xc1),
      WUCqO: "jersey",
      DuekB: _0x34d4b3(0x2b3),
      PSSOm: function (_0x242cec, _0x3b32eb) {
        return _0x242cec * _0x3b32eb;
      },
      EyWKM: _0x34d4b3(0x1f4),
      HxGoM: function (_0x549e2c, _0x30df06) {
        return _0x549e2c > _0x30df06;
      },
      iqCdp: "เสื้อโปโล",
      AtduQ: _0x34d4b3(0x290),
      xoQLU: function (_0x4013f4, _0x40068a) {
        return _0x4013f4 > _0x40068a;
      },
      BZvnS: _0x34d4b3(0x1ae),
      yBfWo: function (_0x2b34ba, _0x238f08) {
        return _0x2b34ba > _0x238f08;
      },
      QpeIz: function (_0x194488, _0x3d6a0b) {
        return _0x194488 > _0x3d6a0b;
      },
      gPBve: _0x34d4b3(0x137),
      dBkhE: function (_0x10edab) {
        return _0x10edab();
      },
    },
    _0x6fa7e = {
      polo:
        _0xa6067a[_0x34d4b3(0x149)](
          parseInt,
          document["getElementById"](_0xa6067a[_0x34d4b3(0x184)])[
            _0x34d4b3(0x271)
          ]
        ) || 0x0,
      jacket:
        _0xa6067a[_0x34d4b3(0x149)](
          parseInt,
          document[_0x34d4b3(0x223)](_0xa6067a[_0x34d4b3(0x18b)])["value"]
        ) || 0x0,
      jersey:
        _0xa6067a[_0x34d4b3(0x149)](
          parseInt,
          document["getElementById"](_0xa6067a["ReqpR"])["value"]
        ) || 0x0,
      belt:
        _0xa6067a["NwrWm"](
          parseInt,
          document[_0x34d4b3(0x223)](_0x34d4b3(0x15e))[_0x34d4b3(0x271)]
        ) || 0x0,
      tung: 0x0,
      tie:
        _0xa6067a[_0x34d4b3(0x1c8)](
          parseInt,
          document[_0x34d4b3(0x223)](_0x34d4b3(0x314))["value"]
        ) || 0x0,
    },
    _0x58568b =
      _0xa6067a[_0x34d4b3(0x2dd)](_0x6fa7e["polo"], _0x6fa7e[_0x34d4b3(0xc1)]) +
      _0x6fa7e[_0x34d4b3(0x193)];
  if (_0xa6067a[_0x34d4b3(0x1bd)](_0x58568b, 0x3)) {
    Swal[_0x34d4b3(0x310)]({
      icon: _0xa6067a[_0x34d4b3(0x2d2)],
      title: _0xa6067a[_0x34d4b3(0x307)],
      text: _0xa6067a[_0x34d4b3(0x1a5)],
      confirmButtonText: _0xa6067a[_0x34d4b3(0x1e2)],
    });
    const _0x2779b9 = [
      _0xa6067a[_0x34d4b3(0x184)],
      _0x34d4b3(0x10e),
      _0xa6067a[_0x34d4b3(0x2d3)],
    ];
    _0x2779b9["forEach"]((_0x8e1035) => {
      const _0x39c59b = _0x34d4b3,
        _0x409f16 = document[_0x39c59b(0x223)](_0x8e1035);
      if (
        _0x409f16 &&
        _0xa6067a[_0x39c59b(0x144)](_0x409f16, document[_0x39c59b(0x16d)])
      ) {
        const _0x21160d = _0x8e1035["replace"](_0xa6067a[_0x39c59b(0x2f0)], "");
        _0x409f16[_0x39c59b(0x271)] = individualItems[_0x21160d]["quantity"];
      }
    });
    return;
  }
  const _0x9d2611 = Object[_0x34d4b3(0x17f)](_0x6fa7e)["reduce"](
    (_0x25507f, _0x3ac1c6) => _0x25507f + _0x3ac1c6,
    0x0
  );
  if (_0xa6067a["uteEA"](_0x9d2611, 0x3)) {
    Swal[_0x34d4b3(0x310)]({
      icon: _0xa6067a[_0x34d4b3(0x2d2)],
      title: _0xa6067a[_0x34d4b3(0x20c)],
      text: _0xa6067a[_0x34d4b3(0xb8)],
      confirmButtonText: _0x34d4b3(0xc0),
    });
    const _0x4b1fb0 = [
      _0xa6067a[_0x34d4b3(0x184)],
      _0xa6067a[_0x34d4b3(0x18b)],
      _0xa6067a["ReqpR"],
      _0x34d4b3(0x15e),
      _0xa6067a["qqQEp"],
    ];
    _0x4b1fb0[_0x34d4b3(0x2b6)]((_0x218425) => {
      const _0x3150c4 = _0x34d4b3,
        _0x3abdb3 = document["getElementById"](_0x218425);
      if (_0x3abdb3 && _0x3abdb3 === document[_0x3150c4(0x16d)]) {
        const _0x4526ea = _0x218425[_0x3150c4(0xb6)](_0xa6067a["wyARK"], "");
        _0x3abdb3["value"] = individualItems[_0x4526ea][_0x3150c4(0x2c0)];
      }
    });
    return;
  }
  (individualItems["polo"][_0x34d4b3(0x2c0)] = _0x6fa7e[_0x34d4b3(0xc8)]),
    (individualItems[_0x34d4b3(0xc1)]["quantity"] = _0x6fa7e["jacket"]),
    (individualItems[_0x34d4b3(0x193)][_0x34d4b3(0x2c0)] = _0x6fa7e["jersey"]),
    (individualItems[_0x34d4b3(0x23d)][_0x34d4b3(0x2c0)] =
      _0x6fa7e[_0x34d4b3(0x23d)]),
    (individualItems[_0x34d4b3(0x2b3)][_0x34d4b3(0x2c0)] = 0x0),
    (individualItems[_0x34d4b3(0x2b7)][_0x34d4b3(0x2c0)] =
      _0x6fa7e[_0x34d4b3(0x2b7)]),
    _0xa6067a[_0x34d4b3(0x2a7)](
      updateSizeSelectors,
      _0xa6067a[_0x34d4b3(0x2f1)]
    ),
    _0xa6067a[_0x34d4b3(0x1c8)](
      updateSizeSelectors,
      _0xa6067a[_0x34d4b3(0x20a)]
    ),
    _0xa6067a["GhAGh"](updateSizeSelectors, _0xa6067a[_0x34d4b3(0x9a)]),
    updateShirtCounter();
  let _0x810bed = 0x0;
  for (const _0x3f7e33 in individualItems) {
    _0x3f7e33 !== _0xa6067a[_0x34d4b3(0x110)] &&
      (_0x810bed += _0xa6067a[_0x34d4b3(0x1a7)](
        individualItems[_0x3f7e33][_0x34d4b3(0x1e1)],
        individualItems[_0x3f7e33][_0x34d4b3(0x2c0)]
      ));
  }
  (packages[_0xa6067a["EyWKM"]][_0x34d4b3(0x1e1)] = _0x810bed),
    (packages[_0xa6067a[_0x34d4b3(0x11d)]]["items"] = []);
  if (
    _0xa6067a["HxGoM"](individualItems[_0x34d4b3(0xc8)][_0x34d4b3(0x2c0)], 0x0)
  )
    packages[_0x34d4b3(0x1f4)][_0x34d4b3(0x186)][_0x34d4b3(0x80)](
      _0xa6067a[_0x34d4b3(0x7f)]
    );
  if (
    _0xa6067a[_0x34d4b3(0x1bd)](
      individualItems["jacket"][_0x34d4b3(0x2c0)],
      0x0
    )
  )
    packages[_0xa6067a["EyWKM"]][_0x34d4b3(0x186)]["push"](
      _0xa6067a[_0x34d4b3(0x9c)]
    );
  if (
    _0xa6067a["xoQLU"](individualItems[_0x34d4b3(0x193)][_0x34d4b3(0x2c0)], 0x0)
  )
    packages[_0xa6067a["EyWKM"]][_0x34d4b3(0x186)][_0x34d4b3(0x80)](
      _0xa6067a[_0x34d4b3(0x192)]
    );
  if (_0xa6067a["yBfWo"](individualItems[_0x34d4b3(0x23d)]["quantity"], 0x0))
    packages[_0xa6067a[_0x34d4b3(0x11d)]][_0x34d4b3(0x186)][_0x34d4b3(0x80)](
      _0x34d4b3(0x2b9)
    );
  if (_0xa6067a["QpeIz"](individualItems["tie"][_0x34d4b3(0x2c0)], 0x0))
    packages[_0xa6067a["EyWKM"]][_0x34d4b3(0x186)][_0x34d4b3(0x80)](
      _0xa6067a[_0x34d4b3(0x30b)]
    );
  _0xa6067a[_0x34d4b3(0x116)](updateTotal);
}
function updateShirtCounter() {
  const _0x54323c = a0_0xbc5d54,
    _0x5cdfe6 = {
      IDCGy: function (_0x3b1787, _0x3eeaea) {
        return _0x3b1787 + _0x3eeaea;
      },
      rvCqm: _0x54323c(0x2df),
      VhyTG: _0x54323c(0xff),
      cMjvp: _0x54323c(0x16a),
      YuPnE: function (_0x45abc3, _0x3a5aea) {
        return _0x45abc3 === _0x3a5aea;
      },
      hupbj: _0x54323c(0x1f7),
      iEpAV: _0x54323c(0x2d1),
      IBuLE: _0x54323c(0x220),
    },
    _0x351eb2 = _0x5cdfe6[_0x54323c(0x207)](
      _0x5cdfe6[_0x54323c(0x207)](
        individualItems[_0x54323c(0xc8)]["quantity"],
        individualItems[_0x54323c(0xc1)][_0x54323c(0x2c0)]
      ),
      individualItems[_0x54323c(0x193)][_0x54323c(0x2c0)]
    ),
    _0x2b5d1a = document[_0x54323c(0x223)](_0x5cdfe6["rvCqm"]),
    _0x1bcfca = document[_0x54323c(0x223)](_0x5cdfe6[_0x54323c(0x268)]);
  _0x2b5d1a && (_0x2b5d1a["textContent"] = _0x351eb2),
    _0x1bcfca &&
      (_0x1bcfca["className"] = _0x5cdfe6["IDCGy"](
        _0x5cdfe6[_0x54323c(0x7d)],
        _0x5cdfe6[_0x54323c(0x294)](_0x351eb2, 0x0)
          ? _0x5cdfe6[_0x54323c(0x8c)]
          : _0x351eb2 <= 0x2
          ? _0x5cdfe6["iEpAV"]
          : _0x5cdfe6[_0x54323c(0x294)](_0x351eb2, 0x3)
          ? _0x5cdfe6["IBuLE"]
          : _0x54323c(0x163)
      ));
}
document[a0_0xbc5d54(0x223)](a0_0xbc5d54(0x2c0))[a0_0xbc5d54(0xcc)](
  a0_0xbc5d54(0x2fd),
  function (_0x40482d) {
    const _0x2e4d0f = a0_0xbc5d54,
      _0x2e0523 = {
        gImsx: function (_0x3e87e6, _0xb4c1a6) {
          return _0x3e87e6(_0xb4c1a6);
        },
        GbIPP: _0x2e4d0f(0xd7),
      };
    /[^0-9]/[_0x2e4d0f(0x1ad)](this[_0x2e4d0f(0x271)]) &&
      (_0x2e0523[_0x2e4d0f(0x280)](alert, _0x2e0523[_0x2e4d0f(0x2bc)]),
      (this[_0x2e4d0f(0x271)] = this[_0x2e4d0f(0x271)][_0x2e4d0f(0xb6)](
        /[^0-9]/g,
        ""
      )));
  }
);
function changeQuantity(_0x21a2ee) {
  const _0x2572e3 = a0_0xbc5d54,
    _0x3f34fc = {
      eFyuV: function (_0x2464ae, _0x46270b) {
        return _0x2464ae + _0x46270b;
      },
      TCZEA: function (_0x4863e2, _0x3da3ad) {
        return _0x4863e2 < _0x3da3ad;
      },
      sTjnQ: function (_0x2ae383, _0x44ec16) {
        return _0x2ae383 > _0x44ec16;
      },
      hRmwe: function (_0x36139b) {
        return _0x36139b();
      },
    },
    _0x1266f4 = document["getElementById"](_0x2572e3(0x2c0));
  let _0x29cc59 = _0x3f34fc[_0x2572e3(0x1c7)](
    parseInt(_0x1266f4[_0x2572e3(0x271)]),
    _0x21a2ee
  );
  if (_0x3f34fc[_0x2572e3(0x10a)](_0x29cc59, 0x1)) _0x29cc59 = 0x1;
  if (_0x3f34fc["sTjnQ"](_0x29cc59, 0xa)) _0x29cc59 = 0xa;
  (_0x1266f4[_0x2572e3(0x271)] = _0x29cc59),
    (quantity = _0x29cc59),
    _0x3f34fc[_0x2572e3(0x22a)](updateTotal);
}
function updateTotal() {
  const _0x50bd4f = a0_0xbc5d54,
    _0x597948 = { zrmRV: _0x50bd4f(0x2d4) };
  if (!selectedPackage) return;
  totalAmount = packages[selectedPackage][_0x50bd4f(0x1e1)];
  const _0x247103 = document[_0x50bd4f(0x223)](_0x597948[_0x50bd4f(0x25b)]);
  _0x247103 &&
    (_0x247103[_0x50bd4f(0x1b9)] =
      totalAmount["toLocaleString"]() + _0x50bd4f(0x30d));
}
document[a0_0xbc5d54(0x9b)](".delivery-option\x20input[type=\x22radio\x22]")[
  a0_0xbc5d54(0x2b6)
]((_0x456906) => {
  const _0x53ecf2 = a0_0xbc5d54,
    _0xc00752 = {
      PgYUs: function (_0x3b87e6, _0x297c34) {
        return _0x3b87e6(_0x297c34);
      },
      gWECJ: _0x53ecf2(0x265),
    };
  _0x456906[_0x53ecf2(0xcc)](_0xc00752["gWECJ"], (_0x3f8bc5) => {
    const _0x389855 = _0x53ecf2;
    _0xc00752[_0x389855(0x169)](
      selectDelivery,
      _0x3f8bc5["target"][_0x389855(0x271)]
    );
  });
});
function selectDelivery(_0x47d8d1) {
  const _0x47a8ad = a0_0xbc5d54,
    _0x33c25b = {
      btZZK: _0x47a8ad(0x2a1),
      fLhnc: _0x47a8ad(0x260),
      Revyd: _0x47a8ad(0x26b),
      wCcWZ: "none",
      erANy: _0x47a8ad(0x266),
      LsnDH: _0x47a8ad(0x9e),
      xKBOl: _0x47a8ad(0x257),
      JBKZY: _0x47a8ad(0x167),
    };
  (deliveryType = _0x47d8d1),
    document[_0x47a8ad(0x9b)](_0x33c25b["btZZK"])[_0x47a8ad(0x2b6)](
      (_0x4af47d) => {
        const _0x1306e1 = _0x47a8ad;
        _0x4af47d["classList"][_0x1306e1(0x89)](_0x1306e1(0x260));
      }
    ),
    document[_0x47a8ad(0x1ef)](_0x47a8ad(0x284) + _0x47d8d1 + "\x22]")[
      "classList"
    ][_0x47a8ad(0x10f)](_0x33c25b[_0x47a8ad(0x10d)]),
    (document[_0x47a8ad(0x223)](_0x33c25b[_0x47a8ad(0xc4)])["style"][
      _0x47a8ad(0x141)
    ] = _0x33c25b[_0x47a8ad(0xc9)]),
    (document[_0x47a8ad(0x223)](_0x33c25b[_0x47a8ad(0x267)])[_0x47a8ad(0x133)][
      _0x47a8ad(0x141)
    ] = _0x47a8ad(0x167));
  const _0x86ef88 = document[_0x47a8ad(0x223)](_0x33c25b[_0x47a8ad(0xf9)]);
  _0x47d8d1 === _0x33c25b[_0x47a8ad(0x1ce)]
    ? ((_0x86ef88[_0x47a8ad(0x133)][_0x47a8ad(0x141)] =
        _0x33c25b[_0x47a8ad(0xd9)]),
      (_0x86ef88[_0x47a8ad(0x1ef)](_0x47a8ad(0xdb))[_0x47a8ad(0x27a)] = !![]))
    : ((_0x86ef88["style"][_0x47a8ad(0x141)] = _0x33c25b[_0x47a8ad(0xc9)]),
      (_0x86ef88[_0x47a8ad(0x1ef)]("textarea")["required"] = ![])),
    updateFinalSummary();
}
function toggleYearSelection() {
  const _0x3a6c18 = a0_0xbc5d54,
    _0x4ce459 = {
      pzvTK: _0x3a6c18(0x205),
      BlnxU: _0x3a6c18(0x25a),
      FUFKD: _0x3a6c18(0x1d3),
      YFmjG: "major-section",
      xinar: "faculty-section",
      TXeev: _0x3a6c18(0x136),
      gDkgu: "4|3|2|0|1",
      UXrrp: _0x3a6c18(0x167),
      ddrdu: function (_0x31ff5c, _0x5913b3) {
        return _0x31ff5c === _0x5913b3;
      },
      VLMbP: "student-out",
      BguOu: _0x3a6c18(0xe5),
      aYVDm: _0x3a6c18(0x1be),
    },
    _0x29a498 = document[_0x3a6c18(0x223)](_0x4ce459[_0x3a6c18(0x81)])[
      _0x3a6c18(0x271)
    ],
    _0x1a0785 = document[_0x3a6c18(0x223)](_0x4ce459[_0x3a6c18(0x17b)]),
    _0x365ff4 = document[_0x3a6c18(0x223)](_0x4ce459["FUFKD"]),
    _0x13024a = document[_0x3a6c18(0x223)](_0x4ce459["YFmjG"]),
    _0x55c1cb = document[_0x3a6c18(0x223)](_0x4ce459[_0x3a6c18(0x29a)]),
    _0x4b331f = document[_0x3a6c18(0x223)](_0x4ce459[_0x3a6c18(0x1a1)]);
  if (_0x29a498 === _0x3a6c18(0xdf)) {
    const _0x3e0824 = _0x4ce459[_0x3a6c18(0x155)][_0x3a6c18(0x239)]("|");
    let _0x944bca = 0x0;
    while (!![]) {
      switch (_0x3e0824[_0x944bca++]) {
        case "0":
          _0x4b331f[_0x3a6c18(0x133)][_0x3a6c18(0x141)] = _0x3a6c18(0x167);
          continue;
        case "1":
          _0x55c1cb[_0x3a6c18(0x133)]["display"] = "none";
          continue;
        case "2":
          _0x13024a[_0x3a6c18(0x133)]["display"] = _0x4ce459["UXrrp"];
          continue;
        case "3":
          _0x365ff4[_0x3a6c18(0x27a)] = !![];
          continue;
        case "4":
          _0x1a0785["style"][_0x3a6c18(0x141)] = _0x4ce459[_0x3a6c18(0x14a)];
          continue;
      }
      break;
    }
  } else {
    if (_0x4ce459["ddrdu"](_0x29a498, _0x4ce459[_0x3a6c18(0xe3)]))
      (_0x1a0785[_0x3a6c18(0x133)][_0x3a6c18(0x141)] = "block"),
        (_0x365ff4["required"] = !![]),
        (_0x55c1cb[_0x3a6c18(0x133)][_0x3a6c18(0x141)] = "block"),
        (_0x4b331f[_0x3a6c18(0x133)][_0x3a6c18(0x141)] =
          _0x4ce459[_0x3a6c18(0x14a)]),
        (_0x13024a[_0x3a6c18(0x133)][_0x3a6c18(0x141)] = _0x4ce459["BguOu"]);
    else {
      const _0x87e197 = _0x4ce459[_0x3a6c18(0x27e)]["split"]("|");
      let _0x5ed853 = 0x0;
      while (!![]) {
        switch (_0x87e197[_0x5ed853++]) {
          case "0":
            _0x13024a[_0x3a6c18(0x133)][_0x3a6c18(0x141)] =
              _0x4ce459[_0x3a6c18(0x276)];
            continue;
          case "1":
            _0x1a0785[_0x3a6c18(0x133)]["display"] = _0x4ce459["BguOu"];
            continue;
          case "2":
            _0x55c1cb["style"][_0x3a6c18(0x141)] = _0x4ce459[_0x3a6c18(0x276)];
            continue;
          case "3":
            _0x365ff4[_0x3a6c18(0x27a)] = ![];
            continue;
          case "4":
            _0x4b331f[_0x3a6c18(0x133)][_0x3a6c18(0x141)] =
              _0x4ce459[_0x3a6c18(0x276)];
            continue;
          case "5":
            _0x365ff4[_0x3a6c18(0x271)] = "";
            continue;
        }
        break;
      }
    }
  }
}
function validateEmail(_0x45bf0d) {
  const _0x3ab2d5 = a0_0xbc5d54,
    _0x21bf4d = {
      eqqmz: _0x3ab2d5(0xd1),
      TefvN: _0x3ab2d5(0x2a2),
      Ksgjp: _0x3ab2d5(0xc2),
      GXjIm: "hotmail.com",
      xqzHG: _0x3ab2d5(0x30c),
    };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/[_0x3ab2d5(0x1ad)](_0x45bf0d))
    return { valid: ![], error: _0x21bf4d["eqqmz"] };
  const _0x163239 = [
      _0x3ab2d5(0x281),
      _0x21bf4d[_0x3ab2d5(0x121)],
      _0x21bf4d[_0x3ab2d5(0x1f5)],
      _0x21bf4d[_0x3ab2d5(0x28d)],
    ],
    _0x38563c = _0x45bf0d[_0x3ab2d5(0x239)]("@")[0x1][_0x3ab2d5(0x1b0)]();
  if (!_0x163239["includes"](_0x38563c))
    return { valid: ![], error: _0x21bf4d[_0x3ab2d5(0x25e)] };
  return { valid: !![], error: "" };
}
function validateForm() {
  const _0xd072e0 = a0_0xbc5d54,
    _0x4c3f82 = {
      roTCt: _0xd072e0(0x88),
      UbdEd: _0xd072e0(0x1f9),
      reUPx: function (_0x17cd19, _0x68f665) {
        return _0x17cd19(_0x68f665);
      },
      ojGXg: _0xd072e0(0x245),
      EbKfm: _0xd072e0(0x298),
      pTUkH: _0xd072e0(0x123),
      IgfLe: _0xd072e0(0x29b),
      EZYIu: _0xd072e0(0x1fd),
      kSqtK: _0xd072e0(0x13d),
      aNEJt: function (_0xd6ed45, _0x4d5c2e) {
        return _0xd6ed45 === _0x4d5c2e;
      },
      gbFFx: _0xd072e0(0x257),
      bwnRD: _0xd072e0(0x1b3),
      sRrno: _0xd072e0(0x1d4),
      SFKqX: function (_0x2dd5ab, _0x6f6c50) {
        return _0x2dd5ab < _0x6f6c50;
      },
      tHaup: _0xd072e0(0x189),
      kVgnC: _0xd072e0(0xdf),
      ANpdZ: _0xd072e0(0x2a3),
      aAthq: "กรุณาเลือกสาขา",
      fvwLy: _0xd072e0(0x95),
      KiWsf: _0xd072e0(0x24c),
      CXkUq: _0xd072e0(0x2b2),
      rOQyf: _0xd072e0(0x2f6),
      duFvI: _0xd072e0(0x13a),
      rwZgC: _0xd072e0(0xad),
      kTlIT: _0xd072e0(0xb9),
      lvnha: _0xd072e0(0xc0),
      zejsR: _0xd072e0(0x108),
    };
  let _0x50e9be = !![];
  const _0x4af8ad = {},
    _0x21425f = document[_0xd072e0(0x223)](_0x4c3f82[_0xd072e0(0x222)])[
      _0xd072e0(0x271)
    ][_0xd072e0(0x2dc)]();
  if (!_0x21425f) (_0x4af8ad["email"] = _0x4c3f82["UbdEd"]), (_0x50e9be = ![]);
  else {
    const _0x583f47 = _0x4c3f82[_0xd072e0(0x2a9)](validateEmail, _0x21425f);
    !_0x583f47["valid"] &&
      ((_0x4af8ad[_0xd072e0(0x88)] = _0x583f47[_0xd072e0(0x101)]),
      (_0x50e9be = ![]));
  }
  const _0x48921c = document[_0xd072e0(0x223)](_0x4c3f82["ojGXg"])[
    _0xd072e0(0x271)
  ]["trim"]();
  if (!_0x48921c)
    (_0x4af8ad[_0xd072e0(0x245)] = _0x4c3f82[_0xd072e0(0x2f9)]),
      (_0x50e9be = ![]);
  else
    !patterns[_0xd072e0(0xa2)]["test"](_0x48921c) &&
      ((_0x4af8ad[_0xd072e0(0x245)] = _0xd072e0(0x195)), (_0x50e9be = ![]));
  const _0x52f9b1 = document[_0xd072e0(0x223)](_0x4c3f82[_0xd072e0(0x231)])[
    "value"
  ]["trim"]();
  if (!_0x52f9b1)
    (_0x4af8ad[_0xd072e0(0x123)] = _0xd072e0(0x1c1)), (_0x50e9be = ![]);
  else
    !patterns[_0xd072e0(0xa2)][_0xd072e0(0x1ad)](_0x52f9b1) &&
      ((_0x4af8ad[_0xd072e0(0x123)] = _0xd072e0(0x115)), (_0x50e9be = ![]));
  const _0x536149 = document["getElementById"](_0x4c3f82[_0xd072e0(0x283)])[
    _0xd072e0(0x271)
  ][_0xd072e0(0x2dc)]();
  if (!_0x536149)
    (_0x4af8ad[_0xd072e0(0x29b)] = _0x4c3f82[_0xd072e0(0x2ba)]),
      (_0x50e9be = ![]);
  else
    !patterns[_0xd072e0(0x29b)][_0xd072e0(0x1ad)](_0x536149) &&
      ((_0x4af8ad[_0xd072e0(0x29b)] = _0x4c3f82[_0xd072e0(0x20d)]),
      (_0x50e9be = ![]));
  if (_0x4c3f82["aNEJt"](deliveryType, _0x4c3f82[_0xd072e0(0x175)])) {
    const _0x18ef22 = document[_0xd072e0(0x223)](_0x4c3f82[_0xd072e0(0x230)])[
      _0xd072e0(0x271)
    ][_0xd072e0(0x2dc)]();
    if (!_0x18ef22)
      (_0x4af8ad[_0xd072e0(0x1b3)] = _0x4c3f82["sRrno"]), (_0x50e9be = ![]);
    else
      _0x4c3f82[_0xd072e0(0x2ee)](_0x18ef22[_0xd072e0(0x269)], 0x14) &&
        ((_0x4af8ad["address"] = _0x4c3f82["tHaup"]), (_0x50e9be = ![]));
  }
  const _0x361ebc = document["getElementById"](_0xd072e0(0x2b2))[
    _0xd072e0(0x1cb)
  ][0x0];
  !_0x361ebc && ((_0x4af8ad["slip"] = _0xd072e0(0x315)), (_0x50e9be = ![]));
  const _0x5b0d47 = document[_0xd072e0(0x223)]("status")[_0xd072e0(0x271)];
  if (
    _0x4c3f82[_0xd072e0(0x311)](_0x5b0d47, _0x4c3f82["kVgnC"]) ||
    _0x5b0d47 === _0xd072e0(0x299)
  ) {
    const _0x3733f4 = document[_0xd072e0(0x223)](_0x4c3f82[_0xd072e0(0x171)])[
      _0xd072e0(0x271)
    ];
    _0x5b0d47 === _0x4c3f82["kVgnC"] &&
      !_0x3733f4 &&
      ((_0x4af8ad["major"] = _0x4c3f82["aAthq"]), (_0x50e9be = ![]));
    const _0x27a1bb = document[_0xd072e0(0x223)](_0xd072e0(0x221))[
      _0xd072e0(0x271)
    ];
    _0x5b0d47 === _0xd072e0(0x299) &&
      !_0x27a1bb &&
      ((_0x4af8ad[_0xd072e0(0x221)] = _0x4c3f82["fvwLy"]), (_0x50e9be = ![]));
    const _0x1aee71 = document[_0xd072e0(0x223)](_0xd072e0(0x1d0))[
      _0xd072e0(0x271)
    ][_0xd072e0(0x2dc)]();
    !_0x1aee71 &&
      ((_0x4af8ad[_0xd072e0(0x15d)] = _0x4c3f82[_0xd072e0(0x28f)]),
      (_0x50e9be = ![]));
  }
  return (
    Object[_0xd072e0(0x23c)](_0x4af8ad)["forEach"]((_0x241552) => {
      const _0x248d46 = _0xd072e0,
        _0x1204a0 = document[_0x248d46(0x223)](_0x241552 + _0x248d46(0x156));
      _0x1204a0 && (_0x1204a0["textContent"] = _0x4af8ad[_0x241552]);
    }),
    [
      _0x4c3f82["roTCt"],
      _0x4c3f82["ojGXg"],
      _0xd072e0(0x123),
      _0xd072e0(0x29b),
      _0x4c3f82[_0xd072e0(0x230)],
      _0x4c3f82[_0xd072e0(0xca)],
      _0xd072e0(0x2a3),
      _0xd072e0(0x15d),
    ]["forEach"]((_0x5475d0) => {
      const _0x1e8f45 = _0xd072e0;
      if (!_0x4af8ad[_0x5475d0]) {
        const _0x1ff8a5 = document[_0x1e8f45(0x223)](
          _0x5475d0 + _0x1e8f45(0x156)
        );
        _0x1ff8a5 && (_0x1ff8a5[_0x1e8f45(0x1b9)] = "");
      }
    }),
    !_0x50e9be &&
      (_0x4c3f82[_0xd072e0(0x311)](
        Object[_0xd072e0(0x23c)](_0x4af8ad)[_0xd072e0(0x269)],
        0x1
      ) && _0x4af8ad[_0xd072e0(0x88)]
        ? (Swal[_0xd072e0(0x310)]({
            title: _0x4c3f82["rOQyf"],
            text: _0x4af8ad[_0xd072e0(0x88)],
            icon: _0x4c3f82[_0xd072e0(0x119)],
            showCancelButton: ![],
            confirmButtonColor: _0x4c3f82[_0xd072e0(0x18c)],
            confirmButtonText: _0xd072e0(0xc0),
          }),
          document[_0xd072e0(0x223)](_0xd072e0(0x88))[_0xd072e0(0x318)]())
        : (Swal[_0xd072e0(0x310)]({
            title: _0xd072e0(0x29c),
            text: _0x4c3f82[_0xd072e0(0x1fc)],
            icon: "warning",
            showCancelButton: ![],
            confirmButtonColor: _0x4c3f82["rwZgC"],
            confirmButtonText: _0x4c3f82[_0xd072e0(0x1ec)],
          }),
          window["scrollTo"]({
            top: 0x0,
            behavior: _0x4c3f82[_0xd072e0(0x1d8)],
          }))),
    _0x50e9be
  );
}
function proceedToCheckout() {
  const _0x13976d = a0_0xbc5d54,
    _0x5016fc = {
      Esgdt: _0x13976d(0x266),
      jYiOG: _0x13976d(0x108),
      EPeLk: function (_0x5c59e5, _0x4c59c1) {
        return _0x5c59e5(_0x4c59c1);
      },
      gITlM: function (_0x5682dd, _0x397ae9) {
        return _0x5682dd === _0x397ae9;
      },
      DtoIL: "individual",
      arlkt: function (_0x373738, _0x26bad0) {
        return _0x373738(_0x26bad0);
      },
      zgANk: _0x13976d(0x1e5),
      TsCVl: function (_0x43c266, _0x4956ce) {
        return _0x43c266 > _0x4956ce;
      },
      qmxog: _0x13976d(0x13a),
      swvpG: "เกินจำนวนที่กำหนด",
      zAspn: _0x13976d(0xc0),
      OCIbd: function (_0x5522f0, _0x14ae35) {
        return _0x5522f0(_0x14ae35);
      },
      jPvDL: function (_0x22a75b, _0x6798eb) {
        return _0x22a75b > _0x6798eb;
      },
      hcpks: _0x13976d(0x154),
      pSSsR: _0x13976d(0x224),
      HkWzP: _0x13976d(0x2f2),
      BhpaC: function (_0x56dbb2, _0xb308ca) {
        return _0x56dbb2(_0xb308ca);
      },
      ToEBz: "shopping-section",
      jxHWa: "product-btn",
      xykRH: _0x13976d(0xe5),
      zXQjX: "block",
      ZPLjj: "checkout-section",
    };
  document[_0x13976d(0x223)](_0x5016fc[_0x13976d(0x305)])["scrollIntoView"]({
    behavior: _0x5016fc["jYiOG"],
  }),
    window["scrollTo"]({ top: 0x0, behavior: _0x5016fc[_0x13976d(0x82)] });
  if (!selectedPackage) {
    _0x5016fc["EPeLk"](alert, _0x13976d(0xac));
    return;
  }
  if (_0x5016fc[_0x13976d(0x235)](selectedPackage, _0x5016fc["DtoIL"])) {
    const _0x4a2083 = Object["values"](individualItems)["some"](
      (_0x5a72e) => _0x5a72e[_0x13976d(0x2c0)] > 0x0
    );
    if (!_0x4a2083) {
      _0x5016fc["arlkt"](alert, _0x5016fc[_0x13976d(0x162)]);
      return;
    }
    const _0x4c0f3f = Object[_0x13976d(0x17f)](individualItems)[
      _0x13976d(0x2a0)
    ]((_0x211d25, _0x50474d) => _0x211d25 + _0x50474d["quantity"], 0x0);
    if (_0x5016fc[_0x13976d(0x8f)](_0x4c0f3f, 0x3)) {
      Swal[_0x13976d(0x310)]({
        icon: _0x5016fc["qmxog"],
        title: _0x5016fc[_0x13976d(0xbe)],
        text: _0x13976d(0x91),
        confirmButtonText: _0x5016fc[_0x13976d(0x312)],
      });
      return;
    }
    if (individualItems["polo"]["quantity"] > 0x0) {
      const _0x3ba853 = selectedSizes[_0x13976d(0xc8)]["every"](
        (_0x3adcbc) => _0x3adcbc !== null
      );
      if (!_0x3ba853) {
        alert("กรุณาเลือกไซส์เสื้อโปโลให้ครบทุกตัว");
        return;
      }
    }
    if (_0x5016fc["TsCVl"](individualItems["jacket"]["quantity"], 0x0)) {
      const _0x4f26ec = selectedSizes["jacket"]["every"](
        (_0x476003) => _0x476003 !== null
      );
      if (!_0x4f26ec) {
        _0x5016fc["OCIbd"](alert, _0x13976d(0x218));
        return;
      }
    }
    if (
      _0x5016fc[_0x13976d(0x2d6)](
        individualItems[_0x13976d(0x193)]["quantity"],
        0x0
      )
    ) {
      const _0x4f4f08 = selectedSizes[_0x13976d(0x193)][_0x13976d(0x178)](
        (_0x37aa46) => _0x37aa46 !== null
      );
      if (!_0x4f4f08) {
        alert(_0x5016fc[_0x13976d(0x7b)]);
        return;
      }
    }
  } else {
    const _0x364dbb = packages[selectedPackage][_0x13976d(0x186)];
    if (
      _0x364dbb["includes"](_0x5016fc[_0x13976d(0x251)]) &&
      !selectedSizes[_0x13976d(0xc8)][0x0]
    ) {
      _0x5016fc[_0x13976d(0x2ad)](alert, _0x5016fc["HkWzP"]);
      return;
    }
    if (
      _0x364dbb[_0x13976d(0x152)]("เสื้อแจ็คเก็ต") &&
      !selectedSizes["jacket"][0x0]
    ) {
      _0x5016fc[_0x13976d(0x183)](alert, _0x13976d(0x2c5));
      return;
    }
  }
  (document[_0x13976d(0x223)](_0x5016fc[_0x13976d(0xef)])[_0x13976d(0x133)][
    "display"
  ] = "none"),
    (document[_0x13976d(0x223)](_0x5016fc[_0x13976d(0x2c3)])[_0x13976d(0x133)][
      _0x13976d(0x141)
    ] = _0x5016fc[_0x13976d(0x1ea)]),
    (document[_0x13976d(0x223)](_0x13976d(0x2e5))[_0x13976d(0x133)]["display"] =
      _0x5016fc[_0x13976d(0x182)]),
    document[_0x13976d(0x223)](_0x5016fc[_0x13976d(0x306)])[_0x13976d(0x112)]({
      behavior: _0x5016fc["jYiOG"],
    });
}
function updateFinalSummary() {
  const _0x228647 = a0_0xbc5d54,
    _0x20044e = {
      avypj: _0x228647(0x266),
      cvlAq: _0x228647(0x167),
      YnEjk: _0x228647(0x257),
      HSfaa: _0x228647(0xdc),
      ZLaup: _0x228647(0x286),
      xavjP: _0x228647(0x15f),
      ysakV: _0x228647(0x1f4),
      jddTD: function (_0x3dced5, _0xbf9034) {
        return _0x3dced5 > _0xbf9034;
      },
      swxOU: function (_0x59332a, _0x34882e) {
        return _0x59332a < _0x34882e;
      },
      QNcnV: function (_0x592dd2, _0x35be3b) {
        return _0x592dd2 + _0x35be3b;
      },
      kKMmv: function (_0x109cc1, _0xaaca58) {
        return _0x109cc1 + _0xaaca58;
      },
      uUxoQ: function (_0x393659, _0x3ffb) {
        return _0x393659 > _0x3ffb;
      },
      zmhEW: _0x228647(0x261),
      sxoYC: _0x228647(0xa7),
      hzyfo: _0x228647(0x2bd),
      yQVjt: _0x228647(0x1b4),
      jlarr: _0x228647(0x188),
      lSDam: _0x228647(0x226),
    },
    _0xc7034e = document[_0x228647(0x223)](_0x228647(0x96));
  let _0x5a0c7f = totalAmount;
  deliveryType &&
    (document["getElementById"](_0x20044e[_0x228647(0x14d)])["style"][
      _0x228647(0x141)
    ] = _0x20044e[_0x228647(0x313)]);
  deliveryType === _0x20044e[_0x228647(0x242)] && (_0x5a0c7f += 0x32);
  _0xc7034e["innerHTML"] = "";
  const _0x56901b = packages[selectedPackage],
    _0x2c9278 = document[_0x228647(0x198)](_0x20044e[_0x228647(0x93)]);
  _0x2c9278["style"][_0x228647(0x24f)] = _0x20044e[_0x228647(0x2c1)];
  const _0x50651a = document[_0x228647(0x198)](_0x20044e["xavjP"]);
  (_0x50651a[_0x228647(0x1b9)] = _0x56901b[_0x228647(0xa2)]),
    _0x2c9278[_0x228647(0xc3)](_0x50651a),
    _0x2c9278[_0x228647(0xc3)](document[_0x228647(0x198)]("br"));
  if (selectedPackage === _0x20044e[_0x228647(0x208)]) {
    if (
      _0x20044e[_0x228647(0x209)](
        individualItems[_0x228647(0xc8)][_0x228647(0x2c0)],
        0x0
      )
    ) {
      const _0x361e96 = document["createElement"](_0x228647(0xdc));
      (_0x361e96[_0x228647(0x1b9)] =
        _0x228647(0x1e0) +
        individualItems[_0x228647(0xc8)][_0x228647(0x2c0)] +
        "\x20ชิ้น"),
        _0x2c9278[_0x228647(0xc3)](_0x361e96);
      for (
        let _0x300e20 = 0x0;
        _0x20044e[_0x228647(0x206)](
          _0x300e20,
          individualItems["polo"]["quantity"]
        );
        _0x300e20++
      ) {
        const _0x22fb4a = document[_0x228647(0x198)]("div");
        (_0x22fb4a["textContent"] =
          _0x228647(0x2af) +
          _0x20044e[_0x228647(0x25d)](_0x300e20, 0x1) +
          ":\x20ไซส์\x20" +
          selectedSizes[_0x228647(0xc8)][_0x300e20]),
          _0x2c9278[_0x228647(0xc3)](_0x22fb4a);
      }
    }
    if (individualItems[_0x228647(0xc1)][_0x228647(0x2c0)] > 0x0) {
      const _0x2a26cc = document[_0x228647(0x198)](_0x228647(0xdc));
      (_0x2a26cc[_0x228647(0x1b9)] =
        "เสื้อแจ็คเก็ต:\x20" +
        individualItems[_0x228647(0xc1)][_0x228647(0x2c0)] +
        _0x228647(0x2ca)),
        _0x2c9278[_0x228647(0xc3)](_0x2a26cc);
      for (
        let _0x6ae62 = 0x0;
        _0x20044e["swxOU"](
          _0x6ae62,
          individualItems["jacket"][_0x228647(0x2c0)]
        );
        _0x6ae62++
      ) {
        const _0x13b2a9 = document["createElement"](_0x228647(0xdc));
        (_0x13b2a9[_0x228647(0x1b9)] =
          "\x20\x20\x20-\x20ตัวที่\x20" +
          _0x20044e["kKMmv"](_0x6ae62, 0x1) +
          _0x228647(0x1aa) +
          selectedSizes["jacket"][_0x6ae62]),
          _0x2c9278[_0x228647(0xc3)](_0x13b2a9);
      }
    }
    if (individualItems[_0x228647(0x23d)][_0x228647(0x2c0)] > 0x0) {
      const _0x14faf9 = document[_0x228647(0x198)](_0x20044e["HSfaa"]);
      (_0x14faf9[_0x228647(0x1b9)] =
        "หัวเข็มขัด:\x20" +
        individualItems[_0x228647(0x23d)][_0x228647(0x2c0)] +
        _0x228647(0x2ca)),
        _0x2c9278[_0x228647(0xc3)](_0x14faf9);
    }
    if (
      _0x20044e[_0x228647(0x209)](
        individualItems[_0x228647(0x2b3)][_0x228647(0x2c0)],
        0x0
      )
    ) {
      const _0x4446e3 = document["createElement"](_0x20044e[_0x228647(0x93)]);
      (_0x4446e3[_0x228647(0x1b9)] =
        _0x228647(0x274) +
        individualItems["tung"][_0x228647(0x2c0)] +
        "\x20ชิ้น"),
        _0x2c9278["appendChild"](_0x4446e3);
    }
    if (_0x20044e["uUxoQ"](individualItems["tie"][_0x228647(0x2c0)], 0x0)) {
      const _0x3cbc69 = document[_0x228647(0x198)](_0x20044e[_0x228647(0x93)]);
      (_0x3cbc69[_0x228647(0x1b9)] =
        _0x228647(0x293) + individualItems["tie"]["quantity"] + "\x20ชิ้น"),
        _0x2c9278[_0x228647(0xc3)](_0x3cbc69);
    }
  } else {
    const _0x38c605 = document[_0x228647(0x198)](_0x20044e[_0x228647(0x93)]);
    (_0x38c605[_0x228647(0x1b9)] =
      _0x228647(0x21d) + quantity + _0x228647(0xfa)),
      _0x2c9278[_0x228647(0xc3)](_0x38c605);
    if (selectedSizes[_0x228647(0xc8)][0x0]) {
      const _0x25be1b = document[_0x228647(0x198)](_0x20044e["HSfaa"]);
      (_0x25be1b[_0x228647(0x1b9)] =
        _0x228647(0xf6) + selectedSizes["polo"][0x0]),
        _0x2c9278[_0x228647(0xc3)](_0x25be1b);
    }
    if (selectedSizes["jacket"][0x0]) {
      const _0x2d8d65 = document[_0x228647(0x198)](_0x20044e[_0x228647(0x93)]);
      (_0x2d8d65[_0x228647(0x1b9)] =
        _0x228647(0xc7) + selectedSizes[_0x228647(0xc1)][0x0]),
        _0x2c9278[_0x228647(0xc3)](_0x2d8d65);
    }
  }
  _0xc7034e["appendChild"](_0x2c9278);
  if (deliveryType) {
    const _0x11aaba = document["createElement"](_0x20044e["HSfaa"]);
    (_0x11aaba[_0x228647(0x133)][_0x228647(0x24f)] =
      _0x20044e[_0x228647(0x20b)]),
      (_0x11aaba["textContent"] =
        _0x228647(0x2cd) +
        (deliveryType === _0x20044e["sxoYC"]
          ? _0x20044e[_0x228647(0xd3)]
          : _0x20044e["yQVjt"])),
      _0xc7034e[_0x228647(0xc3)](_0x11aaba);
    if (deliveryType === _0x20044e["YnEjk"]) {
      const _0x331d13 = document[_0x228647(0x198)](_0x20044e[_0x228647(0x93)]);
      (_0x331d13[_0x228647(0x1b9)] = _0x20044e["jlarr"]),
        _0xc7034e[_0x228647(0xc3)](_0x331d13);
    }
  }
  const _0x506179 = document[_0x228647(0x198)](_0x228647(0xdc));
  (_0x506179["className"] = _0x20044e[_0x228647(0x309)]),
    (_0x506179["style"]["cssText"] =
      "font-size:\x201.7em;\x20font-weight:\x20bold;\x20color:\x20#0d6efd;"),
    (_0x506179[_0x228647(0x1b9)] =
      "รวมทั้งสิ้น:\x20" + _0x5a0c7f["toLocaleString"]() + _0x228647(0x30d)),
    _0xc7034e[_0x228647(0xc3)](_0x506179);
}
function generateEmailHTML(_0x4b303c) {
  const _0x4f7c00 = a0_0xbc5d54,
    _0x349c71 = {
      XJHNX: function (_0x263031, _0x3af186) {
        return _0x263031(_0x3af186);
      },
      TApWC: function (_0x512c46, _0x26afbe) {
        return _0x512c46 === _0x26afbe;
      },
      VudAE: function (_0xfd748c, _0x4b091f) {
        return _0xfd748c > _0x4b091f;
      },
      fZNnc: function (_0x43bed0, _0x5ed7b6) {
        return _0x43bed0 < _0x5ed7b6;
      },
      WczZd: function (_0x18acab, _0x136d1e) {
        return _0x18acab + _0x136d1e;
      },
      BTxAC: function (_0x4b429d, _0x32c352) {
        return _0x4b429d < _0x32c352;
      },
      rEgqG: function (_0x173edb, _0x574f6c) {
        return _0x173edb(_0x574f6c);
      },
      IaFeo: function (_0x11d575, _0x542658) {
        return _0x11d575 > _0x542658;
      },
      rkqwF: function (_0xb52887, _0x29b282) {
        return _0xb52887 < _0x29b282;
      },
      JVFlq: _0x4f7c00(0x8b),
      hHFra: _0x4f7c00(0x180),
      lnHNb: function (_0x40a2a0, _0x496373) {
        return _0x40a2a0(_0x496373);
      },
      ymyZp: function (_0x178098, _0x25daf8) {
        return _0x178098(_0x25daf8);
      },
      klwiS: function (_0x593d24, _0x3a18cc) {
        return _0x593d24(_0x3a18cc);
      },
      TDPoq: function (_0x1ff62f, _0xff59b5) {
        return _0x1ff62f(_0xff59b5);
      },
      oBFcz: _0x4f7c00(0xa7),
      REiyJ: "รับที่วิทยาลัย",
      AyQPU: _0x4f7c00(0x1b4),
      HClMQ: function (_0x51622a, _0x2fa50d) {
        return _0x51622a(_0x2fa50d);
      },
    },
    _0x342c2c = new Date();
  let _0x31ecdc =
    _0x4f7c00(0x1e7) +
    _0x349c71[_0x4f7c00(0x247)](sanitizeText, _0x4b303c[_0x4f7c00(0x2e4)]) +
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>แพ็คเก็จ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
    _0x349c71[_0x4f7c00(0x247)](sanitizeText, _0x4b303c[_0x4f7c00(0x158)]) +
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>";
  if (_0x349c71[_0x4f7c00(0x1ca)](selectedPackage, _0x4f7c00(0x1f4))) {
    if (
      _0x349c71[_0x4f7c00(0x1fa)](
        _0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0xc8)],
        0x0
      )
    ) {
      _0x31ecdc +=
        _0x4f7c00(0x1f0) +
        _0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0xc8)] +
        "\x20ชิ้น</span></div>";
      for (
        let _0x4b02ee = 0x0;
        _0x349c71[_0x4f7c00(0x288)](
          _0x4b02ee,
          _0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0xc8)]
        );
        _0x4b02ee++
      ) {
        _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc8)] &&
          _0x4b303c[_0x4f7c00(0x185)]["polo"][_0x4b02ee] &&
          (_0x31ecdc +=
            _0x4f7c00(0x26e) +
            _0x349c71["WczZd"](_0x4b02ee, 0x1) +
            _0x4f7c00(0x1aa) +
            _0x349c71["XJHNX"](
              sanitizeText,
              _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc8)][_0x4b02ee]
            ) +
            "</div>");
      }
    }
    if (_0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0xc1)] > 0x0) {
      _0x31ecdc +=
        _0x4f7c00(0x30f) + _0x4b303c["items"]["jacket"] + _0x4f7c00(0xfe);
      for (
        let _0x319eb9 = 0x0;
        _0x349c71["BTxAC"](
          _0x319eb9,
          _0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0xc1)]
        );
        _0x319eb9++
      ) {
        _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)] &&
          _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)][_0x319eb9] &&
          (_0x31ecdc +=
            _0x4f7c00(0x26e) +
            _0x349c71[_0x4f7c00(0x2a5)](_0x319eb9, 0x1) +
            ":\x20ไซส์\x20" +
            _0x349c71[_0x4f7c00(0x103)](
              sanitizeText,
              _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)][_0x319eb9]
            ) +
            _0x4f7c00(0x2d5));
      }
    }
    if (
      _0x349c71[_0x4f7c00(0x130)](
        _0x4b303c[_0x4f7c00(0x186)][_0x4f7c00(0x193)],
        0x0
      )
    ) {
      _0x31ecdc +=
        "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อ\x20JERSEY:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
        _0x4b303c["items"][_0x4f7c00(0x193)] +
        "\x20ชิ้น</span></div>";
      for (
        let _0x4b8ab8 = 0x0;
        _0x349c71[_0x4f7c00(0x277)](
          _0x4b8ab8,
          _0x4b303c["items"][_0x4f7c00(0x193)]
        );
        _0x4b8ab8++
      ) {
        _0x4b303c[_0x4f7c00(0x185)]["jersey"] &&
          _0x4b303c[_0x4f7c00(0x185)]["jersey"][_0x4b8ab8] &&
          (_0x31ecdc +=
            _0x4f7c00(0x26e) +
            (_0x4b8ab8 + 0x1) +
            _0x4f7c00(0x1aa) +
            _0x349c71["rEgqG"](
              sanitizeText,
              _0x4b303c["sizes"]["jersey"][_0x4b8ab8]
            ) +
            _0x4f7c00(0x2d5));
      }
    }
  } else
    (_0x31ecdc +=
      _0x4f7c00(0x2f7) + _0x4b303c[_0x4f7c00(0x2c0)] + _0x4f7c00(0x1df)),
      _0x4b303c[_0x4f7c00(0x185)]["polo"] &&
        _0x349c71[_0x4f7c00(0x1fa)](
          _0x4b303c["sizes"][_0x4f7c00(0xc8)][_0x4f7c00(0x269)],
          0x0
        ) &&
        _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc8)][0x0] &&
        (_0x31ecdc +=
          _0x4f7c00(0x181) +
          sanitizeText(_0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc8)][0x0]) +
          _0x4f7c00(0x191)),
      _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)] &&
        _0x349c71["IaFeo"](
          _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)][_0x4f7c00(0x269)],
          0x0
        ) &&
        _0x4b303c["sizes"]["jacket"][0x0] &&
        (_0x31ecdc +=
          _0x4f7c00(0x14f) +
          _0x349c71[_0x4f7c00(0x103)](
            sanitizeText,
            _0x4b303c[_0x4f7c00(0x185)][_0x4f7c00(0xc1)][0x0]
          ) +
          _0x4f7c00(0x191));
  return (
    (_0x31ecdc +=
      _0x4f7c00(0x241) +
      _0x342c2c[_0x4f7c00(0x118)](_0x349c71[_0x4f7c00(0x238)], {
        year: _0x4f7c00(0x180),
        month: _0x4f7c00(0x229),
        day: _0x349c71[_0x4f7c00(0x1d6)],
      }) +
      _0x4f7c00(0x129) +
      _0x349c71[_0x4f7c00(0x1fe)](sanitizeText, _0x4b303c["firstname"]) +
      "\x20" +
      _0x349c71["ymyZp"](sanitizeText, _0x4b303c[_0x4f7c00(0x123)]) +
      _0x4f7c00(0xd8) +
      _0x349c71[_0x4f7c00(0x254)](sanitizeText, _0x4b303c[_0x4f7c00(0x88)]) +
      "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>เบอร์โทร:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
      _0x349c71[_0x4f7c00(0x1e6)](sanitizeText, _0x4b303c[_0x4f7c00(0x29b)]) +
      "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วิธีรับสินค้า:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
      (_0x349c71[_0x4f7c00(0x1ca)](
        _0x4b303c[_0x4f7c00(0x308)],
        _0x349c71["oBFcz"]
      )
        ? _0x349c71[_0x4f7c00(0x17a)]
        : _0x349c71[_0x4f7c00(0x29e)]) +
      _0x4f7c00(0x8e) +
      _0x4b303c[_0x4f7c00(0x2aa)][_0x4f7c00(0x120)]() +
      _0x4f7c00(0x14c) +
      _0x349c71[_0x4f7c00(0x174)](sanitizeText, _0x4b303c[_0x4f7c00(0x25c)]) +
      _0x4f7c00(0x17e)),
    _0x31ecdc
  );
}
function sanitizeText(_0x29621d) {
  const _0x22d0bd = a0_0xbc5d54,
    _0x50d6df = {
      NYrJw: _0x22d0bd(0x1e9),
      nujOx: "&gt;",
      DDDDp: _0x22d0bd(0x1d1),
      MdWIC: _0x22d0bd(0x262),
    };
  if (!_0x29621d) return "";
  return _0x29621d["replace"](/</g, _0x50d6df["NYrJw"])
    [_0x22d0bd(0xb6)](/>/g, _0x50d6df[_0x22d0bd(0xf8)])
    [_0x22d0bd(0xb6)](/"/g, _0x50d6df[_0x22d0bd(0x84)])
    [_0x22d0bd(0xb6)](/'/g, _0x50d6df[_0x22d0bd(0x199)]);
}
function generateItemsSummary() {
  const _0x475e18 = a0_0xbc5d54;
  return {
    polo: individualItems["polo"]["quantity"],
    jacket: individualItems[_0x475e18(0xc1)][_0x475e18(0x2c0)],
    jersey: individualItems[_0x475e18(0x193)][_0x475e18(0x2c0)],
    belt: individualItems[_0x475e18(0x23d)]["quantity"],
    tung_ting: individualItems[_0x475e18(0x2b3)][_0x475e18(0x2c0)],
    tie_clip: individualItems["tie"]["quantity"],
  };
}
async function uploadSlipViaServer(_0x34f1a4, _0x4b75ce, _0x5654e1) {
  const _0x1580a3 = a0_0xbc5d54,
    _0x4c5708 = {
      JGIjk: function (_0x1ee260, _0x212de4) {
        return _0x1ee260(_0x212de4);
      },
      bfqnp: "firstname",
      mzaZT: _0x1580a3(0x123),
      CsgQv: _0x1580a3(0x2ae),
      mkejZ: function (_0x3c1f15, _0x134cf1, _0x38e8cf) {
        return _0x3c1f15(_0x134cf1, _0x38e8cf);
      },
      CyTBy: _0x1580a3(0xc5),
      dMkAk: _0x1580a3(0x1cc),
      HELog: _0x1580a3(0x1dd),
      tyAyJ: _0x1580a3(0x101),
    };
  try {
    const _0x223dc5 = {
        file: _0x4b75ce,
        fileName:
          _0x5654e1 +
          "_" +
          _0x4c5708["JGIjk"](
            sanitizeText,
            document["getElementById"](_0x4c5708[_0x1580a3(0x1b7)])[
              _0x1580a3(0x271)
            ][_0x1580a3(0x2dc)]()
          ) +
          "_" +
          sanitizeText(
            document[_0x1580a3(0x223)](_0x4c5708[_0x1580a3(0x2ed)])["value"][
              _0x1580a3(0x2dc)
            ]()
          ),
        type: _0x4c5708["CsgQv"],
        orderRef: _0x5654e1,
      },
      _0x2fff7b = await _0x4c5708[_0x1580a3(0x105)](fetch, _0x1580a3(0x26f), {
        method: _0x4c5708[_0x1580a3(0x125)],
        headers: { "Content-Type": _0x4c5708[_0x1580a3(0x275)] },
        body: JSON[_0x1580a3(0x196)](_0x223dc5),
      });
    if (!_0x2fff7b["ok"])
      throw new Error(_0x1580a3(0x253) + _0x2fff7b["status"]);
    const _0x3d4d0f = await _0x2fff7b[_0x1580a3(0x1f6)]();
    return _0x3d4d0f;
  } catch (_0x473b61) {
    return (
      console[_0x1580a3(0x101)](_0x4c5708["HELog"], _0x473b61),
      {
        status: _0x4c5708[_0x1580a3(0x22b)],
        message: _0x473b61["message"] || _0x1580a3(0x14e),
      }
    );
  }
}
let originalSubmitButtonHTML = "";
function resetSubmitButtonState() {
  const _0x532d1e = a0_0xbc5d54,
    _0x42b09e = { cfOnf: _0x532d1e(0x214), IUfkZ: _0x532d1e(0x1c5) },
    _0x181cd2 = document[_0x532d1e(0x223)](_0x42b09e["cfOnf"]);
  _0x181cd2 &&
    ((_0x181cd2[_0x532d1e(0x138)] = ![]),
    originalSubmitButtonHTML
      ? (_0x181cd2["innerHTML"] = originalSubmitButtonHTML)
      : (_0x181cd2[_0x532d1e(0x297)] = _0x42b09e["IUfkZ"]));
}
function compressImage(_0x4afa0e) {
  const _0x591ff6 = a0_0xbc5d54,
    _0x5bc368 = {
      CZnwK: function (_0x4fb9bc, _0x58fdcd) {
        return _0x4fb9bc / _0x58fdcd;
      },
      wjSYT: _0x591ff6(0x1fb),
      nSzvC: _0x591ff6(0x2ae),
      InjfW: function (_0x3258cb, _0x59ea59) {
        return _0x3258cb(_0x59ea59);
      },
    };
  return new Promise((_0x27530d, _0x218f03) => {
    const _0x3354ac = _0x591ff6,
      _0x1a8383 = {
        dKoFr: function (_0x5b5131, _0x52b242) {
          const _0x5b6fa8 = a0_0x4c04;
          return _0x5bc368[_0x5b6fa8(0x1b2)](_0x5b5131, _0x52b242);
        },
        RPWgg: _0x5bc368[_0x3354ac(0x161)],
        RuivP: _0x5bc368["nSzvC"],
        hXefj: function (_0x5c3c95, _0x2b16db) {
          const _0xb6b316 = _0x3354ac;
          return _0x5bc368[_0xb6b316(0xe7)](_0x5c3c95, _0x2b16db);
        },
      },
      _0x3b84a5 = new FileReader();
    _0x3b84a5["readAsDataURL"](_0x4afa0e),
      (_0x3b84a5["onload"] = function (_0x3bb5e7) {
        const _0x12c037 = _0x3354ac,
          _0x4ce91a = new Image();
        (_0x4ce91a[_0x12c037(0x126)] = _0x3bb5e7["target"]["result"]),
          (_0x4ce91a[_0x12c037(0xa5)] = function () {
            const _0x446e7c = _0x12c037,
              _0x4676a3 = 0x200,
              _0x341919 = 0x200;
            let _0x138585 = _0x4ce91a[_0x446e7c(0x83)],
              _0x29e7b5 = _0x4ce91a[_0x446e7c(0x2a4)];
            _0x138585 > _0x4676a3 &&
              ((_0x29e7b5 = Math[_0x446e7c(0x1da)](
                _0x1a8383[_0x446e7c(0x142)](_0x29e7b5 * _0x4676a3, _0x138585)
              )),
              (_0x138585 = _0x4676a3));
            _0x29e7b5 > _0x341919 &&
              ((_0x138585 = Math["round"]((_0x138585 * _0x341919) / _0x29e7b5)),
              (_0x29e7b5 = _0x341919));
            const _0xd10b08 = document[_0x446e7c(0x198)](
              _0x1a8383[_0x446e7c(0x27c)]
            );
            (_0xd10b08[_0x446e7c(0x83)] = _0x138585),
              (_0xd10b08["height"] = _0x29e7b5);
            const _0x1623b1 = _0xd10b08[_0x446e7c(0x173)]("2d");
            _0x1623b1[_0x446e7c(0x7c)](
              _0x4ce91a,
              0x0,
              0x0,
              _0x138585,
              _0x29e7b5
            );
            const _0x732f5d = _0xd10b08[_0x446e7c(0x153)](
              _0x1a8383[_0x446e7c(0x258)],
              0.5
            );
            _0x1a8383[_0x446e7c(0x23e)](_0x27530d, _0x732f5d);
          });
      }),
      (_0x3b84a5["onerror"] = (_0x1c13c1) => _0x218f03(_0x1c13c1));
  });
}
async function submitOrder() {
  const _0x3c0a0c = a0_0xbc5d54,
    _0x550348 = {
      IBFkC: function (_0x565219, _0x15271d) {
        return _0x565219(_0x15271d);
      },
      bfGjN: _0x3c0a0c(0x219),
      LEGcx: function (_0xc4c62, _0x385d5d, _0x25b7d1, _0x305901) {
        return _0xc4c62(_0x385d5d, _0x25b7d1, _0x305901);
      },
      TvKys: function (_0x4b7e28, _0x4d81c1) {
        return _0x4b7e28 === _0x4d81c1;
      },
      EZBQc: _0x3c0a0c(0x28b),
      lZcWF: _0x3c0a0c(0x233),
      zwrgf: function (_0x59794c) {
        return _0x59794c();
      },
      MEjPf: function (_0xde35f1) {
        return _0xde35f1();
      },
      nMWLt: function (_0x3fc645, _0x58da56) {
        return _0x3fc645 + _0x58da56;
      },
      MMkNd: function (_0x5345d5, _0x47bb06) {
        return _0x5345d5 + _0x47bb06;
      },
      MIkzD: _0x3c0a0c(0x2b0),
      zEmsr: _0x3c0a0c(0xbf),
      okkKY: function (_0x4a1a0d, _0x120b8c) {
        return _0x4a1a0d(_0x120b8c);
      },
      dCNyP: "กำลังส่งข้อมูลคำสั่งซื้อ...",
      QzasU: function (_0x4a611f, _0x46f038) {
        return _0x4a611f(_0x46f038);
      },
      BpGXa: _0x3c0a0c(0x177),
      nQpQY: function (_0x399afe) {
        return _0x399afe();
      },
      MzhPk: _0x3c0a0c(0x22f),
      oMvzS: _0x3c0a0c(0x214),
      rFDsQ: function (_0x32a618) {
        return _0x32a618();
      },
      fckNM: function (_0x5df416, _0x2998de) {
        return _0x5df416 === _0x2998de;
      },
      EvmOG: function (_0x13ea9f, _0x1d4717) {
        return _0x13ea9f(_0x1d4717);
      },
      HFNRe: _0x3c0a0c(0x25c),
      iKiBF: function (_0x23f339, _0x3d997d) {
        return _0x23f339(_0x3d997d);
      },
      dPXRa: _0x3c0a0c(0x123),
      wjRax: function (_0x1e11ad, _0x514d8c) {
        return _0x1e11ad(_0x514d8c);
      },
      BNWGK: _0x3c0a0c(0x29b),
      xSvjb: "status",
      YLAFr: _0x3c0a0c(0x1d3),
      IeIAY: function (_0x42a6fa, _0x1da3d7) {
        return _0x42a6fa(_0x1da3d7);
      },
      xPuce: _0x3c0a0c(0x2a3),
      wergV: _0x3c0a0c(0x221),
      oWMZy: _0x3c0a0c(0x1d0),
      Dakzd: "shipping",
      Kopqm: function (_0x5b8d51, _0x3aa4d7) {
        return _0x5b8d51 === _0x3aa4d7;
      },
      swGyZ: function (_0x3a44e4, _0x381d8c) {
        return _0x3a44e4 === _0x381d8c;
      },
      oqajp: _0x3c0a0c(0x1f4),
      qBaNa: "4|5|2|3|1|0",
      ZFOrn: function (_0x5c2cd6, _0x12b5c4) {
        return _0x5c2cd6 > _0x12b5c4;
      },
      RgHMl: function (_0x80062, _0x481194) {
        return _0x80062 > _0x481194;
      },
      OJPXh: function (_0xa1d308, _0x5866b4) {
        return _0xa1d308 > _0x5866b4;
      },
      XnFnV: function (_0x9d131, _0x5bf462) {
        return _0x9d131 > _0x5bf462;
      },
      GUJFt: function (_0x555360, _0x448e84) {
        return _0x555360 === _0x448e84;
      },
      BlOTl: _0x3c0a0c(0xa7),
      DbwJr: _0x3c0a0c(0x2bd),
      EqGRr: _0x3c0a0c(0x1b4),
      Hdjit: _0x3c0a0c(0xb7),
      NthZR: "<br>",
      hQPGK: "info",
      mSsBz: _0x3c0a0c(0x124),
      pSmxY: _0x3c0a0c(0x252),
      qTLLK: "swal2-popup-custom",
      XdebE: _0x3c0a0c(0xf4),
      pOZhc: "slip-error",
      EDlrN: _0x3c0a0c(0x315),
      xAiCd:
        "<i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x20me-2\x22></i>\x20กำลังดำเนินการ...",
      XIGlw: _0x3c0a0c(0xe6),
    },
    _0xc7b9b4 = document["getElementById"](_0x550348[_0x3c0a0c(0x12e)]);
  !originalSubmitButtonHTML &&
    (originalSubmitButtonHTML = _0xc7b9b4["innerHTML"]);
  if (_0xc7b9b4["disabled"]) return;
  if (!_0x550348[_0x3c0a0c(0x1ac)](validateForm)) return;
  currentOrderRef = null;
  const _0x3b4a13 = {
    package: selectedPackage,
    packageName: packages[selectedPackage]["name"],
    quantity: _0x550348[_0x3c0a0c(0xb3)](selectedPackage, _0x3c0a0c(0x1f4))
      ? 0x1
      : quantity,
    sizes: selectedSizes,
    notes: _0x550348[_0x3c0a0c(0x2ce)](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348["HFNRe"])["value"][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    email: sanitizeText(
      document[_0x3c0a0c(0x223)](_0x3c0a0c(0x88))[_0x3c0a0c(0x271)][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    firstname: sanitizeText(
      document[_0x3c0a0c(0x223)](_0x3c0a0c(0x245))[_0x3c0a0c(0x271)][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    lastname: _0x550348[_0x3c0a0c(0x301)](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0xf1)])[_0x3c0a0c(0x271)][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    phone: _0x550348[_0x3c0a0c(0xe9)](
      sanitizeText,
      document["getElementById"](_0x550348[_0x3c0a0c(0x100)])[_0x3c0a0c(0x271)][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    status: _0x550348[_0x3c0a0c(0x1e3)](
      sanitizeText,
      document["getElementById"](_0x550348["xSvjb"])[_0x3c0a0c(0x271)]
    ),
    year: _0x550348["QzasU"](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0x151)])[_0x3c0a0c(0x271)]
    ),
    major: _0x550348[_0x3c0a0c(0x2da)](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0x8a)])[_0x3c0a0c(0x271)]
    ),
    faculty: _0x550348[_0x3c0a0c(0x1e3)](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0xed)])["value"]
    ),
    studentId: _0x550348[_0x3c0a0c(0x2ce)](
      sanitizeText,
      document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0xf3)])["value"][
        _0x3c0a0c(0x2dc)
      ]()
    ),
    address: _0x550348["TvKys"](deliveryType, _0x550348[_0x3c0a0c(0x1bc)])
      ? sanitizeText(
          document[_0x3c0a0c(0x223)](_0x3c0a0c(0x1b3))["value"][
            _0x3c0a0c(0x2dc)
          ]()
        )
      : "",
    deliveryType: deliveryType,
    totalAmount: _0x550348[_0x3c0a0c(0x159)](deliveryType, "shipping")
      ? totalAmount + 0x32
      : totalAmount,
    items: generateItemsSummary(),
    orderRef: _0x550348[_0x3c0a0c(0x2d9)](generateOrderRef),
  };
  let _0x50759d = _0x3c0a0c(0x24e) + _0x3b4a13[_0x3c0a0c(0x158)] + "\x0a";
  if (_0x550348["swGyZ"](selectedPackage, _0x550348[_0x3c0a0c(0x28e)])) {
    const _0x2ce7c4 = _0x550348[_0x3c0a0c(0xc6)]["split"]("|");
    let _0x58dd90 = 0x0;
    while (!![]) {
      switch (_0x2ce7c4[_0x58dd90++]) {
        case "0":
          if (
            _0x550348[_0x3c0a0c(0x87)](
              _0x3b4a13[_0x3c0a0c(0x186)]["tie_clip"],
              0x0
            )
          )
            _0x50759d +=
              "ที่หนีบเนคไท:\x20" +
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0x273)] +
              "\x20ชิ้น\x0a";
          continue;
        case "1":
          if (
            _0x550348[_0x3c0a0c(0x304)](
              _0x3b4a13["items"][_0x3c0a0c(0xa4)],
              0x0
            )
          )
            _0x50759d +=
              "ตุ้งติ้ง:\x20" +
              _0x3b4a13["items"][_0x3c0a0c(0xa4)] +
              _0x3c0a0c(0xfc);
          continue;
        case "2":
          if (
            _0x550348[_0x3c0a0c(0x87)](
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0x193)],
              0x0
            )
          )
            _0x50759d +=
              _0x3c0a0c(0x2b4) +
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0x193)] +
              "\x20ชิ้น\x0a";
          continue;
        case "3":
          if (
            _0x550348["OJPXh"](
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0x23d)],
              0x0
            )
          )
            _0x50759d +=
              _0x3c0a0c(0x2e1) +
              _0x3b4a13[_0x3c0a0c(0x186)]["belt"] +
              _0x3c0a0c(0xfc);
          continue;
        case "4":
          if (
            _0x550348[_0x3c0a0c(0x1e4)](
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0xc8)],
              0x0
            )
          )
            _0x50759d +=
              _0x3c0a0c(0x1e0) +
              _0x3b4a13["items"][_0x3c0a0c(0xc8)] +
              _0x3c0a0c(0xfc);
          continue;
        case "5":
          if (_0x550348["XnFnV"](_0x3b4a13[_0x3c0a0c(0x186)]["jacket"], 0x0))
            _0x50759d +=
              "เสื้อแจ็คเก็ต:\x20" +
              _0x3b4a13[_0x3c0a0c(0x186)][_0x3c0a0c(0xc1)] +
              _0x3c0a0c(0xfc);
          continue;
      }
      break;
    }
  }
  (_0x50759d +=
    _0x3c0a0c(0x12c) +
    _0x3b4a13["firstname"] +
    "\x20" +
    _0x3b4a13[_0x3c0a0c(0x123)] +
    "\x0a"),
    (_0x50759d += _0x3c0a0c(0x166) + _0x3b4a13[_0x3c0a0c(0x88)] + "\x0a"),
    (_0x50759d += _0x3c0a0c(0x11f) + _0x3b4a13[_0x3c0a0c(0x29b)] + "\x0a"),
    (_0x50759d +=
      _0x3c0a0c(0x2cd) +
      (_0x550348[_0x3c0a0c(0x29d)](
        _0x3b4a13["deliveryType"],
        _0x550348["BlOTl"]
      )
        ? _0x550348[_0x3c0a0c(0x26d)]
        : _0x550348[_0x3c0a0c(0x160)]) +
      "\x0a"),
    (_0x50759d +=
      _0x3c0a0c(0x127) +
      _0x3b4a13[_0x3c0a0c(0x2aa)][_0x3c0a0c(0x120)]() +
      _0x3c0a0c(0x1d7)),
    (_0x50759d += _0x3b4a13["notes"]
      ? _0x3c0a0c(0x12b) + _0x3b4a13["notes"]
      : "");
  const _0x135373 = await Swal[_0x3c0a0c(0x310)]({
    title: _0x550348[_0x3c0a0c(0x15a)],
    html:
      _0x3c0a0c(0x287) +
      sanitizeText(_0x50759d)[_0x3c0a0c(0xb6)](/\n/g, _0x550348["NthZR"]) +
      _0x3c0a0c(0x2ec),
    icon: _0x550348[_0x3c0a0c(0x18f)],
    showCancelButton: !![],
    confirmButtonText: _0x550348[_0x3c0a0c(0x12a)],
    cancelButtonText: _0x550348["pSmxY"],
    width: 0x258,
    customClass: { popup: _0x550348[_0x3c0a0c(0x9d)] },
  });
  if (!_0x135373[_0x3c0a0c(0x2bb)]) return;
  const _0x4f4a3 = document[_0x3c0a0c(0x223)](_0x3c0a0c(0x2b2))[
    _0x3c0a0c(0x1cb)
  ][0x0];
  if (!_0x4f4a3) {
    _0x550348[_0x3c0a0c(0xe9)](alert, _0x550348[_0x3c0a0c(0x1e8)]),
      (document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0x2ab)])["textContent"] =
        _0x550348["EDlrN"]);
    return;
  }
  (document[_0x3c0a0c(0x223)](_0x550348[_0x3c0a0c(0x2ab)])[_0x3c0a0c(0x1b9)] =
    ""),
    (_0xc7b9b4[_0x3c0a0c(0x138)] = !![]),
    (_0xc7b9b4[_0x3c0a0c(0x297)] = _0x550348[_0x3c0a0c(0x295)]),
    showLoadingMessage(_0x550348[_0x3c0a0c(0x212)]);
  !currentOrderRef &&
    ((currentOrderRef = _0x550348[_0x3c0a0c(0x1ac)](generateOrderRef)),
    (_0x3b4a13["orderRef"] = currentOrderRef));
  const _0x595928 = new FileReader();
  (_0x595928[_0x3c0a0c(0xa5)] = async function (_0x46c127) {
    const _0x505ac3 = _0x3c0a0c;
    try {
      const _0x123859 = await _0x550348[_0x505ac3(0x1e3)](
        compressImage,
        _0x4f4a3
      );
      _0x550348["IBFkC"](showLoadingMessage, _0x550348["bfGjN"]);
      const _0x178902 = await _0x550348[_0x505ac3(0x98)](
        uploadSlipViaServer,
        _0x4f4a3,
        _0x123859,
        currentOrderRef
      );
      if (_0x550348[_0x505ac3(0xeb)](_0x178902["status"], _0x505ac3(0xae)))
        (_0x3b4a13["slipUrl"] = _0x178902[_0x505ac3(0x246)]),
          _0x550348[_0x505ac3(0x1e3)](showLoadingMessage, _0x505ac3(0x2b8)),
          _0x550348["IBFkC"](sendToGoogleForms, _0x3b4a13);
      else throw new Error(_0x178902["message"] || _0x550348[_0x505ac3(0x2a8)]);
    } catch (_0x509315) {
      console[_0x505ac3(0x101)](_0x550348[_0x505ac3(0x259)], _0x509315),
        _0x550348[_0x505ac3(0x2d9)](hideLoadingMessage),
        _0x550348[_0x505ac3(0x140)](resetSubmitButtonState);
      const _0x1b7539 = _0x550348[_0x505ac3(0x1e3)](
        confirm,
        _0x550348[_0x505ac3(0x111)](
          _0x550348[_0x505ac3(0x289)](
            _0x550348[_0x505ac3(0x1a0)],
            _0x509315["message"]
          ),
          _0x505ac3(0x164)
        )
      );
      _0x1b7539 &&
        ((_0x3b4a13[_0x505ac3(0xbb)] = _0x550348[_0x505ac3(0x1a8)]),
        _0x550348[_0x505ac3(0x107)](
          showLoadingMessage,
          _0x550348[_0x505ac3(0x2e8)]
        ),
        _0x550348[_0x505ac3(0x190)](sendToGoogleForms, _0x3b4a13));
    }
  }),
    (_0x595928[_0x3c0a0c(0xde)] = function () {
      const _0x55dda3 = _0x3c0a0c;
      console[_0x55dda3(0x101)](_0x550348[_0x55dda3(0x22e)]),
        hideLoadingMessage(),
        _0x550348[_0x55dda3(0x1a2)](resetSubmitButtonState),
        alert(_0x550348[_0x55dda3(0x2cf)]);
    }),
    _0x595928[_0x3c0a0c(0x29f)](_0x4f4a3);
}
function generateOrderRef() {
  const _0x359c3a = a0_0xbc5d54,
    _0x110326 = new Date(),
    _0x40b1bd = _0x110326[_0x359c3a(0x19d)]();
  return (
    _0x359c3a(0x203) +
    _0x110326["getFullYear"]() +
    (_0x110326["getMonth"]() + 0x1)
      [_0x359c3a(0x128)]()
      [_0x359c3a(0x279)](0x2, "0") +
    _0x40b1bd
  );
}
function showSuccessPage(_0x2eeba1) {
  const _0x93dd94 = a0_0xbc5d54,
    _0x184a73 = {
      SqokZ: "checkout-section",
      KiqPQ: _0x93dd94(0x2e3),
      RxKtS: _0x93dd94(0x167),
      tRSmA: _0x93dd94(0x16f),
      PmFKQ: _0x93dd94(0x1f4),
      JHejB: function (_0x4667a0, _0x56dba8) {
        return _0x4667a0 > _0x56dba8;
      },
      fznKl: function (_0x647c6, _0x2fa5c9) {
        return _0x647c6 < _0x2fa5c9;
      },
      daIsO: function (_0x277f56, _0x5672a9) {
        return _0x277f56 + _0x5672a9;
      },
      MkKUu: function (_0x3dfca4, _0xad172f) {
        return _0x3dfca4 > _0xad172f;
      },
      zFuxC: function (_0x468d8e, _0x583784) {
        return _0x468d8e + _0x583784;
      },
      OKhFP: function (_0x1d436b, _0xc773d9) {
        return _0x1d436b < _0xc773d9;
      },
      eJkNE: "ms-3",
      FokET: function (_0x285d5a, _0x1153b7) {
        return _0x285d5a + _0x1153b7;
      },
      ScJvT: "long",
      bblHu: _0x93dd94(0x180),
      tkuHw: _0x93dd94(0xa7),
    };
  window["scrollTo"]({ top: 0x0, behavior: _0x93dd94(0x108) }),
    (document["getElementById"](_0x184a73[_0x93dd94(0x148)])["style"][
      _0x93dd94(0x141)
    ] = "none"),
    (document[_0x93dd94(0x223)](_0x184a73[_0x93dd94(0x8d)])[_0x93dd94(0x133)][
      _0x93dd94(0x141)
    ] = _0x184a73["RxKtS"]);
  const _0x471b94 = document[_0x93dd94(0x223)](_0x184a73[_0x93dd94(0xb1)]);
  _0x471b94["innerHTML"] = "";
  const _0x5da6d3 = document["createElement"]("p");
  (_0x5da6d3["textContent"] = _0x93dd94(0x1a6) + _0x2eeba1[_0x93dd94(0x2e4)]),
    _0x471b94[_0x93dd94(0xc3)](_0x5da6d3);
  const _0x5c1522 = document[_0x93dd94(0x198)]("p");
  (_0x5c1522[_0x93dd94(0x1b9)] =
    _0x93dd94(0x24e) + _0x2eeba1[_0x93dd94(0x158)]),
    _0x471b94[_0x93dd94(0xc3)](_0x5c1522);
  if (selectedPackage === _0x184a73[_0x93dd94(0xe0)]) {
    if (_0x184a73["JHejB"](_0x2eeba1[_0x93dd94(0x186)][_0x93dd94(0xc8)], 0x0)) {
      const _0x321b97 = document["createElement"]("p");
      (_0x321b97[_0x93dd94(0x1b9)] =
        _0x93dd94(0x1e0) +
        _0x2eeba1[_0x93dd94(0x186)]["polo"] +
        _0x93dd94(0x2ca)),
        _0x471b94[_0x93dd94(0xc3)](_0x321b97);
      for (
        let _0x567e82 = 0x0;
        _0x184a73[_0x93dd94(0x172)](
          _0x567e82,
          _0x2eeba1[_0x93dd94(0x186)][_0x93dd94(0xc8)]
        );
        _0x567e82++
      ) {
        if (
          _0x2eeba1[_0x93dd94(0x185)][_0x93dd94(0xc8)] &&
          _0x2eeba1["sizes"][_0x93dd94(0xc8)][_0x567e82]
        ) {
          const _0x2385fe = document[_0x93dd94(0x198)]("p");
          (_0x2385fe[_0x93dd94(0xe4)] = _0x93dd94(0x204)),
            (_0x2385fe[_0x93dd94(0x1b9)] =
              "-\x20ตัวที่\x20" +
              _0x184a73[_0x93dd94(0x157)](_0x567e82, 0x1) +
              _0x93dd94(0x1aa) +
              _0x2eeba1[_0x93dd94(0x185)]["polo"][_0x567e82]),
            _0x471b94[_0x93dd94(0xc3)](_0x2385fe);
        }
      }
    }
    if (_0x184a73[_0x93dd94(0x217)](_0x2eeba1["items"]["jacket"], 0x0)) {
      const _0x5bfbc4 = document[_0x93dd94(0x198)]("p");
      (_0x5bfbc4[_0x93dd94(0x1b9)] =
        _0x93dd94(0x1eb) +
        _0x2eeba1[_0x93dd94(0x186)][_0x93dd94(0xc1)] +
        "\x20ชิ้น"),
        _0x471b94[_0x93dd94(0xc3)](_0x5bfbc4);
      for (
        let _0x15ce54 = 0x0;
        _0x15ce54 < _0x2eeba1[_0x93dd94(0x186)][_0x93dd94(0xc1)];
        _0x15ce54++
      ) {
        if (
          _0x2eeba1[_0x93dd94(0x185)][_0x93dd94(0xc1)] &&
          _0x2eeba1[_0x93dd94(0x185)][_0x93dd94(0xc1)][_0x15ce54]
        ) {
          const _0x3126d5 = document[_0x93dd94(0x198)]("p");
          (_0x3126d5[_0x93dd94(0xe4)] = _0x93dd94(0x204)),
            (_0x3126d5[_0x93dd94(0x1b9)] =
              _0x93dd94(0x1b6) +
              _0x184a73["zFuxC"](_0x15ce54, 0x1) +
              _0x93dd94(0x1aa) +
              _0x2eeba1["sizes"]["jacket"][_0x15ce54]),
            _0x471b94[_0x93dd94(0xc3)](_0x3126d5);
        }
      }
    }
    if (
      _0x184a73[_0x93dd94(0x1de)](
        _0x2eeba1[_0x93dd94(0x186)][_0x93dd94(0x193)],
        0x0
      )
    ) {
      const _0x26bab2 = document[_0x93dd94(0x198)]("p");
      (_0x26bab2[_0x93dd94(0x1b9)] =
        _0x93dd94(0x2b4) + _0x2eeba1["items"]["jersey"] + _0x93dd94(0x2ca)),
        _0x471b94[_0x93dd94(0xc3)](_0x26bab2);
      for (
        let _0x3ea6f5 = 0x0;
        _0x184a73["OKhFP"](_0x3ea6f5, _0x2eeba1[_0x93dd94(0x186)]["jersey"]);
        _0x3ea6f5++
      ) {
        if (
          _0x2eeba1[_0x93dd94(0x185)]["jersey"] &&
          _0x2eeba1[_0x93dd94(0x185)][_0x93dd94(0x193)][_0x3ea6f5]
        ) {
          const _0x115482 = document[_0x93dd94(0x198)]("p");
          (_0x115482["className"] = _0x184a73[_0x93dd94(0x2ea)]),
            (_0x115482[_0x93dd94(0x1b9)] =
              _0x93dd94(0x1b6) +
              _0x184a73[_0x93dd94(0x22d)](_0x3ea6f5, 0x1) +
              _0x93dd94(0x1aa) +
              _0x2eeba1[_0x93dd94(0x185)][_0x93dd94(0x193)][_0x3ea6f5]),
            _0x471b94[_0x93dd94(0xc3)](_0x115482);
        }
      }
    }
  }
  const _0x1d2fd7 = new Date(),
    _0x178883 = document[_0x93dd94(0x198)]("p");
  (_0x178883[_0x93dd94(0x1b9)] =
    _0x93dd94(0x211) +
    _0x1d2fd7[_0x93dd94(0x118)](_0x93dd94(0x8b), {
      year: _0x93dd94(0x180),
      month: _0x184a73["ScJvT"],
      day: _0x184a73[_0x93dd94(0x135)],
    })),
    _0x471b94[_0x93dd94(0xc3)](_0x178883);
  const _0x410952 = document[_0x93dd94(0x198)]("p");
  (_0x410952[_0x93dd94(0x1b9)] =
    _0x93dd94(0x2d7) +
    _0x2eeba1[_0x93dd94(0x245)] +
    "\x20" +
    _0x2eeba1[_0x93dd94(0x123)]),
    _0x471b94["appendChild"](_0x410952);
  const _0x32aafa = document[_0x93dd94(0x198)]("p");
  (_0x32aafa[_0x93dd94(0x1b9)] = _0x93dd94(0x166) + _0x2eeba1[_0x93dd94(0x88)]),
    _0x471b94["appendChild"](_0x32aafa);
  const _0x5e861a = document["createElement"]("p");
  (_0x5e861a[_0x93dd94(0x1b9)] =
    _0x93dd94(0x11f) + _0x2eeba1[_0x93dd94(0x29b)]),
    _0x471b94[_0x93dd94(0xc3)](_0x5e861a);
  const _0x1d992b = document[_0x93dd94(0x198)]("p");
  (_0x1d992b[_0x93dd94(0x1b9)] =
    "วิธีรับสินค้า:\x20" +
    (_0x2eeba1[_0x93dd94(0x308)] === _0x184a73["tkuHw"]
      ? _0x93dd94(0x2bd)
      : _0x93dd94(0x1b4))),
    _0x471b94[_0x93dd94(0xc3)](_0x1d992b);
  const _0x59d477 = document[_0x93dd94(0x198)]("p");
  (_0x59d477[_0x93dd94(0x1b9)] =
    "ยอดรวม:\x20" +
    _0x2eeba1[_0x93dd94(0x2aa)][_0x93dd94(0x120)]() +
    "\x20บาท"),
    _0x471b94["appendChild"](_0x59d477);
  if (_0x2eeba1[_0x93dd94(0x114)]) {
    const _0x584973 = document[_0x93dd94(0x198)]("p");
    (_0x584973[_0x93dd94(0x297)] =
      _0x93dd94(0x117) + _0x2eeba1[_0x93dd94(0x2e4)] + _0x93dd94(0xfd)),
      _0x471b94[_0x93dd94(0xc3)](_0x584973);
  }
  const _0x420000 = document[_0x93dd94(0x198)]("p");
  (_0x420000[_0x93dd94(0x1b9)] =
    _0x93dd94(0x12b) + _0x2eeba1[_0x93dd94(0x25c)]),
    _0x471b94[_0x93dd94(0xc3)](_0x420000);
}
function sendToGoogleForms(_0x3c8466) {
  const _0x129ee1 = a0_0xbc5d54,
    _0x4d6f8d = {
      fPPRA: function (_0x38551e) {
        return _0x38551e();
      },
      JOeoB: function (_0x5e7047, _0x28fc3b) {
        return _0x5e7047(_0x28fc3b);
      },
      MYwBF: "เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ\x20กรุณาลองใหม่อีกครั้ง:\x20",
      aGpVO: function (_0x45ddbf, _0x1e7953, _0x11471e) {
        return _0x45ddbf(_0x1e7953, _0x11471e);
      },
      fCkaA: _0x129ee1(0x1cc),
      MkAOG: _0x129ee1(0x236),
      Sttkd: function (_0x1be7ba) {
        return _0x1be7ba();
      },
      miQiK: function (_0x5a4252, _0x578454) {
        return _0x5a4252 + _0x578454;
      },
      Pozqo: "เกิดข้อผิดพลาดในการเตรียมข้อมูล\x20กรุณาลองใหม่อีกครั้ง:\x20",
    };
  try {
    const _0x3767f4 = new Date();
    !currentOrderRef &&
      (currentOrderRef = _0x4d6f8d[_0x129ee1(0x2ac)](generateOrderRef));
    _0x3c8466[_0x129ee1(0x2e4)] = currentOrderRef;
    const _0x49a1c0 = {
      orderRef: currentOrderRef,
      packageName: _0x3c8466[_0x129ee1(0x158)],
      firstname: _0x3c8466[_0x129ee1(0x245)],
      lastname: _0x3c8466["lastname"],
      email: _0x3c8466[_0x129ee1(0x88)],
      phone: _0x3c8466[_0x129ee1(0x29b)],
      status: _0x3c8466[_0x129ee1(0x205)],
      year: _0x3c8466[_0x129ee1(0x1d3)],
      major: _0x3c8466[_0x129ee1(0x2a3)],
      faculty: _0x3c8466[_0x129ee1(0x221)],
      studentId: _0x3c8466[_0x129ee1(0x15d)],
      deliveryType: _0x3c8466[_0x129ee1(0x308)],
      address: _0x3c8466["address"],
      totalAmount: _0x3c8466[_0x129ee1(0x2aa)],
      items: _0x3c8466["items"],
      notes: _0x3c8466[_0x129ee1(0x25c)],
      slipUrl: _0x3c8466[_0x129ee1(0xbb)] || null,
    };
    _0x4d6f8d[_0x129ee1(0xda)](fetch, _0x129ee1(0x1cd), {
      method: _0x129ee1(0xc5),
      headers: { "Content-Type": _0x4d6f8d[_0x129ee1(0xe8)] },
      body: JSON[_0x129ee1(0x196)](_0x49a1c0),
    })
      [_0x129ee1(0x94)]((_0x1b3124) => {
        const _0x3732e2 = _0x129ee1;
        if (!_0x1b3124["ok"])
          throw new Error(_0x3732e2(0x253) + _0x1b3124[_0x3732e2(0x205)]);
        return _0x1b3124[_0x3732e2(0x1f6)]();
      })
      [_0x129ee1(0x94)]((_0x1a6bc3) => {
        const _0x1760d7 = _0x129ee1;
        _0x4d6f8d[_0x1760d7(0x2ac)](hideLoadingMessage);
        if (_0x1a6bc3[_0x1760d7(0xae)])
          (_0x3c8466[_0x1760d7(0x2e4)] = _0x1a6bc3[_0x1760d7(0x2e4)]),
            (_0x3c8466[_0x1760d7(0x114)] = _0x1a6bc3["trackingCode"]),
            showSuccessPage(_0x3c8466),
            _0x4d6f8d[_0x1760d7(0xd6)](sendConfirmationEmail, _0x3c8466);
        else throw new Error(_0x1a6bc3[_0x1760d7(0x101)] || _0x1760d7(0xb0));
      })
      [_0x129ee1(0x1d2)]((_0x3f3ba7) => {
        const _0x5b0ed4 = _0x129ee1;
        _0x4d6f8d[_0x5b0ed4(0x2ac)](hideLoadingMessage),
          resetSubmitButtonState(),
          _0x4d6f8d["JOeoB"](
            alert,
            _0x4d6f8d[_0x5b0ed4(0xe2)] + _0x3f3ba7[_0x5b0ed4(0xcb)]
          );
      });
  } catch (_0x4fd794) {
    console[_0x129ee1(0x101)](_0x4d6f8d[_0x129ee1(0x237)], _0x4fd794),
      _0x4d6f8d[_0x129ee1(0x2ac)](hideLoadingMessage),
      _0x4d6f8d[_0x129ee1(0x202)](resetSubmitButtonState),
      alert(
        _0x4d6f8d[_0x129ee1(0x215)](
          _0x4d6f8d[_0x129ee1(0x18d)],
          _0x4fd794[_0x129ee1(0xcb)]
        )
      );
  }
}
function sendConfirmationEmail(_0x28ac8a) {
  const _0x4e5c5c = a0_0xbc5d54,
    _0x27ee7e = {
      PNpnN: _0x4e5c5c(0x13f),
      ARCGT: function (_0x429a64) {
        return _0x429a64();
      },
      SVHiP: function (_0x3c29fd, _0x26c337) {
        return _0x3c29fd + _0x26c337;
      },
      XGSij: function (_0x4b7ad3, _0xf7a19a) {
        return _0x4b7ad3(_0xf7a19a);
      },
      Gspvl: _0x4e5c5c(0x232),
      QeDTJ: _0x4e5c5c(0xc5),
      WJuKY: _0x4e5c5c(0x1cc),
      gHsZD: function (_0x465536, _0x13f568) {
        return _0x465536 + _0x13f568;
      },
    },
    _0x1d000d = _0x27ee7e["XGSij"](generateEmailHTML, _0x28ac8a);
  fetch(_0x27ee7e[_0x4e5c5c(0x176)], {
    method: _0x27ee7e["QeDTJ"],
    headers: { "Content-Type": _0x27ee7e["WJuKY"] },
    body: JSON[_0x4e5c5c(0x196)]({
      to: _0x28ac8a[_0x4e5c5c(0x88)],
      subject: _0x27ee7e[_0x4e5c5c(0x23a)](
        _0x4e5c5c(0x2e7),
        _0x28ac8a[_0x4e5c5c(0x2e4)]
      ),
      html: _0x1d000d,
    }),
  })
    [_0x4e5c5c(0x94)]((_0x372ea5) => {
      const _0x11a64e = _0x4e5c5c;
      if (!_0x372ea5["ok"])
        throw new Error(
          "HTTP\x20error!\x20status:\x20" + _0x372ea5[_0x11a64e(0x205)]
        );
      return _0x372ea5[_0x11a64e(0x1f6)]();
    })
    [_0x4e5c5c(0x94)]((_0x28bea0) => {
      const _0x54c3a0 = _0x4e5c5c;
      console[_0x54c3a0(0x26c)](_0x54c3a0(0x1d5));
    })
    [_0x4e5c5c(0x1d2)]((_0x50f1c5) => {
      const _0xbe8d8 = _0x4e5c5c;
      console[_0xbe8d8(0x101)](_0x27ee7e[_0xbe8d8(0x197)], _0x50f1c5),
        hideLoadingMessage(),
        _0x27ee7e[_0xbe8d8(0x21c)](resetSubmitButtonState),
        alert(
          _0x27ee7e[_0xbe8d8(0x2cb)](_0xbe8d8(0xab), _0x50f1c5[_0xbe8d8(0xcb)])
        );
    });
}
function showLoadingMessage(_0x22fb15) {
  const _0x180861 = a0_0xbc5d54,
    _0x456ff0 = {
      HtUyn: function (_0x4f3d06) {
        return _0x4f3d06();
      },
      uOUUe: _0x180861(0x2c2),
      XNpqT: _0x180861(0xdc),
      VYfqS: _0x180861(0x133),
    };
  _0x456ff0[_0x180861(0x2f5)](hideLoadingMessage);
  const _0x4f4641 = document[_0x180861(0x198)]("div");
  (_0x4f4641["id"] = _0x456ff0[_0x180861(0xcd)]),
    (_0x4f4641[_0x180861(0x133)][_0x180861(0x28a)] = _0x180861(0x1f1));
  const _0x105437 = document[_0x180861(0x198)](_0x456ff0[_0x180861(0x2d8)]);
  _0x105437["style"]["cssText"] = _0x180861(0xe1);
  if (!document[_0x180861(0x223)](_0x180861(0x11c))) {
    const _0x3f878d = document["createElement"](_0x456ff0[_0x180861(0x16b)]);
    (_0x3f878d["id"] = _0x180861(0x11c)),
      (_0x3f878d[_0x180861(0x1b9)] = _0x180861(0x30e)),
      document["head"][_0x180861(0xc3)](_0x3f878d);
  }
  _0x4f4641[_0x180861(0xc3)](_0x105437);
  const _0x3e879f = document[_0x180861(0x1d9)](_0x22fb15);
  _0x4f4641[_0x180861(0xc3)](_0x3e879f),
    document[_0x180861(0x139)][_0x180861(0xc3)](_0x4f4641);
}
function hideLoadingMessage() {
  const _0x3c0ca2 = a0_0xbc5d54,
    _0x122a95 = document[_0x3c0ca2(0x223)](_0x3c0ca2(0x2c2));
  _0x122a95 && _0x122a95["remove"]();
}
function a0_0x320d() {
  const _0x4be0bf = [
    "UXrrp",
    "iwRKN",
    "\x20บาท</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>หมายเหตุ:</strong>\x20",
    "avypj",
    "Unknown\x20error\x20occurred",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "UkCiA",
    "YLAFr",
    "includes",
    "toDataURL",
    "กรุณาเลือกไซส์เสื้อ\x20JERSEY\x20ให้ครบทุกตัว",
    "gDkgu",
    "-error",
    "daIsO",
    "packageName",
    "Kopqm",
    "Hdjit",
    "jQNdw",
    "KYQjn",
    "studentId",
    "belt-select",
    "strong",
    "EqGRr",
    "wjSYT",
    "zgANk",
    "bg-danger",
    "\x0a\x0aต้องการดำเนินการส่งคำสั่งซื้อต่อหรือไม่?\x20(คุณสามารถส่งรูปสลิปทาง\x20Email\x20ได้)",
    "jersey-size-section",
    "อีเมล:\x20",
    "block",
    "all",
    "PgYUs",
    "badge\x20fs-6\x20",
    "VYfqS",
    "397270JrwnCE",
    "activeElement",
    "NDJcO",
    "order-summary-display",
    "#carouselIndividual",
    "ANpdZ",
    "fznKl",
    "getContext",
    "HClMQ",
    "gbFFx",
    "Gspvl",
    "Error\x20reading\x20slip\x20file.",
    "every",
    "105dpowyx",
    "REiyJ",
    "BlnxU",
    "rGzZl",
    "odbwZ",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding-top:\x2020px;\x20border-top:\x201px\x20solid\x20#eee;\x20color:\x20#666;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22>หากมีข้อสงสัยใดๆ\x20กรุณาติดต่อเรา</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x205px\x200\x200\x200;\x20font-size:\x2014px;\x22>ขอบคุณที่ใช้บริการ</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>",
    "values",
    "numeric",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "zXQjX",
    "BhpaC",
    "lEbuQ",
    "sizes",
    "items",
    "oTbJi",
    "ค่าจัดส่ง:\x20+50\x20บาท",
    "กรุณากรอกที่อยู่ให้ครบถ้วน",
    "llUsR",
    "vuwtc",
    "rwZgC",
    "Pozqo",
    "Zqiit",
    "hQPGK",
    "QzasU",
    "</span></div>",
    "BZvnS",
    "jersey",
    "hDNRF",
    "ชื่อต้องมีอย่างน้อย\x202\x20ตัวอักษร",
    "stringify",
    "PNpnN",
    "createElement",
    "MdWIC",
    "row\x20row-cols-2\x20row-cols-sm-3\x20row-cols-md-6\x20g-3",
    "eSbcX",
    "slip-thumbnail-container",
    "getTime",
    "\x20ตัวที่\x20",
    "jacket-sizes-container",
    "MIkzD",
    "TXeev",
    "nQpQY",
    "Modal",
    "fCONn",
    "Elbla",
    "หมายเลขอ้างอิง:\x20",
    "PSSOm",
    "zEmsr",
    "234010OZwypV",
    ":\x20ไซส์\x20",
    "KbtAl",
    "rFDsQ",
    "test",
    "เสื้อ\x20JERSEY",
    "4XL",
    "toLowerCase",
    "polo-size-section",
    "CZnwK",
    "address",
    "จัดส่งทางไปรษณีย์",
    "zPzJQ",
    "-\x20ตัวที่\x20",
    "bfqnp",
    "HFPfK",
    "textContent",
    "เกินจำนวนสินค้าที่กำหนด",
    "vYtto",
    "Dakzd",
    "uteEA",
    "1|3|5|0|2|4",
    "Uorpi",
    "carousel",
    "กรุณากรอกนามสกุล",
    "เสื้อ\x20(โปโล\x20+\x20แจ็คเก็ต\x20+\x20เจอร์ซี่)\x20รวมกันสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "setAttribute",
    "OWeaN",
    "<i\x20class=\x22fas\x20fa-check-circle\x20me-2\x22></i>\x20สั่งซื้อสินค้า",
    ".package-card",
    "eFyuV",
    "GhAGh",
    "slip-thumbnail-img",
    "TApWC",
    "files",
    "application/json",
    "/submit-order",
    "xKBOl",
    "Fbhvr",
    "student-id",
    "&quot;",
    "catch",
    "year",
    "กรุณากรอกที่อยู่สำหรับจัดส่ง",
    "สิเอาส่ำนี่บ่ชีวิตสิหาแต่แนวเกรียนเว็บบ่หล่า",
    "hHFra",
    "\x20บาท\x0a\x0a",
    "zejsR",
    "createTextNode",
    "round",
    "15531076lcFgrC",
    "data-index",
    "Error\x20uploading\x20slip\x20via\x20server:",
    "JHejB",
    "\x20แพ็คเก็จ</span></div>",
    "เสื้อโปโล:\x20",
    "price",
    "LfRpC",
    "IBFkC",
    "OJPXh",
    "กรุณาเลือกสินค้าอย่างน้อย\x201\x20ชิ้น",
    "TDPoq",
    "\x0a\x20\x20\x20\x20<div\x20style=\x22max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-family:\x20\x27Sarabun\x27,\x20Arial,\x20sans-serif;\x20background-color:\x20#f8f9fa;\x20padding:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20white;\x20border-radius:\x2015px;\x20padding:\x2030px;\x20box-shadow:\x200\x204px\x206px\x20rgba(0,0,0,0.1);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin-bottom:\x2030px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:\x20#333;\x20font-size:\x2024px;\x20margin:\x200;\x20font-weight:\x20bold;\x22>คำสั่งซื้อสำเร็จ!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#666;\x20margin:\x2010px\x200\x200\x200;\x22>ขอบคุณสำหรับการสั่งซื้อ<br>หากไม่ได้รับอีเมลยืนยันคำสั่งซื้อ\x20กรุณาติดต่อ\x20Facebook\x20สโมสรนักศึกษาอย่างเร็วที่สุด</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#f8f9fa;\x20border-radius:\x2010px;\x20padding:\x2025px;\x20margin-bottom:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#007bff;\x20font-size:\x2018px;\x20margin:\x200\x200\x2020px\x200;\x20font-weight:\x20bold;\x22>สรุปการสั่งซื้อ</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>หมายเลขอ้างอิง:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "XdebE",
    "&lt;",
    "xykRH",
    "เสื้อแจ็คเก็ต:\x20",
    "lvnha",
    "[data-package=\x22",
    "form-label\x20fw-bold",
    "querySelector",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20",
    "polo-sizes-container",
    ".size-btn",
    "individual",
    "Ksgjp",
    "json",
    "bg-secondary",
    "YuPQS",
    "กรุณากรอกอีเมล",
    "VudAE",
    "canvas",
    "kTlIT",
    "กรุณากรอกเบอร์โทรศัพท์",
    "lnHNb",
    "Gufeq",
    "JSTIb",
    "oLGlA",
    "Sttkd",
    "SMO",
    "ms-3",
    "status",
    "swxOU",
    "IDCGy",
    "ysakV",
    "jddTD",
    "VZFpI",
    "zmhEW",
    "SMdpb",
    "kSqtK",
    "mpsdK",
    "NMUuB",
    "wKoDA",
    "วันที่สั่งซื้อ:\x20",
    "XIGlw",
    "quantity-section",
    "submit-order-btn",
    "miQiK",
    "DUECD",
    "MkKUu",
    "กรุณาเลือกไซส์เสื้อแจ็คเก็ตให้ครบทุกตัว",
    "กำลังโหลด...",
    "-sizes-container",
    "inline-block",
    "ARCGT",
    "จำนวน:\x20",
    "#product-btn\x20button:nth-child(1)",
    "/shop",
    "bg-warning",
    "faculty",
    "roTCt",
    "getElementById",
    "เสื้อโปโล",
    ".size-item",
    "alert\x20alert-primary",
    "xCkVi",
    "XXL",
    "long",
    "hRmwe",
    "tyAyJ",
    "KHzLc",
    "FokET",
    "BpGXa",
    "เกิดข้อผิดพลาดในการอ่านไฟล์สลิป",
    "bwnRD",
    "pTUkH",
    "/send-confirmation-email",
    "Error\x20uploading\x20slip\x20or\x20during\x20process:",
    "SGsDG",
    "gITlM",
    "Error\x20preparing\x20form\x20data:",
    "MkAOG",
    "JVFlq",
    "split",
    "gHsZD",
    ".error",
    "keys",
    "belt",
    "hXefj",
    "qQFZy",
    "zcKtc",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วันที่สั่งซื้อ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "YnEjk",
    "YHTqj",
    "shtZY",
    "firstname",
    "fileUrl",
    "XJHNX",
    "scrollIntoView",
    "ErHcs",
    "DBWQL",
    "VUFFA",
    "กรุณากรอกรหัสนักศึกษา",
    "KjCiS",
    "แพ็คเกจ:\x20",
    "marginBottom",
    "label",
    "pSSsR",
    "แก้ไขข้อมูล",
    "HTTP\x20status\x20",
    "klwiS",
    "col",
    "wrmBz",
    "shipping",
    "RuivP",
    "lZcWF",
    "year-selection",
    "zrmRV",
    "notes",
    "QNcnV",
    "xqzHG",
    "NNBbL",
    "selected",
    "10px",
    "&#039;",
    "input[type=\x22radio\x22]",
    "checked",
    "change",
    "customer-form",
    "erANy",
    "VhyTG",
    "length",
    "carouselModalLastShown",
    "product-btn",
    "log",
    "DbwJr",
    "<div\x20style=\x22margin-left:\x2020px;\x20margin-bottom:\x205px;\x20color:\x20#666;\x22>-\x20ตัวที่\x20",
    "/upload-slip",
    "wgbzI",
    "value",
    "input[name=\x22package\x22]",
    "tie_clip",
    "ตุ้งติ้ง:\x20",
    "dMkAk",
    "BguOu",
    "rkqwF",
    "OPEkc",
    "padStart",
    "required",
    "btn-primary",
    "RPWgg",
    "qWMWJ",
    "aYVDm",
    "input[name=\x22package\x22][value=\x22individual\x22]",
    "gImsx",
    "kkumail.com",
    "lWfSQ",
    "IgfLe",
    "[data-delivery=\x22",
    "selectedIndex",
    "15px",
    "<pre\x20style=\x22text-align:\x20left;\x22>",
    "fZNnc",
    "MMkNd",
    "cssText",
    "Image\x20upload\x20failed",
    "clULX",
    "GXjIm",
    "oqajp",
    "KiWsf",
    "เสื้อแจ็คเก็ต",
    "45rDIqXN",
    "RRHcC",
    "ที่หนีบเนคไท:\x20",
    "YuPnE",
    "xAiCd",
    "KbqiY",
    "innerHTML",
    "กรุณากรอกชื่อ",
    "student-out",
    "xinar",
    "phone",
    "คำเตือน!",
    "GUJFt",
    "AyQPU",
    "readAsDataURL",
    "reduce",
    ".delivery-option",
    "kku.ac.th",
    "major",
    "height",
    "WczZd",
    "selection-details",
    "DprCV",
    "EZBQc",
    "reUPx",
    "totalAmount",
    "pOZhc",
    "fPPRA",
    "arlkt",
    "image/jpeg",
    "\x20\x20\x20-\x20ตัวที่\x20",
    "ไม่สามารถอัปโหลดรูปภาพสลิปได้:\x20",
    "KNaWJ",
    "slip",
    "tung",
    "เสื้อ\x20JERSEY:\x20",
    "IHZCW",
    "forEach",
    "tie",
    "กำลังส่งข้อมูลคำสั่งซื้อ...",
    "หัวเข็มขัด",
    "EZYIu",
    "isConfirmed",
    "GbIPP",
    "รับที่วิทยาลัย",
    "QVpHw",
    "xyvet",
    "quantity",
    "ZLaup",
    "loading-message",
    "jxHWa",
    "rbOMh",
    "กรุณาเลือกไซส์เสื้อแจ็คเก็ต",
    "Iimui",
    "uSmKi",
    "CiRGc",
    "target",
    "\x20ชิ้น",
    "SVHiP",
    ".size-btn[data-size=\x22",
    "วิธีรับสินค้า:\x20",
    "EvmOG",
    "MzhPk",
    "DOMContentLoaded",
    "bg-info",
    "ypbUd",
    "ReqpR",
    "total-display",
    "</div>",
    "jPvDL",
    "ชื่อ-นามสกุล:\x20",
    "XNpqT",
    "zwrgf",
    "IeIAY",
    "Ygxwx",
    "trim",
    "ynJKd",
    "NnkWa",
    "shirt-count",
    "location",
    "หัวเข็มขัด:\x20",
    "-select",
    "success-section",
    "orderRef",
    "checkout-section",
    "hflWE",
    "ยืนยันคำสั่งซื้อของคุณ\x20-\x20",
    "dCNyP",
    "TywlK",
    "eJkNE",
    "hOaxD",
    "</pre>",
    "mzaZT",
    "SFKqX",
    "type",
    "wyARK",
    "sVqPb",
    "กรุณาเลือกไซส์เสื้อโปโล",
    "ERzWd",
    "219261fDfjrY",
    "HtUyn",
    "รูปแบบอีเมลไม่ถูกต้อง!",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>จำนวน:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "Idqyt",
    "EbKfm",
    "polo-select",
    "KmjXi",
    "Etwkx",
    "input",
    "rzPel",
    "lFvvm",
    "jacket-size-section",
    "iKiBF",
    "crpzL",
    "#product-btn\x20button:nth-child(2)",
    "RgHMl",
    "Esgdt",
    "ZPLjj",
    "qbdAj",
    "deliveryType",
    "lSDam",
    "size-btn",
    "gPBve",
    "กรุณาใช้อีเมลที่ลงท้ายด้วย\x20kkumail.com,\x20kku.ac.th,\x20gmail.com\x20หรือ\x20hotmail.com\x20เท่านั้น",
    "\x20บาท",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "fire",
    "aNEJt",
    "zAspn",
    "cvlAq",
    "tie-select",
    "กรุณาอัปโหลดสลิปการโอนเงิน",
    "122152czHZhF",
    "OyCov",
    "focus",
    "input[type=\x22text\x22],\x20input[type=\x22email\x22],\x20input[type=\x22tel\x22],\x20textarea",
    "image/",
    "hcpks",
    "drawImage",
    "cMjvp",
    "carouselModal",
    "iqCdp",
    "push",
    "pzvTK",
    "jYiOG",
    "width",
    "DDDDp",
    "1386052VtnPqm",
    "ZOApc",
    "ZFOrn",
    "email",
    "remove",
    "xPuce",
    "th-TH",
    "hupbj",
    "KiqPQ",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#e3f2fd;\x20padding:\x2015px;\x20border-radius:\x208px;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#1976d2;\x20font-size:\x2018px;\x22>ยอดรวม:\x20",
    "TsCVl",
    "button",
    "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "689334KSBpTF",
    "HSfaa",
    "then",
    "กรุณาเลือกคณะ",
    "final-summary",
    "announcementCarousel",
    "LEGcx",
    "aSYPk",
    "WUCqO",
    "querySelectorAll",
    "AtduQ",
    "qTLLK",
    "address-section",
    "[data-type=\x22",
    "42aguFzF",
    "REOne",
    "name",
    "Carousel",
    "tung_ting",
    "onload",
    "CwHwa",
    "pickup",
    "VeCkf",
    "กรุณาเลือกไฟล์รูปภาพเท่านั้น",
    ".row.g-4\x20.col-md-6",
    "เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน\x20กรุณาลองใหม่อีกครั้ง:\x20",
    "กรุณาเลือกแพ็คเกจ",
    "#3085d6",
    "success",
    "setItem",
    "Database\x20submission\x20failed",
    "tRSmA",
    "\x22][data-index=\x22",
    "fckNM",
    "3WYpBrj",
    ".individual-item-select",
    "replace",
    "กรุณาตรวจสอบข้อมูล",
    "CQfOz",
    "กรุณากรอกข้อมูลให้ครบถ้วน!",
    "diqBV",
    "slipUrl",
    "Kbure",
    "pkjLt",
    "swvpG",
    "ไม่สามารถอัปโหลดสลิปได้",
    "ตกลง",
    "jacket",
    "gmail.com",
    "appendChild",
    "Revyd",
    "POST",
    "qBaNa",
    "ไซส์เสื้อแจ็คเก็ต:\x20",
    "polo",
    "wCcWZ",
    "CXkUq",
    "message",
    "addEventListener",
    "uOUUe",
    "xtzfa",
    "pGnas",
    ".product-btn",
    "รูปแบบอีเมลไม่ถูกต้อง",
    "vxpVh",
    "hzyfo",
    "3XL",
    "XNNCU",
    "JOeoB",
    "กรุณากรอกตัวเลขเท่านั้น",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>อีเมล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "JBKZY",
    "aGpVO",
    "textarea",
    "div",
    "weDsH",
    "onerror",
    "student-in",
    "PmFKQ",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ffffff50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20",
    "MYwBF",
    "VLMbP",
    "className",
    "none",
    "กำลังตรวจสอบข้อมูล...",
    "InjfW",
    "fCkaA",
    "wjRax",
    "zarPF",
    "TvKys",
    "data-type",
    "wergV",
    "classList",
    "ToEBz",
    "shopping-section",
    "dPXRa",
    "FIQeF",
    "oWMZy",
    "กรุณาเลือกรูปภาพสลิปการโอนเงิน",
    "HTnAe",
    "ไซส์เสื้อโปโล:\x20",
    "#product-btn\x20button",
    "nujOx",
    "LsnDH",
    "\x20แพ็คเกจ",
    "nNShY",
    "\x20ชิ้น\x0a",
    "</span>",
    "\x20ชิ้น</span></div>",
    "shirt-counter",
    "BNWGK",
    "error",
    "close-enlarged-viewer-btn",
    "rEgqG",
    "data-size",
    "mkejZ",
    "jersey-sizes-container",
    "okkKY",
    "smooth",
    "dontShowAgain",
    "TCZEA",
    "lYzmh",
    "getAttribute",
    "fLhnc",
    "jacket-select",
    "add",
    "DuekB",
    "nMWLt",
    "scrollTo",
    "pUvyk",
    "trackingCode",
    "นามสกุลต้องมีอย่างน้อย\x202\x20ตัวอักษร",
    "dBkhE",
    "<strong>รหัสติดตาม:</strong>\x20<span\x20class=\x22badge\x20bg-primary\x22>",
    "toLocaleDateString",
    "duFvI",
    "click",
    "individual-items-selection",
    "spinner-style",
    "EyWKM",
    "data-package",
    "เบอร์โทร:\x20",
    "toLocaleString",
    "TefvN",
    "jQtcJ",
    "lastname",
    "ยืนยันสั่งซื้อ",
    "CyTBy",
    "src",
    "รวมทั้งหมด:\x20",
    "toString",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>ชื่อ-นามสกุล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "mSsBz",
    "หมายเหตุ:\x20",
    "\x0aชื่อ-นามสกุล:\x20",
    "kOmYp",
    "oMvzS",
    "VlPCm",
    "IaFeo",
    "show",
    "bkBOQ",
    "style",
    "txGkA",
    "bblHu",
    "student-id-section",
    "ที่หนีบเนคไท",
    "disabled",
    "body",
    "warning",
    "NwfPO",
    "DxVUR",
    "เบอร์โทรศัพท์ต้องเป็นตัวเลข\x209-10\x20หลัก",
    "hidden.bs.modal",
    "Failed\x20to\x20send\x20confirmation\x20email:",
    "MEjPf",
    "display",
    "dKoFr",
    "bAdft",
    "HtPPb",
    "slip-error",
    "BiAzT",
    "keydown",
    "SqokZ",
    "oORxj",
  ];
  a0_0x320d = function () {
    return _0x4be0bf;
  };
  return a0_0x320d();
}
function resetOrder() {
  const _0x3cc3f7 = a0_0xbc5d54,
    _0x1f98cb = {
      wKoDA: _0x3cc3f7(0x21f),
      kOmYp: _0x3cc3f7(0x108),
      fCONn: "shopping-section",
      DBWQL: _0x3cc3f7(0x263),
      weDsH: _0x3cc3f7(0x79),
      KYQjn: "select",
      dNmPI: _0x3cc3f7(0x2b2),
      IHZCW: ".package-card",
      shtZY: _0x3cc3f7(0x2a6),
      bkBOQ: _0x3cc3f7(0xe5),
      llUsR: "success-section",
      uSmKi: _0x3cc3f7(0x167),
      VlPCm: "individual-items-selection",
      hDNRF: _0x3cc3f7(0x23b),
      Fbhvr: function (_0x6b9127, _0x5788c3, _0x5da359) {
        return _0x6b9127(_0x5788c3, _0x5da359);
      },
    };
  (selectedPackage = null),
    (selectedSizes = { polo: [], jacket: [], jersey: [] }),
    (quantity = 0x1),
    (deliveryType = null),
    (totalAmount = 0x0),
    (individualItems = {
      polo: { price: 0x167, quantity: 0x0 },
      jacket: { price: 0x316, quantity: 0x0 },
      jersey: { price: 0x103, quantity: 0x0 },
      belt: { price: 0x81, quantity: 0x0 },
      tung: { price: 0x77, quantity: 0x0 },
      tie: { price: 0x77, quantity: 0x0 },
    }),
    (slip = null),
    document[_0x3cc3f7(0x9b)](_0x1f98cb[_0x3cc3f7(0x24a)])[_0x3cc3f7(0x2b6)](
      (_0x14f44f) => (_0x14f44f[_0x3cc3f7(0x264)] = ![])
    ),
    document[_0x3cc3f7(0x9b)](_0x1f98cb[_0x3cc3f7(0xdd)])[_0x3cc3f7(0x2b6)](
      (_0x575bda) => (_0x575bda["value"] = "")
    ),
    document["querySelectorAll"](_0x1f98cb[_0x3cc3f7(0x15c)])[_0x3cc3f7(0x2b6)](
      (_0x455fb1) => (_0x455fb1[_0x3cc3f7(0x285)] = 0x0)
    ),
    (document[_0x3cc3f7(0x223)](_0x3cc3f7(0x2c0))[_0x3cc3f7(0x271)] = 0x1);
  const _0x38363e = document[_0x3cc3f7(0x223)](_0x1f98cb["dNmPI"]);
  _0x38363e && (_0x38363e[_0x3cc3f7(0x271)] = ""),
    document["querySelectorAll"](_0x1f98cb[_0x3cc3f7(0x2b5)])[_0x3cc3f7(0x2b6)](
      (_0x38b1f4) =>
        _0x38b1f4[_0x3cc3f7(0xee)][_0x3cc3f7(0x89)](_0x3cc3f7(0x260))
    ),
    document[_0x3cc3f7(0x9b)](_0x3cc3f7(0x2a1))[_0x3cc3f7(0x2b6)]((_0x1472b8) =>
      _0x1472b8[_0x3cc3f7(0xee)][_0x3cc3f7(0x89)](_0x3cc3f7(0x260))
    ),
    document[_0x3cc3f7(0x9b)](_0x3cc3f7(0x225))[_0x3cc3f7(0x2b6)]((_0x580415) =>
      _0x580415["classList"]["remove"](_0x3cc3f7(0x260))
    ),
    (document["getElementById"](_0x1f98cb[_0x3cc3f7(0x244)])[_0x3cc3f7(0x133)][
      _0x3cc3f7(0x141)
    ] = _0x1f98cb[_0x3cc3f7(0x132)]),
    (document[_0x3cc3f7(0x223)](_0x3cc3f7(0x2e5))[_0x3cc3f7(0x133)][
      _0x3cc3f7(0x141)
    ] = _0x1f98cb[_0x3cc3f7(0x132)]),
    (document["getElementById"](_0x1f98cb[_0x3cc3f7(0x18a)])[_0x3cc3f7(0x133)][
      _0x3cc3f7(0x141)
    ] = _0x1f98cb[_0x3cc3f7(0x132)]),
    (document[_0x3cc3f7(0x223)](_0x1f98cb[_0x3cc3f7(0x1a4)])[_0x3cc3f7(0x133)][
      _0x3cc3f7(0x141)
    ] = _0x1f98cb[_0x3cc3f7(0x2c7)]),
    (document[_0x3cc3f7(0x223)](_0x1f98cb[_0x3cc3f7(0x12f)])[_0x3cc3f7(0x133)][
      _0x3cc3f7(0x141)
    ] = _0x1f98cb[_0x3cc3f7(0x132)]),
    document["querySelectorAll"](_0x1f98cb[_0x3cc3f7(0x194)])["forEach"](
      (_0x2bcfc5) => (_0x2bcfc5["textContent"] = "")
    ),
    _0x1f98cb[_0x3cc3f7(0x1cf)](
      setTimeout,
      () => {
        const _0x30b8c0 = _0x3cc3f7;
        (window[_0x30b8c0(0x2e0)]["href"] = _0x1f98cb[_0x30b8c0(0x210)]),
          window[_0x30b8c0(0x112)]({
            top: 0x0,
            behavior: _0x1f98cb[_0x30b8c0(0x12d)],
          }),
          document[_0x30b8c0(0x223)](_0x1f98cb["fCONn"])[_0x30b8c0(0x248)]({
            behavior: _0x1f98cb[_0x30b8c0(0x12d)],
          });
      },
      0x3e8
    );
}
document[a0_0xbc5d54(0xcc)](a0_0xbc5d54(0x2d0), function () {
  const _0x26c5f1 = a0_0xbc5d54,
    _0x27c5fc = {
      pGnas: "block",
      hOaxD: function (_0x56cf03) {
        return _0x56cf03();
      },
      FIQeF: "none",
      Gufeq: _0x26c5f1(0x2b2),
      ErHcs: _0x26c5f1(0x145),
      bAdft: _0x26c5f1(0x1c9),
      KjCiS: "slip-enlarged-viewer",
      KDkEG: "slip-enlarged-img",
      XNNCU: _0x26c5f1(0x102),
      MUNCA: "change",
      KbqiY: "click",
    },
    _0x266ef7 = document["getElementById"](_0x27c5fc[_0x26c5f1(0x1ff)]),
    _0x60640c = document[_0x26c5f1(0x223)](_0x27c5fc[_0x26c5f1(0x249)]),
    _0x40678e = document[_0x26c5f1(0x223)](_0x26c5f1(0x19c)),
    _0x19628b = document[_0x26c5f1(0x223)](_0x27c5fc[_0x26c5f1(0x143)]),
    _0x4ef76e = document[_0x26c5f1(0x223)](_0x27c5fc[_0x26c5f1(0x24d)]),
    _0x4103fa = document[_0x26c5f1(0x223)](_0x27c5fc["KDkEG"]),
    _0x280096 = document[_0x26c5f1(0x223)](_0x27c5fc[_0x26c5f1(0xd5)]);
  let _0x59949a = "";
  if (
    !_0x266ef7 ||
    !_0x60640c ||
    !_0x40678e ||
    !_0x19628b ||
    !_0x4ef76e ||
    !_0x4103fa ||
    !_0x280096
  ) {
    console[_0x26c5f1(0x101)](
      "Error:\x20One\x20or\x20more\x20required\x20slip-related\x20elements\x20are\x20missing\x20from\x20the\x20DOM."
    );
    return;
  }
  _0x266ef7[_0x26c5f1(0xcc)](_0x27c5fc["MUNCA"], function () {
    const _0x724bd7 = _0x26c5f1,
      _0x5edf46 = { txGkA: _0x27c5fc[_0x724bd7(0xcf)] };
    _0x27c5fc[_0x724bd7(0x2eb)](_0x30a02f);
    if (_0x266ef7[_0x724bd7(0x1cb)] && _0x266ef7[_0x724bd7(0x1cb)][0x0]) {
      const _0x387363 = _0x266ef7["files"][0x0];
      if (!_0x387363[_0x724bd7(0x2ef)]["startsWith"](_0x724bd7(0x7a))) {
        (_0x60640c["textContent"] = _0x724bd7(0xa9)),
          (_0x266ef7["value"] = ""),
          (_0x59949a = ""),
          (_0x19628b[_0x724bd7(0x126)] = ""),
          (_0x40678e[_0x724bd7(0x133)][_0x724bd7(0x141)] = _0x724bd7(0xe5));
        return;
      }
      _0x60640c[_0x724bd7(0x1b9)] = "";
      const _0x13f0bd = new FileReader();
      (_0x13f0bd[_0x724bd7(0xa5)] = function (_0x4cf765) {
        const _0x106477 = _0x724bd7;
        (_0x59949a = _0x4cf765[_0x106477(0x2c9)]["result"]),
          (_0x19628b[_0x106477(0x126)] = _0x59949a),
          (_0x40678e[_0x106477(0x133)][_0x106477(0x141)] =
            _0x5edf46[_0x106477(0x134)]);
      }),
        _0x13f0bd["readAsDataURL"](_0x387363);
    } else (_0x59949a = ""), (_0x19628b["src"] = ""), (_0x40678e[_0x724bd7(0x133)][_0x724bd7(0x141)] = _0x27c5fc[_0x724bd7(0xf2)]);
  }),
    _0x19628b[_0x26c5f1(0xcc)](_0x27c5fc[_0x26c5f1(0x296)], function () {
      _0x59949a && _0x511e35();
    }),
    _0x280096[_0x26c5f1(0xcc)](_0x27c5fc[_0x26c5f1(0x296)], _0x30a02f);
  function _0x511e35() {
    const _0x3c0ea9 = _0x26c5f1;
    _0x59949a &&
      ((_0x4103fa[_0x3c0ea9(0x126)] = _0x59949a),
      (_0x4ef76e[_0x3c0ea9(0x133)]["display"] = _0x27c5fc["pGnas"]));
  }
  function _0x30a02f() {
    const _0x327ca6 = _0x26c5f1;
    _0x4ef76e["style"][_0x327ca6(0x141)] = _0x27c5fc[_0x327ca6(0xf2)];
  }
});
function filterProducts(_0x1572c3) {
  const _0xa7c16a = a0_0xbc5d54,
    _0x3b7376 = {
      UAUrV: _0xa7c16a(0x1c6),
      crpzL: function (_0x269c05, _0x55a14b) {
        return _0x269c05 === _0x55a14b;
      },
      oTbJi: _0xa7c16a(0x167),
      NnkWa: _0xa7c16a(0x1f4),
      SGsDG: _0xa7c16a(0xe5),
      HTnAe: _0xa7c16a(0x27b),
      YHTqj: "btn-outline-primary",
      pUvyk: _0xa7c16a(0xaa),
      VUFFA: _0xa7c16a(0x272),
      aSYPk: function (_0x422e2c, _0x574ca9) {
        return _0x422e2c === _0x574ca9;
      },
      Etwkx: function (_0x18996b) {
        return _0x18996b();
      },
      BieSk: _0xa7c16a(0x2a6),
      wgbzI: _0xa7c16a(0xf7),
      UkCiA: function (_0x2306de, _0x49b03d) {
        return _0x2306de === _0x49b03d;
      },
      Ygxwx: _0xa7c16a(0x21e),
    },
    _0x536219 = document[_0xa7c16a(0x9b)](_0x3b7376[_0xa7c16a(0x113)]);
  _0x536219[_0xa7c16a(0x2b6)]((_0x490844) => {
    const _0x243ccf = _0xa7c16a,
      _0x1f301a = _0x490844[_0x243ccf(0x1ef)](_0x3b7376["UAUrV"])[
        _0x243ccf(0x10c)
      ](_0x243ccf(0x11e));
    if (_0x3b7376[_0x243ccf(0x302)](_0x1572c3, _0x243ccf(0x168)))
      _0x490844["style"][_0x243ccf(0x141)] = _0x3b7376[_0x243ccf(0x187)];
    else
      _0x3b7376[_0x243ccf(0x302)](_0x1572c3, _0x3b7376[_0x243ccf(0x2de)]) &&
      _0x3b7376["crpzL"](_0x1f301a, _0x3b7376[_0x243ccf(0x2de)])
        ? (_0x490844[_0x243ccf(0x133)][_0x243ccf(0x141)] = _0x243ccf(0x167))
        : (_0x490844[_0x243ccf(0x133)][_0x243ccf(0x141)] =
            _0x3b7376[_0x243ccf(0x234)]);
  }),
    document[_0xa7c16a(0x9b)](_0x3b7376[_0xa7c16a(0x24b)])["forEach"](
      (_0x151aec) => {
        _0x151aec["checked"] = ![];
      }
    );
  if (_0x3b7376[_0xa7c16a(0x99)](_0x1572c3, _0x3b7376[_0xa7c16a(0x2de)])) {
    const _0x5db30d = document[_0xa7c16a(0x1ef)](_0xa7c16a(0x27f));
    _0x5db30d && (_0x5db30d["checked"] = !![]),
      (selectedPackage = _0x3b7376[_0xa7c16a(0x2de)]),
      _0x3b7376[_0xa7c16a(0x2fc)](updatePackageSelection),
      _0x3b7376["Etwkx"](showSelectionDetails);
  } else
    (selectedPackage = null),
      (document[_0xa7c16a(0x223)](_0x3b7376["BieSk"])[_0xa7c16a(0x133)][
        "display"
      ] = _0x3b7376[_0xa7c16a(0x234)]);
  const _0x1c435a = document["querySelectorAll"](_0x3b7376[_0xa7c16a(0x270)]);
  _0x1c435a[_0xa7c16a(0x2b6)]((_0x3cd109) => {
    const _0x11fd87 = _0xa7c16a;
    _0x3cd109["classList"][_0x11fd87(0x89)](_0x3b7376[_0x11fd87(0xf5)]),
      _0x3cd109["classList"]["add"](_0x3b7376[_0x11fd87(0x243)]);
  });
  let _0x2e82d6;
  if (_0x3b7376[_0xa7c16a(0x150)](_0x1572c3, _0xa7c16a(0x168)))
    _0x2e82d6 = document[_0xa7c16a(0x1ef)](_0x3b7376[_0xa7c16a(0x2db)]);
  else
    _0x1572c3 === _0x3b7376["NnkWa"] &&
      (_0x2e82d6 = document[_0xa7c16a(0x1ef)](_0xa7c16a(0x303)));
  _0x2e82d6 &&
    (_0x2e82d6[_0xa7c16a(0xee)]["add"](_0x3b7376["HTnAe"]),
    _0x2e82d6[_0xa7c16a(0xee)][_0xa7c16a(0x89)](_0x3b7376[_0xa7c16a(0x243)]));
}
document[a0_0xbc5d54(0xcc)](a0_0xbc5d54(0x2d0), () => {
  const _0x881ce4 = a0_0xbc5d54,
    _0x11d5ef = {
      clULX: function (_0xc709de, _0x5504f7) {
        return _0xc709de(_0x5504f7);
      },
      KNaWJ: "individual",
    };
  _0x11d5ef[_0x881ce4(0x28c)](filterProducts, _0x11d5ef[_0x881ce4(0x2b1)]);
});
function showCustomerForm() {
  const _0x2ba547 = a0_0xbc5d54,
    _0x6ffff6 = {
      Iimui: "checkout-section",
      CwHwa: _0x2ba547(0x167),
      YZddD: _0x2ba547(0xf0),
      KHzLc: _0x2ba547(0xe5),
      zarPF: function (_0x47eb3e) {
        return _0x47eb3e();
      },
    };
  (document[_0x2ba547(0x223)](_0x6ffff6[_0x2ba547(0x2c6)])[_0x2ba547(0x133)][
    _0x2ba547(0x141)
  ] = _0x6ffff6[_0x2ba547(0xa6)]),
    (document[_0x2ba547(0x223)](_0x6ffff6["YZddD"])[_0x2ba547(0x133)][
      "display"
    ] = _0x6ffff6[_0x2ba547(0x22c)]),
    _0x6ffff6[_0x2ba547(0xea)](hideProductButtons);
}
function hideProductButtons() {
  const _0x3fb97f = a0_0xbc5d54,
    _0x1ba703 = { YuPQS: _0x3fb97f(0xe5), lYzmh: _0x3fb97f(0xd0) },
    _0x7a8999 = document["querySelectorAll"](_0x1ba703[_0x3fb97f(0x10b)]);
  _0x7a8999["forEach"]((_0x316950) => {
    const _0x1fab8a = _0x3fb97f;
    _0x316950["style"][_0x1fab8a(0x141)] = _0x1ba703[_0x1fab8a(0x1f8)];
  });
}
function a0_0x4c04(_0x2d2dd6, _0x393073) {
  const _0x320dcc = a0_0x320d();
  return (
    (a0_0x4c04 = function (_0x4c04bb, _0x284ae8) {
      _0x4c04bb = _0x4c04bb - 0x79;
      let _0x290aaa = _0x320dcc[_0x4c04bb];
      return _0x290aaa;
    }),
    a0_0x4c04(_0x2d2dd6, _0x393073)
  );
}
function showProductButtons() {
  const _0x127582 = a0_0xbc5d54,
    _0x5e3231 = { OyCov: _0x127582(0xd0) },
    _0x145e6d = document["querySelectorAll"](_0x5e3231[_0x127582(0x317)]);
  _0x145e6d[_0x127582(0x2b6)]((_0x1e724c) => {
    const _0x44574a = _0x127582;
    _0x1e724c[_0x44574a(0x133)][_0x44574a(0x141)] = _0x44574a(0x21b);
  });
}
document[a0_0xbc5d54(0xcc)](a0_0xbc5d54(0x2d0), function () {
  const _0x505cb1 = a0_0xbc5d54,
    _0x1c0c45 = {
      ZOApc: _0x505cb1(0x109),
      DxVUR: _0x505cb1(0x26a),
      xtzfa: function (_0x2a5bae, _0x2f6376) {
        return _0x2a5bae > _0x2f6376;
      },
      rbOMh: function (_0x3b7d93, _0x2cbd5c) {
        return _0x3b7d93 - _0x2cbd5c;
      },
      pkjLt: function (_0xa77bf5, _0x3d0c2a) {
        return _0xa77bf5(_0x3d0c2a);
      },
      CcSLV: function (_0x1ae2ad, _0x5c179d) {
        return _0x1ae2ad * _0x5c179d;
      },
      HFPfK: _0x505cb1(0x7e),
      ZtgAc: _0x505cb1(0x97),
    },
    _0x1e09e3 = localStorage["getItem"](_0x1c0c45[_0x505cb1(0x13c)]),
    _0x4b1599 = new Date()["getTime"]();
  if (
    !_0x1e09e3 ||
    _0x1c0c45[_0x505cb1(0xce)](
      _0x1c0c45[_0x505cb1(0x2c4)](
        _0x4b1599,
        _0x1c0c45[_0x505cb1(0xbd)](parseInt, _0x1e09e3)
      ),
      _0x1c0c45["CcSLV"](0x3c * 0x3c, 0x3e8)
    )
  ) {
    const _0x3bc96f = new bootstrap[_0x505cb1(0x1a3)](
      document[_0x505cb1(0x223)](_0x1c0c45[_0x505cb1(0x1b8)])
    );
    _0x3bc96f[_0x505cb1(0x131)]();
    const _0x6ead0a = new bootstrap[_0x505cb1(0xa3)](
      document[_0x505cb1(0x223)](_0x1c0c45["ZtgAc"]),
      { interval: 0xbb8, wrap: !![] }
    );
  }
  document["getElementById"](_0x1c0c45[_0x505cb1(0x1b8)])[_0x505cb1(0xcc)](
    _0x505cb1(0x13e),
    function () {
      const _0x41d4a5 = _0x505cb1;
      document[_0x41d4a5(0x223)](_0x1c0c45[_0x41d4a5(0x86)])[
        _0x41d4a5(0x264)
      ] &&
        localStorage[_0x41d4a5(0xaf)](
          _0x1c0c45[_0x41d4a5(0x13c)],
          new Date()[_0x41d4a5(0x19d)]()
        );
    }
  );
}),
  document["addEventListener"](a0_0xbc5d54(0x2d0), function () {
    const _0x522529 = a0_0xbc5d54,
      _0x4737ba = {
        zcKtc: function (_0x2a1d97, _0x1174e5) {
          return _0x2a1d97 === _0x1174e5;
        },
        ERzWd: "Enter",
        OPEkc: _0x522529(0x147),
      },
      _0x33b8d3 = document[_0x522529(0x223)](_0x522529(0x25c));
    _0x33b8d3 &&
      _0x33b8d3[_0x522529(0xcc)](
        _0x4737ba[_0x522529(0x278)],
        function (_0x13102e) {
          const _0x1f5e72 = _0x522529;
          _0x4737ba[_0x1f5e72(0x240)](
            _0x13102e["key"],
            _0x4737ba[_0x1f5e72(0x2f3)]
          ) && _0x13102e["preventDefault"]();
        }
      );
  });
function goBack() {
  const _0x2decaa = a0_0xbc5d54,
    _0x218a53 = {
      qQFZy: "checkout-section",
      vYtto: _0x2decaa(0xe5),
      rGzZl: _0x2decaa(0xf0),
      OWeaN: _0x2decaa(0x108),
    };
  (document[_0x2decaa(0x223)](_0x218a53[_0x2decaa(0x23f)])["style"][
    _0x2decaa(0x141)
  ] = _0x218a53[_0x2decaa(0x1bb)]),
    (document["getElementById"](_0x218a53[_0x2decaa(0x17c)])["style"][
      _0x2decaa(0x141)
    ] = _0x2decaa(0x167)),
    window[_0x2decaa(0x112)]({
      top: 0x0,
      behavior: _0x218a53[_0x2decaa(0x1c4)],
    });
}
const carousel = document[a0_0xbc5d54(0x1ef)](a0_0xbc5d54(0x170)),
  bsCarousel = new bootstrap[a0_0xbc5d54(0xa3)](carousel, {
    interval: 0x5dc,
    ride: a0_0xbc5d54(0x1c0),
  });
