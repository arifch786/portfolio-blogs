import * as fs from "node:fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let data1 = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${data1.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req);
  } else {
    res.status(200).json(["blogdata"]);
  }
}
