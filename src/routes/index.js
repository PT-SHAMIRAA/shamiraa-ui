var nmasterRoutes = require("./nmaster");
var tokoRoutes = require("./toko");
var gudangPusatRoutes = require("./gudang-pusat");
var laporanRoutes = require("./laporan");
var publicRoutes = require("./public");
var authRoutes = require("./auth");
var merchandiserRoutes = require("./merchandiser");
var nmerchandiserRoutes = require("./nmerchandiser");
var finishingRoutes = require("./finishing");
var generalInventoryRoutes = require("./general-inventory");
var shamiraaRoutes = require("./shamiraa-report");

export default [].concat(
  nmasterRoutes,
  publicRoutes,
  gudangPusatRoutes,
  tokoRoutes,
  finishingRoutes,
  laporanRoutes,
  authRoutes,
  generalInventoryRoutes,
  shamiraaRoutes
);
