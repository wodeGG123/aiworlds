import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const rawCookies = req.headers.cookie || "";

    const response = await axios({
      url: "https://iablikcamuku.sealoshzh.site/api/v1/user-cards",
      method: "get",
      data: {
        page: 1,
        page_size: 10,
        order_by: "created_at",
        ascending: false,
      },
      headers: {
        Cookie: rawCookies,
        "Content-Type": "application/json",
      },
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    console.log(err);

    res.status(500).send(err.response.data);
  }
}
