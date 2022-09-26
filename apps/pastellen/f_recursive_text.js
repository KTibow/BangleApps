const fontData = E.toString(
  require("heatshrink").decompress(
    atob(
      "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"
    )
  )
);
exports.add = function (graphics) {
  graphics.prototype.setFontRecursiveText = function (scale) {
    // Actual height 25 (24 - 0)
    this.setFontCustom(
      fontData,
      32,
      atob(
        "CAkPDw8PDwkKCg8PCQsJDw8PDw8PDw8PDw8JCQ8PDw8aEA8PEA4OEBANDQ8OFBAQDxAPDw8QEBgPEA8LDwsPDwkPDw0PDwoPDwkJDwkVDw8PDwsODQ8PFA8PDg4IDg8A"
      ),
      25 + (scale << 8) + (1 << 16)
    );
    return this;
  };
};
