const a0_0x367d28 = a0_0x5651;
(function (_0x9d11e2, _0x4f79f4) {
  const _0xc13f6e = a0_0x5651,
    _0x45f016 = _0x9d11e2();
  while (!![]) {
    try {
      const _0x34a891 =
        parseInt(_0xc13f6e(0x122)) / 0x1 +
        -parseInt(_0xc13f6e(0x1a3)) / 0x2 +
        (-parseInt(_0xc13f6e(0x9d)) / 0x3) *
          (-parseInt(_0xc13f6e(0x231)) / 0x4) +
        (parseInt(_0xc13f6e(0x2ab)) / 0x5) *
          (parseInt(_0xc13f6e(0x284)) / 0x6) +
        parseInt(_0xc13f6e(0x216)) / 0x7 +
        parseInt(_0xc13f6e(0x123)) / 0x8 +
        parseInt(_0xc13f6e(0xda)) / 0x9;
      if (_0x34a891 === _0x4f79f4) break;
      else _0x45f016["push"](_0x45f016["shift"]());
    } catch (_0x32d2b9) {
      _0x45f016["push"](_0x45f016["shift"]());
    }
  }
})(a0_0x5e02, 0x76821);
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
  selectedSizes = { polo: [], jacket: [], jersey: [] };
const packages = {
    individual: {
      name: a0_0x367d28(0x18a),
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
document[a0_0x367d28(0x240)](a0_0x367d28(0xc4), function () {
  const _0x59f29a = a0_0x367d28,
    _0x21c5ee = {
      rDtxn: function (_0x3c499a) {
        return _0x3c499a();
      },
      AsPSl: _0x59f29a(0x9b),
      Ovsyu: _0x59f29a(0x137),
    };
  document[_0x59f29a(0x170)](_0x59f29a(0x2c7))[_0x59f29a(0xa4)]((_0x535004) => {
    const _0x41bb53 = _0x59f29a;
    _0x535004[_0x41bb53(0x240)](_0x21c5ee[_0x41bb53(0x183)], function () {
      const _0xe96947 = _0x41bb53;
      (selectedPackage = this["value"]),
        _0x21c5ee["rDtxn"](updatePackageSelection),
        _0x21c5ee[_0xe96947(0x136)](showSelectionDetails);
    });
  }),
    (document[_0x59f29a(0x232)](_0x59f29a(0x224))[_0x59f29a(0x178)]["display"] =
      _0x21c5ee[_0x59f29a(0x23f)]);
});
function updatePackageSelection() {
  const _0x3cd60d = a0_0x367d28,
    _0x246077 = { XSacU: _0x3cd60d(0x14e), JmVJk: _0x3cd60d(0x139) };
  document[_0x3cd60d(0x170)](_0x246077[_0x3cd60d(0xa2)])["forEach"](
    (_0x298f43) => {
      const _0x525666 = _0x3cd60d;
      _0x298f43[_0x525666(0x23e)][_0x525666(0xb0)](_0x246077["XSacU"]);
    }
  );
  const _0x1b419c = document["querySelector"](
    _0x3cd60d(0x19a) + selectedPackage + "\x22]"
  );
  _0x1b419c &&
    _0x1b419c["classList"][_0x3cd60d(0x20e)](_0x246077[_0x3cd60d(0x145)]);
}
function showSelectionDetails() {
  const _0x5bcbbb = a0_0x367d28,
    _0x5e0e65 = {
      mUIbU: _0x5bcbbb(0x14e),
      ZJcRy: _0x5bcbbb(0x2da),
      UIGqn: "quantity-section",
      iwWPD: _0x5bcbbb(0xac),
      ahYop: _0x5bcbbb(0x115),
      CeNMV: "jacket-size-section",
      QCZka: "jersey-size-section",
      oEZJC: _0x5bcbbb(0x73),
      lvnWh: _0x5bcbbb(0x137),
      tktli: _0x5bcbbb(0x2d1),
      DXpvb: function (_0x1dfc7e, _0x6a1881) {
        return _0x1dfc7e === _0x6a1881;
      },
      DBhyc: _0x5bcbbb(0x1c8),
      SijlX: _0x5bcbbb(0x26d),
      hfDUz: function (_0xedef24) {
        return _0xedef24();
      },
    },
    _0x10a982 = document["getElementById"](_0x5e0e65[_0x5bcbbb(0x296)]),
    _0x2eb96e = document["getElementById"](_0x5e0e65["UIGqn"]),
    _0x1b309a = document[_0x5bcbbb(0x232)]("individual-items-selection"),
    _0x3be76a = document[_0x5bcbbb(0x232)](_0x5e0e65["iwWPD"]),
    _0x464545 = document[_0x5bcbbb(0x232)](_0x5e0e65[_0x5bcbbb(0x2d8)]),
    _0x41b13a = document[_0x5bcbbb(0x232)](_0x5bcbbb(0x96)),
    _0x1277e7 = document[_0x5bcbbb(0x232)](_0x5e0e65[_0x5bcbbb(0x71)]),
    _0x14410f = document[_0x5bcbbb(0x232)](_0x5e0e65[_0x5bcbbb(0xc7)]);
  (_0x10a982["style"][_0x5bcbbb(0x8d)] = _0x5e0e65["oEZJC"]),
    (selectedSizes = { polo: [], jacket: [], jersey: [] }),
    document[_0x5bcbbb(0x170)](_0x5bcbbb(0xdc))[_0x5bcbbb(0xa4)](
      (_0x567682) => {
        const _0x5d7512 = _0x5bcbbb;
        _0x567682["classList"][_0x5d7512(0xb0)](_0x5e0e65["mUIbU"]);
      }
    ),
    (_0x2eb96e["style"][_0x5bcbbb(0x8d)] = _0x5e0e65[_0x5bcbbb(0x102)]),
    (_0x41b13a[_0x5bcbbb(0x178)][_0x5bcbbb(0x8d)] =
      _0x5e0e65[_0x5bcbbb(0x102)]),
    (_0x1277e7[_0x5bcbbb(0x178)][_0x5bcbbb(0x8d)] = _0x5bcbbb(0x137)),
    (_0x14410f[_0x5bcbbb(0x178)][_0x5bcbbb(0x8d)] = _0x5e0e65["lvnWh"]),
    (_0x1b309a[_0x5bcbbb(0x178)][_0x5bcbbb(0x8d)] =
      _0x5e0e65[_0x5bcbbb(0x102)]),
    (_0x3be76a[_0x5bcbbb(0x217)] = ""),
    (_0x464545[_0x5bcbbb(0x217)] = "");
  const _0xd474b5 = document[_0x5bcbbb(0x232)](_0x5e0e65["tktli"]);
  if (_0xd474b5) _0xd474b5[_0x5bcbbb(0x217)] = "";
  _0x5e0e65[_0x5bcbbb(0xf1)](selectedPackage, _0x5e0e65[_0x5bcbbb(0xe7)]) &&
    ((_0x1b309a[_0x5bcbbb(0x178)][_0x5bcbbb(0x8d)] = _0x5e0e65["oEZJC"]),
    document["querySelectorAll"](_0x5e0e65["SijlX"])[_0x5bcbbb(0xa4)](
      (_0xcd0493) => {
        const _0x486149 = _0x5bcbbb;
        _0xcd0493[_0x486149(0x1e9)] = "0";
      }
    ),
    (individualItems = {
      polo: { price: 0x167, quantity: 0x0 },
      jacket: { price: 0x316, quantity: 0x0 },
      jersey: { price: 0x103, quantity: 0x0 },
      belt: { price: 0x81, quantity: 0x0 },
      tung: { price: 0x77, quantity: 0x0 },
      tie: { price: 0x77, quantity: 0x0 },
    }),
    _0x5e0e65[_0x5bcbbb(0x15b)](updateIndividualItems)),
    _0x5e0e65[_0x5bcbbb(0x15b)](updateTotal),
    _0x10a982[_0x5bcbbb(0x206)]({ behavior: "smooth" });
}
function selectSize(_0x35aa7d, _0x569980) {
  const _0x702f90 = a0_0x367d28,
    _0x1a54b5 = {
      DROkY: _0x702f90(0x14e),
      AijDF: function (_0x4b8fd, _0x559709) {
        return _0x4b8fd === _0x559709;
      },
      UjJgM: _0x702f90(0x13f),
      WXQjW: _0x702f90(0xdc),
    };
  selectedSizes[_0x35aa7d][0x0] = _0x569980;
  const _0x5c4c31 = _0x1a54b5["AijDF"](_0x35aa7d, _0x1a54b5[_0x702f90(0xa7)])
      ? _0x702f90(0x96)
      : _0x702f90(0x16b),
    _0x5ace38 = document[_0x702f90(0x232)](_0x5c4c31);
  _0x5ace38[_0x702f90(0x170)](_0x1a54b5[_0x702f90(0xdd)])["forEach"](
    (_0x5b04fa) => {
      const _0x17947d = _0x702f90;
      _0x5b04fa[_0x17947d(0x23e)][_0x17947d(0xb0)](_0x1a54b5[_0x17947d(0x160)]);
    }
  );
  const _0x5e3a22 = _0x5ace38[_0x702f90(0x2b1)](
    _0x702f90(0x28e) + _0x569980 + "\x22]"
  );
  _0x5e3a22 &&
    _0x5e3a22[_0x702f90(0x23e)][_0x702f90(0x20e)](_0x1a54b5[_0x702f90(0x160)]);
}
function updateSizeSelectors(_0x4ea524) {
  const _0x97904 = a0_0x367d28,
    _0x7413dc = {
      uqehf: _0x97904(0x26e),
      haCzq: "col",
      Bhvhv: _0x97904(0x2c9),
      eiMfs: _0x97904(0x18d),
      WOidA: _0x97904(0x125),
      mLKru: _0x97904(0x137),
      wpNAB: _0x97904(0x73),
      xbNsd: function (_0x46930f, _0x18e317) {
        return _0x46930f < _0x18e317;
      },
      uOclK: "label",
      AiAwi: "form-label\x20fw-bold",
      GZKxv: function (_0x186e10, _0x226c1b) {
        return _0x186e10 === _0x226c1b;
      },
      BDdMy: "เสื้อแจ็คเก็ต",
      FgbOd: "เสื้อ\x20JERSEY",
      MAXNR: function (_0x22e630, _0x354b3a) {
        return _0x22e630 + _0x354b3a;
      },
      lPTnK: "row\x20row-cols-2\x20row-cols-sm-3\x20row-cols-md-6\x20g-3",
      EMbpw: _0x97904(0x19e),
      raYAf: _0x97904(0x2e1),
      CNAHQ: _0x97904(0x80),
      jpfDz: _0x97904(0xec),
    },
    _0x243919 = document[_0x97904(0x232)](_0x4ea524 + "-sizes-container"),
    _0x890c02 = individualItems[_0x4ea524][_0x97904(0x243)];
  (_0x243919[_0x97904(0x217)] = ""), (selectedSizes[_0x4ea524] = []);
  if (_0x890c02 <= 0x0) {
    _0x243919[_0x97904(0x178)][_0x97904(0x8d)] = _0x7413dc["mLKru"];
    return;
  }
  _0x243919["style"][_0x97904(0x8d)] = _0x7413dc["wpNAB"];
  for (
    let _0x5664c6 = 0x0;
    _0x7413dc[_0x97904(0x1c6)](_0x5664c6, _0x890c02);
    _0x5664c6++
  ) {
    const _0x12e010 = document[_0x97904(0x29c)](_0x7413dc[_0x97904(0x89)]);
    _0x12e010[_0x97904(0x268)] = _0x97904(0x176);
    const _0x10d97b = document[_0x97904(0x29c)](_0x7413dc[_0x97904(0xc9)]);
    _0x10d97b[_0x97904(0x268)] = _0x7413dc["AiAwi"];
    let _0x3b46a9 = _0x97904(0x157);
    if (_0x7413dc[_0x97904(0x174)](_0x4ea524, _0x97904(0x204)))
      _0x3b46a9 = _0x7413dc[_0x97904(0x207)];
    if (_0x4ea524 === _0x97904(0x131)) _0x3b46a9 = _0x7413dc[_0x97904(0x218)];
    (_0x10d97b[_0x97904(0x1d8)] =
      _0x3b46a9 +
      "\x20ตัวที่\x20" +
      _0x7413dc[_0x97904(0x1da)](_0x5664c6, 0x1) +
      ":"),
      _0x12e010[_0x97904(0xea)](_0x10d97b);
    const _0x1df3b7 = document[_0x97904(0x29c)](_0x7413dc[_0x97904(0x89)]);
    (_0x1df3b7[_0x97904(0x268)] = _0x7413dc[_0x97904(0x1f5)]),
      _0x1df3b7["setAttribute"]("data-type", _0x4ea524),
      _0x1df3b7[_0x97904(0x8c)](_0x7413dc[_0x97904(0x7d)], _0x5664c6);
    const _0x56a8c4 = [
      _0x7413dc[_0x97904(0x273)],
      "SS",
      "S",
      "M",
      "L",
      "XL",
      _0x7413dc[_0x97904(0x11a)],
      _0x97904(0x242),
      "4XL",
      _0x7413dc[_0x97904(0x143)],
    ];
    _0x56a8c4[_0x97904(0xa4)]((_0x3cf417) => {
      const _0x34be11 = _0x97904,
        _0x455cba = document[_0x34be11(0x29c)](_0x7413dc[_0x34be11(0x89)]);
      _0x455cba["className"] = _0x7413dc[_0x34be11(0x1d3)];
      const _0x5144cf = document[_0x34be11(0x29c)](_0x7413dc[_0x34be11(0x2a9)]);
      (_0x5144cf[_0x34be11(0x141)] = _0x7413dc[_0x34be11(0x2a9)]),
        (_0x5144cf[_0x34be11(0x268)] = _0x34be11(0x172)),
        _0x5144cf[_0x34be11(0x8c)](_0x7413dc[_0x34be11(0x19b)], _0x3cf417),
        (_0x5144cf["textContent"] = _0x3cf417),
        _0x5144cf[_0x34be11(0x240)](_0x7413dc[_0x34be11(0xa8)], () =>
          selectMultiSize(_0x4ea524, _0x5664c6, _0x3cf417)
        ),
        _0x455cba[_0x34be11(0xea)](_0x5144cf),
        _0x1df3b7[_0x34be11(0xea)](_0x455cba);
    }),
      _0x12e010[_0x97904(0xea)](_0x1df3b7),
      _0x243919["appendChild"](_0x12e010),
      (selectedSizes[_0x4ea524][_0x5664c6] = null);
  }
}
function selectMultiSize(_0x1e53eb, _0x2c800f, _0x42771f) {
  const _0x2670e6 = a0_0x367d28,
    _0x1bc053 = { IDdNa: ".size-btn", XMtVi: _0x2670e6(0x14e) };
  selectedSizes[_0x1e53eb][_0x2c800f] = _0x42771f;
  const _0x287971 = document["querySelector"](
    _0x2670e6(0x267) + _0x1e53eb + _0x2670e6(0xc2) + _0x2c800f + "\x22]"
  );
  _0x287971[_0x2670e6(0x170)](_0x1bc053[_0x2670e6(0x7e)])[_0x2670e6(0xa4)](
    (_0x16219f) => {
      const _0x4624c1 = _0x2670e6;
      _0x16219f[_0x4624c1(0x23e)]["remove"]("selected");
    }
  );
  const _0x5b3171 = _0x287971["querySelector"](
    _0x2670e6(0x28e) + _0x42771f + "\x22]"
  );
  _0x5b3171 &&
    _0x5b3171[_0x2670e6(0x23e)][_0x2670e6(0x20e)](_0x1bc053["XMtVi"]);
}
function updateIndividualItems() {
  const _0x593ddf = a0_0x367d28,
    _0x17043f = {
      AqIpI: "-select",
      vWKuI: function (_0x429d3b, _0x2b08f1) {
        return _0x429d3b(_0x2b08f1);
      },
      KCRmt: _0x593ddf(0xcd),
      IYTen: _0x593ddf(0x229),
      ouKDR: _0x593ddf(0x29e),
      tnIiQ: function (_0x1bd24f, _0x326064) {
        return _0x1bd24f(_0x326064);
      },
      NoGVj: _0x593ddf(0x16d),
      aabef: function (_0x3f86c2, _0x51dce7) {
        return _0x3f86c2(_0x51dce7);
      },
      YzvWv: _0x593ddf(0x276),
      SUHCV: function (_0x1dc655, _0x441b11) {
        return _0x1dc655 + _0x441b11;
      },
      CKhfJ: function (_0x7d354c, _0x5dc0d3) {
        return _0x7d354c + _0x5dc0d3;
      },
      fXsbE: _0x593ddf(0x1bb),
      kgBAi: _0x593ddf(0x6e),
      odYhn: _0x593ddf(0x148),
      scIwF: function (_0x26517a, _0x4e63e6) {
        return _0x26517a > _0x4e63e6;
      },
      clJtY: _0x593ddf(0x279),
      CuEUv: _0x593ddf(0x13f),
      UAUOp: function (_0x2d7c9c, _0x16a7cc) {
        return _0x2d7c9c(_0x16a7cc);
      },
      NDzQM: _0x593ddf(0x131),
      mTvIn: function (_0x205634) {
        return _0x205634();
      },
      LBNpd: function (_0x222cb2, _0x27d75f) {
        return _0x222cb2 !== _0x27d75f;
      },
      ecQLm: _0x593ddf(0x84),
      rMOoB: function (_0x1f90db, _0xb08cd0) {
        return _0x1f90db * _0xb08cd0;
      },
      GlTaT: _0x593ddf(0x1c8),
      fOSTy: _0x593ddf(0x157),
      eDlri: function (_0x3dfe8e, _0x45f0ce) {
        return _0x3dfe8e > _0x45f0ce;
      },
      MGMPu: _0x593ddf(0x22e),
      cDUaU: _0x593ddf(0x256),
      ovVvW: function (_0x74d400, _0x1f5f03) {
        return _0x74d400 > _0x1f5f03;
      },
      CUHgW: _0x593ddf(0x195),
      OErQU: function (_0x587ef3, _0x1234e5) {
        return _0x587ef3 > _0x1234e5;
      },
      hpXaP: "ที่หนีบเนคไท",
    },
    _0x16772c = {
      polo:
        _0x17043f[_0x593ddf(0x10b)](
          parseInt,
          document[_0x593ddf(0x232)](_0x17043f[_0x593ddf(0x26f)])["value"]
        ) || 0x0,
      jacket:
        _0x17043f["vWKuI"](
          parseInt,
          document[_0x593ddf(0x232)](_0x17043f[_0x593ddf(0x77)])[
            _0x593ddf(0x1e9)
          ]
        ) || 0x0,
      jersey:
        _0x17043f[_0x593ddf(0x10b)](
          parseInt,
          document[_0x593ddf(0x232)](_0x17043f[_0x593ddf(0x29a)])["value"]
        ) || 0x0,
      belt:
        _0x17043f[_0x593ddf(0x18e)](
          parseInt,
          document[_0x593ddf(0x232)](_0x17043f[_0x593ddf(0x25e)])[
            _0x593ddf(0x1e9)
          ]
        ) || 0x0,
      tung: 0x0,
      tie:
        _0x17043f[_0x593ddf(0xb6)](
          parseInt,
          document[_0x593ddf(0x232)](_0x17043f["YzvWv"])[_0x593ddf(0x1e9)]
        ) || 0x0,
    },
    _0x4ef729 = _0x17043f[_0x593ddf(0x247)](
      _0x17043f[_0x593ddf(0x28b)](
        _0x16772c[_0x593ddf(0x13f)],
        _0x16772c[_0x593ddf(0x204)]
      ),
      _0x16772c[_0x593ddf(0x131)]
    );
  if (_0x4ef729 > 0x3) {
    Swal[_0x593ddf(0x70)]({
      icon: "warning",
      title: _0x17043f["fXsbE"],
      text: _0x17043f[_0x593ddf(0x164)],
      confirmButtonText: _0x17043f[_0x593ddf(0x220)],
    });
    const _0x51c5cd = [
      _0x17043f[_0x593ddf(0x26f)],
      _0x17043f[_0x593ddf(0x77)],
      _0x17043f[_0x593ddf(0x29a)],
    ];
    _0x51c5cd[_0x593ddf(0xa4)]((_0x1b16c3) => {
      const _0x3af9c1 = _0x593ddf,
        _0x3a8da4 = document[_0x3af9c1(0x232)](_0x1b16c3);
      if (_0x3a8da4 && _0x3a8da4 === document[_0x3af9c1(0xbf)]) {
        const _0x1f4f85 = _0x1b16c3[_0x3af9c1(0x234)](
          _0x17043f[_0x3af9c1(0xd1)],
          ""
        );
        _0x3a8da4[_0x3af9c1(0x1e9)] =
          individualItems[_0x1f4f85][_0x3af9c1(0x243)];
      }
    });
    return;
  }
  const _0x5c508c = Object[_0x593ddf(0x14f)](_0x16772c)[_0x593ddf(0x280)](
    (_0x3bc27c, _0x1d7163) => _0x3bc27c + _0x1d7163,
    0x0
  );
  if (_0x17043f[_0x593ddf(0x205)](_0x5c508c, 0x3)) {
    Swal[_0x593ddf(0x70)]({
      icon: _0x593ddf(0x2b4),
      title: _0x593ddf(0x208),
      text: _0x17043f["clJtY"],
      confirmButtonText: _0x593ddf(0x148),
    });
    const _0x25e022 = [
      "polo-select",
      _0x17043f[_0x593ddf(0x77)],
      _0x17043f[_0x593ddf(0x29a)],
      _0x593ddf(0x16d),
      _0x17043f[_0x593ddf(0xa9)],
    ];
    _0x25e022[_0x593ddf(0xa4)]((_0x25baea) => {
      const _0x54e598 = _0x593ddf,
        _0x5c2aff = document[_0x54e598(0x232)](_0x25baea);
      if (_0x5c2aff && _0x5c2aff === document[_0x54e598(0xbf)]) {
        const _0x11fff9 = _0x25baea[_0x54e598(0x234)](_0x17043f["AqIpI"], "");
        _0x5c2aff[_0x54e598(0x1e9)] = individualItems[_0x11fff9]["quantity"];
      }
    });
    return;
  }
  (individualItems[_0x593ddf(0x13f)]["quantity"] = _0x16772c[_0x593ddf(0x13f)]),
    (individualItems["jacket"][_0x593ddf(0x243)] = _0x16772c[_0x593ddf(0x204)]),
    (individualItems[_0x593ddf(0x131)][_0x593ddf(0x243)] =
      _0x16772c[_0x593ddf(0x131)]),
    (individualItems[_0x593ddf(0xfd)][_0x593ddf(0x243)] = _0x16772c["belt"]),
    (individualItems[_0x593ddf(0x84)][_0x593ddf(0x243)] = 0x0),
    (individualItems[_0x593ddf(0x169)]["quantity"] =
      _0x16772c[_0x593ddf(0x169)]),
    _0x17043f[_0x593ddf(0xb6)](updateSizeSelectors, _0x17043f[_0x593ddf(0xb1)]),
    _0x17043f[_0x593ddf(0x2a3)](updateSizeSelectors, "jacket"),
    updateSizeSelectors(_0x17043f[_0x593ddf(0x191)]),
    _0x17043f["mTvIn"](updateShirtCounter);
  let _0x4b2e71 = 0x0;
  for (const _0xf93dc3 in individualItems) {
    _0x17043f[_0x593ddf(0x124)](_0xf93dc3, _0x17043f[_0x593ddf(0x28a)]) &&
      (_0x4b2e71 += _0x17043f["rMOoB"](
        individualItems[_0xf93dc3][_0x593ddf(0x180)],
        individualItems[_0xf93dc3][_0x593ddf(0x243)]
      ));
  }
  (packages[_0x17043f["GlTaT"]][_0x593ddf(0x180)] = _0x4b2e71),
    (packages[_0x17043f[_0x593ddf(0x2a6)]][_0x593ddf(0x1d7)] = []);
  if (
    _0x17043f["scIwF"](individualItems[_0x593ddf(0x13f)][_0x593ddf(0x243)], 0x0)
  )
    packages[_0x17043f[_0x593ddf(0x2a6)]][_0x593ddf(0x1d7)][_0x593ddf(0x181)](
      _0x17043f["fOSTy"]
    );
  if (
    _0x17043f[_0x593ddf(0x21a)](
      individualItems[_0x593ddf(0x204)]["quantity"],
      0x0
    )
  )
    packages[_0x17043f[_0x593ddf(0x2a6)]][_0x593ddf(0x1d7)]["push"](
      _0x17043f[_0x593ddf(0x161)]
    );
  if (
    _0x17043f[_0x593ddf(0x21a)](
      individualItems[_0x593ddf(0x131)][_0x593ddf(0x243)],
      0x0
    )
  )
    packages[_0x17043f[_0x593ddf(0x2a6)]]["items"]["push"](
      _0x17043f[_0x593ddf(0x20d)]
    );
  if (_0x17043f["ovVvW"](individualItems["belt"][_0x593ddf(0x243)], 0x0))
    packages[_0x17043f[_0x593ddf(0x2a6)]]["items"]["push"](_0x17043f["CUHgW"]);
  if (
    _0x17043f[_0x593ddf(0x132)](
      individualItems[_0x593ddf(0x169)][_0x593ddf(0x243)],
      0x0
    )
  )
    packages[_0x17043f[_0x593ddf(0x2a6)]][_0x593ddf(0x1d7)]["push"](
      _0x17043f[_0x593ddf(0x197)]
    );
  _0x17043f[_0x593ddf(0x2a0)](updateTotal);
}
function updateShirtCounter() {
  const _0x427b2b = a0_0x367d28,
    _0x3aa181 = {
      StydO: function (_0x4298bf, _0xbe0e6) {
        return _0x4298bf + _0xbe0e6;
      },
      KzAnK: function (_0x28a2e2, _0x5a50be) {
        return _0x28a2e2 + _0x5a50be;
      },
      tMwsf: _0x427b2b(0x24e),
      RbvUu: "shirt-counter",
      xztRh: function (_0x42f045, _0x395c77) {
        return _0x42f045 === _0x395c77;
      },
      xKqQI: _0x427b2b(0x2be),
      mPhzl: function (_0x5fe21b, _0x1f6270) {
        return _0x5fe21b <= _0x1f6270;
      },
      nPJcs: _0x427b2b(0x12b),
      jBJbv: _0x427b2b(0x271),
      kgisT: _0x427b2b(0x158),
    },
    _0x2843cd = _0x3aa181["StydO"](
      _0x3aa181[_0x427b2b(0x168)](
        individualItems["polo"][_0x427b2b(0x243)],
        individualItems[_0x427b2b(0x204)][_0x427b2b(0x243)]
      ),
      individualItems[_0x427b2b(0x131)][_0x427b2b(0x243)]
    ),
    _0x4e9e34 = document[_0x427b2b(0x232)](_0x3aa181[_0x427b2b(0x19f)]),
    _0x432ed5 = document["getElementById"](_0x3aa181[_0x427b2b(0x221)]);
  _0x4e9e34 && (_0x4e9e34["textContent"] = _0x2843cd),
    _0x432ed5 &&
      (_0x432ed5[_0x427b2b(0x268)] =
        _0x427b2b(0x2cd) +
        (_0x3aa181["xztRh"](_0x2843cd, 0x0)
          ? _0x3aa181[_0x427b2b(0x26a)]
          : _0x3aa181[_0x427b2b(0x13e)](_0x2843cd, 0x2)
          ? _0x3aa181[_0x427b2b(0xd5)]
          : _0x3aa181[_0x427b2b(0x1b5)](_0x2843cd, 0x3)
          ? _0x3aa181[_0x427b2b(0x135)]
          : _0x3aa181[_0x427b2b(0x2d4)]));
}
document[a0_0x367d28(0x232)](a0_0x367d28(0x243))[a0_0x367d28(0x240)](
  "input",
  function (_0x1f411a) {
    const _0xa2241 = a0_0x367d28,
      _0xf57b77 = { MEVFB: "กรุณากรอกตัวเลขเท่านั้น" };
    /[^0-9]/["test"](this[_0xa2241(0x1e9)]) &&
      (alert(_0xf57b77[_0xa2241(0x2a8)]),
      (this["value"] = this[_0xa2241(0x1e9)][_0xa2241(0x234)](/[^0-9]/g, "")));
  }
);
function changeQuantity(_0x188f14) {
  const _0x1663a7 = a0_0x367d28,
    _0x46da53 = {
      RrRvk: _0x1663a7(0x243),
      YdSsY: function (_0x159731, _0x506489) {
        return _0x159731 < _0x506489;
      },
      VPIQu: function (_0x437167, _0x45ed39) {
        return _0x437167 > _0x45ed39;
      },
    },
    _0x1cce43 = document[_0x1663a7(0x232)](_0x46da53[_0x1663a7(0x222)]);
  let _0x304c36 = parseInt(_0x1cce43[_0x1663a7(0x1e9)]) + _0x188f14;
  if (_0x46da53[_0x1663a7(0x290)](_0x304c36, 0x1)) _0x304c36 = 0x1;
  if (_0x46da53[_0x1663a7(0x21c)](_0x304c36, 0xa)) _0x304c36 = 0xa;
  (_0x1cce43[_0x1663a7(0x1e9)] = _0x304c36),
    (quantity = _0x304c36),
    updateTotal();
}
function updateTotal() {
  const _0x5f33d6 = a0_0x367d28,
    _0xd6e3fc = { wdODx: "total-display" };
  if (!selectedPackage) return;
  totalAmount = packages[selectedPackage]["price"];
  const _0x2a11de = document["getElementById"](_0xd6e3fc[_0x5f33d6(0x237)]);
  _0x2a11de &&
    (_0x2a11de[_0x5f33d6(0x1d8)] = totalAmount[_0x5f33d6(0x192)]() + "\x20บาท");
}
document[a0_0x367d28(0x170)](".delivery-option\x20input[type=\x22radio\x22]")[
  a0_0x367d28(0xa4)
]((_0x157550) => {
  const _0x1e9592 = {
    WciDq: function (_0x3fc6a1, _0x13c9ad) {
      return _0x3fc6a1(_0x13c9ad);
    },
    fkZJx: "change",
  };
  _0x157550["addEventListener"](_0x1e9592["fkZJx"], (_0x38bc77) => {
    const _0x51a8b8 = a0_0x5651;
    _0x1e9592[_0x51a8b8(0x1e5)](
      selectDelivery,
      _0x38bc77[_0x51a8b8(0x2a4)][_0x51a8b8(0x1e9)]
    );
  });
});
function selectDelivery(_0x41fada) {
  const _0x2d2c1b = a0_0x367d28,
    _0x4fb176 = {
      XZeEB: "selected",
      zIAwM: ".delivery-option",
      IMVVD: _0x2d2c1b(0x8b),
      izsta: _0x2d2c1b(0x137),
      Nfovf: "customer-form",
      ccDcv: "block",
      ARaxd: function (_0x19a830, _0x37682e) {
        return _0x19a830 === _0x37682e;
      },
      Hvafa: _0x2d2c1b(0x1ad),
      CDuZE: _0x2d2c1b(0x203),
      JpGVH: function (_0x273c32) {
        return _0x273c32();
      },
    };
  (deliveryType = _0x41fada),
    document[_0x2d2c1b(0x170)](_0x4fb176[_0x2d2c1b(0x112)])["forEach"](
      (_0xba5d04) => {
        const _0x2497e3 = _0x2d2c1b;
        _0xba5d04["classList"][_0x2497e3(0xb0)](_0x4fb176[_0x2497e3(0x28f)]);
      }
    ),
    document[_0x2d2c1b(0x2b1)](_0x2d2c1b(0x1f8) + _0x41fada + "\x22]")[
      _0x2d2c1b(0x23e)
    ][_0x2d2c1b(0x20e)](_0x4fb176[_0x2d2c1b(0x28f)]),
    (document[_0x2d2c1b(0x232)](_0x4fb176["IMVVD"])[_0x2d2c1b(0x178)][
      _0x2d2c1b(0x8d)
    ] = _0x4fb176[_0x2d2c1b(0x293)]),
    (document[_0x2d2c1b(0x232)](_0x4fb176[_0x2d2c1b(0x1e0)])["style"][
      _0x2d2c1b(0x8d)
    ] = _0x4fb176[_0x2d2c1b(0x1c1)]);
  const _0x486af3 = document["getElementById"](_0x2d2c1b(0x1bf));
  _0x4fb176[_0x2d2c1b(0x81)](_0x41fada, _0x4fb176[_0x2d2c1b(0x1de)])
    ? ((_0x486af3[_0x2d2c1b(0x178)][_0x2d2c1b(0x8d)] =
        _0x4fb176[_0x2d2c1b(0x1c1)]),
      (_0x486af3[_0x2d2c1b(0x2b1)]("textarea")["required"] = !![]))
    : ((_0x486af3[_0x2d2c1b(0x178)][_0x2d2c1b(0x8d)] =
        _0x4fb176[_0x2d2c1b(0x293)]),
      (_0x486af3[_0x2d2c1b(0x2b1)](_0x4fb176[_0x2d2c1b(0x24c)])[
        _0x2d2c1b(0xd7)
      ] = ![])),
    _0x4fb176[_0x2d2c1b(0x213)](updateFinalSummary);
}
function toggleYearSelection() {
  const _0x5b3b1f = a0_0x367d28,
    _0x139bd5 = {
      RvgWL: _0x5b3b1f(0xf9),
      pknkb: "year-selection",
      Jnpqt: _0x5b3b1f(0x179),
      ApqvZ: _0x5b3b1f(0x2cf),
      QYDSY: function (_0x15025d, _0x437037) {
        return _0x15025d === _0x437037;
      },
      fRkDY: _0x5b3b1f(0x79),
      HYfEA: _0x5b3b1f(0x2c2),
      YPPal: _0x5b3b1f(0x137),
      VOMOL: _0x5b3b1f(0x73),
      iGNdp: _0x5b3b1f(0x1f7),
    },
    _0x15983b = document[_0x5b3b1f(0x232)](_0x139bd5["RvgWL"])["value"],
    _0xcfcd54 = document[_0x5b3b1f(0x232)](_0x139bd5[_0x5b3b1f(0xc5)]),
    _0x42b38c = document[_0x5b3b1f(0x232)](_0x139bd5[_0x5b3b1f(0x254)]),
    _0x42a92a = document[_0x5b3b1f(0x232)](_0x139bd5["ApqvZ"]),
    _0x4816ba = document[_0x5b3b1f(0x232)](_0x5b3b1f(0xb3)),
    _0x1aa96a = document[_0x5b3b1f(0x232)](_0x5b3b1f(0x116));
  if (_0x139bd5[_0x5b3b1f(0xeb)](_0x15983b, _0x139bd5[_0x5b3b1f(0x15f)])) {
    const _0x33d6c7 = _0x139bd5[_0x5b3b1f(0x2e3)][_0x5b3b1f(0xbd)]("|");
    let _0xc1ef22 = 0x0;
    while (!![]) {
      switch (_0x33d6c7[_0xc1ef22++]) {
        case "0":
          _0x4816ba[_0x5b3b1f(0x178)][_0x5b3b1f(0x8d)] =
            _0x139bd5[_0x5b3b1f(0x2d0)];
          continue;
        case "1":
          _0xcfcd54[_0x5b3b1f(0x178)]["display"] = _0x139bd5["VOMOL"];
          continue;
        case "2":
          _0x42a92a["style"][_0x5b3b1f(0x8d)] = _0x139bd5[_0x5b3b1f(0xdf)];
          continue;
        case "3":
          _0x42b38c[_0x5b3b1f(0xd7)] = !![];
          continue;
        case "4":
          _0x1aa96a[_0x5b3b1f(0x178)]["display"] = _0x139bd5[_0x5b3b1f(0xdf)];
          continue;
      }
      break;
    }
  } else {
    if (_0x15983b === _0x5b3b1f(0xa6)) {
      const _0x2a2770 = _0x139bd5[_0x5b3b1f(0x2af)][_0x5b3b1f(0xbd)]("|");
      let _0x492b76 = 0x0;
      while (!![]) {
        switch (_0x2a2770[_0x492b76++]) {
          case "0":
            _0x42b38c[_0x5b3b1f(0xd7)] = !![];
            continue;
          case "1":
            _0x4816ba[_0x5b3b1f(0x178)][_0x5b3b1f(0x8d)] = _0x5b3b1f(0x73);
            continue;
          case "2":
            _0xcfcd54["style"]["display"] = _0x139bd5[_0x5b3b1f(0xdf)];
            continue;
          case "3":
            _0x42a92a[_0x5b3b1f(0x178)]["display"] =
              _0x139bd5[_0x5b3b1f(0x2d0)];
            continue;
          case "4":
            _0x1aa96a[_0x5b3b1f(0x178)][_0x5b3b1f(0x8d)] =
              _0x139bd5[_0x5b3b1f(0xdf)];
            continue;
        }
        break;
      }
    } else {
      const _0x4ff2a9 = _0x5b3b1f(0x235)[_0x5b3b1f(0xbd)]("|");
      let _0x50ff10 = 0x0;
      while (!![]) {
        switch (_0x4ff2a9[_0x50ff10++]) {
          case "0":
            _0x42b38c[_0x5b3b1f(0xd7)] = ![];
            continue;
          case "1":
            _0x42a92a[_0x5b3b1f(0x178)][_0x5b3b1f(0x8d)] =
              _0x139bd5[_0x5b3b1f(0x2d0)];
            continue;
          case "2":
            _0x4816ba[_0x5b3b1f(0x178)][_0x5b3b1f(0x8d)] =
              _0x139bd5[_0x5b3b1f(0x2d0)];
            continue;
          case "3":
            _0x42b38c[_0x5b3b1f(0x1e9)] = "";
            continue;
          case "4":
            _0x1aa96a[_0x5b3b1f(0x178)]["display"] =
              _0x139bd5[_0x5b3b1f(0x2d0)];
            continue;
          case "5":
            _0xcfcd54[_0x5b3b1f(0x178)]["display"] =
              _0x139bd5[_0x5b3b1f(0x2d0)];
            continue;
        }
        break;
      }
    }
  }
}
function validateEmail(_0x3811cb) {
  const _0x10f457 = a0_0x367d28,
    _0x229e1b = {
      TDaWd: "รูปแบบอีเมลไม่ถูกต้อง",
      PYVGQ: _0x10f457(0xf6),
      rVtnC: _0x10f457(0x22d),
    };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/[_0x10f457(0xa5)](_0x3811cb))
    return { valid: ![], error: _0x229e1b["TDaWd"] };
  const _0x417706 = [
      _0x229e1b["PYVGQ"],
      _0x10f457(0x23a),
      _0x10f457(0x209),
      _0x229e1b[_0x10f457(0x7f)],
    ],
    _0x145ad1 = _0x3811cb[_0x10f457(0xbd)]("@")[0x1][_0x10f457(0xd2)]();
  if (!_0x417706["includes"](_0x145ad1))
    return {
      valid: ![],
      error:
        "กรุณาใช้อีเมลที่ลงท้ายด้วย\x20kkumail.com,\x20kku.ac.th,\x20gmail.com\x20หรือ\x20hotmail.com\x20เท่านั้น",
    };
  return { valid: !![], error: "" };
}
function a0_0x5e02() {
  const _0xb421bc = [
    "\x20ชิ้น",
    "LFHIo",
    "FFqJL",
    "NoGVj",
    "hbeFD",
    "กรุณากรอกข้อมูลให้ครบถ้วน!",
    "height",
    "AVJCM",
    "QqSeO",
    "rCdTp",
    "canvas",
    "gULip",
    "[data-type=\x22",
    "className",
    "ZeQpF",
    "xKqQI",
    "IHgfA",
    "getMonth",
    ".individual-item-select",
    "div",
    "KCRmt",
    "QXUHd",
    "bg-warning",
    "kWcNu",
    "raYAf",
    "MScLo",
    "input[type=\x22radio\x22]",
    "tie-select",
    "th-TH",
    "data-package",
    "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้นรวมทั้งหมด",
    "faculty",
    "image/",
    "BXMEz",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "fEOgV",
    "studentId",
    "reduce",
    "\x0a\x20\x20\x20\x20<div\x20style=\x22max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-family:\x20\x27Sarabun\x27,\x20Arial,\x20sans-serif;\x20background-color:\x20#f8f9fa;\x20padding:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20white;\x20border-radius:\x2015px;\x20padding:\x2030px;\x20box-shadow:\x200\x204px\x206px\x20rgba(0,0,0,0.1);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin-bottom:\x2030px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:\x20#333;\x20font-size:\x2024px;\x20margin:\x200;\x20font-weight:\x20bold;\x22>คำสั่งซื้อสำเร็จ!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#666;\x20margin:\x2010px\x200\x200\x200;\x22>ขอบคุณสำหรับการสั่งซื้อ<br>หากไม่ได้รับอีเมลยืนยันคำสั่งซื้อ\x20กรุณาติดต่อ\x20Facebook\x20สโมสรนักศึกษาอย่างเร็วที่สุด</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#f8f9fa;\x20border-radius:\x2010px;\x20padding:\x2025px;\x20margin-bottom:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#007bff;\x20font-size:\x2018px;\x20margin:\x200\x200\x2020px\x200;\x20font-weight:\x20bold;\x22>สรุปการสั่งซื้อ</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>หมายเลขอ้างอิง:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "jVmgA",
    "error",
    "11562lHZmAM",
    "slip-thumbnail-container",
    "gjBXy",
    "oKdrV",
    "SMO",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "ecQLm",
    "CKhfJ",
    "tHwRf",
    "student-id",
    ".size-btn[data-size=\x22",
    "XZeEB",
    "YdSsY",
    "</pre>",
    "cssText",
    "izsta",
    "GBwyE",
    "QrnoK",
    "ZJcRy",
    "TktxU",
    "catch",
    "disabled",
    "ouKDR",
    "akrCs",
    "createElement",
    "<div\x20style=\x22margin-left:\x2020px;\x20margin-bottom:\x205px;\x20color:\x20#666;\x22>-\x20ตัวที่\x20",
    "jersey-select",
    "Qmcvv",
    "mTvIn",
    "omvSy",
    "scrollTo",
    "UAUOp",
    "target",
    "PlxdK",
    "GlTaT",
    "XiUEY",
    "MEVFB",
    "Bhvhv",
    "กรุณากรอกเบอร์โทรศัพท์",
    "445GLQHcl",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "RbvjL",
    "JTFvq",
    "iGNdp",
    "message",
    "querySelector",
    "SCAHr",
    "drawImage",
    "warning",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>เบอร์โทร:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "Pjqql",
    "inline-block",
    "okwdA",
    "CwazN",
    "KCCxs",
    "lXjoc",
    "slip-enlarged-img",
    "tung_ting",
    "bg-secondary",
    "head",
    "xNuvN",
    "select",
    "1|3|2|4|0",
    "Error:\x20One\x20or\x20more\x20required\x20slip-related\x20elements\x20are\x20missing\x20from\x20the\x20DOM.",
    "gQwmE",
    "fjKzH",
    "เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน\x20กรุณาลองใหม่อีกครั้ง:\x20",
    "input[name=\x22package\x22]",
    "GgvFU",
    "button",
    "\x20\x20\x20-\x20ตัวที่\x20",
    "qHgYI",
    "width",
    "badge\x20fs-6\x20",
    "deliveryType",
    "major-section",
    "YPPal",
    "jersey-sizes-container",
    "ค่าจัดส่ง:\x20+50\x20บาท",
    "pickup",
    "kgisT",
    "lfgze",
    "sxUzR",
    "กำลังโหลด...",
    "ahYop",
    "application/json",
    "selection-details",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วันที่สั่งซื้อ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "result",
    "RUVLr",
    "XzaeO",
    "Error\x20preparing\x20form\x20data:",
    "WTXRw",
    "SSS",
    "ms-3",
    "HYfEA",
    "JUcvp",
    "files",
    "address",
    "fUKlu",
    "smooth",
    "RkIoC",
    "LlqHn",
    "ไซส์เสื้อโปโล:\x20",
    "เสื้อ\x20(โปโล\x20+\x20แจ็คเก็ต\x20+\x20เจอร์ซี่)\x20รวมกันสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "strong",
    "fire",
    "CeNMV",
    "slip-enlarged-viewer",
    "block",
    ".row.g-4\x20.col-md-6",
    "ORDER_",
    "TdlZi",
    "IYTen",
    "WWLeh",
    "student-in",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วิธีรับสินค้า:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "หมายเหตุ:\x20",
    "epHOq",
    "EMbpw",
    "IDdNa",
    "rVtnC",
    "XXL",
    "ARaxd",
    "nXqXG",
    "กรุณาอัปโหลดสลิปการโอนเงิน",
    "tung",
    ".size-item",
    "image/jpeg",
    "เบอร์โทรศัพท์ต้องเป็นตัวเลข\x209-10\x20หลัก",
    "lbiFW",
    "uqehf",
    "firstname",
    "product-btn",
    "setAttribute",
    "display",
    "email",
    "/upload-slip",
    "jlcJO",
    "HTTP\x20error!\x20status:\x20",
    ":\x20ไซส์\x20",
    "ไม่สามารถอัปโหลดสลิปได้",
    "กรุณาเลือกไซส์เสื้อแจ็คเก็ตให้ครบทุกตัว",
    "DRCQh",
    "polo-size-section",
    "okVbi",
    "Gxvlt",
    "onload",
    "<br>",
    "change",
    "VoKXX",
    "15OsUtwr",
    "2|3|4|1|0|5",
    "AJcAx",
    "แพ็คเกจ:\x20",
    "OCsoK",
    "JmVJk",
    "Humwk",
    "forEach",
    "test",
    "student-out",
    "UjJgM",
    "WOidA",
    "YzvWv",
    "\x0aชื่อ-นามสกุล:\x20",
    "ZTrSh",
    "polo-sizes-container",
    "TCgAw",
    "YUByt",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "remove",
    "CuEUv",
    "รับที่วิทยาลัย",
    "faculty-section",
    "DMOLD",
    "Failed\x20to\x20send\x20confirmation\x20email:",
    "aabef",
    "Xzmqy",
    "SsKXM",
    "#product-btn\x20button:nth-child(1)",
    "trdEP",
    "/send-confirmation-email",
    "คำเตือน!",
    "split",
    "DGwxe",
    "activeElement",
    "&lt;",
    "แก้ไขข้อมูล",
    "\x22][data-index=\x22",
    "mYlgT",
    "DOMContentLoaded",
    "pknkb",
    "Enter",
    "QCZka",
    "sbgJQ",
    "uOclK",
    "close-enlarged-viewer-btn",
    "ybFwa",
    "info",
    "polo-select",
    "setItem",
    "alert\x20alert-primary",
    "กรุณาเลือกไซส์เสื้อโปโล",
    "AqIpI",
    "toLowerCase",
    "carouselModalLastShown",
    "pkAss",
    "nPJcs",
    "KBhrn",
    "required",
    "&quot;",
    "TkrEh",
    "2750436gCHzbF",
    "รูปแบบอีเมลไม่ถูกต้อง!",
    ".size-btn",
    "WXQjW",
    "\x20บาท</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>หมายเหตุ:</strong>\x20",
    "VOMOL",
    "AepNH",
    "vuzyo",
    "VdCjC",
    "TGOAA",
    "ไม่สามารถอัปโหลดรูปภาพสลิปได้:\x20",
    "JmPvr",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อ\x20JERSEY:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "DBhyc",
    "name",
    "checked",
    "appendChild",
    "QYDSY",
    "5XL",
    "</div>",
    "10px",
    "toLocaleDateString",
    "กรุณากรอกที่อยู่ให้ครบถ้วน",
    "DXpvb",
    "RIauK",
    "every",
    "กรุณากรอกที่อยู่สำหรับจัดส่ง",
    "kZXRr",
    "kkumail.com",
    "UMyiR",
    "นามสกุลต้องมีอย่างน้อย\x202\x20ตัวอักษร",
    "status",
    "wyLOM",
    "IhkaY",
    "hXZfy",
    "belt",
    "MUZYy",
    "เสื้อโปโล:\x20",
    "eroeS",
    "สิเอาส่ำนี่บ่ชีวิตสิหาแต่แนวเกรียนเว็บบ่หล่า",
    "lvnWh",
    "json",
    "order-summary-display",
    "kjdOV",
    "xPJry",
    "fYmjv",
    "VNdCo",
    "SgBDR",
    "อีเมล:\x20",
    "vWKuI",
    "uEQbq",
    "วันที่สั่งซื้อ:\x20",
    "qimhe",
    "keydown",
    "LWxwX",
    "HMfxt",
    "zIAwM",
    "submit-order-btn",
    "startsWith",
    "jacket-sizes-container",
    "student-id-section",
    "HQypl",
    "QAGYu",
    "หัวเข็มขัด:\x20",
    "CNAHQ",
    "totalAmount",
    "hiCrD",
    "เสื้อแจ็คเก็ต:\x20",
    "src",
    "wbcQR",
    "slipUrl",
    "trackingCode",
    "57592LxYZNo",
    "1463536ZEqFdF",
    "LBNpd",
    "click",
    "MOMcp",
    "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "ยืนยันคำสั่งซื้อของคุณ\x20-\x20",
    "qUkRo",
    "long",
    "bg-info",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20",
    "<i\x20class=\x22fas\x20fa-check-circle\x20me-2\x22></i>\x20สั่งซื้อสินค้า",
    "wasSf",
    "กรุณาเลือกแพ็คเกจ",
    "xbeOt",
    "jersey",
    "OErQU",
    "RAaff",
    "loading-message",
    "jBJbv",
    "rDtxn",
    "none",
    "เบอร์โทร:\x20",
    ".package-card",
    "WwyMI",
    "DpAYK",
    "checkout-section",
    "yrXbh",
    "mPhzl",
    "polo",
    "POST",
    "type",
    "BRJaG",
    "jpfDz",
    "ชื่อ-นามสกุล:\x20",
    "XSacU",
    "eyvZj",
    "final-summary",
    "ตกลง",
    "kLZdQ",
    "กรุณากรอกรหัสนักศึกษา",
    "giIxT",
    "hidden.bs.modal",
    "Image\x20upload\x20failed",
    "selected",
    "values",
    "MkqrX",
    ".delivery-option",
    "เสื้อ\x20JERSEY:\x20",
    "includes",
    "slip",
    "font-size:\x201.7em;\x20font-weight:\x20bold;\x20color:\x20#0d6efd;",
    "yRcgk",
    "เสื้อโปโล",
    "bg-danger",
    "\x20ชิ้น</span></div>",
    "shopping-section",
    "hfDUz",
    "trim",
    "sDYbF",
    "เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ\x20กรุณาลองใหม่อีกครั้ง:\x20",
    "fRkDY",
    "DROkY",
    "MGMPu",
    "hBjFi",
    "เกิดข้อผิดพลาดในการอ่านไฟล์สลิป",
    "kgBAi",
    "length",
    "ยอดรวม:\x20",
    "irayO",
    "KzAnK",
    "tie",
    "&gt;",
    "jacket-size-section",
    "AVdYN",
    "belt-select",
    "Hivnz",
    "Error\x20uploading\x20slip\x20via\x20server:",
    "querySelectorAll",
    "<pre\x20style=\x22text-align:\x20left;\x22>",
    "size-btn",
    "getTime",
    "GZKxv",
    "GipnR",
    "card\x20bg-light\x20mb-3\x20p-3",
    "QyWgQ",
    "style",
    "year",
    "GNPox",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>อีเมล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "YIuZV",
    "ACwnU",
    "vGmbk",
    "หมายเลขอ้างอิง:\x20",
    "price",
    "push",
    "input[type=\x22text\x22],\x20input[type=\x22email\x22],\x20input[type=\x22tel\x22],\x20textarea",
    "AsPSl",
    "ZDswl",
    "จัดส่งทางไปรษณีย์",
    "QNjAn",
    "</span>",
    "Modal",
    "RiyGC",
    "ซื้อแยกชิ้น",
    "วิธีรับสินค้า:\x20",
    "customer-form",
    "data-size",
    "tnIiQ",
    "tie_clip",
    "HYTBD",
    "NDzQM",
    "toLocaleString",
    "กำลังตรวจสอบข้อมูล...",
    "SxNhZ",
    "หัวเข็มขัด",
    "href",
    "hpXaP",
    "jEiDt",
    "NKQMt",
    "[data-package=\x22",
    "eiMfs",
    "hHzPj",
    "จำนวน:\x20",
    "data-index",
    "tMwsf",
    "HbIwI",
    "bXzHB",
    "packageName",
    "1064942OENyBK",
    "lbqks",
    "bxhVA",
    "ยืนยันสั่งซื้อ",
    "WgkPi",
    "MaMFf",
    "\x20ชิ้น\x0a",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#e3f2fd;\x20padding:\x2015px;\x20border-radius:\x208px;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#1976d2;\x20font-size:\x2018px;\x22>ยอดรวม:\x20",
    "sizes",
    "lastname",
    "shipping",
    "getContext",
    "fileUrl",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>จำนวน:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "#product-btn\x20button:nth-child(2)",
    "SrnCP",
    "hgJxw",
    "&#039;",
    "xztRh",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding-top:\x2020px;\x20border-top:\x201px\x20solid\x20#eee;\x20color:\x20#666;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22>หากมีข้อสงสัยใดๆ\x20กรุณาติดต่อเรา</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x205px\x200\x200\x200;\x20font-size:\x2014px;\x22>ขอบคุณที่ใช้บริการ</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>",
    "กรุณาเลือกคณะ",
    "PYemn",
    "keys",
    "toString",
    "เกินจำนวนเสื้อที่กำหนด",
    "MQRMc",
    "loyMa",
    "Litvk",
    "address-section",
    "valid",
    "ccDcv",
    "nJPTg",
    "Ivssi",
    "stringify",
    "กรุณาเลือกสินค้าอย่างน้อย\x201\x20ชิ้น",
    "xbNsd",
    "VPiNV",
    "individual",
    "กรุณาเลือกไซส์เสื้อโปโลให้ครบทุกตัว",
    "fkjwg",
    "fpUEz",
    "กรุณาเลือกไฟล์รูปภาพเท่านั้น",
    "cSdUV",
    "WmxNh",
    "orderRef",
    "readAsDataURL",
    "phone",
    "rKaRI",
    "haCzq",
    "nVuIn",
    "hxGgZ",
    "marginBottom",
    "items",
    "textContent",
    "nJjzO",
    "MAXNR",
    "lsTcj",
    "wvQtK",
    "sZwSp",
    "Hvafa",
    "success",
    "Nfovf",
    "uZKBH",
    "btn-primary",
    "round",
    "btn-outline-primary",
    "WciDq",
    "Carousel",
    "NoXez",
    "isConfirmed",
    "value",
    "cGmQq",
    "notes",
    "major",
    "taKAb",
    "spinner-style",
    "cIBmE",
    "dFoLM",
    "input[name=\x22package\x22][value=\x22individual\x22]",
    "ASROz",
    "BYjCu",
    "Error\x20reading\x20slip\x20file.",
    "lPTnK",
    "QxxRm",
    "2|0|1|4|3",
    "[data-delivery=\x22",
    "FVTVF",
    "VdLzB",
    "announcementCarousel",
    "WVxkl",
    "EnsEA",
    "Unknown\x20error\x20occurred",
    "numeric",
    "onerror",
    "usLuY",
    "กรุณากรอกอีเมล",
    "textarea",
    "jacket",
    "scIwF",
    "scrollIntoView",
    "BDdMy",
    "เกินจำนวนสินค้าที่กำหนด",
    "gmail.com",
    "xNrnq",
    "PzYKR",
    "-\x20ตัวที่\x20",
    "cDUaU",
    "add",
    "toGre",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ffffff50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20",
    "ตุ้งติ้ง:\x20",
    "กรุณาเลือกรูปภาพสลิปการโอนเงิน",
    "JpGVH",
    "agzuA",
    "then",
    "1751148uDHiUG",
    "innerHTML",
    "FgbOd",
    "Database\x20submission\x20failed",
    "eDlri",
    "\x20บาท",
    "VPIQu",
    "now",
    "GiDFe",
    "pzTCc",
    "odYhn",
    "RbvUu",
    "RrRvk",
    "BkHVM",
    "individual-items-selection",
    "#carouselIndividual",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "slip-error",
    "HTTP\x20status\x20",
    "jacket-select",
    "Uwhqd",
    "รวมทั้งหมด:\x20",
    "กำลังส่งข้อมูลคำสั่งซื้อ...",
    "hotmail.com",
    "เสื้อแจ็คเก็ต",
    "PRJJk",
    "getItem",
    "40060KkeJdA",
    "getElementById",
    "pqtai",
    "replace",
    "5|0|3|1|2|4",
    "ที่หนีบเนคไท:\x20",
    "wdODx",
    "osxiw",
    "กรุณาเลือกไซส์เสื้อ\x20JERSEY\x20ให้ครบทุกตัว",
    "kku.ac.th",
    "key",
    "\x20แพ็คเก็จ</span></div>",
    "all",
    "classList",
    "Ovsyu",
    "addEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "3XL",
    "quantity",
    "เกินจำนวนที่กำหนด",
    "-error",
    "vvokb",
    "SUHCV",
    "กรุณากรอกนามสกุล",
    "qEpqa",
    "srhot",
    "gxoYE",
    "CDuZE",
    "uJNPQ",
    "shirt-count",
    "getAttribute",
    "/shop",
    "success-section",
    "AXSlJ",
    "dontShowAgain",
    "Jnpqt",
    "2|1|0|3|5|4",
    "เสื้อ\x20JERSEY",
    "xGDgu",
    "uGhHt",
    "zLusu",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>แพ็คเก็จ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
  ];
  a0_0x5e02 = function () {
    return _0xb421bc;
  };
  return a0_0x5e02();
}
function validateForm() {
  const _0x5908d3 = a0_0x367d28,
    _0xcdcd27 = {
      RIauK: "email",
      xGDgu: function (_0x5cd917, _0x2e21f4) {
        return _0x5cd917(_0x2e21f4);
      },
      qimhe: _0x5908d3(0x8a),
      ElUTd: "กรุณากรอกชื่อ",
      BkHVM: "ชื่อต้องมีอย่างน้อย\x202\x20ตัวอักษร",
      uGhHt: _0x5908d3(0x1ac),
      WWLeh: _0x5908d3(0x248),
      CcZBx: _0x5908d3(0xf8),
      MQRMc: _0x5908d3(0x87),
      AVdYN: function (_0x4c3229, _0x32298d) {
        return _0x4c3229 === _0x32298d;
      },
      zwAaw: function (_0x43cc9a, _0x32a2f7) {
        return _0x43cc9a < _0x32a2f7;
      },
      trdEP: _0x5908d3(0xf0),
      ZDswl: _0x5908d3(0x154),
      EnsEA: _0x5908d3(0x83),
      YUByt: _0x5908d3(0xf9),
      taKAb: _0x5908d3(0x79),
      VoKXX: _0x5908d3(0x1ec),
      xyzbe: "กรุณาเลือกสาขา",
      QNjAn: _0x5908d3(0x27a),
      yrXbh: _0x5908d3(0xa6),
      xCTJN: _0x5908d3(0x1b7),
      iWHgc: _0x5908d3(0x28d),
      xPJry: _0x5908d3(0x1d1),
      ASROz: _0x5908d3(0x2e6),
      sxUzR: _0x5908d3(0x27f),
      srhot: function (_0x2410c4, _0x528a4f) {
        return _0x2410c4 === _0x528a4f;
      },
      XiUEY: _0x5908d3(0xdb),
      QrnoK: "warning",
      oKdrV: "#3085d6",
      KBhrn: _0x5908d3(0x148),
      SrnCP: _0x5908d3(0x260),
      SFWNF: _0x5908d3(0x2e8),
    };
  let _0x2d94c3 = !![];
  const _0x867953 = {},
    _0x43730f = document["getElementById"](_0xcdcd27[_0x5908d3(0xf2)])[
      _0x5908d3(0x1e9)
    ][_0x5908d3(0x15c)]();
  if (!_0x43730f)
    (_0x867953[_0x5908d3(0x8e)] = _0x5908d3(0x202)), (_0x2d94c3 = ![]);
  else {
    const _0x2f501f = _0xcdcd27[_0x5908d3(0x257)](validateEmail, _0x43730f);
    !_0x2f501f[_0x5908d3(0x1c0)] &&
      ((_0x867953[_0x5908d3(0x8e)] = _0x2f501f[_0x5908d3(0x283)]),
      (_0x2d94c3 = ![]));
  }
  const _0x31f24e = document[_0x5908d3(0x232)](_0xcdcd27[_0x5908d3(0x10e)])[
    _0x5908d3(0x1e9)
  ][_0x5908d3(0x15c)]();
  if (!_0x31f24e)
    (_0x867953[_0x5908d3(0x8a)] = _0xcdcd27["ElUTd"]), (_0x2d94c3 = ![]);
  else
    !patterns[_0x5908d3(0xe8)][_0x5908d3(0xa5)](_0x31f24e) &&
      ((_0x867953[_0x5908d3(0x8a)] = _0xcdcd27[_0x5908d3(0x223)]),
      (_0x2d94c3 = ![]));
  const _0x10f87e = document["getElementById"](_0xcdcd27[_0x5908d3(0x258)])[
    _0x5908d3(0x1e9)
  ][_0x5908d3(0x15c)]();
  if (!_0x10f87e)
    (_0x867953["lastname"] = _0xcdcd27[_0x5908d3(0x78)]), (_0x2d94c3 = ![]);
  else
    !patterns[_0x5908d3(0xe8)]["test"](_0x10f87e) &&
      ((_0x867953[_0x5908d3(0x1ac)] = _0xcdcd27["CcZBx"]), (_0x2d94c3 = ![]));
  const _0x35196f =
    document[_0x5908d3(0x232)]("phone")[_0x5908d3(0x1e9)][_0x5908d3(0x15c)]();
  if (!_0x35196f)
    (_0x867953[_0x5908d3(0x1d1)] = _0x5908d3(0x2aa)), (_0x2d94c3 = ![]);
  else
    !patterns[_0x5908d3(0x1d1)][_0x5908d3(0xa5)](_0x35196f) &&
      ((_0x867953[_0x5908d3(0x1d1)] = _0xcdcd27[_0x5908d3(0x1bc)]),
      (_0x2d94c3 = ![]));
  if (_0xcdcd27["AVdYN"](deliveryType, _0x5908d3(0x1ad))) {
    const _0x3927cd =
      document[_0x5908d3(0x232)]("address")["value"][_0x5908d3(0x15c)]();
    if (!_0x3927cd)
      (_0x867953[_0x5908d3(0x2e6)] = _0x5908d3(0xf4)), (_0x2d94c3 = ![]);
    else
      _0xcdcd27["zwAaw"](_0x3927cd[_0x5908d3(0x165)], 0x14) &&
        ((_0x867953["address"] = _0xcdcd27[_0x5908d3(0xba)]),
        (_0x2d94c3 = ![]));
  }
  const _0x50ebea = document[_0x5908d3(0x232)](_0xcdcd27[_0x5908d3(0x184)])[
    _0x5908d3(0x2e5)
  ][0x0];
  !_0x50ebea &&
    ((_0x867953[_0x5908d3(0x154)] = _0xcdcd27[_0x5908d3(0x1fd)]),
    (_0x2d94c3 = ![]));
  const _0x57eb6f = document[_0x5908d3(0x232)](_0xcdcd27[_0x5908d3(0xae)])[
    _0x5908d3(0x1e9)
  ];
  if (
    _0xcdcd27[_0x5908d3(0x16c)](_0x57eb6f, _0xcdcd27[_0x5908d3(0x1ed)]) ||
    _0xcdcd27[_0x5908d3(0x16c)](_0x57eb6f, "student-out")
  ) {
    const _0x300aa0 = document["getElementById"](_0xcdcd27[_0x5908d3(0x9c)])[
      _0x5908d3(0x1e9)
    ];
    _0xcdcd27[_0x5908d3(0x16c)](_0x57eb6f, _0xcdcd27[_0x5908d3(0x1ed)]) &&
      !_0x300aa0 &&
      ((_0x867953["major"] = _0xcdcd27["xyzbe"]), (_0x2d94c3 = ![]));
    const _0x20ce0a = document["getElementById"](_0xcdcd27[_0x5908d3(0x186)])[
      _0x5908d3(0x1e9)
    ];
    _0x57eb6f === _0xcdcd27[_0x5908d3(0x13d)] &&
      !_0x20ce0a &&
      ((_0x867953[_0x5908d3(0x27a)] = _0xcdcd27["xCTJN"]), (_0x2d94c3 = ![]));
    const _0x5aebf0 = document[_0x5908d3(0x232)](_0xcdcd27["iWHgc"])[
      _0x5908d3(0x1e9)
    ][_0x5908d3(0x15c)]();
    !_0x5aebf0 &&
      ((_0x867953[_0x5908d3(0x27f)] = _0x5908d3(0x14a)), (_0x2d94c3 = ![]));
  }
  return (
    Object[_0x5908d3(0x1b9)](_0x867953)[_0x5908d3(0xa4)]((_0x952cb5) => {
      const _0x5ee4c6 = _0x5908d3,
        _0x36c51d = document[_0x5ee4c6(0x232)](_0x952cb5 + "-error");
      _0x36c51d && (_0x36c51d[_0x5ee4c6(0x1d8)] = _0x867953[_0x952cb5]);
    }),
    [
      _0xcdcd27[_0x5908d3(0xf2)],
      _0x5908d3(0x8a),
      _0xcdcd27[_0x5908d3(0x258)],
      _0xcdcd27[_0x5908d3(0x106)],
      _0xcdcd27[_0x5908d3(0x1f2)],
      _0xcdcd27[_0x5908d3(0x184)],
      _0xcdcd27[_0x5908d3(0x9c)],
      _0xcdcd27[_0x5908d3(0x2d6)],
    ][_0x5908d3(0xa4)]((_0x3412e7) => {
      const _0x33eeb8 = _0x5908d3;
      if (!_0x867953[_0x3412e7]) {
        const _0x12aa74 = document["getElementById"](
          _0x3412e7 + _0x33eeb8(0x245)
        );
        _0x12aa74 && (_0x12aa74["textContent"] = "");
      }
    }),
    !_0x2d94c3 &&
      (_0xcdcd27[_0x5908d3(0x24a)](
        Object[_0x5908d3(0x1b9)](_0x867953)[_0x5908d3(0x165)],
        0x1
      ) && _0x867953[_0x5908d3(0x8e)]
        ? (Swal[_0x5908d3(0x70)]({
            title: _0xcdcd27[_0x5908d3(0x2a7)],
            text: _0x867953["email"],
            icon: _0xcdcd27[_0x5908d3(0x295)],
            showCancelButton: ![],
            confirmButtonColor: _0xcdcd27[_0x5908d3(0x287)],
            confirmButtonText: _0xcdcd27[_0x5908d3(0xd6)],
          }),
          document["getElementById"](_0xcdcd27["RIauK"])["focus"]())
        : (Swal[_0x5908d3(0x70)]({
            title: _0x5908d3(0xbc),
            text: _0xcdcd27[_0x5908d3(0x1b2)],
            icon: _0xcdcd27[_0x5908d3(0x295)],
            showCancelButton: ![],
            confirmButtonColor: "#3085d6",
            confirmButtonText: _0x5908d3(0x148),
          }),
          window[_0x5908d3(0x2a2)]({
            top: 0x0,
            behavior: _0xcdcd27["SFWNF"],
          }))),
    _0x2d94c3
  );
}
function a0_0x5651(_0x568c3b, _0x229643) {
  const _0x5e02c3 = a0_0x5e02();
  return (
    (a0_0x5651 = function (_0x5651b7, _0x4ad052) {
      _0x5651b7 = _0x5651b7 - 0x6d;
      let _0x173538 = _0x5e02c3[_0x5651b7];
      return _0x173538;
    }),
    a0_0x5651(_0x568c3b, _0x229643)
  );
}
function proceedToCheckout() {
  const _0x34fa1b = a0_0x367d28,
    _0x102833 = {
      gxoYE: _0x34fa1b(0x18c),
      gjBXy: _0x34fa1b(0x2e8),
      vGmbk: function (_0x31789f, _0x9c108c) {
        return _0x31789f(_0x9c108c);
      },
      LWxwX: function (_0xcaa8e5, _0x2a9459) {
        return _0xcaa8e5 === _0x2a9459;
      },
      vvokb: function (_0x479110, _0x5d2323) {
        return _0x479110(_0x5d2323);
      },
      NKQMt: _0x34fa1b(0x1c5),
      nJPTg: function (_0x3a9d75, _0x18e447) {
        return _0x3a9d75 > _0x18e447;
      },
      wyLOM: _0x34fa1b(0x2b4),
      NYszr: _0x34fa1b(0x244),
      BnnOS: _0x34fa1b(0x127),
      pqtai: _0x34fa1b(0x148),
      PlxdK: _0x34fa1b(0x94),
      GyMvR: _0x34fa1b(0x239),
      GiDFe: "เสื้อโปโล",
      qkdRz: _0x34fa1b(0xd0),
      Humwk: _0x34fa1b(0x15a),
      PDPxc: _0x34fa1b(0x8b),
      AJcAx: _0x34fa1b(0x137),
      nJjzO: _0x34fa1b(0x13c),
      kZXRr: "block",
    };
  document[_0x34fa1b(0x232)](_0x102833[_0x34fa1b(0x24b)])[_0x34fa1b(0x206)]({
    behavior: _0x34fa1b(0x2e8),
  }),
    window[_0x34fa1b(0x2a2)]({
      top: 0x0,
      behavior: _0x102833[_0x34fa1b(0x286)],
    });
  if (!selectedPackage) {
    _0x102833[_0x34fa1b(0x17e)](alert, _0x34fa1b(0x12f));
    return;
  }
  if (_0x102833[_0x34fa1b(0x110)](selectedPackage, _0x34fa1b(0x1c8))) {
    const _0x3b4d7e = Object[_0x34fa1b(0x14f)](individualItems)["some"](
      (_0x58d945) => _0x58d945[_0x34fa1b(0x243)] > 0x0
    );
    if (!_0x3b4d7e) {
      _0x102833[_0x34fa1b(0x246)](alert, _0x102833[_0x34fa1b(0x199)]);
      return;
    }
    const _0x2633a5 = Object[_0x34fa1b(0x14f)](individualItems)[
      _0x34fa1b(0x280)
    ]((_0x161fe3, _0x117bc2) => _0x161fe3 + _0x117bc2[_0x34fa1b(0x243)], 0x0);
    if (_0x102833[_0x34fa1b(0x1c2)](_0x2633a5, 0x3)) {
      Swal[_0x34fa1b(0x70)]({
        icon: _0x102833[_0x34fa1b(0xfa)],
        title: _0x102833["NYszr"],
        text: _0x102833["BnnOS"],
        confirmButtonText: _0x102833[_0x34fa1b(0x233)],
      });
      return;
    }
    if (_0x102833[_0x34fa1b(0x1c2)](individualItems["polo"]["quantity"], 0x0)) {
      const _0x10cc58 = selectedSizes[_0x34fa1b(0x13f)][_0x34fa1b(0xf3)](
        (_0x553978) => _0x553978 !== null
      );
      if (!_0x10cc58) {
        _0x102833[_0x34fa1b(0x17e)](alert, _0x34fa1b(0x1c9));
        return;
      }
    }
    if (individualItems[_0x34fa1b(0x204)]["quantity"] > 0x0) {
      const _0x28a2ba = selectedSizes[_0x34fa1b(0x204)][_0x34fa1b(0xf3)](
        (_0x29d9ff) => _0x29d9ff !== null
      );
      if (!_0x28a2ba) {
        _0x102833[_0x34fa1b(0x246)](alert, _0x102833[_0x34fa1b(0x2a5)]);
        return;
      }
    }
    if (individualItems[_0x34fa1b(0x131)][_0x34fa1b(0x243)] > 0x0) {
      const _0x33a3cd = selectedSizes["jersey"][_0x34fa1b(0xf3)](
        (_0x112fba) => _0x112fba !== null
      );
      if (!_0x33a3cd) {
        _0x102833["vGmbk"](alert, _0x102833["GyMvR"]);
        return;
      }
    }
  } else {
    const _0x490e09 = packages[selectedPackage]["items"];
    if (
      _0x490e09[_0x34fa1b(0x153)](_0x102833[_0x34fa1b(0x21e)]) &&
      !selectedSizes[_0x34fa1b(0x13f)][0x0]
    ) {
      alert(_0x102833["qkdRz"]);
      return;
    }
    if (
      _0x490e09[_0x34fa1b(0x153)](_0x34fa1b(0x22e)) &&
      !selectedSizes[_0x34fa1b(0x204)][0x0]
    ) {
      _0x102833[_0x34fa1b(0x246)](alert, "กรุณาเลือกไซส์เสื้อแจ็คเก็ต");
      return;
    }
  }
  (document[_0x34fa1b(0x232)](_0x102833[_0x34fa1b(0xa3)])[_0x34fa1b(0x178)][
    _0x34fa1b(0x8d)
  ] = _0x34fa1b(0x137)),
    (document[_0x34fa1b(0x232)](_0x102833["PDPxc"])[_0x34fa1b(0x178)][
      "display"
    ] = _0x102833[_0x34fa1b(0x9f)]),
    (document[_0x34fa1b(0x232)](_0x102833[_0x34fa1b(0x1d9)])[_0x34fa1b(0x178)][
      "display"
    ] = _0x102833[_0x34fa1b(0xf5)]),
    document[_0x34fa1b(0x232)](_0x34fa1b(0x13c))[_0x34fa1b(0x2a2)]({
      behavior: _0x102833[_0x34fa1b(0x286)],
    });
}
function updateFinalSummary() {
  const _0x3f803f = a0_0x367d28,
    _0x4dca2e = {
      fjKzH: _0x3f803f(0x147),
      GgvFU: "block",
      CepCF: "15px",
      agzuA: _0x3f803f(0x6f),
      ybFwa: function (_0x6c3e13, _0x192705) {
        return _0x6c3e13 === _0x192705;
      },
      kjdOV: _0x3f803f(0x1c8),
      WwyMI: function (_0x33d59f, _0xe86ac2) {
        return _0x33d59f > _0xe86ac2;
      },
      LFHIo: _0x3f803f(0x26e),
      gZFuZ: function (_0x104ef8, _0x31a4c5) {
        return _0x104ef8 < _0x31a4c5;
      },
      uJNPQ: function (_0x46d52c, _0x562854) {
        return _0x46d52c + _0x562854;
      },
      PYemn: function (_0x284be0, _0x3de288) {
        return _0x284be0 + _0x3de288;
      },
      MkqrX: function (_0x495a88, _0x5802db) {
        return _0x495a88 === _0x5802db;
      },
      obzbp: "รับที่วิทยาลัย",
      BUfPQ: function (_0x339af5, _0x227212) {
        return _0x339af5 === _0x227212;
      },
      nVuIn: _0x3f803f(0x1ad),
      KPUMo: _0x3f803f(0xcf),
      GipnR: _0x3f803f(0x155),
    },
    _0x29081e = document[_0x3f803f(0x232)](_0x4dca2e[_0x3f803f(0x2c5)]);
  let _0x1f4e94 = totalAmount;
  deliveryType &&
    (document[_0x3f803f(0x232)](_0x3f803f(0x18c))["style"][_0x3f803f(0x8d)] =
      _0x4dca2e[_0x3f803f(0x2c8)]);
  deliveryType === _0x3f803f(0x1ad) && (_0x1f4e94 += 0x32);
  _0x29081e["innerHTML"] = "";
  const _0x49ebe4 = packages[selectedPackage],
    _0x6a02a6 = document["createElement"](_0x3f803f(0x26e));
  _0x6a02a6[_0x3f803f(0x178)][_0x3f803f(0x1d6)] = _0x4dca2e["CepCF"];
  const _0x2a42c4 = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x214)]);
  (_0x2a42c4[_0x3f803f(0x1d8)] = _0x49ebe4["name"]),
    _0x6a02a6[_0x3f803f(0xea)](_0x2a42c4),
    _0x6a02a6[_0x3f803f(0xea)](document[_0x3f803f(0x29c)]("br"));
  if (
    _0x4dca2e[_0x3f803f(0xcb)](selectedPackage, _0x4dca2e[_0x3f803f(0x105)])
  ) {
    if (
      _0x4dca2e[_0x3f803f(0x13a)](
        individualItems["polo"][_0x3f803f(0x243)],
        0x0
      )
    ) {
      const _0x4fc07b = document["createElement"](_0x4dca2e[_0x3f803f(0x25c)]);
      (_0x4fc07b[_0x3f803f(0x1d8)] =
        "เสื้อโปโล:\x20" +
        individualItems[_0x3f803f(0x13f)][_0x3f803f(0x243)] +
        _0x3f803f(0x25b)),
        _0x6a02a6[_0x3f803f(0xea)](_0x4fc07b);
      for (
        let _0x30e37c = 0x0;
        _0x4dca2e["gZFuZ"](_0x30e37c, individualItems["polo"]["quantity"]);
        _0x30e37c++
      ) {
        const _0x262d92 = document[_0x3f803f(0x29c)](_0x4dca2e["LFHIo"]);
        (_0x262d92["textContent"] =
          "\x20\x20\x20-\x20ตัวที่\x20" +
          _0x4dca2e[_0x3f803f(0x24d)](_0x30e37c, 0x1) +
          ":\x20ไซส์\x20" +
          selectedSizes[_0x3f803f(0x13f)][_0x30e37c]),
          _0x6a02a6["appendChild"](_0x262d92);
      }
    }
    if (
      _0x4dca2e[_0x3f803f(0x13a)](
        individualItems[_0x3f803f(0x204)][_0x3f803f(0x243)],
        0x0
      )
    ) {
      const _0x17aea1 = document[_0x3f803f(0x29c)](_0x4dca2e["LFHIo"]);
      (_0x17aea1[_0x3f803f(0x1d8)] =
        "เสื้อแจ็คเก็ต:\x20" +
        individualItems[_0x3f803f(0x204)][_0x3f803f(0x243)] +
        _0x3f803f(0x25b)),
        _0x6a02a6[_0x3f803f(0xea)](_0x17aea1);
      for (
        let _0x5f1299 = 0x0;
        _0x4dca2e["gZFuZ"](
          _0x5f1299,
          individualItems[_0x3f803f(0x204)][_0x3f803f(0x243)]
        );
        _0x5f1299++
      ) {
        const _0xdbc888 = document[_0x3f803f(0x29c)](
          _0x4dca2e[_0x3f803f(0x25c)]
        );
        (_0xdbc888["textContent"] =
          _0x3f803f(0x2ca) +
          _0x4dca2e[_0x3f803f(0x1b8)](_0x5f1299, 0x1) +
          _0x3f803f(0x92) +
          selectedSizes["jacket"][_0x5f1299]),
          _0x6a02a6[_0x3f803f(0xea)](_0xdbc888);
      }
    }
    if (
      _0x4dca2e[_0x3f803f(0x13a)](
        individualItems[_0x3f803f(0xfd)][_0x3f803f(0x243)],
        0x0
      )
    ) {
      const _0x300f76 = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x25c)]);
      (_0x300f76[_0x3f803f(0x1d8)] =
        _0x3f803f(0x119) +
        individualItems["belt"][_0x3f803f(0x243)] +
        _0x3f803f(0x25b)),
        _0x6a02a6["appendChild"](_0x300f76);
    }
    if (
      _0x4dca2e[_0x3f803f(0x13a)](
        individualItems[_0x3f803f(0x84)]["quantity"],
        0x0
      )
    ) {
      const _0x3897a1 = document["createElement"](_0x4dca2e[_0x3f803f(0x25c)]);
      (_0x3897a1["textContent"] =
        _0x3f803f(0x211) +
        individualItems["tung"][_0x3f803f(0x243)] +
        "\x20ชิ้น"),
        _0x6a02a6["appendChild"](_0x3897a1);
    }
    if (
      _0x4dca2e[_0x3f803f(0x13a)](
        individualItems[_0x3f803f(0x169)]["quantity"],
        0x0
      )
    ) {
      const _0x55d9b1 = document[_0x3f803f(0x29c)](_0x4dca2e["LFHIo"]);
      (_0x55d9b1[_0x3f803f(0x1d8)] =
        _0x3f803f(0x236) +
        individualItems["tie"]["quantity"] +
        _0x3f803f(0x25b)),
        _0x6a02a6[_0x3f803f(0xea)](_0x55d9b1);
    }
  } else {
    const _0x3b6a3a = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x25c)]);
    (_0x3b6a3a[_0x3f803f(0x1d8)] = _0x3f803f(0x19d) + quantity + "\x20แพ็คเกจ"),
      _0x6a02a6[_0x3f803f(0xea)](_0x3b6a3a);
    if (selectedSizes[_0x3f803f(0x13f)][0x0]) {
      const _0x26d46c = document[_0x3f803f(0x29c)](_0x3f803f(0x26e));
      (_0x26d46c[_0x3f803f(0x1d8)] =
        _0x3f803f(0x6d) + selectedSizes["polo"][0x0]),
        _0x6a02a6[_0x3f803f(0xea)](_0x26d46c);
    }
    if (selectedSizes[_0x3f803f(0x204)][0x0]) {
      const _0x14e1e9 = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x25c)]);
      (_0x14e1e9[_0x3f803f(0x1d8)] =
        "ไซส์เสื้อแจ็คเก็ต:\x20" + selectedSizes[_0x3f803f(0x204)][0x0]),
        _0x6a02a6["appendChild"](_0x14e1e9);
    }
  }
  _0x29081e[_0x3f803f(0xea)](_0x6a02a6);
  if (deliveryType) {
    const _0x32e2a5 = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x25c)]);
    (_0x32e2a5["style"][_0x3f803f(0x1d6)] = _0x3f803f(0xee)),
      (_0x32e2a5["textContent"] =
        _0x3f803f(0x18b) +
        (_0x4dca2e[_0x3f803f(0x150)](deliveryType, _0x3f803f(0x2d3))
          ? _0x4dca2e["obzbp"]
          : _0x3f803f(0x185))),
      _0x29081e[_0x3f803f(0xea)](_0x32e2a5);
    if (_0x4dca2e["BUfPQ"](deliveryType, _0x4dca2e[_0x3f803f(0x1d4)])) {
      const _0x59351f = document[_0x3f803f(0x29c)](_0x3f803f(0x26e));
      (_0x59351f[_0x3f803f(0x1d8)] = _0x3f803f(0x2d2)),
        _0x29081e[_0x3f803f(0xea)](_0x59351f);
    }
  }
  const _0x598bb8 = document[_0x3f803f(0x29c)](_0x4dca2e[_0x3f803f(0x25c)]);
  (_0x598bb8[_0x3f803f(0x268)] = _0x4dca2e["KPUMo"]),
    (_0x598bb8[_0x3f803f(0x178)][_0x3f803f(0x292)] =
      _0x4dca2e[_0x3f803f(0x175)]),
    (_0x598bb8[_0x3f803f(0x1d8)] =
      "รวมทั้งสิ้น:\x20" + _0x1f4e94[_0x3f803f(0x192)]() + "\x20บาท"),
    _0x29081e["appendChild"](_0x598bb8);
}
function generateEmailHTML(_0x500654) {
  const _0x2a74f2 = a0_0x367d28,
    _0x3f79cf = {
      MaMFf: function (_0x5f5b34, _0x698259) {
        return _0x5f5b34(_0x698259);
      },
      VdCjC: function (_0x2be150, _0x562877) {
        return _0x2be150 === _0x562877;
      },
      MUZYy: "individual",
      fUKlu: function (_0x25c019, _0x26280c) {
        return _0x25c019 < _0x26280c;
      },
      ZhUJs: function (_0x1d2c0d, _0x376f2a) {
        return _0x1d2c0d + _0x376f2a;
      },
      Hivnz: function (_0x2168e, _0x3143da) {
        return _0x2168e(_0x3143da);
      },
      rypmh: function (_0x36c326, _0x4f8a55) {
        return _0x36c326 + _0x4f8a55;
      },
      TdlZi: function (_0x108520, _0x25042a) {
        return _0x108520 > _0x25042a;
      },
      nLycr: function (_0x57dbc1, _0x401cc7) {
        return _0x57dbc1(_0x401cc7);
      },
      PRJJk: function (_0x5f258a, _0xeec371) {
        return _0x5f258a > _0xeec371;
      },
      cIBmE: function (_0x5ad153, _0x1b3bbb) {
        return _0x5ad153(_0x1b3bbb);
      },
      WmxNh: _0x2a74f2(0x277),
      WVxkl: _0x2a74f2(0x1ff),
      QyWgQ: "รับที่วิทยาลัย",
    },
    _0x4d3684 = new Date();
  let _0x449a04 =
    _0x2a74f2(0x281) +
    sanitizeText(_0x500654[_0x2a74f2(0x1cf)]) +
    _0x2a74f2(0x25a) +
    _0x3f79cf[_0x2a74f2(0x1a8)](sanitizeText, _0x500654[_0x2a74f2(0x1a2)]) +
    _0x2a74f2(0x289);
  if (_0x3f79cf[_0x2a74f2(0xe2)](selectedPackage, _0x3f79cf[_0x2a74f2(0xfe)])) {
    if (_0x500654[_0x2a74f2(0x1d7)][_0x2a74f2(0x13f)] > 0x0) {
      _0x449a04 +=
        _0x2a74f2(0xaf) +
        _0x500654[_0x2a74f2(0x1d7)]["polo"] +
        _0x2a74f2(0x159);
      for (
        let _0x15dd67 = 0x0;
        _0x3f79cf[_0x2a74f2(0x2e7)](_0x15dd67, _0x500654["items"]["polo"]);
        _0x15dd67++
      ) {
        _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x13f)] &&
          _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x13f)][_0x15dd67] &&
          (_0x449a04 +=
            _0x2a74f2(0x29d) +
            _0x3f79cf["ZhUJs"](_0x15dd67, 0x1) +
            _0x2a74f2(0x92) +
            _0x3f79cf[_0x2a74f2(0x16e)](
              sanitizeText,
              _0x500654["sizes"][_0x2a74f2(0x13f)][_0x15dd67]
            ) +
            _0x2a74f2(0xed));
      }
    }
    if (_0x500654[_0x2a74f2(0x1d7)][_0x2a74f2(0x204)] > 0x0) {
      _0x449a04 +=
        _0x2a74f2(0x226) +
        _0x500654["items"][_0x2a74f2(0x204)] +
        "\x20ชิ้น</span></div>";
      for (
        let _0x499aa0 = 0x0;
        _0x499aa0 < _0x500654[_0x2a74f2(0x1d7)][_0x2a74f2(0x204)];
        _0x499aa0++
      ) {
        _0x500654[_0x2a74f2(0x1ab)]["jacket"] &&
          _0x500654["sizes"][_0x2a74f2(0x204)][_0x499aa0] &&
          (_0x449a04 +=
            _0x2a74f2(0x29d) +
            _0x3f79cf["rypmh"](_0x499aa0, 0x1) +
            ":\x20ไซส์\x20" +
            sanitizeText(_0x500654["sizes"]["jacket"][_0x499aa0]) +
            _0x2a74f2(0xed));
      }
    }
    if (
      _0x3f79cf[_0x2a74f2(0x76)](_0x500654[_0x2a74f2(0x1d7)]["jersey"], 0x0)
    ) {
      _0x449a04 +=
        _0x2a74f2(0xe6) +
        _0x500654[_0x2a74f2(0x1d7)][_0x2a74f2(0x131)] +
        _0x2a74f2(0x159);
      for (
        let _0x4ceeb3 = 0x0;
        _0x3f79cf[_0x2a74f2(0x2e7)](
          _0x4ceeb3,
          _0x500654[_0x2a74f2(0x1d7)][_0x2a74f2(0x131)]
        );
        _0x4ceeb3++
      ) {
        _0x500654[_0x2a74f2(0x1ab)]["jersey"] &&
          _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x131)][_0x4ceeb3] &&
          (_0x449a04 +=
            _0x2a74f2(0x29d) +
            (_0x4ceeb3 + 0x1) +
            _0x2a74f2(0x92) +
            _0x3f79cf["nLycr"](
              sanitizeText,
              _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x131)][_0x4ceeb3]
            ) +
            _0x2a74f2(0xed));
      }
    }
  } else
    (_0x449a04 += _0x2a74f2(0x1b0) + _0x500654["quantity"] + _0x2a74f2(0x23c)),
      _0x500654["sizes"][_0x2a74f2(0x13f)] &&
        _0x3f79cf[_0x2a74f2(0x22f)](
          _0x500654[_0x2a74f2(0x1ab)]["polo"][_0x2a74f2(0x165)],
          0x0
        ) &&
        _0x500654["sizes"][_0x2a74f2(0x13f)][0x0] &&
        (_0x449a04 +=
          _0x2a74f2(0x2ac) +
          sanitizeText(_0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x13f)][0x0]) +
          "</span></div>"),
      _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x204)] &&
        _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x204)][_0x2a74f2(0x165)] > 0x0 &&
        _0x500654["sizes"][_0x2a74f2(0x204)][0x0] &&
        (_0x449a04 +=
          _0x2a74f2(0x27d) +
          _0x3f79cf[_0x2a74f2(0x1ef)](
            sanitizeText,
            _0x500654[_0x2a74f2(0x1ab)][_0x2a74f2(0x204)][0x0]
          ) +
          "</span></div>");
  return (
    (_0x449a04 +=
      _0x2a74f2(0x2db) +
      _0x4d3684[_0x2a74f2(0xef)](_0x3f79cf[_0x2a74f2(0x1ce)], {
        year: _0x3f79cf["WVxkl"],
        month: _0x2a74f2(0x12a),
        day: _0x3f79cf[_0x2a74f2(0x1fc)],
      }) +
      "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>ชื่อ-นามสกุล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
      sanitizeText(_0x500654["firstname"]) +
      "\x20" +
      sanitizeText(_0x500654["lastname"]) +
      _0x2a74f2(0x17b) +
      _0x3f79cf[_0x2a74f2(0x1a8)](sanitizeText, _0x500654["email"]) +
      _0x2a74f2(0x2b5) +
      sanitizeText(_0x500654[_0x2a74f2(0x1d1)]) +
      _0x2a74f2(0x7a) +
      (_0x3f79cf["VdCjC"](_0x500654[_0x2a74f2(0x2ce)], _0x2a74f2(0x2d3))
        ? _0x3f79cf[_0x2a74f2(0x177)]
        : _0x2a74f2(0x185)) +
      _0x2a74f2(0x1aa) +
      _0x500654[_0x2a74f2(0x11b)]["toLocaleString"]() +
      _0x2a74f2(0xde) +
      sanitizeText(_0x500654[_0x2a74f2(0x1eb)]) +
      _0x2a74f2(0x1b6)),
    _0x449a04
  );
}
function sanitizeText(_0x4e6d32) {
  const _0x41590 = a0_0x367d28,
    _0x5116e0 = {
      DEhSw: _0x41590(0xc0),
      eroeS: _0x41590(0x16a),
      uEQbq: _0x41590(0xd8),
      cGmQq: _0x41590(0x1b4),
    };
  if (!_0x4e6d32) return "";
  return _0x4e6d32[_0x41590(0x234)](/</g, _0x5116e0["DEhSw"])
    [_0x41590(0x234)](/>/g, _0x5116e0[_0x41590(0x100)])
    [_0x41590(0x234)](/"/g, _0x5116e0[_0x41590(0x10c)])
    ["replace"](/'/g, _0x5116e0[_0x41590(0x1ea)]);
}
function generateItemsSummary() {
  const _0x3b197e = a0_0x367d28;
  return {
    polo: individualItems[_0x3b197e(0x13f)][_0x3b197e(0x243)],
    jacket: individualItems[_0x3b197e(0x204)][_0x3b197e(0x243)],
    jersey: individualItems[_0x3b197e(0x131)]["quantity"],
    belt: individualItems[_0x3b197e(0xfd)][_0x3b197e(0x243)],
    tung_ting: individualItems["tung"][_0x3b197e(0x243)],
    tie_clip: individualItems[_0x3b197e(0x169)][_0x3b197e(0x243)],
  };
}
async function uploadSlipViaServer(_0xeb3e27, _0x9367b0, _0x31d161) {
  const _0x23b17b = a0_0x367d28,
    _0x4321c3 = {
      hXZfy: _0x23b17b(0x1ac),
      wvQtK: _0x23b17b(0x86),
      MIQmt: function (_0x1e1cc1, _0x377205, _0x2ead4d) {
        return _0x1e1cc1(_0x377205, _0x2ead4d);
      },
      DGwxe: _0x23b17b(0x140),
      fEOgV: _0x23b17b(0x2d9),
      IHgfA: _0x23b17b(0x16f),
      NjNjD: _0x23b17b(0x283),
      RUVLr: _0x23b17b(0x1fe),
    };
  try {
    const _0x55a96b = {
        file: _0x9367b0,
        fileName:
          _0x23b17b(0x75) +
          Date[_0x23b17b(0x21d)]() +
          "_" +
          sanitizeText(
            document[_0x23b17b(0x232)]("firstname")["value"]["trim"]()
          ) +
          "_" +
          sanitizeText(
            document[_0x23b17b(0x232)](_0x4321c3[_0x23b17b(0xfc)])[
              _0x23b17b(0x1e9)
            ][_0x23b17b(0x15c)]()
          ),
        type: _0x4321c3[_0x23b17b(0x1dc)],
        orderRef: _0x31d161,
      },
      _0x4ec6f1 = await _0x4321c3["MIQmt"](fetch, _0x23b17b(0x8f), {
        method: _0x4321c3[_0x23b17b(0xbe)],
        headers: { "Content-Type": _0x4321c3[_0x23b17b(0x27e)] },
        body: JSON["stringify"](_0x55a96b),
      });
    if (!_0x4ec6f1["ok"])
      throw new Error(_0x23b17b(0x228) + _0x4ec6f1[_0x23b17b(0xf9)]);
    const _0x180ab3 = await _0x4ec6f1[_0x23b17b(0x103)]();
    return _0x180ab3;
  } catch (_0x1b5e30) {
    return (
      console[_0x23b17b(0x283)](_0x4321c3[_0x23b17b(0x26b)], _0x1b5e30),
      {
        status: _0x4321c3["NjNjD"],
        message: _0x1b5e30[_0x23b17b(0x2b0)] || _0x4321c3[_0x23b17b(0x2dd)],
      }
    );
  }
}
let originalSubmitButtonHTML = "";
function resetSubmitButtonState() {
  const _0x5a4f18 = a0_0x367d28,
    _0x35eed7 = { gQwmE: _0x5a4f18(0x113) },
    _0x2c8340 = document[_0x5a4f18(0x232)](_0x35eed7[_0x5a4f18(0x2c4)]);
  _0x2c8340 &&
    ((_0x2c8340["disabled"] = ![]),
    originalSubmitButtonHTML
      ? (_0x2c8340[_0x5a4f18(0x217)] = originalSubmitButtonHTML)
      : (_0x2c8340[_0x5a4f18(0x217)] = _0x5a4f18(0x12d)));
}
function compressImage(_0x14514e) {
  const _0xf630a9 = a0_0x367d28,
    _0x541f79 = {
      QAGYu: function (_0x4c588e, _0x74f887) {
        return _0x4c588e / _0x74f887;
      },
      Litvk: function (_0x1d7efe, _0x159cdf) {
        return _0x1d7efe > _0x159cdf;
      },
      jEfda: _0xf630a9(0x86),
    };
  return new Promise((_0x11cd79, _0x1b2b62) => {
    const _0xcbb51c = _0xf630a9,
      _0x1c9bea = new FileReader();
    _0x1c9bea[_0xcbb51c(0x1d0)](_0x14514e),
      (_0x1c9bea["onload"] = function (_0x533dbb) {
        const _0x1c4cf9 = _0xcbb51c,
          _0x1f404d = {
            DpAYK: function (_0x331a17, _0x2b9324) {
              const _0x2aff00 = a0_0x5651;
              return _0x541f79[_0x2aff00(0x118)](_0x331a17, _0x2b9324);
            },
            bXzHB: function (_0x300c2f, _0x5f419b) {
              const _0x494faa = a0_0x5651;
              return _0x541f79[_0x494faa(0x1be)](_0x300c2f, _0x5f419b);
            },
            XzaeO: function (_0x4f9554, _0x4a7f82) {
              const _0x34d34e = a0_0x5651;
              return _0x541f79[_0x34d34e(0x118)](_0x4f9554, _0x4a7f82);
            },
            Xzmqy: _0x1c4cf9(0x265),
            TCgAw: _0x541f79["jEfda"],
          },
          _0x36cb4a = new Image();
        (_0x36cb4a[_0x1c4cf9(0x11e)] = _0x533dbb[_0x1c4cf9(0x2a4)]["result"]),
          (_0x36cb4a[_0x1c4cf9(0x99)] = function () {
            const _0x103f72 = _0x1c4cf9,
              _0x47e503 = 0x200,
              _0x4d77c0 = 0x200;
            let _0x752a66 = _0x36cb4a[_0x103f72(0x2cc)],
              _0x2eca3e = _0x36cb4a[_0x103f72(0x261)];
            _0x752a66 > _0x47e503 &&
              ((_0x2eca3e = Math["round"](
                _0x1f404d[_0x103f72(0x13b)](_0x2eca3e * _0x47e503, _0x752a66)
              )),
              (_0x752a66 = _0x47e503));
            _0x1f404d[_0x103f72(0x1a1)](_0x2eca3e, _0x4d77c0) &&
              ((_0x752a66 = Math[_0x103f72(0x1e3)](
                _0x1f404d[_0x103f72(0x2de)](_0x752a66 * _0x4d77c0, _0x2eca3e)
              )),
              (_0x2eca3e = _0x4d77c0));
            const _0x30e556 = document["createElement"](
              _0x1f404d[_0x103f72(0xb7)]
            );
            (_0x30e556[_0x103f72(0x2cc)] = _0x752a66),
              (_0x30e556["height"] = _0x2eca3e);
            const _0x10bc1c = _0x30e556[_0x103f72(0x1ae)]("2d");
            _0x10bc1c[_0x103f72(0x2b3)](
              _0x36cb4a,
              0x0,
              0x0,
              _0x752a66,
              _0x2eca3e
            );
            const _0x2cd0dd = _0x30e556["toDataURL"](
              _0x1f404d[_0x103f72(0xad)],
              0.5
            );
            _0x11cd79(_0x2cd0dd);
          });
      }),
      (_0x1c9bea[_0xcbb51c(0x200)] = (_0x45bf24) => _0x1b2b62(_0x45bf24));
  });
}
async function submitOrder() {
  const _0x59e027 = a0_0x367d28,
    _0xdbc97b = {
      cSdUV: function (_0x163ec4, _0x44bc77) {
        return _0x163ec4(_0x44bc77);
      },
      Pjqql: _0x59e027(0x2d7),
      WgkPi: function (_0x587bd1, _0x50135c, _0x1dd2f0, _0x516c7d) {
        return _0x587bd1(_0x50135c, _0x1dd2f0, _0x516c7d);
      },
      jEiDt: function (_0x90f23b, _0xef72b0) {
        return _0x90f23b(_0xef72b0);
      },
      TGOAA: _0x59e027(0x22c),
      SCAHr: _0x59e027(0x14d),
      cNUfZ: "Error\x20uploading\x20slip\x20or\x20during\x20process:",
      RkIoC: function (_0xc6c15d) {
        return _0xc6c15d();
      },
      Uwhqd: function (_0x3303a0, _0xca3990) {
        return _0x3303a0 + _0xca3990;
      },
      okwdA: _0x59e027(0xe4),
      OmoDv:
        "\x0a\x0aต้องการดำเนินการส่งคำสั่งซื้อต่อหรือไม่?\x20(คุณสามารถส่งรูปสลิปทาง\x20Email\x20ได้)",
      JUcvp: function (_0x2a8ca3, _0x24b2f2) {
        return _0x2a8ca3(_0x24b2f2);
      },
      hESPq: _0x59e027(0x1f4),
      kWcNu: function (_0x17429d, _0x15c8f1) {
        return _0x17429d(_0x15c8f1);
      },
      JTFvq: _0x59e027(0x163),
      sbgJQ: function (_0x3f2f4b, _0x400b66) {
        return _0x3f2f4b === _0x400b66;
      },
      ACwnU: function (_0x2d88d9, _0xd99500) {
        return _0x2d88d9(_0xd99500);
      },
      ZeQpF: function (_0x553e57, _0x7a73d8) {
        return _0x553e57(_0x7a73d8);
      },
      AepNH: "email",
      cziRa: _0x59e027(0x8a),
      DtyYK: _0x59e027(0x1ac),
      yRcgk: _0x59e027(0x1d1),
      usLuY: _0x59e027(0x179),
      toGre: _0x59e027(0x27a),
      LlqHn: function (_0x2ff317, _0x12e62c) {
        return _0x2ff317(_0x12e62c);
      },
      zLusu: "student-id",
      rKaRI: _0x59e027(0x1ad),
      qEpqa: _0x59e027(0x2e6),
      SxNhZ: function (_0xa0f276, _0x5217ab) {
        return _0xa0f276 + _0x5217ab;
      },
      mKuVn: function (_0x2f5e51) {
        return _0x2f5e51();
      },
      pqfoa: function (_0x4ef172) {
        return _0x4ef172();
      },
      GBwyE: function (_0x255444, _0x19dffc) {
        return _0x255444 === _0x19dffc;
      },
      yTcEa: "individual",
      JmPvr: function (_0x126234, _0x17c2af) {
        return _0x126234 > _0x17c2af;
      },
      giIxT: function (_0x2fc6be, _0x26bdfa) {
        return _0x2fc6be > _0x26bdfa;
      },
      QXUHd: function (_0x38e017, _0x399fd4) {
        return _0x38e017 > _0x399fd4;
      },
      osxiw: function (_0x1b80ad, _0x280f77) {
        return _0x1b80ad > _0x280f77;
      },
      rCdTp: _0x59e027(0xb2),
      UMyiR: _0x59e027(0x185),
      pkAss: "กรุณาตรวจสอบข้อมูล",
      FVCmX: function (_0x66e3fc, _0x4a1a5b) {
        return _0x66e3fc(_0x4a1a5b);
      },
      gXOAM: _0x59e027(0xc1),
      BXMEz: "swal2-popup-custom",
      sZwSp: "slip",
      wbcQR: _0x59e027(0x227),
      EELHW: _0x59e027(0x83),
      gULip:
        "<i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x20me-2\x22></i>\x20กำลังดำเนินการ...",
      omvSy: _0x59e027(0x193),
    },
    _0x1089be = document[_0x59e027(0x232)](_0x59e027(0x113));
  !originalSubmitButtonHTML &&
    (originalSubmitButtonHTML = _0x1089be[_0x59e027(0x217)]);
  if (_0x1089be[_0x59e027(0x299)]) return;
  if (!_0xdbc97b[_0x59e027(0x2e9)](validateForm)) return;
  const _0x253e7f = {
    package: selectedPackage,
    packageName: packages[selectedPackage][_0x59e027(0xe8)],
    quantity: _0xdbc97b[_0x59e027(0xc8)](selectedPackage, "individual")
      ? 0x1
      : quantity,
    sizes: selectedSizes,
    notes: _0xdbc97b[_0x59e027(0x17d)](
      sanitizeText,
      document[_0x59e027(0x232)](_0x59e027(0x1eb))[_0x59e027(0x1e9)][
        _0x59e027(0x15c)
      ]()
    ),
    email: _0xdbc97b[_0x59e027(0x269)](
      sanitizeText,
      document["getElementById"](_0xdbc97b[_0x59e027(0xe0)])[_0x59e027(0x1e9)][
        _0x59e027(0x15c)
      ]()
    ),
    firstname: _0xdbc97b[_0x59e027(0x198)](
      sanitizeText,
      document[_0x59e027(0x232)](_0xdbc97b["cziRa"])[_0x59e027(0x1e9)][
        _0x59e027(0x15c)
      ]()
    ),
    lastname: _0xdbc97b["ZeQpF"](
      sanitizeText,
      document[_0x59e027(0x232)](_0xdbc97b["DtyYK"])["value"][
        _0x59e027(0x15c)
      ]()
    ),
    phone: sanitizeText(
      document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x156)])[_0x59e027(0x1e9)][
        _0x59e027(0x15c)
      ]()
    ),
    status: _0xdbc97b["ACwnU"](
      sanitizeText,
      document[_0x59e027(0x232)](_0x59e027(0xf9))["value"]
    ),
    year: _0xdbc97b["cSdUV"](
      sanitizeText,
      document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x201)])["value"]
    ),
    major: _0xdbc97b[_0x59e027(0x198)](
      sanitizeText,
      document[_0x59e027(0x232)](_0x59e027(0x1ec))["value"]
    ),
    faculty: _0xdbc97b["cSdUV"](
      sanitizeText,
      document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x20f)])["value"]
    ),
    studentId: _0xdbc97b[_0x59e027(0x2ea)](
      sanitizeText,
      document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x259)])[_0x59e027(0x1e9)][
        _0x59e027(0x15c)
      ]()
    ),
    address: _0xdbc97b["sbgJQ"](deliveryType, _0xdbc97b["rKaRI"])
      ? _0xdbc97b[_0x59e027(0x17d)](
          sanitizeText,
          document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x249)])[
            _0x59e027(0x1e9)
          ][_0x59e027(0x15c)]()
        )
      : "",
    deliveryType: deliveryType,
    totalAmount: _0xdbc97b[_0x59e027(0xc8)](
      deliveryType,
      _0xdbc97b[_0x59e027(0x1d2)]
    )
      ? _0xdbc97b[_0x59e027(0x194)](totalAmount, 0x32)
      : totalAmount,
    items: _0xdbc97b["mKuVn"](generateItemsSummary),
    orderRef: _0xdbc97b["pqfoa"](generateOrderRef),
  };
  let _0xb8ae43 = _0x59e027(0xa0) + _0x253e7f["packageName"] + "\x0a";
  if (_0xdbc97b[_0x59e027(0x294)](selectedPackage, _0xdbc97b["yTcEa"])) {
    const _0x420272 = _0x59e027(0x255)[_0x59e027(0xbd)]("|");
    let _0x56a32c = 0x0;
    while (!![]) {
      switch (_0x420272[_0x56a32c++]) {
        case "0":
          if (
            _0xdbc97b[_0x59e027(0xe5)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x131)],
              0x0
            )
          )
            _0xb8ae43 +=
              _0x59e027(0x152) +
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x131)] +
              _0x59e027(0x1a9);
          continue;
        case "1":
          if (
            _0xdbc97b[_0x59e027(0x14b)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x204)],
              0x0
            )
          )
            _0xb8ae43 +=
              _0x59e027(0x11d) +
              _0x253e7f["items"][_0x59e027(0x204)] +
              _0x59e027(0x1a9);
          continue;
        case "2":
          if (
            _0xdbc97b[_0x59e027(0x270)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x13f)],
              0x0
            )
          )
            _0xb8ae43 +=
              _0x59e027(0xff) +
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x13f)] +
              _0x59e027(0x1a9);
          continue;
        case "3":
          if (
            _0xdbc97b[_0x59e027(0x270)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0xfd)],
              0x0
            )
          )
            _0xb8ae43 +=
              _0x59e027(0x119) +
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0xfd)] +
              _0x59e027(0x1a9);
          continue;
        case "4":
          if (
            _0xdbc97b[_0x59e027(0x238)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x18f)],
              0x0
            )
          )
            _0xb8ae43 +=
              "ที่หนีบเนคไท:\x20" +
              _0x253e7f[_0x59e027(0x1d7)]["tie_clip"] +
              _0x59e027(0x1a9);
          continue;
        case "5":
          if (
            _0xdbc97b[_0x59e027(0x238)](
              _0x253e7f[_0x59e027(0x1d7)][_0x59e027(0x2bd)],
              0x0
            )
          )
            _0xb8ae43 +=
              _0x59e027(0x211) +
              _0x253e7f[_0x59e027(0x1d7)]["tung_ting"] +
              _0x59e027(0x1a9);
          continue;
      }
      break;
    }
  }
  (_0xb8ae43 +=
    _0x59e027(0xaa) +
    _0x253e7f["firstname"] +
    "\x20" +
    _0x253e7f[_0x59e027(0x1ac)] +
    "\x0a"),
    (_0xb8ae43 += _0x59e027(0x10a) + _0x253e7f[_0x59e027(0x8e)] + "\x0a"),
    (_0xb8ae43 += "เบอร์โทร:\x20" + _0x253e7f[_0x59e027(0x1d1)] + "\x0a"),
    (_0xb8ae43 +=
      "วิธีรับสินค้า:\x20" +
      (_0xdbc97b[_0x59e027(0xc8)](_0x253e7f[_0x59e027(0x2ce)], _0x59e027(0x2d3))
        ? _0xdbc97b[_0x59e027(0x264)]
        : _0xdbc97b[_0x59e027(0xf7)]) +
      "\x0a"),
    (_0xb8ae43 +=
      _0x59e027(0x22b) +
      _0x253e7f[_0x59e027(0x11b)]["toLocaleString"]() +
      "\x20บาท\x0a\x0a"),
    (_0xb8ae43 += _0x253e7f[_0x59e027(0x1eb)]
      ? "หมายเหตุ:\x20" + _0x253e7f[_0x59e027(0x1eb)]
      : "");
  const _0xbf84e6 = await Swal[_0x59e027(0x70)]({
    title: _0xdbc97b[_0x59e027(0xd4)],
    html:
      _0x59e027(0x171) +
      _0xdbc97b["FVCmX"](sanitizeText, _0xb8ae43)[_0x59e027(0x234)](
        /\n/g,
        _0x59e027(0x9a)
      ) +
      _0x59e027(0x291),
    icon: _0x59e027(0xcc),
    showCancelButton: !![],
    confirmButtonText: _0x59e027(0x1a6),
    cancelButtonText: _0xdbc97b["gXOAM"],
    width: 0x258,
    customClass: { popup: _0xdbc97b[_0x59e027(0x27c)] },
  });
  if (!_0xbf84e6[_0x59e027(0x1e8)]) return;
  const _0xd764ee = document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x1dd)])[
    "files"
  ][0x0];
  if (!_0xd764ee) {
    alert(_0x59e027(0x212)),
      (document["getElementById"](_0xdbc97b["wbcQR"])[_0x59e027(0x1d8)] =
        _0xdbc97b["EELHW"]);
    return;
  }
  (document[_0x59e027(0x232)](_0xdbc97b[_0x59e027(0x11f)])[_0x59e027(0x1d8)] =
    ""),
    (_0x1089be[_0x59e027(0x299)] = !![]),
    (_0x1089be[_0x59e027(0x217)] = _0xdbc97b[_0x59e027(0x266)]),
    _0xdbc97b[_0x59e027(0x2e4)](
      showLoadingMessage,
      _0xdbc97b[_0x59e027(0x2a1)]
    );
  const _0x512801 = new FileReader();
  (_0x512801[_0x59e027(0x99)] = async function (_0x17f5e1) {
    const _0xa88542 = _0x59e027;
    try {
      const _0x6ebbbf = await _0xdbc97b[_0xa88542(0x1cd)](
        compressImage,
        _0xd764ee
      );
      _0xdbc97b[_0xa88542(0x1cd)](
        showLoadingMessage,
        _0xdbc97b[_0xa88542(0x2b6)]
      );
      const _0x1a7200 = await _0xdbc97b[_0xa88542(0x1a7)](
        uploadSlipViaServer,
        _0xd764ee,
        _0x6ebbbf,
        _0x253e7f[_0xa88542(0x1cf)]
      );
      if (_0x1a7200[_0xa88542(0xf9)] === _0xa88542(0x1df))
        (_0x253e7f[_0xa88542(0x120)] = _0x1a7200[_0xa88542(0x1af)]),
          _0xdbc97b[_0xa88542(0x198)](showLoadingMessage, _0xdbc97b["TGOAA"]),
          sendToGoogleForms(_0x253e7f);
      else throw new Error(_0x1a7200["message"] || _0xdbc97b[_0xa88542(0x2b2)]);
    } catch (_0x139db0) {
      console["error"](_0xdbc97b["cNUfZ"], _0x139db0),
        hideLoadingMessage(),
        _0xdbc97b[_0xa88542(0x2e9)](resetSubmitButtonState);
      const _0x55e76b = _0xdbc97b[_0xa88542(0x1cd)](
        confirm,
        _0xdbc97b[_0xa88542(0x22a)](
          _0xdbc97b[_0xa88542(0x2b8)],
          _0x139db0[_0xa88542(0x2b0)]
        ) + _0xdbc97b["OmoDv"]
      );
      _0x55e76b &&
        ((_0x253e7f["slipUrl"] = _0xa88542(0x93)),
        _0xdbc97b["JUcvp"](showLoadingMessage, _0xdbc97b[_0xa88542(0xe3)]),
        _0xdbc97b["jEiDt"](sendToGoogleForms, _0x253e7f));
    }
  }),
    (_0x512801[_0x59e027(0x200)] = function () {
      const _0x3767c5 = _0x59e027;
      console[_0x3767c5(0x283)](_0xdbc97b["hESPq"]),
        hideLoadingMessage(),
        _0xdbc97b[_0x3767c5(0x2e9)](resetSubmitButtonState),
        _0xdbc97b[_0x3767c5(0x272)](alert, _0xdbc97b[_0x3767c5(0x2ae)]);
    }),
    _0x512801[_0x59e027(0x1d0)](_0xd764ee);
}
function generateOrderRef() {
  const _0x5ddebe = a0_0x367d28,
    _0x271a51 = {
      hgJxw: function (_0x225ce9, _0x2a3b40) {
        return _0x225ce9 + _0x2a3b40;
      },
    },
    _0x5e93f4 = new Date(),
    _0x4e1525 = _0x5e93f4[_0x5ddebe(0x173)]();
  return (
    _0x5ddebe(0x288) +
    _0x5e93f4["getFullYear"]() +
    _0x271a51[_0x5ddebe(0x1b3)](_0x5e93f4[_0x5ddebe(0x26c)](), 0x1)
      [_0x5ddebe(0x1ba)]()
      ["padStart"](0x2, "0") +
    _0x4e1525
  );
}
function showSuccessPage(_0x281df6) {
  const _0x916885 = a0_0x367d28,
    _0x4c4779 = {
      PzYKR: _0x916885(0x2e8),
      NkmTd: _0x916885(0x13c),
      orBeC: _0x916885(0x137),
      nXqXG: _0x916885(0x251),
      HbIwI: _0x916885(0x73),
      crrOR: function (_0x506467, _0x1ce172) {
        return _0x506467 === _0x1ce172;
      },
      fkjwg: "individual",
      TkrEh: function (_0x52253d, _0x3b1c1d) {
        return _0x52253d > _0x3b1c1d;
      },
      sHeNw: function (_0x22c307, _0x2568de) {
        return _0x22c307 < _0x2568de;
      },
      hxGgZ: _0x916885(0x2e2),
      SsKXM: function (_0x2d505d, _0x32807e) {
        return _0x2d505d + _0x32807e;
      },
      hHzPj: function (_0x468a29, _0x2998ce) {
        return _0x468a29 > _0x2998ce;
      },
      MScLo: function (_0x4e092b, _0x827f2b) {
        return _0x4e092b < _0x827f2b;
      },
      Gxvlt: function (_0x4728bc, _0x55d8c9) {
        return _0x4728bc < _0x55d8c9;
      },
      RiyGC: _0x916885(0x277),
      VNdCo: _0x916885(0x12a),
      okVbi: _0x916885(0x1ff),
      CwazN: "pickup",
      HQypl: _0x916885(0x185),
    };
  window[_0x916885(0x2a2)]({ top: 0x0, behavior: _0x4c4779[_0x916885(0x20b)] }),
    (document["getElementById"](_0x4c4779["NkmTd"])["style"][_0x916885(0x8d)] =
      _0x4c4779["orBeC"]),
    (document["getElementById"](_0x4c4779[_0x916885(0x82)])[_0x916885(0x178)][
      _0x916885(0x8d)
    ] = _0x4c4779[_0x916885(0x1a0)]);
  const _0x8ba641 = document[_0x916885(0x232)](_0x916885(0x104));
  _0x8ba641[_0x916885(0x217)] = "";
  const _0x4ed983 = document[_0x916885(0x29c)]("p");
  (_0x4ed983[_0x916885(0x1d8)] = _0x916885(0x17f) + _0x281df6["orderRef"]),
    _0x8ba641[_0x916885(0xea)](_0x4ed983);
  const _0x218eda = document[_0x916885(0x29c)]("p");
  (_0x218eda[_0x916885(0x1d8)] = _0x916885(0xa0) + _0x281df6[_0x916885(0x1a2)]),
    _0x8ba641[_0x916885(0xea)](_0x218eda);
  if (_0x4c4779["crrOR"](selectedPackage, _0x4c4779[_0x916885(0x1ca)])) {
    if (
      _0x4c4779[_0x916885(0xd9)](
        _0x281df6[_0x916885(0x1d7)][_0x916885(0x13f)],
        0x0
      )
    ) {
      const _0x456b4c = document[_0x916885(0x29c)]("p");
      (_0x456b4c[_0x916885(0x1d8)] =
        _0x916885(0xff) +
        _0x281df6[_0x916885(0x1d7)]["polo"] +
        _0x916885(0x25b)),
        _0x8ba641["appendChild"](_0x456b4c);
      for (
        let _0x3f13e2 = 0x0;
        _0x4c4779["sHeNw"](_0x3f13e2, _0x281df6["items"][_0x916885(0x13f)]);
        _0x3f13e2++
      ) {
        if (
          _0x281df6[_0x916885(0x1ab)]["polo"] &&
          _0x281df6[_0x916885(0x1ab)][_0x916885(0x13f)][_0x3f13e2]
        ) {
          const _0x3268a7 = document["createElement"]("p");
          (_0x3268a7[_0x916885(0x268)] = _0x4c4779[_0x916885(0x1d5)]),
            (_0x3268a7[_0x916885(0x1d8)] =
              _0x916885(0x20c) +
              _0x4c4779[_0x916885(0xb8)](_0x3f13e2, 0x1) +
              ":\x20ไซส์\x20" +
              _0x281df6[_0x916885(0x1ab)][_0x916885(0x13f)][_0x3f13e2]),
            _0x8ba641[_0x916885(0xea)](_0x3268a7);
        }
      }
    }
    if (
      _0x4c4779[_0x916885(0x19c)](
        _0x281df6[_0x916885(0x1d7)][_0x916885(0x204)],
        0x0
      )
    ) {
      const _0xc9a33 = document["createElement"]("p");
      (_0xc9a33["textContent"] =
        _0x916885(0x11d) +
        _0x281df6[_0x916885(0x1d7)][_0x916885(0x204)] +
        _0x916885(0x25b)),
        _0x8ba641[_0x916885(0xea)](_0xc9a33);
      for (
        let _0x48f2ae = 0x0;
        _0x4c4779[_0x916885(0x274)](
          _0x48f2ae,
          _0x281df6["items"][_0x916885(0x204)]
        );
        _0x48f2ae++
      ) {
        if (
          _0x281df6[_0x916885(0x1ab)][_0x916885(0x204)] &&
          _0x281df6["sizes"][_0x916885(0x204)][_0x48f2ae]
        ) {
          const _0x1c302b = document[_0x916885(0x29c)]("p");
          (_0x1c302b[_0x916885(0x268)] = _0x916885(0x2e2)),
            (_0x1c302b[_0x916885(0x1d8)] =
              _0x916885(0x20c) +
              (_0x48f2ae + 0x1) +
              _0x916885(0x92) +
              _0x281df6[_0x916885(0x1ab)]["jacket"][_0x48f2ae]),
            _0x8ba641[_0x916885(0xea)](_0x1c302b);
        }
      }
    }
    if (_0x4c4779[_0x916885(0x19c)](_0x281df6["items"]["jersey"], 0x0)) {
      const _0x535568 = document[_0x916885(0x29c)]("p");
      (_0x535568[_0x916885(0x1d8)] =
        _0x916885(0x152) + _0x281df6["items"]["jersey"] + _0x916885(0x25b)),
        _0x8ba641["appendChild"](_0x535568);
      for (
        let _0x3dba2c = 0x0;
        _0x4c4779[_0x916885(0x98)](
          _0x3dba2c,
          _0x281df6["items"][_0x916885(0x131)]
        );
        _0x3dba2c++
      ) {
        if (
          _0x281df6[_0x916885(0x1ab)]["jersey"] &&
          _0x281df6[_0x916885(0x1ab)]["jersey"][_0x3dba2c]
        ) {
          const _0x53469d = document[_0x916885(0x29c)]("p");
          (_0x53469d[_0x916885(0x268)] = _0x4c4779[_0x916885(0x1d5)]),
            (_0x53469d["textContent"] =
              _0x916885(0x20c) +
              _0x4c4779[_0x916885(0xb8)](_0x3dba2c, 0x1) +
              ":\x20ไซส์\x20" +
              _0x281df6[_0x916885(0x1ab)][_0x916885(0x131)][_0x3dba2c]),
            _0x8ba641["appendChild"](_0x53469d);
        }
      }
    }
  }
  const _0x4c09bb = new Date(),
    _0x436076 = document["createElement"]("p");
  (_0x436076["textContent"] =
    _0x916885(0x10d) +
    _0x4c09bb[_0x916885(0xef)](_0x4c4779[_0x916885(0x189)], {
      year: _0x916885(0x1ff),
      month: _0x4c4779[_0x916885(0x108)],
      day: _0x4c4779[_0x916885(0x97)],
    })),
    _0x8ba641[_0x916885(0xea)](_0x436076);
  const _0x3de9ac = document[_0x916885(0x29c)]("p");
  (_0x3de9ac[_0x916885(0x1d8)] =
    _0x916885(0x144) +
    _0x281df6[_0x916885(0x8a)] +
    "\x20" +
    _0x281df6[_0x916885(0x1ac)]),
    _0x8ba641[_0x916885(0xea)](_0x3de9ac);
  const _0x2abae9 = document[_0x916885(0x29c)]("p");
  (_0x2abae9["textContent"] = "อีเมล:\x20" + _0x281df6[_0x916885(0x8e)]),
    _0x8ba641[_0x916885(0xea)](_0x2abae9);
  const _0x1c9253 = document[_0x916885(0x29c)]("p");
  (_0x1c9253[_0x916885(0x1d8)] =
    _0x916885(0x138) + _0x281df6[_0x916885(0x1d1)]),
    _0x8ba641[_0x916885(0xea)](_0x1c9253);
  const _0x5d3f75 = document["createElement"]("p");
  (_0x5d3f75[_0x916885(0x1d8)] =
    _0x916885(0x18b) +
    (_0x281df6["deliveryType"] === _0x4c4779[_0x916885(0x2b9)]
      ? _0x916885(0xb2)
      : _0x4c4779[_0x916885(0x117)])),
    _0x8ba641["appendChild"](_0x5d3f75);
  const _0x325115 = document[_0x916885(0x29c)]("p");
  (_0x325115[_0x916885(0x1d8)] =
    _0x916885(0x166) +
    _0x281df6[_0x916885(0x11b)]["toLocaleString"]() +
    _0x916885(0x21b)),
    _0x8ba641[_0x916885(0xea)](_0x325115);
  if (_0x281df6[_0x916885(0x121)]) {
    const _0x2cc67c = document[_0x916885(0x29c)]("p");
    (_0x2cc67c[_0x916885(0x217)] =
      "<strong>รหัสติดตาม:</strong>\x20<span\x20class=\x22badge\x20bg-primary\x22>" +
      _0x281df6[_0x916885(0x121)] +
      _0x916885(0x187)),
      _0x8ba641["appendChild"](_0x2cc67c);
  }
  const _0x5c8232 = document["createElement"]("p");
  (_0x5c8232[_0x916885(0x1d8)] = _0x916885(0x7b) + _0x281df6["notes"]),
    _0x8ba641[_0x916885(0xea)](_0x5c8232);
}
function sendToGoogleForms(_0x4b4d8f) {
  const _0x3ac765 = a0_0x367d28,
    _0x447f09 = {
      hbeFD: function (_0x1aa353, _0x58f079) {
        return _0x1aa353(_0x58f079);
      },
      oxbaa: function (_0x300c26, _0x1e14ce) {
        return _0x300c26(_0x1e14ce);
      },
      Ivssi: _0x3ac765(0x219),
      OJuat: function (_0x56fc7f) {
        return _0x56fc7f();
      },
      irayO: function (_0x4d0657) {
        return _0x4d0657();
      },
      jVmgA: function (_0x2df808, _0x1b255b) {
        return _0x2df808(_0x1b255b);
      },
      lXjoc: function (_0x5911f2, _0x55fcf2) {
        return _0x5911f2 + _0x55fcf2;
      },
      OCsoK: _0x3ac765(0x15e),
      wasSf: function (_0x4ee02a, _0xb83776, _0x86f546) {
        return _0x4ee02a(_0xb83776, _0x86f546);
      },
      uZKBH: "/submit-order",
      MOMcp: _0x3ac765(0x140),
      DIRZH: "application/json",
      UXhLl: _0x3ac765(0x2df),
      QxxRm: function (_0x58f90d) {
        return _0x58f90d();
      },
      TktxU: "เกิดข้อผิดพลาดในการเตรียมข้อมูล\x20กรุณาลองใหม่อีกครั้ง:\x20",
    };
  try {
    const _0x1b13be = new Date(),
      _0x399681 = generateOrderRef();
    _0x4b4d8f[_0x3ac765(0x1cf)] = _0x399681;
    const _0x56aaed = {
      orderRef: _0x399681,
      packageName: _0x4b4d8f["packageName"],
      firstname: _0x4b4d8f[_0x3ac765(0x8a)],
      lastname: _0x4b4d8f[_0x3ac765(0x1ac)],
      email: _0x4b4d8f[_0x3ac765(0x8e)],
      phone: _0x4b4d8f[_0x3ac765(0x1d1)],
      status: _0x4b4d8f[_0x3ac765(0xf9)],
      year: _0x4b4d8f[_0x3ac765(0x179)],
      major: _0x4b4d8f[_0x3ac765(0x1ec)],
      faculty: _0x4b4d8f[_0x3ac765(0x27a)],
      studentId: _0x4b4d8f[_0x3ac765(0x27f)],
      deliveryType: _0x4b4d8f["deliveryType"],
      address: _0x4b4d8f["address"],
      totalAmount: _0x4b4d8f[_0x3ac765(0x11b)],
      items: _0x4b4d8f[_0x3ac765(0x1d7)],
      notes: _0x4b4d8f[_0x3ac765(0x1eb)],
      slipUrl: _0x4b4d8f["slipUrl"] || null,
    };
    _0x447f09[_0x3ac765(0x12e)](fetch, _0x447f09[_0x3ac765(0x1e1)], {
      method: _0x447f09[_0x3ac765(0x126)],
      headers: { "Content-Type": _0x447f09["DIRZH"] },
      body: JSON[_0x3ac765(0x1c4)](_0x56aaed),
    })
      ["then"]((_0x5acc4f) => {
        const _0x57a34a = _0x3ac765;
        if (!_0x5acc4f["ok"])
          throw new Error(_0x57a34a(0x228) + _0x5acc4f[_0x57a34a(0xf9)]);
        return _0x5acc4f["json"]();
      })
      [_0x3ac765(0x215)]((_0x237854) => {
        const _0x32816d = _0x3ac765;
        hideLoadingMessage();
        if (_0x237854["success"])
          (_0x4b4d8f["orderRef"] = _0x237854[_0x32816d(0x1cf)]),
            (_0x4b4d8f[_0x32816d(0x121)] = _0x237854["trackingCode"]),
            _0x447f09[_0x32816d(0x25f)](showSuccessPage, _0x4b4d8f),
            _0x447f09["oxbaa"](sendConfirmationEmail, _0x4b4d8f);
        else
          throw new Error(
            _0x237854[_0x32816d(0x283)] || _0x447f09[_0x32816d(0x1c3)]
          );
      })
      [_0x3ac765(0x298)]((_0x2d42fc) => {
        const _0x59f7cb = _0x3ac765;
        _0x447f09["OJuat"](hideLoadingMessage),
          _0x447f09[_0x59f7cb(0x167)](resetSubmitButtonState),
          _0x447f09[_0x59f7cb(0x282)](
            alert,
            _0x447f09[_0x59f7cb(0x2bb)](
              _0x447f09[_0x59f7cb(0xa1)],
              _0x2d42fc[_0x59f7cb(0x2b0)]
            )
          );
      });
  } catch (_0x47594d) {
    console[_0x3ac765(0x283)](_0x447f09["UXhLl"], _0x47594d),
      hideLoadingMessage(),
      _0x447f09[_0x3ac765(0x1f6)](resetSubmitButtonState),
      _0x447f09[_0x3ac765(0x25f)](
        alert,
        _0x447f09[_0x3ac765(0x2bb)](
          _0x447f09[_0x3ac765(0x297)],
          _0x47594d[_0x3ac765(0x2b0)]
        )
      );
  }
}
function sendConfirmationEmail(_0x59a516) {
  const _0x574784 = a0_0x367d28,
    _0x1383c3 = {
      qWhHh: _0x574784(0x101),
      DRCQh: _0x574784(0xb5),
      hiCrD: function (_0x39b905) {
        return _0x39b905();
      },
      xNrnq: _0x574784(0x2c6),
      fYmjv: function (_0x40b3bd, _0x46d428) {
        return _0x40b3bd(_0x46d428);
      },
      CmcqR: _0x574784(0xbb),
      mYlgT: _0x574784(0x140),
      kLZdQ: _0x574784(0x128),
    },
    _0x29b0ba = _0x1383c3[_0x574784(0x107)](generateEmailHTML, _0x59a516);
  fetch(_0x1383c3["CmcqR"], {
    method: _0x1383c3[_0x574784(0xc3)],
    headers: { "Content-Type": _0x574784(0x2d9) },
    body: JSON[_0x574784(0x1c4)]({
      to: _0x59a516[_0x574784(0x8e)],
      subject: _0x1383c3[_0x574784(0x149)] + _0x59a516[_0x574784(0x1cf)],
      html: _0x29b0ba,
    }),
  })
    [_0x574784(0x215)]((_0x4d8e7c) => {
      const _0x332017 = _0x574784;
      if (!_0x4d8e7c["ok"])
        throw new Error(_0x332017(0x91) + _0x4d8e7c[_0x332017(0xf9)]);
      return _0x4d8e7c[_0x332017(0x103)]();
    })
    [_0x574784(0x215)]((_0x466824) => {
      console["log"](_0x1383c3["qWhHh"]);
    })
    ["catch"]((_0x5d4700) => {
      const _0x43757d = _0x574784;
      console[_0x43757d(0x283)](_0x1383c3[_0x43757d(0x95)], _0x5d4700),
        hideLoadingMessage(),
        _0x1383c3[_0x43757d(0x11c)](resetSubmitButtonState),
        alert(_0x1383c3[_0x43757d(0x20a)] + _0x5d4700[_0x43757d(0x2b0)]);
    });
}
function showLoadingMessage(_0x16a3a6) {
  const _0x310066 = a0_0x367d28,
    _0x575565 = {
      IhkaY: _0x310066(0x26e),
      XWBdt: _0x310066(0x134),
      HYTBD: _0x310066(0x1ee),
    };
  hideLoadingMessage();
  const _0x433560 = document[_0x310066(0x29c)](_0x575565["IhkaY"]);
  (_0x433560["id"] = _0x575565["XWBdt"]),
    (_0x433560["style"][_0x310066(0x292)] = _0x310066(0x12c));
  const _0x133032 = document[_0x310066(0x29c)](_0x575565[_0x310066(0xfb)]);
  _0x133032[_0x310066(0x178)][_0x310066(0x292)] = _0x310066(0x210);
  if (!document[_0x310066(0x232)](_0x575565[_0x310066(0x190)])) {
    const _0x3ef345 = document["createElement"](_0x310066(0x178));
    (_0x3ef345["id"] = _0x575565[_0x310066(0x190)]),
      (_0x3ef345["textContent"] = _0x310066(0x241)),
      document[_0x310066(0x2bf)]["appendChild"](_0x3ef345);
  }
  _0x433560[_0x310066(0xea)](_0x133032);
  const _0x19ece8 = document["createTextNode"](_0x16a3a6);
  _0x433560[_0x310066(0xea)](_0x19ece8),
    document["body"][_0x310066(0xea)](_0x433560);
}
function hideLoadingMessage() {
  const _0x266667 = a0_0x367d28,
    _0x26ff78 = { lHlrE: _0x266667(0x134) },
    _0x3e55bb = document[_0x266667(0x232)](_0x26ff78["lHlrE"]);
  _0x3e55bb && _0x3e55bb["remove"]();
}
function resetOrder() {
  const _0x29a86b = a0_0x367d28,
    _0x147e7f = {
      RfJYi: _0x29a86b(0x250),
      FFqJL: _0x29a86b(0x15a),
      qzBPq: _0x29a86b(0x182),
      baAGX: _0x29a86b(0x2c1),
      YIuZV: _0x29a86b(0x243),
      zCLzA: _0x29a86b(0x154),
      AVJCM: ".package-card",
      lsTcj: _0x29a86b(0x151),
      lbqks: _0x29a86b(0x85),
      GNPox: _0x29a86b(0x2da),
      DMOLD: _0x29a86b(0x137),
      HMfxt: _0x29a86b(0x13c),
      epHOq: _0x29a86b(0x251),
      ERpTG: ".error",
      VdLzB: function (_0x3a7575, _0x2f2cd9, _0x57649d) {
        return _0x3a7575(_0x2f2cd9, _0x57649d);
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
    document["querySelectorAll"](_0x29a86b(0x275))[_0x29a86b(0xa4)](
      (_0x23fbed) => (_0x23fbed[_0x29a86b(0xe9)] = ![])
    ),
    document[_0x29a86b(0x170)](_0x147e7f["qzBPq"])[_0x29a86b(0xa4)](
      (_0x3d00e3) => (_0x3d00e3[_0x29a86b(0x1e9)] = "")
    ),
    document["querySelectorAll"](_0x147e7f["baAGX"])[_0x29a86b(0xa4)](
      (_0x5f2795) => (_0x5f2795["selectedIndex"] = 0x0)
    ),
    (document[_0x29a86b(0x232)](_0x147e7f[_0x29a86b(0x17c)])["value"] = 0x1);
  const _0x32375c = document["getElementById"](_0x147e7f["zCLzA"]);
  _0x32375c && (_0x32375c[_0x29a86b(0x1e9)] = ""),
    document[_0x29a86b(0x170)](_0x147e7f[_0x29a86b(0x262)])[_0x29a86b(0xa4)](
      (_0x3885aa) =>
        _0x3885aa[_0x29a86b(0x23e)][_0x29a86b(0xb0)](_0x29a86b(0x14e))
    ),
    document["querySelectorAll"](_0x147e7f[_0x29a86b(0x1db)])[_0x29a86b(0xa4)](
      (_0x300f84) => _0x300f84[_0x29a86b(0x23e)]["remove"](_0x29a86b(0x14e))
    ),
    document[_0x29a86b(0x170)](_0x147e7f[_0x29a86b(0x1a4)])[_0x29a86b(0xa4)](
      (_0x4a9ed5) =>
        _0x4a9ed5[_0x29a86b(0x23e)][_0x29a86b(0xb0)](_0x29a86b(0x14e))
    ),
    (document[_0x29a86b(0x232)](_0x147e7f[_0x29a86b(0x17a)])[_0x29a86b(0x178)][
      "display"
    ] = _0x147e7f[_0x29a86b(0xb4)]),
    (document["getElementById"](_0x147e7f[_0x29a86b(0x111)])["style"][
      "display"
    ] = _0x147e7f[_0x29a86b(0xb4)]),
    (document[_0x29a86b(0x232)](_0x147e7f[_0x29a86b(0x7c)])[_0x29a86b(0x178)][
      _0x29a86b(0x8d)
    ] = _0x147e7f[_0x29a86b(0xb4)]),
    (document[_0x29a86b(0x232)](_0x147e7f[_0x29a86b(0x25d)])[_0x29a86b(0x178)][
      _0x29a86b(0x8d)
    ] = _0x29a86b(0x73)),
    (document[_0x29a86b(0x232)](_0x29a86b(0x224))[_0x29a86b(0x178)][
      _0x29a86b(0x8d)
    ] = _0x147e7f[_0x29a86b(0xb4)]),
    document["querySelectorAll"](_0x147e7f["ERpTG"])[_0x29a86b(0xa4)](
      (_0x496c48) => (_0x496c48["textContent"] = "")
    ),
    _0x147e7f[_0x29a86b(0x1fa)](
      setTimeout,
      () => {
        const _0x2302cf = _0x29a86b;
        (window["location"][_0x2302cf(0x196)] = _0x147e7f["RfJYi"]),
          window[_0x2302cf(0x2a2)]({ top: 0x0, behavior: _0x2302cf(0x2e8) }),
          document[_0x2302cf(0x232)](_0x147e7f[_0x2302cf(0x25d)])[
            _0x2302cf(0x206)
          ]({ behavior: _0x2302cf(0x2e8) });
      },
      0x3e8
    );
}
document["addEventListener"](a0_0x367d28(0xc4), function () {
  const _0x49582b = a0_0x367d28,
    _0x510f46 = {
      loyMa: function (_0x259633) {
        return _0x259633();
      },
      vuzyo: _0x49582b(0x27b),
      lfgze: _0x49582b(0x9e),
      bxhVA: _0x49582b(0x137),
      dFoLM: _0x49582b(0x1cc),
      HExMm: _0x49582b(0x73),
      NoXez: _0x49582b(0x227),
      fQaXn: "slip-thumbnail-img",
      BYjCu: _0x49582b(0x2bc),
      AuYPD: function (_0x10c345, _0x429a81) {
        return _0x10c345 || _0x429a81;
      },
      TEXgy: _0x49582b(0x2c3),
      AXSlJ: _0x49582b(0x9b),
      QqSeO: _0x49582b(0x125),
    },
    _0x1cea8c = document[_0x49582b(0x232)]("slip"),
    _0x4b5634 = document["getElementById"](_0x510f46[_0x49582b(0x1e7)]),
    _0x18c2f6 = document["getElementById"](_0x49582b(0x285)),
    _0x57b9b1 = document[_0x49582b(0x232)](_0x510f46["fQaXn"]),
    _0xa4e3ee = document[_0x49582b(0x232)](_0x49582b(0x72)),
    _0x33ca98 = document[_0x49582b(0x232)](_0x510f46[_0x49582b(0x1f3)]),
    _0x16050b = document[_0x49582b(0x232)](_0x49582b(0xca));
  let _0x22f90e = "";
  if (
    _0x510f46["AuYPD"](!_0x1cea8c, !_0x4b5634) ||
    !_0x18c2f6 ||
    !_0x57b9b1 ||
    !_0xa4e3ee ||
    !_0x33ca98 ||
    !_0x16050b
  ) {
    console[_0x49582b(0x283)](_0x510f46["TEXgy"]);
    return;
  }
  _0x1cea8c["addEventListener"](_0x510f46[_0x49582b(0x252)], function () {
    const _0x1a9055 = _0x49582b;
    _0x510f46[_0x1a9055(0x1bd)](_0x408677);
    if (_0x1cea8c["files"] && _0x1cea8c["files"][0x0]) {
      const _0x4c43ff = _0x1cea8c[_0x1a9055(0x2e5)][0x0];
      if (
        !_0x4c43ff[_0x1a9055(0x141)][_0x1a9055(0x114)](
          _0x510f46[_0x1a9055(0xe1)]
        )
      ) {
        const _0x38b679 = _0x510f46[_0x1a9055(0x2d5)][_0x1a9055(0xbd)]("|");
        let _0x1cb014 = 0x0;
        while (!![]) {
          switch (_0x38b679[_0x1cb014++]) {
            case "0":
              _0x18c2f6[_0x1a9055(0x178)]["display"] =
                _0x510f46[_0x1a9055(0x1a5)];
              continue;
            case "1":
              _0x57b9b1[_0x1a9055(0x11e)] = "";
              continue;
            case "2":
              _0x4b5634["textContent"] = _0x510f46[_0x1a9055(0x1f0)];
              continue;
            case "3":
              _0x1cea8c[_0x1a9055(0x1e9)] = "";
              continue;
            case "4":
              _0x22f90e = "";
              continue;
            case "5":
              return;
          }
          break;
        }
      }
      _0x4b5634[_0x1a9055(0x1d8)] = "";
      const _0x245a14 = new FileReader();
      (_0x245a14["onload"] = function (_0x5f4cf5) {
        const _0x568d63 = _0x1a9055;
        (_0x22f90e = _0x5f4cf5[_0x568d63(0x2a4)][_0x568d63(0x2dc)]),
          (_0x57b9b1[_0x568d63(0x11e)] = _0x22f90e),
          (_0x18c2f6[_0x568d63(0x178)][_0x568d63(0x8d)] = _0x568d63(0x73));
      }),
        _0x245a14["readAsDataURL"](_0x4c43ff);
    } else (_0x22f90e = ""), (_0x57b9b1[_0x1a9055(0x11e)] = ""), (_0x18c2f6["style"][_0x1a9055(0x8d)] = _0x1a9055(0x137));
  }),
    _0x57b9b1[_0x49582b(0x240)](_0x510f46["QqSeO"], function () {
      _0x22f90e && _0x284354();
    }),
    _0x16050b[_0x49582b(0x240)](_0x510f46[_0x49582b(0x263)], _0x408677);
  function _0x284354() {
    const _0x1f3839 = _0x49582b;
    _0x22f90e &&
      ((_0x33ca98[_0x1f3839(0x11e)] = _0x22f90e),
      (_0xa4e3ee[_0x1f3839(0x178)][_0x1f3839(0x8d)] = _0x510f46["HExMm"]));
  }
  function _0x408677() {
    const _0x5f23f8 = _0x49582b;
    _0xa4e3ee[_0x5f23f8(0x178)][_0x5f23f8(0x8d)] = _0x510f46[_0x5f23f8(0x1a5)];
  }
});
function filterProducts(_0x380dac) {
  const _0x285375 = a0_0x367d28,
    _0x32ef36 = {
      sczFQ: _0x285375(0x278),
      sDYbF: function (_0x12cf33, _0x2345de) {
        return _0x12cf33 === _0x2345de;
      },
      BRJaG: "block",
      SgBDR: function (_0x2e450b, _0x29160e) {
        return _0x2e450b === _0x29160e;
      },
      jlcJO: _0x285375(0x1c8),
      qUkRo: _0x285375(0x1e2),
      lbiFW: _0x285375(0x1e4),
      xNuvN: _0x285375(0x2c7),
      CQOrW: function (_0x2c7520, _0x2932c3) {
        return _0x2c7520 === _0x2932c3;
      },
      pzTCc: function (_0x134d3b) {
        return _0x134d3b();
      },
      RbvjL: _0x285375(0x2da),
      avIux: "none",
      KCCxs: "#product-btn\x20button",
      oQJES: function (_0x35a5d0, _0x409ea7) {
        return _0x35a5d0 === _0x409ea7;
      },
      fpUEz: _0x285375(0x23d),
      qHgYI: function (_0x292d9f, _0x106e5f) {
        return _0x292d9f === _0x106e5f;
      },
      tHwRf: _0x285375(0x1b1),
    },
    _0xc0b4d1 = document[_0x285375(0x170)](_0x285375(0x74));
  _0xc0b4d1[_0x285375(0xa4)]((_0x1fcbce) => {
    const _0x3fba38 = _0x285375,
      _0x259720 = _0x1fcbce[_0x3fba38(0x2b1)](_0x3fba38(0x139))[
        _0x3fba38(0x24f)
      ](_0x32ef36["sczFQ"]);
    if (_0x32ef36[_0x3fba38(0x15d)](_0x380dac, _0x3fba38(0x23d)))
      _0x1fcbce[_0x3fba38(0x178)][_0x3fba38(0x8d)] =
        _0x32ef36[_0x3fba38(0x142)];
    else
      _0x32ef36[_0x3fba38(0x109)](_0x380dac, _0x3fba38(0x1c8)) &&
      _0x32ef36["sDYbF"](_0x259720, _0x32ef36["jlcJO"])
        ? (_0x1fcbce[_0x3fba38(0x178)][_0x3fba38(0x8d)] =
            _0x32ef36[_0x3fba38(0x142)])
        : (_0x1fcbce[_0x3fba38(0x178)]["display"] = _0x3fba38(0x137));
  }),
    document[_0x285375(0x170)](_0x32ef36[_0x285375(0x2c0)])[_0x285375(0xa4)](
      (_0x59d0d6) => {
        _0x59d0d6["checked"] = ![];
      }
    );
  if (_0x32ef36["CQOrW"](_0x380dac, _0x32ef36[_0x285375(0x90)])) {
    const _0x2abc4e = document["querySelector"](_0x285375(0x1f1));
    _0x2abc4e && (_0x2abc4e[_0x285375(0xe9)] = !![]),
      (selectedPackage = _0x32ef36[_0x285375(0x90)]),
      _0x32ef36[_0x285375(0x21f)](updatePackageSelection),
      _0x32ef36[_0x285375(0x21f)](showSelectionDetails);
  } else
    (selectedPackage = null),
      (document[_0x285375(0x232)](_0x32ef36[_0x285375(0x2ad)])["style"][
        _0x285375(0x8d)
      ] = _0x32ef36["avIux"]);
  const _0x12fc7a = document[_0x285375(0x170)](_0x32ef36[_0x285375(0x2ba)]);
  _0x12fc7a["forEach"]((_0x1d6f77) => {
    const _0xa3da7f = _0x285375;
    _0x1d6f77["classList"][_0xa3da7f(0xb0)](_0x32ef36[_0xa3da7f(0x129)]),
      _0x1d6f77[_0xa3da7f(0x23e)]["add"](_0x32ef36[_0xa3da7f(0x88)]);
  });
  let _0x52a307;
  if (_0x32ef36["oQJES"](_0x380dac, _0x32ef36[_0x285375(0x1cb)]))
    _0x52a307 = document["querySelector"](_0x285375(0xb9));
  else
    _0x32ef36[_0x285375(0x2cb)](_0x380dac, _0x32ef36["jlcJO"]) &&
      (_0x52a307 = document[_0x285375(0x2b1)](_0x32ef36[_0x285375(0x28c)]));
  _0x52a307 &&
    (_0x52a307["classList"]["add"](_0x32ef36[_0x285375(0x129)]),
    _0x52a307[_0x285375(0x23e)][_0x285375(0xb0)](_0x32ef36["lbiFW"]));
}
document["addEventListener"](a0_0x367d28(0xc4), () => {
  const _0xbd91a2 = a0_0x367d28,
    _0x44971e = { FVTVF: _0xbd91a2(0x1c8) };
  filterProducts(_0x44971e[_0xbd91a2(0x1f9)]);
});
function showCustomerForm() {
  const _0x19aac0 = a0_0x367d28,
    _0x3d8b67 = {
      ZTrSh: _0x19aac0(0x13c),
      GSCYV: _0x19aac0(0x73),
      oUMNj: _0x19aac0(0x137),
    };
  (document["getElementById"](_0x3d8b67[_0x19aac0(0xab)])[_0x19aac0(0x178)][
    _0x19aac0(0x8d)
  ] = _0x3d8b67["GSCYV"]),
    (document[_0x19aac0(0x232)](_0x19aac0(0x15a))[_0x19aac0(0x178)][
      _0x19aac0(0x8d)
    ] = _0x3d8b67["oUMNj"]),
    hideProductButtons();
}
function hideProductButtons() {
  const _0x195631 = a0_0x367d28,
    _0x595899 = { eyvZj: ".product-btn" },
    _0x4503e0 = document[_0x195631(0x170)](_0x595899[_0x195631(0x146)]);
  _0x4503e0[_0x195631(0xa4)]((_0x364a97) => {
    const _0x41c78f = _0x195631;
    _0x364a97[_0x41c78f(0x178)][_0x41c78f(0x8d)] = _0x41c78f(0x137);
  });
}
function showProductButtons() {
  const _0x2ec73 = a0_0x367d28,
    _0x1bbb19 = { SEDpb: ".product-btn" },
    _0x1c3153 = document[_0x2ec73(0x170)](_0x1bbb19["SEDpb"]);
  _0x1c3153["forEach"]((_0x1abf63) => {
    const _0x156fa2 = _0x2ec73;
    _0x1abf63["style"][_0x156fa2(0x8d)] = _0x156fa2(0x2b7);
  });
}
document[a0_0x367d28(0x240)]("DOMContentLoaded", function () {
  const _0x82649e = a0_0x367d28,
    _0x25a001 = {
      Kbmbi: "carouselModalLastShown",
      YkQsG: function (_0xd1ccd3, _0x1827b4) {
        return _0xd1ccd3 > _0x1827b4;
      },
      akrCs: function (_0x2d0f79, _0x3fb322) {
        return _0x2d0f79 - _0x3fb322;
      },
      Qmcvv: function (_0x5c37e1, _0xf4fdce) {
        return _0x5c37e1 * _0xf4fdce;
      },
      VPiNV: "carouselModal",
      WTXRw: _0x82649e(0x1fb),
    },
    _0x3307ea = localStorage[_0x82649e(0x230)](_0x82649e(0xd3)),
    _0x349412 = new Date()[_0x82649e(0x173)]();
  if (
    !_0x3307ea ||
    _0x25a001["YkQsG"](
      _0x25a001[_0x82649e(0x29b)](_0x349412, parseInt(_0x3307ea)),
      _0x25a001[_0x82649e(0x29f)](0x3c, 0x3c) * 0x3e8
    )
  ) {
    const _0x453e97 = new bootstrap[_0x82649e(0x188)](
      document["getElementById"](_0x25a001[_0x82649e(0x1c7)])
    );
    _0x453e97["show"]();
    const _0x344821 = new bootstrap[_0x82649e(0x1e6)](
      document["getElementById"](_0x25a001[_0x82649e(0x2e0)]),
      { interval: 0xbb8, wrap: !![] }
    );
  }
  document[_0x82649e(0x232)](_0x25a001[_0x82649e(0x1c7)])["addEventListener"](
    _0x82649e(0x14c),
    function () {
      const _0xcfdf27 = _0x82649e;
      document["getElementById"](_0xcfdf27(0x253))[_0xcfdf27(0xe9)] &&
        localStorage[_0xcfdf27(0xce)](
          _0x25a001["Kbmbi"],
          new Date()["getTime"]()
        );
    }
  );
}),
  document["addEventListener"]("DOMContentLoaded", function () {
    const _0x28a572 = a0_0x367d28,
      _0x2dec35 = {
        hBjFi: function (_0x1bfe6b, _0x57d256) {
          return _0x1bfe6b === _0x57d256;
        },
        xbeOt: _0x28a572(0xc6),
        OGLjC: _0x28a572(0x10f),
      },
      _0x3388e9 = document["getElementById"](_0x28a572(0x1eb));
    _0x3388e9 &&
      _0x3388e9["addEventListener"](_0x2dec35["OGLjC"], function (_0x35f24d) {
        const _0x568e5f = _0x28a572;
        _0x2dec35[_0x568e5f(0x162)](
          _0x35f24d[_0x568e5f(0x23b)],
          _0x2dec35[_0x568e5f(0x130)]
        ) && _0x35f24d["preventDefault"]();
      });
  });
function goBack() {
  const _0x334e3a = a0_0x367d28,
    _0x31aaa8 = {
      RAaff: _0x334e3a(0x13c),
      NxnyL: "none",
      OOnQB: _0x334e3a(0x15a),
      BNfGy: "block",
    };
  (document[_0x334e3a(0x232)](_0x31aaa8[_0x334e3a(0x133)])[_0x334e3a(0x178)][
    _0x334e3a(0x8d)
  ] = _0x31aaa8["NxnyL"]),
    (document[_0x334e3a(0x232)](_0x31aaa8["OOnQB"])["style"][_0x334e3a(0x8d)] =
      _0x31aaa8["BNfGy"]),
    window[_0x334e3a(0x2a2)]({ top: 0x0, behavior: _0x334e3a(0x2e8) });
}
const carousel = document[a0_0x367d28(0x2b1)](a0_0x367d28(0x225)),
  bsCarousel = new bootstrap[a0_0x367d28(0x1e6)](carousel, {
    interval: 0x5dc,
    ride: "carousel",
  });
