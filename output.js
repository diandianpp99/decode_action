//Tue Oct 01 2024 07:23:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var domain = document.domain,
  md5code = MD5(MD5(MD5(domain) + MD5("2275@304997097@qq.com")));
!md5code && (location.href = "/s");
!oscode && (location.href = "/s");
oscode != md5code && (location.href = "/s");
function MD5(_0x18b62a) {
  var _0x584a71 = 0,
    _0x3502c0 = "";
  function _0x396175(_0x1e72b6) {
    return _0x1c0aa4(_0xa7d853(_0xcf3d2f(_0x1e72b6)));
  }
  function _0x3e0f6d(_0x3dcd57) {
    return _0x5b012f(_0xa7d853(_0xcf3d2f(_0x3dcd57)));
  }
  function _0x1bd9e6(_0x3581ae, _0x4bf116) {
    return _0x12ec56(_0xa7d853(_0xcf3d2f(_0x3581ae)), _0x4bf116);
  }
  function _0x4f2a86(_0xe24d24, _0x59f653) {
    return _0x1c0aa4(_0x384169(_0xcf3d2f(_0xe24d24), _0xcf3d2f(_0x59f653)));
  }
  function _0x523bea(_0x29e991, _0x137551) {
    return _0x5b012f(_0x384169(_0xcf3d2f(_0x29e991), _0xcf3d2f(_0x137551)));
  }
  function _0x7b178b(_0x116e6e, _0x183592, _0x4b83bf) {
    return _0x12ec56(_0x384169(_0xcf3d2f(_0x116e6e), _0xcf3d2f(_0x183592)), _0x4b83bf);
  }
  function _0x4febca() {
    return _0x396175("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
  }
  function _0xa7d853(_0x163411) {
    return _0x1ed3b5(_0x15303f(_0x83e60c(_0x163411), _0x163411.length * 8));
  }
  function _0x384169(_0x1c0498, _0xa93765) {
    var _0x785a70 = _0x83e60c(_0x1c0498);
    if (_0x785a70.length > 16) {
      _0x785a70 = _0x15303f(_0x785a70, _0x1c0498.length * 8);
    }
    var _0x57c739 = Array(16),
      _0x2522b6 = Array(16);
    for (var _0x12adf3 = 0; _0x12adf3 < 16; _0x12adf3++) {
      _0x57c739[_0x12adf3] = _0x785a70[_0x12adf3] ^ 909522486;
      _0x2522b6[_0x12adf3] = _0x785a70[_0x12adf3] ^ 1549556828;
    }
    var _0x272251 = _0x15303f(_0x57c739.concat(_0x83e60c(_0xa93765)), 512 + _0xa93765.length * 8);
    return _0x1ed3b5(_0x15303f(_0x2522b6.concat(_0x272251), 512 + 128));
  }
  function _0x1c0aa4(_0x2db3ef) {
    try {
      _0x584a71;
    } catch (_0x2a831c) {
      _0x584a71 = 0;
    }
    var _0x4636f3 = _0x584a71 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x466420 = "";
    var _0x2a17e0;
    for (var _0x579ead = 0; _0x579ead < _0x2db3ef.length; _0x579ead++) {
      _0x2a17e0 = _0x2db3ef.charCodeAt(_0x579ead);
      _0x466420 += _0x4636f3.charAt(_0x2a17e0 >>> 4 & 15) + _0x4636f3.charAt(_0x2a17e0 & 15);
    }
    return _0x466420;
  }
  function _0x5b012f(_0x364e45) {
    try {
      _0x3502c0;
    } catch (_0x29c237) {
      _0x3502c0 = "";
    }
    var _0x5d9587 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      _0x491ddd = "",
      _0xa7a306 = _0x364e45.length;
    for (var _0x1798f1 = 0; _0x1798f1 < _0xa7a306; _0x1798f1 += 3) {
      var _0x3a859a = _0x364e45.charCodeAt(_0x1798f1) << 16 | (_0x1798f1 + 1 < _0xa7a306 ? _0x364e45.charCodeAt(_0x1798f1 + 1) << 8 : 0) | (_0x1798f1 + 2 < _0xa7a306 ? _0x364e45.charCodeAt(_0x1798f1 + 2) : 0);
      for (var _0x13ea31 = 0; _0x13ea31 < 4; _0x13ea31++) {
        if (_0x1798f1 * 8 + _0x13ea31 * 6 > _0x364e45.length * 8) {
          _0x491ddd += _0x3502c0;
        } else {
          _0x491ddd += _0x5d9587.charAt(_0x3a859a >>> 6 * (3 - _0x13ea31) & 63);
        }
      }
    }
    return _0x491ddd;
  }
  function _0x12ec56(_0x36dd18, _0x391ccb) {
    var _0x583875 = _0x391ccb.length,
      _0x342dff,
      _0x57f5f0,
      _0xb8b752,
      _0x47be4e,
      _0x3fe4d5,
      _0x21c3f0 = Array(Math.ceil(_0x36dd18.length / 2));
    for (_0x342dff = 0; _0x342dff < _0x21c3f0.length; _0x342dff++) {
      _0x21c3f0[_0x342dff] = _0x36dd18.charCodeAt(_0x342dff * 2) << 8 | _0x36dd18.charCodeAt(_0x342dff * 2 + 1);
    }
    var _0x34a7e6 = Math.ceil(_0x36dd18.length * 8 / (Math.log(_0x391ccb.length) / Math.log(2))),
      _0x1ca044 = Array(_0x34a7e6);
    for (_0x57f5f0 = 0; _0x57f5f0 < _0x34a7e6; _0x57f5f0++) {
      _0x3fe4d5 = Array();
      _0x47be4e = 0;
      for (_0x342dff = 0; _0x342dff < _0x21c3f0.length; _0x342dff++) {
        _0x47be4e = (_0x47be4e << 16) + _0x21c3f0[_0x342dff];
        _0xb8b752 = Math.floor(_0x47be4e / _0x583875);
        _0x47be4e -= _0xb8b752 * _0x583875;
        if (_0x3fe4d5.length > 0 || _0xb8b752 > 0) {
          _0x3fe4d5[_0x3fe4d5.length] = _0xb8b752;
        }
      }
      _0x1ca044[_0x57f5f0] = _0x47be4e;
      _0x21c3f0 = _0x3fe4d5;
    }
    var _0x1a6970 = "";
    for (_0x342dff = _0x1ca044.length - 1; _0x342dff >= 0; _0x342dff--) {
      _0x1a6970 += _0x391ccb.charAt(_0x1ca044[_0x342dff]);
    }
    return _0x1a6970;
  }
  function _0xcf3d2f(_0x536f09) {
    var _0x42dd80 = "";
    var _0x3f3eca = -1;
    var _0x2a9720, _0x1a7090;
    while (++_0x3f3eca < _0x536f09.length) {
      _0x2a9720 = _0x536f09.charCodeAt(_0x3f3eca);
      _0x1a7090 = _0x3f3eca + 1 < _0x536f09.length ? _0x536f09.charCodeAt(_0x3f3eca + 1) : 0;
      if (55296 <= _0x2a9720 && _0x2a9720 <= 56319 && 56320 <= _0x1a7090 && _0x1a7090 <= 57343) {
        _0x2a9720 = 65536 + ((_0x2a9720 & 1023) << 10) + (_0x1a7090 & 1023);
        _0x3f3eca++;
      }
      if (_0x2a9720 <= 127) {
        _0x42dd80 += String.fromCharCode(_0x2a9720);
      } else {
        if (_0x2a9720 <= 2047) {
          _0x42dd80 += String.fromCharCode(192 | _0x2a9720 >>> 6 & 31, 128 | _0x2a9720 & 63);
        } else {
          if (_0x2a9720 <= 65535) {
            _0x42dd80 += String.fromCharCode(224 | _0x2a9720 >>> 12 & 15, 128 | _0x2a9720 >>> 6 & 63, 128 | _0x2a9720 & 63);
          } else {
            if (_0x2a9720 <= 2097151) {
              _0x42dd80 += String.fromCharCode(240 | _0x2a9720 >>> 18 & 7, 128 | _0x2a9720 >>> 12 & 63, 128 | _0x2a9720 >>> 6 & 63, 128 | _0x2a9720 & 63);
            }
          }
        }
      }
    }
    return _0x42dd80;
  }
  function _0x372d0e(_0x24e489) {
    var _0x447318 = "";
    for (var _0x14eb02 = 0; _0x14eb02 < _0x24e489.length; _0x14eb02++) {
      _0x447318 += String.fromCharCode(_0x24e489.charCodeAt(_0x14eb02) & 255, _0x24e489.charCodeAt(_0x14eb02) >>> 8 & 255);
    }
    return _0x447318;
  }
  function _0x27ce57(_0x2e31bb) {
    var _0x1d0f75 = "";
    for (var _0xe85570 = 0; _0xe85570 < _0x2e31bb.length; _0xe85570++) {
      _0x1d0f75 += String.fromCharCode(_0x2e31bb.charCodeAt(_0xe85570) >>> 8 & 255, _0x2e31bb.charCodeAt(_0xe85570) & 255);
    }
    return _0x1d0f75;
  }
  function _0x83e60c(_0x12e628) {
    var _0x3e3a46 = Array(_0x12e628.length >> 2);
    for (var _0x3dfd36 = 0; _0x3dfd36 < _0x3e3a46.length; _0x3dfd36++) {
      _0x3e3a46[_0x3dfd36] = 0;
    }
    for (var _0x3dfd36 = 0; _0x3dfd36 < _0x12e628.length * 8; _0x3dfd36 += 8) {
      _0x3e3a46[_0x3dfd36 >> 5] |= (_0x12e628.charCodeAt(_0x3dfd36 / 8) & 255) << _0x3dfd36 % 32;
    }
    return _0x3e3a46;
  }
  function _0x1ed3b5(_0x18855c) {
    var _0x560e6b = "";
    for (var _0x213922 = 0; _0x213922 < _0x18855c.length * 32; _0x213922 += 8) {
      _0x560e6b += String.fromCharCode(_0x18855c[_0x213922 >> 5] >>> _0x213922 % 32 & 255);
    }
    return _0x560e6b;
  }
  function _0x15303f(_0x251167, _0xbf8976) {
    _0x251167[_0xbf8976 >> 5] |= 128 << _0xbf8976 % 32;
    _0x251167[(_0xbf8976 + 64 >>> 9 << 4) + 14] = _0xbf8976;
    var _0x3c608c = 1732584193,
      _0x516181 = -271733879,
      _0xa6b9a5 = -1732584194,
      _0x573fdb = 271733878;
    for (var _0x5b881e = 0; _0x5b881e < _0x251167.length; _0x5b881e += 16) {
      var _0x1c761e = _0x3c608c;
      var _0x356d41 = _0x516181;
      var _0x4785b4 = _0xa6b9a5;
      var _0x3ff934 = _0x573fdb;
      _0x3c608c = _0x5c397d(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 0], 7, -680876936);
      _0x573fdb = _0x5c397d(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 1], 12, -389564586);
      _0xa6b9a5 = _0x5c397d(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 2], 17, 606105819);
      _0x516181 = _0x5c397d(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 3], 22, -1044525330);
      _0x3c608c = _0x5c397d(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 4], 7, -176418897);
      _0x573fdb = _0x5c397d(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 5], 12, 1200080426);
      _0xa6b9a5 = _0x5c397d(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 6], 17, -1473231341);
      _0x516181 = _0x5c397d(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 7], 22, -45705983);
      _0x3c608c = _0x5c397d(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 8], 7, 1770035416);
      _0x573fdb = _0x5c397d(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 9], 12, -1958414417);
      _0xa6b9a5 = _0x5c397d(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 10], 17, -42063);
      _0x516181 = _0x5c397d(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 11], 22, -1990404162);
      _0x3c608c = _0x5c397d(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 12], 7, 1804603682);
      _0x573fdb = _0x5c397d(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 13], 12, -40341101);
      _0xa6b9a5 = _0x5c397d(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 14], 17, -1502002290);
      _0x516181 = _0x5c397d(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 15], 22, 1236535329);
      _0x3c608c = _0x169cb8(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 1], 5, -165796510);
      _0x573fdb = _0x169cb8(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 6], 9, -1069501632);
      _0xa6b9a5 = _0x169cb8(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 11], 14, 643717713);
      _0x516181 = _0x169cb8(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 0], 20, -373897302);
      _0x3c608c = _0x169cb8(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 5], 5, -701558691);
      _0x573fdb = _0x169cb8(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 10], 9, 38016083);
      _0xa6b9a5 = _0x169cb8(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 15], 14, -660478335);
      _0x516181 = _0x169cb8(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 4], 20, -405537848);
      _0x3c608c = _0x169cb8(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 9], 5, 568446438);
      _0x573fdb = _0x169cb8(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 14], 9, -1019803690);
      _0xa6b9a5 = _0x169cb8(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 3], 14, -187363961);
      _0x516181 = _0x169cb8(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 8], 20, 1163531501);
      _0x3c608c = _0x169cb8(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 13], 5, -1444681467);
      _0x573fdb = _0x169cb8(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 2], 9, -51403784);
      _0xa6b9a5 = _0x169cb8(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 7], 14, 1735328473);
      _0x516181 = _0x169cb8(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 12], 20, -1926607734);
      _0x3c608c = _0x221588(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 5], 4, -378558);
      _0x573fdb = _0x221588(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 8], 11, -2022574463);
      _0xa6b9a5 = _0x221588(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 11], 16, 1839030562);
      _0x516181 = _0x221588(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 14], 23, -35309556);
      _0x3c608c = _0x221588(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 1], 4, -1530992060);
      _0x573fdb = _0x221588(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 4], 11, 1272893353);
      _0xa6b9a5 = _0x221588(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 7], 16, -155497632);
      _0x516181 = _0x221588(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 10], 23, -1094730640);
      _0x3c608c = _0x221588(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 13], 4, 681279174);
      _0x573fdb = _0x221588(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 0], 11, -358537222);
      _0xa6b9a5 = _0x221588(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 3], 16, -722521979);
      _0x516181 = _0x221588(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 6], 23, 76029189);
      _0x3c608c = _0x221588(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 9], 4, -640364487);
      _0x573fdb = _0x221588(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 12], 11, -421815835);
      _0xa6b9a5 = _0x221588(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 15], 16, 530742520);
      _0x516181 = _0x221588(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 2], 23, -995338651);
      _0x3c608c = _0x32ee5b(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 0], 6, -198630844);
      _0x573fdb = _0x32ee5b(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 7], 10, 1126891415);
      _0xa6b9a5 = _0x32ee5b(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 14], 15, -1416354905);
      _0x516181 = _0x32ee5b(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 5], 21, -57434055);
      _0x3c608c = _0x32ee5b(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 12], 6, 1700485571);
      _0x573fdb = _0x32ee5b(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 3], 10, -1894986606);
      _0xa6b9a5 = _0x32ee5b(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 10], 15, -1051523);
      _0x516181 = _0x32ee5b(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 1], 21, -2054922799);
      _0x3c608c = _0x32ee5b(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 8], 6, 1873313359);
      _0x573fdb = _0x32ee5b(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 15], 10, -30611744);
      _0xa6b9a5 = _0x32ee5b(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 6], 15, -1560198380);
      _0x516181 = _0x32ee5b(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 13], 21, 1309151649);
      _0x3c608c = _0x32ee5b(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb, _0x251167[_0x5b881e + 4], 6, -145523070);
      _0x573fdb = _0x32ee5b(_0x573fdb, _0x3c608c, _0x516181, _0xa6b9a5, _0x251167[_0x5b881e + 11], 10, -1120210379);
      _0xa6b9a5 = _0x32ee5b(_0xa6b9a5, _0x573fdb, _0x3c608c, _0x516181, _0x251167[_0x5b881e + 2], 15, 718787259);
      _0x516181 = _0x32ee5b(_0x516181, _0xa6b9a5, _0x573fdb, _0x3c608c, _0x251167[_0x5b881e + 9], 21, -343485551);
      _0x3c608c = _0x40fe85(_0x3c608c, _0x1c761e);
      _0x516181 = _0x40fe85(_0x516181, _0x356d41);
      _0xa6b9a5 = _0x40fe85(_0xa6b9a5, _0x4785b4);
      _0x573fdb = _0x40fe85(_0x573fdb, _0x3ff934);
    }
    return Array(_0x3c608c, _0x516181, _0xa6b9a5, _0x573fdb);
  }
  function _0x41a57d(_0x39da62, _0xf121f3, _0x4dd9a4, _0x5d10b4, _0xdd0325, _0x5e9678) {
    return _0x40fe85(_0x3bcbcb(_0x40fe85(_0x40fe85(_0xf121f3, _0x39da62), _0x40fe85(_0x5d10b4, _0x5e9678)), _0xdd0325), _0x4dd9a4);
  }
  function _0x5c397d(_0x10e4c1, _0x13fb0d, _0x2667c4, _0x48cedf, _0x376d25, _0x2c58e4, _0x4964da) {
    return _0x41a57d(_0x13fb0d & _0x2667c4 | ~_0x13fb0d & _0x48cedf, _0x10e4c1, _0x13fb0d, _0x376d25, _0x2c58e4, _0x4964da);
  }
  function _0x169cb8(_0x14612a, _0x1519f1, _0x27ffee, _0x31e011, _0x376af1, _0x498cbb, _0x21150a) {
    return _0x41a57d(_0x1519f1 & _0x31e011 | _0x27ffee & ~_0x31e011, _0x14612a, _0x1519f1, _0x376af1, _0x498cbb, _0x21150a);
  }
  function _0x221588(_0x107ed1, _0x505e8f, _0xeab74c, _0x1b6734, _0x57cd85, _0x22ed77, _0x3b091e) {
    return _0x41a57d(_0x505e8f ^ _0xeab74c ^ _0x1b6734, _0x107ed1, _0x505e8f, _0x57cd85, _0x22ed77, _0x3b091e);
  }
  function _0x32ee5b(_0x508aa8, _0x11d666, _0x662394, _0x4712e7, _0x3e4e81, _0x5cde12, _0x4807cf) {
    return _0x41a57d(_0x662394 ^ (_0x11d666 | ~_0x4712e7), _0x508aa8, _0x11d666, _0x3e4e81, _0x5cde12, _0x4807cf);
  }
  function _0x40fe85(_0x276f0f, _0x1cffa7) {
    var _0x380dc8 = (_0x276f0f & 65535) + (_0x1cffa7 & 65535),
      _0x340dbb = (_0x276f0f >> 16) + (_0x1cffa7 >> 16) + (_0x380dc8 >> 16);
    return _0x340dbb << 16 | _0x380dc8 & 65535;
  }
  function _0x3bcbcb(_0x41dcf0, _0x6e049e) {
    return _0x41dcf0 << _0x6e049e | _0x41dcf0 >>> 32 - _0x6e049e;
  }
  return _0x396175(_0x18b62a);
}
if (iframe == "no") {
  var jssdk = data.jssdk,
    share_switch = "1";
  wx.config({
    debug: false,
    appId: jssdk.appId,
    timestamp: jssdk.timestamp,
    nonceStr: jssdk.nonceStr,
    signature: jssdk.signature,
    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "hideAllNonBaseMenuItem"]
  });
  wx.ready(function () {
    var _0x316163 = {
      imgUrl: jssdk.imgUrl,
      link: jssdk.url,
      desc: jssdk.desc,
      title: jssdk.title,
      success: function () {}
    };
    share_switch == "0" ? wx.hideAllNonBaseMenuItem() : (wx.updateAppMessageShareData(_0x316163), wx.updateTimelineShareData(_0x316163));
  });
  wx.error(function (_0x2d5c4c) {
    console.log("config信息验证失败：" + _0x2d5c4c);
  });
}
var music1 = document.getElementById("music1");
document.addEventListener("DOMContentLoaded", function () {
  function _0x1a8054() {
    music1.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
      music1.play();
    }, false);
  }
  _0x1a8054();
});
$("html").one("touchstart", function () {
  music1.play();
});
window.onload = function () {
  $("body").addClass("loaded");
  $("#loader-wrapper .load_title").remove();
  $("#music_play").click(function () {
    if (music1.paused) {
      music1.play();
      $(this).attr("src", "index/common/images/yinyue.png");
    } else {
      music1.pause();
      $(this).attr("src", "index/common/images/yinyue1.png");
    }
  });
  if (danmu_set.danmu_open == 1) {
    danmu();
    setInterval(function () {
      danmu();
    }, danmu_set.danmu_time * 1000);
  } else {
    danmu_set.danmu_open == 2 && $(".scrollDiv").Scroll({
      line: 1,
      speed: 500,
      timer: 2000,
      up: "but_up",
      down: "but_down"
    });
  }
};
function danmu() {
  $(".danmu-1").css("animation", "");
  $(".danmu-1").each(function (_0x57fe9c, _0xfa3b2a) {
    var _0x560bf6 = $(_0xfa3b2a).width();
    var _0x1f5878 = Math.random() * danmu_set.danmu_height + "rem";
    $(_0xfa3b2a).css({
      right: -(_0x560bf6 + 50),
      top: _0x1f5878
    });
    var _0x2255d9 = [9, 11, 13, 15, 17];
    var _0x5ed850 = Math.floor(Math.random() * 5);
    $(_0xfa3b2a).css({
      animation: "ani " + _0x2255d9[_0x5ed850] + "s linear " + _0x57fe9c * danmu_set.danmu_yanchi + "s 1",
      "-webkit-animation": "ani " + _0x2255d9[_0x5ed850] + "s linear " + _0x57fe9c * danmu_set.danmu_yanchi + "s 1"
    });
  });
}
danmu_set.danmu_open == 2 && function (_0x2ebea0) {
  _0x2ebea0.fn.extend({
    Scroll: function (_0x58b904, _0x277a17) {
      if (!_0x58b904) {
        var _0x58b904 = {};
      }
      var _0x466a2e = _0x2ebea0("#" + _0x58b904.up),
        _0xffa24c = _0x2ebea0("#" + _0x58b904.down),
        _0x1222d8,
        _0x2ed900 = this.eq(0).find("ul:first"),
        _0x7dd1bd = _0x2ed900.find("li:first").height(),
        _0x121bf8 = _0x58b904.line ? parseInt(_0x58b904.line, 10) : parseInt(this.height() / _0x7dd1bd, 10),
        _0x1f73d1 = _0x58b904.speed ? parseInt(_0x58b904.speed, 10) : 500;
      timer = _0x58b904.timer;
      if (_0x121bf8 == 0) {
        _0x121bf8 = 1;
      }
      var _0x3527f2 = 0 - _0x121bf8 * _0x7dd1bd,
        _0x397c2e = function () {
          _0x466a2e.unbind("click", _0x397c2e);
          _0x2ed900.animate({
            marginTop: _0x3527f2
          }, _0x1f73d1, function () {
            for (i = 1; i <= _0x121bf8; i++) {
              _0x2ed900.find("li:first").appendTo(_0x2ed900);
            }
            _0x2ed900.css({
              marginTop: 0
            });
            _0x466a2e.bind("click", _0x397c2e);
          });
        },
        _0x47c675 = function () {
          _0xffa24c.unbind("click", _0x47c675);
          for (i = 1; i <= _0x121bf8; i++) {
            _0x2ed900.find("li:last").show().prependTo(_0x2ed900);
          }
          _0x2ed900.css({
            marginTop: _0x3527f2
          });
          _0x2ed900.animate({
            marginTop: 0
          }, _0x1f73d1, function () {
            _0xffa24c.bind("click", _0x47c675);
          });
        },
        _0x252bdc = function () {
          if (timer) {
            _0x1222d8 = window.setInterval(_0x397c2e, timer);
          }
        },
        _0x333a1a = function () {
          if (timer) {
            window.clearInterval(_0x1222d8);
          }
        };
      _0x2ed900.hover(_0x333a1a, _0x252bdc).mouseout();
      _0x466a2e.css("cursor", "pointer").click(_0x397c2e).hover(_0x333a1a, _0x252bdc);
      _0xffa24c.css("cursor", "pointer").click(_0x47c675).hover(_0x333a1a, _0x252bdc);
    }
  });
}(jQuery);