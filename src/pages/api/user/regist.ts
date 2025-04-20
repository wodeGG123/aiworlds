import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await axios({
      url: "https://iablikcamuku.sealoshzh.site/api/v1/auth/register",
      method: "post",
      data: req.body,
    });
    console.log(result);
    res.status(200).send(result.data);
  } catch (err) {
    console.log(err);

    res.status(500).send(err.response.data);
  }
}
