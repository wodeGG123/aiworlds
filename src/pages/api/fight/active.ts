import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawCookies = req.headers.cookie || "";

  try {
    const response = await axios({
      url: `https://iablikcamuku.sealoshzh.site/api/v1/user-lineup`,
      method: "get",
      headers: {
        Cookie: rawCookies,
        "Content-Type": "application/json",
      },
    });
    // 透传响应头和状态码
    res.status(response.status);
    Object.entries(response.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    res.json(response.data); // 关键：返回数据给客户端
  } catch (err) {
    console.log(err);

    res.status(500).send(err.response.data);
  }
}
