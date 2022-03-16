import katex from "katex";
import parse, { loadKatex } from "@rojer/katex-mini";
loadKatex(katex);
module.exports = (req, res) => {
  const { latex = "" } = req.query;
  res.json(
    parse(latex, {
      displayMode: true,
    })
  );
};
